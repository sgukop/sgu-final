"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function PharmacyDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Pharmacy" subMenu={NavLinks} />
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
                    <th><p>Sr.No</p></th>
                    <th><p>Name of the Member</p></th>
                    <th><p>Committee Designation</p></th>
                    <th><p>As per statute No.</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Subhash T. Kumbhar</p></td>
                  <td><p>Chairman</p></td>
                  <td><p>24.2 (I & ii)</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Jiwan P. Lavande</p></td>
                  <td><p>Member</p></td>
                  <td><p>24.2 (ii)</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. Vidyarani S. Khot</p></td>
                  <td><p>Member</p></td>
                  <td><p>24.2 (ii)</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Mrs. Pranoti M. Patil</p></td>
                  <td><p>Member</p></td>
                  <td><p>24.2 (ii)</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Mrs. Sangita A. Kumbhar</p></td>
                  <td><p>Member</p></td>
                  <td><p>24.2 (ii)</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Dr. Namdeo R. Jadhav</p></td>
                  <td><p>Expert Member (Academics)</p></td>
                  <td><p>24.2 (iii)</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Mr. Shailesh V. Biradar</p></td>
                  <td><p>Expert Member (Industry)</p></td>
                  <td><p>24.2 (iii)</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Dr. Vijay A. Jagtap</p></td>
                  <td><p>Expert Member (Research & Academics)</p></td>
                  <td><p>24.2 (iii)</p></td>
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

export default PharmacyDeptBOS;
