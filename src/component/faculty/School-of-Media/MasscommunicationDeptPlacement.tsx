"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from "react-bootstrap";

const MasscommunicationDeptPlacement = () => {
  
 return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship & Placements</h2>

        <div className="row">
          <MenuList dept="Mass Communication" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Internship Count</h2></div>
              <div className="col-lg-12">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Year</p></th>
                            <th><p className="text-[#4f70b6]">Student Count</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>2017-2020</p></td>
                            <td><p>10</p></td>
                        </tr>
                        <tr>
                            <td><p>2018-2021</p></td>
                            <td><p>17</p></td>
                        </tr>
                        <tr>
                            <td><p>2019-2022</p></td>
                            <td><p>07</p></td>
                        </tr>
                        <tr>
                            <td><p>2020-2023</p></td>
                            <td><p>09</p></td>
                        </tr>
                        <tr>
                            <td><p>2021-2024</p></td>
                            <td><p>08</p></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
          </div>

          <div className="row gx-0 tl-blog-details-row mt-50">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Placement absorption</h2></div>
              <div className="col-lg-12">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Student Name</p></th>
                            <th><p className="text-[#4f70b6]">Passing Year</p></th>
                            <th><p className="text-[#4f70b6]">Placement</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Pawar Sakshi Vijay</p></td>
                            <td><p>2022-23</p></td>
                            <td><p>Production Executive, Pudhari News Channel, Mumbai</p></td>
                        </tr>
                        <tr>
                            <td><p>Jadhav Sakshi Sanjay</p></td>
                            <td><p>2022-23</p></td>
                            <td><p>Social Media Manager, Brand Sense Adv. agency Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>Gharpankar Snehal Maruti</p></td>
                            <td><p>2022-23</p></td>
                            <td><p>SP9 Marathi News, You Tube channel Kolhapur.</p></td>
                        </tr>
                        <tr>
                            <td><p>Kulkarni Ritika Amar</p></td>
                            <td><p>2022-23</p></td>
                            <td><p>Anchor- Assistant scout pvt. Ltd You Tube channel</p></td>
                        </tr>
                        <tr>
                            <td><p>Sarthak Kolekar</p></td>
                            <td><p>2023-24</p></td>
                            <td><p>Political PRO</p></td>
                        </tr>
                        <tr>
                            <td><p>Karansinh Desai</p></td>
                            <td><p>2023-24</p></td>
                            <td><p>Pudhari News- Graphic Designer</p></td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default MasscommunicationDeptPlacement;
