import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const EnglishDeptLaboratories = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Infrastructure & Laboratories</h2>
            <div className="row">
                <MenuList dept="English" subMenu={NavLinks} />
                    <div
                        data-spy="scroll"
                        className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
                        data-target="#menu-navbar"
                        data-offset="0"
                    >
                    <div className="row g-4">
                        <div className="col-xl-6 col-lg-10">
                            <div className="tl-11-section-heading">
                                <h2 className="tl-11-section-title">Language Lab 1</h2>
                            </div>
                            <div className="tl-8-course flex flex-col h-full rounded-[20px]">
                                <div className="tl-8-course-img">
                                    <img src="assets/images/english-dept/laboratories/LL1.jpg" alt="Laboratories and Infrastructure Image"/>
                                </div>
                                <div className="tl-8-course-txt">
                                    <p className="dark-mode-white-color">English Language Laboratory is equipped with the Digital Language Lab Software of thirty plus one teacher user strength which gives immense exposure at various levels of English Language by availing means of improving pronunciation, speech, grammar and syntax. It also provides actual situation of English usage that helps students to get acquainted with English language rapidly<br/><br/>
                                    <strong>Total Cost - </strong>Rs.10,67,297.00</p>
                                </div>
                            </div>
                        </div>
               
                        <div className="col-xl-6 col-lg-10">
                            <div className="tl-11-section-heading">
                                <h2 className="tl-11-section-title">Language Lab 2</h2>
                            </div>
                            <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                                <div className="tl-8-course-img">
                                    <img src="assets/images/english-dept/laboratories/LL2.jpg" alt="Laboratories and Infrastructure Image"/>
                                </div>
                                <div className="tl-8-course-txt">
                                    <p className="dark-mode-white-color">Second Language Lab is also equipped with the Digital Language Lab Software of twenty plus one teacher user strength. Students are provided practice in an entertaining and interactive way to acquire four main language skills: listening, speaking, reading, and writing. Students learn more comprehensively through a language lab using more class time. <br/> Practice sessions of Group Discussion, Public Speaking, Interview skills, (Mock Interview Sessions) Technical and non-technical Presentations, Debate are conducted in the Language lab.</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EnglishDeptLaboratories