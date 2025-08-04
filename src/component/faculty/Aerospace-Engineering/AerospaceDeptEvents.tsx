import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AerospaceDeptEvents = () => {
  return (
    
            
       
      <>
            <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Events</h2>
            </div>
            <div className="row g-3 g-lg-4">
                
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/latest-events/3.png" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/latest-events/3.png" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Hydro Rocketry Challenge, Paper Plane, Poster presentation and seminar are conducted on
                        Airforce day, 08/10/2024.</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/latest-events/4.png" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/latest-events/4.png" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Glider Competition</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/latest-events/5.png" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/latest-events/5.png" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Poster Presentation</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/latest-events/6.png" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/latest-events/6.png" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Hydro Rocketry</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/latest-events/7.png" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/latest-events/7.png" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">On the day of Sci-Star event, Department has conducted Drone show Exhibition on 24/01/2024</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/latest-events/1.png" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/latest-events/1.png" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Quiz and Poster presentation Conducted on 13/08/2024</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/latest-events/2.png" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/latest-events/2.png" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">On National Space Day, Seminar, quiz and Movie Screening on India’s Space History are
                        conducted, 13/8/2024.</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <h3 className="tl-6-latest-article-title mt-10">On the day of Sci-Star event, Department has conducted water rocketry Challenge and Drone
                        show on 24/01/2024</h3>
                    </div>
                  </div>
             </div>

     {/*   <div className="tl-11-section-heading mt-50">
	        <h2 className="tl-11-section-title">STTP Organised</h2>
        </div>
        <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
           <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">NPTEL Sponsored a one-day National level online workshop under the Title of NPTEL Awareness on 15/12/2021</h4>
                  </div>
                </div>
            </div>  

             <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">NPTEL Sponsored a one-day National level online workshop under the Title of NPTEL Awareness on 27/07/2022</h4>
                  </div>
                </div>
            </div>  

            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">ISTE Sponsored Five Days Online STTP on "Design, Development of Drone and Its Applications" from 21st to 25th June 2021.</h4>
                        <div className="tl-header-actions d-flex justify-content-start mt-25">
                            <Link className="tl-def-btn bg-[#f26122] text-white" href="https://manage-api.sguk.ac.in/api/assets/675026dc4b17e19d8f361ac5" target="_blank">STTP Brochure</Link> 
                            <Link className="tl-def-btn bg-[#f26122] text-white" href="https://manage-api.sguk.ac.in/api/assets/6750270a4b17e19d8f361aca" target="_blank">STTP Report</Link>
                        </div>
                       
                  </div>
                </div>
            </div>  

            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">Star Air Sponsored one week STTP on topic of Recent Trends & Developments in Aviation Maintenance from 13th to 17th February, 2023</h4>
                        <div className="tl-header-actions d-flex mt-25">
                            <Link className="tl-def-btn bg-[#f26122] text-white" href="https://manage-api.sguk.ac.in/api/assets/6750272a4b17e19d8f361acf" target="_blank">STTP Report From 13th to 17th February, 2023</Link>
                        </div>
                  </div>
                </div>
            </div>  
        </div>   */}

<div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Guest / Expert Lectures</h2>
            </div>

<div className="tl-event-details-left " style={{padding:'5px'}}>
        <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px"}}>
            <div className="col-md-12 col-12"> 
                <ul className="tl-event-details-key-content-list phd-container">
                <li>Dr.P. Anandh, Head, RPTO, Garuda Aerospace Private Limited, Chennai addresses a Webinar on a topic of “Importance of Drones in Defense, Agriculture, and Aerial Photography” in Sanjay Ghodawat University on 3 rd February 2025.</li>
                <li>Mr.R. Harsha, Lead Systems Engineer, Boeing, Bangalore addresses a Webinar on a topic of “Ensuring Aviation Safety: A deep Dive into Flight Airworthiness” in Sanjay Ghodawat University on 30 th Sep 2024.</li>
                    <li>A guest lecture on Cryogenics- The science and engineering of very Low Temperatures was conducted by Dr. K. V. Srinivasan, Scientist In charge, Tata Institute of Fundamental Research,Mumbai, on 30 th July 2024.</li>
                    
                    <li>A guest lecture on An Insight into India's Missile Defense Strategy was conducted by Mr.Syed Habeeb, Assistant Professor, SGU, on 23 August 2024.</li>
                    <li>A guest lecture on Evolution and Innovation in Indian Space Launches was conducted by Dr.Muzeer.S, Assistant Professor, SGU, on 23 rd August 2024.</li>
                   
                    
                    <li>A Guest Lecture an Topic of Importance of the Technical publication to Aeronautical students by Mr.Lokesh Bellamkonda, Lead - Learning And Development, Gloinnt Solutions, Meganahalli, Bengaluru Kolhapur, on 19/03/2024</li>
                    <li>A Guest Lecture an Topic of Leadership Need of the Hour by Mr.Sandeep C Kulkarni General Manager of Aditi Industries Ambap Kolhapur, on 5/02/2024</li>
                    <li>A Guest Lecture an Topic of Space and Defence Software Training Frim by Mr.Dhanish Khader Founder of SS-Technologies Bangalore, on 11/08/2023.</li>
                    <li>A Guest Lecture an Topic of Advancement Technologies and Jet Propulsion by Mr.Nijanthan Director, Sky Aerospace Bangalore, on 11/08/2023.</li>
                    <li>A guest lecture was organized on topic of Aviation safety on 15/05/2023.</li>
                    <li>A guest lecture was organized on topic of higher studies opportunity for aerospace or aeronautical engineering on 26/08/2022</li>
                    <li>A guest lecture was organized on topic of CFD Analysis application on 29/08/2022.</li>
                    <li>A guest lecture was organized on topic of Recent development and trends in sheet metal forming for Aerospace application on 29/08/2022.</li>
                    <li>A Guest Lecture was organised on Drone Making by Mr. Shrinivasalu Reddy, COE of Skycraft Technologies</li>
                    <li>A Guest Lecture was organised on Current Trends in Aeronautical on 30/08/2019 by Mr. Yuvraj</li>
                    <li>A Guest Lecture was organised on Recovery Payload Device for Tethered Aerostats on 30/09/2019 by Dr. Rajkumar Pant, IIT Mumbai.</li>
                    <li>A Two Days Guest Lecture was organised on NASTRAN/ PATRAN on 22/09/2019 and 23/09/2019 by Mr. G. Mari Prabhu</li>
                    <li>A Guest Lecture was organised on Application of Carbon Composites on 14/10/2019 by Mr. Rushikesh Deshpande</li>
                    <li>A Guest Lecture was organised on Introduction to IPR on 11/10/2019 by Mr. Devendra Gowda</li>
                    <li>A Guest Lecture was organised on Industry 4.0 Application on 23/01/2020 by Mr. Atul Marathe</li>
                    <li>A Guest Lecture was organised on Alarus Aircraft maintenance on 09/03/2019</li>
                    <li>A Guest Lecture was organised on Advanced Trends in Aerodynamics on 06/03/2019</li>
                    <li>A Guest Lecture was organised on Recent Trends on Aerospace in Structures on 15/01/2019</li>
                    <li>A Guest Lecture was organised on Aero modeling of Fixed and Rotary wing R/C Aircraft on 09/09/2018</li>
                    <li>A Guest Lecture was organised on Robotics on 18/07/2018</li>
                    <li>A Guest Lecture was organised on Introduction to Aerodynamics on 17/07/2018</li>
                    <li>AA Guest Lecture was organised on Introduction to Aeronautical Engineering on 16/07/2018</li>
                </ul>
          </div>
      </div>
</div>

             <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Sports</h2>
            </div>

            <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport1.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">BOYS SPORTS TEAM FROM AERONAUTICAL ENGINEERING</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport2.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">GIRLS SPORTS TEAM FROM AERONAUTICAL ENGINEERING</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport3.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">WINNERS AT NATIONAL LEVEL VOLLEYBALL COMPETITION</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport4.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">WINNERS FELICITATION BY HOD</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport5.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">NATIONAL WINNERS WITH DEPARTMENT FACULTIES</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport6.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">DEPARTMENT SPORTS ACTIVITY 2023-2024</h3>
                    </div>
                  </div>
            </div>   

            <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Vibrant 2K23 Drone Rush</h2>
            </div>
            <div className="row g-3 g-lg-4 justify-content-center">
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/vibrant-2023/vibrant1.jpeg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/vibrant-2023/vibrant1.jpeg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        
             
                        <h3 className="tl-6-latest-article-title mt-10">VIBRANT 2K23 DRONE RUSH - 1</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/vibrant-2023/vibrant2.jpeg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/vibrant-2023/vibrant2.jpeg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">VIBRANT 2K23 DRONE RUSH - 2</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/vibrant-2023/vibrant3.jpeg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/vibrant-2023/vibrant3.jpeg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">VIBRANT 2K23 DRONE RUSH -3</h3>
                    </div>
                  </div>
            </div>
            
           
            <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title mt-50">Poster Presentation</h2>
            </div>
            <div className="row g-3 g-lg-4">
             <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/poster-presentation/poster-presentation1.jpeg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/poster-presentation/poster-presentation1.jpeg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">POSTER PRESENTATION - 1</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/poster-presentation/poster-presentation2.jpeg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/poster-presentation/poster-presentation2.jpeg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">POSTER PRESENTATION - 2</h3>
                    </div>
                  </div>
                </div> 

           
           {/* <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title mt-50">Photography Event March 2021</h2>
            </div>
            <div className="row g-3 g-lg-4">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/photography/photography1.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/photography/photography1.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">PHOTOGRAPHY EVENT 2021 WINNERS - 1</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/photography/photography2.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/photography/photography2.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">PHOTOGRAPHY EVENT 2021 WINNERS - 22</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/photography/photography3.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/photography/photography3.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">PHOTOGRAPHY EVENT 2021 WINNERS</h3>
                    </div>
                  </div>
                </div> 

         
            <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title mt-50">Womens Day Celebration 8 March 2021</h2>
            </div>
            <div className="row g-lg-4 g-3">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/womens-day/womens-day1.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/womens-day/womens-day1.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">WOMENS DAY CELEBRATION</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/womens-day/womens-day2.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/womens-day/womens-day2.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">WOMENS DAY CELEBRATION</h3>
                    </div>
                  </div>
            </div> 

           
             <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title mt-50">Freshers Party</h2>
            </div>
             <div className="row g-lg-4 g-3">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/freshers-party/freshers-party1.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/freshers-party/freshers-party1.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">FRESHERS PARTY</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/freshers-party/freshers-party2.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/freshers-party/freshers-party2.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">FRESHERS PARTY</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/freshers-party/freshers-party3.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/freshers-party/freshers-party3.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">FRESHERS PARTY</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/freshers-party/freshers-party4.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/freshers-party/freshers-party4.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">FRESHERS PARTY</h3>
                    </div>
                  </div>
            </div>  

           
            <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title mt-50">Game of Drones Competition During Vibrant 2K20</h2>
            </div>
            <div className="row g-lg-4 g-3">
              <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/game-of-drones/game-of-drones1.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/game-of-drones/game-of-drones1.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">GAME OF DRONES COMPETITION</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/game-of-drones/game-of-drones2.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/game-of-drones/game-of-drones2.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">GAME OF DRONES COMPETITION</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/game-of-drones/game-of-drones3.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/game-of-drones/game-of-drones3.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">GAME OF DRONES COMPETITION RUNNERS</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <a data-fslightbox href="assets/images/aerospace-engineering-dept/events/game-of-drones/game-of-drones4.jpg" target="_blank">
                                <figure><img src="assets/images/aerospace-engineering-dept/events/game-of-drones/game-of-drones4.jpg" alt="Events Image"/></figure>
                            </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">VIBRANT 2K20 GAME OF GUIDE AND GLIDE COMPETITION</h3>
                    </div>
                  </div>
            </div>    */}   
            </>        
  )
}

export default AerospaceDeptEvents