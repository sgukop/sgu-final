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
                                <img src="/assets/images/faculty-profile-photos/AIML/aiml-hod.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr.Santaji Shinde</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">HOD & Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/699d6c85f12ed1048ce48798" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/Priyanka More.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr.Priyanka Shivaprasad More</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/693688988fa776d15fbf5e34" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
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
                                <img src="/assets/images/faculty-profile-photos/AIML/Mr.Najim Abdul Naik.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr.Najim Abdul Naik </h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/9. Ms. SAVITA CHARANE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs.Savita charane </h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr.Jahir Shaikh</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr.Vinayak Kishor Kumbhar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/Mr.Kamble Siyang.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr.Kamble Siyang Prafulla</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/693688738fa776d15fbf5e2a" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/Reshma Pasale.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs.Reshma Vishal Pasale</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6936888b8fa776d15fbf5e2f" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/Vedika Palle.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms.Vedika Vikas Phalle</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Teaching Assistant</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6ab63aadf7f7f18b129732c4" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/Radika Jadhav.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms.Radhika Vinayak Jadhav</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Teaching Assistant</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/AIML/Kamble Pranali.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Pranali Jagannath Kamble</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Teaching Assistant</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6ab63a33f7f7f18b129732a2" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/female.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Amruta.S.Biradar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Teaching Assistant </p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6ab638dff7f7f18b1297325e" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr.Vishal Devadas Harader</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant professor  </p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6ab639a3f7f7f18b12973283" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/female.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms.Pooja Rajendra Mhetre</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6ab63accf7f7f18b129732cd" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/male.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ambaji Janardan Desai</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Teaching Assistant</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6ab63b5df7f7f18b129732ec" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Sagar Bhimrao Magdum</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant professor  </p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6ab63a55f7f7f18b129732af" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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