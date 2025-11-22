"use client"
import React from 'react';
import Table from "react-bootstrap/Table";

const Activities2223 = () => {
  return (
   
       <div className="row tl-event-details-row g-0">
            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                <Table bordered  responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">No</p></th>
                            <th><p className="text-[#4f70b6]">Activity Name</p></th>
                            <th><p className="text-[#4f70b6]">Date</p></th>
                            <th><p className="text-[#4f70b6]">Description</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>Workshop-Basics of Photography at SGU</p></td>
                            <td><p>17-03-23</p></td>
                            <td><p>Mr.Sudhir Bornak </p></td>
                        </tr>
                        <tr>
                            <td><p>2</p></td>
                            <td><p>Workshop-Short Film Making (Script to Screen)</p></td>
                            <td><p>09-03-23</p></td>
                            <td><p>Asst.Prof.Jayndra Rane, Amity Univeraity Jaypur Rajasthan</p></td>
                        </tr>
                        <tr>
                            <td><p>3</p></td>
                            <td><p>Guest lecture- Government PR Sector</p></td>
                            <td><p>07/04/2023</p></td>
                            <td><p>Mr.Visvajeet Bhosle, Mahavitran Maha.Gov.of Mharashtra,Bhandup (W) Mumbai</p></td>
                        </tr>
                        <tr>
                            <td><p>4</p></td>
                            <td><p>Guest lecture-World Press Freedom Day</p></td>
                            <td><p>03/05/2023</p></td>
                            <td><p>Mr.Vasant Bhosle Editor Daily Lokmat,Kolhapur</p></td>
                        </tr>
                </tbody>
            </Table>
        </div>
    </div>
    
  )
}

export default Activities2223