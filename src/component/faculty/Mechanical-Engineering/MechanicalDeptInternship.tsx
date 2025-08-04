"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from "react-bootstrap";

const MechanicalDeptInternship = () => {
   return (
    <section
      className="tl-14-about tl-8-pricing pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Internship & Placements</h2>

        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title text-[#4f70b6]">Internship Count</h2></div>
           <div className="col-lg-12">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Year</p></th>
                            <th><p className="text-[#4f70b6]">Count</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>2023-24</p></td>
                            <td><p>35</p></td>
                        </tr>
                        <tr>
                            <td><p>2022-23</p></td>
                            <td><p>37</p></td>
                        </tr>
                        <tr>
                            <td><p>2021-22</p></td>
                            <td><p>39</p></td>
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

export default MechanicalDeptInternship;
