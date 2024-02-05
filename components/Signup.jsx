import * as Yup from 'yup';
import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
});
const Signup = () => {
  const navigate = useNavigate();
  

  const signupForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type' : 'application/json' }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Signup Success',
          text : 'Login to Continue'
        });
        navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Something went wrong'
        })
      }
        // add code here to connect to backend
    },

    validationSchema: signupSchema
  });
  return (
    <div>
    
      <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <h2 className="mb-3 fw-bold" style={{color:'grey'}}>Sign in</h2>
                  <form onSubmit={signupForm.handleSubmit}>
                  <div className="form-outline mb-4">
                  <span style={{color: 'red', fontSize: 15, marginLeft:-290}} >{signupForm.touched.email && signupForm.errors.email}</span>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder='email'
                      onChange={signupForm.handleChange} value={signupForm.values.email} name="email"
                    />
                  
                  </div>
                  <div className="form-outline mb-4">
                  <span style={{color: 'red', fontSize: 15, marginLeft: -200}}>{signupForm.touched.password && signupForm.errors.password}</span>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder='password'
                      onChange={signupForm.handleChange} value={signupForm.values.password} name="password"
                    />
                   
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form1Example3"
                    />
                    <label className="form-check-label px-2" htmlFor="form1Example3">
                    
                      Remember password
                    </label>
                  </div>
                  <button className="btn btn-primary btn-lg btn-block w-100 mybtn" type="submit">
                    Login
                  </button>
                  <hr className="my-4 " />
                  <button
                    className="btn btn-lg btn-block btn-primary w-100 mybtn  "
                    style={{ backgroundColor: "#dd4b39" }}
                    type="submit"
                  >
                    <i className="fab fa-google me-2  " /> Sign in with google
                  </button>
                  <button
                    className="btn btn-lg btn-block btn-primary mb-2 w-100 my-2 mybtn"
                    style={{ backgroundColor: "#3b5998" }}
                    type="submit"
                  >
                    <i className="fab fa-facebook-f me-2" />
                    Sign in with facebook
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signup