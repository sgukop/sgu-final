import { courseList } from '@/data/Data';
import Link from 'next/link';
import React from 'react'

const AboutTrust = () =>  {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
            <div className="tl-staff-profile-top mb-30">
                <img src="assets/images/board-of-directors/01.jpg" style={{border: "10px solid #4f70b6", padding: "10px"}}alt="Trust Image"/>
                    <div className="tl-staff-profile-txt">
                        <div className="tl-staff-profile-intro">
                            <div className="py-2 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto">
                                <h4 className="tl-staff-profile-name">About Trust</h4>
                                <h6 className="tl-staff-profile-role text-white">Sou. Sushila Danchand Ghodawat Charitable Trust</h6>
                            </div>
                       </div>

                        <p className="tl-staff-profile-bio">Sanjay Ghodawat University is dedicated to Smt. Sushila Danchand Ghodawat the mother of Shri. Sanjay D. Ghodawat. This Institutes comes under the umbrella of Smt. Sushila Danchand Ghodawat Trust built in the memory of Smt. Sushila Danchand Ghodawat. She was highly intelligent as well as considerate. Her desire to start an educational institution was brought into reality by Shri. Sanjay D. Ghodawat</p>
                    </div>
            </div>
           {/*  <AboutTrustLi sectionStyle="tl-3-programs-pills tl-14-categories pt-50 pb-50" pageStyle='tl-14' categoryStyle='tl-14-category' />  */}

           <div className="tl-event-details-left">
                <div className="tl-event-details-key-content tl-event-details-area">
                    <h3 className="tl-event-details-area-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white">Sou. Sushila Danchand Ghodawat Charitable Trust is running following organizations</h3>
                    <ul className="tl-event-details-key-content-list phd-container">
                        <li>Sanjay Ghodawat University Kolhapur</li>
                        <li>Sanjay Ghodawat Group of Institutions (Faculty of Engineering), Atigre</li>
                        <li>Sanjay Ghodawat Group of Institutions (Faculty of Management), Atigre</li>
                        <li>Sanjay Ghodawat Polytechnic, Atigre</li>
                        <li>Sanjay Ghodawat International School</li>
                        <li>Sanjay Ghodawat Administrative Services</li>
                        <li>Sanjay Ghodawat IIT & Medical Academy</li>
                        <li>Sanjay Ghodawat Junior College</li>
                        <li>Acharya Shree Tulsi Blood Bank & Blood Component Center, Udgaon (Jaysingpur)</li>
                        <li>Acharya Shree Mahapradnya Eye Hospital, Udgaon (Jaysingpur)</li>
                        <li>Vandemataram Healthy Mother Healthy Baby, Udgaon (Jaysingpur)</li>
                        <li>Computer Academy - Free Computer Education for poor & Handicapped, Udgaon (Jaysingpur)</li>
                        <li>Sick Bed Service - Medical Equipments on Deposit basis, Udgaon (Jaysingpur)</li>
                        <li>School Health Checkup, Atigre</li>
                        <li>Sou. Sushila Danchand Ghodawat Medical & Technical Institute, Udgaon (Jaysingpur)</li>
                        <li>PGDMLT & BSc MLT College, Udgaon (Jaysingpur)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutTrust