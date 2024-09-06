'use client'
import React from 'react';
import Image from 'next/image';
import {useRouter} from "next/navigation";
import LoginMacbook from "../../../../public/assets/img/macbook.svg";
import LoginLogoSmall from "../../../../public/assets/img/logo-small.svg";


const Login = () => {
  const router = useRouter();

  return (
    <div className='container-fluid m-0 vh-100 position-relative p-0'>
      <div className='row newWidth h-100 w-75 m-0 p-0'>
        <div className='col-md-7 d-flex flex-column align-items-start text-white p-5 gap w-75 newWidth' style={{backgroundColor: "#1D202C"}} >
          <div className="logo mb-4">
            <Image src={LoginLogoSmall} alt='Queue Master Logo' />
          </div>
          <div className='row w-75 form'>
            <p className='fs-6'>SIGN IN</p>
            <h1 className="mb-5 fw-bold header">Log in your account.</h1>
            <form className="d-flex flex-column gap-2">
              <div className='form-group w-100 mb-3'>
                <input type="email" placeholder='Email' className="form-control input-height" />
              </div>
              <div className='form-group w-100'>
                <input type="password" placeholder='Password' className="form-control input-height"  />
              </div>
              <div className="form-group mb-3 d-flex justify-content-end">
                <a href="#" className="text-white text-decoration-none fs-6">Forgot Password</a>
              </div>
              <button onClick={() => router.push("/terminal")} className="btn btn-warning btn-block w-100 get-started">Log In</button>
              <div className="text-center mt-3 align-self-center">
                <a href="#" className="text-white text-decoration-none fs-6">Dont't have an account? <span className='text-decoration-underline'  onClick={() => router.push("/signup")}>Sign Up</span></a>
              </div>
            </form>
          </div>
        </div>
        <div className="left col-md-5 d-none d-md-flex align-items-center justify-content-center position-absolute bottom-50 end-50 start-50 top-50 p-0">
          <Image src={LoginMacbook} alt='Macbook Picture'  width={900}  />
        </div>
      </div>
    </div>
  )
}

export default Login;