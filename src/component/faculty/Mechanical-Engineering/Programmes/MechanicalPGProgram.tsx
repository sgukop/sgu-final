import React from 'react'

const MechanicalPGProgram = () => {
  return (
    <>
   <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/mechanical-engineering-dept/programmes/about-mtech.png" alt="About Mechanical Engineering" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>
            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                
                    <h6 className="tl-8-feature-title">M.Tech Programmes</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                                {/* <li> <h6 className="tl-8-feature-title">M.Tech. in Mechanical Engineering with Specilization in Design</h6></li>  */}
                                <li><h6 className="tl-8-feature-title">M.Tech. in Mechanical Engineering with Specilization in Manufacturing Technology</h6></li>
                        </ul>
                        <div className="tl-8-features">
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr">The current trend of the developments in industry is influenced by phenomena like Internet of things, Cloud Computing and simulation of systems. The Manufacturing industry is also witnessing sea changes through the digital revolution marked as Industry 4.0. The M.Tech. program in Mechanical Engineering is designed with specialization in Digital Manufacturing to train the engineers to take up higher challenges in the industry.</p>
                        </div>

                        <div className="tl-8-feature">
                            <h6 className="tl-8-feature-title">Objective</h6>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>To prepare the students after higher education for a professional career in designing and analyzing robotic systems, facility layout, integrated manufacturing systems, product life cycle management etc</li>
                                <li>To train the students with breadth in science and engineering for analysis, design and simulation techniques</li>
                                <li>To develop professional and ethical values, team spirit, and social awareness in the students</li>
                            </ul>
                        </div>
                        <div className="tl-8-feature">
                            <h6 className="tl-8-feature-title">Scope of Employment</h6>
                            <p className="tl-8-feature-descr">The students will be ready to work in Mechanical Industry, designing firms, System Design consultancy firms as well as Government undertakings. The students will be provided one year internship in the industry during second year during which they will carry out their dissertation work. The industries can absorb such students based on their performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="tl-8-pricing tl-3-section-spacing">
        <div className="container">
            <div className="row outer-style">
            <h3 className="tl-event-details-area-title text-[#4f70b6]">Core Courses</h3>
                <div className="col-lg-6 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Design & Analysis of Experiments and Research Methodology</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Manufacturing Execution Systems</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Manufacturing System Design</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Modeling & Simulation of Manufacturing Systems</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Additive Manufacturing Technology & Management</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Industrial Internet of Things</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Automation & Robotics</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Flexible Manufacturing System Lab</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Analysis and Simulation Lab</p>
                   
                </div>
               
            </div>

            <div className="row outer-style mt-30">
            <h3 className="tl-event-details-area-title text-[#4f70b6]">Elective Courses</h3>
                <div className="col-lg-4 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Network Manufacturing</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Computer Aided Fixture & Tool Design</p>
                  
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Facility & Layout Planning</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Reconfigurable Manufacturing System</p>
                   
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Simulation of Manufacturing Processes</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Flexible Assembly System</p>
                 
                </div>
            </div>
        </div>
</section>  
</>
  )
}

export default MechanicalPGProgram