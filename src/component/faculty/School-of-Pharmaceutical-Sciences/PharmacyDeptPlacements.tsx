'use client'
import Link from 'next/link';
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const PharmacyDeptPlacements = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Training & Placements</h2>
        <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-0 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/pharmacy-dept/training&placements/training-and-placement.png" alt="Training And Placement" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="mt-20">
                      <p className="tl-8-feature-descr">The SGU Training & Placement Cell is committed to providing all possible assistance to its graduates and postgraduates students in their efforts to find employment. The purpose of the Training and Placement is to give the students right knowledge, skill and aptitude and meet the manpower requirements of the Industry. This commitment is demonstrated by the existence Placement record.</p>
                      <a href="https://manage-api.sguk.ac.in/api/assets/6a0d8e4a12260ec08e7c83ef" className="tl-def-btn-2 mt-4" target="_blank">Cumulative Placement Data <i className="fa-regular fa-arrow-right"></i></a>
                     
                    </div>
                </div>
            </div>


            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Fininshing School</h2></div>
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                  
                        <div className="tl-event-details-key-content tl-event-details-area">
                           <p className="dark-mode-white-color">Finishing School is training that give finishing touch to the employability and entrepreneurial abilities of any student studying at Sanjay Ghodawat University. It is explicit program designed to provide theoretical and practical knowledge of common skills and domain specific skills. This program runs parallel to the different diploma, UG and PG programs of the university during its final year.  As student progress to the completion of his/ her conventional degree, finishing school become more and more domain specific. For this purpose, student interest is called for domain selection and trainer selection. Once number of students exceeds a specific batch limit of 15, for a particular domain, the expert trainer is appointed from that domain to train the batch. This training is typically of 30 hours and conducted over the period of a semester for each domain. Training is generally conducted at the weekend hours so that it will not disturb the normal learning of the other students who did not choose the finishing school activity. Presently following finishing school activities are being conducted at the Department of Pharmacy.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">GPAT Guidance Class </h2></div>
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                  
                        <div className="tl-event-details-key-content tl-event-details-area">
                           <p className="dark-mode-white-color">Graduate Pharmacy Aptitude Test (GPAT) is a national level entrance examination for admission to M. Pharm programs in India. It is conducted by National Board of Examination in Medical Sciences, Delhi on behalf of Pharmacy Council of India. Those students who qualify examination get all India rank for various admission procedures conducted at state level. Student those who qualify GPAT and get successfully admitted to PCI approved Pharmacy institute for post graduate program, get stipend of Rs 12,400/- month for the period two years. Considering these benefits our School has started GPAT guidance Finishing School program for final year B. Pharm student. This is typically conducted for the period of one academic year with 30 lectures during 7th semester and 30 lectures in the 8th semester
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Clinical Research - Ingenious Institute of Clinical Research </h2></div>
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                  
                        <div className="tl-event-details-key-content tl-event-details-area">
                           <p className="dark-mode-white-color">INGENIOUS is a leading Clinical Research Site Management Organization (SMO). “Ingenious Institute of Clinical Research” is an education and training company run by the Ingenious SMO. It offers a wide range of educational and training programs including health safety and emergency life support. This training program is designed to deliver knowledge as well as practical skills essential for clinical research career. Considering these benefits Sanjay Ghodawat University School of Pharmaceutical Sciences executed MOU with this clinical research training company. Ingenious is associated with 03 leading hospitals in Kolhapur and few leading hospitals in Pune and Nagpur. 
                          Under Ingenious finishing School students will get theoretical and practical knowledge essential to join Clinical research of any type. It covers Pharmacovigilance, Clinical data management, medical writing, medical coding, regulatory affairs and Clinical SAS programming etc. By the completion of the program the trainee student will become industry job ready. 

                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
        </div>
</section>
    )
}

export default PharmacyDeptPlacements
