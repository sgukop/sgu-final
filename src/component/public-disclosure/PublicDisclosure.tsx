"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function PublicDisclosure() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
            Guidelines on Public Self- Disclosure
          </h2>
          <div className="col-lg-12">
            <Table bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                  <th><p className="text-[#4f70b6]">Title</p></th>
                  <th><p className="text-[#4f70b6]">Subtitle</p></th>
                  <th><p className="text-[#4f70b6]">Link on Website</p></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                    <td rowSpan={8}><p>1</p></td>
                    <td rowSpan={8}><p>About HEI</p></td>
                    <td><p>About Us- Overview : </p></td>
                    <td>
                        <a href="https://www.sguk.ac.in/about-university" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/about-universit <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Act and Statutes or MoA"</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/affiliations" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/affiliations <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Institutional Development Plan</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                      <p>Constituent Units/ Affiliated Colleges, <br/> 
                        Affiliating University (In case of Colleges) Off- Campus/Off-Shore <br/>
                        Campus/Learning Support Centers Under ODL Mode (Wherever Applicable)
                      </p>
                    </td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">State Private University <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Accreditation/ Ranking Status (NAAC, NBA,NIRF)</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank"> Not Accreditated <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Recognition / Approval (2(f), 12B, etc. asapplicable)</p></td>
                    <td> 
                        <a href="https://manage-api.sguk.ac.in/api/assets/676517fe9173bf9f471ad1b2" className="tl-def-btn-2" target="_blank">https://manage-api.sguk.ac.in/api/assets/676517fe9173bf9f471ad1b2 <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>Annual Accounts Including Balance Sheet, <br/>
                          Income and Expenditure Account, <br/> 
                          Receipts and Payments Account Along with Audit Report</p>
                    </td>
                    <td> 
                        <a href="https://www.sguk.ac.in/download" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/download<i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>
                <tr>
                    <td><p>Sponsoring Body Details, if any</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/board-of-directors" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/board-of-directors <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>


                <tr>
                    <td rowSpan={15}><p>2</p></td>
                    <td rowSpan={15}><p>Administration <br/> (Profiles with Photographs and Contact Details)</p></td>
               
                    <td><p>Chancellor</p></td>
                    <td>
                        <p><strong>Name : Mr. Sanjay D. Ghodawat.</strong></p>
                        <a href="https://www.sguk.ac.in/president" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/president <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Vice-Chancellor</p></td>
                    <td>
                        <p><strong>Name : Dr. Udhav Bhosle</strong></p>
                        <a href="https://www.sguk.ac.in/vice-chancellor" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/vice-chancellor <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Registrar</p></td>
                    <td>
                        <p><strong>Name : Dr. Vivek M. Kayande</strong></p>
                        <p><strong>Mobile : 0230 2463772</strong></p>
                        <a href="mailto:registrar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2" target="_blank">registrar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                        <a href="https://www.sguk.ac.in/officers-of-university" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/officers-of-university <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Finance Officer</p></td>
                    <td>
                        <p><strong>Name : Mr. Prakash Desai</strong></p>
                        <p><strong>Mobile :</strong></p>
                        <a href="mailto:cfo@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2" target="_blank">cfo@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                        <a href="https://www.sguk.ac.in/officers-of-university" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/officers-of-university <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Controller Of Examination</p></td>
                    <td>
                        <p><strong>Name: Dr. N K Patil</strong></p>
                        <p><strong>Mobile :</strong></p>
                        <a href="mailto:ceo@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2" target="_blank">ceo@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                        <a href="https://www.sguk.ac.in/officers-of-university" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/officers-of-university <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Ombudsperson</p></td>
                    <td>
                        <p><strong>Name :  Dr. Gurav A. M.</strong></p>
                        <p><strong>Mobile : +91 9850012545</strong></p>
                        <a href="mailto:annasahebg@yahoo.co.in" className="tl-def-btn-2" target="_blank">annasahebg@yahoo.co.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                        <a href="https://www.sguk.ac.in/contact-us" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/contact-us <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                      <p>Executive Council/Board of Governors by whatever name called</p>
                    </td>
                    <td> 
                        <a href="https://www.sguk.ac.in/governing-body" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/governing-body <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Board of Management</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/board-of-management" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/board-of-management <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Academic Council</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/academic-council" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/academic-council <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>Board of Studies</p>
                    </td>
                    <td> 
                        <a href="https://www.sguk.ac.in/aerospace-dept-BOS" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/aerospace-dept-BOS <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>
                <tr>
                    <td><p>Finance Committee Composition and Members with Particulars</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/finance-committee" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/finance-committee <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Internal Complaint Committee</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/internal-complaint" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/internal-complaint <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Academic Leadership (Dean/Hod of Schools/Departments/Centres)</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/officers-of-university" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/officers-of-university <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>BDetails of Academic Programs</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/programs-university" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/programs-university <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Academic Calendar</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/academic-calendar" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/academic-calendar <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>



                <tr>
                    <td rowSpan={9}><p>3</p></td>
                    <td rowSpan={9}><p>Academics</p></td>
               
                    <td><p>Statutes/Ordinances Pertaining to Academics/Examinations</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/download" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/download <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Schools /Departments/ Centres</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/ <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Department/ School/ Centre Wise Faculty/ Staff Details with Photographs</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/computer-dept-faculty" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/computer-dept-faculty <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>List of UGC-Recognized ODL/Online Programs, if any</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link : NA</a>
                    </td>
                </tr>

                <tr>
                    <td><p>Internal Quality Assurance Cell (IQAC)</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/IQAC-committee" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/IQAC-committee <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Library</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/library-about" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/library-about <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Academic Collaborations</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/internationalization-SGU" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/internationalization-SGU <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Prospectus <br/> (including fee structure for various programs)</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/prospectus" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/prospectus <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Admission Process and Guidelines</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/admission-process" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/admission-process <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td rowSpan={3}><p>4</p></td>
                    <td rowSpan={3}><p>Admissions & Fee</p></td>
               
                    <td><p>Fee Refund Policy</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link : NA</a>
                    </td>
                </tr>

                <tr>
                    <td><p>Research And Development Cell <br/> (Including Research and Consultancy Projects, Foreign Collaboration Industry Collaborations)</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/research-structure" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/research-structure <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Incubation Centre/Start-Ups/ Entrepreneurship Cell</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link : NA</a>
                    </td>
                </tr>

                <tr>
                    <td rowSpan={3}><p>5</p></td>
                    <td rowSpan={3}><p>Research</p></td>
               
                    <td><p>Central Facilities</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/facilities" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/facilities <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Sports Facilities</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/SGU-sports" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/SGU-sports <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>NCC/NSS - Details</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/student-NSS" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/student-NSS <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td rowSpan={11}><p>6</p></td>
                    <td rowSpan={11}><p>Student Life</p></td>
               
                    <td><p>Hostel Details (Wherever Applicable)</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/residential-facilities" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/residential-facilities <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Placement Cell and Its Activities</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/training-placement-statistical-analysis" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/training-placement-statistical-analysis <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Details Of Student Grievance Redressal Committee <br/> (SGRC) And Ombudsperson</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/student-grievance-committee" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/student-grievance-committee<i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Health Facilities</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/medical-facilities" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/medical-facilities <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Internal Complaint Committee</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/internal-complaint" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/internal-complaint <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Anti-Ragging Cell</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/antiragging" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/antiragging <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Equal Opportunity Cell</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/equal-opportunity-cell" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/equal-opportunity-cell</a>
                    </td>
                </tr>

                <tr>
                    <td><p>Socio-Economically Disadvantaged Groups Cell (SEDG)</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link : NA</a>
                    </td>
                </tr>

                <tr>
                    <td><p>Facilities for Differently Abled <br/> (e.g., Barrier-Free Environment)</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/facilities" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/facilities <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Alumni Association with Details</p></td>
                    <td> 
                        <a href="https://alumni.sanjayghodawatuniversity.ac.in/" className="tl-def-btn-2" target="_blank">https://alumni.sanjayghodawatuniversity.ac.in/ <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>RTI: Details of Central Public Information Officer (CPIO) <br/> and Appellate Authority (wherever applicable)</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link : NA</a>
                    </td>
                </tr>

                <tr>
                    <td><p>7</p></td>
                    <td><p>Alumni</p></td>
               
                    <td><p>Circulars and Notices</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/examination-notice" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/examination-notice <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td rowSpan={9}><p>8</p></td>
                    <td rowSpan={9}><p>Information Corner</p></td>
               
                    <td><p>Announcements</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Newsletters</p></td>
                    <td> 
                        <a href="https://manage-api.sguk.ac.in/api/assets/67652b2c9173bf9f471ad1c1" className="tl-def-btn-2" target="_blank">https://manage-api.sguk.ac.in/api/assets/67652b2c9173bf9f471ad1c1 <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>News, Recent Events & Achievements</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/more-details" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/more-details <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Job Openings</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/careers" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/careers <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Reservation Roster (wherever applicable)</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link : NA</a>
                    </td>
                </tr>

                <tr>
                    <td><p>Study in India</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link : NA</a>
                    </td>
                </tr>

                <tr>
                    <td><p>Admission procedure and facilities provided to International Students</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/admission-process" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/admission-process <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Picture Gallery</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/photo-gallery" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/photo-gallery <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Details with Phone Number, <br/> Official Email ID and Address, <br/> Location Map</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/contact-us" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/contact-us <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>9</p></td>
                    <td><p>Picture Gallery</p></td>
               
                    <td><p>Picture Gallery</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/sgu-photo-gallery" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/sgu-photo-gallery <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td rowSpan={2}><p>10</p></td>
                    <td rowSpan={2}><p>Contact Us</p></td>
               
                    <td><p>Details with Phone Number, <br/> Official Email ID and Address, <br/> Location Map,</p></td>
                    <td> 
                        <a href="https://www.sguk.ac.in/contact-us" className="tl-def-btn-2" target="_blank">https://www.sguk.ac.in/contact-us <i className="fa-regular fa-arrow-right"></i></a>
                    </td>
                </tr>

                <tr>
                    <td><p>Telephone Directory</p></td>
                    <td> 
                        <a href="#" className="tl-def-btn-2" target="_blank">Link : NA</a>
                    </td>
                </tr>

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicDisclosure;
