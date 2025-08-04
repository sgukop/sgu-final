"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function MassCommunicationDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Mass Communication" subMenu={NavLinks} />
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
                  <th><p className="text-[#4f70b6]">Post/Category</p></th>
                  <th><p className="text-[#4f70b6]">Subject</p></th>
                  <th><p className="text-[#4f70b6]">Position</p></th>
                  <th><p className="text-[#4f70b6]">Mail ID & MOB. NO</p></th>
                  <th><p className="text-[#4f70b6]">Address</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Ms. Priyanka Patil</p></td>
                  <td><p>Teaching Asst. <br/>Sanjay Ghodawat University,Kolhapur</p></td>
                  <td><p>Chairman</p></td>
                  <td><p>Chairman</p></td>
                  <td><p>patil.priyanka@sanjayghodawatuniversity.ac.in</p></td>
                  <td><p>Sanjay Ghodawat University</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Mr. Sumit Kadam</p></td>
                  <td><p>Teaching Asst. <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                  <td><p>Journalism & Mass Communication</p></td>
                  <td><p>Member</p></td>
                  <td><p>sumit.kadam@sanjayghodawatuniversity.ac.in</p></td>
                  <td><p>Sanjay Ghodawat University</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. Meera Dhas</p></td>
                  <td><p>Information Officer <br/> District information Office</p></td>
                  <td><p>Nomination on the Board of Studies in the Media</p></td>
                  <td><p>Member</p></td>
                  <td><p>meeradhas@gmail.com</p></td>
                  <td><p>Sambhajinagar, India</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr. Rajendra Gonarkar</p></td>
                  <td><p>Professor & Director <br/> School of Media Studies <br/> SwamiRamanand Teerth Marathwada University Nanded-431606</p></td>
                  <td><p>Nomination on the Board of Studies in the Media</p></td>
                  <td><p>Member</p></td>
                  <td><p>rajendra.gonarkar@rediffmail.com</p></td>
                  <td><p>SwamiRamanand Teerth Marathwada UniversityNanded-431606</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Mr. Shishupal Kadam</p></td>
                  <td><p>Senior Producer News and Program,ABP Majha, <br/> Mumbai, Maharashtra</p></td>
                  <td><p>Journalism & Mass Communication</p></td>
                  <td><p>Member</p></td>
                  <td><p>kadamshishupal123@gmail.com</p></td>
                  <td><p>ABP Majha, Mumbai, Maharashta-400093</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Prof. Sandeep Shahare</p></td>
                  <td><p>Prof. I/CDean, I/C Director <br/> Film & Television Institute of India (FTID),</p></td>
                  <td><p>Nomination on the Board of Studies in the Media</p></td>
                  <td><p>Member</p></td>
                  <td><p>sandeep.shahare@ftii.ac.in</p></td>
                  <td><p>Pune, India</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Ms. Sharvari Madhale</p></td>
                  <td><p>Teaching Asst. <br/> Sanjay Ghodawat University,Kolhapur</p></td>
                  <td><p>Journalism & Mass Communication</p></td>
                  <td><p>Invitee</p></td>
                  <td><p>sharvari.madhale@sanjayghodawatuniversity.ac.in</p></td>
                  <td><p>Sanjay Ghodawat University</p></td>
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

export default MassCommunicationDeptBOS;
