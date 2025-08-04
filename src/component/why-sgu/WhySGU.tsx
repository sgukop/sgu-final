import Link from 'next/link'
import React from 'react'

const WhySGU = () => {
  return (
    <section className="tl-1-about pt-50 pb-50">
        <div className="container">
            <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-6">
                    <div className="tl-1-about-img">
                        <img src="assets/images/about-us/aboutus-new.jpg" alt="About SGU" className="tl-1-about-main-img"/>
                        {/* <img src="assets/images/tl-1/sticker.png" alt="sticker" className="tl-1-about-sticker"/>   */} 
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-1-about-txt">
                        <h2 className="tl-1-section-title">About SGU, Kolhapur</h2>
                        <p className="tl-1-about-descr">The Sanjay Ghodawat University stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life. The USP of the University is its research based curriculum and academically oriented teaching staff. The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process.</p>

                       {/*  <div className="tl-1-about-author">
                            <div className="tl-1-about-author-intro">
                                <h4 className="tl-1-course-title">
                                    <Link href="/about-university" className="tl-def-btn" target="_self">Read More</Link>
                                </h4>
                            </div>
                        </div>  */}

                        <div className="tl-header-actions"><a className="tl-def-btn" href="/about-university" target="_blank">Read More</a></div>
                    </div>
                </div>
            </div>

            {/* <div className="tl-1-stats">
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">100+</span>
                    <h6 className="tl-1-stat-name">Recruiters offering best <br/>  in class Packages</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">7</span>
                    <h6 className="tl-1-stat-name">Foreign University Collaborations</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">20+</span>
                    <h6 className="tl-1-stat-name">Industry Collaborations</h6>
                </div>
            </div>  */}

            <div className="tl-1-stats">
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">4k+</span>
                    <h6 className="tl-1-stat-name">Students</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">500+</span>
                    <h6 className="tl-1-stat-name">Personnel</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">100+</span>
                    <h6 className="tl-1-stat-name" style={{right:"18px"}}>Industry Collaborations</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">15k+</span>
                    <h6 className="tl-1-stat-name">Alumni's</h6>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhySGU