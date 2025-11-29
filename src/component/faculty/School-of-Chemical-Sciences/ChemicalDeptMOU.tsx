'use client'
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ChemicalDeptMOU = () => {
  return (
    <section className="tl-8-courses tl-3-section-spacing">
        <div className="container-fluid">
           <h2 className="tl-9-section-title mb-50">MOU / linkage with Institutions / Industries in India and abroad</h2>
           <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
              <div className="row gx-0 tl-blog-details-row">
               {/*  <p className="dark-mode-white-color my-4 text-[#4f70b6]"><strong>Details of Number of functional MoUs /linkage with institutions/ industries in India and abroad</strong></p>  */}
                <div className="col-lg-12">
                <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                    <th><p className="text-[#4f70b6]">Year of signing MoU or Linkages</p></th>
                    <th><p className="text-[#4f70b6]">Name of the organization with whom MOU/Collaboration being signed</p></th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                  <td><p>2025</p></td>
                  <td><p>Infinia Sciences Pvt Ltd,Pune,</p></td>
                </tr>

                <tr>
                  <td><p>2023</p></td>
                  <td><p>Fluorochem Pvt Ltd, Pune</p></td>
                </tr>

                <tr>
                  <td><p>2023</p></td>
                  <td><p>Ceraflux India Pvt Ltd Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>2023</p></td>
                  <td><p>Shivaji University</p></td>
                </tr>

                <tr>
                  <td><p>2022-23</p></td>
                  <td><p>Swinburne University of Technology, Australia</p></td>
                </tr>

                <tr>
                  <td><p>2022-23</p></td>
                  <td><p>Monash University Australia</p></td>
                </tr>

                <tr>
                  <td><p>2022-23</p></td>
                  <td><p>C-MET, Pune</p></td>
                </tr>

                <tr>
                  <td><p>2022-23</p></td>
                  <td><p>Bureau of Indian Standards</p></td>
                </tr>

                <tr>
                  <td><p>2022</p></td>
                  <td><p>Shivaji University</p></td>
                </tr>

                <tr>
                  <td><p>2022</p></td>
                  <td><p>Callidus Research Laboratory, Pune</p></td>
                </tr>

                <tr>
                  <td><p>2019</p></td>
                  <td><p>CSIR-NCL, Pune</p></td>
                </tr>
            </tbody>
            </Table>
          </div>
        </div>
           {/*  <div className="tl-8-course">
                <div className="tl-8-course-img"><img src="assets/images/chemical-sciences-dept/mou/chonnam-university.jpg" alt="MOU University Image"/></div>
                    <div className="tl-8-course-txt">
                        <div className="tl-8-course-info">
                            <span className="tl-8-course-price" style={{fontSize:"20px"}}>South Korea</span>
                        </div>
                        <h3 className="tl-8-course-title" style={{fontSize:"30px"}}>Chonnam National University</h3>
                        <p className="tl-8-course-descr">Establish Framework for Education and Research</p>

                        <div className="tl-8-course-parts">
                            <div className="tl-8-course-part">
                               <div className="tl-8-course-part-txt">
                                    <h6 className="tl-8-course-part-title">11th August, 2017</h6>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <div className="tl-8-course mt-20">
                <div className="tl-8-course-img"><img src="assets/images/chemical-sciences-dept/mou/yeungnam-university.jpg" alt="MOU University Image"/></div>
                    <div className="tl-8-course-txt">
                        <div className="tl-8-course-info">
                            <span className="tl-8-course-price" style={{fontSize:"20px"}}>South Korea</span>
                        </div>
                        <h3 className="tl-8-course-title" style={{fontSize:"30px"}}>Yeungnam University</h3>
                        <p className="tl-8-course-descr">Establish Framework for Education and Research</p>

                        <div className="tl-8-course-parts">
                            <div className="tl-8-course-part">
                               <div className="tl-8-course-part-txt">
                                    <h6 className="tl-8-course-part-title">11th August, 2017</h6>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <div className="tl-8-course mt-20">
                <div className="tl-8-course-img"><img src="assets/images/chemical-sciences-dept/mou/IITM.jpg" alt="MOU University Image"/></div>
                    <div className="tl-8-course-txt">
                        <div className="tl-8-course-info">
                            <span className="tl-8-course-price" style={{fontSize:"20px"}}>Government of India</span>
                        </div>
                        <h3 className="tl-8-course-title" style={{fontSize:"30px"}}>Indian Institute of Tropical Meteorology (IITM), Pune, The Ministry of Earth Sciences, Govt. of India</h3>
                        <p className="tl-8-course-descr">Establish the Atmospheric Research Laboratory to measure the Lightning, thunderstorm and its related phenomena, Global Electric Circuit</p>

                        <div className="tl-8-course-parts">
                            <div className="tl-8-course-part">
                               <div className="tl-8-course-part-txt">
                                    <h6 className="tl-8-course-part-title">08th March, 2018</h6>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>  */}
            </div>
            </div>
            </div>
    </section>
  )
}

export default ChemicalDeptMOU