"use client"
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from "react-bootstrap";

const PharmacyDeptPrograms = () => {
  return (
    <>
<section className="tl-8-about tl-3-section-spacing">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Programs</h2>
    <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-4 align-items-center">
           <div className="col-xl-6 col-lg-6">
                {/*<div className="tl-8-about-img">
                    <img src="assets/images/pharmacy-dept/programs/program1.png" alt="Pharmacy Department Programs" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>  */}
                 <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Name of program</p></th>
                            <th><p className="text-[#4f70b6]">Intake</p></th>
                            <th><p className="text-[#4f70b6]">Academic year</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        <tr>
                            <td><p>B. Pharm </p></td>
                            <td><p>60</p></td>
                            <td><p>2019-20</p></td>
                        </tr>

                        <tr>
                            <td><p>M. Pharm Pharmaceutics</p></td>
                            <td><p>15</p></td>
                            <td><p>2024-25</p></td>
                        </tr>

                        <tr>
                            <td><p>M. Pharm Quality Assurance</p></td>
                            <td><p>15</p></td>
                            <td><p>2024-25</p></td>
                        </tr>

                        <tr>
                            <td><p>PhD in Pharmacy</p></td>
                            <td><p>As per vacancy</p></td>
                            <td><p>2019-20</p></td>
                        </tr>
                    </tbody>
                </Table>
            </div> 


            <div className="col-xl-5 col-lg-6">
                <div className="yellow-clr-hover">
                  
                    <h6 className="tl-8-feature-title">About Program</h6>
                    <div className="tl-8-features">
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr text-justify">Being “Pharmacist” is a versatile, dynamic, growing and increasingly diverse profession. It is an age-old profession which has transformed into a hub for "Global Healthcare" and evolved as a multidisciplinary and multifaceted field in recent times. The increasing number of advance pharmaceutical industry, the health sector, has catered several opportunities for pharmacy professionals. It is the science and technique of formulating and dispensing of drugs.  <br/><br/> Recently it covers invigilance of drug performance and related additional clinical sectors. It is a health profession that links health sciences and pharmaceutical sciences together, and aims to ensure the safe and effective use of medicines. Pharmacists are also known as Chemists or Druggists. They are health professionals who practice in pharmacy, with other para-medicals focusing on availability of affordable drug to masses. Pharmacists undergo university-level education which include the biochemical mechanisms drug action, formulations, drug uses, therapeutic roles, side effects, potential drug interactions, pharmacovigilance and clinical research.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-50">
            <div className="col-lg-12">
                <div className="tl-event-details-left">
                     <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Career Opportunities:</h3>
                            <ul className="tl-event-details-key-content-list">
                                <h6><strong>Health Care Services :</strong></h6>
                                <li><strong>Community or Entrepreneur - </strong>Wholesaler or Retailer chemist and druggist. To establish own pharmaceutical industry.</li>
                                <li><strong>Hospital or Clinic - </strong>Dispensing and supervising the use of drugs in hospital.</li>
                                <li>Laboratory technician / Assistant</li>
                            </ul>
                            <ul className="tl-event-details-key-content-list mt-6">
                                <h6><strong>Government Job :</strong></h6>
                                <li>As a pharmacist in Government Hospital</li>
                                <li>Food and Drug inspector</li>
                                <li><strong>As a graduate - </strong>Illegible to all MPSC OR UPSC examination</li>
                            </ul>
                            <ul className="tl-event-details-key-content-list mt-6">
                                <h6><strong>Higher Education :</strong></h6>
                                <li>To become post graduate in M. Pharm. L.L.B., M.B.A., M.S., etc</li>
                                <li>Research Activity</li>
                                <li>Clinical Research</li>
                                <li><strong>As a teacher - </strong>Professor/Associate Professor/Assistant Professor</li>
                            </ul>
                            <ul className="tl-event-details-key-content-list mt-6">
                                <h6><strong>Industry :</strong></h6>
                                <li>Production - In Bulk drugs, Fine drugs, and Formulation</li>
                                <li>Quality control and Quality assurance</li>
                                <li>Packaging and Repackaging</li>
                                <li>Sales and Marketing</li>
                                <li>Regulatory affairs</li>
                                <li>Bio-analyst.</li>
                            </ul>
                            <ul className="tl-event-details-key-content-list mt-6">
                                <h6><strong>Pharma IT Sector: :</strong></h6>
                                <li>Pharmacovigilance</li>
                                <li>Clinical data manager</li>
                                <li>Clinical research associate</li>
                                <li>Medical writer or Coder</li>
                                <li>Biostatistician</li>
                            </ul>
                        
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Key Features of the Programs</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>Highly qualified competent staff</li>
                                <li>Environment friendly world-class infrastructure</li>
                                <li>Value based quality education with societal concern</li>
                                <li>Flexible choice-based credit system</li>
                                <li>Collaborative inter-disciplinary research</li>
                                <li>Support for industrial training</li>
                                <li>Support for placement</li>
                                <li>Entrepreneurship guidance</li>
                                <li>International admission assistance</li>
                                <li>Well-equipped laboratories</li>
                                <li>Computer lab with high-speed internet facility.</li>
                                <li>Sophisticated instrument laboratory</li>
                                <li>Digital class room.</li>
                                <li>A state of art Library</li>
                                <li>Pharma expert guest lecture series</li>
                                <li>Finishing School  <br/> <span className="ml-20">- GPAT/ NIPER guidance facility.</span> <br/> <span className="ml-20">- Pharma IT training program.</span></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</section>  
</>
  )
}

export default PharmacyDeptPrograms