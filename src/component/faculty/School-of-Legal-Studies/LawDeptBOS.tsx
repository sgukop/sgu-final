"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

function LawDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-2-section-title">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="School of Legal Studies(Law)" subMenu={NavLinks} />
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
                  <th><p className="text-[#4f70b6]">Names of the Member</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                  <th><p className="text-[#4f70b6]">SGU statutes</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Adv.Dr. Anjali S.Patil</p></td>
                  <td><p>Chairperson</p></td>
                  <td><p>U/S-24 (02) (i)</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Hon. Suhasrao .S. Jagatap</p></td>
                  <td><p>Member (Industry)</p></td>
                  <td><p>U/S-24 (02) (ii)</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Prof. Uday V. Sawant</p></td>
                  <td><p>Member </p></td>
                  <td><p>U/S-24 (02) (iii)</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Prof. Narendra S. Shinde</p></td>
                  <td><p>Member (Academia)</p></td>
                  <td><p>U/S-24 (02) (iii)</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Dr. Shubhangi S. Jagtap</p></td>
                  <td><p>Member (Academia)</p></td>
                  <td><p>U/S-24 (02) (iii)</p></td>
                </tr>
                 <tr>
                  <td><p>6</p></td>
                  <td><p>Dr. Ashish G. Barve</p></td>
                  <td><p>Member (Academia)</p></td>
                  <td><p>U/S-24 (02) (iii)</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Dr. Rajesh B. Deshmukh</p></td>
                  <td><p>Member (Academia)</p></td>
                  <td><p>U/S-24 (02) (iii)</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Adv. Suhas J.Patil</p></td>
                  <td><p>Member (Industry)</p></td>
                  <td><p>U/S-24 (02) (iii)</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Adv. Vandana Bhosale</p></td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                <tr>
                  <td><p>10</p></td>
                  <td><p>Mr. Niraj Apte</p></td>
                  <td><p>Member  </p></td>
                  <td><p></p></td>
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

export default LawDeptBOS;
