"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function InternalCommittee() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Internal Complaint Committee</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">Constituted as per Notification No.F.91-1/2013 (TFGS) of University Grants Commission regarding (Prevention, Prohibition, and redressal of sexual harassment of women employees and students in Higher Education Institutions) Regulations, 2015 and as per the Gazette of India Part III section 4 dated 2nd May 2016.</span>
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
                    <p>Dr. Deshmukh Shubhangi C.</p> 
                    <p>Department of Electronics & Telecomminication Engineering,<br/>B-Block, SGU Campus</p>
                    <a href="mailto:shubhangi.deshmukh@sanjayghodawatuniversity.ac.in" className="table-link">shubhangi.deshmukh@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Assistant Professor,</p>
                      <p>School of Technology</p>
                  </td>
                  <td><p>Presiding Officer(Chairperson)</p></td>
                  <td><p>4-(1) a</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Khot Vidhyarani S.</p> 
                    <p>Sanjay Ghodawat University, Kolhapur - 416 118. Campus</p>
                    <a href="mailto:vidhyarani.khot@sanjayghodawatuniversity.ac.in" className="table-link">vidhyarani.khot@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Assistant Professor,</p>
                      <p>School of Pharmaceutical Science</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>4-(1) b</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Chetan S. Patil</p> 
                    <p>Civil Engg. Department,<br/>University campus, SGU</p>
                    <a href="mailto:chetan.patil@sanjayghodawatuniversity.ac.in" className="table-link">chetan.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Associate Professor,</p>
                      <p>Civil Engg. Department</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>4-(1) b</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. (Mrs.) Savita P. Patil</p> 
                    <p>11th Lane, near Ashirwad Hospital, Jaysingpur.,<br/>Tal - Shirol, Dist - Kolhapur</p>
                  </td>

                  <td><p>President,</p>
                      <p>Rotary Club, Jaysingpur</p>
                  </td>
                  <td><p>NGO Member</p></td>
                  <td><p>4-(1) b</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Tejaswi S. Pol</p> 
                    <p>Lab Assistant, B-Block, 3rd floor,<br/>SGU Campus, Atigre</p>
                 </td>

                  <td><p>Lab Assistant (Mechanical Engg. Department)</p>
                     
                  </td>
                  <td><p>NGO Member</p></td>
                  <td><p>4-(1) b</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Kishor Suryawanshi</p> 
                    <p>Registrar Office, B-Block, 3rd floor,<br/>SGU Campus, Atigre</p>
                    <a href="mailto:kishor.suryawanshi@sanjayghodawatuniversity.ac.in" className="table-link">kishor.suryawanshi@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Sr. Clerk</p>
                     
                  </td>
                  <td><p>NGO Member</p></td>
                  <td><p>4-(1) d</p></td>
              </tr>

             

	          </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternalCommittee;
