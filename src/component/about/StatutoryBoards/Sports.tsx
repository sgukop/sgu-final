"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function Sports() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center">
                <h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
                  University Board of Sports and Physical Culture
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
                  <th><p>SECTION</p></th>
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
                  <td><p>Chairman</p></td>
                  <td><p>3.20-2(i)</p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. Suresh J. Farakte</p> 
                  </td>
                  <td><p>Expert</p></td>
                  <td><p>Member Nominated by V.C</p></td>
                  <td><p>3.20-2(ii)</p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. Sushant T. Magdum</p> 
                  </td>
                  <td><p>Expert</p></td>
                  <td><p>Member Nominated by V.C</p></td>
                  <td><p>3.20-2(ii)</p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. Mrs. Sarita P. Patil</p> 
                  </td>
                  <td><p>Member (BOM)</p></td>
                  <td><p>Member Nominated by B.O.M</p></td>
                  <td><p>3.20-2(iii)</p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. Abid Salati</p> 
                  </td>
                  <td><p>Member (BOM)</p></td>
                  <td><p>Member Nominated by B.O.M</p></td>
                  <td><p>3.20-2(iii)</p></td>
                </tr>

                <tr>
                  <td>
                    <p>Mr. Shrishail. S. Salgare</p> 
                  </td>
                  <td><p>Director of Students welfare</p></td>
                  <td><p>Member</p></td>
                  <td><p>3.20-2(iv)</p></td>
                </tr>

                <tr>
                  <td>
                    <p>Dr. S. S. Patel</p> 
                  </td>
                  <td><p>Director of Sports & Physical culture</p></td>
                  <td><p>Member Secretary</p></td>
                  <td><p>3.20-2(v)</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;