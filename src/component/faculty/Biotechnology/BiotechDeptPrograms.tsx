"use client"
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from 'react-bootstrap'

const BiotechDeptPrograms = () => {
  return (
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Programs</h2>
    <div className="row">
          <MenuList dept="Biotechnology" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6">
                <div className="tl-8-about-img">
                    <img src="assets/images/biotechnology/programs/program-image.png" alt="BSC Biotechnology" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-6 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                 <h6 className="tl-8-feature-title">About Program</h6>
                   
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr">B.Sc. Biotechnology course focuses on the application of biological principles and processes to technological advancements and innovations. It is a 4-year undergraduate program that involves subjects such as Molecular Biology, Genetics, Cell Biology, Bioinformatics, Microbiology, Immunology, Bioprocess Engineering, Biochemistry, and Biostatistics.<br/><br/>
                           

                        </p>
                       
                    </div>
                    <Table bordered responsive className="governing-table mt-30">
                        <thead>
                            <tr>
                                <th><p className="text-[#4f70b6]">Program</p></th>
                                <th><p className="text-[#4f70b6]">Duration</p></th>
                                <th><p className="text-[#4f70b6]">Eligibility</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>B. Sc. Biotechnology</p></td>
                                <td><p>Four Years</p></td>
                                <td><p>10+2 with science</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

        <div className="row mt-50">
            <div className="col-lg-12">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Career Opportunities:</h3>
                        <p className="dark-mode-white-color">B. Sc. Biotechnology graduates can find career options in several job profiles like </p>
                            <ul className="tl-event-details-key-content-list">
                                <li>Pharmacist,</li>
                                <li>Epidemiologist,</li>
                                <li>Bio-Production Operator,</li>
                                <li>Biotech Specialist,</li>
                                <li>Bio-Manufacturing Specialist, etc.</li>
                            </ul>
                            <p className="dark-mode-white-color mt-15">Top recruiters for B. Sc. Biotechnology graduates are</p>
                            <ul className="tl-event-details-key-content-list">
                                <li>Cipla,</li>
                                <li>Philips Healthcare, </li>
                                <li>Abbott,</li>
                                <li>Reliance Life Sciences, etc.</li>
                            </ul>
                            <p className="dark-mode-white-color mt-15">Some popular M. Sc.  Biotechnology jobs are</p>
                            <ul className="tl-event-details-key-content-list">
                                <li>Biotech Analyst,</li>
                                <li>Research Scientist, </li>
                                <li>Biochemist,</li>
                                <li>Epidemiologist, etc.</li>
                            </ul>
                            <p className="dark-mode-white-color mt-15">The average starting salary of a Biotechnologist in India is INR 3 LPA.</p>
                        </div>
                </div>
            </div>

            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Key Features of the Program
                        </h3>
                            <ul className="tl-event-details-key-content-list">
                                <li><strong>Comprehensive Curriculum : </strong>A balanced blend of theoretical knowledge and practical skills in biotechnology, including molecular biology, genetic engineering, bioinformatics, and bioprocessing.</li>
                                <li><strong>State-of-the-Art Infrastructure : </strong>Access to modern laboratories and research facilities equipped with the latest technologies.</li>
                                <li><strong>Interdisciplinary Approach : </strong>Integration of biological sciences, chemistry, engineering, and computational tools to address complex biotechnological challenges.</li>
                                <li><strong>Hands-On Training : </strong>Emphasis on experiential learning through laboratory work, internships, and project-based assignments.</li>
                                <li><strong>Research-Driven Learning : </strong>Opportunities to engage in cutting-edge research projects under the guidance of experienced faculty and industry experts.</li>
                                <li><strong>Industry Partnerships : </strong>Collaborations with leading biotech companies and organizations for internships, training, and placements.</li>
                                <li><strong>Global Perspective : </strong>Curriculum aligned with international standards to prepare students for global opportunities in academia, research, and industry.</li>
                                <li><strong>Entrepreneurship Focus : </strong>Encouragement for innovation and entrepreneurial initiatives through mentorship and support for start-up ideas.</li>
                                <li><strong>Career Readiness : </strong>Programs designed to develop critical thinking, problem-solving, and professional skills for diverse career paths in biotechnology and allied fields. </li>
                                <li><strong>Sustainability and Ethics : </strong>A focus on addressing global challenges with sustainable and ethical biotechnological solutions.</li>
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

export default BiotechDeptPrograms