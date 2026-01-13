"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function BCADeptAlumni() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Alumni</h2></div> 
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
                            <th><p className="text-[#4f70b6]">Programme Name</p></th>
                            <th><p className="text-[#4f70b6]">Year</p></th>
                            <th><p className="text-[#4f70b6]">Count</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>BCA</p></td>
                            <td><p>2022-2023</p></td>
                            <td><p>11</p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2023-2024</p></td>
                            <td><p>56</p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2024-2025</p></td>
                            <td><p>56</p></td>
                        </tr>
                     </tbody>
                </Table>

                <Table bordered responsive className="governing-table mt-50">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Programme Name</p></th>
                            <th><p className="text-[#4f70b6]">Year</p></th>
                            <th><p className="text-[#4f70b6]">Count</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>MCA</p></td>
                            <td><p>2022-2023</p></td>
                            <td><p>59</p></td>
                        </tr>
                        <tr>
                            <td><p></p></td>
                            <td><p>2023-2024</p></td>
                            <td><p>102</p></td>
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

export default BCADeptAlumni;
