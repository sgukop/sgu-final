"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function GrievanceCommittee() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Grievance Readressal Committee</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">(As per Statute No 4.7)</span>
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
                     <a href="mailto:vc@sguk.ac.in" className="table-link">vc@sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Vice-Chancellor,</p>
                      <p>Sanjay Ghodawat University, Kolhapur.</p>
                  </td>
                  <td><p>Chairman</p></td>
                  <td><p>4.7-2(i)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. S. Gomathi</p> 
                     <a href="mailto:s.gomathi@mg.sguk.ac.in@sanjayghodawatuniversity.ac.in" className="table-link">s.gomathi@mg.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Commerce & Management</p>
                  </td>
                  <td><p>Member <br/> (Faculty Dean, Nominated by Board of Management)</p></td>
                  <td><p>30(2)(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Prof. Dr. Vivek V. Kulkarni</p> 
                     <a href="mailto:dean@fst.sguk.ac.in" className="table-link">dean@fst.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director Innovation & Incubation Center</p></td>
                  <td><p>Member <br/> (From Board of management)</p></td>
                  <td><p>30(2)(iii)</p></td>
              </tr>



           

              <tr>
                 <td>
                    <p>Mrs. Vidhyarani S. Khot</p> 
                     <a href="mailto:vidyarani@ph.sguk.ac.in" className="table-link">vidyarani@ph.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Assistant Prof School of <br/> Pharmaceutical Science</p></td>
                  <td><p>Member <br/> (University female Teacher Nominated by Vice Chancellor)</p></td>
                  <td><p>30(2)(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Mahesh K. Patwardhan</p> 
                     <a href="mailto:mahesh.patwardhan@sguk.ac.in" className="table-link">mahesh.patwardhan@sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Asst. Registrar</p><p>Sanjay Ghodawat University, Kolhapur</p></td>
                  <td><p>Member <br/> ( Non Teaching Staff Nominee by Vice Chancellor)</p></td>
                  <td><p>4.7-2(v)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Pallavi Bhange</p> 
                     <a href="mailto:pallavi.bhange@ch.sguk.ac.in" className="table-link">pallavi.bhange@ch.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director</p><p>School of Physical and Chemical sciences</p></td>
                  <td><p>Member <br/> (from Academic Council)</p></td>
                  <td><p>4.7-2 (vi)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Vivek M. Kayande</p> 
                     <a href="mailto:registrar@sguk.ac.in" className="table-link">registrar@sguk.ac.in<i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Registrar,</p><p>Sanjay Ghodawat University, Kolhapur</p></td>
                  <td><p>Member Secretary</p></td>
                  <td><p>4.7-2 (iii)</p></td>
              </tr>
            </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrievanceCommittee;
