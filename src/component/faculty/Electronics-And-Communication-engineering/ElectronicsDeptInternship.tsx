"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from "react-bootstrap";


const ElectronicsDeptInternship = () => {
 return (
    <section
      className="tl-14-about tl-8-pricing pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship & Placements</h2>

        <div className="row">
          <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
              <div className="row gx-0 tl-blog-details-row">
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Internship</h2></div>
           <div className="col-lg-12">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Academic Year</p></th>
                            <th><p className="text-[#4f70b6]">2024-25</p></th>
                            <th><p className="text-[#4f70b6]">2023-24</p></th>
                            <th><p className="text-[#4f70b6]">2022-23</p></th>
                            <th><p className="text-[#4f70b6]">2021-22</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Students Placed</p></td>
                            <td><p>45</p></td>
                            <td><p>27</p></td>
                            <td><p>25</p></td>
                            <td><p>25</p></td>
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
                            <th><p className="text-[#4f70b6]">Academic Year</p></th>
                            <th><p className="text-[#4f70b6]">2024-25</p></th>
                            <th><p className="text-[#4f70b6]">2023-24</p></th>
                            <th><p className="text-[#4f70b6]">2022-23</p></th>
                            <th><p className="text-[#4f70b6]">2021-22</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Students Placed</p></td>
                            <td><p>Ongoing</p></td>
                            <td><p>14</p></td>
                            <td><p>12</p></td>
                            <td><p>16</p></td>
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

export default ElectronicsDeptInternship;
