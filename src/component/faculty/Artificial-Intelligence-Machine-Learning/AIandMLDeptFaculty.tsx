'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AIandMLDeptFaculty = () => {
  return (
    <section className="tl-inner-courses pb-100 pt-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Faculty Profile</h2>
        <div className="row">
          <MenuList dept="Artifitial Intelligence and Machine Learning" subMenu={NavLinks} />
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
                                <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Mahesh Gaikwad</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Head & Associate Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d93a3e4f56d3a0bcfba03e" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn">Profile</Link>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/2. Dr. AISHWARYA M. P..jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Aishwarya M. P.</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d939824f56d3a0bcfba034" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                    

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/3. Ms. SUJATA PARDESHI.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Sujata Pardeshi</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d939564f56d3a0bcfba02a" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/4. Ms. PALLVAI MAJGAVE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs. Pallavi Amol Majgave</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/674edddf4b17e19d8f3617b2" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/5. Mr. AMRISH PATIL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Amrish Patil</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d9399e4f56d3a0bcfba039" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/6. Ms. VARSHA KASOTE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs. Varsha Kunal Kasote</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/674ede0a4b17e19d8f3617b7" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/7. Ms. SHWETA SHETE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. shweta Shete</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d9396b4f56d3a0bcfba02f" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/8. Mr. ANIL SARNOBAT.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Anil Lahu Sarnobat</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/674ede1e4b17e19d8f3617bc" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                        <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/10. Ms. YOGITA PATIL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Yogita Namdev Patil</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/674ede594b17e19d8f3617c6" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                     <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/11. Mr. VIDYANAND UPADHYE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Vidyanand Ashok Upadhye</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Teaching Assistant</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/674ede6a4b17e19d8f3617cb" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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

export default AIandMLDeptFaculty