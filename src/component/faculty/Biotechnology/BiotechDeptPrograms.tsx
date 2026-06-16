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
                           <p className="tl-8-feature-descr">The B.Sc. Biotechnology (3+1 Hons. / Hons. by Research) program offers future-focused education with strong scientific foundations, hands-on laboratory training, multidisciplinary learning, and industry-oriented skill development. Integrating modern biotechnology with healthcare, agriculture, environmental science, and computational biology, it prepares students for careers in research, innovation, higher education, and biotechnology industries.<br/><br/>
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
                                <li>Healthcare & Bio-Pharmaceuticals</li>
                                <li>Research & Development</li>
                                <li>Bioinformatics & AI in Biology </li>
                                <li>Environmental Biotechnology </li>
                                <li>Food & Agricultural Industries </li>
                            </ul>
                            <h3 className="tl-event-details-area-title">Specialization Verticals:</h3>

                                <p className="dark-mode-white-color">
                                Explore diverse biotechnology domains aligned with global industry demands.
                                </p>

                                <ul className="tl-event-details-key-content-list">
                                <li>
                                    <strong>Medical &amp; Health Biotechnology</strong><br />
                                    Drug discovery, diagnostics, therapeutics, and regenerative medicine.
                                </li>

                                <li>
                                    <strong>Agricultural Biotechnology</strong><br />
                                    Plant biotechnology, medicinal plants, and molecular agriculture.
                                </li>

                                <li>
                                    <strong>Environmental Biotechnology</strong><br />
                                    Bioremediation, sustainability, and green biotechnology.
                                </li>

                                <li>
                                    <strong>Computational Biotechnology</strong><br />
                                    Bioinformatics, genomics, proteomics, and AI-driven biology.
                                </li>
                                </ul>
                             </div>
                </div>
            </div>

            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Key Features of the Program
                        </h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>
                                    <strong>Comprehensive Curriculum :</strong> Offers a meticulously structured blend of theoretical foundations and advanced practical competencies across core domains, including molecular biology, genetic engineering, bioinformatics, and bioprocessing.
                                    </li>

                                    <li>
                                    <strong>State-of-the-Art Infrastructure :</strong> Provides students with access to cutting-edge laboratories and premium research facilities equipped with modern, industry-standard analytical instrumentation.
                                    </li>

                                    <li>
                                    <strong>Interdisciplinary Synergy :</strong> Seamlessly integrates biological sciences, chemistry, data science, and computational tools to address complex and evolving global biotechnological challenges.
                                    </li>

                                    <li>
                                    <strong>Experiential Learning & Hands-On Training :</strong> Prioritizes intensive laboratory exposure, mandatory corporate internships, and project-based assignments to cultivate robust technical and analytical proficiency.
                                    </li>

                                    <li>
                                    <strong>Research-Driven Learning :</strong> Fosters an active research culture by offering students opportunities to engage in high-impact projects under the rigorous mentorship of accomplished faculty members and industry experts.
                                    </li>

                                    <li>
                                    <strong>Industry Collaborations :</strong> Maintains strategic collaborations with premier biotechnology corporations and research organizations to facilitate high-value training, industry mentorship, and placement opportunities.
                                    </li>

                                    <li>
                                    <strong>Global Relevance :</strong> Features a curriculum benchmarked against international standards, effectively preparing graduates to excel in global pursuits across academia, research, and industrial sectors.
                                    </li>

                                    <li>
                                    <strong>Culture of Innovation & Entrepreneurship :</strong> Nurtures creative thinking and entrepreneurial ambition through dedicated professional mentorship, incubation resources, and support for student-led start-up initiatives.
                                    </li>

                                    <li>
                                    <strong>Career Readiness :</strong> Cultivates essential professional competencies, critical thinking, and technical problem-solving skills necessary to excel in diverse career pathways across life sciences and allied fields.
                                    </li>

                                    <li>
                                    <strong>Sustainability & Bioethics :</strong> Emphasizes the development of ecologically sustainable, socially responsible, and ethically sound biotechnological solutions to address pressing global issues.
                                    </li>
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