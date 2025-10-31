"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function ExamConvocation() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
                <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Examination Convocation</h2>
             </div>
             <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Notice, Circular & Notification</h2></div>
            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Date</p></th>
                  <th><p className="text-[#4f70b6]">Particulrs</p></th>
                  <th><p className="text-[#4f70b6]">Type</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>30-10-2025</td>
                    <td>
                      <a href="https://manage-api.sguk.ac.in/api/assets/69046394a6aabba1bc84618f" target="_blank">Notification to GB,BOM,AC members</a>
                    </td>
                    <td>NOTICE</td>
                  </tr>

                <tr>
                    <td>30-10-2025</td>
                    <td>
                      <a href="https://manage-api.sguk.ac.in/api/assets/69046344a6aabba1bc846186" target="_blank">Notification to Graduating students</a>
                    </td>
                    <td>NOTICE</td>
                  </tr>
                <tr>
                    <td>30-10-2025</td>
                    <td>
                      <a href="https://manage-api.sguk.ac.in/api/assets/690462caa6aabba1bc846176" target="_blank">STAFF NOTIFICATION 2024-2025</a>
                    </td>
                    <td>NOTICE</td>
                  </tr>
                <tr>
                    <td>09-10-2025</td>
                    <td>
                      <a href="https://manage-api.sguk.ac.in/api/assets/69046318a6aabba1bc846181" target="_blank">STUDENT NOTIFICATION 2024-2025</a>
                    </td>
                    <td>NOTICE</td>
                  </tr>
                <tr>
                    <td>17-09-2025</td>
                    <td>
                      <a href="https://manage-api.sguk.ac.in/api/assets/68ca5b9858f443fed174b77b" target="_blank">Convocation Circular</a>
                    </td>
                    <td>NOTICE</td>
                  </tr>
                <tr>
                    <td>18-07-2025</td>
                    <td>
                      <a href="https://manage-api.sguk.ac.in/api/assets/68ca59f258f443fed174b754" target="_blank">7th Convocation Circular</a>
                    </td>
                    <td>NOTICE</td>
                  </tr>

                  
            </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamConvocation;
