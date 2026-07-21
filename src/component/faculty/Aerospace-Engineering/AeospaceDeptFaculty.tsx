'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AerospaceDeptFaculty = () => {
   return (
   <section className="tl-inner-courses pb-100 pt-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Faculty Profile</h2>
            <div className="row">
                    <MenuList dept="" subMenu={NavLinks} />
                        <div
                            data-spy="scroll"
                            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
                            data-target="#menu-navbar"
                            data-offset="0"
                        >
                        <div className="tl-course-details-top-courses">
                            <div className="row g-4">
                                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                                    <div className="tl-1-course-new">
                                        <div className="tl-1-course-img-new">
                                            <img src="/assets/images/faculty-profile-photos/aeronautical/2. Mr. S. SULTAN.jpg" alt="Faculty Image"/>
                                        </div>

                                        <div className="tl-1-course-txt">
                                            <h4 className="tl-1-course-title-new mt-30">Mr.S.Sulthan</h4>
                                            <p className="tl-1-course-author-new dark-mode-white-color">HOD/Assistant Professor</p>
                                            <Link href="https://manage-api.sguk.ac.in/api/assets/674ebde54b17e19d8f361689" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                                    <div className="tl-1-course-new">
                                        <div className="tl-1-course-img-new">
                                            <img src="/assets/images/faculty-profile-photos/aeronautical/1. Dr. MUZEER S.jpg" alt="Faculty Image"/>
                                        </div>

                                        <div className="tl-1-course-txt">
                                            <h4 className="tl-1-course-title-new mt-30">Dr. Muzeer. S</h4>
                                            <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                            <Link href="https://manage-api.sguk.ac.in/api/assets/674ebdb84b17e19d8f361682" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                                        </div>
                                    </div>
                                </div>  

  

                                

                                 <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                                    <div className="tl-1-course-new">
                                        <div className="tl-1-course-img-new">
                                            <img src="/assets/images/faculty-profile-photos/aeronautical/4. Mr. VADIVEL M.jpg" alt="Faculty Image"/>
                                        </div>

                                        <div className="tl-1-course-txt">
                                            <h4 className="tl-1-course-title-new mt-30">Mr. Vadivel Muthu</h4>
                                            <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                            <Link href="https://manage-api.sguk.ac.in/api/assets/674ebe184b17e19d8f361693" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                                        </div>
                                    </div>
                                </div> 


                                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                                    <div className="tl-1-course-new">
                                        <div className="tl-1-course-img-new">
                                            <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                                        </div>

                                        <div className="tl-1-course-txt">
                                            <h4 className="tl-1-course-title-new mt-30">Mr. Somuva Palit</h4>
                                            <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                            <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                                    <div className="tl-1-course-new">
                                        <div className="tl-1-course-img-new">
                                            <img src="/assets/images/faculty-profile-photos/aeronautical/Shivtej Khot.JPG" alt="Faculty Image"/>
                                        </div>

                                        <div className="tl-1-course-txt">
                                            <h4 className="tl-1-course-title-new mt-30">Mr. Shivtej Khot</h4>
                                            <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                            <Link href="https://manage-api.sguk.ac.in/api/assets/697c8632fb80a1d956db43e6" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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

export default AerospaceDeptFaculty