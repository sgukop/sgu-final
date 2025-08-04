import Link from 'next/link'
import React from 'react'

const OnlineEnquiry = () => {
  return (
    <section className="tl-2-about pb-100 pt-100">
        <div className="container">
            <div className="row gy-5 align-items-center tl-2-about-row">
                <div className="col-lg-6">
                    <div className="tl-2-about-img">
                        <img src="assets/images/online-enquiry-image/online-enquiry2.jpg" alt="Image"/>
                        {/* <img src="assets/images/tl-2/arrow.png" alt="arrow" className="tl-2-about-arrow"/>  */}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-2-about-txt">
                        <h2 className="tl-2-section-title">Online Admission Enquiry</h2>
                        <h6 className="tl-2-about-second-title">Scholarships Available for Meritorious Students</h6>
                        <p className="tl-2-about-descr">Dear Candidate,<br/><br/>Kindly fill up all the information in below online form and submit the form. You do not have to pay any fees for the application form. You will receive an acknowledgement of submission on your email ID AND/OR text message on your Mobile. Keep in touch with our Admissions Cell or you may contact on our <strong>90110 39800</strong> or <strong>90110 2256</strong>7 for any queries.</p>
                        <div className="tl-2-about-stats">
                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">100+</span>
                                <span className="tl-9-about-stat-name">Recruiters offering best</span>
                            </div>

                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">7</span>
                                <span className="tl-9-about-stat-name">Foreign University Collaborations</span>
                            </div>

                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">20+</span>
                                <span className="tl-9-about-stat-name">Industry Collaborations</span>
                            </div>
                        </div>
                        <Link href="/admission-open" className="tl-2-blog-btn" target="_self" rel="noopener noreferrer"><span className="tl-2-blog-btn-icon"><i className="fa-regular fa-arrow-up-right"></i></span>Online Admission Enquiry (2024-25)</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OnlineEnquiry