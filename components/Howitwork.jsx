import React from 'react'

const Howitwork = () => {
  return (
    <div>
      <header >
        <div className="how-image" style={{ backgroundImage: "URL('https://visme.co/blog/wp-content/uploads/2020/02/header.gif')" }}>
          <div className="col-md-4 mx-5 text-white    ">
            <h1 className='fw-bold display-5'>How can freelancers help your business?</h1>
            <p className=' how-para mt-5 '>The possibilities are endless. We have expert freelancers who work in every technical, professional, and creative field imaginable.</p>

            <button className='btn btn1 px-3'> Post a Project</button>

          </div>

        </div>
        <div className="how-text mx-4">

          <div className="card-body">
            <h2 className='fw-bold my-5'>Choose from endless possibilities?</h2>
            <h5 className='mb-5'>Get anything done, exactly how you want it. Turn that spark of an idea into reality.</h5>
            <div className=" mt-4 ">
              <div className="row">
                <div className="col-md-4">
                  <div className="how-icon" style={{ backgroundImage: 'URL("https://www.f-cdn.com/assets/main/en/assets/illustrations/project/post-a-project.svg")' }}>

                  </div>
                  <div className="card-body">
                    <h5 className='fw-bold'> Any sized project</h5>
                    <h6>Get any job done. From small one-off tasks to large, multi-stage projects.</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="how-icon" style={{ backgroundImage: 'URL("https://www.f-cdn.com/assets/main/en/assets/illustrations/payment/make-money.svg")' }}>

                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold">
                      Flexible payment terms
                    </h5>
                    <h6>

                      Pay your freelancers a fixed price or by the hour. All secured by the Milestone Payments system.
                    </h6>

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="how-icon" style={{ backgroundImage: 'URL("https://www.f-cdn.com/assets/main/en/assets/illustrations/skills/skills.svg")' }}>

                  </div>
                  <div className="card-body ">
                    <h5 className="fw-bold">
                      Diverse talent

                    </h5>
                    <h6>
                      Choose from expert freelancers in over 1800 skill sets, from all around the globe.
                    </h6>

                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <hr className='w-75 mx-auto' />

        <div className="how-body d-flex ">
          <img className='how-down-image' src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/how-it-works.jpg?image-optimizer=force&format=webply&width=1296 1x, https://www.f-cdn.com/assets/main/en/assets/how-it-works/how-it-works.jpg?image-optimizer=force&format=webply&width=2160 2x" />
          <div className="how-left">
            <div className=" mx-5 p-4">
             
                <h2 className='my-3 fw-bold'>
                  How does it work?
                </h2>
                <h5 className='my-3 fw-bold'>
                  1. Post a project or contest
                </h5>
                <h6 className='my-3 px-3'>
                  Simply post a project or contest for what you need done and receive competitive bids from freelancers within minutes.

                </h6>

                <h5 className='my-3 fw-bold'>
                2. Choose the perfect freelancer
                </h5>
                <h6 className='my-3 px-3'>
                Browse freelancer profiles. Chat in real-time. Compare proposals and select the best one. Award your project and your freelancer starts work.

                </h6>
                <h5 className='my-3 fw-bold'>
                3. Pay when you’re satisfied
                </h5>
                <h6 className='my-3 px-3'>
                Pay securely using our Milestone Payment system. Release payments when it has been completed and you're 100% satisfied.
                </h6>
                <button className='btn btn1 px-3'> Post a Project</button>

                </div>
          </div>
        </div>
        <hr className='w-75 mx-auto' />
<div className="section mx-4 d-flex">
 <div className="section">
 <h1 className='fw-bold my-3'>
  Be in control. Keep in contact.
  </h1>
  <h5 className='mb-5 py-3'>Use our collaboration tools to work efficiently with your freelancer. Share files, chat in real-time, monitor progress, and so much more.</h5>
  <div className="row py-4">
    <div className="col-md-6">
      <div className="how-icon" style={{backgroundImage:'URL("https://www.f-cdn.com/assets/main/en/assets/illustrations/comms/live-chat.svg")'}}>

      </div>
      <div className="card-body">
                    <h5 className="fw-bold">
                    Live chat
                    </h5>
                    <h6>
                    You can live chat with your freelancers to ask questions, share feedback and get constant updates on the progress of your work.
                    
                    </h6>

                  </div>
    </div>
    <div className="col-md-6">
      <div className="how-icon" style={{backgroundImage:'URL("https://www.f-cdn.com/assets/main/en/assets/illustrations/mobile/mobile-verify.svg")'}}>

      </div>
      <div className="card-body">
                    <h5 className="fw-bold">
                    Mobile App
                    </h5>
                    <h6>
                    Manage your project at the touch of your fingertips. The mobile app makes on-the-go collaboration a breeze.
                    </h6>

                  </div>
    </div>
  </div>
 </div>
 <img className='how-down-image'  src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/be-in-control.jpg?image-optimizer=force&format=webply&width=1296 1x, https://www.f-cdn.com/assets/main/en/assets/how-it-works/be-in-control.jpg?image-optimizer=force&format=webply&width=2160 2x" alt="" />
</div>

      </header>
      <div className="bg-dark text-white p-5">
        <h1>So what are you waiting for?</h1>
        <h5>
        Post a project today and get bids from talented freelancers.
        </h5>
        <button className='btn btn1 px-4'> Post a Project</button>


      </div>



    </div>
  )
}

export default Howitwork