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
                    <td><p>Prof. Dr.V. V. Kulkarni</p></td>
                    <td><p>Dean,</p>
                      <p>Faculty of Science & Technology Director </p>
              
                  </td>
                    <td> <a href="mailto:dean@fst.sguk.ac.in" className="table-link">dean@fst.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                <tr>
                    <td><p>Dr.S. Gomathi</p></td>
                    <td><p>Dean,</p>
                      <p>Faculty of Commerce & Management,</p>
                      </td>
                    <td> <a href="mailto:dean.cm@sanjayghodawatuniversity.ac.in" className="table-link">dean@fcm.sguk.ac.in <i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                <tr>
                    <td><p>Dr. U. P.Jadhav</p> </td>
                    <td><p>I/C Dean,</p>
                      <p>Faculty of Humanities & Social Science </p>
                  </td>
                    <td> <a href="dean@fhs.sguk.ac.in" className="table-link">dean@fhs.sguk.ac.in<i className="fa-regular fa-arrow-right"></i></a></td>
                </tr>

                
                <tr>
                    <td><p>Dr. A.D.Sawant</p>  </td>
                    <td><p>Associate Dean,</p>
                      <p>Physical & Chemical Science</p>
                  </td>
                    <td> <a href="anand.sawant@ch.sguk.ac.in" className="table-link">anand.sawant@ch.sguk.ac.in<i className="fa-regular fa-arrow-right"></i></a></td>
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
