"use client";
import React from "react";
import Table from "react-bootstrap/Table";

function EqualOpportunityCell() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
             <div className="d-flex justify-content-center mb-50"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Equal Opportunity Cell</h2></div>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>Sr.No</p></th>
                  <th><p>Name</p></th>
                  <th><p>Designation</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td><p>1</p> </td>
                    <td><p>Dr. U. P. Jadhav</p></td>
                    <td><p>Chairperson</p></td>
                </tr>

                <tr>
                    <td><p>2</p> </td>
                    <td><p>Dr. S. T. Kumbhar</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>3</p> </td>
                    <td><p>Mr. B.B. Pujari</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>4</p> </td>
                    <td><p>Mrs. S. C. Deshmukh</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>5</p> </td>
                    <td><p>Mrs. V. S. Khot</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>6</p> </td>
                    <td><p>Mr. S.S. Lamb</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>7</p> </td>
                    <td><p>Mr. Mahesh Patwardhan</p></td>
                    <td><p>Member Secretary</p></td>
                </tr>
            </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EqualOpportunityCell;
