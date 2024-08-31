import React from 'react'
import './CSS/loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-feilds">
          <input type="text" placeholder='Enter Your name' />
          <input type="email" placeholder='Enter Your Email' />
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Submit</button>
        <p className='login-signup-login'>Alrady have an account? <span>Login here</span></p>
        <div className="login-sign-aggree">
          <input type="checkbox" name='' id='' />
          <p>by continuing, i aggree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup