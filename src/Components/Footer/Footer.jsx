import React from 'react'

export default function Footer() {
  return <>
  <div className="d-flex pt-5 pb-5 text-bg-info m-0 justify-content-around bbgge">

    <div className="location text-center text-white">
      <h3 className=''>LOCATION</h3>
      <p className=''>2215 John Daniel Drive
<br />
Clark, MO 65243</p>
    </div>

    <div className="icon text-center text-white ">
      <h3 className=''>AROUND THE WEB</h3>
      <div className="icon-d d-flex justify-content-center align-items-center">
        <div className="face border rounded-5 p-2 mx-2">
        <i class="fa-brands fa-facebook"></i>
        </div>
        <div className="face border rounded-5 p-2 mx-2">
        <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="face border rounded-5 p-2 mx-2">
        <i class="fa-brands fa-linkedin"></i>
        </div>
        <div className="face border rounded-5 p-2 mx-2">
        <i class="fa-solid fa-globe"></i>
        </div>
      </div>
     
    </div>


    <div className="location text-center text-white">
      <h3>ABOUT FREELANCER</h3>
      <p >Freelance is a free to use,</p>
    </div>
  </div>
  </>
}
