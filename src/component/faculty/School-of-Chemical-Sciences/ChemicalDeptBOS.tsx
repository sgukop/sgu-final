"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function ChemicalDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Chemistry" subMenu={NavLinks} />
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
                    <th><p className="text-[#4f70b6]">Position</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. P. P. Wadgaonkar </p></td>
                  <td><p>Emeritus Scientist <br/> CSIR-National Chemical Laboratory, Pune 411008, India.</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Prof. Dr. V. G. Anand</p></td>
                  <td><p>Professor IISER, Pune <br/> Dr. Homi Bhabha Road, Pune 411008</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Mr. Anand V. Potdar</p></td>
                  <td><p>Head- Quality Unichem Laboratories Limited <br/> Kagal, Kolhapur</p></td>
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

export default ChemicalDeptBOS
