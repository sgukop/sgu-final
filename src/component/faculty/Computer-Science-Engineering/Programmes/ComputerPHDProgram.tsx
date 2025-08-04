"use client"
import React from 'react'
import Link from 'next/link'
import Table from "react-bootstrap/Table";

const ComputerPGProgram = () => {
  return (
    <>
  <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programmes Offered Under CSE Department</h2>
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/computer-science-engineering/programmes/phd-programmes.png" alt="About Electrial & Electronics Engineering" className="tl-8-about-main-img rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}}/>
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                <h6 className="tl-8-feature-title">Ph. D. in Computer Science and Engineering</h6>
                    <div className="tl-8-feature mt-30">
                    <h6 className="tl-8-feature-title">List of Registered Phd. Scholars:</h6>
                    <Table bordered responsive className="governing-table mt-30">
                        <thead>
                            <tr>
                                <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                                <th><p className="text-[#4f70b6]">Name of Student</p></th>
                                <th><p className="text-[#4f70b6]">Area</p></th>
                                <th><p className="text-[#4f70b6]">Name of Guide</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>1</p></td>
                                <td><p>Ms. Rahesha Yasin Mulla</p></td>
                                <td><p>Machine Learning</p></td>
                                <td><p>Dr. Archana M. Chougule</p></td>
                            </tr>
                            <tr>
                                <td><p>2</p></td>
                                <td><p>Mr. Sagar Baburao Patil</p></td>
                                <td><p>Machine Learning</p></td>
                                <td><p>Dr. Archana M. Chougule</p></td>
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

export default ComputerPGProgram