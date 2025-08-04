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
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">University Board of Sports and Physical Culture</h2></div>
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
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:vc@sanjayghodawatuniversity.ac.in" className="table-link">vc@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Vice-Chancellor,</p>
                      <p>Sanjay Ghodawat University, Kolhapur.</p>
                  </td>
                  <td><p>Chairman</p></td>
                  <td><p>3.20-2(i)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Suresh J. Farakte</p> 
                    <p>Kolhapur</p>
                    <a href="mailto:sureshfarakate@gmail.com" className="table-link">sureshfarakate@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Expert</p></td>
                  <td><p>Member Nominated by V.C</p></td>
                  <td><p>3.20-2(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Sushant T. Magdum</p> 
                    <p>A/P-Murgud, Tal- Kagal, Dist-Kolhapur</p>
                    <a href="mailto:sushantmagdum13@yahoo.in" className="table-link">sushantmagdum13@yahoo.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Expert</p></td>
                  <td><p>Member Nominated by V.C</p></td>
                  <td><p>3.20-2(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Mrs. Sarita P. Patil</p> 
                    <p>Department of Physics, <br/> Sanjay Ghodawat University, Kolhapur - 416 118</p>
                    <a href="mailto:patil.sr@sginstitute.in" className="table-link">patil.sr@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Member (BOM)</p></td>
                  <td><p>Member Nominated by B.O.M</p></td>
                  <td><p>3.20-2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Abid Salati</p> 
                    <p>“Ayesha” Flat no-9, Veera Appt.,Mahadik colony, Kolhapur <br/> Sanjay Ghodawat University, Kolhapur. 416 118</p>
                    <a href="mailto:salati.ay@sginstitute.in" className="table-link">salati.ay@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Member (BOM)</p></td>
                  <td><p>Member Nominated by B.O.M</p></td>
                  <td><p>3.20-2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Shrishail. S. Salgare</p> 
                    <p>Department of Mathematics, <br/> Sanjay Ghodawat University, Kolhapur - 416 118</p>
                    <a href="mailto:salgare.ss@sginstitute.in" className="table-link">salgare.ss@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director of Students welfare</p></td>
                  <td><p>Member</p></td>
                  <td><p>3.20-2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. S. S. Patel</p> 
                    <p>Faculty of Management Bulding, <br/> SGU Campus, Atigre</p>
                    <a href="mailto:patel.ss@sginstitute.in" className="table-link">patel.ss@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
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
