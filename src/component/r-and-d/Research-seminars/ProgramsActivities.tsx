"use client"
import React from 'react'
import Table from "react-bootstrap/Table";

const ProgramsActivities = () => {
  return (
    <div className="col-lg-12">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Programs / Activities</h3>
                    <Table bordered  responsive className="governing-table">
                        <thead>
                            <tr>
                                <th><p>Sr. No.</p></th>
                                <th><p>Title of the talk/webinar</p></th>
                                <th><p>Resource Person</p></th>
                                <th><p>Hosted By.</p></th>
                                <th><p>No. of Attendees</p></th>
                                <th><p>Duration</p></th>
                                <th><p>Date</p></th>
                                <th><p>Link</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>1</p></td>
                                <td><p>Webinar on Introduction to LaTeX: Writing Thesis and Research Papers</p></td>
                                <td><p>1. Dr. Nilesh Bhaskarrao Bahadure (Head,Department of Electronics, SGU Kolhapur)<br/><br/>
                                2. Dr. P.D.Patil (Associate Professor Department of Electronics, SGU Kolhapur)</p></td>
                                <td><p>Department of Electronics Engineering</p></td>
                                <td><p>55 (35 Foreigners, 20 Indians)</p></td>
                                <td><p>02.30 Hours.</p></td>
                                <td><p>04 September 2021</p></td>
                                <td><a href="#" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Report<i className="fa-regular fa-arrow-right"></i></a></td>
                            </tr>
                        </tbody>
                    </Table>
            </div>
        </div>
    </div>
  )
}

export default ProgramsActivities