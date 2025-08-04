"use client"
import React from 'react'
import Link from 'next/link'
import Table from "react-bootstrap/Table";

const ComputerUGProgram = () => {
  return (
    <>
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programmes Offered Under CSE Department</h2>
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/computer-science-engineering/programmes/btech-programmes.png" alt="About Electrial & Electronics Engineering" className="tl-8-about-main-img rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                 <h6 className="tl-8-feature-title mb-4">B.Tech. in Computer Science and Engineering</h6>
                        <div className="tl-8-feature">
                           {/*  <h6 className="tl-13-about-sub-title mr-10">Intake : 18</h6>
                            <h6 className="tl-13-about-sub-title">Fees : Rs. 1,35,000/-</h6>
                            <h6 className="tl-8-feature-title mt-20">About the Programme:</h6>  */}
                            <p className="tl-8-feature-descr mt-2">The B.Tech in Computer Science and Engineering program offered by our department is crafted 
                                    to provide students with a strong foundation in both theoretical and practical aspects of computing.The curriculum is designed to foster expertise in core areas of computer science, including programming, algorithms, data structures, artificial intelligence, machine learning, cybersecurity, cloud computing, big data analytics, and more. With a hands-on approach, students gain experience with real-world problem-solving, research, and technical skills that meet current industry standards.</p>

                           {/*  <h6 className="tl-8-feature-title mt-20">Some of the highlights of the programme are:</h6>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Powered by a project based learning to create an environment to provide constructivism and collaborative learning.</li>
                                <li>Embedded with courses related to Programming, Machine Learning, Natural Language Processing, Artificial Intelligence and Internet of Things (IOT) and Information Security to make it more industry relevant.</li>
                                <li>Mandatory industry internship to give hands-on experience on real life projects.</li>
                            </ul>   */}

                            <h6 className="tl-8-feature-title mt-4">Career Opportunities: Graduates of this program are well-prepared for diverse career paths 
                            across multiple sectors, including: </h6>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Software Development: Designing and developing software solutions for various applications, including mobile, web, and enterprise systems. </li>
                                <li>Data Science and Analytics: Analyzing large datasets to derive insights, create predictive models, and support data-driven decision-making in sectors like finance, healthcare, and marketing.</li>
                                <li>Cybersecurity: Protecting organizations'digital assets by implementing robust security 
                                measures and defending against cyber threats.</li>
                                <li>Cloud Computing: Managing and deploying scalable applications in cloud environments, a skill highly valued in today's IT landscape.</li>
                                <li>AI and Machine Learning: Developing intelligent systems and applications that leverage machine learning, natural language processing, and other AI techniques. </li>
                                <li>Network Administration and IT Support: Ensuring the reliability and security of networks and IT infrastructure in various industries.</li>
                            </ul> 

                           {/*  <h6 className="tl-8-feature-title mt-20">Course Structure and Contents:</h6>
                            <ul className="tl-event-details-key-content-list-new phd-container">
                                <li><Link href="#" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Second Year. <i className="fa-regular fa-arrow-right"></i></Link></li>
                                <li><Link href="#" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Third Year <i className="fa-regular fa-arrow-right"></i></Link></li>
                                <li><Link href="#" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Final Year <i className="fa-regular fa-arrow-right"></i></Link></li>
                            </ul>  */}
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>

{/* <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
 
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                <h6 className="tl-8-feature-title mb-20">M.Tech. in Artificial Intelligence & Data Science</h6>
                    <div className="tl-8-feature">
                            <h6 className="tl-13-about-sub-title mr-10">Intake : 18</h6>
                            <h6 className="tl-13-about-sub-title"> Fees : Rs. 1,00,000/-</h6>
                            <h6 className="tl-8-feature-title mt-20">About the Programme:</h6>
                            <p className="tl-8-feature-descr mt-20">Artificial Intelligence and Data Science is advancement over traditional Computer Science and Engineering that aims to deliver data driven solutions using computational principles, methods and systems for extracting knowledge from data.<br/><br/>

                            M. Tech. in Artificial Intelligence and Data Science program covers concepts in data science and artificial intelligence and applied mathematics with an objective to prepare the students to analyze, design and implement solutions in various problem domains. The curriculum is designed to create strong foundations of data science and AI knowledge and usage of analytical methods and tools to solve challenging real-world problems. <br/><br/>
                            Students will gain thorough knowledge in courses like - Intelligent Systems, Deep Learning, Reinforcement Learning, Text Technologies for Data Science, Data Analytics and Mining, Big Data Management, Data Visualization, Bayesian Data Analysis, Probabilistic Modeling and Reasoning, Cloud Technologies etc.</p>

                            <h6 className="tl-8-feature-title mt-20">Course Structure and Contents:</h6>
                            <ul className="tl-event-details-key-content-list-new phd-container">
                                <li><Link href="#" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">M.Tech (Artificial Intelligence & Data Science) <i className="fa-regular fa-arrow-right"></i></Link></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/computer-science-engineering/programmes/AI-programmes.jpg" alt="About Electrial & Electronics Engineering" className="tl-8-about-main-img"/>
                </div>
            </div>
        </div>
        
    </div>
</section>

<section className="tl-8-about tl-3-section-spacing">
    <div className="container">
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/computer-science-engineering/programmes/phd-programmes.jpg" alt="About Electrial & Electronics Engineering" className="tl-8-about-main-img"/>
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                <h6 className="tl-8-feature-title">Ph. D. in Computer Science and Engineering</h6>
                    <div className="tl-8-feature mt-30">
                    <h6 className="tl-8-feature-title">List of Registered Phd. Scholars:</h6>
                    <Table bordered responsive className="governing-table mt-30">
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                <th><p>Name of Student</p></th>
                                <th><p>Area</p></th>
                                <th><p>Name of Guide</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>1</p></td>
                                <td><p>Ms. Rahesha Yasin Mulla</p></td>
                                <td><p>Machine Learning</p></td>
                                <td><p>Dr. Archana M. Chougule</p></td>
                            </tr>
                            <tr>
                                <td><p>2</p></td>
                                <td><p>Mr. Sagar Baburao Patil</p></td>
                                <td><p>Machine Learning</p></td>
                                <td><p>Dr. Archana M. Chougule</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    </div>
</div>
</section>  */}
</>
  )
}

export default ComputerUGProgram