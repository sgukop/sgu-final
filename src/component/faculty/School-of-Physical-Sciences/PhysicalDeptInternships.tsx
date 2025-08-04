"use client"
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import Table from "react-bootstrap/Table";

const PhysicalDeptInternships = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
    <div className="container-fluid">
        <div className="tl-14-section-heading">
            <h2 className="tl-9-section-title mb-50">Internship</h2>
        </div>
        <div className="row">
          <MenuList dept="Physics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Internship</h2></div>

        <div className="row align-items-center tl-1-about-row">
           <h3 className="tl-event-details-area-title">List of students with details</h3>
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <Table bordered responsive className="governing-table mt-20">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Year</p></th>
                                    <th><p className="text-[#4f70b6]">Name of Program</p></th>
                                    <th><p className="text-[#4f70b6]">Name of Student</p></th>
                                    <th><p className="text-[#4f70b6]">Name of Industry / Institution</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>2018-19</p></td>
                                    <td><p>M.Sc. II</p></td>
                                    <td><p>Mr. Sambhaji Khot, <br/> Mr. Satish Phalake, <br/> Mr. Shivraj Mahadik,<br/>  Mr. Akshay Patil</p></td>
                                    <td><p>Nanoscience Department, Mumbai University</p></td>
                                </tr>
                                <tr>
                                    <td><p>2019 - 20</p></td>
                                    <td><p>M.Sc. II</p></td>
                                    <td><p>Ms. Aditi Yadav, <br/> Ms. Mrunal Komejwar,<br/>  Ms. Kimaya Powar, <br/> Mr. Sanket Mali, <br/> Mr. Omkar Patil, <br/> Ms. Shweta Mohite <br/> Ms. Harshada More, <br/> Mr. Ranjit Ugade</p></td>
                                    <td><p>IIG, Mumbai,<br/> IIG, Mumbai <br/>IIG, Mumbai,<br/>IITM, Pune <br/> IITM, Pune <br/> IITM, Pune <br/>IITM, Pune <br/> SRM University, Chennai</p></td>
                                </tr>

                                <tr>
                                    <td><p>2019 - 20</p></td>
                                    <td><p>B.Sc. III</p></td>
                                    <td><p>Ms. Sonali Sathe, <br/> Mr. Sandeep Patel,<br/>  Ms. Muquddas Mujawar</p></td>
                                    <td><p>SRM University, Chennai,<br/>SRM University, Chennai <br/> TIFR, Mumbai</p></td>
                                </tr>

                                <tr>
                                    <td><p>2022-23</p></td>
                                    <td><p>M.Sc. II</p></td>
                                    <td><p>Miss Khondre Kranti Ananda, <br/> Miss Kore Ritu Sanjay,<br/>  Mr. Korsar Vicky Parshuram, <br/> Miss Kumbhar Prajakta Dagadu, <br/> Mr. Madnaik Akshay Kumar, <br/> Miss Mayekar Divina Dinesh, <br/> Miss Patil Sanjana Shanka, <br/> Miss Majale Archana Sanjay</p></td>
                                    <td><p>WAICHAl Research Institute, Ichalkaranji</p></td>
                                </tr>
                              
                            </tbody>
                       </Table>
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

export default PhysicalDeptInternships