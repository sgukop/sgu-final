'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const BiotechDeptFaculty = () => {
   return (
   <section className="tl-inner-courses pb-100 pt-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Faculty Profile</h2>
            <div className="row">
                    <MenuList dept="Biotechnology" subMenu={NavLinks} />
                        <div
                            data-spy="scroll"
                            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
                            data-target="#menu-navbar"
                            data-offset="0"
                        >
                        <div className="tl-course-details-top-courses">
                            <div className="row g-4">
                                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                                    <div className="tl-1-course-new">
                                        <div className="tl-1-course-img-new">
                                            <img src="/assets/images/faculty-profile-photos/biotechnology/1. Dr. AJAY NALAWADE.jpg" alt="Faculty Image"/>
                                        </div>

                                        <div className="tl-1-course-txt">
                                            <h4 className="tl-1-course-title-new mt-30">Dr. Ajay Sarjerao Nalawade</h4>
                                            <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                            <Link href="https://manage-api.sguk.ac.in/api/assets/67d7e4e24f56d3a0bcfb9ee9" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                                        </div>
                                    </div>
                                </div>  

                                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                                    <div className="tl-1-course-new">
                                        <div className="tl-1-course-img-new">
                                            <img src="/assets/images/faculty-profile-photos/biotechnology/4. Dr. Sneha Paymal.jpeg" alt="Faculty Image"/>
                                        </div>

                                        <div className="tl-1-course-txt">
                                            <h4 className="tl-1-course-title-new mt-30">Dr. Sneha Babasaheb Paymal</h4>
                                            <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                            <Link href="https://manage-api.sguk.ac.in/api/assets/6a1e9875b7ec52d9d32450fc" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                                    <div className="tl-1-course-new">
                                        <div className="tl-1-course-img-new">
                                            <img src="/assets/images/faculty-profile-photos/biotechnology/5. Dr. Yuvraj Jagtab.jpeg" alt="Faculty Image"/>
                                        </div>

                                        <div className="tl-1-course-txt">
                                            <h4 className="tl-1-course-title-new mt-30">Dr. Yuvraj Anandrao Jagtap</h4>
                                            <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                            <Link href="https://manage-api.sguk.ac.in/api/assets/6a1e988bb7ec52d9d3245101" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                                        </div>
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

export default BiotechDeptFaculty