'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'

const AboutSection15 = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-120 pb-120" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/about-all-dept-images/school-of-design.jpg" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">About School of Design</h2>
                            <p className="tl-14-about-descr">
                           
                            SGU's Design Department offers a dynamic opportunity for students passionate about turning creativity into a profession. Our 4-year undergraduate program, B. Des., features specializations in Fashion Design, Graphic Design, Product Design, and Space (Interior) Design. The first year is a foundational program providing essential skills across all disciplines. From the second year onward, students delve into specialized core courses and electives. <br/>

Key components include a mandatory six-month industry internship and a graduation project, fostering independent learning and interdisciplinary collaboration. Our experienced faculty guides students through project-based learning in well-equipped labs and studios. Beyond academics, students benefit from industry sessions, site visits, seminars, workshops, and participation in exhibitions, competitions, festivals, and cultural events. <br/>

The department maintains strong industry ties, facilitating collaborative projects and addressing social needs through innovative initiatives.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'80px'}}>
                    </div> 
            </div>
        </section>
    )
}

export default AboutSection15
