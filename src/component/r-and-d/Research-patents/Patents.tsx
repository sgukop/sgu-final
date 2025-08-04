"use client"
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";

const Patents = () =>  {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Patents & Innovations Cell</h2>
            <div className="tl-event-details-left mt-30">
                <h3 className="tl-event-details-area-title text-[#4f70b6]">Patents</h3>
                    <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                <Table bordered  responsive className="governing-table">
                                    <thead>
                                        <tr>
                                            <th><p>Sr. No.</p></th>
                                            <th><p>Applicant Name</p></th>
                                            <th><p>Title</p></th>
                                            <th><p>Field of Invention</p></th>
                                            <th><p>Published Date</p></th>
                                            <th><p>Grant Date</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>1</p></td>
                                            <td><p></p></td>
                                            <td><p></p></td>
                                            <td><p>-</p></td>
                                            <td><p></p></td>
                                            <td><p></p></td>
                                        </tr>
                                    </tbody>
                                 </Table>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="tl-event-details-left mt-30">
                <h3 className="tl-event-details-area-title text-[#4f70b6]">Industrial Design</h3>
                    <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                <Table bordered  responsive className="governing-table">
                                    <thead>
                                        <tr>
                                            <th><p>Sr. No.</p></th>
                                            <th><p>Applicant Name</p></th>
                                            <th><p>Title</p></th>
                                            <th><p>Design Number</p></th>
                                            <th><p>Date</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>1</p></td>
                                            <td><p>Dr. Abhinandan Ravsaheb Patil, <br/> Sanjay Ghodawat University</p></td>
                                            <td><p>AUTOMATIC LABORATORY MIXER</p></td>
                                            <td><p>344962-001</p></td>
                                            <td><p>18-06-2021</p></td>
                                        </tr>
                                    </tbody>
                                 </Table>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="tl-event-details-left mt-30">
                <h3 className="tl-event-details-area-title text-[#4f70b6]">Copyrights</h3>
                    <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                <Table bordered  responsive className="governing-table">
                                    <thead>
                                        <tr>
                                            <th><p>Sr. No.</p></th>
                                            <th><p>Applicant Name</p></th>
                                            <th><p>Title</p></th>
                                            <th><p>Type</p></th>
                                            <th><p>Registration No.</p></th>
                                            <th><p>Date</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>1</p></td>
                                            <td><p></p></td>
                                            <td><p></p></td>
                                            <td><p>-</p></td>
                                            <td><p></p></td>
                                            <td><p></p></td>
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

export default Patents