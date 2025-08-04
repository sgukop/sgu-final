"use client";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

function CommerceDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Commerce" subMenu={NavLinks} />
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
                  <th><p className="text-[#4f70b6]">Name of the Person</p></th>
                  <th><p className="text-[#4f70b6]">Designation and Affiliation</p></th>
                  <th><p className="text-[#4f70b6]">Role</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>Dr. R.L. Deshpande</p></td>
                  <td><p>Head, Department of Commerce, <br/> School of Commerce and Management</p></td>
                  <td><p>Chairperson</p></td>
                </tr>

                <tr>
                  <td><p>Dr. Devendra N Vyas</p></td>
                  <td><p>Professor, Department of Commerce G.S. Sci., <br/> Arts & Commerce College Khamgaon.</p></td>
                  <td><p>External Academic Expert</p></td>
                </tr>

                <tr>
                  <td><p>CA. Prity Pachore</p></td>
                  <td><p>Chartered Accountant, Kolhapur, Maharashtra</p></td>
                  <td><p>External Professional Practitioner</p></td>
                </tr>

                <tr>
                  <td><p>CMA. Dr. Anil GunderaoAnikhindi</p></td>
                  <td><p>Chartered Accountant, A. G. Anikhindi & Co, <br/> Qualified Insolvency Resolution Professional. <br/> Authorized Consumer Representative, <br/> Maharashtra Electricity Regulatory Commission. Govt.of Maharashtra.</p></td>
                  <td><p>External Professional Practitioner</p></td>
                </tr>

                <tr>
                  <td><p>Sachin Kumbhoje</p></td>
                  <td><p>Co-Founder & CEO, OpEx Accelerator Pvt. Ltd. | StartUp Coach & Public Speaker. <br/> Mo. 88063 42656</p></td>
                  <td><p>Industry Expert</p></td>
                </tr>

                <tr>
                  <td><p>Arjun N. Patil</p></td>
                  <td><p>Assistant Professor, <br/> School of Commerce and Management</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>Vinayak R Gramopadhaye</p></td>
                  <td><p>Assistant Professor, <br/> School of Commerce and Management</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>Chetan R. Neman</p></td>
                  <td><p>Assistant Professor, <br/> School of Commerce and Management</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>Diksha R. Sharma</p></td>
                  <td><p>Assistant Professor, <br/> School of Commerce and Management</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>Vishal A. Patil</p></td>
                  <td><p>Assistant Professor,<br/>  School of Commerce and Management</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>Minakshi Chauthamahal</p></td>
                  <td><p>Assistant Professor, <br/>School of Commerce and Management</p></td>
                  <td><p>Member</p></td>
                </tr>

                <tr>
                  <td><p>Prasad Shishupal</p></td>
                  <td><p>Assistant Professor, <br/> School of Commerce and Management</p></td>
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

export default CommerceDeptBOS;
