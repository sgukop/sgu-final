"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfNational() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center">
                <h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
                  Board of National & International Linkages
                </h2>
              </div>
              <span className="dark-mode-white-color mt-2 mb-12">(As per statute 3.20)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST/CATEGORY</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>STATUTE NO</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Prof. Dr. Udhav Bhosle</p> 
                  </td>
                  <td>
                    <p>Vice-Chancellor</p>
              
                  </td>
                  <td><p>Chairperson</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Prof. Dr. V .V. Kulkarni</p> 
                  </td>
                  <td>
                    <p>Dean,</p>
                    <p>Faculty of Science & Technology  </p>
          
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. A. D. Sawant</p> 
                  </td>
                  <td>
                    <p>Associate Dean,</p>
                    <p>Physical & Chemical Science</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. S. Gomathi</p> 
                  </td>
                  <td>
                    <p>Dean,</p>
                    <p>Faculty of Commerce & Management,</p>
              
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. U. P. Jadhav</p> 
                  </td>
                  <td>
                    <p>I/C Dean,</p>
                    <p>Faculty of Humanities & Social Science</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. N. K. Patil</p> 
               
                  </td>
                  <td>
                    <p>Controller of Examination</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. N. V. Pujari</p> 
                  </td>
                  <td>
                    <p>Professors Nominated by the Hon. Vice-Chancellor</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Mr. Ahand Hundur</p> 
                  </td>
                  <td>
                    <p>Experts form the Industry</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Mr. Sanjiv Tungatkar</p> 
                  </td>
                  <td>
                    <p>Experts form the Industry</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. S. M. Pawar</p> 
                  </td>
                  <td>
                    <p>Director (Innovation, Incubation and Research)</p>
                  </td>
                  <td><p>Member Secretary</p></td>
                  <td><p></p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfNational;