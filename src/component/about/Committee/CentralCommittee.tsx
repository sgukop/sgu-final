"use client";
import CentralCommitteePage from "@/app/central-purchase/page";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function CentralCommittee() {
  return (
    <div className="pt-100 pb-100 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
             <div className="d-flex justify-content-center mb-50"><h2 className="tl-2-section-title">Committee - Central Purchase</h2></div>
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
                    <a href="mailto:vc@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vc@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Vice-Chancellor</p>
         
                  </td>
                  <td><p>Chairman</p></td>
                  <td><p>4.4-2(i)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Vinayak V. Bhosale</p> 
                    <p>Plot No 630, Shahu Nagar, Sudarshan Chowk, Jaysingpur. <br/> Tal: Shirol, Dist: Kolhapur - 416 101</p>
                    <a href="mailto:vinayak@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vinayak@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    <a href="mailto:vinayak@sgintitute.in" className="tl-def-btn-2">vinayak@sgintitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Member of Board of Management</p></td>
                  <td><p>Member(Nominated by President)</p></td>
                  <td><p>4.4-2(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. V. V. Kulkarni</p> 
                    <p>C/o- Aeronautical Engg., Kolhapur-Sangli Highway, A/p Atigre, 416 118 Tal. Hatkanangale, Dist. <br/> Kolhapur.</p>
                    <a href="mailto:vinayak@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vinayak@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    <a href="mailto:kulkarni.vv@sginstitute.in" className="tl-def-btn-2">kulkarni.vv@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Member of Board of Management</p></td>
                  <td><p>Member(Nominated by President)</p></td>
                  <td><p>4.4-2(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Abid Salati</p> 
                    <p>“Ayesha” Flat no-9, Veera Appt., Mahadik colony, Kolhapur</p>
                    <a href="mailto:salati.ay@sginstitute.in" className="tl-def-btn-2">salati.ay@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  
                  </td>

                  <td><p>Incharge Dean, <br/> School of Commerce & Management, SGU</p></td>
                  <td><p>Member(Nominated by V.C.)</p></td>
                  <td><p>4.4-2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A.D. Sawant</p> 
                    <p>Dean, School of Science PhD, Postdoc (USA),</p>
                    <p>Head,Department of Chemistry. Sanjay Ghodawat University, Kolhapur - 416 118.</p>
                    <a href="mailto:sawant.ad@sginstitute.in" className="tl-def-btn-2">sawant.ad@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  
                  </td>

                  <td><p>HOD, <br/> School of Science</p></td>
                  <td><p>Member(Nominated by V.C.)</p></td>
                  <td><p>4.4-2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Vivek M. Kayande</p> 
                    <p>Sanjay Ghodawat University Kolhapur.</p>
                    <p>Head,Department of Chemistry. Sanjay Ghodawat University, Kolhapur - 416 118.</p>
                    <a href="mailto:registrar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">registrar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  
                  </td>

                  <td><p>Registrar</p></td>
                  <td><p>Member</p></td>
                  <td><p>4.4-2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Prakash A. Desai</p> 
                    <p>C/o- Sanjay Ghodawat University, B-Block, Accounts Office, SGU.</p>
                   
                    <a href="mailto:cfo@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">cfo@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  
                  </td>

                  <td><p>Chief Finance and Accounts Officer</p></td>
                  <td><p>Member - Secretary</p></td>
                  <td><p>4.4-2(v)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr.Shahnur M. Desai</p> 
                    <p>Purchase Department, SGU Campus, Atigre.</p>
                   
                    <a href="mailto:shanoorstar@gmail.com" className="tl-def-btn-2">shanoorstar@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  
                  </td>

                  <td><p>Invitee</p></td>
                  <td><p>Member Invitee</p></td>
                  <td><p>4.4-5</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Annaso (Anil) B.Patil</p> 
                    <p>Block-A, SGU Campus</p>
                   
                    <a href="mailto:anil.patil@sginstitute.in" className="tl-def-btn-2">anil.patil@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  
                  </td>

                  <td><p>Technical expert</p></td>
                  <td><p>Member</p></td>
                  <td><p>4.4-5</p></td>
              </tr>




              

	          </tbody>
            <p style={{marginTop:"15px"}}>Constitution date: 07/08/2017</p>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CentralCommittee;
