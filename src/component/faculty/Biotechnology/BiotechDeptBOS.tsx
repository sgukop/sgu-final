"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function BiotechDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Biotechnology" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <p className="dark-mode-white-color key-features-box">The Board of Studies (BoS) for the Department of Biotechnology is composed of esteemed academicians, industry professionals, and researchers dedicated to shaping industry-relevant curriculum. The BoS is committed to achieve academic excellence by integrating fundamental knowledge with cutting-edge advancements in biotechnology. Through regular curriculum updates, incorporation of emerging technologies the BoS ensures that our programs prepare students for impactful careers in biotechnology and related fields.
            </p>
            <Table striped bordered hover responsive className="governing-table mt-10">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name of the member</p></th>
                  <th><p className="text-[#4f70b6]">Post/ Category</p></th>
                  <th><p className="text-[#4f70b6]">Position</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Dr. Anand D. Sawant</p></td>
                  <td><p>Director, SOAHS, <br/> Sanjay Ghodawat University</p></td>
                  <td><p>Chairman</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr. Ajay S. Nalawade</p></td>
                  <td><p>Assistant Professor, <br/> Sanjay Ghodawat University</p></td>
                  <td><p>Secretary</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr. Monika Yadav</p></td>
                  <td><p>Assistant Professor, <br/> Sanjay Ghodawat University</p></td>
                  <td><p>Internal Member</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Prof. Jyoti P. Jadhav</p></td>
                  <td><p>Professor and Head, <br/> Department of Biochemistry, <br/> Department of Biotechnology,<br/>  Shivaji University, Kolhapur</p></td>
                  <td><p>External Member</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Dr. Mansingraj Nimbalkar</p></td>
                  <td><p>Assistant professor, <br/> Department of Botany, <br/> Shivaji University Kolhapur</p></td>
                  <td><p>External Member</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Dr. Suryakant S. Wadkar</p></td>
                  <td><p>Assistant Professor in Botany Co-ordinator Biotechnology and P.G Microbiology, <br/> Smt. Kasturbai Walchand College, Sangli </p></td>
                  <td><p>External Member</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Dr. Sunita Dhundiraj Lohare</p></td>
                  <td><p>Professor & Head Department of Botany, Shri HavagiSwami Collage, Udgir, Dist. Latur</p></td>
                  <td><p>External Member</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Prof. Gajanan B Zore</p></td>
                  <td><p>Professor <br/> Central University of Rajasthan</p></td>
                  <td><p>External Member</p></td>
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

export default BiotechDeptBOS;
