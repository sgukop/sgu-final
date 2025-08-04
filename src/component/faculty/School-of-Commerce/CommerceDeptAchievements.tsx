import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const CommerceDeptAchievements = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container-fluid">
            <div className="tl-14-section-heading"><h2 className="tl-9-section-title mb-50">Events, Achievements & Activities</h2></div>
                <div className="row">
                    <MenuList dept="Commerce" subMenu={NavLinks} />
                        <div
                                data-spy="scroll"
                                className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
                                data-target="#menu-navbar"
                                data-offset="0"
                            >
                                <div className="tl-11-section-heading">
	                                <h2 className="tl-11-section-title">Achievements</h2>
                                </div>
                                <div className="row g-xl-4 g-3 justify-content-center">
                                    <div className="col-xl-6 col-lg-10">
                                        <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                                            <div className="tl-8-course-img">
                                                <img src="assets/images/commerce-dept/achievements/achievement1.png" alt="Achievement Image"/>
                                            </div>
                                            <div className="tl-8-course-txt">
                                                <p className="dark-mode-white-color"><strong>Student Name:- Shirish Padulkar,</strong></p>
                                                <p className="dark-mode-white-color"><strong>Class : F.Y. B.Com</strong></p>
                                                <p className="dark-mode-white-color">Secured a Bronze Medal at the All India Inter-University Taekwondo Tournament Held at Guru Nanak Dev University, Amritsar.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-10">
                                        <div className="tl-8-course mb-30 flex flex-col rounded-[20px] h-full">
                                            <div className="tl-8-course-img">
                                                <img src="assets/images/commerce-dept/achievements/achievement2.png" alt="Achievement Image"/>
                                            </div>
                                            <div className="tl-8-course-txt">
                                                <p className="dark-mode-white-color"><strong>Student Name : Smriti Mandhana</strong></p>
                                                <p className="dark-mode-white-color"><strong>Class : SYBCOM</strong></p>
                                                <p className="dark-mode-white-color">Indian International Cricketer, Captain of Royal Challengers Bangalore (RCB), Indian Women's Premier League</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

            <div className="tl-14-section-heading"><h2 className="tl-9-section-title mt-50">Activities</h2></div>
            <h3 className="tl-event-details-area-title text-[#4f70b6] mb-10 text-center">Dnyan Pravah 2025 <small>Expert Talk Series</small></h3>

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Expert Talk on Preparation of CA and CS Exams</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">Expert talk by Chartered Accountant Jyoti Harale on preparing for CA and CS exams held on January 15, 2025, as part of the "Dnyan Pravah 2025" series. The session, attended by 33 commerce students, provided insights into exam strategies, career opportunities, and study techniques. Students found the lecture informative and engaging, particularly appreciating the clear breakdown of complex exam structures. The department plans to follow up with workshops addressing challenging syllabus topics and will use student feedback to enhance future sessions.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/commerce-dept/activities/activity1.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Expert Talk on Fundamental Analysis of Share Market</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">"Fundamental Analysis of Share Market" by Mr. Hasmukh Shah, held on February 5, 2025, as part of the "Dnyan Pravah 2025" series. The offline session, attended by 22 students, aimed to enhance financial literacy and investment decision-making skills. Students gained insights into company financials, market trends, and key indicators. The lecture was well-received for its clarity and practical examples. To further support student learning, the department plans to create a financial terms guide and utilize feedback to improve future investment-related sessions.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/commerce-dept/activities/activity2.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/commerce-dept/activities/activity3.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Expert Talk on Financial Statement Analysis for Commerce Students</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">"Dnyan Pravah 2025" expert talk by Dr. Pravin Mahamuni, focusing on financial statement analysis for non-commerce students. Held online on January 29, 2025, the session aimed to enhance financial literacy and business understanding through clear explanations and practical examples. The event, attended by 22 students, was well-received, with positive feedback regarding the clarity of the lecture. Follow-up sessions and study groups are planned to further support non-commerce students in developing their financial analysis skills.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/commerce-dept/activities/activity4.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/commerce-dept/activities/activity5.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Sports</h2></div>
                <div className="row g-3 g-lg-4 justify-content-center">
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport1.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                      
                    </div>
                  </div>
               
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport2.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                      
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport7.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport8.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                  </div> 

                   <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport9.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                  </div>  

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport11.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                </div>   

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport12.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport13.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport14.jpeg" alt="Academic Infrastructure Image" /></figure>
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

export default CommerceDeptAchievements