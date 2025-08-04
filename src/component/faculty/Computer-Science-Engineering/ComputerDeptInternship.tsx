"use client"
import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import { Table } from "react-bootstrap";
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const computerDeptInternship = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container-fluid">
        <h2 className={`${pageStyle}-section-title text-center py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50`}>Internship & Placemments</h2>
        <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            {/* <div className={`row ${pageStyle}-categories-row`}>

            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67d7de124f56d3a0bcfb9ecc" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title">Internship 2024-25 <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
        
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67514da14b17e19d8f361d2a" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title">Internship 2023-24 <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67514d854b17e19d8f361d25" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title">Internship 2022-23 <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67514d624b17e19d8f361d20" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title">Internship 2021-22 <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67514d374b17e19d8f361d1b" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title">Internship 2020-21 <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
        </div>  */}

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
                            <td><p>2020-21</p></td>
                            <td><p>UG</p></td>
                            <td><p>30</p></td>
                        </tr>

                        <tr>
                            <td><p>2021-22</p></td>
                            <td><p>UG</p></td>
                            <td><p>62</p></td>
                        </tr>

                        <tr>
                            <td><p>2022-23</p></td>
                            <td><p>UG</p></td>
                            <td><p>129</p></td>
                        </tr>

                        <tr>
                            <td><p>2023-24</p></td>
                            <td><p>UG</p></td>
                            <td><p>132</p></td>
                        </tr>

                        <tr>
                            <td><p>2024-25</p></td>
                            <td><p>UG</p></td>
                            <td><p>120</p></td>
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
                                    <td><p>2020-21</p></td>
                                    <td><p>UG</p></td>
                                    <td><p>18</p></td>
                                </tr>

                                <tr>
                                    <td><p>2021-22</p></td>
                                    <td><p>UG</p></td>
                                    <td><p>85</p></td>
                                </tr>

                                <tr>
                                    <td><p>2022-23</p></td>
                                    <td><p>UG</p></td>
                                    <td><p>53</p></td>
                                </tr>

                                <tr>
                                    <td><p>2023-24</p></td>
                                    <td><p>UG</p></td>
                                    <td><p>21</p></td>
                                </tr>

                                <tr>
                                    <td><p>2024-25</p></td>
                                    <td><p>UG</p></td>
                                    <td><p>43</p></td>
                                </tr>
                               
                            </tbody>
                        </Table>
                    </div>
                </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default computerDeptInternship