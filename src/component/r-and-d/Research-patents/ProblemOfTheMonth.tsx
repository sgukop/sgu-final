"use client"
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";

const ProblemOfTheMonth = () =>  {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Problem of the Month</h2>
            <div className="tl-staff-profile-top mb-30">
                <div className="tl-staff-profile-txt">
                    <h6 className="tl-8-feature-title mt-20 mb-20 text-right">... Innovative solutions for challenging problem</h6>
                    <p className="tl-staff-profile-bio mt-20">The <strong>Problem of the Month</strong> activity offers a platform for all the stakeholders of SGU to apply their creative and innovative minds to offer solution/s for a given engineering problem. It is the extension of the idea of the month activity. The idea of the month is converted into the problem of the month. The purpose of activity is to promote the innovation culture at SGU. Any person student / teacher / supporting staff of SGU can submit the solution about the problem given by the Patent and Innovation cell. The problem is declared in first week of every month. The solution with prescribed drawing, details of the bill of material etc. is to be submitted within a month. The solution is kept secret. The potential solution is promoted for patents. Individual or a group of people can apply and language is not a barrier. The solutions are expected to submit before 25th day of every month. The solution and its feasibility will be checked by a scrutiny committee. The honorarium of Rs. 5,000/- and Rs. 15,000/- for the processing and materials is given for every problem on successful execution of the solution.</p>

                    <div className="tl-staff-profile-intro">
                        <div>
                            <h4 className="tl-staff-profile-name">Prof. Dr. A. A. Patil</h4>
                            <h6 className="tl-staff-profile-role">Coordinator,</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-event-details-left">
                <h3 className="tl-event-details-area-title text-[#4f70b6]">Problem of the Month Activity</h3>
                    <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47dac4f56d3a0bcfb68a7.pdf" target="_blank">
                                        <h5 className="tl-3-single-program-title publication-title">Click here for Problem of the Month flyer <i className="fa-regular fa-arrow-right-long"></i></h5>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47ddd4f56d3a0bcfb68ac.pdf" target="_blank">
                                        <h5 className="tl-3-single-program-title publication-title">Click here for Problem of the Month Application Form <i className="fa-regular fa-arrow-right-long"></i></h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

                
            <div className="tl-event-details-left mt-30">
                <h3 className="tl-event-details-area-title text-[#4f70b6]">Winners :</h3>
                    <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                <Table striped bordered hover responsive className="governing-table">
                                    <thead>
                                        <tr>
                                                <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                                                <th><p className="text-[#4f70b6]">Month</p></th>
                                                <th><p className="text-[#4f70b6]">Problem</p></th>
                                                <th><p className="text-[#4f70b6]">E-Filing</p></th>
                                                <th><p className="text-[#4f70b6]">Winner</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                                <td><p>1</p></td>
                                                <td><p>June 2021</p></td>
                                                <td><p>Problem of Month June 2021</p></td>
                                                <td><p>-</p></td>
                                                <td><p>Mr. Harshvardhan D. Patil,Mech. Engg.Dept.</p></td>
                                        </tr>

                                        <tr>
                                                <td><p>2</p></td>
                                                <td><p>August 2021</p></td>
                                                <td><a href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47e2b4f56d3a0bcfb68b5.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Problem of Month August 2021<i className="fa-regular fa-arrow-right"></i></a></td>
                                                <td><p></p></td>
                                                <td><p>In Process</p></td>
                                        </tr>

                                        <tr>
                                                <td><p>3</p></td>
                                                <td><p>November 2021</p></td>
                                                <td><a href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47e544f56d3a0bcfb68ba.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Problem of Month August 2021<i className="fa-regular fa-arrow-right"></i></a></td>
                                                <td><a href="https://docs.google.com/forms/d/e/1FAIpQLSdAXmwub6n9wsI78uf5os8dWUJebqYBv7LqftdE2bRaV6Tfyw/viewform?pli=1" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Link<i className="fa-regular fa-arrow-right"></i></a></td>
                                                <td><p>Live</p></td>
                                        </tr>
                                    </tbody>
                                 </Table>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
   
  )
}

export default ProblemOfTheMonth