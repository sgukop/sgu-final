"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function Planning() {
  return (
    <div className="pt-100 pb-100 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title">Planning & Monitoring Board</h2></div>
              <span className="dark-mode-white-color mt-10 mb-50">(As per statute 3.14)</span>
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
                    <p>Mr. Sanjay D. Ghodawat</p> 
                    <p>28, Sushreya, Yashwant Co-Op Housing Society, A/o: Jaysingpur. Tal: Shirol, Dist: Kolhapur - 416 101</p>
                    <a href="mailto:chairman@ghodawat.com" className="tl-def-btn-2">chairman@ghodawat.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>President</p></td>
                  <td><p>Chairperson</p></td>
                  <td><p>3.14-2(i)</p></td>
              </tr>
              <tr>
                 <td>
                    <p>Prof. Dr. Udhav Bhosle</p> 
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:vc@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vc@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Vice-Chancellor,</p>
                      <p>Sanjay Ghodawat University, Kolhapur.</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>3.14-2(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. M. T. Telsang</p> 
                    <p>Apartment No-A-1, Flat No E-2, SGU Campus, Atigre.</p>
                    <a href="mailto:dean@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">dean@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Technology</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>3.14-2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Abid Salati</p> 
                    <p>“Ayesha” Flat no-9, Veera Appt., Mahadik colony, Kolhapur.</p>
                    <a href="mailto:salati.ay@sginstitute.in" className="tl-def-btn-2">salati.ay@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Commerce & Management</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>3.14-2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A. D. Sawant</p> 
                    <p>Dean, School of Science PhD, Postdoc (USA), Head, Department of Chemistry. <br/> Sanjay Ghodawat University, Kolhapur - 416118</p>
                    <a href="mailto:sawant.ad@sginstitute.in" className="tl-def-btn-2">sawant.ad@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Science</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>3.14-2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. U. P. Jadhav</p> 
                    <p>Department of English, C-Block, SGU Campus, Atigre.</p>
                    <a href="mailto:jadhav.up@sginstitute.in" className="tl-def-btn-2">jadhav.up@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Liberal Arts</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>3.14-2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Prakash A. Desai</p> 
                    <p>C/o- Sanjay Ghodawat University, B-Block, Accounts Office, SGU.</p>
                    <a href="mailto:cfo@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">cfo@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Chief,</p>
                      <p>Finance and Accounts Officer</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>3.14-2(v)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Shri. Sarjerao Kadam</p> 
                    <p>C/o- Sanjay Ghodawat University, C-Block, Accounts Office, SGU.</p>
                    <a href="mailto:kadam.ss@sginstitute.in" className="tl-def-btn-2">kadam.ss@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Project Engineer of University</p>
                     
                  </td>
                  <td><p>Member</p></td>
                  <td><p>3.14-2(vi)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Vinayak V. Bhosale</p> 
                    <p>Plot No 630, Shahu Nagar, Sudarshan Chowk, Jaysingpur.Tal: Shirol, Dist: Kolhapur - 416 101</p>
                    <a href="mailto:vinayak@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vinayak@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    <a href="mailto:vinayak@sgintitute.in" className="tl-def-btn-2">vinayak@sgintitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Member of Board of Management</p>
                     
                  </td>
                  <td><p>Member (Nominee by President)</p></td>
                  <td><p>3.14-2(vii)</p></td>
              </tr>

              
              <tr>
                 <td>
                    <p>Dr. B.P. Sabale</p> 
                    <p>Nilmohar, Plot No 32,R K Nagar, Society No 5, Kolhapur.</p>
                    <a href="mailto:bsabale@gmail.com" className="tl-def-btn-2">bsabale@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                    
                  </td>

                  <td><p>Eminent Educationist</p>
                     
                  </td>
                  <td><p>Member (Nominee by President)</p></td>
                  <td><p>3.14-2(vii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Pramod Parikh</p> 
                    <p>Parikh & Associates, Architects, Structural, Interior designers, Sangli</p>
                    <a href="mailto:pariarch21@gmail.com" className="tl-def-btn-2">pariarch21@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                    
                  </td>

                  <td><p>Renowned Architect</p>
                     
                  </td>
                  <td><p>Member (Nominee by President)</p></td>
                  <td><p>3.14-2(vii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Vivek M. Kayande</p> 
                    <p>Sanjay Ghodawat University Kolhapur.</p>
                    <a href="mailto:registrar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">registrar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    
                  </td>

                  <td><p>Registrar</p>
                     
                  </td>
                  <td><p>Member - Secretary</p></td>
                  <td><p>3.14-2(viii)</p></td>
              </tr>



             </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planning;
