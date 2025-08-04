"use client";
import React from "react";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import Table from "react-bootstrap/Table";
import Publicatons from "./Publicatons";

const PhysicalDeptPublications = () => {
  return (
    <div className="schools-section pt-100 pb-100">
      <div className="container-fluid">
        
          <h2 className="tl-9-section-title mb-50">
            Research & Publications
          </h2>
          <div className="row">
            <MenuList dept="Physics" subMenu={NavLinks} />
            <div
              data-spy="scroll"
              className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
              data-target="#menu-navbar"
              data-offset="0"
            >
              <div className="row">
              <div className="col-lg-12">
                <div className="tl-event-details-left">
                  <div className="tl-event-details-key-content tl-event-details-area">
                    <p className="dark-mode-white-color">
                      The department of physics is one of the leading
                      departments in the university in research field. The faculty
                      members have received research grants from SGU as well as
                      government funding agencies. Also, they are actively
                      publishing their research work in highly reputed
                      international journals.
                    </p>
                    <h4 className="dark-mode-white-color mt-4">
                      <strong>Research grant received : </strong>
                    </h4>
                    <strong><p className="dark-mode-white-color">
                      From
                      National / International funding agencies:
                    </p></strong>
                    <Table
                      bordered
                      responsive
                      className="governing-table mt-6"
                    >
                      <thead>
                        <tr>
                          <th>
                            <p className="text-[#4f70b6]">Sr. No.</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Year</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Name of the Principal Investigator</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Title of the Project</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Funding Agency, Duration & Date of sanction</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Amount (in Lakh)</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>1</p>
                          </td>
                          <td>
                            <p>2024</p>
                          </td>
                          <td>
                            <p>Dr. Sambhaji M. Pawar</p>
                          </td>
                          <td>
                            <p>
                              Cost-effective synthesis of Cu-based MOF for
                              Electrochemical Reduction of CO2 to Clean Energy
                              Fuel generation
                            </p>
                          </td>
                          <td>
                            <p>
                              SERB-SURE <br/> 3 Years Project <br/> 11/01/2024 <br/> File No.:
                              SUR/2022/004010
                            </p>
                          </td>
                          <td>
                            <p>30,0000.00</p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                   
                   <strong><p className="dark-mode-white-color mt-30">
                        From University :
                    </p></strong>
                    <Table
                      bordered
                      responsive
                      className="governing-table mt-6"
                    >
                      <thead>
                        <tr>
                          <th>
                            <p className="text-[#4f70b6]">Sr. No.</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Year</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Name of the Principal Investigator</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Title of the Project</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Funding Agency, Duration & Date of sanction</p>
                          </th>
                          <th>
                            <p className="text-[#4f70b6]">Amount (in Lakh)</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>1</p>
                          </td>
                          <td>
                            <p>2023</p>
                          </td>
                          <td>
                            <p>Dr. Sambhaji M. Pawar</p>
                          </td>
                          <td>
                            <p>
                            Development of Self-assembled Nanomaterials for Piezoelectric Devices
                            </p>
                          </td>
                          <td>
                            <p>
                            SGU <br/> 1 Years Project <br/> 29/03/2023

                            </p>
                          </td>
                          <td>
                            <p>1,95,000.00</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p>2</p>
                          </td>
                          <td>
                            <p>2023</p>
                          </td>
                          <td>
                            <p>Dr. Satish A. Mahadik</p>
                          </td>
                          <td>
                            <p>
                                Development of Superhydrophobic Coatings for Anticorrosion Applications
                            </p>
                          </td>
                          <td>
                            <p>
                              SGU <br/> 1 Years Project  <br/> 30/03/2023
                            </p>
                          </td>
                          <td>
                            <p>1,50,000.00</p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-50">
              <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Research Publication: </h2></div>
                  <Publicatons />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalDeptPublications;
