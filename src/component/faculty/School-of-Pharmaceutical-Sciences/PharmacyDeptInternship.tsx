"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from "react-bootstrap";

const PhramacyDeptInternship = () => {
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship</h2>

        <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
          <div className="row tl-event-details-row g-4">
         
              <div className="col-lg-12">
              <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Internship</h2></div>
                <div className="tl-event-details-left flex flex-col h-full">
                <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Program</p></th>
                            <th><p className="text-[#4f70b6]">Passing Year</p></th>
                            <th><p className="text-[#4f70b6]">Count</p></th>
                            <th><p className="text-[#4f70b6]">Link</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>D. Pharm</p></td>
                            <td><p>2021</p></td>
                            <td><p>59</p></td>
                            <td><a href="https://manage-api.sguk.ac.in/api/assets/67dd17074f56d3a0bcfba569" className="tl-def-btn-2" target="_blank">S.Y.D.Pharm 2020-21<i className="fa-regular fa-arrow-right"></i></a></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2022</p></td>
                            <td><p>60</p></td>
                            <td><a href="https://manage-api.sguk.ac.in/api/assets/67dd171d4f56d3a0bcfba56e" className="tl-def-btn-2" target="_blank">S.Y.D.Pharm 2021-22<i className="fa-regular fa-arrow-right"></i></a></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2023</p></td>
                            <td><p>60</p></td>
                            <td><a href="https://manage-api.sguk.ac.in/api/assets/67dd172d4f56d3a0bcfba573" className="tl-def-btn-2" target="_blank">S.Y.D.Pharm 2022-23<i className="fa-regular fa-arrow-right"></i></a></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2024</p></td>
                            <td><p>26</p></td>
                            <td><a href="https://manage-api.sguk.ac.in/api/assets/67dd173c4f56d3a0bcfba57a" className="tl-def-btn-2" target="_blank">S.Y.D.Pharm 2023-24<i className="fa-regular fa-arrow-right"></i></a></td>
                        </tr>
                        <tr>
                            <td><p>B. Pharm</p></td>
                            <td><p>2022</p></td>
                            <td><p>107</p></td>
                            <td><a href="https://manage-api.sguk.ac.in/api/assets/67dd174b4f56d3a0bcfba57f" className="tl-def-btn-2" target="_blank">T.Y.B.PHARM 2021-22<i className="fa-regular fa-arrow-right"></i></a></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2023</p></td>
                            <td><p>110</p></td>
                            <td><a href="https://manage-api.sguk.ac.in/api/assets/67dd17594f56d3a0bcfba584" className="tl-def-btn-2" target="_blank">T.Y.B.Pharm 2022-23<i className="fa-regular fa-arrow-right"></i></a></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2024</p></td>
                            <td><p>110</p></td>
                            <td><a href="https://manage-api.sguk.ac.in/api/assets/67dd17674f56d3a0bcfba589" className="tl-def-btn-2" target="_blank">T.Y.B.PhARM 2023-24<i className="fa-regular fa-arrow-right"></i></a></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2025</p></td>
                            <td><p>88</p></td>
                            <td><a href="https://manage-api.sguk.ac.in/api/assets/6a1ea3eab7ec52d9d3245132" className="tl-def-btn-2" target="_blank">T.Y.B.PhARM 2023-24<i className="fa-regular fa-arrow-right"></i></a></td>
                        </tr>
                    </tbody>
                </Table>
                </div>
                </div>
            
         
             {/* <div className="col-lg-6">
              <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Placement absorption</h2></div>
                <div className="tl-event-details-left flex flex-col h-full">
                <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Sr. No</p></th>
                            <th><p className="text-[#4f70b6]">Particulars</p></th>
                            <th><p className="text-[#4f70b6]">Details</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>Students Placed</p></td>
                            <td><p>72%</p></td>
                        </tr>
                        <tr>
                            <td><p>2</p></td>
                            <td><p>Range of Package offered</p></td>
                            <td><p>2.0-5.5 LPA</p></td>
                        </tr>
                        <tr>
                            <td><p>3</p></td>
                            <td><p>Positions</p></td>
                            <td><p>Pharmacovigilance Trainee <br/> CCE officer <br/> In-process Quality Assurance Officer <br/> Trainee Quality Assurance <br/> Trainee Quality Control</p></td>
                        </tr>
                        <tr>
                            <td><p>4</p></td>
                            <td><p>Major Recruiters</p></td>
                            <td><p>Fortrea Labcorp <br/> Cognizant <br/> Cipla Pvt ltd <br/> Microlabs Lupin Pvt ltd <br/> Sigma Aldrich <br/> Bluecross laboratories <br/> Koye Pharmaceuticals <br/> Wellness Forever Medicare</p></td>
                        </tr>
                       
                    </tbody>
                </Table>
                </div>
                </div>  */}
            </div>  
        </div>
        </div>
      </div>
    </section>
  );
};

export default PhramacyDeptInternship;
