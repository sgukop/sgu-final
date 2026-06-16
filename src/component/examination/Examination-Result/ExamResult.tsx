"use client"
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";

const ExamResult = () =>  {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Examination Results Notice</h2>
            <div className="tl-event-details-left mt-30">
               <h3 className="tl-event-details-area-title mb-10 text-[#4f70b6]">Result Declaration Notice</h3>
                   <div className="row tl-event-details-row g-0">
                            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                <Table bordered  responsive className="governing-table">
                                    <thead>
                                        <tr>
                                            <th><p className="text-[#4f70b6]">Date</p></th>
                                            <th><p className="text-[#4f70b6]">Notice</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>01-06-2026</p></td>
                                            <td><a href="https://manage-api.sguk.ac.in/api/assets/6a1e9692b7ec52d9d32450f0" rel="noopener noreferrer" target="_blank" className="table-link">Result Publication Notice for Diploma Pharmacy and M.Sc. Physics<i className="fa-regular fa-arrow-right"></i></a></td>
                                        </tr>
                                    </tbody>
                                 </Table>
                            </div>
                        </div>
                </div>
        </div>
    </div>
   
  )
}

export default ExamResult