'use client'
import { useTalimContext } from '@/context/TalimContext'
import SchoolIntake2 from '@/component/programmes/SchoolIntake2'
import React from 'react'

const AboutSection13 = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-120 pb-120" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/tata-technology/tata-technology.jpg" alt="Tata Technology Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">Technology Competency Center</h2>
                            <p className="tl-14-about-descr">
                            Sanjay Ghodawat University is established as Private University with the vision of creating and disseminating knowledge through value based quality education leading to betterment of mankind. Tata Technology is a globally reputed organization providing engineering solutions to industry. Tata Technologies Ltd. and Sanjay Ghodawat University have entered into a Memorandum of Understanding for developing industry ready engineers and professional that can be part of the global talent pool. The objective of this drive is to provide industry specific training to engineering and management students in line with ever changing requirements of the profession
                            </p>
                            <p className="tl-14-about-descr">
                            TTL and SGU are jointly working on curriculum development, delivery, training and evaluation. These efforts are focused on improving the employability of fresh graduates by training them on the competencies required by Industry through simulated Industry environments and courses.

 
                            </p>
                            {/* <p className="tl-14-about-descr">
                                The objective of this collaboration is to provide industry-specific training to engineering and management students, aligning with the ever-changing requirements of the profession.
                            </p> */}
                            {/* <ul className="tl-14-about-service-list">
                                <li>Joint efforts in curriculum development and training</li>
                                <li>Enhancing employability through industry-specific skills</li>
                                <li>Integration of simulated industry environments</li>
                                <li>Focus on global talent pool requirements</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'80px'}}>
                <SchoolIntake2/>
                    </div> 
            </div>
        </section>
    )
}

export default AboutSection13
