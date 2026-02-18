"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function ClinicalDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <div className="governing-body">
          <div className="d-flex justify-content-center">
            <h2 className="tl-9-section-title mb-50">
              BOS Members List
            </h2>
          </div>
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
                      <th>Sr. No.</th>
                      <th>Name of Members</th>
                      <th>Designation</th>
                      <th>Mobile Number</th>
                      <th>E-mail ID</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>01</td>
                      <td>Dr. Vidyarani Sujitkumar Khot</td>
                      <td>Chairman</td>
                      <td>9325264000</td>
                      <td>vidyarani.khot@py.sguk.ac.in</td>
                    </tr>

                    <tr>
                      <td>02</td>
                      <td>Dr. Subhash T. Kumbhar</td>
                      <td>Member</td>
                      <td>9730292280</td>
                      <td>director@ph.sguk.ac.in</td>
                    </tr>

                    <tr>
                      <td>03</td>
                      <td>Dr. Anand D. Sawant</td>
                      <td>Member</td>
                      <td>9028466507</td>
                      <td>anand.sawant@ch.sguk.ac.in</td>
                    </tr>

                    <tr>
                      <td>04</td>
                      <td>Dr. Namita Rathod</td>
                      <td>External Member (Industry)</td>
                      <td>8275895424</td>
                      <td>namita@bics.world</td>
                    </tr>

                    <tr>
                      <td>05</td>
                      <td>Dr. Jiwan P. Lavande</td>
                      <td>Member</td>
                      <td>8668348181</td>
                      <td>jiwan.lavande@py.sguk.ac.in</td>
                    </tr>

                    <tr>
                      <td>06</td>
                      <td>Ms. Gayatri Angadi</td>
                      <td>Member</td>
                      <td>9156966075</td>
                      <td>gayatri.angadi@cr.sguk.ac.in</td>
                    </tr>

                    <tr>
                      <td>07</td>
                      <td>Ms. Payal Khape</td>
                      <td>Member</td>
                      <td>7498989392</td>
                      <td>payal.khape@cr.sguk.ac.in</td>
                    </tr>

                    <tr>
                      <td>08</td>
                      <td>Mr. Sayyad Irfan</td>
                      <td>Member</td>
                      <td>8669276227</td>
                      <td>irfan.sayyad@py.sguk.ac.in</td>
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

export default ClinicalDeptBOS;
