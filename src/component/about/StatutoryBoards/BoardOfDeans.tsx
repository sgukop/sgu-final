"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfDeans() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center mb-50"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Board Of Deans</h2></div>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>EMAIL</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td><p>Prof. Dr.V. V. Kulkarni</p><p>SGU Campus, Atigre</p></td>
                    <td><p>Dean,</p>
                      <p>Faculty of Science & Technology Director (Add. Charge)-School of Design,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                    <td> <a href="mailto:dean.st@sanjayghodawatuniversity.ac.in" className="table-link">dean.st@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                <tr>
                    <td><p>Dr. Y. L.Giri</p><p>SGU Campus, Atigre</p></td>
                    <td><p>Dean,</p>
                      <p>Faculty of Management & Chairman, <br/> BOS & Director -Commerce & Management,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                    <td> <a href="mailto:dean.cm@sanjayghodawatuniversity.ac.in" className="table-link">dean.cm@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                <tr>
                    <td><p>Dr. U. P.Jadhav</p> <p>C-Block, SGU Campus, Atigre.</p></td>
                    <td><p>I/C Dean,</p>
                      <p>Faculty of Humanities & Social Science & BOS Chairman of Faculty of Liberal Arts. <br/> Director-Knowledge Resource Center Director-School of Social Sciences</p>
                  </td>
                    <td> <a href="uttam.jadhav@sanjayghodawatuniversity.ac.in" className="table-link">uttam.jadhav@sanjayghodawatuniversity.ac.in<i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                <tr>
                    <td><p>Mr. S. M. Ingale</p> <p>Sanjay Ghodawat University, Kolhapur - 416118</p></td>
                    <td><p>I/C Dean,</p>
                      <p>Faculty of Interdisciplinary</p>
                    </td>
                    <td> <a href="mailto:dean.is@sanjayghodawatuniversity.ac.in" className="table-link">dean.is@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>
                <tr>
                    <td><p>Dr. A.D.Sawant</p>  <p>Department of Chemistry. Sanjay Ghodawat University, Kolhapur - 416118</p></td>
                    <td><p>Associate Dean,</p>
                      <p>Physical & Chemical Science</p>
                  </td>
                    <td> <a href="anand.sawant@sanjayghodawatuniversity.ac.in" className="table-link">anand.sawant@sanjayghodawatuniversity.ac.in<i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>
	          </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfDeans;
