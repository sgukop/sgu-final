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
                                                    <td><p>1</p></td>
                                                    <td><p>CASA Event</p></td>
                                                    <td><p>MBA Auditorium</p></td>
                                                    <td><p>29th January 2025</p></td>
                                                </tr>
                                                <tr>
                                                    <td><p>2</p></td>
                                                    <td><p>Expert Session Regarding Project</p></td>
                                                    <td><p>Flexible Learning Space, A Block, 1st Floor</p></td>
                                                    <td><p>31st January 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>3</p></td>
                                                    <td><p>Expert Session</p></td>
                                                    <td><p>2nd Floor Seminar Hall,'C' Block</p></td>
                                                    <td><p>7th February 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>4</p></td>
                                                    <td><p>Industrial Visit</p></td>
                                                    <td><p>Pune/Hyderabad/Kolhapur</p></td>
                                                    <td><p>7th & 8th March 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>5</p></td>
                                                    <td><p>Parent Teacher Meet</p></td>
                                                    <td><p>Flexible Learning Space, A Block, 1st Floor</p></td>
                                                    <td><p>22nd March 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>6</p></td>
                                                    <td><p>Guest Lecture</p></td>
                                                    <td><p>Flexible Learning Space, A Block, 1st Floor</p></td>
                                                    <td><p>28th March 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>7</p></td>
                                                    <td><p>Seminar</p></td>
                                                    <td><p>Flexible Learning Space, A Block, 1st Floor</p></td>
                                                    <td><p>1st April 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>8</p></td>
                                                    <td><p>Training and Placement Activity</p></td>
                                                    <td><p>Flexible Learning Space, A Block, 1st Floor</p></td>
                                                    <td><p>7th to 11th April 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>9</p></td>
                                                    <td><p>Technical Event</p></td>
                                                    <td><p>Flexible Learning Space, A Block, 1st Floor</p></td>
                                                    <td><p>16th & 17th April 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>10</p></td>
                                                    <td><p>Social Activity</p></td>
                                                    <td><p>Outside SGU Campus</p></td>
                                                    <td><p>15th April 2025</p></td>
                                                </tr>

                                                <tr>
                                                    <td><p>11</p></td>
                                                    <td><p>Faculty Development Program</p></td>
                                                    <td><p>Flexible Learning Space, A Block, 1st Floor</p></td>
                                                    <td><p>13th and 14th May 2025</p></td>
                                                </tr>
                                                <tr>
                                                    <td><p>12</p></td>
                                                    <td><p>Club Activities</p></td>
                                                    <td><p>Auditorium & Flexible Learning Space, A Block, 1st Floor</p></td>
                                                    <td><p>2nd or 4th Saturday of Week</p></td>
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