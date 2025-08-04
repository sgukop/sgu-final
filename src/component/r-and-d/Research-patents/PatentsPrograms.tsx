"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function PatentsPrograms() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Programs / Activities</h2>
             
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                  <th><p className="text-[#4f70b6]">Title of the talk/webinar</p></th>
                  <th><p className="text-[#4f70b6]">Resource Person</p></th>
                  <th><p className="text-[#4f70b6]">Hosted By.</p></th>
                  <th><p className="text-[#4f70b6]">No. of Attendees</p></th>
                  <th><p className="text-[#4f70b6]">Duration</p></th>
                  <th><p className="text-[#4f70b6]">Date</p></th>
                  <th><p className="text-[#4f70b6]">Report</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Webinar on Intellectual Property Rights.</p></td>
                  <td><p>Dr. Shirish Ambavade <br/> (Dean, School of Pharmaceutical Sciences)</p></td>
                  <td><p>Human Resource Development Cell SGU</p></td>
                  <td><p>113</p></td>
                  <td><p>02 Hours.</p></td>
                  <td><p>05 May 2021</p></td>
                  <td><p>Link</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Webinar on Legal Aspects of IPR.</p></td>
                  <td><p>Mr. Ashutosh Swarnakar, <br/> Patent Agent & Director BLI Consultancy Amravati(Mh)</p></td>
                  <td><p>IPR Cell & Dept. of Electronics Engg.</p></td>
                  <td><p>44</p></td>
                  <td><p>02 Hours.</p></td>
                  <td><p>11 June 2021</p></td>
                  <td><a href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47cf54f56d3a0bcfb688c.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Link<i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>
            </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatentsPrograms;
