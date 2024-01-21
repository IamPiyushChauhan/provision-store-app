import './App.css';
import LoginPage from './Pages/LoginPage';
import ProductPage from './Pages/ProductPage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import MainPage from './Pages/MainPage';
import React,{ useState } from 'react';

export const  LoginContext = React.createContext();
function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  
  return (
    <div className="App">
    <LoginContext.Provider value={{isLogIn: isLogIn,setIsLogIn: setIsLogIn}}>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Navigate replace to="/login" />}/>
     <Route path='/' element={<MainPage />}>
       <Route path='login' element={<LoginPage isLogIn={isLogIn} />} />
       <Route path='products' element={<ProductPage />} />
       <Route path='about' element={<AboutPage />} />
     </Route>
     </Routes>
     </BrowserRouter>
     </LoginContext.Provider>
     
    </div>
  );
}

export default App;
