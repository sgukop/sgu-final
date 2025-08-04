"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function BCADeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Bachelor of Computer Applications" subMenu={NavLinks} />
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
                    <th><p className="text-[#4f70b6]">Name of Member</p></th>
                    <th><p className="text-[#4f70b6]">Designation</p></th>
                    <th><p className="text-[#4f70b6]">Position</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Chetan S.Arage</p></td>
                  <td><p>Associate Professor and HOD,Dept of CA</p></td>
                  <td><p>Chairman</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Shivanand S .Gornale</p></td>
                  <td><p>Professor</p></td>
                  <td><p>Member(Expert Academician)</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Mr. Amol Jadhav</p></td>
                  <td><p>Project Manager</p></td>
                  <td><p>Member(Expert Industry)</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr. Hiren Jaytilal Dand</p></td>
                  <td><p>Professor</p></td>
                  <td><p>Member(Expert Academician)</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Mrs. Swati A. Patil</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Ms. Jyoti A. Chavan</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Ms. Usha B. Bubane</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Mr. Prashant Mithari</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Mrs. Vidya S. Bhosale</p></td>
                  <td><p>Assistant Professor</p></td>
                  <td><p>Member</p></td>
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

export default BCADeptBOS;
