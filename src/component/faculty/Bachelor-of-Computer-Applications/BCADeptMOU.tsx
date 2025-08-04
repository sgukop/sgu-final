"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function BCADeptMOU() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">MOU</h2></div> 
            </div>
            <div className="row">
                <MenuList dept="Bachelor of Computer Applications" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
          <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Sr.No</p></th>
                            <th><p className="text-[#4f70b6]">Year of signing MoU or linkages</p></th>
                            <th><p className="text-[#4f70b6]">Name of organisation with whom MoU is being signed</p></th>
                            <th><p className="text-[#4f70b6]">Duration</p></th>
                            <th><p className="text-[#4f70b6]">Purpose of MoU/Collaboration</p></th>
                            <th><p className="text-[#4f70b6]">List of activities under MoU year wise</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>2024-25</p></td>
                            <td><p>Orange ITech (https://orangeitech.in)</p></td>
                            <td><p>Three years</p></td>
                            <td><p>This MoU aims to establish a collaborative relationship between the University and Orange ITech to enchance the placement prospects and industry readiness of students by providing training, internship opportunities, and expert guidance in industry-sponsored projects.</p></td>
                            <td><p>Guest lecture on “Career Opportunity in IT” on 12th March 2025 at 9.30am in A201 hall.</p></td>
                        </tr>
                        
                     </tbody>
                </Table>
            </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default BCADeptMOU;
