"use client";
import CentralCommitteePage from "@/app/central-purchase/page";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function WomensCommittee() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Womens Empowerment Centre Committee</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">(As per Statute No 4.7)</span>
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
                    <p>Mrs. Deepika V. Patil</p> 
                    <a href="mailto:deepika.patil@sanjayghodawatuniversity.ac.in" className="table-link">deepika.patil@cs.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Prof. & Department Coordinator <br/> (School of Computer Science & Engineering.)</p></td>
                  <td><p>Chairperson</p></td>
              </tr>
              <tr>
                 <td>
                    <p>Dr.S. Gomathi.</p> 
                    <a href="mailto:s.gomathi@mg.sguk.ac.in" className="table-link">s.gomathi@mg.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Professor & Dean , <br/> Commerce & Management</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Ms. Prajakta P. Desai</p> 
                    <a href="mailto:prajakta.desai@sanjayghodawatuniversity.ac.in" className="table-link">prajakta.desai@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (Mechanical Engineering, School of Technology)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Jyoti M. Waykule</p> 
                    <a href="mailto:jyoti.waykule@sanjayghodawatuniversity.ac.in" className="table-link">jyoti.waykule@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (Electrical and Electronics Engg.School of Technology)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Adnya Manjrekar</p> 
                    <a href="mailto:adnya.manjarekar@sanjayghodawatuniversity.ac.in" className="table-link">adnya.manjarekar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (Civil Engineering Department, School of Technology)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Surbhi I. Gaikwad</p> 
                    <a href="mailto:surabhi.gaikwad@sanjayghodawatuniversity.ac.in" className="table-link">surabhi.gaikwad@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (School of Computer Science & Engineering)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Sangita A. Kumbhar</p> 
                    <a href="mailto:sangita.kumbhar@sanjayghodawatuniversity.ac.in" className="table-link">sangita.kumbhar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (School of Pharmacy)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Ms. Priya A. Patil</p> 
                    <a href="mailto:priya.patil@sanjayghodawatuniversity.ac.in" className="table-link">priya.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (Faculty of Liberal Arts.)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Amruta A. Handur</p> 
                    <a href="mailto:amruta.handur@sanjayghodawatuniversity.ac.in" className="table-link">amruta.handur@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Officer, <br/> Global Engagement Center</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Sonali B. Suryawanshi</p> 
                    <a href="mailto:sonali.suryawanshi@sanjayghodawatuniversity.ac.in" className="table-link">sonali.suryawanshi@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Prof, <br/> (Dept. of Physics, Faculty of Science)</p></td>
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

export default WomensCommittee;
