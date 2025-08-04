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
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Board of National & International Linkages</h2></div>
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
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:vc@sanjayghodawatuniversity.ac.in" className="table-link">vc@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Vice-Chancellor,</p>
                      <p>Sanjay Ghodawat University, Kolhapur.</p>
                  </td>
                  <td><p>Chairperson</p></td>
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
                      <p>Sanjay Ghodawat University, Kolhapur.</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A. D. Sawant</p> 
                    <p>Department of Chemistry. Sanjay Ghodawat University,<br/> Kolhapur - 416118</p>
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:anand.sawant@sanjayghodawatuniversity.ac.in" className="table-link">anand.sawant@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Associate Dean,</p>
                      <p>Physical & Chemical Science</p>
                    
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
                 <td>
                    <p>Mr. S. M. Ingale</p> 
                 
                    <p>Sanjay Ghodawat University, Kolhapur - 416118</p>
                    <a href="mailto:sanjaykumar.ingale@sanjayghodawatuniversity.ac.in" className="table-link">sanjaykumar.ingale@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>I/C Dean,</p>
                      <p>Faculty of Interdisciplinary</p>
                    
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              
              <tr>
                 <td>
                    <p>One Member from BOM</p> 
                 </td>

                 <td><p>Member</p></td>
                  <td></td>
                  <td></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. N. K. Patil</p> 
                     <p>Controller of Examination</p>
                   
                    <a href="mailto:ceo@sanjayghodawatuniversity.ac.in" className="table-link">ceo@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Professors Nominated by the Hon. Vice-Chancellor</p>
                      
                    
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. S. R. Patil</p> 
                    
                   
                    <a href="mailto:shivajirao.patil@sanjayghodawatuniversity.ac.in" className="table-link">shivajirao.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Professors Nominated by the Hon. Vice-Chancellor</p>
                      
                    
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. N. V. Pujari</p> 
                    
                   
                    <a href="mailto:basavraj.pujari@sanjayghodawatuniversity.ac.in" className="table-link">basavraj.pujari@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Professors Nominated by the Hon. Vice-Chancellor</p>
                      
                    
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Ahand Hundur</p> 
                    <p>Edulliance Educational Consultants (P) Ltd., Pune</p>
                    <a href="mailto:sana.handur@eduallianceworld.com" className="table-link">sana.handur@eduallianceworld.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Experts form the Industry</p>
                      
                    
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Sanjiv Tungatkar</p> 
                    
                  </td>

                  <td><p>Experts form the Industry</p>
                      
                    
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. S. M. Pawar</p> 
                     <p>Sanjay Ghodawat University,<br/>Kolhapur - 416118</p>
                     <a href="mailto:sambaji.pawar@sanjayghodawatuniversity.ac.in" className="table-link">sambaji.pawar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director (Innovation, Incubation and Research)</p>
                      
                    
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
