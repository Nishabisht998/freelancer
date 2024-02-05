import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BrowseJobs = () => {

    const [jobList, setJobList] = useState([]);

    const fetchJobData = async () => {
        const res = await fetch('http://localhost:5000/job/getall');
        console.log(res.status);

        const data = await res.json();
        console.log(data);

        setJobList(data);
    };

    useEffect(() => {
        fetchJobData();
    }, []);

    const displayJobsData = () => {
        return jobList.map((job) => (
            <div className='col-md-3 mb-4 my-3'style={{width:250}}>
                <div className='card bg-info'  >
                 

                    <div className="card-body " >

                        <h3 className='card-title'>{job.title}</h3>
                        <p  className='card-text my-2'>Skills Required : {job.skills}</p>
                        <Link className='btn btn-primary '>View More</Link>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <header>

            </header>
            <div className='container'>
                <div className='row'>
                    {displayJobsData()}
                </div>
            </div>
        </div>
    )
}

export default BrowseJobs