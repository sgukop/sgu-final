import Link from 'next/link'
import React from 'react'

const GuestLectures = () => {
  return (
    <div className="tl-event-details-left " style={{padding:'5px'}}>
      <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px"}}>
        <div className="col-md-12 col-12"> 
          <ul className="tl-event-details-key-content-list phd-container">
                <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67580ac19173bf9f471ac0fa">Ms. Neha Jadhav delivered a Lecture on "Representtaion of Curves in different forms" for B.Sc. I at Lal Bahadur Shashtri College of Arts, Science and Commerce, Satara on 30th January 2019 <i className="fa-regular fa-arrow-right-long"></i></Link></li>

                <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67580a949173bf9f471ac0f5">Guest Lecture by Dr. S.B. Joshi, Walchand College of Engineering, Sangli on Opportunity in Sciences after B.Sc. and M.Sc. students 23 July 2018 <i className="fa-regular fa-arrow-right-long"></i></Link></li>

                <li>Expert lecture by Dr. Ahwini K. Kulkarni and Mr. S.S. Salgare in State level workshop on Introduction to Scilab on 27th Jan and 1st Feb. 2018 at SGU Kolhapur</li>
                <li>Expert lecture by Mr. S.S. Salgare on Introduction to WxMaxima at Walchand College of Arts and Science, Solapur on WxMaxima</li>
                <li>Expert lecture by Dr. Ashwini K. Kulkarni in Value added program on Scilab and Matlab at Department of Mathematics , Shivaji University Kolhapur during 25th June -27th June 2018</li>
                <li>Expert lecture by Ms. Neha Raju Jadhav on Representation of Curves by using software for B.Sc. I at Lal Bahadur Shastri College of Arts, Science and Commerce, Satara on 30th January 2019</li>
          </ul>
      </div>
  </div>
</div>
  )
}

export default GuestLectures