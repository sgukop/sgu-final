import Link from 'next/link'
import React from 'react'

const GuestLectures = () => {
  return (
    <div className="tl-event-details-left " style={{padding:'5px'}}>
        <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px"}}>
            <div className="col-md-12 col-12"> 
                <ul className="tl-event-details-key-content-list phd-container">
                    <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6751350b4b17e19d8f361bde">Guest Lecture on <strong>"Career Guidance Session In Administrative Services"</strong> by Mr. Mahesh Thorwe, Director Of Administrative Services Examination,SGI on 31thJuly 2017 <i className="fa-regular fa-arrow-right-long"></i></Link></li>

                    <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675135264b17e19d8f361be3">Guest Lecture was organized by E & TC department, under VAT cell activity on 24th January 2017 for TE & BE students. The topic of guest lecture was <strong>"Career in Infrastructure Management Services for E&TC Engineer"</strong>, conducted by Mr. Anil Wadikar, Vishwanet Computers, Pvt. Ltd. Kolhapur <i className="fa-regular fa-arrow-right-long"></i></Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GuestLectures