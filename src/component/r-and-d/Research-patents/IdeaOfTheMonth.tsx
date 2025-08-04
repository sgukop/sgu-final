"use client"
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";

const IdeaOfTheMonth = () =>  {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Idea of the Month</h2>
            <div className="tl-staff-profile-top mb-30">
                <div className="tl-staff-profile-txt">
                    <h6 className="tl-8-feature-title mt-20 mb-20 text-right">... accelerating innovation</h6>
                    <p className="tl-staff-profile-bio mt-20">The <strong>Idea of the Month</strong> activity to offers a common platform for all the stakeholders of SGU to present their creative and innovative ideas for converting them into reality. The purpose of activity is to promote the innovation culture at SGU. Any person student / teacher / supporting staff of SGU can submit the idea /concept about the innovative product / process / system every month. Only concept / working principle with method / sketch / block diagram is required. No prototyping is expected. The idea is kept secret. Potential ideas are promoted for patents. Individual or a group of people can apply and language is not a barrier. The concepts are submitted before 25th of every month. The ideas will are assessed by a scrutiny committee for Idea of the Month prize Rs. 2,000/- by first week of next month. The ideas with potential idea are funded for converting into reality if feasible (Max 10,000/-) and also supported financially for applying for patents..</p>

                    <div className="tl-staff-profile-intro">
                        <div>
                            <h4 className="tl-staff-profile-name">Prof. Dr. P. D. Patil</h4>
                            <h6 className="tl-staff-profile-role">Coordinator,</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-event-details-left">
                <h3 className="tl-event-details-area-title text-[#4f70b6]">Idea of the Month Activity</h3>
                    <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47d4d4f56d3a0bcfb689a.pdf" target="_blank">
                                        <h5 className="tl-3-single-program-title publication-title">Click here for Idea of the Month flyer <i className="fa-regular fa-arrow-right-long"></i></h5>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47d244f56d3a0bcfb6893.pdf" target="_blank">
                                        <h5 className="tl-3-single-program-title publication-title">Click here for Idea of the Month Application Form <i className="fa-regular fa-arrow-right-long"></i></h5>
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
                                                <th><p className="text-[#4f70b6]">Winner</p></th>
                                                <th><p className="text-[#4f70b6]">Title</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                                <td><p>1</p></td>
                                                <td><p>June 2021</p></td>
                                                <td><p>Mr. Prateek Joshi (Mechanical Engg. SOT)</p></td>
                                                <td><p>Menstrual Pain Relief Device</p></td>
                                        </tr>

                                        <tr>
                                                <td><p>2</p></td>
                                                <td><p>July 2021</p></td>
                                                <td><p>No Winner</p></td>
                                                <td><p>-</p></td>
                                        </tr>

                                        <tr>
                                                <td><p>3</p></td>
                                                <td><p>August 2021</p></td>
                                                <td><p>No Winner</p></td>
                                                <td><p>-</p></td>
                                        </tr>

                                        <tr>
                                                <td><p>4</p></td>
                                                <td><p>September 2021</p></td>
                                                <td><p>No Winner</p></td>
                                                <td><p>-</p></td>
                                        </tr>

                                        <tr>
                                                <td><p>5</p></td>
                                                <td><p>October 2021</p></td>
                                                <td><p>No Winner</p></td>
                                                <td><p>-</p></td>
                                        </tr>

                                        <tr>
                                                <td><p>6</p></td>
                                                <td><p>November 2021</p></td>
                                                <td><p>No Winner</p></td>
                                                <td><p>-</p></td>
                                        </tr>

                                        <tr>
                                                <td><p>7</p></td>
                                                <td><p>December 2021</p></td>
                                                <td><p>No Winner</p></td>
                                                <td><p>-</p></td>
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

export default IdeaOfTheMonth