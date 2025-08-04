"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function AcademicCouncil() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Academic Council</h2></div>
              <span className="dark-mode-white-color  mt-2 mb-12">(As per Statute 20.2)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST/CATEGORY</p></th>
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
                  <td><p>20.2(i)</p></td>
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
                  <td><p>20.2(ii)<br/>20.2(iv)</p></td>
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
                  <td><p>20.2(ii) <br/> 20.2(iii) <br/> 20.2(iv)</p></td>
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
                  <td><p>20.2(ii) <br/> 20.2(iii) <br/> 20.2(iv)</p></td>
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
                  <td><p>20.2(ii)</p></td>
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
                  <td><p>20.2(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. S. Sulthan</p> 
                    <p>School of Technology, C/o Aeronautical Engineering,</p>
                    <p>Sanjay Ghodawat University, A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                    <a href="mailto:khandal.sv@sanjayghodawatuniversity.ac.in" className="table-link">khandal.sv@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS Aeronautical Engineering</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A. D. Katdare</p> 
                    <p>C/o Civil Engineering, A-Block, Sanjay Ghodawat University A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                    <a href="mailto:amay.khatdare@sanjayghodawatuniversity.ac.in" className="table-link">amay.khatdare@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>Civil Engineering Director School of Engineering & Technology</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii) <br/> 20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Dhawan Ajay Prabhakar</p> 
                    <p>C/o Mechanical Engineering, A-Block, Sanjay Ghodawat University A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:ajay.dhawan@sanjayghodawatuniversity.ac.in" className="table-link">ajay.dhawan@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS Mechanical Engineering</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Chetan Arage</p> 
                    <p>Computer Application,<br/>B-Block, Sanjay Ghodawat University A/P- Atigre,<br/>Tal - Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:chetan.arage@sanjayghodawatuniversity.ac.in" className="table-link">chetan.arage@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS Computer Application</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Deepika Patil</p> 
                    <p>Computer Science Engineering,<br/>B-Block, Sanjay Ghodawat University A/P- Atigre,<br/>Tal - Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:deepika.patil@sanjayghodawatuniversity.ac.in" className="table-link">deepika.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS Computer Application</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. M. P. Gaikwad</p> 
                    <p>Artificial Intelligence and Machine Learning,<br/>B-Block, Sanjay Ghodawat University A/P- Atigre,<br/>Tal - Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:mahesh.gaikwad@sanjayghodawatuniversity.ac.in" className="table-link">mahesh.gaikwad@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS Artificial Intelligence and Machine Learning</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. R. M. Linus</p> 
                    <p>C/o Electronics and Communication Engineering, B-Block, Sanjay Ghodawat University A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                    
                    <a href="mailto:rajin.linus@sanjayghodawatuniversity.ac.in" className="table-link">rajin.linus@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS Electrical & Electronics Engineering Electric Engineering BOS- Electronics & Communicatin Engineering</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. P. D. Bhange</p> 
                    <p>School of Physical & Chemical Science,<br/>Sanjay Ghodawat University A/P- Atigre, Tal - Hatkanangale,<br/>Dist - Kolhapur.</p>
                    
                    <a href="mailto:pallavi.bhange@sanjayghodawatuniversity.ac.in" className="table-link">pallavi.bhange@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>HOD, Chairman,</p>
                      <p>Director- School of Physical & Chemical Science</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)<br/>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. S. M. Pawar</p> 
                    <p>Department of Physics,Sanjay Ghodawat University,<br/>Kolhapur - 416118</p>
                    
                    <a href="mailto:@sanjayghodawatuniversity.ac.in" className="table-link">@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS Physics</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)<br/>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Adv. Dr. Anjali Patil</p> 
                    <p>Department of LAW, Block-C, SGU Campus, Atigre.</p>
                    
                    <a href="mailto:anjali.patil@sanjayghodawatuniversity.ac.in" className="table-link">anjali.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS & Director-Legal Studies</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)<br/>20.2.9(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. S. N. Patil (Incharge)</p> 
                    <p>Department of Allied Health & Science, SGU Campus, Atigre.</p>
                 
                    
                    <a href="mailto:samsher.patil@sanjayghodawatuniveristy.ac.in" className="table-link">samsher.patil@sanjayghodawatuniveristy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chairman,</p>
                      <p>BOS Allied Health & Science</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. S. P. Patil</p> 
                    <p>School of Architecture, Block –B, SGU Campus, Atigre.</p>
                 
                    
                    <a href="mailto:sachin.patil@sanjayghodawatuniversity.ac.in" className="table-link">sachin.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>I/C Director</p>
                      <p>School of Architecture</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. R. L .Deshpande</p> 
                     <a href="mailto:iqac@sanjayghodawatuniversity.ac.in" className="table-link">iqac@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director</p>
                      <p>Internal Quality Assurance Cell</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Jayprakash Patil</p> 
                    <p>School of Media , Block –B, SGU Campus, Atigre.</p>
                     <a href="mailto:jayprakash.patil @sanjayghodawatuniversity.ac.in" className="table-link">jayprakash.patil @sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director</p>
                      <p>School of Media</p>
                      
                  </td>
                  <td><p>Member</p></td>
                  <td><p>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Subhabrata (Subho) Ghosal</p> 
                    <p>RGIT, Mumbai University</p>
                     <a href="mailto:subhoghosal@gmail.com" className="table-link">subhoghosal@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Nominated by V. C. Industry Expert</p>
                     
                      
                  </td>
                  <td> <p>Nominated by Vice Chancellor</p></td>
                  <td><p>20.2(v)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Aneish Kumar</p> 
                    <p>RGIT, Mumbai University</p>
                     <a href="mailto:aneishk@yahoo.com" className="table-link">aneishk@yahoo.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Nominated by V. C. Industry Expert</p>
                     
                      
                  </td>
                  <td> <p>Nominated by Vice Chancellor</p></td>
                  <td><p>20.2(v)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Deepak Panaskar</p> 
                    <p>SRTMU, Nanded</p>
                     <a href="mailto:dbpanaskar@gmail.com" className="table-link">dbpanaskar@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Nominated by the President Academicians/Scientists</p>
                     
                      
                  </td>
                  <td> <p>Nominated by the President</p></td>
                  <td><p>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. K. V. Srinivasan</p> 
                    <p>TIFR, Mumbai</p>
                     <a href="mailto:kvsrini@tifr.res.in" className="table-link">kvsrini@tifr.res.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Nominated by the President Academicians/Scientists</p>
                      
                      
                  </td>
                  <td><p>Nominated by the President</p></td>
                  <td><p>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. H. Barkate</p> 
                    <p>TIFR, Mumbai</p>
                     <a href="mailto:hbarkate@gmail.com" className="table-link">hbarkate@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Nominated by the President Academicians/Scientists</p>
                     
                      
                  </td>
                  <td> <p>Nominated by the President</p></td>
                  <td><p>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. V. Ambili</p> 
                    <p>Deputy Director General, Geological Survey of India, Thiruvananthapuram</p>
                     <a href="mailto:v.ambli@gsi.gov.in" className="table-link">v.ambli@gsi.gov.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Nominated by the President Academicians/Scientists</p>
                      
                      
                  </td>
                  <td><p>Nominated by the President</p></td>
                  <td><p>20.2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. N. K. Patil</p> 
                   
                     <a href="mailto:coe@sanjayghodawatuniversity.ac.in" className="table-link">coe@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Contoller of Examinations</p>
                      
                      
                  </td>
                  <td><p>Permanent Invitee</p></td>
                  <td><p>20.2(viii)</p></td>
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
                  <td><p>20.2(vii)</p></td>
              </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicCouncil;
