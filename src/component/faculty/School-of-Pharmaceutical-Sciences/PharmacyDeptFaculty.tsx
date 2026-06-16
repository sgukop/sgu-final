'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacyDeptFaculty = () => {
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
                                <img src="/assets/images/faculty-profile-photos/pharmacy/1. Dr. SUBHASH KUMBHAR.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Subhash Trimbakrao Kumbhar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Director/Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3d6ad4f56d3a0bcfb9b5e" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/2. Dr. JIWAN LAVANDE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Jiwan Lavande</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Professor & HOD</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6750024f4b17e19d8f3618d8" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/3. Dr. VIDYARANI KHOT.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Vidyarani S. Khot</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Head of Department (D. Pharm)</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3d6d04f56d3a0bcfb9b65" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/4. Ms. SANGITA KUMBHAR.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs. Sangita Anand Kumbhar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675002774b17e19d8f3618e2" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/5. Ms. PRANOTI MAHADEV PATIL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Pranoti Mahadev Patil</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3d6ee4f56d3a0bcfb9b6c" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/6. Mr. SURAJ PATIL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Suraj Kumar Patil</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor TPO Incharge</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675002a34b17e19d8f3618ec" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  
                     

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/8. Ms. ASHWINI CHAKOTE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs. Ashwini Shantiprasad Chakote</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3d7ac4f56d3a0bcfb9b84" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/9. Ms. SHIVANI SAMARTH.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs. Shivani Suraj Samarth</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675002df4b17e19d8f3618fb" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/10. Mr. PRAFULL PATIL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Prafull Prakash Patil</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675002f54b17e19d8f361900" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/11. Ms. CHAITALI SHINDE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs Chaitali Abhijeet Shinde</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675003094b17e19d8f361905" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                     <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/12. Ms. PRIYANKA NITISH DEVARSHI (1).jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs. Priyanka Nitish Devarshi</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6750031d4b17e19d8f36190a" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                     <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/13. Ms. MITALI BORA.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Mitali Manoj Bora</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675003304b17e19d8f36190f" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                     <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/14. Ms. SOURABH BHOSALE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Sourabh Jagannath Bhosale</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3d70c4f56d3a0bcfb9b73" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                     

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/17. Mr. AVDHUT ATHNIKAR.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Avadhut Sidhgonda Athanikar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6750038e4b17e19d8f361923" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 
                    

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/SANGEETA SANGPAL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs. Sangeeta Sankpal</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3d7684f56d3a0bcfb9b7f" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/Ms. Pooja Swani.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Pooja Mahesh Swami</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/699d5fbcf12ed1048ce48773" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/Dhananjay Kinikar.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr.Dhananjay Janardhanrao Kinikar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/699e8305f12ed1048ce48939" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/Gayatri Sawant.jpeg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Ms. Gayatri Satish Sawant</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/699e8336f12ed1048ce48940" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/pharmacy/18. Mr. BIRAPPA DUDHAL.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Dudhal Birappa A.</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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

export default PharmacyDeptFaculty