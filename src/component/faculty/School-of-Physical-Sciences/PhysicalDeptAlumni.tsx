"use client"
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import Table from "react-bootstrap/Table";

const PhysicalDeptAlumni = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
    <div className="container-fluid">
        <div className="tl-14-section-heading">
            <h2 className="tl-9-section-title mb-50">Alumni</h2>
        </div>
        <div className="row">
          <MenuList dept="Physics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
       <div className="row align-items-center tl-1-about-row">
            <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <Table bordered responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                                    <th><p className="text-[#4f70b6]">Name of the Alumina</p></th>
                                    <th><p className="text-[#4f70b6]">Activities & Achievements:</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Khot Sambhaji Dinkar</p></td>
                                    <td><p>Awarded Ph.D. Degree from D. Y. Patil University, Kolhapur.</p></td>
                                </tr>
                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Mahadik Shivraj Sunil</p></td>
                                    <td><p>Awarded Ph.D. Degree from Chonnam National University, South Korea.</p></td>
                                </tr>
                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Patil Akshay Shivaji</p></td>
                                    <td><p>Working as a Project Scientist-I in IITM, Pune. Also Pursuing Ph.D. in Sanjay Ghodawat University, Kolhapur</p></td>
                                </tr>
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Phalake Satish Sambhaji</p></td>
                                    <td><p>Awarded Ph.D. Degree from D. Y. Patil University, Kolhapur.</p></td>
                                </tr>
                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Vibhute Bhushan Ramdas</p></td>
                                    <td><p>SET Qualified & working as a assistant teacher at Miraj Mahavidyalaya, Miraj</p></td>
                                </tr>
                                <tr>
                                    <td><p>6</p></td>
                                    <td><p>Mali Onkar Suresh</p></td>
                                    <td><p>Working in State Bank of India</p></td>
                                </tr>
                                <tr>
                                    <td><p>7</p></td>
                                    <td><p>Patel Sandeep Ravaji</p></td>
                                    <td><p>Gate Qualified, Completed M.Sc. and Working In IT Sector</p></td>
                                </tr>
                                <tr>
                                    <td><p>8</p></td>
                                    <td><p>Phadake Varad Mahesh</p></td>
                                    <td><p>Pursuing Ph.D. in Manipal University, Manipal, Karnataka</p></td>
                                </tr>
                                <tr>
                                    <td><p>9</p></td>
                                    <td><p>Mali Sanket Shahaji</p></td>
                                    <td><p>Pursuing Ph.D. in Sanjay Ghodawat University, Kolhapur</p></td>
                                </tr>
                                <tr>
                                    <td><p>10</p></td>
                                    <td><p>Yadav Aditi Dilip</p></td>
                                    <td><p>Pursuing Ph.D. in Sanjay Ghodawat University, Kolhapur.</p></td>
                                </tr>
                                <tr>
                                    <td><p>11</p></td>
                                    <td><p>Ughade Ranjeet Sukachari</p></td>
                                    <td><p>Pursuing Ph.D. in SRM University, Delhi- NCR Sonepat (Haryana)</p></td>
                                </tr>
                                <tr>
                                    <td><p>12</p></td>
                                    <td><p>Powar Kimaya Kishor</p></td>
                                    <td><p>Working as a Scientific Officer at Warana Science & innovation Activity Centre, Warananagr.</p></td>
                                </tr>
                                <tr>
                                    <td><p>13</p></td>
                                    <td><p>Patil Omkar Mahadeo</p></td>
                                    <td><p>Pursuing Ph.D. with JRF in Indian Institute of  Geomagnetism (IIG), Mumbai</p></td>
                                </tr>
                                <tr>
                                    <td><p>14</p></td>
                                    <td><p>More Harshda Sambhaji</p></td>
                                    <td><p>NET Qualified</p></td>
                                </tr>
                                <tr>
                                    <td><p>15</p></td>
                                    <td><p>Mujawar Muqaddas Mubarak</p></td>
                                    <td><p>SET Qualified and Pursuing Ph.D. in Karmveer Bhaurao Patil University, Satara</p></td>
                                </tr>
                                <tr>
                                    <td><p>16</p></td>
                                    <td><p>Patel Talha Murtuza</p></td>
                                    <td><p>Pursuing Ph.D. in Sanjay Ghodawat University, Kolhapur</p></td>
                                </tr>
                                <tr>
                                    <td><p>17</p></td>
                                    <td><p>Ustad Ruhan Eliyas</p></td>
                                    <td><p>Pursuing Ph.D. in Chonnam National University, South Korea.</p></td>
                                </tr>
                                <tr>
                                    <td><p>18</p></td>
                                    <td><p>Mane Pandurang Arjun</p></td>
                                    <td><p>Placed in Datawind Innovations Pvt. Ltd, Satara.</p></td>
                                </tr>
                                <tr>
                                    <td><p>19</p></td>
                                    <td><p>Kumbhar Prajakta Dagadu</p></td>
                                    <td><p>Pursuing Ph.D. in D. Y. Patil University, Kolhapur</p></td>
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

export default PhysicalDeptAlumni