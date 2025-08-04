import React from 'react'

const AboutSection7 = () => {
  return (
    <section className="tl-8-about tl-3-section-spacing">
        <div className="container">
            <div className="row g-0 justify-content-between align-items-center">
                <div className="col-xl-5 col-lg-5">
                    <div className="tl-8-about-img">
                        <img src="assets/images/tl-8/aboutus-image.jpg" alt="Driving Image" className="tl-8-about-main-img"/>
                        <img src="assets/images/tl-8/sticker.png" alt="sticker" className="tl-8-about-sticker"/>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="tl-8-about-txt yellow-clr-hover">
                        <h2 className="tl-8-section-title">About University</h2>

                        <div className="tl-8-features">
                            <div className="tl-8-feature">
                               
                                <p className="tl-8-feature-descr">The Sanjay Ghodawat University stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life. The USP of the University is its research based curriculum and academically oriented teaching staff. The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process.</p>
                            </div>

                           
                        </div>

                        <a href="#" className="tl-def-btn-2">More About Us <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection7