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
                    <th><p className="text-[#4f70b6]">Mail ID</p></th>
                </tr>
              </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dr. Chetan S. Arage</td>
                        <td>Associate Professor and HOD, Dept of CA</td>
                        <td>Chairman</td>
                        <td>chetan.arage@ca.sguk.ac.in </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Dr. Shivanand S. Gornale</td>
                        <td>Professor</td>
                        <td>Member (Expert Academician)</td>
                        <td>shivanand_gornale@yahoo.com </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Mr. Amol Jadhav</td>
                        <td>Project Manager</td>
                        <td>Member (Expert Industry)</td>
                        <td>jadhavdeveloper@gmail.com </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Dr. Hiren Jaytilal Dand</td>
                        <td>Professor</td>
                        <td>Member (Expert Academician)</td>
                        <td>hirendand@gmail.com </td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>Mr. Jyoti A. Chavan</td>
                        <td>Assistant Professor</td>
                        <td>Coordinator</td>
                        <td>jyoti.chavan@ca.sguk.ac.in </td>
                      </tr>

                      <tr>
                        <td>6</td>
                        <td>Mrs. Swati A. Patil</td>
                        <td>Assistant Professor</td>
                        <td>Member</td>
                        <td>swati.patil@ca.sguk.ac.in </td>
                      </tr>

                      <tr>
                        <td>7</td>
                        <td>Ms. Asavari Patil</td>
                        <td>Assistant Professor</td>
                        <td>Member</td>
                        <td>asavari.patil@ca.sguk.ac.in</td>
                      </tr>

                      <tr>
                        <td>8</td>
                        <td>Mrs. Usha Bubane</td>
                        <td>Assistant Professor</td>
                        <td>Member</td>
                        <td>usha.bubane@ca.sguk.ac.in </td>
                      </tr>

                      <tr>
                        <td>9</td>
                        <td>Mr. Shridhar Vanjire</td>
                        <td>Assistant Professor</td>
                        <td>Member</td>
                        <td>shridhar.vanjire@ca.sguk.ac.in</td>
                      </tr>

                      <tr>
                        <td>10</td>
                        <td>Mrs. Supriya Sawant</td>
                        <td>Assistant Professor</td>
                        <td>Member</td>
                        <td>supriya.sawant@ca.sguk.ac.in </td>
                      </tr>

                      <tr>
                        <td>11</td>
                        <td>Ms. Muskan Shaikh</td>
                        <td>Alumni</td>
                        <td>Member</td>
                        <td></td>
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
