'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../../Reusable-components/MenuList';

const MLTDeptActivities = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Activities & Achievements</h2>
        <div className="row">
          <MenuList dept="Allied Health Sciences" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                  
                       <div className="tl-event-details-key-content tl-event-details-area">
                           <ul className="tl-event-details-key-content-list phd-container">
                                  <li>A guest lecture “Good Laboratory Practices” was held by School of Allied Health Sciences on 04/09/2024. Mr. Santosh M. Lokhande was invited as lecturer for the same. 91 students and all the teaching and non-teaching staff attended the lecture. </li>
                                   <li>Students visited Miraj Medical College, Miraj to see and understand the medical equipments and practical procedures on 23/08/2024 from 11.00 am to 4.00 pm. This visit is a part of their course curriculum.</li>
                                   <li>A 'Kidney Function Test' camp was arranged by department of BMLT for SGU staff. The urea and Creatinin levels in blood samples were examined using Bioanalyzer.</li>
                                   <li>Learn Fest 2025 Workshop from 27/01/2025 to 31/01/2025 with a hands-on training for students in Basics of Microbiology, Guest lectures on scope of their subject and how to design their CV.  </li>
                              </ul>
                        
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default MLTDeptActivities
