import React,{useState} from 'react';

function ProductCard({imageUrl,productName,isGrid}) {
  


  return (

      <div className={isGrid?'grid-card':'flex-card'}>
        <img src={imageUrl}/>
        <h3>{productName}</h3>
      </div>
    
    
  );
}

export default ProductCard;
