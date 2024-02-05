import * as Yup from 'yup';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useFormik } from 'formik';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
});

const Login = () => {
  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      // add code here to connect to backend
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type' : 'application/json' }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success'
        })
        navigate('/jobform');

      }else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Login Failed',
          text : 'Email or Password is incorrect'
        })
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Something went wrong'
        })
      }

    },

    validationSchema: loginSchema
  });

  return (
    <div>
      <section className="vh-100 p-5">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form  onSubmit={loginForm.handleSubmit}>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button type="button" className="btn btn-primary btn-floating mx-1 my-icon">
                <i className="fab fa-facebook-f " />
              </button>
              <button type="button" className="btn btn-primary btn-floating mx-1 my-icon">
                <i className="fab fa-twitter" />
              </button>
              <button type="button" className="btn btn-primary btn-floating mx-1 my-icon">
                <i className="fab fa-linkedin-in" />
              </button>
            </div>
            <div className="d-flex align-items-center my-4">
              <hr className='w-50 myhr ' />
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
              <hr className='w-50  myhr' />
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
            <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{loginForm.touched.email && loginForm.errors.email}</span>
              <input
                type="email"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
                onChange={loginForm.handleChange} value={loginForm.values.email} name="email"
              />
            
            </div>
            {/* Password input */}
            <div className="form-outline mb-3">
            <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{loginForm.touched.password && loginForm.errors.password}</span>
              <input
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
                onChange={loginForm.handleChange} value={loginForm.values.password} name="password" 
              />
              
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {/* Checkbox */}
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  defaultValue=""
                  id="form2Example3"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg mybtn1 w-100"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              >
                Login
              </button>
              <p className="small fw-bold mt-4 pt-1 mb-4 d-flex">
                Don't have an account? 
               <NavLink className="navlink  fw-bold mb-2 px-2  " to="/signup">signup</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      {/* Copyright */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
      {/* Copyright */}
      {/* Right */}
      <div>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-twitter" />
        </a>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-google" />
        </a>
        <a href="#!" className="text-white">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      {/* Right */}
    </div>
  </section>
  </div>
  )
}

export default Login