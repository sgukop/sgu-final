"use client"
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../../Reusable-components/MenuList'
import { Table } from 'react-bootstrap'

const FSTDeptPrograms = () => {
  return (
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Programs</h2>
    <div className="row">
          <MenuList dept="Allied Health Sciences" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6">
                <div className="tl-8-about-img">
                <img src="assets/images/allied-health-sciences/FST/program/program-image2.png" alt="Food Science" className="rounded-full"
                style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-6 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                 <h6 className="tl-8-feature-title">About Program</h6>
                   
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr">The Department of Food Science and Technology at Sanjay Ghodawat University, Kolhapur, was established in 2022-23 to cater to the growing need for skilled professionals in the food industry. Our goal is to create a dynamic and engaging learning environment where students gain not just theoretical knowledge but also hands-on experience and industry insights. With a strong focus on innovation, sustainability, and food safety, we prepare our students to excel in the food sector—whether in India or on a global stage.
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
                                <td><p>B.Sc. Food Science & technology</p></td>
                                <td><p>3 + 1 Years</p></td>
                                <td><p>10+2 with Science</p></td>
                            </tr>

                            <tr>
                                <td><p>M.Sc.  Food Science and Technology</p></td>
                                <td><p>2 Years</p></td>
                                <td><p>B.Sc., B. Tech and B.Voc. (with 10+2 Science) </p></td>
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
                           {/* <ul className="tl-event-details-key-content-list">
                                <li>Food Technologist.</li>
                                <li>Organic Chemists.</li>
                                <li>Product Development Manager</li>
                                <li>Research Scientist</li>
                                <li>Food Inspector</li>
                                <li>Assistant Professor</li>
                                <li>Nutritionist</li>
                                <li>Quality Manager</li>
                                <li>Research and Development</li>
                                <li>Government Jobs(F.C.I., F.S.S.A.I. etc)</li>
                            </ul>  */}
                            <p>A degree in Food Science and Technology opens doors to a wide range of exciting career opportunities. Graduates can become Food Technologists, ensuring food safety and quality, or Organic Chemists, working with food composition and additives. If you’re interested in developing new and improved food products, a role as a Product Development Manager might be a great fit. For those passionate about research, opportunities as a Research Scientist or in Research and Development (R&D) offer a chance to contribute to groundbreaking innovations in the food industry.  <br/><br/>
                            Government jobs are another strong career path, with roles such as Food Inspector or positions in organizations like the Food Corporation of India (FCI) and Food Safety and Standards Authority of India (FSSAI). If teaching is your calling, becoming an Assistant Professor in academia is a great option. Those with an interest in health and wellness can pursue careers as Nutritionists, while roles like Quality Manager allow professionals to oversee food production standards and ensure compliance with regulations. With so many career possibilities, our program equips students with the skills and knowledge needed to thrive in the ever-evolving food industry!
</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Key Features of the Program
                        </h3>
                            <ul className="tl-event-details-key-content-list">
                                <li><strong>Hands-On Training : </strong>We emphasize practical learning to help students become skilled in laboratory and production environments.</li>
                                <li><strong>Industry-Relevant Curriculum : </strong>Courses are developed with input from industry experts to cover current and emerging trends in food science, such as processing and packaging.</li>
                                <li><strong>Skill Development and Internships : </strong>We organize internships with well-known companies, providing students with valuable on-the-job experience.</li>
                                <li><strong>Placement Support : </strong>With connections to leading food companies, we offer strong placement support, helping students find roles in quality control, food safety, regulatory affairs, product development, and research.</li>
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

export default FSTDeptPrograms