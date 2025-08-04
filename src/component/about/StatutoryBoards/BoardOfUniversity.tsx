"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfUniversity() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
             <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Board of University Teaching and Research</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">(As per statute 26)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST/FACULTY</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>STATUTE NO.</p></th>
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
                  <td><p>26(i)</p></td>
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
                  <td><p>26(ii)</p></td>
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
                  <td><p>26(ii)</p></td>
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
                  <td><p>26(ii)</p></td>
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
                    <p>Dr. A. D. Sawant</p> 
                    <p>Department of Chemistry. Sanjay Ghodawat University, Kolhapur - 416118</p>
                    <a href="mailto:anand.sawant@sanjayghodawatuniversity.ac.in" className="table-link">anand.sawant@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Associate Dean,</p>
                      <p>Physical & Chemical Science</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A. D. Katdare</p> 
                    <p>C/o Civil Engineering, A-Block, Sanjay Ghodawat University A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                    <a href="mailto:amay.khatdare@sanjayghodawatuniversity.ac.in" className="table-link">amay.khatdare@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Civil Engineering Director School of Engineering & Technology</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. S. Sulthan</p> 
                    <p>School of Technology, C/o Aeronautical Engineering,</p>
                    <p>Sanjay Ghodawat University, A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                    <a href="mailto:khandal.sv@sanjayghodawatuniversity.ac.in" className="table-link">khandal.sv@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Aeronautical Engineering</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. R. M. Linus</p> 
                    <p>C/o Electronics and Communication Engineering, B-Block, Sanjay Ghodawat University A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:rajin.linus@sanjayghodawatuniversity.ac.in" className="table-link">rajin.linus@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Electrical & Electronics Engineering Electric Engineering BOS- Electronics & Communicatin Engineering</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>
            
              <tr>
                 <td>
                    <p>Mr. Dhawan Ajay Prabhakar</p> 
                    <p>C/o Mechanical Engineering, A-Block, Sanjay Ghodawat University A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:ajay.dhawan@sanjayghodawatuniversity.ac.in" className="table-link">ajay.dhawan@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Mechanical Engineering</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Deepika Patil</p> 
                    <p>Computer Science Engineering,<br/>B-Block, Sanjay Ghodawat University A/P- Atigre,<br/>Tal - Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:deepika.patil@sanjayghodawatuniversity.ac.in" className="table-link">deepika.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Computer Science Engineering</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. M. P. Gaikwad</p> 
                    <p>Artificial Intelligence and Machine Learning,<br/>B-Block, Sanjay Ghodawat University A/P- Atigre,<br/>Tal - Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:mahesh.gaikwad@sanjayghodawatuniversity.ac.in" className="table-link">mahesh.gaikwad@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Artificial Intelligence and Machine Learning</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Chetan Arage</p> 
                    <p>Computer Application,<br/>B-Block, Sanjay Ghodawat University A/P- Atigre,<br/>Tal - Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:chetan.arage@sanjayghodawatuniversity.ac.in" className="table-link">chetan.arage@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Computer Application</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. S. M. Pawar</p> 
                    <p>Department of Physics,Sanjay Ghodawat University,<br/>Kolhapur - 416118</p>
                    
                    <a href="mailto:@sanjayghodawatuniversity.ac.in" className="table-link">@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director, Innovation & Research</p>
                      <p>Head of Department,<br/>Physics</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(v)<br/>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. P. D. Bhange</p> 
                    <p>School of Physical & Chemical Science,<br/>Sanjay Ghodawat University A/P- Atigre, Tal - Hatkanangale,<br/>Dist - Kolhapur.</p>
                    
                    <a href="mailto:pallavi.bhange@sanjayghodawatuniversity.ac.in" className="table-link">pallavi.bhange@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director, School of Physical & Chemical Science</p>
                      <p>Head of Department,<br/>Chemical Science</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(v)<br/>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. S. N. Patil (Incharge)</p> 
                    <p>Department of Allied Health & Science, SGU Campus, Atigre.</p>
                 
                    
                    <a href="mailto:samsher.patil@sanjayghodawatuniveristy.ac.in" className="table-link">samsher.patil@sanjayghodawatuniveristy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Head of Department,<br/>Durectir- Allied Health & Science</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Subhash Trimbakrao Kumbhar</p> 
                    <p>SGU Campus, Atigre.</p>
                  
                    
                    <a href="mailto:subhash.kumbhar@sanjayghodawatuniversity.ac.in" className="table-link">subhash.kumbhar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>B. Pharmacy</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Khot Vidyarani S</p> 
                   
                  
                    
                    <a href="mailto:vidyarani.khot@sanjayghodawatuniversity.ac.in" className="table-link">vidyarani.khot@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>D. Pharmacy</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Vishwas Shriniwas Pendse</p> 
                    <p>SGU Campus, Atigre.</p>
                  
                    
                    <a href="mailto:vishwad.pendse @sanjayghodawatuniversity.ac.in" className="table-link">vishwad.pendse @sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Management</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr.Arjun Patil</p> 
                    <p>SGU Campus, Atigre.</p>
                  
                    
                    <a href="mailto:arjun.patil@sanjayghodawatuniversity.ac.in" className="table-link">arjun.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Head of Department,</p>
                      <p>Commerce</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>26(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr.S.R.Patil</p> 
                    <p>SGU Campus, Atigre.</p>
                  
                    
                    <a href="mailto:shivajirao.patil@sanjayghodawatuniversity.ac.in" className="table-link">shivajirao.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Professor</p>
                      <p>Vice-Chancellor Nominee</p>
                      
                  </td>
                  <td><p>Invitee Member</p></td>
                  <td><p>26(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Vivek M. Kayande</p> 
                    <p>Sanjay Ghodawat University Kolhapur.</p>
                  
                    
                    <a href="mailto:registrar@sanjayghodawatuniversity.ac.in" className="table-link">registrar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Registrar,</p>
                      <p>Sanjay Ghodawat University</p>
                      
                  </td>
                  <td><p>Member Secretary</p></td>
                  <td><p>26(vi)</p></td>
              </tr>
  
  
             
             

	          </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfUniversity;
