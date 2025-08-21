import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/user_icon.jpg';
import email_icon from '../Assets/email_icon.jpeg';
import password_icon from '../Assets/password_icoon.jpeg';


const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt='User Icon' className='icon'/>
            <input type='text' placeholder='Name' />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt='Email Icon' className='icon'/>
          <input type='email' placeholder='Email ID' />
        </div>

        <div className="input">
          <img src={password_icon} alt='Password Icon' className='icon'/>
          <input type='password' placeholder='Password' />
        </div>
      </div>

      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div 
          className={action === "Sign Up" ? "submit gray" : "submit"} 
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div 
          className={action === "Login" ? "submit gray" : "submit"} 
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
