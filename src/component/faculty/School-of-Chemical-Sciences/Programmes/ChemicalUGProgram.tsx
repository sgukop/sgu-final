"use client"
import React from 'react'
import { Table } from 'react-bootstrap'

const ChemicalUGProgram = () => {
  return (
    <>
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programs</h2>
        <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/chemical-sciences-dept/programmes/bsc-chemistry.png" alt="Bachelor Programmes Image" className="rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                 <h6 className="tl-8-feature-title">About Program</h6>
                   
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr text-justify">The B.Sc. Honours Programme in Chemistry aims at the focused learning of Chemistry from basic to advanced topics in the course of four years with extra emphasis on the research elements. Adhering to the NEP guidelines, this programme has provision for multiple exits wherein a student would be eligible for B.Sc. degree in Chemistry after the successful completion of three years and the fourth year of the course leading to the honours degree will be dedicated for research projects, internship and related theory papers.  To impart sound knowledge on fundamentals of Chemistry, we offer attractive elective courses in industrial Chemistry. In addition to the above, there will be opportunities for open electives and minor courses from data science and analytics, food science  and biotechnology with more exposure to the latest trends in the fields of interdisciplinary learning and research from the undergraduate level. 
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
                                <td><p>B.Sc. Chemistry / Honors</p></td>
                                <td><p>3/4 Years</p></td>
                                <td><p>10+2 (Science)</p></td>
                            </tr>
                        </tbody>
                    </Table>  */}
                     <p className="text-[#4f70b6] mt-4"><strong>B.Sc. Chemistry/Honors</strong></p>
                     <p className="text-black">(3/4 Years Program)</p>
                     <p className="text-[#4f70b6] mt-4"><strong>Minor : </strong></p>
                        <ul className="tl-event-details-key-content-list">
                            <li>Data Science Analytics</li>
                            <li>Food Processing Technology</li>
                            <li>Biotechnology</li>
                           
                        </ul>
                        <p className="text-black mt-4"><strong>Eligibility : </strong>10+2 (Science)</p>

                       
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-50">
            <div className="col-lg-12">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Career Opportunities/Job Perspective :</h3>
                            <ul className="tl-event-details-key-content-list">
                                <p className="darl-mode-white-color">B.Sc. Chemistry graduates can explore diverse career opportunities :</p>
                                <li>Chemical Industries</li>
                                <li>Pharmaceutical Industries</li>
                                <li>Healthcare centres</li>
                                <li>World Health Organization (WHO)</li>
                                <li>Research Institutes</li>
                                <li>Agricultural Research</li>
                                
                                <li>Military</li>
                                <li>Biotech Companies</li>
                                <li>Space and Astronomical Research</li>
                                <li>Food Industries</li>
                            </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Key Features of the B.Sc. Chemistry</h3>
                            <ul className="tl-event-details-key-content-list">
                                <p className="dark-mode-white-color">B.Sc. Chemistry (Honours and Honours with research)</p>
                                <li>Learn from the best with NEP based curriculum designed by industry experts and academia</li>
                                <li>Expand your network and fast track your career with Honours and minor programmes</li>
                                <li>B.Sc. in Chemistry with minor in Food Processing Technology/Data Science and Analytics.</li>
                                <li>Highly qualified and experienced teaching staff.</li>
                                <li>State of the art infrastructure with equipped laboratories.</li>
                                <li>Carrier guidance and counselling, skill enhancement courses for job opportunity.</li>
                               <li>Extended Internships & Impressive placements.</li>
                               
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

export default ChemicalUGProgram