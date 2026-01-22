import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const LawDeptActivities = () => {
  return (
    <section
      className="tl-14-blogs tl-3-section-spacing"
      data-bg-color="#F3F1F1"
    >
      <div className="container-fluid">
        <div className="tl-14-section-heading">
          <h2 className="tl-9-section-title mb-50">
            Events, Activities And Achievements
          </h2>
        </div>
        <div className="row">
          <MenuList dept="School of Legal Studies(Law)" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
          
          <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Upcoming Events</h2></div>
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                      <div className="tl-event-details-key-content tl-event-details-area">
                       <h5 className="tl-8-single-pricing-title text-[#4f70b6] mb-4">Discussion on Three New Criminal Laws</h5>
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>Join us for an insightful session on the latest developments in criminal law as we explore the three newly enacted legal provisions. Legal experts and scholars will analyze their impact on the justice system and society. Don't miss this opportunity to stay informed and engage in thought-provoking discussions!</li>
                                   
                            </ul>

                            <h5 className="tl-8-single-pricing-title text-[#4f70b6] mb-4 mt-4">Seminar on 3 New Criminal Laws</h5>
                            <img src="assets/images/law-dept/upcoming-events/criminal-law-image.png" />
                        </div>
                  </div>
                </div>
            </div>

        <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Latest Events</h2></div>

          <div className="row g-xl-4 g-3 justify-content-center">

          <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/1.jpg"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                <strong>Inauguration of the School of Legal Studies</strong><br/>
                Adv. Dr. Ujwal Nikam and President Mr. Sanjay Ghodawat officially inaugurate the School of Legal Studies, marking a new milestone in legal education and excellence.

                </p>
              </div>
            </div>
          </div>
          

            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/latest-events/1.png"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                    Students won Runner up prize in 10th All India Shivaji University Moot Court and ADR Competition and Vidhi Mela 2025
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/latest-events/5.jpg"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                    SGU’s Aditi Patil & Husain Shaikh win 1st place in the “Legal Escape Room” at Amity University, Mumbai (April 7–9, 2025).
                </p>
              </div>
            </div>
            </div>
            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/latest-events/6.jpg"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                    Democracy Day was celebrated with enthusiasm in School of Legal Studies on 15th September, 2025. Students participated in Poster Making and Extempore Competition
                </p>
              </div>
            </div>
            </div>
            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/latest-events/7.jpg"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                    10th All India Shivaji University Moot Court and ADR Competition & Vidhi Mela 2025.The competition is scheduled to be held on 8th and 9th March 2025 at Shivaji University,Kolhapur. 
                </p>
              </div>
            </div>
            </div>
            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/latest-events/2.png"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                    Participation in Moot Court And ADR competition held at Shivaji University, Kolhapur and N.B.T Law College, Nashik
                </p>
              </div>
            </div>
            </div>

            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/latest-events/8.jpg"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                    Students of School of Legal Studies, on 15th August,2025 Independence Day, performed a Street Play in Kameri Village, Dist- Sangli, in order to create awareness among the villagers regarding Cyber Crimes and Child Marriages. The Sarpanch of Kameri Grampanchayat encouraged the same and also provided the opportunity to visit the Grampanchayat.
                </p>
              </div>
            </div>
            </div>

            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/latest-events/3.png"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                Inauguration of Legal aid Cell by Hon'ble Smt. Kavita B. Agrawal <br/> Principal District and Sessions Judge, Kolhapur <br/>
                Chairman, District Legal Services Authority, Kolhapur and Hon'ble Shri. S. S. Ingale <br/>
                Secretary, District Legal Services Authority, Kolhapur

                </p>
              </div>
            </div>
            </div>

            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/latest-events/4.png"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                    Students participated in rally at Kolhapur to support High Court bench at Kolhapur. 
                </p>
              </div>
            </div>
            </div>
          </div>

            <p className="dark-mode-white-color mb-6 text-[#4f70b6] mt-10">
              <strong>The department hosts a variety of enriching activities, including
              guest lectures by legal experts, debate competitions to enhance
              critical thinking, and cultural fests that celebrate creativity
              and diversity.</strong>
            </p>

            <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/Debate competation photo.jpg"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                  Debate competition was conducted for the students on the issue
                  of, immersion of Ganesh idols in Panchganga river and its
                  effect on environment. Students participated with a lot of
                  enthusiasm and learnt professional ways to communicate in
                  court room.
                </p>
              </div>
            </div>
          </div>
          
            <div className="col-xl-6 col-lg-10">
            <div className="tl-8-course flex flex-col rounded-[20px] h-full">
              <div className="tl-8-course-img">
                <img
                  src="assets/images/law-dept/activities&achievements/Guest Lecture on ENV Law.jpg"
                  alt="Achievement Image"
                />
              </div>
              <div className="tl-8-course-txt">
                <p className="dark-mode-white-color">
                  Various guest lecture were conducted for students on different
                  topics like, criminology, penology, AI Law,
                </p>
              </div>
            </div>
            </div>
          </div>
            <div className="row g-3 g-lg-4 mt-50">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/law-dept/activities&achievements/debate-competation-award.jpg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Debate competation Award</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/law-dept/activities&achievements/Moot Court Photo.jpg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Moot Court Photo</h3>
                    </div>
                  </div>
              </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawDeptActivities;
