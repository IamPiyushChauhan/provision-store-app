import React, { useState,useContext, useEffect } from 'react';
import FormData from 'form-data';
import { useNavigate } from 'react-router-dom'
import { SHA256, enc } from 'crypto-js';
import axios from 'axios';
import { LoginContext } from '../App';


function loginCallFormData(email,password){
  const hashedPassword  = SHA256(password).toString(enc.Hex);
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', hashedPassword);
  formData.append('grant_type', 'password');

  return formData
}


function LoginPage() {
  const loginContext = useContext(LoginContext)

  useEffect(()=>{
    if(loginContext.isLogIn){
      loginContext.setIsLogIn(false);
    }
  },[])
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [errorInLogIn,setErrorInLogIn] = useState(false)
    const [passwordView,setPasswordView]  = useState(false)
    
    const navigate = useNavigate();
    
    const vaidateForm =()=> {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(email);
      
      if(isValidEmail){
        setEmailError("")
      }else{
        setEmailError("Enter Valid Email")
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
      const isValidPassword = passwordRegex.test(password);

      if(isValidPassword){
        setPasswordError("")
      }else{
        setPasswordError("Enter Passsword of atlest 8 character and one capital letter must, one small letter must, numbers are allowed and one special char must")
      }
        return isValidEmail &&isValidPassword
      
    }
    
    const handleLogin = () =>{
      

      if(vaidateForm()){

        const formData = loginCallFormData(email,password)
        const headers = {
          'Authorization': 'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg=='
        };
        axios.post('https://apiv2stg.promilo.com/user/oauth/token', formData, { headers })
      .then(response => {
        console.log('POST request successful:', response.data);
        loginContext.setIsLogIn(true)
        navigate('/products')
      })
      .catch(error => {
        console.error('Error making POST request:', error);
        loginContext.setIsLogIn(false)
        setErrorInLogIn(true)
      })
    }
    }
      

  return (
    <div >
       <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        {
          emailError.length>0? <label style={{color:"var(--error-color)",fontSize: "0.5em"}}>{emailError}</label>:<></>
        }
        <div className='input-box'>
        <img
          src="email.png"  
          alt="Email Icon"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
          <input type="email" value={email}  placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className="input-container">
        
        {
          passwordError.length>0? <label style={{color:"var(--error-color)", fontSize: "0.5em"}}>{passwordError}</label>:<></>
        }
        <div className='input-box'>
          <div onClick={()=>{setPasswordView(!passwordView)}}>
            <img
              src= {passwordView?"eye.png":"hidden.png"}
              alt= {passwordView?"Hide Icon":"Eye Icon"}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
          </div>
        <input type={passwordView?"text":"password"} placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
    <div style={{color:"var(--error-color)"}}>{errorInLogIn?"Error In Login":""}</div>
    </div>
  );
}

export default LoginPage;
