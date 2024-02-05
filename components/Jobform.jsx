import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import * as Yup from 'yup';

const jobformSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('add description'),
  money: Yup.number().required('add rupees per day'),
  skills: Yup.string().required('add skills')

  //  createdate:Yup.date().required('date of update')
});



const Jobform = () => {
  const navigate = useNavigate();
  const jobForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      skills: '',
      money: '',
      createdate: ''
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/job/add', {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": 'application/json' }
      });
      console.log(res.status);

      if (res.status === 200) {
        toast.success('job added successfully!')
        navigate('/browsejobs');
      }
      else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Email or Password is incorrect'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      }


    },
    // error
    validationSchema: jobformSchema
    // why u to use is
  });
  return (
    <div className=' py-5' >
      <div className="col-md-4 m-auto">
        <div className="card shadow">
          <div className="card-body" >
            <h1 className='fw-bold text-center'>
              job-form
            </h1>
            <div >
              <form onSubmit={jobForm.handleSubmit}>
                <label htmlFor="title" className='fw-bold '>title</label>
                <span style={{ color: 'red', fontSize: 14, marginLeft: 10 }}>{jobForm.touched.title && jobForm.errors.title}</span>
                <input type="text" placeholder='title of job' onChange={jobForm.handleChange} value={jobForm.values.title} name='title' className='form-control mb-2' />
                <label htmlFor="description" className='fw-bold '>description</label>
                <span style={{ color: 'red', fontSize: 14, marginLeft: 10 }}>{jobForm.touched.description && jobForm.errors.description}</span>
                <input type="text" placeholder='description' className='form-control mb-2' onChange={jobForm.handleChange} value={jobForm.values.description} name='description' />
                <label htmlFor="skills" className='fw-bold '>skills</label>
                <span style={{ color: 'red', fontSize: 14, marginLeft: 10 }}>{jobForm.touched.skills && jobForm.errors.skills}</span>
                <input type="text" placeholder='skiils you want' className='form-control mb-2' onChange={jobForm.handleChange} value={jobForm.values.skills} name='skills' />
                <label htmlFor="money" className='fw-bold '>money</label>
                <span style={{ color: 'red', fontSize: 14, marginLeft: 10 }}>{jobForm.touched.money && jobForm.errors.money}</span>
                <input type="number" placeholder="hiring amount" className='form-control mb-2' value={jobForm.values.money} onChange={jobForm.handleChange} name="money" />
                <label htmlFor="createdAt" className='fw-bold '>createdate</label>
                <input type="date" placeholder='date' className='form-control mb-2' />
                <div className="text-center mt-4 ">
                  <button type='submit' className="btn btn-primary  w-100 ">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Jobform 