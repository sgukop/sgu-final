"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfResearch() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center mb-12"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Board of Research</h2></div>
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
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Prof. Dr. V .V. Kulkarni</p> 
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:vivek.kulkarni@sanjayghodawatuniversity.ac.in" className="table-link">vivek.kulkarni@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Science & Technology Director (Add. Charge)-School of Design,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A. D. Sawant</p> 
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:anand.sawant@sanjayghodawatuniversity.ac.in" className="table-link">anand.sawant@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Associate Dean,</p>
                      <p>Physical & Chemical Science,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Y. L. Giri</p> 
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:dean.scm@sanjayghodawatuniversity.ac.in" className="table-link">dean.scm@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Management & Chairman, BOS & Director -Commerce & Management,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. S. M. Ingale</p> 
                   
                    <a href="mailto:sanjaykumar.ingale@sanjayghodawatuniversity.ac.in" className="table-link">sanjaykumar.ingale@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>I/C Dean,</p>
                      <p>Faculty of Interdisciplinary,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A. D. Sawant</p> 
                   
                    <a href="mailto:anand.sawant@sanjayghodawatuniversity.ac.in" className="table-link">anand.sawant@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Associate Dean,</p>
                      <p>Physical & Chemical Science,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. U. P. Jadhav</p> 
                    <p>C-Block, SGU Campus, Atigre.</p>
                    <a href="mailto:uttam.jadhav@sanjayghodawatuniversity.ac.in" className="table-link">uttam.jadhav@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>I/C Dean,</p>
                      <p>Faculty of Humanities & Social Science & BOS Chairma of Faculty of Liberal Arts. Director-Knowledge Resource Center Director-School of Social Sciences</p>
                     
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                <td colSpan={4}><p className="text-center">Four Eminent Scholars</p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Mr. Sangram Patil</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Prof. Dr. C. D. Lokhande</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Dr. P. P. Wadgaonkar</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Dr. Sandeep Shiyekar</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Dr. Srinivasan Iyengar (Management)</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Dr. Shirish Ambavdekar (Pharmacy)</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p>(Law)</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p></p></td>
                <td>(Social Sciences)</td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p></p></td>
                <td>Director (Innovation, Incubation and Research)</td>
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

export default BoardOfResearch;
