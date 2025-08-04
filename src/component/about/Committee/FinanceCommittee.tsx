"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function FinanceCommittee() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Finance Committee</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">As per Maharashtra Public Universities Act, 2016 (Mah.  Act No. VI of 2017)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>S.N.</p></th>
                  <th><p>NAME  OF THE MEMBER</p></th>
                  <th><p>POST/CATEGORY</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>STATUTE  NO</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td><p>1</p> </td>
                    <td><p>Prof. Dr. Udhav Bhosle</p></td>
                    <td><p>Vice-Chancellor, <br/> Sanjay Ghodawat University, Atigre</p></td>
                    <td><p>Chairperson</p></td>
                    <td><p>94 (2) (a)</p></td>
                </tr>

                <tr>
                    <td><p>2</p> </td>
                    <td><p>Mr. Vinayak V. Bhosale</p></td>
                    <td><p>Trustee,<br/>Sanjay Ghodawat University, Atigre</p></td>
                    <td><p>Member</p></td>
                    <td><p>94 (2) (d)</p></td>
                </tr>

                <tr>
                    <td><p>3</p> </td>
                    <td><p>Mr. Nandkumar R. Kabra</p></td>
                    <td><p>Chartered Accountant</p></td>
                    <td><p>Member</p></td>
                    <td><p>94 (2) (f)</p></td>
                </tr>

                <tr>
                    <td><p>4</p> </td>
                    <td><p>Mr. Mukesh S. Rohida</p></td>
                    <td><p>Chartered Accountant</p></td>
                    <td><p>Member</p></td>
                    <td><p>94 (2) (f)</p></td>
                </tr>

                <tr>
                    <td><p>5</p> </td>
                    <td><p>Mr. B. S. Patil</p></td>
                    <td><p>Ex. Finance & Account Officer, <br/> Shivaji University Kolhapur</p></td>
                    <td><p>Member</p></td>
                    <td><p>94 (2) (f)</p></td>
                </tr>

                <tr>
                    <td><p>6</p> </td>
                    <td><p>Dr. Vivek  M. Kayande</p></td>
                    <td><p>Registrar</p></td>
                    <td><p>Member</p></td>
                    <td><p>94 (2) (g)</p></td>
                </tr>

                <tr>
                    <td><p>7</p> </td>
                    <td><p>Mr. Prakash A. Desai</p></td>
                    <td><p>CFAO</p></td>
                    <td><p>Member Secretary</p></td>
                    <td><p>94 (2) (h)</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceCommittee;
