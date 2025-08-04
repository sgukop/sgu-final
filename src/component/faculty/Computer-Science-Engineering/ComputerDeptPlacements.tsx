'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import Link from 'next/link';
import { Table } from "react-bootstrap";

const ComputerDeptPlacements = () => {
  return (
    <section className="tl-8-testimonial pt-100 pb-100">
        <div className="container-fluid">
            <div className="tl-8-experts-heading">
                <h2 className="tl-9-section-title mb-50">Incubation</h2>
            </div>
            <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

            <div className="row g-3 g-lg-4 justify-content-center">
                <div className="col-lg-12 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <iframe width="100%" height="640" allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://vrhorizon.viewin360.co/share/collection/7bCwX?logo=1&info=0&logosize=107&fs=1&vr=1&gyro=0&autorotate=0.57&thumbs=-1&margin=4"></iframe>
                        </div>  
                         <h3 className="tl-6-latest-article-title mt-10">Incubation Center</h3>
                    </div>
                  </div>
            </div>  

        <div className="row align-items-center tl-1-about-row">
            <div className="col-lg-12">
            <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Company Name - INTROO+</h3>
                <p>Intro++ is a technology company that provides both services and products. We specialize in web development and cybersecurity services, helping businesses build secure and efficient digital solutions. On the product side, we have developed a POS system to streamline business operations. With experience in various projects, we focus on delivering high-quality and reliable solutions. Our goal is to help businesses grow with technology while ensuring security and efficiency.<br/><br/>
                We are pleased to highlight the Completed projects of Introo+, which reflect our unwavering commitment to Coding Skills : </p>

                    <Table bordered responsive className="governing-table mt-30">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr .No.</p></th>
                                    <th><p className="text-[#4f70b6]">Project Name</p></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>dragon game</p></td>
                                </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>POS Project</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Hunger game: food donation app</p></td>
                                </tr>

                                
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Hackers playground: Platform to learn cyber security</p></td>
                                </tr>

                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Student Feedback system</p></td>
                                </tr>
                               
                            </tbody>
                        </Table>
            </div>
        </div>
    </div>

    <div className="col-lg-12 mt-50">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Company Name - NEXT IN</h3>
                <p>NextIn is a forward-thinking tech company specializing in cutting-edge domains, including Android Development, Web Development, IoT, Graphics Design, Game Development, Blockchain, and AR/VR. We create intuitive mobile apps in Android Studio, develop dynamic websites and platforms, and innovate in IoT with AI-driven automation. Our graphics design team crafts stunning visuals, while our game development division brings immersive experiences to life. We also pioneer in blockchain research, focusing on security, identity management, and access control. Additionally, our expertise in AR/VR is shaping the future of interactive experiences. At NextIn, we blend creativity with technology to deliver powerful, future-ready solutions. </p>

                    <Table bordered responsive className="governing-table mt-30">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr .No.</p></th>
                                    <th><p className="text-[#4f70b6]">Project Name</p></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>NexOps Management website</p></td>
                                </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Millan Application</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>GitHub Fake commit Detection System</p></td>
                                </tr>

                                
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>IOT Attendence Management System</p></td>
                                </tr>

                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>VR Game + Device</p></td>
                                </tr>

                                <tr>
                                    <td><p>6</p></td>
                                    <td><p>Training and placement management system</p></td>
                                </tr>
                            </tbody>
                        </Table>
                </div>
            </div>
    </div>

    <div className="col-lg-12 mt-50">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Company Name - VR Horizon</h3>
                <p>At VR Horizon, we specialize in 3D VR walkthroughs, creating immersive virtual experiences for college campus tours, businesses, real estate, and cultural heritage. Our team of innovators is dedicated to pushing the boundaries of VR and AR technology, making history, education, and exploration more accessible. With a strong focus on Indian culture and heritage, we craft high-quality, interactive experiences that bring spaces to life. Whether for education, tourism, or industry, our custom VR solutions offer seamless, engaging, and innovative ways to explore the world..<br/><br/>

                It is with great pride that we present the completed projects of VR Horizon, each exemplifying our dedication to innovation, precision, and the impactful possibilities of virtual reality technology as follows:</p>

              
                <Table bordered responsive className="governing-table mt-30">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr .No.</p></th>
                                    <th><p className="text-[#4f70b6]">Project Name</p></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Nirmitee Builders</p></td>
                                </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Sai Sagar Beach Resort</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Parisa Beach Resort</p></td>
                                </tr>

                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Grande Vista Resort</p></td>
                                </tr>
                            </tbody>
                        </Table>
                </div>
        </div>
    </div>

    <div className="col-lg-12 mt-50">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Company name - Dev Alpha</h3>
                <p>Dev Alpha specializes in crafting exceptional Android applications using the latest technologies. Our team of skilled developers leverages the power of Jetpack Compose and Kotlin to build visually stunning, performant, and user-friendly mobile experiences. We offer custom app development, from initial concept to deployment and ongoing support, ensuring your app meets your business objectives and exceeds user expectations.</p>

                    <Table bordered responsive className="governing-table mt-30">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr .No.</p></th>
                                    <th><p className="text-[#4f70b6]">Project Name</p></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Video Player app</p></td>
                                </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Chit-Chat: Chatting Application</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Notes Taking Application</p></td>
                                </tr>

                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Attendance Application</p></td>
                                </tr>
                            </tbody>
                    </Table>
            </div>
        </div>
    </div>

    <div className="col-lg-12 mt-50">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Company Name- Yukti Yantra</h3>
                <p><strong>Yukti Yantra </strong>  is a technology company specializing in both services and products, with a strong focus on web development and AI model solutions. We are dedicated to delivering innovative, efficient, and high-quality solutions that meet the evolving needs of businesses. Our company operates through two specialized departments: Web Development and AI Model Development, ensuring expertise in both fields. With a commitment to cutting-edge technology and innovation, we strive to provide the best solutions to help businesses thrive in the digital era. <br/><br/>
                we have successfully completed projects given below: </p>

              
                <Table bordered responsive className="governing-table mt-30">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr .No.</p></th>
                                    <th><p className="text-[#4f70b6]">Project Name</p></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Stock Information-Gathering Chatbot</p></td>
                                 </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Recommendation System</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Speech emotion recognition</p></td>
                                </tr>
                            </tbody>
                    </Table>
            </div>
        </div>
    </div>

    <div className="col-lg-12 mt-50">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Company Name :- Catalyst Coders</h3>
                <p>Catalyst Coders is a dynamic web and app development company dedicated to delivering innovative digital solutions. We specialize in building high-performance websites and mobile applications tailored to meet business needs. With a focus on cutting-edge technology and user-centric design, we help clients transform their ideas into reality. Our expertise spans across various industries, ensuring scalable, secure, and efficient digital products.<br/><br/>
                At the moment, we don't have completed projects, but we are actively working on three exciting projects. These projects are progressing well and will be completed soon, showcasing our expertise in web and mobile development.</p>

                <Table bordered responsive className="governing-table mt-30">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr .No.</p></th>
                                    <th><p className="text-[#4f70b6]">Project Name</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>SGU Messaging App</p></td>
                                </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Foodie (Food delivery app)</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Attendence System (Only For Incubation)</p></td>
                                </tr>
                            </tbody>
                    </Table>
            </div>
        </div>
    </div>

    <div className="col-lg-12 mt-50">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Company Name - EngiiGenius</h3>
                <p>EngiiGenius is a technology company specializing in IoT, robotics, automation, and both hardware & software solutions. We are dedicated to developing cutting-edge innovations that bridge the gap between technology and real-world applications.<br/>
                In addition to our core technical services, we actively contribute to the EdTech sector by developing innovative learning solutions, making technology more accessible to students and professionals. Our mission is to foster creativity, innovation, and efficiency through technology-driven solutions. <br/>
                With expertise in multiple domains, EngiiGenius has successfully executed various projects, demonstrating our strong commitment to engineering excellence. We continue to push the boundaries of innovation to create impactful solutions for industries and education. <br/>

                We are pleased to highlight the Completed projects of Engiigenius ,which reflect our unwavering commitment to Technical Skills</p>

              
                <Table bordered responsive className="governing-table mt-30">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr .No.</p></th>
                                    <th><p className="text-[#4f70b6]">Project Name</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Water pollution monitoring boat.</p></td>
                                </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Smart ECG System with Automation.</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>EV Battery Management System.</p></td>
                                </tr>
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Smart Helmet with IoT.</p></td>
                                </tr>

                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>IoT based Air Purification System.</p></td>
                                </tr>
                            </tbody>
                    </Table>
            </div>
        </div>
    </div>
        </div>

        <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Glimpses of Projects</h2></div>
            <div className="row g-3 g-lg-4 justify-content-center">
                <div className="col-lg-6 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <iframe width="100%" height="640" allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://vrhorizon.viewin360.co/share/collection/7bslN?logo=1&info=0&logosize=107&fs=1&vr=1&gyro=0&autorotate=0.57&thumbs=-1&margin=4"></iframe>
                        </div>  
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <iframe width="100%" height="640" allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://vrhorizon.viewin360.co/share/collection/7bslZ?logo=1&info=0&logosize=107&fs=1&vr=1&gyro=0&autorotate=0.57&thumbs=-1&margin=4"></iframe>
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

export default ComputerDeptPlacements