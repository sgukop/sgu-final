"use client"
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../../Reusable-components/MenuList'
import { Table } from 'react-bootstrap'

const MLTDeptPrograms = () => {
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
        <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6">
                <div className="tl-8-about-img">
                <img src="assets/images/allied-health-sciences/MLT/programs/program-image.png" alt="Food Science" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-6 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                 <h6 className="tl-8-feature-title">About Program</h6>
                   
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr">B.Sc. Medical Laboratory Technology is an undergraduate degree programme in laboratory technology. The course duration of B.Sc. Medical Laboratory Technology is 4 years. The B.Sc. Medical Laboratory Technology course makes candidates learn differently. The B.Sc. Medical Laboratory Technology Course offers candidates in-depth knowledge about laboratory equipment and its usage in diagnostic procedures. The B.Sc. Medical Laboratory Technology Course is helpful for students who aim for a career in laboratory management, advancement in laboratories and instrumentation. Medical Technology is one of the fastest-growing fields in the diagnostic sector and the demand for qualified professionals is growing every day for the treatment of rapidly growing diseases with the aid of various technical equipments. The B.Sc. Medical Laboratory Technology course helps aspirants gain practical and technical knowledge for the right diagnosis and know how to effectively run biochemical laboratories. <br/><br/> B.Sc. Medical Laboratory Technology at Sanjay Ghodawat University started in A.Y. 2022-23.  It is one of the most popular departments among the stydents in university with full fledge admissions. Clinical laboratory tests cover microscopic examinations, immunoassays, genetic testing, biochemistry and the analysis of body fluids, tissues and cells. These tests are essential for assessing patient health, aiding in diagnosis, treatment, monitoring and disease prevention. The B.Sc. in Medical Laboratory Technology provides comprehensive education and training in various disciplines, including Microbiology (Bacteriology, Virology, Immunology, Serology, Parasitology, Mycology), Haematology, Histopathology, Cytopathology, Clinical Biochemistry and Blood Banking. Graduates gain the knowledge and skills needed to excel in diverse healthcare settings, significantly contributing to disease diagnosis and patient care.
                        </p>

                         <Table striped bordered hover responsive className="governing-table mt-4">
                                      <thead>
                                        <tr>
                                          <th><p className="text-[#4f70b6]">Program</p></th>
                                          <th><p className="text-[#4f70b6]">Duration</p></th>
                                          <th><p className="text-[#4f70b6]">Eligibility</p></th>
                                        
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td><p>B.Sc. Medical Laboratory Technology</p></td>
                                          <td><p>4 years</p></td>
                                          <td><p>Science (10+2)</p></td>
                                        </tr>
                        
                                       
                                    </tbody>
                                    </Table>
                       
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-50">
            <div className="col-lg-12">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Career Opportunities</h3>
                        <p className="mb-4">After completing a Bachelor of Medical Laboratory Technology (BMLT) course, you can pursue a career in a variety of settings, including hospitals, clinics, research institutes, blood banks and public health agencies : </p>
                            <ul className="tl-event-details-key-content-list">
                                <li><strong>Educational : </strong>You can work As a tutor in laboratory medicine graduate program.</li>
                                <li><strong>Medical technician : </strong>You can work in hospitals, clinics, minor emergency centers, private laboratories, or blood banks as Healthcare Administrator.</li>
                                <li><strong>Laboratory manager :  </strong>You can work in larger healthcare facilities.</li>
                                <li><strong>Lab analyst : </strong>You can work in larger healthcare facilities as R&D Lab Assistant</li>
                                <li><strong>Quality control analyst : </strong>You can work in laboratories, where you'll follow quality control measures and safety regulations. </li>
                                <li><strong>Research assistant : </strong>You can work in medical research.</li>
                               <li>You can also pursue higher education, such as a Master of Medical Laboratory Technology (MMLT) or Doctor of Medical Laboratory Technology (DMLT). </li>
                                <li>With further education and work experience, you can become a Medical Laboratory Technologist.</li>
                                <li>Railways Lab Assistant</li>
                                <li>Assistant Professor </li>
                                <li>Educational Consultant</li>
                            </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Key Features of the Program</h3>
                        <p>A Bachelor of Medical Laboratory Technology (BMLT) program typically has the following key features : </p>
                            <ul className="tl-event-details-key-content-list">
                                <li><strong>Curriculum : </strong>A diverse curriculum that covers a range of subjects, including microbiology, clinical chemistry, hematology, immunology, and pathology</li>
                                <li><strong>Hands-on training : </strong>Extensive practical experience in laboratories using modern equipment and techniques 
                                </li>
                                <li><strong>Expert faculty : </strong>Instruction from experienced faculty with expertise in medical laboratory sciences</li>
                                <li><strong>Preparation for healthcare roles : </strong>Graduates are prepared for roles in hospitals, diagnostic labs, research facilities, and other healthcare settings</li>
                                <li><strong>Theoretical and practical emphasis : </strong>A well-rounded education that emphasizes both theoretical knowledge and practical application </li>
                                <li><strong>Internship : </strong>A mandatory internship in the final year</li>
                                <li><strong>Evaluation : </strong>Theory exams, practical exams, and project work</li>
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

export default MLTDeptPrograms