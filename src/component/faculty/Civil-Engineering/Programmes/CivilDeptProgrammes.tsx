"use client"
import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'
import Table from "react-bootstrap/Table";

const CivilDeptProgrammes = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Civil Department Programs</h2>
            <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Programs Offered</h2></div>
        <div className="row tl-event-details-row g-3">
                <div className="col-lg-6">
                   <div className="tl-event-details-left flex flex-col h-full">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">B.Tech Civil Engineering</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Industry Integrated Program in association with L&T EduTech</li>
                                </ul>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-6">
                  <div className="tl-event-details-left flex flex-col h-full">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">M.Tech Civil Engineering</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Structural Engineering</li>
                                <li>Construction Engineering and Management</li>
                                <li>Structural Systems for Infrastructure <br/> (Industry Integrated Program in association with L&T EduTech)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                            <Table striped responsive className="governing-table outer-style">
                                <thead>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>B. Tech Civil Engineering</p></td>
                                        <td><p>Duration - 4 Years</p></td>
                                        <td><p>Intake - 30</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>M. Tech Structural Engineering</p></td>
                                        <td><p>Duration - 2 Years</p></td>
                                        <td><p>Intake - 24</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>M. Tech Construction Engineering and Management</p></td>
                                        <td><p>Duration - 2 Years</p></td>
                                        <td><p>Intake - 12</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Ph. D in Civil Engineering</p></td>
                                        <td><p></p></td>
                                        <td><p></p></td> 
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                                        
                                        
                                        
                <div className="row gy-4 gy-sm-5 tl-1-blogs-row mt-50">
                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/civil-engineering-dept/programmes/Civil-Btech.png" alt="Civil UG Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/civil-UG-program">UG</Link></h4>
                                    <Link href="/civil-UG-program" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/civil-engineering-dept/programmes/Civil-Mtech.png" alt="Civil PG Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/civil-PG-program">PG</Link></h4>
                                    <Link href="/civil-PG-program" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CivilDeptProgrammes