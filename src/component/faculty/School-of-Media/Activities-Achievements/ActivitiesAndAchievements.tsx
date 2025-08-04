'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import NavLinks from '../Navlinks';
import MenuList from '../../Reusable-components/MenuList';
import Activities2223 from './Activities2223';
import Activities2324 from './Activities2324';
import MasscommunicationDeptEvents from '../MasscommunicationDeptEvents';

const Photojournalism = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/guest-lecture-photojournalism/guest-lecture1.jpg",
  },
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/guest-lecture-photojournalism/guest-lecture2.jpg",
  },
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/guest-lecture-photojournalism/guest-lecture3.jpg",
  },
];

const visittomatofm = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/visit-tomato-fm/visit-1.jpg",
  },
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/visit-tomato-fm/visit-2.jpg",
  },
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/visit-tomato-fm/visit-3.jpg",
  },
];

const sangalivisit = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/expo-sangli/image1.jpg",
  },
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/expo-sangli/image2.jpg",
  },
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/expo-sangli/image3.jpg",
  },
];

const newspaperpublications = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/campus-newspaper-publication/image1.jpg",
  },
];

const workshopphotography = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/workshop-photography/photography1.jpg",
  },
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/workshop-photography/photography2.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/workshop-photography/photography3.jpg",
  },
];

const voiceculture = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/workshop-voice-culture/image1.jpg",
  },
];

const tedx = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/TEDXSanjayGhodawatUniversity/image1.jpeg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/TEDXSanjayGhodawatUniversity/image2.jpeg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/TEDXSanjayGhodawatUniversity/image3.jpeg",
  },
];

const nilgudkarguestlecture = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/guest-lecture-nilgudkar/image1.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/guest-lecture-nilgudkar/image2.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/guest-lecture-nilgudkar/image3.jpg",
  },
];

const proguestlecturejpfrient = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/pro-guest-lecture/image1.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/pro-guest-lecture/image2.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/pro-guest-lecture/image3.jpg",
  },
];

const worldpressfridomday = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/worldpress-fridom-day/image1.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/worldpress-fridom-day/image2.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/worldpress-fridom-day/image3.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/worldpress-fridom-day/image4.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/worldpress-fridom-day/image5.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/activities&achievements/worldpress-fridom-day/image6.jpg",
  },
];

const canonworkshop = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/canon-worshop/image1.jpg",
  },
  
];

const jayraneworkshop = [
  {
      imgSrc: "assets/images/mass-communication-dept/activities&achievements/workshop-jay-rane/image1.jpg",
  },
  
];



const ActivitiesAndAchievements = () => {
  return (
    <div className="pt-100 pb-100">
        <div className="container-fluid">
            <div className="row">
                  <h2 className="tl-9-section-title mb-50">Events, Activities And Achievements</h2>
                  <div className="row">
          <MenuList dept="Mass Communication" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <section className="tl-4-innovs">
                <div className="container-fluid">
                    <MasscommunicationDeptEvents />
                </div>
              </section>
              <h2 className="tl-9-section-title mt-50 mb-50">Activities & Achievements</h2>
            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Guest Lecture - Photojournalism</h2></div>
              {/*    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                        <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                              <Nav className="nav-tabs tl-course-details-navs">
                                  <Nav.Item>
                                      <Nav.Link eventKey="overview-tab">2022-23</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link eventKey="curriculum-tab">2023-24</Nav.Link>
                                  </Nav.Item>
                               </Nav>

                              <Tab.Content id="tl-course-tab-content">
                                  <Tab.Pane eventKey="overview-tab">
                                     <Activities2223/>
                                  </Tab.Pane>

                                  <Tab.Pane eventKey="curriculum-tab">
                                     <Activities2324 />
                                  </Tab.Pane>

                                
                              </Tab.Content>
                          </Tab.Container>
                    </div>  */}

            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>Mr.Aditya Welhal,Photojournalist Daily Lokmat, Kolhapur - 28 th Aug. 2023</li>
            </ul>
              {Photojournalism.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Visit-Tomato FM Kolhapur & B News Channel, Kolhapur</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>SY & TY BA JMC Students Visited, Faculty Coordinator Asst.Prof.J.S.Patil & Asst.Prof.Sumit Kadam - 17/09/2023</li>
            </ul>
              {visittomatofm.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            {/* <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Campus Newspaper Publication</h2></div>
           <div className="row tl-7-classes-row">
              {visittomatofm.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>  */}


          <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Visit-Photo Video Expo 2023 Exhibition, Sangli</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>SY & TY BA JMC Students Visited, Faculty Coordinator Asst.Prof.J.S.Patil & Asst.Prof.Priyanka Patil - 06/10/2024</li>
            </ul>
              {sangalivisit.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Campus Newspaper Publication</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>SY BA JMC Students Published SGU Times -1st Campuses newspaper withVC Professor Dr. Uddhav Bhosle, Ragistrar Dr.Vivek Kayande,Dean Dr.Uttam Jadhav Etc. - 06/12/2023</li>
            </ul>
              {newspaperpublications.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Workshop-Photography Workshop(Product Live demo-Canon)</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>Mr.Sudhir Bornak Product expert - Canon - 10 & 11 Oct. 2023</li>
            </ul>
              {workshopphotography.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

         {/*   <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Guest Lecture - Communication & Media Research</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>Dr.Chandrashekhar Wankhede,Editor Daily Lokmat English ,Contribute Lecturer SUK - 05/04/2024</li>
            </ul>
              {workshopphotography.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>  */}

          <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Workshop- Voice Culture</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>Mr.Tushar Bhadre, Professional Voice Trainer, Satara - 30/04/2024</li>
            </ul>
              {voiceculture.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

          {/*  <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Visit- DGIPR Kolhapur</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>Mr.Sachin Aadsul, District PRO Kolhapur - 13/05/2024</li>
            </ul>
              {voiceculture.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>  

          <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Guest Lecture -Digital News Overview and Making</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>Mr. Shishupal Kadam, Producer Zero Hour, ABP MAJHA - 02/9/2024</li>
            </ul>
              {voiceculture.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>  */}

          <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">TEDXSanjayGhodawatUniversity</h2></div>
            <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>TEDxSanjayGhodawatUniversity - 11/11/2024</li>
            </ul>
              {tedx.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Guest Lecture by  dr uday nirgudkar</h2></div>
            <div className="row tl-7-classes-row">
              {nilgudkarguestlecture.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>
            
            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Pro Guest Lecture</h2></div>
            <div className="row tl-7-classes-row">
              {proguestlecturejpfrient.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">World Press Freedom Day Celebration</h2></div>
            <div className="row tl-7-classes-row">
              {worldpressfridomday.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Canon Workshop</h2></div>
            <div className="row tl-7-classes-row">
              {canonworkshop.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Workshop on Screenplay Writting Basics by Jay Rane</h2></div>
            <div className="row tl-7-classes-row">
              {jayraneworkshop.map((Item, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                      <div className="tl-7-class">
                          <div className="tl-7-class-img">
                            <img src={Item.imgSrc} alt="Latest Events Images" />
                        </div>
                      </div>
                  </div>
                ))}
            </div>



        </div>
      </div>    
    </div>
  </div>
  </div>
  )
}

export default ActivitiesAndAchievements