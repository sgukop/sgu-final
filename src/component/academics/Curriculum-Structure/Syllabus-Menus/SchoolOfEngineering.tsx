import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
import MenuList from '../Reusable-components/MenuList';
import NavLinks from '../Reusable-components/Navlinks';
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const SchoolOfEnginnering = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>
            Revised Syllabus from the Academic Year 2024-25
        </h2>
       <div className="row">
            <MenuList dept="Curriculum Structure and Syllabus" subMenu={NavLinks}/>
                <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
                    <div className={`row ${pageStyle}-categories-row`}>
                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/aeronautical-dept-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">Department of Aerospace Engineering</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/civil-dept-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">Department of Civil Engineering</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/electronics-and-communication-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">Department of Electronics & Communication Engineering</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/computer-science-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">Department of Computer Science and Engineering</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/AI-ML-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">Department of Artificial Intelligence and Machine Learning</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/allied-science-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">Department of Allied Health Sciences</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/dpharmacy-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">D. Pharmacy Syllabus</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/bpharmacy-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">B. Pharmacy Syllabus</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/university-open-elective" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">University Open Elective</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/first-year-alldept-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">FE (School of Engineering and Technology)</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SchoolOfEnginnering