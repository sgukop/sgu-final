"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function CivilDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-100">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row mt-10">
          <div className="col-lg-12">
            

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name Of The Member</p></th>
                  <th><p className="text-[#4f70b6]">Post/ Category</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Sachin P. Patil</p></td>
                  <td><p>Associate prof and Head, <br/> Department of Civil Engineering, SGU. </p></td>
                  <td><p>Chairman</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Dhanaraj M Patil</p></td>
                  <td><p>Associate Professor and Head of Department, <br/> Department of Civil Engineering, TKIET, Warananagar</p></td>
                  <td><p>External Member (Academic Expert)</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr Sharanappagouda Kadabinakatti</p></td>
                  <td><p>Assistant Professor, <br/> Manipal Institute of Technology, MAHE, India</p></td>
                  <td><p>External Member</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Mr V G Khurd</p></td>
                  <td><p>Proprietor, <br/> Anand Consultants, Kolhapur.</p></td>
                  <td><p>External Member (Industry Expert)</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Dr. N. K. Patil</p></td>
                  <td><p>Professor, <br/> Department of Civil Engineering, SGU.</p></td>
                  <td><p>Member (Structural Engineering)</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Ms A S Manjarekar</p></td>
                  <td><p>Assistant Professor, <br/> Department of Civil Engineering, SGU.</p></td>
                  <td><p>Construction Management</p></td>
                </tr>
                
                <tr>
                   <td><p>7</p></td>
                  <td><p>Prof. N.M. Patil</p></td>
                  <td><p>Assistant Professor, <br/> Department of Civil Engineering, SGU.</p></td>
                  <td><p>Member (Construction Managent)</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Mr. S. B. Kore</p></td>
                  <td><p>Assistant Professor, <br/> Department of Civil Engineering, SGU.</p></td>
                  <td><p>Member (Construction Managent)</p></td>
                </tr>
                <tr>
                  <td><p>9</p></td>
                  <td><p>MS. P.P.Mahajan</p></td>
                  <td><p>Assistant Professor, <br/> Department of Civil Engineering, SGU.</p></td>
                  <td><p>Member (Structural Engineering)</p></td>
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

export default CivilDeptBOS;
