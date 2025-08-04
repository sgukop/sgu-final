"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

function ManagementDeptMOU() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
      <h2 className="tl-9-section-title mb-50">
                MOU's
          </h2>
      <div className="row">
          <MenuList dept="School of Management" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
         
          <div className="col-lg-12">
            <Table bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Year of signing MoU or Linkages</p></th>
                  <th><p className="text-[#4f70b6]">Name of the organization with whom MOU/Collaboration being signed</p></th>
                  <th><p className="text-[#4f70b6]">Duration</p></th>
                  <th><p className="text-[#4f70b6]">Purpose of MOU/ Collaboration</p></th>
                  <th><p className="text-[#4f70b6]">List the actual activities under each MOU year-wise</p></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                    <td rowSpan={2}><p>2021 - 22</p></td>
                    <td><p>Logistics Sector Skill Council, Chennai</p></td>
                    <td><p>3 Years</p></td>
                    <td><p>Collaboration for launching BMS in AS&AC and BMS in AS&SC programs in SGU</p></td>
                    <td><p>BMS in Agri Storage and Supply Chain and BMS in Aviation Services and Air Cargo programs introduced in SGU from academic year 2021 - 22.</p></td>
                </tr>

                <tr>
                    <td><p>Institute of Company Secretaries of India (ICSI), New Delhi (Kolhapur Chapter)</p></td>
                    <td><p>01 Years</p></td>
                    <td><p>Study Centre, Training to Faculty and Students, Library facility, Workshops</p></td>
                    <td><p>Career Awareness Sessions</p></td>
                </tr>

                <tr>
                    <td><p>2022 - 23</p></td>
                    <td><p>DKASC College, Ichalkaranji</p></td>
                    <td><p>3 years</p></td>
                    <td><p>Soft Skill Development Programs, Value Added Activities for Students, Student-Faculty exchange</p></td>
                    <td><p>Conducted a Career Guidance Workshop for B. Com students</p></td>
                </tr>

                <tr>
                    <td rowSpan={2}><p>2023-24</p></td>
                    <td><p>Arts, Science, Commerce College, Palus</p></td>
                    <td><p>3 years</p></td>
                    <td><p>Value Added Activities for Students, Student-Faculty exchange</p></td>
                    <td><p></p></td>
                </tr>

                <tr>
                    <td><p>Bajaj Finserv</p></td>
                    <td><p>3 Years</p></td>
                    <td><p>Skill Development</p></td>
                    <td><p>Certification programme</p></td>
                </tr>

                <tr>
                    <td rowSpan={2}><p>2024-25</p></td>
                    <td><p>NSE - National Stock Exchange</p></td>
                    <td><p>3 years</p></td>
                    <td><p>Interactive learning and skill development</p></td>
                    <td><p>Online certificate courses, Finishing School</p></td>
                </tr>

                <tr>
                    <td><p>L & T Edutech</p></td>
                    <td><p>3 Years</p></td>
                    <td><p>Interactive learning and skill development</p></td>
                    <td><p>Online certificate courses, Finishing School</p></td>
                </tr>

                <tr>
                    <td><p>2024-25</p></td>
                    <td><p>Tally(Creative Institute of Education )</p></td>
                    <td><p>2 Years</p></td>
                    <td><p>Employbility Skill Development</p></td>
                    <td><p>Offline Global Certification</p></td>
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

export default ManagementDeptMOU;
