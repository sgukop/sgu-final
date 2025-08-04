import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ManagementDeptFaculty = () => {
  return (
    <section className="tl-inner-courses pb-100 pt-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Faculty Profile</h2>
        <div className="row">
          <MenuList dept="School of Management" subMenu={NavLinks} />
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
                                <p className="tl-1-course-author-new dark-mode-white-color">Professor & Dean</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/677e08e44f56d3a0bcfb4a4b" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/5. Dr. VILAS BALGAONKAR.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Vilas Shivshankar Balgaonkar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor & HOD</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675013144b17e19d8f361971" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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
                                <img src="/assets/images/faculty-profile-photos/management/3. Dr. VISHWAS PENDSE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Vishwas Shriniwas Pendse</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6775113a4f56d3a0bcfb3fce" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/4. Dr. GANESH JAGTAP.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Ganesh Appasaheb Jagtap</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675013034b17e19d8f36196c" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/6. Dr. DIPAK JADHAV.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Dipak Shivaji Jadhav</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675013254b17e19d8f361976" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                   
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/8. Mr. ANIRUDHA KAMBLE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Anirudha Pandit Kamble</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6750134f4b17e19d8f361980" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                     <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/9. Mr. PRASHANT KUMBHAR.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Prashant Tukaram Kumbhar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675013634b17e19d8f361985" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/11. Mr. VINAYAK GRAMOPADHYE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Vinayak Raghunath Gramopadhye </h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6750138a4b17e19d8f36198f" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                     <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/12. Mr. MILIND SHINDE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Milind Maruti Shinde</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/6750139c4b17e19d8f361994" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                     <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/16. Mr. PRASANN INGALE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Prasann Dadaso Ingale</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/677511234f56d3a0bcfb3fc9" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/17. Mr. SAGAR KURANE.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Sagar Mahadev Kurane</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675014054b17e19d8f3619ad" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Rohit Pawar</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3ea374f56d3a0bcfb9c0a" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/Dr. Anup Mule.JPG" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Dr. Anup Mule</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Associate Professor</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/Mr. Amritesh Singh.JPG" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Amritesh Singh</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/Mrs. Kusum parik.JPG" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mrs. Kusum parik</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Assistant Professor</p>
                                <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/management/Mr. Narayan Kharat.JPG" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Mr. Narayan Kharat</h4>
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
                                <h4 className="tl-1-course-title-new mt-30">Dr. Dipak Tatpuje</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Distinguished Professor</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3eb0b4f56d3a0bcfb9c0f" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/female.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">CA. Vrishali Kulkarni</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Professor of Practice</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3eb184f56d3a0bcfb9c14" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                        <div className="tl-1-course-new">
                            <div className="tl-1-course-img-new">
                                <img src="/assets/images/faculty-profile-photos/male.jpg" alt="Faculty Image"/>
                            </div>

                            <div className="tl-1-course-txt">
                                <h4 className="tl-1-course-title-new mt-30">Maheshkumar Sudhakar Lakade</h4>
                                <p className="tl-1-course-author-new dark-mode-white-color">Professor of Practices</p>
                                <Link href="https://manage-api.sguk.ac.in/api/assets/67d3fa4f4f56d3a0bcfb9c2e" rel="noopener noreferrer" target="_blank" className="tl-3-def-btn"> Profile </Link>
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

export default ManagementDeptFaculty