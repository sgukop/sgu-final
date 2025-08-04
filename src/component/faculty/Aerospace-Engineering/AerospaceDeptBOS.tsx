"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function AerospaceDeptBOS() {
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
                  <th><p className="text-[#4f70b6]">Name of Member</p></th>
                  <th><p className="text-[#4f70b6]">Role</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Mr.S.Sulthan</p></td>
                  <td><p>BOS Chairman</p></td>
                  <td><p>Head & Assistant Professor <br/> Department of Aerospace Engineering <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Dr.Jims Jhon Wissely</p></td>
                  <td><p>Academic Expert</p></td>
                  <td><p>Head & Associate Professor <br/> Department of Aerospace Engineering <br/> Karunya Institute of Technology and Science, Coimbatore</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Dr.N.Raja Murugu</p></td>
                  <td><p>Academic Expert</p></td>
                  <td><p>Associate Professor <br/> Department of Aerospace Engineering <br/> KCG College of Engineering and Technology, Chennai</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Mr.Vasudev Singh</p></td>
                  <td><p>Industrial Expert</p></td>
                  <td><p>Quality Manager <br/> Ghodawat Enterprises <br/>Majlae, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Dr.Muzeer.S</p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professo <br/> Department of Aerospace Engineering <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Mr.Syed Habeeb</p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor <br/> Department of Aerospace Engineering <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Mr.Mari Prabhu</p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor <br/> Department of Aerospace Engineering <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Mr.Vadivel Muthu</p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor <br/> Department of Aerospace Engineering <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Mr.Hardeep Zinta</p></td>
                  <td><p>Member</p></td>
                  <td><p>Assistant Professor <br/> Department of Aerospace Engineering <br/> Sanjay Ghodawat University, Kolhapur</p></td>
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

export default AerospaceDeptBOS;
