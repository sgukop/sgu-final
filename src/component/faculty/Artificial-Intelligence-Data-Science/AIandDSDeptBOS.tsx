"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

function AIandDSDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-2-section-title mb-50">BOS Members List</h2></div>
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
                  <th><p className="text-[#4f70b6]">Mail ID  and Mobile No</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Mahesh P. Gaikwad </p></td>
                  <td><p>Assoc.Professor and HOD,AIML</p></td>
                  <td><p>Chairman</p></td>
                  <td><a href="mailto:hod.aiml@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">hod.aiml@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a><p>9766802914</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Pradeep B.Mane</p></td>
                  <td><p>Principal</p></td>
                  <td><p>Member (Expert Researcher)</p></td>
                  <td><a href="mailto:Pbmane6829@gmail.com" className="tl-def-btn-2">Pbmane6829@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9420918444</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. Shruti Patil</p></td>
                  <td><p>Assoc Professor</p></td>
                  <td><p>Member (Expert Academician)</p></td>
                  <td><a href="mailto:headaiml@sitpune.edu.in" className="tl-def-btn-2">headaiml@sitpune.edu.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>9823038771</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr. Sujata S. Kulkarni</p></td>
                  <td><p>Assoc Professor</p></td>
                  <td><p>Member (Expert Academician)</p></td>
                  <td><a href="mailto:taresujata@yahoo.com" className="tl-def-btn-2">taresujata@yahoo.com<i className="fa-regular fa-arrow-right"></i></a>
                  <p>9920899023</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Amrish Patil</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:amrish.patil@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">amrish.patil@sanjayghodawatuniversity.ac.in<i className="fa-regular fa-arrow-right"></i></a>
                  <p>9970221308</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Varsha Kasote</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:varsha.kasote@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">varsha.kasote@sanjayghodawatuniversity.ac.in<i className="fa-regular fa-arrow-right"></i></a>
                  <p>9511760292</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Pallavi Majgave</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:pallavi.majgave@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">pallavi.majgave@sanjayghodawatuniversity.ac.in<i className="fa-regular fa-arrow-right"></i></a>
                  <p>9822170623</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Vidyananad Upadhye</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:vidyananad.upadhye@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vidyananad.upadhye@sanjayghodawatuniversity.ac.in<i className="fa-regular fa-arrow-right"></i></a>
                  <p>9881446349</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Mrs. Shweta G. Shete</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member Secretary</p></td>
                  <td><a href="mailto:shweta.shete@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">shweta.shete@sanjayghodawatuniversity.ac.in<i className="fa-regular fa-arrow-right"></i></a>
                  <p>9503716550</p></td>
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

export default AIandDSDeptBOS;
