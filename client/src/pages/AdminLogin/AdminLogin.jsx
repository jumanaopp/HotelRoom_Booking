import React from 'react'
import './Adminlogin.css'
export default function AdminLogin() {
  return (
    <>
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo"></h3>
        <span className="loginDesc">
            </span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" name="email" className="loginInput" />
          <input placeholder="Password" name="password"  className="loginInput" />
          <button className="loginButton"><a href={"/userindex2"}>Log In</a></button>
          <span className="loginForgot">Forgot Password?</span>
          <button className="loginRegisterButton">
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
