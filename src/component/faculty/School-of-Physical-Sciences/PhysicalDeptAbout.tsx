'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const PhysicalDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>
        <div className="row">
          <MenuList dept="Physics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/physical-sciences-dept/about-department/hod-photo.png" alt="About Department" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="tl-14-about-txt">
                       <h2 className="tl-14-section-title">HOD's Desk</h2>
                       <p className="dark-mode-white-color text-justify">Welcome to the Department of Physics at the Sanjay Ghodawat University, Kolhapur.<br/>The Department of Physics is established in 2017 under the School of Physical and Chemical Sciences at <strong>Sanjay Ghodawat University</strong>, Kolhapur. 
                       The Department of Physics is commited to serving the nation through the ongoing innovation in teaching and cutting edge research as per the new education policy of the government of the India. The Department is offering B.Sc., M.Sc.(Nano Science & Space Science) and Ph.D. programs in Physics the department is working in collaboration with various national and international institutes to develop the technologies to support the research and academic sectors .The Center for Renewable Energy and Advanced Materials (CREAM) is established under the department of Physics. Under this center, various nanomaterials for different application are synthesized.<br/><br/>
                        
                    </p>
                    <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Dr. Sambhaji M. Pawar <br /> Associate Professor & Head{" "}
                  </span>
                    </div>
                </div>
            </div>

            <div className="row tl-event-details-row g-0 mt-50">
              <div className="col-lg-12">
                <div className="tl-event-details-left">
                 <h3 className="tl-event-details-area-title text-[#4f70b6]">About Department</h3>
                  <div className="tl-event-details-key-content tl-event-details-area">
                   
                   
                    <p className="dark-mode-white-color text-justify">
                    The department believes in nurturing the latent talents of the students by providing them the educational ambience, research infrastructure and research facilities.
                    Our faculties conducts advanced research in material science perticulary in energy convertion and storage devices. Our state of the art facilities provide unque research opportunities for students across a levels of educational programs. We consider research experience as a vital part of the education and nurturing the students to take up advanced courses and providing practical experience across the various field of physics. 
                    
                    </p>
                </div>
                </div>
              </div>
              
            </div>  

          <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">"Premier department in fundamentals and advanced knowledge of Physics contributing towards scientific research"</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
		                <li>To develop advanced teaching pedagogies for effective learning</li>
		                <li>To establish center of excellence by providing state of art research facilities.</li>
                    </ul>
                    </div>
                </div>
           </div>

        <div className="row outer-style mt-50">
               <h3 className="tl-event-details-area-title">PO's</h3>
                    <div className="col-lg-12">
                        <div className="tl-event-details-left">
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <h3 className="tl-event-details-area-title">Program Outcomes (POs)</h3>
                                    <ul className="tl-event-details-key-content-list">
                                        <li>Analyze and solve real life problems using fundamental and advanced knowledge of Physics (Classical Mechanics, Quantum Mechanics, Statistical Mechanics, Electrodynamics and Condensed Matter Physics).</li>
                                       <li>Design and conduct novel experiments evolved from the theoretical facts</li>
                                       <li>Inculcate scientific research attitude and develop competency to resolve societal concerns.</li>
                                       <li>Integrate knowledge of Physics with science and technology streams in order to follow interdisciplinary approach.</li>
                                       <li>Perceive and commit to professional ethics, moral responsibilities and scientific norms.</li>
                                       <li>Evolve as an effective individual, a team member or a team leader.</li>
                                       <li>Engage in independent and life long learning.</li>
                                       <li>Demonstrate project management and entrepreneurial skills.</li>
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

export default PhysicalDeptAbout
