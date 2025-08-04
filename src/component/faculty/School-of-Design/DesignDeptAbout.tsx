'use client'
import React from 'react';
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const DesignDeptAbout = () => {
   return (
    <section className="pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">School of Design</h2>
        <div className="row">
            <MenuList dept="Design" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-2 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/design-dept/about-department/about-dept.png" alt="About Department Image" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="tl-14-about-txt">
                        <h3 className="tl-event-details-area-title">About Us</h3>
                        <p className="dark-mode-white-color">Design is a dynamic field that allows you to turn your passion into a profession. At SGU's School of Design, we offer students with creative talents and innovative minds the opportunity to thrive. Each of these specializations offers a blend of creative, technical, and entrepreneurial opportunities, allowing graduates to pursue dynamic careers in their chosen fields. Additionally, the interdisciplinary nature of design ensures that students can combine skills from different areas to carve unique career paths.<br/><br/>
                        Our 4-year undergraduate program, Bachelor of Design (B. Des.) includes four specializations: Fashion Design Styling & Business, Communication Design, Product Design, and Interior Design Styling & Practices...<br/><br/>
                        All students go through a <strong>foundation semester</strong>, which introduces essential design principles, basic technical skills, and creative thinking strategies. This foundational semester ensures that students are well-equipped with a broad understanding of design before diving into their chosen specialization from second semester.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <ul className="course-subjects">
		                <li>Aim to shape future-ready design professionals who have the skills and creativity to thrive in the ever-changing design industry, by nurturing a collaborative and inspiring design community.</li>
                        <li>Committed to designing with care, creativity, and intention, while constantly evolving design education to stay in tune with shifting economic and business trends, both at home and around the world</li> 
                    </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
		                <li>To foster multidisciplinary design learning, with project-based learning at the heart of the educational experience.</li>
                        <li>To inspire social responsibility, empathy, and cultural awareness in our students, guiding their academic journey so they can become thoughtful, engaged citizens dedicated to solving real-world problems and making a positive impact on society</li>  
                        <li>Aim to transform design education in India by building meaningful connections with industry, fostering global partnerships, and embracing next-generation technology. Our goal is to create a vibrant hub of design knowledge and experience, where students and professionals can access valuable insights into products, systems, materials, and production processes.</li>
                    </ul>
                    </div>
                </div>
           </div>

        <div className="row outer-style mt-50">
            <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
                    <div className="col-lg-12">
                        <div className="tl-event-details-left">
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <h3 className="tl-event-details-area-title">Program Educational Objectives (PEOs)</h3>
                                    <ul className="tl-event-details-key-content-list">
                                        <li><strong>PEO1 : </strong>Graduates will be able to design products, processes, and services that meet customer needs while considering aesthetics, ergonomics, and sustainability.</li>
                                        <li><strong>PEO2 : </strong>Graduates will be capable of working effectively within multidisciplinary teams.</li>
                                        <li><strong>PEO3 : </strong>Graduates will possess the skills to communicate design concepts clearly and effectively.</li>
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-8">
                        <div className="tl-event-details-left">
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <h3 className="tl-event-details-area-title">Program Outcomes (POs)</h3>
                                    <ul className="tl-event-details-key-content-list">
                                        <li><strong>PO-01 : </strong>Apply fundamental knowledge of mathematics, science, and engineering principles.</li>
                                        <li><strong>PO-02 : </strong>Utilize core knowledge of design, materials, and tools to create solutions that fulfill customer needs.</li>
                                        <li><strong>PO-03 : </strong>Design components or products that adhere to standards and consider public health, cultural, social, and environmental factors.</li>
                                        <li><strong>PO-04 : </strong>Conduct experiments, analyse, and interpret data effectively.</li>
                                        <li><strong>PO-05 : </strong>Continuously acquire new skills and apply modern tools.</li>
                                        <li><strong>PO-06 : </strong>Employ problem-solving skills in design while considering social issues.</li>
                                        <li><strong>PO-07 : </strong>Develop sustainable solutions that address social and environmental challenges.</li>
                                        <li><strong>PO-08 : </strong>Design solutions with a commitment to professional and ethical responsibility.</li>
                                        <li><strong>PO-09 : </strong>Work effectively as an individual, team member, and leader in multidisciplinary teams with cross-cultural awareness.</li>
                                        <li><strong>PO-10 : </strong>Communicate design concepts clearly and professionally.</li>
                                        <li><strong>PO-11 : </strong>Demonstrate leadership and competence in project and financial management.</li>
                                        <li><strong>PO-12 : </strong>Embrace lifelong learning to acquire advanced knowledge and proficiency in modern tools.</li>
                                    </ul>
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

export default DesignDeptAbout
