"use client";
import React from "react";
import Table from "react-bootstrap/Table";

function StudentGrievanceCommittee() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
             <div className="d-flex justify-content-center mb-50"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Student Grievance Redressal Committee (SGRC)</h2></div>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST/CATEGORY</p></th>
                  <th><p>DESIGNATION</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
                        <p>Prof. Dr. Udhav Bhosle,</p> 
                        <a href="mailto:vc@sanjayghodawatuniversity.ac.in" className="table-link">vc@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Vice-Chancellor</p></td>
                    <td><p>Chairman</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Dr.S. Gomathi,</p> 
                        <a href="mailto:yogeshwari.giri@sanjayghodawatuniversity.ac.in" className="table-link">yogeshwari.giri@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Dean, Faculty of Commerce & Management</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Prof. Dr. Vivek V. Kulkarni,</p> 
                        <a href="mailto:vivek.kulkarni@sanjayghodawatuniversity.ac.in" className="table-link">vivek.kulkarni@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Dean, Faculty of Science & Technology</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Mr. Sanjaykumar M. Ingale,</p> 
                        <a href="mailto:sanjaykumar.ingale@sanjayghodawatuniversity.ac.in" className="table-link">sanjaykumar.ingale@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Dean, Faculty of Interdisciplinary Studies</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Dr. Uttam. P. Jadhav</p> 
                        <a href="mailto:uttam.jadhav@sanjayghodawatuniversity.ac.in" className="table-link">uttam.jadhav@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Associate Professor, Dean Humanities and Social Sciences</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Mr. Patil Sarthak K.</p> 
                        <a href="mailto:23SL101011021@ sanjayghodawatuniversity.ac.in" className="table-link">23SL101011021@ sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Student</p></td>
                    <td><p>Student Representative</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Ms. Anishka Anil Jain</p> 
                        <a href="mailto:22SC121481075@ sanjayghodawatuniversity.ac.in" className="table-link">22SC121481075@ sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Student</p></td>
                    <td><p>Student Representative (Girl)</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Mr. Runwal Samyak Vimalchand</p> 
                        <a href="mailto:23MT108151126@ sanjayghodawatuniversity.ac.in" className="table-link">23MT108151126@ sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Student</p></td>
                    <td><p>Student Representative</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Ms. Chavan Pornima Ramchadra</p> 
                        <a href="mailto:23AH122661002@ sanjayghodawatuniversity.ac.in" className="table-link">23AH122661002@ sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Student</p></td>
                    <td><p>Student Representative (Girl)</p></td>
                </tr>

                <tr>
                    <td>
                        <p>Dr. Vivek M. Kayande,</p> 
                        <a href="mailto:registrar@sanjayghodawatuniversity.ac.in" className="table-link">registrar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                    <td><p>Registrar</p></td>
                    <td><p>Member</p></td>
                </tr>

            </tbody>
           </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentGrievanceCommittee;
