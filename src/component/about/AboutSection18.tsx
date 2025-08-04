'use client'
import { useTalimContext } from '@/context/TalimContext'
import SchoolIntake3 from '@/component/programmes/SchoolIntake3'
import React from 'react'

const AboutSection18 = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-120 pb-120" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/about-all-dept-images/liberal-arts.jpg" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">About School of Liberal Arts</h2>
                            <p className="tl-14-about-descr">
                                The Liberal Arts Program at Sanjay Ghodawat University offers undergraduate, postgraduate, and doctoral programs in English, Economics, Psychology, Sociology, and Fine Arts. Students can choose a major and complement it with additional subjects, providing a holistic approach to their degree. <br />

                                The Department of Liberal Arts offers core compulsory courses to enhance professional skills and elective courses to broaden learning horizons. Students select one major and one minor subject, equipping them with multi-specialization skills for a wider academic perspective. <br />

                                Innovative teaching methods, including group discussions, seminars, case studies, field visits, quizzes, and dramatics, fully engage students in the learning process. This approach prepares graduates to tackle 21st-century challenges with a comprehensive understanding of politics, culture, history, and economics. SGU emphasizes practical application over rote learning, designing courses to be life-changing opportunities for students.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '80px' }}>

                    <div className="tl-event-details-left " style={{ padding: '5px' }}>
                        <div className="tl-event-details-key-content tl-event-details-area " style={{ marginTop: '8px' }}>
                            <h4 className="tl-14-about-descr" style={{ marginBottom: '10px', fontWeight: 700, fontSize: '24px' }}>
                                Objective
                            </h4>
                            <ul className="tl-event-details-key-content-list phd-container gap-1">
                                <li className="dark-mode-white-color" >To promote creative and critical thinking</li>
                                <li className="dark-mode-white-color" >To inculcate global and local values among students</li>
                                <li className="dark-mode-white-color" >To contribute towards knowledge generation and dissemination</li>
                                <li className="dark-mode-white-color" >To equip students with knowledge, skills, and attitude to meet the heterogeneous needs of the society</li>
                                <li className="dark-mode-white-color" >To provide facilities and training for development of research knowledge, skills and attitude among students and prepare them to undertake research in the field of Arts, Humanities and Social Sciences</li>
                                <li className="dark-mode-white-color" >To enhance employability and contribute to human resource development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection18
