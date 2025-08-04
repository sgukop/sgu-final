'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import Link from 'next/link';

const PharmacyDeptUpcomingEvents = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Annual Activity Plan</h2>
        <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
               {/*  <div className="col-lg-12">
                   <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <ul className="tl-event-details-key-content-list phd-container">
                            <h6 className="dark-mode-white-color text-[#4f70b6]" style={{fontWeight:"bold"}}>National Pharmacy Week: 17-11-2024 To 23-11-2024</h6>
                                   <li>Industry Oriented Guest Lecture</li>
                                   <li>Blood Donation Camp</li>
                            </ul>
                        </div>
                  </div>
                </div>  */}
                <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67d3df304f56d3a0bcfb9bf9" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Annual Activity Plan - 2025-26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default PharmacyDeptUpcomingEvents
