"use client"
import React from 'react'
import Table from "react-bootstrap/Table";

const MathematicsUGProgram = () => {
  return (
    <>
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programmes Offered</h2>
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/department-of-mathematics/programmes/Bsc-Math.png" alt="Bachelor Programmes Image" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                 
                <h2 className="tl-8-section-title text-2xl">Bachelor of Science in Mathematics (B.Sc - Mathematics)</h2>
                        <div className="tl-8-feature">
                            <h6 className="tl-13-about-sub-title mr-10">Intake : 25</h6>
                            <h6 className="tl-8-feature-title mt-4">The Course Structure of (UG programme) B.Sc. Mathematics</h6>
                            <Table bordered responsive className="governing-table mt-4">
                                <thead>
                                    <tr>
                                        <th><p className="text-[#4f70b6]">NAME OF THE MEMBER</p></th>
                                        <th><p className="text-[#4f70b6]">POST/CATEGORY</p></th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>Core Course (CC)</p></td>
                                        <td><p>16</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Ability Enhancement Compulsory Courses (AECC)</p></td>
                                        <td><p>02</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Skill Enhancement Courses (SEC)</p></td>
                                        <td><p>04</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Discipline Specific Elective (DSE)</p></td>
                                        <td><p>04</p></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default MathematicsUGProgram