import { courseList } from '@/data/Data';
import Link from 'next/link';
import React from 'react'

const AboutTrust2 = () =>  {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
        <div className="tl-7-section-heading">
          <h2 className="tl-6-section-title">Chairman's Message</h2>
        </div>
            <div className="tl-staff-profile-top mb-50">
                <img src="assets/images/tl-8/sushila-ghodawat.jpg" alt="Trust Image"/>
                <div className="tl-staff-profile-txt">
                    <div className="tl-staff-profile-intro">
                        <div>
                            {/* <h4 className="tl-staff-profile-name">{data.name}</h4> */}
                            <h4 className="tl-staff-profile-name"></h4>
                            <h6 className="tl-staff-profile-role"></h6>
                            {/* <h6 className="tl-staff-profile-role">{data.position}</h6> */}
                        </div>
                        <ul className="tl-3-footer-socials tl-staff-profile-socials">
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>

                    <p className="tl-staff-profile-bio">an inspiring educator, has dedicated his life to nurturing young minds. With a degree in English Education from Riverside University, he embarked on his journey at Oakridge High School. Through innovative teaching, she cultivated an inclusive classroom where every student's voice was valued. Sarah's impact stretched beyond the classroom, leading workshops and embracing technology to enhance learning. his legacy is woven through the success stories of students who continue to be inspired by his passion for education.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutTrust2