"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

function ElectricalDeptBoardOfStudies() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
      <h2 className="tl-9-section-title mb-50">Board of Studies</h2>
      <div className="row">
          <MenuList
            dept="Electrical & Electronics Engineering"
            subMenu={NavLinks}
          />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Constitution of board of studies for ECE department</h2></div>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                  <th><p className="text-[#4f70b6]">Name of The Member</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                  <th><p className="text-[#4f70b6]">Position</p></th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td><p>1</p></td>
                  <td> <p>Dr. Rajin M. Linus</p></td>
                  <td><p>BOS Chairman, Department of EEE, SGU </p></td>
                  <td><p>Chairman</p></td>
              </tr>

              <tr>
                  <td><p>2</p></td>
                  <td><p>Dr D.R. Binu Ben Jose </p></td>
                  <td><p>Professor, Department of Electrical Engineering, VIT Chennai, Tamilnadu</p></td>
                  <td><p>Member Academia Expert</p></td>
              </tr>

              <tr>
                  <td><p>3</p></td>
                  <td><p>Mr.Shridhar Ramdurgkar</p></td>
                  <td><p>Chairman, AG Motors, Karad, Maharashtra</p></td>
                  <td><p>Member Industry Expert</p></td>
              </tr>

              <tr>
                  <td><p>4</p></td>
                  <td><p>Mr Uday T. Patil</p></td>
                  <td><p>Assistant Professor, Department of EEE, SGU</p></td>
                  <td><p>Member B.Tech. Program Coordinator </p></td>
              </tr>

              <tr>
                  <td><p>5</p></td>
                  <td><p>Mr Indrajit D. Pharne</p></td>
                  <td><p>Assistant Professor, Department of EEE, SGU</p></td>
                  <td><p>Member M.Tech. Program Coordinator</p></td>
              </tr>

              <tr>
                  <td><p>6</p></td>
                  <td><p>Mr. Anand B. Kumbhar</p></td>
                  <td><p>Assistant Professor, Department of EEE, SGU</p></td>
                  <td><p>Member Industry University Interaction Cell Coordinator</p></td>
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

export default ElectricalDeptBoardOfStudies;
