import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';  // Import only react-toastify
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for react-toastify

const Login = () => {
    const navigate=useNavigate();
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
   const baseUrl=process.env.REACT_APP_BASE_URL || '/';
   const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  //  console.log("backend base url+++",backendBaseUrl);
  //  console.log("login page baseUrl",baseUrl);
   const handleSubmit=async (e)=>{
         e.preventDefault();
         if(!email|| !password){
            toast.error("Email and password are required");
         }
         const data={
            email:email,
            password:password
         }
        try {
               const result = await axios.post(`${backendBaseUrl}admin/loginSubmit`, data);
               if(result.data.status==200){
                 toast.success("Login successful");// Trigger success toast
                  navigate("/admin/dashboard",{state:{loginSuccessfullMessage:"Login Successfully"}})
               } else{
                 console.log(result.data.message);
                toast.error(result.data.message);
               }
        } catch (err) {
          console.log(err.message);
          toast.error("An error occurred. Please try again later");
        }
   }
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img
                className="img-fluid"
                src={`${baseUrl}AdminPortal/assets/img/logo-white.png`}
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                {/* Update form action and method for React */}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Login
                    </button>
                  </div>
                </form>

                <div className="text-center forgotpass">
                  <a href={`${baseUrl}admin/forgot`}>Forgot Password?</a>
                </div>

                {/* If you want to add social login, uncomment the below */}
                {/* <div className="social-login">
                  <span>Login with</span>
                  <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="google"><i className="fab fa-google"></i></a>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
      < ToastContainer/>
    </div>
  );
};

export default Login;
