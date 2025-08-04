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
                  <td><p>15-02-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/67592cdb9173bf9f471ac26d" rel="noopener noreferrer" target="_blank" className="table-link">Regarding 5th Convocation Ceremony for Students Notification <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>16-02-2024</p></td>
                  <td><a href="assets/images/convocation/Convocation 2024.jpeg" rel="noopener noreferrer" target="_blank" className="table-link">News Paper <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>20-02-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/67592cfd9173bf9f471ac272" rel="noopener noreferrer" target="_blank" className="table-link">Invitation card <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>20-02-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/67592d119173bf9f471ac277" rel="noopener noreferrer" target="_blank" className="table-link">Notification for SGU Staff <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>20-02-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/67592d259173bf9f471ac27c" rel="noopener noreferrer" target="_blank" className="table-link">Notification for council Member <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>23-02-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/67592d3e9173bf9f471ac281" rel="noopener noreferrer" target="_blank" className="table-link">Minute To Minute Program of 5th Convocation <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>26-02-2024</p></td>
                  <td><a href="https://www.youtube.com/watch?v=ZjfLA2zSnBc" rel="noopener noreferrer" target="_blank" className="table-link">SGU LIVE 5th Convocation Ceremony <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>29-02-2024</p></td>
                  <td><a href="" rel="noopener noreferrer" target="_blank" className="table-link">Convocation Photo <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
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
