'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'

const AboutSection12 = () => {
    const {openVideoModal} = useTalimContext()
    return (
        <section className="pt-120 pb-120">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/academic-excellence/OBE1-image.png" alt="Image" className="rounded-full"
                            style={{border:"10px solid #4f70b6", padding:"20px"}} />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">Outcome Based Education (OBE) System</h2>
                            <p className="tl-14-about-descr">
                                OBE is an approach to education where curriculum decisions are driven by the outcomes students are expected to achieve by the end of the course, enhancing education through clear objectives.
                            </p>
                            <p className="tl-14-about-descr">
                                It specifies curriculum content, teaching methods, assessment processes, and provides a framework for evaluation, ensuring clarity and purpose in education.
                            </p>
                            <div className="tl-8-features">
                                <div className="tl-8-feature">
                                    <h6 className="tl-8-feature-title">Clarity</h6>
                                    <p className="tl-8-feature-descr">
                                        The focus on outcomes creates clear expectations for students and teachers, guiding effective teaching and learning strategies.
                                    </p>
                                </div>
                                <div className="tl-8-feature">
                                    <h6 className="tl-8-feature-title">Flexibility</h6>
                                    <p className="tl-8-feature-descr">
                                        Instructors can adapt teaching methods to diverse student needs, promoting a student-centered learning environment without specifying a particular method.
                                    </p>
                                </div>
                                <div className="tl-8-feature">
                                    <h6 className="tl-8-feature-title">Involvement</h6>
                                    <p className="tl-8-feature-descr">
                                        Promotes active student participation in learning processes, fostering responsibility and deeper understanding of educational materials.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection12
