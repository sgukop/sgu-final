"use client"
import React from 'react'
import { Table } from 'react-bootstrap'

const ChemicalPGProgram = () => {
  return (
    <>
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programs</h2>
        <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/chemical-sciences-dept/programmes/msc-chemistry.png" alt="Bachelor Programmes Image" className="rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                 <h6 className="tl-8-feature-title">About Program</h6>
                   
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr" style={{textAlign:"justify"}}>The PG program M.Sc. chemistry offered by the department has successfully completed its journey of excellence for around 8 years. The primary focus of the M.Sc. Chemistry course is on Organic and Analytical chemistry. Over four semesters, both theory and laboratory courses are taught at an advanced level. 
                        </p>

                       {/* <Table bordered responsive className="governing-table mt-30">
                        <thead>
                            <tr>
                                <th><p className="text-[#4f70b6]">Program</p></th>
                                <th><p className="text-[#4f70b6]">Duration</p></th>
                                <th><p className="text-[#4f70b6]">Eligibility</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>M.Sc. Chemistry</p></td>
                                <td><p>2 Years</p></td>
                                <td><p>B.Sc. Chemistry or Equivalent</p></td>
                            </tr>
                        </tbody>
                    </Table>  */}

                     <p className="text-[#4f70b6] mt-4"><strong>M.Sc. Chemistry</strong></p>
                     <p className="text-black">(2 Years Program)</p>
                     <p className="text-[#4f70b6] mb-2 mt-2"><strong>Specialization : </strong></p>
                        <ul className="tl-event-details-key-content-list">
                            <li>Organic Chemistry</li>
                            <li>Analytical Chemistry</li>
                        </ul>
                        <p className="text-black mt-4"><strong>Eligibility : </strong>B.Sc. Chemistry or Equivalent</p>

                  
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-50">
            <div className="col-lg-12">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Career Opportunities/Job Perspective for M.Sc. Chemistry :</h3>
                            <ul className="tl-event-details-key-content-list">
                                <p className="darl-mode-white-color">There is an immense scope for M.Sc. Chemist across the public as well as private sector.</p>
                                {/* <li>Research Associate / Research Assistant</li>
                                <li>Assistant Professor</li>
                               
                                <li>Chemistry/Biochemistry Research Officer</li>
                                <li>Analytical Chemistry Application Specialist</li>
                              
                                <li>Operations Manager</li>
                                <li>Quality Control Chemist</li>
                                <li>Quality Manager</li>
                                <li>Inspector of Quality Control</li>  */}
                                <li>Job in Multi-National Companies</li>
                                <li>Government and Private Sectors</li>
                                <li>Research Scientist Opportunities</li>
                                <li>Global Fellowships</li>
                                <li>International Job Opportunities</li>
                                
                            </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Key Features of the M.Sc. in Chemistry: (Organic and Analytical)</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>Highly qualified and experienced teaching staff</li>
                                <li>Academic curriculum designed to meet industy requirement</li>
                                <li>State of the art infrastructure with equipped laboratories</li>
                                <li>Guidance for competitive exams like NET/ SET/ GATE exams</li>
                                <li>"Learning by Doing" through Project based learning, industry internship and research project</li>
                                <li>Excellent opportunities in the field of research and pursuing a Ph.D.</li>
                                <li>Extended internships and Impressive placements record</li>
                                <li>Scholarships for minority and meritorious students</li>

                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default ChemicalPGProgram