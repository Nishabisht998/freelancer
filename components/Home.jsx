// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import React from 'react'

const Home = () => {
  return (
    <div>
      <header>
        <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='home-image' style={{ backgroundImage: "URL('https://cdn.dribbble.com/users/410907/screenshots/2044702/wasting_time.gif')" }}>
            <h1 className=' box'>hiring skilled freelancer for an job, online </h1>

            <ul className='box'>
              <li>World's largest freelance marketplace</li>
              <li>Any job you can possibly think of</li>
              <li>Save up to 90% & get quotes for free</li>
              <li>Pay only when you're 100% happy</li>
            </ul>
            <div className="button">
              <button className="btn btn1 p-2 mt-3">
                hire a freelancer
              </button>
              <button className='btn btn2 py-1'> earn money freelancer</button>

            </div></SwiperSlide>
          <SwiperSlide className='h-image' style={{ backgroundImage: "URL('https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,f_auto,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg')" }}>
            <h1 className=' box fw-bold display-4 mt-4' style={{ color: "#a3c6d8" }}>How work
              should work </h1>
            <p className='box mt-4 ' style={{ fontSize: 30 }}>
              Forget the old rules. You can have the best people.
              Right now. Right here.


            </p>



            <div className="button mt-3">

              <button className='btn btn2 py-2 '> earn money freelancer</button>

            </div>






          </SwiperSlide>

        </Swiper>

      </header>
      <div className="section1">
        <h4 className='fw-bold  p-4'>what quality we want?</h4>
        <div className="container">
          <div className="row1 d-flex">
            <div className="col-md-4">
              <div className="card-body ">
                <center><i class="fa-solid fa-users"></i>
                  <h6>skilled people</h6></center>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <center> <i class="fa-solid fa-person-running"></i>
                  <h6>fast working</h6></center>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <center>  <i class="fa-solid fa-users"></i>
                  <h6>leadership</h6></center>
              </div>
            </div>
          </div>
          <div className="row2 py-5 d-flex">
            <div className="col-md-4">
              <div className="card-body ">
                <center><i class="fa-solid fa-shield"></i>
                  <h6>pay savely</h6></center>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <center> <i class="fa-regular fa-heart"></i>
                  <h6>love your work</h6></center>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <center><i class="fa-solid fa-microchip"></i>
                  <h6>updated people</h6></center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <h3 className='fw-bold px-4'>make it real with freelancer</h3>
        <h6 className='fw-bold mx-4 py-2'>get inspiration </h6>
        <div className="row1 d-flex">
          <div className="col-md-3">
            <div className="zoom-effect" >
              <div className="cover1" style={{ backgroundImage: "URL('https://iemlabs.com/blogs/wp-content/uploads/sites/4/2023/06/Best-free-ai-art-generator.webp')" }}></div>
            </div>

          </div>
          <div className="col-md-3">
            <div className="zoom-effect">
              <div className="cover1" style={{ backgroundImage: "URL('https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png')" }} ></div>
            </div>

          </div>
          <div className="col-md-3">
            <div className="zoom-effect">
              <div className="cover1" style={{ backgroundImage: "URL('https://learn.g2.com/hubfs/apple-applications-apps-607812.jpg')" }} ></div>
            </div>

          </div>
          <div className="col-md-3">
            <div className="zoom-effect">
              <div className="cover1" style={{ backgroundImage: "URL('https://i.pinimg.com/originals/6d/18/bb/6d18bb2d7e6f12dbef6b96d9603981b4.png')" }} ></div>
            </div>

          </div>
        </div>
        <div className="row1 d-flex">
          <div className="col-md-3">
            <div className="zoom-effect">
              <div className="cover1" style={{ backgroundImage: "URL('https://imgv3.fotor.com/images/videoImage/generate-two-females-and-a-male-3d-characters-in-fotor-ai-3d-character-creator.jpg')" }}></div>

            </div>

          </div>
          <div className="col-md-3">
            <div className="zoom-effect">
              <div className="cover1" style={{ backgroundImage: "URL('https://mir-s3-cdn-cf.behance.net/project_modules/1400/e3061d101563235.5f2196918d668.jpg')" }} ></div>

            </div>

          </div>
          <div className="col-md-3">
            <div className="zoom-effect">
              <div className="cover1" style={{ backgroundImage: "URL('https://www.jootoor.com/wp-content/uploads/2023/01/Artificial-Intelligence-in-Logo-Design-1024x535.jpg')" }} ></div>

            </div>

          </div>
          <div className="col-md-3">
            <div className="zoom-effect">
              <div className="cover1" style={{ backgroundImage: "URL('https://thehotskills.com/wp-content/uploads/2019/01/nike-supa-shot-min.jpg')" }} ></div>

            </div>

          </div>
        </div>
      </div>
      <footer className='bg-dark text-white mt-2'>
        <div>
          <div className='myfooter d-flex'>
            <ol className='list-styled1'>
              <h5 className='fw-bold my-3'>freelancer </h5>
              <li>categories </li>
              <li>projects</li>
              <li>contests </li>
              <li>enterprises</li>
              <li>memebership </li>
              <li>program</li>
              <li>project manager</li>
              <li>local jobs</li>
              <li>photo anywhere</li>
              <li>showcase</li>
              <li>get verified</li>
            </ol>


            <ol className='list-styled1' >
              <h5 className='fw-bold my-3'>about</h5>
              <li>about us </li>
              <li>how its work</li>
              <li>careers</li>
              <li>security</li>
              <li>investors</li>
              <li>sitemap</li>
              <li> stories</li>
              <li>news</li>
              <li>team</li>
              <li>awards</li>
              <li>careers</li>
            </ol>
            <ol className='list-styled1' >
              <h5 className='fw-bold my-3'>terms</h5>
              <li>privacy public </li>
              <li>terms and conditions</li>
              <li>copyright &copy;policy</li>
              <li>code of conduct</li>
              <li>fees and charges</li>

            </ol>
            <ol className='list-styled1' >
              <h5 className='fw-bold my-3'>partners</h5>
              <li>escrow.com </li>
              <li>loadshift</li>
              <li> warrior forum</li>


            </ol>
            <div className="mx-5">
              <h6 className='fw-bold mt-5'>experience freelancer app on mobile</h6>
              <div >
                <img className="app-images " alt="playstore" src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" />
                <img className="app-images " alt="playstore" src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />
              </div>
              <h6 className='fw-bold my-3'>keep in touch</h6>
              <i className="icon fa-brands fa-facebook" />
              <i className="icon fa-brands fa-twitter" />
              <i className="icon fa-brands fa-youtube"></i>
              <i className="icon fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="input-search  d-flex ">
            <input type="text" className=' form-control input-box  w-50  ' placeholder="search your intereset" />
            <i className="search fa-brands fa-searchengin" />
          </div>




        </div>

      </footer>

    </div>
  )
}

export default Home