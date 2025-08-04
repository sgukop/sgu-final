'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'

const AboutSection11 = () => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, max-content)',
        fontSize:'18px'
      };
    const {openVideoModal} = useTalimContext()
    return (
        <section className="pt-120 pb-120">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/academic-excellence/CBE-image.png" alt="Image" className="rounded-full"
                            style={{border:"10px solid #4f70b6", padding:"20px"}} />
                           
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">Credit Based Evaluation (CBE) System</h2>
                            <p className="tl-14-about-descr">
                                A credit system describes an educational program by attaching credits to its components. Credits in higher education are based on parameters such as student workload, learning outcomes, and contact hours. A course credit measures student workload and specifies the learning effort expected to complete a course.
                            </p>
                            <p className="tl-14-about-descr">
                                Learning effort includes multiple modes like lectures, lab work, assignments, self-study, and e-learning. The credit system allows institutions to specify programs and courses in terms of required credit load, giving a clear picture of the learning effort needed. Programs are completed by accumulating the required credits, not just by spending calendar time.
                            </p>
                            <p className="tl-14-about-descr">
                                A credit-based academic structure helps keep programs current and adaptable.
                            </p>
                            <ul className="tl-14-about-service-list" style={gridStyle}>
                                <li>Accepted system at universities worldwide</li>
                                <li>Quantifies academic work done by students</li>
                                <li>Allows transfer of credits between universities</li>
                                <li>Recognized by industry for job placement</li>
                            </ul>
                            <p className="tl-14-about-descr">
                                SGU is adopting this credit-based evaluation system and will later convert to a Choose Based Credit System.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection11
