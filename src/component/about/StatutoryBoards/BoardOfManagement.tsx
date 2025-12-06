"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfManagement() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
            <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Board of Management</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">(As per section 22(1) of Maharashtra ACT No. XL OF 2017)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>SECTION</p></th>
                </tr>
              </thead>

              <tbody>

                {/* 1 */}
                <tr>
                  <td><p>Dr. Udhav Bhosle</p></td>
                  <td>
                    <p>Vice-Chancellor,</p>
                    <p>Sanjay Ghodawat University, Kolhapur</p>
                  </td>
                  <td><p>Chairperson</p></td>
                  <td><p>22 (1) a</p></td>
                </tr>

                {/* 2 */}
                <tr>
                  <td><p>Mr. Shrenik S. Ghodawat</p></td>
                  <td>
                    <p>Secretary,</p>
                    <p>Sou. Sushila Danchand Ghodawat Charitable Trust, Jaysingpur</p>
                  </td>
                  <td><p>Member (Nominated by sponsoring body)</p></td>
                  <td><p>22 (1) b</p></td>
                </tr>

                {/* 3 */}
                <tr>
                  <td><p>Mr. Vinayak V. Bhosale</p></td>
                  <td>
                    <p>Trustee,</p>
                    <p>Sou. Sushila Danchand Ghodawat Charitable Trust, Jaysingpur</p>
                  </td>
                  <td><p>Member (Nominated by sponsoring body)</p></td>
                  <td><p>22 (1) b</p></td>
                </tr>

                
                {/* 5 */}
                <tr>
                  <td><p>Dr. Vivek V. Kulkarni</p></td>
                  <td>
                    <p>Dean, Faculty of Science & Technology</p>
                  </td>
                  <td><p>Member (Dean of Faculty – Nominated by Hon. V.C)</p></td>
                  <td><p>22 (1) c</p></td>
                </tr>
                {/* 4 */}
                <tr>
                  <td><p>Dr. S. Gomathi</p></td>
                  <td>
                    <p>Dean, Faculty of Commerce & Management</p>
                  </td>
                  <td><p>Member (Dean of Faculty – Nominated by Hon. V.C)</p></td>
                  <td><p>22 (1) c</p></td>
                </tr>
                {/* 7 */}
                <tr>
                  <td><p>Dr. Ganpati D. Yadav</p></td>
                  <td>
                    <p>Vice-Chancellor (Former), ICT Mumbai</p>
                  </td>
                  <td><p>Member (Nominated by sponsoring body)</p></td>
                  <td><p>22 (1) d</p></td>
                </tr>

                {/* 6 */}
                <tr>
                  <td><p>Dr. Bhagwan M. Hirdekar</p></td>
                  <td>
                    <p>Ex-Registrar, SGU</p>
                    <p>Educationist</p>
                  </td>
                  <td><p>Member (Nominated by sponsoring body)</p></td>
                  <td><p>22 (1) d</p></td>
                </tr>

                {/* 9 */}
                <tr>
                  <td><p>Mr. Sangram V. Patil</p></td>
                  <td>
                    <p>M/s Marvelous Engineers Pvt. Ltd., Kolhapur</p>
                    <p>Industrialist</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>22 (1) d</p></td>
                </tr>

                {/* 8 */}
                <tr>
                  <td><p>Dr. N. J. Pawar</p></td>
                  <td>
                    <p>Former Vice-Chancellor, Shivaji University, Kolhapur</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p>22 (1) d</p></td>
                </tr>

                

                {/* 10 */}
                <tr>
                  <td><p>Dr. Revati L. Deshpande</p></td>
                  <td>
                    <p>Director, Quality and Compliance</p>
                  
                  </td>
                  <td><p>Member (Nominated by sponsoring body)</p></td>
                  <td><p>22 (1) d</p></td>
                </tr>

                {/* 11 */}
                <tr>
                  <td><p>Dr. Uttam Jadhav</p></td>
                  <td>
                    <p>I/C Dean, Faculty of Humanities And Social Science</p>
                  </td>
                  <td><p>Member (Teacher nominated by sponsoring body)</p></td> 
                  <td><p>22 (1) e</p></td>
                </tr>

                {/* 12 */}
                <tr>
                  <td><p>Dr. Vilas Balgoankar</p></td>
                  <td>
                    <p>HoD  Department of Commerce & Management</p>
                  </td>
                  <td><p>Member (Teacher nominated by sponsoring body)</p></td>
                  <td><p>22 (1) e</p></td>
                </tr>
                 {/* 14 */}
                <tr>
                  <td><p>Dr. Shamala Mahadik</p></td>
                  <td>
                    <p>Professor in Electronics & Communication Engineering</p>
                  </td>
                 <td><p>Member (Teacher nominated by sponsoring body)</p></td>
                  <td></td>
                </tr>

                {/* 13 */}
                <tr>
                  <td><p>Dr. N. K. Patil</p></td>
                  <td>
                    <p>Controller of Examinations</p>
                  </td>
                <td><p>Invitee</p></td>
                  <td><p>22 (1) e</p></td>
                </tr>

               

                {/* 15 */}
                <tr>
                  <td><p>Mr. Prakash A. Desai</p></td>
                  <td>
                    <p>Chief Finance and Accounts Officer</p>
                  </td>
                  <td><p>Invitee</p></td>
                  <td></td>
                </tr>

                {/* 16 */}
                <tr>
                  <td><p>Dr. Vivek M. Kayande</p></td>
                  <td>
                    <p>Registrar, Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member Secretary</p></td>
                  <td><p>16 (3)</p></td>
                </tr>

              </tbody>
            </Table>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfManagement;
