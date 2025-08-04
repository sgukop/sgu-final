"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfExamination() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
               <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Board of Examination</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">(As per statute 3.9)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>DESIGNATION</p></th>
                </tr>
              </thead>
              <tbody>
              <tr>
                 <td>
                    <p>Vice-Chancellor,</p> 
                    <p>Sanjay Ghodawat University, Kolhapur.</p>
                </td>

                <td><p>Chairman</p></td>
            </tr>

            <tr>
                <td><p>Dean Faculty of Science & Technology</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Associate Dean (Science)</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Dean Faculty of Commerce & Management</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Dean Faculty of Humanities & Social Sciences</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Dean Faculty of Interdisciplinary Studies</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Liberal Arts</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Design</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Commerce & Management</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Aeronautical Engineering</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Civil Engineering</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Mechanical Engineering</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Computer Application</p></td>
                <td><p>Member</p></td>
            </tr>

            
            <tr>
                <td><p>Chairman Board of Studies Computer Science Engineering</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies AIML</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Electrical & Electronics Engineering</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Electrical Engineering</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Electronics & Communication Eng</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Chemical Sciences</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Physical Sciences</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Legal Studies</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Chairman Board of Studies Allied Health & Science</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>T Expertise Ms. Mugdha Joshi Ms. N. Mulani</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>One Professor - Prof. Dr. S. R. Patil</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Experts from other Universities</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Dr. R. G. Karandikar (KJSVUU, Mumbai)</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Dr. S. G. Andhare (SRTMU, Nanded)</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>COE</p></td>
                <td><p>Member Secretary</p></td>
            </tr>

            </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfExamination;
