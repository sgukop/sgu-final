'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'
import BeyondStudiesData from './BeyondStudiesData';

const BeyondStudies = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/beyond-studies/beyond-studies.jpg" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">Beyond Studies</h2>
                            <p className="dark-mode-white-color">SGU enhances the overall educational experience of students through a wide range of extracurricular programmes , facilities, services and activities. The events provide students and other member of the university exposure to a variety of social, cultural, intellectual and recreational opportunities and challenges in order to enrich the campus life and help students to fulfill their potentials.<br/><br/>

                            Along with the academics, SGU has set up various clubs at campus to provide suitable environment for the development of extracurricular interests, hobbies, creativity. A number co- curricular and extracurricular activities are executed through various clubs which are managed by the students and monitored by faculty In charge .</p>
                        </div>
                    </div>

                    <BeyondStudiesData/>
                </div>
                
            </div>
        </section>
    )
}

export default BeyondStudies
