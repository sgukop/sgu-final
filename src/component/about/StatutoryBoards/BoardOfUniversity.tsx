"use client";

import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfUniversity() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center">
                <h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
                  Board of University Teaching and Research
                </h2>
              </div>
              <span className="dark-mode-white-color mt-2 mb-12 block">
                (As per statute 26)
              </span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th className="text-center"><p className="m-0 font-bold">SR. NO.</p></th>
                  <th><p className="m-0 font-bold">NAME OF THE MEMBER</p></th>
                  <th><p className="m-0 font-bold">POST / FACULTY</p></th>
                  <th><p className="m-0 font-bold">DESIGNATION</p></th>
                  <th><p className="m-0 font-bold">STATUTE NO.</p></th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className="text-center"><p className="m-0">1</p></td>
                  <td>
                    <p className="font-bold m-0">Prof. Dr. Udhav Bhosle</p>
                  </td>
                  <td>
                    <p className="m-0">Vice-Chancellor</p>
                  </td>
                  <td><p className="m-0">Chairman</p></td>
                  <td><p className="m-0">26(i)</p></td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="text-center"><p className="m-0">2</p></td>
                  <td>
                    <p className="font-bold m-0">Prof. Dr. V. V. Kulkarni</p>
                  </td>
                  <td>
                    <p className="m-0">Dean, Faculty of Science & Technology</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(ii)</p></td>
                </tr>

                {/* Row 3 */}
                <tr>
                  <td className="text-center"><p className="m-0">3</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. S. Gomathi</p>
                  </td>
                  <td>
                    <p className="m-0">Dean, Faculty of Management & Chairman, BOS</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(ii)</p></td>
                </tr>

                {/* Row 4 */}
                <tr>
                  <td className="text-center"><p className="m-0">4</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. U. P. Jadhav</p>
                  </td>
                  <td>
                    <p className="m-0">I/C Dean, Faculty of Humanities & Social Sciences</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(ii)</p></td>
                </tr>

                {/* Row 5 */}
                <tr>
                  <td className="text-center"><p className="m-0">5</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. A. D. Sawant</p>
                  </td>
                  <td>
                    <p className="m-0">Associate Dean Sciences</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(ii)</p></td>
                </tr>

                {/* Row 6 */}
                <tr>
                  <td className="text-center"><p className="m-0">6</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Sachin Patil</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Civil Engineering</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(ii)</p></td>
                </tr>

                {/* Row 7 */}
                <tr>
                  <td className="text-center"><p className="m-0">7</p></td>
                  <td>
                    <p className="font-bold m-0">Mr. S. Sulthan</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Aeronautical Engineering</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 8 */}
                <tr>
                  <td className="text-center"><p className="m-0">8</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Swapnil Manohar Hirikude</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Electrical & Electronics Engineering</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 9 */}
                <tr>
                  <td className="text-center"><p className="m-0">9</p></td>
                  <td>
                    <p className="font-bold m-0">Mr. Dhawan Ajay Prabhakar</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Mechanical Engineering</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 10 */}
                <tr>
                  <td className="text-center"><p className="m-0">10</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Deepika Patil</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Computer Science Engineering</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 11 */}
                <tr>
                  <td className="text-center"><p className="m-0">11</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Santaji Shinde</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Artificial Intelligence and Machine Learning</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 12 */}
                <tr>
                  <td className="text-center"><p className="m-0">12</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Chetan Arage</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Computer Application</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 13 */}
                <tr>
                  <td className="text-center"><p className="m-0">13</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. S. M. Pawar</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Physics</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(v)</p></td>
                </tr>

                {/* Row 14 */}
                <tr>
                  <td className="text-center"><p className="m-0">14</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. P. D. Bhange</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Chemical Sciences</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(v)</p></td>
                </tr>

                {/* Row 15 */}
                <tr>
                  <td className="text-center"><p className="m-0">15</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Subhash Trimbakrao Kumbhar</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, B. Pharmacy</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(ii)</p></td>
                </tr>

                {/* Row 16 */}
                <tr>
                  <td className="text-center"><p className="m-0">16</p></td>
                  <td>
                    <p className="font-bold m-0">Mrs. Khot Vidyarani S.</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, D. Pharmacy</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 17 */}
                <tr>
                  <td className="text-center"><p className="m-0">17</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Vilas Balgaonkar</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Management</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 18 */}
                <tr>
                  <td className="text-center"><p className="m-0">18</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Revati Deshpande</p>
                  </td>
                  <td>
                    <p className="m-0">Head of Department, Commerce</p>
                  </td>
                  <td><p className="m-0">Member</p></td>
                  <td><p className="m-0">26(iii)</p></td>
                </tr>

                {/* Row 19 */}
                <tr>
                  <td className="text-center"><p className="m-0">19</p></td>
                  <td>
                    <p className="font-bold m-0">Dr. Vivek M. Kayande</p>
                  </td>
                  <td>
                    <p className="m-0">Registrar</p>
                  </td>
                  <td><p className="m-0">Member Secretary</p></td>
                  <td><p className="m-0">26(vi)</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfUniversity;