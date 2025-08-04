"use client"
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacyDeptResearch = () => {
  return (
    <section className="sttp-container">
        <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">Research & Publications</h2>
          <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-3-programs-pills">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Research Areas</h2></div>
                <div className="row justify-content-center">
                    
                        <div className="col-lg-12">
                            <div className="tl-event-details-left">
                                <div className="tl-event-details-key-content">
                                    <ul className="tl-event-details-key-content-list">
                                        <li>Nano technology-based drug delivery systems</li>
                                        <li>Formulation of heterocyclic compounds for cancer treatment</li>
                                        <li>Millet formulation for antiulcer activity</li>
                                        <li>Formulation of nanoparticles from natural source for anticancer property</li>
                                        <li>In-situ gel formulation for intranasal drug delivery</li>
                                        <li>Formulation of multicomponent inclusions for poorly water-soluble drugs</li>
                                        <li>Hematinic activity of a few herbal extracts in lab animals.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="row tl-event-details-row g-0 mt-50 mb-50">
                  <div className="col-lg-12">
                  <div className="tl-event-details-left">
                    <h3 className="tl-event-details-area-title">Publications</h3>
                    <div className="tl-event-details-key-content tl-event-details-area">
                        <Table responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]"><strong>Academic Year</strong></p></th>
                                    <th><p className="text-[#4f70b6]"><strong>Number of Publications</strong></p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>2019-20</p></td>
                                    <td><p>01</p></td>
                                </tr>
                                <tr>
                                    <td><p>2020-21</p></td>
                                    <td><p>03</p></td>
                                </tr>
                                <tr>
                                    <td><p>2021-22</p></td>
                                    <td><p>05</p></td>
                                </tr>
                                <tr>
                                    <td><p>2022-23</p></td>
                                    <td><p>02</p></td>
                                </tr>
                                <tr>
                                    <td><p>2023-24</p></td>
                                    <td><p>10</p></td>
                                </tr>
                                <tr>
                                    <td><p>2024-25</p></td>
                                    <td><p>11</p></td>
                                </tr>
                            </tbody>
                        </Table>
                      </div>
                  </div>
                </div>
            </div>

            <div className="row tl-event-details-row g-0 mt-30 mb-30">
                  <div className="col-lg-12">
                  <div className="tl-event-details-left">
                  <h3 className="tl-event-details-area-title">Patent Details</h3>
                    <div className="tl-event-details-key-content tl-event-details-area">
                        <Table responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]"><strong>Academic Year</strong></p></th>
                                    <th><p className="text-[#4f70b6]"><strong>Number of Patents</strong></p></th>
                                    <th><p className="text-[#4f70b6]"><strong>Name of Faculty</strong></p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>2021-22</p></td>
                                    <td><p>10</p></td>
                                    <td><p>Dr. Abhinandan Patil</p></td>
                                </tr>

                                <tr>
                                    <td><p>2022-23</p></td>
                                    <td><p>02</p></td>
                                    <td><p>Dr. Srinath B</p><p>Mr. Suraj Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>2023-24</p></td>
                                    <td><p>04</p></td>
                                    <td><p>Mrs. Prajakta Subramani</p><p>Mrs. Ashwini Chakote , Dr. Vidyarani Khot & Dr. Subhash Kumbhar</p><p>Dr. Subhash Kumbhar & Ms. Archana Vanjari</p></td>
                                </tr>

                                <tr>
                                    <td><p>2024-25</p></td>
                                    <td><p>04</p></td>
                                    <td><p>Gaikwad Raviraj, Snehal Bongarde, Dr. Mangesh Vedpathak</p></td>
                                </tr>
                                
                            </tbody>
                        </Table>
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

export default PharmacyDeptResearch