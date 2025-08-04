import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacyDeptactivities = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">Activities & Achievements</h2>
          <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
             <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Annual Planning</h2></div>
                <div className="tl-3-programs-pills">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67d3df304f56d3a0bcfb9bf9" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Annual Activity Plan - 2025-26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Activities & Achievements</h2></div>
            <div className="tl-3-programs-pills mt-50">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67d3df304f56d3a0bcfb9bf9" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Annual Activity Plan - 2025-26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67516eea4b17e19d8f361e72" target="_blank" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">Activities conducted From AY 2019 to 2022 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67d3dad24f56d3a0bcfb9b93" target="_blank" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">SOPS Activities - 2022-23 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67d3dade4f56d3a0bcfb9b98" target="_blank" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">SOPS Activities - 2023-24 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67d3daea4f56d3a0bcfb9b9d" target="_blank" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">SOPS Activities - 2024-25 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>

          <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Glimpses 2024-25</h2></div>
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-xl-6 col-lg-10">
        
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-1.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Field Visit at Srinivas Pharma, Sangli and Bharati Hospital, Sangli for course Hospital and Clinical Pharmacy and Community Pharmacy & Management Dt. 29-08-2024</p>
                  </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-2.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Guest Lecture by Dr. Sameer Nadaf on Quality by Design (QbD) Dt. 06-09-2024 </p>
                  </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-3.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Tree Plantation: Ek Ped Maan ke Naam (Plant 4 mother) Dt. 17-09-2024</p>
                  </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-4.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Pharma Exert Guest Lecture by Prof. Sachin Lokapure, Director, SAGLO Research Centre on IPR and Entrepreneurship development through IPR Dt. 18-09-2024</p>
                  </div>
              </div>
            </div>
            
            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-5.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">NPTEL Awareness Workshop on Course enrolment, exam registration & credit transfer policy Dt. 19-09-2024 & 23-09-2024</p>
                  </div>
              </div>
            </div>

              

              <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-7.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Guest Lecture by Prof. V. N. Raje on Diploma Pharmacy Exit Exam 2024 Dt. 19-09-2024</p>
                  </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-8.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">World Pharmacist Day Celebration: Debate & Skit Competition on 25-09-2024</p>
                  </div>
              </div>
            </div>
              <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-9.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Workshop on Artificial Intelligence in Pharma organised by SGU in association with Makein-tern and IIT Hyderabad</p>
                  </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-10.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Guest Lecture by Dr. Bhutkar on Recent trends in NDDS Dt. 10-10-2024</p>
                  </div>
              </div>
            </div> 

            <div className="col-xl-6 col-lg-10">
                <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-11.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">National cGMP Day Dt. 10-10-2024</p>
                  </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-12.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Field Visit at Sushil LLP, Ichalkaranji Dt. 10-10-2024</p>
                  </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-13.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Inauguration of M. Pharm Program Dt. 14-10-2024</p>
                  </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="tl-8-course mb-30 flex flex-col h-full rounded-[20px]">
                  <div className="tl-8-course-img">
                      <img src="assets/images/pharmacy-dept/activities&achievements/activity-14.jpg" alt="Activity and Achievement Image"/>
                  </div>
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">Parents meet Dt. 18-10-2024</p>
                  </div>
              </div>
            </div> 
            <div className="col-xl-6 col-lg-10">
                <div className="tl-8-course mb-30">
                  <div className="tl-8-course-txt">
                      <p className="dark-mode-white-color">4Th National Pharmacovigilance Week Celebration: Leaflet/Poster preparation Dt. 17-09-24 To 23-09-24</p>
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

export default PharmacyDeptactivities