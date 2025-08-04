"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../../Reusable-components/MenuList'

function FSTDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Allied Health Sciences" subMenu={NavLinks} />
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
                    <th><p className="text-[#4f70b6]"></p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Aanand Sawant </p></td>
                  <td><p>Chairman</p></td>
                  <td><p>Associate Professor in Chemistry and <br/> Director, School of Allied Health Sciences, <br/> Sanjay Ghodawat University,Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Ms. Vhaskoti Tejaswini </p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor, <br/> School of Allied Health Sciences, <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Mr. Kapil Ubarhande </p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor, <br/> School of Allied Health Sciences, <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Ms. Vishakha Deshpande  </p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor, <br/> School of Allied Health Sciences, <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Ms. Manasi Patil</p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor, <br/> School of Allied Health Sciences, <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Dr. Mousami Debnath</p></td>
                  <td><p>External Member</p></td>
                  <td><p>Associate Professor <br/> Department of Biosciences <br/> Manipal University, Jaipur</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Mr. Tippeswamy Papareddy</p></td>
                  <td><p>External Member</p></td>
                  <td><p>Sr. GM, Corporate Head-QA <br/> Ghodawat Consumer Ltd., Majale, Kolhapur.</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Dr. Padma Dandge</p></td>
                  <td><p>External Member</p></td>
                  <td><p>Associate Professor, <br/> Department of Biochemistry, <br/> Shivaji University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Dr. Abhijeet Gatade</p></td>
                  <td><p>External Member</p></td>
                  <td><p>Assistant Professor, <br/> Department of Food Science and Technology, <br/> Shivaji University, Kolhapur</p></td>
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

export default FSTDeptBOS;
