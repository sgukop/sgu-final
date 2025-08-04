"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

function ComputerDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
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
                  <td><p>Dr. Deepika V.Patil</p></td>
                  <td><p>Assot.Professor and HOD,CSE</p></td>
                  <td><p>Chairman</p></td>
                  <td><a href="mailto:hod.cse@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">HOD.CSE@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/> 7219104454 </td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Parikshit N.Mahalle</p></td>
                  <td><p>Professor</p></td>
                  <td><p>Member (Expert Researcher)</p></td>
                  <td><a href="mailto:aalborg.pnm@gmail.com" className="tl-def-btn-2">aalborg.pnm@gmail.com <i className="fa-regular fa-arrow-right"></i></a> <br/> 9307941193</td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. Annappa</p></td>
                  <td><p>Professor</p></td>
                  <td><p>Member (Expert Academician)</p></td>
                  <td><a href="mailto:annappa@ieee.org" className="tl-def-btn-2">annappa@ieee.org <i className="fa-regular fa-arrow-right"></i></a><br/>08242473401, 9845715006</td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr. Jyoti Ajinkya Deshmukh</p></td>
                  <td><p>Professor</p></td>
                  <td><p>Member (Expert Academician)</p></td>
                  <td><a href="mailto:jyoti.deshmukh@mctrgit.ac.in" className="tl-def-btn-2">jyoti.deshmukh@mctrgit.ac.in <i className="fa-regular fa-arrow-right"></i></a><br/> 7977184708 </td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Dr. K.Krishna Prakasha</p></td>
                  <td><p>Associate Professor</p></td>
                  <td><p>Member (Expert Academician)</p></td>
                  <td><a href="mailto:jyoti.deshmukh@mctrgit.ac.in" className="tl-def-btn-2">B kkp.prakash@manipal.edu <i className="fa-regular fa-arrow-right"></i></a><br/>+91 (948) 048 3392</td>
                </tr>


                <tr>
                  <td><p>6</p></td>
                  <td><p>Mr.Siddhesh S.Toraskar</p></td>
                  <td><p>Sr. Software Engineer</p></td>
                  <td><p>Member (Expert Industry)</p></td>
                  <td><a href="mailto:Siddheshtoraskar04@gmail.com" className="tl-def-btn-2">Siddheshtoraskar04@gmail.com <i className="fa-regular fa-arrow-right"></i></a><br/> 9075699499 </td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Mr. Gurunath Machhale</p></td>
                  <td><p>Assistant professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:gurunath.machhale@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">gurunath.machhale@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a><br/> 9673747386 </td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Mr. Aldar Krishna M.</p></td>
                  <td><p>Assistant professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:krishna.aldar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">krishna.aldar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a><br/> 8177815670 </td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Mr. Satish M Ranbhise</p></td>
                  <td><p>Assistant professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:satish.ranbhise@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">satish.ranbhise@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/> 8459809343 </td>
                </tr>

                <tr>
                  <td><p>10</p></td>
                  <td><p>Ms. Mrunal A. Deshpande</p></td>
                  <td><p>Assistant professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:mrunal.deshpande@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">mrunal.deshpande@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/> 9769918098</td>
                </tr>

                <tr>
                  <td><p>11</p></td>
                  <td><p>Ms.Surabhi Gaikwad</p></td>
                  <td><p>Assistant professor</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:Surabhi.gaikwad@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">Surabhi.gaikwad@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/> 9021720208 </td>
                </tr>

                <tr>
                  <td><p>11</p></td>
                  <td><p>Mr.Sameer I Tamboli</p></td>
                  <td><p>Assistant professor</p></td>
                  <td><p>Member Secretary</p></td>
                  <td><a href="mailto:sameer.tamboli@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">sameer.tamboli@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/> 9503716550 </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

       {/*  <div className="row gx-0 tl-blog-details-row mt-50">
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">List BOS Members Nominated outside University</h2></div>
          <div className="col-lg-12">
            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name of the Member</p></th>
                  <th><p className="text-[#4f70b6]">Post</p></th>
                  <th><p className="text-[#4f70b6]">Role in Board of Studies </p></th>
                  <th><p className="text-[#4f70b6]">Mail ID  and Mobile No</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Parikshit N.Mahalle</p></td>
                  <td><p>Professor & Head ,AI and DS Dept.VIIT Pune </p></td>
                  <td><p>Member (Expert Academician)</p></td>
                  <td><a href="mailto:aalborg.pnm@gmail.com" className="tl-def-btn-2">aalborg.pnm@gmail.com <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Annappa</p></td>
                  <td><p>Professor, Dept. of Computer Science and Engineering, NIITK,Surathkal </p></td>
                  <td><p>Member (Expert Researcher) </p></td>
                  <td><a href="mailto:annappa@ieee.org" className="tl-def-btn-2">annappa@ieee.org <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. JyotiAjinkyaDeshmukh</p></td>
                  <td><p>Professor, Head of Department AIDS, Rajiv Gandhi Institute of Technology (RGIT), Mumbai </p></td>
                  <td><p>Member (Expert  Academician)</p></td>
                  <td><a href="mailto:jyoti.deshmukh@mctrgit.ac.in" className="tl-def-btn-2">jyoti.deshmukh@mctrgit.ac.in <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Mr.Siddhesh S.Toraskar</p></td>
                  <td><p>Sr.Software Engineer DruvaInc,Pune </p></td>
                  <td><p>Member (Expert Industry) </p></td>
                  <td><a href="mailto:Siddheshtoraskar04@gmail.com" className="tl-def-btn-2">Siddheshtoraskar04@gmail.com <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>  */}
      </div>
      </div>
      </div>
    </div>
  );
}

export default ComputerDeptBOS;
