"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function MechanicalDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                  <th><p className="text-[#4f70b6]">Name of the Member</p></th>
                  <th><p className="text-[#4f70b6]">Post/ Category</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                  <th><p className="text-[#4f70b6]">Mail ID & Mob No.</p></th>
                  <th><p className="text-[#4f70b6]">Section</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Mr.Ajay P Dhawan,<br/> Mechanical Engg.,<br/> A-Block, SGU Campus</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Chairman</p></td>
                  <td><a href="mailto:hod.mechanical@sanjaygsanjayghodawatuni.ac.in" className="tl-def-btn-2">hod.mechanical@sanjaygsanjayghodawatuni.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>+91 9011262717</p>
                    </td>
                    <td><p>3.12-2(i)</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. SatwasheelPowar,<br/> Assistant Professor,<br/>Indian Institute of Technology,Mandi, India</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member (Expert - Research)</p></td>
                  <td><a href="mailto:satvasheel@gmail.com" className="tl-def-btn-2">satvasheel@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>+91 787530 7000</p>
                    </td>
                    <td><p>3.12-2(ii)</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Mr. JaganBasutkar,<br/> Chief Manager- Technical Project Management (R&D) at Skoda Auto Volkswagen,<br/>india</p></td>
                  <td><p>Chief Manager</p></td>
                  <td><p>Member (Expert - Industry)</p></td>
                  <td><a href="mailto:jagan.basutkar@gmail.com" className="tl-def-btn-2">jagan.basutkar@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  <p>+91 7875950087</p>
                    </td>
                    <td><p>3.12-2(ii)</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr. Krishnaraja G. Kodancha,<br/> KLE Technological University,<br/>B. V. Bhoomaraddi Campus, Vidyanagar, Hubballi (India)</p></td>
                  <td><p>Professor & PG coordinator</p></td>
                  <td><p>Member (Expert - Academics)</p></td>
                  <td><a href="mailto:krishnaraja@kletech.ac.in" className="tl-def-btn-2">krishnaraja@kletech.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>+91 9886596953</p>
                    </td>
                    <td><p>3.12-2(iii)</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Mr. S. M. Ingale,<br/>Mechanical Engg.,<br/>A-Block, SGU Campus</p></td>
                  <td><p>Associate Prof.</p></td>
                  <td><p>Member</p></td>
                  <td><a href="mailto:sanjaykumar.ingale@sanjayghodawatunivesanja.ac.in" className="tl-def-btn-2">sanjaykumar.ingale@sanjayghodawatunivesanja.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  <p>+91 9272362247</p>
                    </td>
                    <td><p>3.12-2(iii)</p></td>
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

export default MechanicalDeptBOS;
