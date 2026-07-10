"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

function AIandMLFacultyList() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <div className="governing-body">
          <div className="d-flex justify-content-center">
            <h2 className="tl-2-section-title mb-50">Faculty Members List</h2>
          </div>
        </div>
        <div className="row">
          <MenuList dept="Artificial Intelligence and Machine Learning" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gx-0 tl-blog-details-row">
              <div className="col-lg-12">
                <Table striped bordered hover responsive className="governing-table">
                  <thead>
                    <tr>
                      <th><p className="text-[#4f70b6]">Sr.No</p></th>
                      <th><p className="text-[#4f70b6]">Name of the Member</p></th>
                      <th><p className="text-[#4f70b6]">Post</p></th>
                      <th><p className="text-[#4f70b6]">Designation</p></th>
                      <th><p className="text-[#4f70b6]">Mail ID</p></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><p>1</p></td>
                      <td><p>Dr. Santaji Shinde</p></td>
                      <td><p>HOD & Professor</p></td>
                      <td><p>Chairman</p></td>
                      <td>
                        <a href="mailto:santaji.shinde@am.sguk.ac.in" className="tl-def-btn-2">
                          santaji.shinde@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>2</p></td>
                      <td><p>Dr. Pradeep B.Mane</p></td>
                      <td><p>Principal</p></td>
                      <td><p>Member (Expert Researcher)</p></td>
                      <td>
                        <a href="mailto:Pbmane6829@gmail.com" className="tl-def-btn-2">
                          Pbmane6829@gmail.com <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>3</p></td>
                      <td><p>Dr. Shruti Patil</p></td>
                      <td><p>Assoc Professor</p></td>
                      <td><p>Member (Expert Academician)</p></td>
                      <td>
                        <a href="mailto:headaiml@sitpune.edu.in" className="tl-def-btn-2">
                          headaiml@sitpune.edu.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>4</p></td>
                      <td><p>Dr. Sujata S. Kulkarni</p></td>
                      <td><p>Assoc Professor</p></td>
                      <td><p>Member (Expert Academician)</p></td>
                      <td>
                        <a href="mailto:taresujata@yahoo.com" className="tl-def-btn-2">
                          taresujata@yahoo.com <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>5</p></td>
                      <td><p>Dr. Priyanka Shivaprasad More</p></td>
                      <td><p>Associate Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:priyanka.more@am.sguk.ac.in" className="tl-def-btn-2">
                          priyanka.more@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>6</p></td>
                      <td><p>Mrs. Pallavi Amol Majgave</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:pallavi.majgave@am.sguk.ac.in" className="tl-def-btn-2">
                          pallavi.majgave@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>7</p></td>
                      <td><p>Mr. Amrish Patil</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:amrish.patil@am.sguk.ac.in" className="tl-def-btn-2">
                          amrish.patil@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>8</p></td>
                      <td><p>Mrs. Varsha Kunal Kasote</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:varsha.kasote@am.sguk.ac.in" className="tl-def-btn-2">
                          varsha.kasote@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>9</p></td>
                      <td><p>Mr. Najim Abdul Naik</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:najim.naik@am.sguk.ac.in" className="tl-def-btn-2">
                          najim.naik@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>10</p></td>
                      <td><p>Mrs. Savita Charane</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:savita.charane@am.sguk.ac.in" className="tl-def-btn-2">
                          savita.charane@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>11</p></td>
                      <td><p>Mr. Jahir Shaikh</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:jahir.shaikh@am.sguk.ac.in" className="tl-def-btn-2">
                          jahir.shaikh@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>12</p></td>
                      <td><p>Mr. Vinayak Kishor Kumbhar</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:vinayak.kumbhar@am.sguk.ac.in" className="tl-def-btn-2">
                          vinayak.kumbhar@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>13</p></td>
                      <td><p>Mr. Kamble Siyang Prafulla</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:kamble.prafulla@am.sguk.ac.in" className="tl-def-btn-2">
                          kamble.prafulla@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>14</p></td>
                      <td><p>Mrs. Reshma Vishal Pasale</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member</p></td>
                      <td>
                        <a href="mailto:reshma.pasale@am.sguk.ac.in" className="tl-def-btn-2">
                          reshma.pasale@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td><p>15</p></td>
                      <td><p>Ms. Shweta Shete</p></td>
                      <td><p>Assistant Professor</p></td>
                      <td><p>Member Secretary</p></td>
                      <td>
                        <a href="mailto:shweta.shete@am.sguk.ac.in" className="tl-def-btn-2">
                          shweta.shete@am.sguk.ac.in <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIandMLFacultyList;