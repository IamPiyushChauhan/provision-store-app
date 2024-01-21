import React,{ useState,useEffect,useContext } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { LoginContext } from '../App';

function ProductPage() {
  const [isGrid, setIsGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchValue,setSearchValue] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const loginContext = useContext(LoginContext)

  useEffect(()=>{
    if(loginContext.isLogIn){
      axios.get('https://api.kalpav.com/api/v1/product/category/retail')
        .then(res => {
          const {response} =  res.data;
          console.log(response);
          setFilteredProduct(response);
          setProducts(response);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },[])

  useEffect(()=>{
    
    const regexEmptyStrOrOnlySpace = /^\s*$/

    if(regexEmptyStrOrOnlySpace.test(searchValue)){
      setFilteredProduct(products)
    }else{
      const filtered = products.filter(item => item.productCategory.productCategoryName.toLowerCase().includes(searchValue.toLowerCase()));
      console.log("filtered")
      console.log(filtered)
      setFilteredProduct(filtered)
    }
  },[searchValue])

  
  
  return (
    <React.Fragment >
      {loginContext.isLogIn ? 
      <div>
        <div className='product-search'>
        <div className='input-box'>
        <img
          src="search.png"  
          alt="Search Icon"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
         <input value={searchValue} onChange={(e => setSearchValue(e.target.value))} placeholder='Search Product'/>
        </div>

        <button onClick={()=>{setIsGrid(!isGrid)}}>
      {isGrid ? (
        <img
          src="menu.png"  
          alt="Grid Icon"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
      ) : (
        <img
          src="row.png"  
          alt="Flex Icon"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
      )}
      </button>

        </div>
        
      
      
      <div className={isGrid? 'grid-container':''}>

      {
        filteredProduct.length > 0?
          filteredProduct.map(({productCategory})=>(<ProductCard  
          key={productCategory.productCategoryId} 
          imageUrl={productCategory.productCategoryImage}
          productName={productCategory.productCategoryName}
          isGrid={isGrid} />))
          :
          <h1>No Product Found</h1>
      }
     </div>
    </div>
      :<div>Please Login to See our Products</div>}
    
    </React.Fragment>
  );
}

export default ProductPage;
