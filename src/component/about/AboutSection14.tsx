'use client'
import { useTalimContext } from '@/context/TalimContext'
import SchoolIntake3 from '@/component/programmes/SchoolIntake3'
import React from 'react'

const AboutSection14 = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-120 pb-120" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/about-all-dept-images/school-of-technology.jpg" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">About School of Technology</h2>
                            <p className="tl-14-about-descr">
                            School of Technology (ST) is committed towards creating, preserving and imparting internationally benchmarked knowledge & skills to a diverse community of students. ST provides a variety of opportunities for students to improve their employability. <br/>

ST offers undergraduate B.Tech courses , postgraduate M.tech courses and Ph.D. courses. <br/>

School of Technology has following departments
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'80px'}}>
                <SchoolIntake3/>
                    </div> 
            </div>
        </section>
    )
}

export default AboutSection14
