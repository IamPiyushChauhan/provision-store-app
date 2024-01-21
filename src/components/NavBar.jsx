// Navbar.js
import React,{useContext,useState} from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../App';

function NavBar() {
    const loginContext = useContext(LoginContext)
    const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar">
    <div className="brand-title">Provision Store</div>
    <a href="#" className="toggle-button" onClick={()=>{setIsActive(!isActive)}}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </a>
   {isActive}
    <div className={`navbar-links ${isActive ? 'active' : ''}`} >
        {
            loginContext.isLogIn ? <ul>
            <li><NavLink style={({isActive})=> {return{color: isActive? "var(--accent-color)": "var(--text-color)" , textDecoration: 'none' , marginRight: "1rem" } }}  to="/products">Product</NavLink></li>
            <li><NavLink style={({isActive})=> {return{color: isActive? "var(--accent-color)": "var(--text-color)" , textDecoration: 'none' , marginRight: "1rem" } }} to="/about">About</NavLink></li>
            <li><NavLink style={({isActive})=> {return{color: isActive? "var(--accent-color)": "var(--text-color)" , textDecoration: 'none' , marginRight: "1rem" } }}  to="/login">LogOut</NavLink></li>
          </ul>: <ul>
            <li><NavLink style={({isActive})=> {return{color: isActive? "var(--accent-color)": "var(--text-color)" , textDecoration: 'none' , marginRight: "1rem" } }} to="/about">About</NavLink></li>
            <li><NavLink style={({isActive})=> {return{color: isActive? "var(--accent-color)": "var(--text-color)" , textDecoration: 'none' , marginRight: "1rem" } }} to="/login">LogIn</NavLink></li>
          </ul>
        }
      
    </div>
    
  </nav>
  );
};

export default NavBar;

