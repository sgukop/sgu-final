"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

function GeographyDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Geography" subMenu={NavLinks} />
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
                  <th><p className="text-[#4f70b6]">Name of the members</p></th>
                  <th><p className="text-[#4f70b6]">Post / Category</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. U.P. Jadhav</p></td>
                  <td><p>Dean FOHSS.</p></td>
                  <td><p>Chairman</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr.K.P. Patil</p></td>
                  <td><p>DC.BA.SGU.</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr.M.V. Jadhav</p></td>
                  <td><p>HOD Department of History, Yashwantrao Chavan Mahavidyalaya, Halkani.</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr.N. S Mashal</p></td>
                  <td><p>HOD Department of Geography, R.B.M Mahavidyalaya Chandgad.</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Dr.A.S. Shelke</p></td>
                  <td><p>Department of political science Hon.Shri Annasaheb Dange Arts, Commerce & Science College Hatkanangale.</p></td>
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

export default GeographyDeptBOS;
