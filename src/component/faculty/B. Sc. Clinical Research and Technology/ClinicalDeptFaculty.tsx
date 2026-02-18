'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const ClinicalDeptFaculty = () => {
  return (
    <section className="tl-inner-courses pb-100 pt-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Faculty Profile</h2>
        <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
           	<div className="tl-course-details-top-courses">
                <div className="row g-4 g-xl-4 justify-content-center">
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/Clinical/1. Dr. Vidyarani S. Khot.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Vidyarani S. Khot</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor & HOD</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6995ac3ebb1c2f5e993d1c15" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/Clinical/2. Ms. Gayatri M. Angadi.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Gayatri M. Angadi</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6995acadbb1c2f5e993d1c29" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/Clinical/3. Dr. Payal S. Khape.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Payal S. Khape</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6995ac6fbb1c2f5e993d1c1a" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/Clinical/4. Sangeeta  Sankpal.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms.Sangeeta  Sankpal</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6995ac99bb1c2f5e993d1c24" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/Clinical/5. Ms. PRANOTI M. PATIL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. PRANOTI M. PATIL</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6995acc1bb1c2f5e993d1c2e" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/Clinical/6. Mr. Irfan Sayyad.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Irfan Sayyad</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6995ac82bb1c2f5e993d1c1f" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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

export default ClinicalDeptFaculty