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
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Internship Count</h2></div>
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
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Placement Adsorption</h2></div>
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
                                    <td><p>2024-25</p></td>
                                    <td><p>PG</p></td>
                                    <td><p>04</p></td>
                                </tr>
                                <tr>
                                    <td><p>2023-24</p></td>
                                    <td><p>PG</p></td>
                                    <td><p>39</p></td>
                                </tr>
                                <tr>
                                    <td><p>2022-23</p></td>
                                    <td><p>PG</p></td>
                                    <td><p>63</p></td>
                                </tr>
                                <tr>
                                    <td><p>2021-22</p></td>
                                    <td><p>PG</p></td>
                                    <td><p>35</p></td>
                                </tr>
                                <tr>
                                    <td><p>2020-21</p></td>
                                    <td><p>PG</p></td>
                                    <td><p>37</p></td>
                                </tr>
                                <tr>
                                    <td><p>2019-20</p></td>
                                    <td><p>PG</p></td>
                                    <td><p>43</p></td>
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
        </div>
        </div>
      </div>
    </section>
  );
};

export default ChemicalDeptInternship;
