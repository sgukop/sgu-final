'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'

const AboutSection17 = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-120" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/about-all-dept-images/school-of-science.jpg" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">About School of Science</h2>
                            <p className="tl-14-about-descr">
                            Since inception of Sanjay Ghodawat Institute in 2009, now Sanjay Ghodawat University has made constant efforts to provide quality education and a platform for development of students. School of Science currently offers B.Sc, M.Sc and Ph.D programs in but not limited to Physics, Chemistry and Mathematics. These programs have right blend of academia, research and industry providing an excellent opportunity for students to learn and flourish their career. Because of collaborations of School of Science with institutes, research laboratories and industries, students get number of opportunities of live projects, internships and placements. Our programs aim to provide skill based theoretical, practical and scientific knowledge to students. Our courses are focused towards development of following skills of students. Our courses are focused towards development of following skills of students.
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

export default AboutSection17;
