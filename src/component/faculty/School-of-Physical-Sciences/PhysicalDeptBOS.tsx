"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

function PhysicalDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Board of Studies in Physics</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Physics" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
            <p className="dark-mode-white-color my-4">The Board of Studies (BoS) is the body of academic system of the university. They are  responsible for framing the content of various courses, reviewing and updating the content from time to time , introducing new courses of study etc.</p>
          <div className="col-lg-12">
            

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                  <th><p className="text-[#4f70b6]">Faculty Name</p></th>
                  <th><p className="text-[#4f70b6]">Role</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Sambhaji M. Pawar</p></td>
                  <td><p>Chairman</p></td>
                  <td><p>Associate Professor & Head Department of Physics, <br/> Sanjay Ghodawat University, Kolhapur.</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Satish A. Mahadik</p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor Department of Physics, <br/> Sanjay Ghodawat University, Kolhapur.</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. Sarita P. Patil</p></td>
                  <td><p>Member</p></td>
                  <td><p>Associate Professor Department of Physics, <br/> Sanjay Ghodawat University, Kolhapur.</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Dr. Prashant B. Patil</p></td>
                  <td><p>Academic expert</p></td>
                  <td><p>Associate Professor Department of Physics  <br/> The New College, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Dr. Dada P. Nade</p></td>
                  <td><p>Research expert</p></td>
                  <td><p>Assistant Professor Department of Physics  <br/> Dr. Patangrao Kadam Mahavidyalaya, Sangli</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Dr. Prasanna P. Waichal</p></td>
                  <td><p>Industrial Expert</p></td>
                  <td><p>Waichal Research Institute, Ichalkaranji</p></td>
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

export default PhysicalDeptBOS;
