'use client';
import React from 'react';
import Link from 'next/link';
import Workshops from './Workshops';
import ExpertLectures from './ExpertLectures';
import IndustrialVisits from './IndustrialVisits';
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'
import AerospaceDeptEvents from '../AerospaceDeptEvents';
import AerospaceDeptAchievements from '../AerospaceDeptAchievements';

const AerospaceDeptActivities = () => {
    return (
      <section className="tl-14-blogs tl-3-section-spacing" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <div className="d-flex justify-content-center mb-50"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto">Events, Activities & Achievements</h2></div>
        <div className="row">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

            <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title">Upcoming Events</h2>
            </div>

            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>Drone Workshop</li>
                                   <li>FDP in Aerospace Materials</li>
                                   <li>Internship Program for Other Institution Students </li>
                            </ul>
                        </div>
                  </div>
            </div>

            <AerospaceDeptEvents />

            <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Activities</h2>
            </div>
            <div className="row gy-4 align-items-center">
                <div className="col-lg-12">
                        <div className="accordion mt-10" id="accordionExample">
                            <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-controls="collapseOne"
                                    >
                                    International Conference Attended
                                    </button>
                                </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding :"15px"}}>
                                    <div className="col-md-12 col-12"> 
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>S.V.Khandal, Balaji.K, V.V.Kulkarni, N.S.Desai, Aishwarya Mukund Katkar, Shubham Rajaram Mali on International conference on advance in power generation from renewable energy Sources, Banswara(Rajasthan) on 11th 12th February 2019. Title of Article - Effect of preheating the cotton seed Biodiesel on the performance of diesel engine.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                 National Conference Attended
                                    </button>
                                </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>Sangamsinh Jadhav, Ruturaj Patil, S.V. Khandal, T. B. Shinde, N.V. Sabnis, N.S. Desai National Conference on Innovative Trends in Engineering and Technology, Solapur on 15th -16th March 2019. Title of Article - Performance of Biodiesel Powered Diesel Engine with Different Injection Strategies</li>
                                            <li>Vaishnavi Shivkumar Hirekodi, Jyoti Mahantesh Mangasuli, S.V. Khandal, Balaji. K National Conference on Innovative Trends in Engineering and Technology, Solapur on 15th -16th March 2019. Title of Article - Effect of Fuel Injection Timing, Injection Pressure and Combustion Chamber Shapes on the Performance of Diesel Engine Run on Biodiesel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                    Seminars / Workshops Attended
                                    </button>
                                </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>Sagar Anil Patil, Vishwajeet Anil Subhedar has participated in "International Workshop on Life in Space "organized by Indian Astrobiology Research Foundation held on 17th March 2019</li>
                                            <li>National Seminar on Industry 4.0- Preparedness of Manufacturing Industry and Academia on 19th January 2019</li>
                                            <li>Effective Students Engagement in Learning Through Active Learning Techniques on 11th -12th January 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                    Workshops / Programs Conducted
                                    </button>
                                </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                            <Workshops/>
                        </div>
                    </div>
                </div>

               {/* <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                  Guest / Expert Lectures
                                    </button>
                                </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                            <ExpertLectures/>
                         </div>
                    </div>
                </div>  */}

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix"
                                        aria-expanded="false"
                                        aria-controls="collapseSix"
                                    >
                                  Internship Program 
                                    </button>
                                </h2>
                            <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                   
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>
                                                <Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675024374b17e19d8f361a6d">Ten Days Internship Program on Aviation in Association With Star Air, Bangalore from 15th to 24th June 2019 <i className="fa-regular fa-arrow-right-long"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="collapseSeven"
                                    >
                                  Industrial Visits
                                    </button>
                                </h2>
                            <div
                                id="collapseSeven"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                            <IndustrialVisits/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="tl-11-section-heading mt-50">
	        <h2 className="tl-11-section-title">Industrial Visit</h2>
        </div>

    <div className="row g-xl-4 g-3 justify-content-center">
        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/mohite-visit.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>Mohite Hydro Power Station, Radhanagari on 28th September 2024. </h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/star-air.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>Star Air Helicopter Division at Majlae 30th August 2024</h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/vsvesvaraya -industrial.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>Visvesvaraya Industrial and Technological Museum Bangalore 22nd August 2024. </h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/HAL-meum.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>HAL Musem  Bangalore 21st August 2024.</h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/UR-rao.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>U R Rao Satellite Centre  Bangalore 20th August 2024.</h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/aditi.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>Aiditi Industries MIDC Shiroli Kolhapur 10th September 2023</h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/vssc.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>VSSC (ISRO) at Trivandrum 18th May 2023</h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/star-air-22-1.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>Star Air Helicopter Division at Majlae 5th August 2022</h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/star-air-22-2.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>Star Air Helicopter Division at Majlae 26th July 2022</h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/HAL-22.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>HAL Museum at Bangalore  28th May 2022</h3>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-10">
            <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                <div className="tl-8-course-img">
                    <img src="assets/images/aerospace-engineering-dept/industrial-visit/UR-rao-22.png" alt="Industrial Visit Image"/>
                </div>
                <div className="tl-8-course-txt">
                    <h3>U R RAO SATELLITE CENTRE (ISRO) 27th May 2022</h3>
                </div>
            </div>
        </div>
    </div>

        <div className="tl-11-section-heading mt-50">
	        <h2 className="tl-11-section-title">Student and Faculty Achievements</h2>
        </div>
        <AerospaceDeptAchievements />
    </div>
    </div>
</div>
</section>
)
}

export default AerospaceDeptActivities;