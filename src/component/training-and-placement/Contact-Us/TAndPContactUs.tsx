'use client'
import Link from 'next/link'
import React from 'react'

const TAndPContactUs = () => {
  return (
    <section className="tl-inner-courses pb-100 pt-100">
        <div className="container">
        <h2 className="tl-9-section-title mb-50">Training & Placement Contact</h2>
            <div className="row g-3 g-xl-4">
                <div className="col-lg-4 col-sm-6">
                    <div className="tl-2-blog tl-2-course">
                        <div className="tl-2-course-img">
                            <img src="assets/images/training-and-placement/contact-us/male.jpg" alt="Faculty Profile Image"/>
                        </div>

                        <div className="tl-2-course-txt">
                            <h4 className="tl-1-course-title tl-2-course-title"><strong>Dr.N.V.Pujari</strong></h4>
                            <p className="tl-2-course-descr">Head - Training & Placement</p>
                            
                            <div className="tl-2-course-infos">
                                <div className="tl-2-course-info">
                                    <h6 className="tl-2-course-info-key"><strong>Contact Number : </strong></h6>
                                    <h6 className="tl-2-course-info-value">+91 91300 12982</h6>
                                </div>
                            </div>  

                               
                            <div className="tl-2-course-infos">
                                <div className="tl-2-course-info">
                                    <h6 className="tl-2-course-info-key"><strong>Email : </strong></h6>
                                    <h6 className="tl-2-course-info-value">tpo@sguk.ac.in</h6>
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

export default TAndPContactUs