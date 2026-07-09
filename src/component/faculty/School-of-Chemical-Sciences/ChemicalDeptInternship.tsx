"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from "react-bootstrap";

const ChemicalDeptInternship = () => {
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship & Placements</h2>

        <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Industry Internship Count</h2></div>
          <div className="col-lg-6">
          <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Year</p></th>
                            <th><p className="text-[#4f70b6]">Programme</p></th>
                            <th><p className="text-[#4f70b6]">No. of Students</p></th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td><p>2025-26</p></td>
                                <td><p>PG</p></td>
                                <td><p>4</p></td>
                            </tr>
                            <tr>
                                <td><p>2024-25</p></td>
                                <td><p>PG</p></td>
                                <td><p>4</p></td>
                            </tr>
                            <tr>
                                <td><p>2023-24</p></td>
                                <td><p>PG</p></td>
                                <td><p>15</p></td>
                            </tr>
                            <tr>
                                <td><p>2022-23</p></td>
                                <td><p>PG</p></td>
                                <td><p>58</p></td>
                            </tr>
                            <tr>
                                <td><p>2021-22</p></td>
                                <td><p>PG</p></td>
                                <td><p>26</p></td>
                            </tr>
                            <tr>
                                <td><p>2020-21</p></td>
                                <td><p>PG</p></td>
                                <td><p>52</p></td>
                            </tr>
                            <tr>
                                <td><p>2019-20</p></td>
                                <td><p>PG</p></td>
                                <td><p>22</p></td>
                            </tr>
                            <tr>
                                <td><p>2018-19</p></td>
                                <td><p>PG</p></td>
                                <td><p>14</p></td>
                            </tr>
                        </tbody>

                </Table>
            </div>
        </div>
<div className="row gx-0 tl-blog-details-row mt-50">
  <div className="tl-11-section-heading">
    <h2 className="tl-11-section-title">Major Recruiters</h2>
  </div>
<h3>
  200+ Students Successfully Placed in Leading Pharmaceutical, Chemical, Biotech, and Research Organizations.
</h3>
  <div className="col-lg-12">
    <Table bordered responsive className="governing-table">
      <thead>
        <tr>
          <th><p className="text-[#4f70b6]">Sr. No.</p></th>
          <th><p className="text-[#4f70b6]">Recruiter</p></th>
        </tr>
      </thead>
      <tbody>
        {[
          "Sun Pharmaceutical Industries",
          "Dr. Reddy's Laboratories",
          "Cipla",
          "Glenmark Pharmaceuticals",
           "Zydus Lifesciences",
          ].map((company, index) => (
          <tr key={index}>
            <td><p>{index + 1}</p></td>
            <td><p>{company}</p></td>
          </tr>
        ))}
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

export default ChemicalDeptInternship;
