import Link from 'next/link'
import React from 'react'

const HowtoApply = () => {
  return (
    <section className="tl-13-about pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title mb-50">How to Apply for Admissions</h2>
            <div className="row gx-0 gy-4 gy-md-5 align-items-center justify-content-between">
                <div className="col-xxl-7 col-lg-6">
                    <div className="tl-13-about-img">
                        <img src="assets/images/academic-excellence/how-to-apply.jpg" alt="How to Apply"/>

                        <div className="tl-13-about-stat">
                            <img src="assets/images/tl-13/stat-icon.png" alt="Image" className="tl-13-about-stat-icon"/>
                            <span className="tl-13-about-stat-number">10+</span>
                            <span className="tl-13-about-stat-name">years of experience</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                   <div className="tl-8-about-txt yellow-clr-hover">
                    <div className="tl-8-features">
                        <div className="tl-8-feature">
                            <ul className="tl-event-details-key-content-list phd-container mt-30">
                                <li className="mb-10"><strong>OPTION 1 : </strong>For Information Call us on +91 90110 39800, +91 90110 22567</li>
                                <li className="mb-10"><strong>OPTION 2 : </strong>Visit our Admission cell, Sanjay Ghodawat University, Kolhapur - Sangli Highway, A/p Atigre - 416 118,
                                Tal. - Hatkanangale, Dist. Kolhapur, Maharashtra, India</li>
                                <li className="mb-10"><strong>OPTION 3 : </strong><Link href="/online-admission-enquiry" rel="noopener noreferrer" target="_self" className="tl-def-btn-2">Click Here</Link> for Online Admission Enquiry</li>
                               
                            </ul>
                            <p className="tl-8-feature-descr mt-20"><strong>**Note : </strong>for MBA in Pharmaceutical Management and MBA in Agri-Business Management course Rs. 500/- Registration Charges must be paid after successful submition registration form by using login creditials sent by e-mail or SMS.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowtoApply