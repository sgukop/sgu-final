"use client"
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const BCADeptUpcomingEvents = () =>  {
    return (
        <div className="tl-staff-profile pt-100 pb-100">
            <div className="container-fluid">
                <h2 className="tl-9-section-title mb-50">Upcoming Events</h2>
                <div className="row">
                    <MenuList dept="Bachelor of Computer Applications" subMenu={NavLinks} />
                        <div
                            data-spy="scroll"
                            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
                            data-target="#menu-navbar"
                            data-offset="0"
                        >
                            <div className="tl-event-details-left mt-30">
                                <div className="row tl-event-details-row g-0">
                                    <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                        <Table bordered  responsive className="governing-table">
                                            <thead>
                                                <tr>
                                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                                    <th><p className="text-[#4f70b6]">Name of the Event</p></th>
                                                    <th><p className="text-[#4f70b6]">Venue</p></th>
                                                    <th><p className="text-[#4f70b6]">Day & Date</p></th>
                                                </tr>
                                            </thead>
                                        <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Guest Lecture</td>
                                                        <td>Department of Computer Applications</td>
                                                        <td>1/08/2025</td>
                                                    </tr>

                                                    <tr>
                                                        <td>2</td>
                                                        <td>Expert Session</td>
                                                        <td>Ms. ASavari Patil (Program Coordinator)</td>
                                                        <td>14/08/2025</td>
                                                    </tr>

                                                    <tr>
                                                        <td>3</td>
                                                        <td>Workshop</td>
                                                        <td>Ms. Pratiksha Talewadikar</td>
                                                        <td>13/09/2025</td>
                                                    </tr>

                                                    <tr>
                                                        <td>4</td>
                                                        <td>Technical Event</td>
                                                        <td>Ms. Supriya Sawant</td>
                                                        <td>27/09/2025</td>
                                                    </tr>

                                                    <tr>
                                                        <td>5</td>
                                                        <td>Non-Technical Event</td>
                                                        <td>Mr. Shridhar Vanjire</td>
                                                        <td>11/10/2025</td>
                                                    </tr>

                                                    <tr>
                                                        <td>6</td>
                                                        <td>Parent Meeting</td>
                                                        <td>Mr. Omkar Salunkhe</td>
                                                        <td>13/10/2025</td>
                                                    </tr>

                                                    <tr>
                                                        <td>7</td>
                                                        <td>Training & Placement Session</td>
                                                        <td>Mrs. Swati A. Patil</td>
                                                        <td>27/10/2025</td>
                                                    </tr>

                                                    <tr>
                                                        <td>8</td>
                                                        <td>Expert Session by Industry Expert</td>
                                                        <td>Ms. Ishwari Bhosale</td>
                                                        <td>31/10/2025</td>
                                                    </tr>

                                                    <tr>
                                                        <td>9</td>
                                                        <td>Social Activity</td>
                                                        <td>Ms. Jyoti Chavan</td>
                                                        <td>3/11/2025</td>
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
   
  )
}

export default BCADeptUpcomingEvents