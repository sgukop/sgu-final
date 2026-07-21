'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
const CommerceDeptFaculty = () => {
  return (
    <section className="tl-inner-courses pb-100 pt-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Faculty Profile</h2>
        <div className="row">
          <MenuList dept="Commerce" subMenu={NavLinks} />
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
                                <img src="/assets/images/faculty-profile-photos/management/Giri.Y.L.jpg" alt="Faculty Image" style={{height:"200px"}}/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Prof. Dr Giri Yogeshwari L.</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/677e08e44f56d3a0bcfb4a4b" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/commerce/revati-despande.jpg" alt="Faculty Image" style={{height:"200px"}}/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Revati Lalitkumar Deshpande</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675006ab4b17e19d8f361946" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/commerce/2. Mr. ARJUN PATIL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Arjun Naikba Patil</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675006bd4b17e19d8f36194b" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/21. Mr. VISHAL PATIL.jpg" alt="Faculty Image"/>
                            </div>
                    
                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Vishal Arjun Patil</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6750144f4b17e19d8f3619c1" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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

export default CommerceDeptFaculty