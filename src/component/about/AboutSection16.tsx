'use client'
import { useTalimContext } from '@/context/TalimContext'
import SchoolIntake4 from '@/component/programmes/SchoolIntake4'
import React from 'react'

const AboutSection16 = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-120 pb-120" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/about-all-dept-images/commerce-management.jpg" alt="About Department" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">About School of Commerce & Management</h2>
                            <p className="tl-14-about-descr">
                            School of Commerce and Management (SCM) is committed towards creating, preserving and imparting internationally benchmarked knowledge & skills to a diverse community of students. SCM provides a variety of opportunities for students to improve their employability. SCM capitalizes on the industry and academic experience of its faculty to prepare students to work effectively in today's complex and challenging business environment. <br/>

SCM offers undergraduate commerce courses (B.Com), postgraduate commerce courses (M. Com.), undergraduate (B.B.A.), postgraduate (M.B.A.). The commerce and management offer UG and PG programs in and management, which are industry oriented with a right mix of knowledge in areas of Management, Commerce and Finance. The objective of management courses undergraduate (B.B.A.), postgraduate (M.B.A.) and commerce programs offered by SCM is to enable students to embark upon a management career.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'80px'}}>
                <SchoolIntake4/>
                    </div> 
            </div>
        </section>
    )
}

export default AboutSection16
