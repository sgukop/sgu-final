"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfResearch() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center mb-12">
                <h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
                  Board of Research
                </h2>
              </div>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th className="text-center"><p className="m-0 font-bold">SR. NO.</p></th>
                  <th><p className="m-0 font-bold">NAME OF THE MEMBER</p></th>
                  <th><p className="m-0 font-bold">POST/CATEGORY</p></th>
                  <th><p className="m-0 font-bold">DESIGNATION</p></th>
                  <th><p className="m-0 font-bold">SECTION</p></th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className="text-center"><p className="m-0">1</p></td>
                  <td>
                    <p>Prof. Dr. Udhav Bhosle</p> 
                  </td>
                  <td>
                    <p>Vice-Chancellor,</p>
                   </td>
                  <td><p>Chairman</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="text-center"><p className="m-0">2</p></td>
                  <td>
                    <p>Prof. Dr. V .V. Kulkarni</p> 
                  </td>
                  <td>
                    <p>Dean,</p>
                    <p>Faculty of Science & Technology Director</p>
                   
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 3 */}
                <tr>
                  <td className="text-center"><p className="m-0">3</p></td>
                  <td>
                    <p>Dr. A. D. Sawant</p> 
                  </td>
                  <td>
                    <p>Associate Dean, Science</p>
                   
                 
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 4 */}
                <tr>
                  <td className="text-center"><p className="m-0">4</p></td>
                  <td>
                    <p>Dr.S. Gomathi</p> 
                  </td>
                  <td>
                    <p>Dean,</p>
                    <p>Faculty of Commerce & Management,</p>
                  
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

             
                {/* Row 6 */}
                <tr>
                  <td className="text-center"><p className="m-0">6</p></td>
                  <td>
                    <p>Dr. U. P. Jadhav</p> 
                  </td>
                  <td>
                    <p>I/C Dean,</p>
                    <p>Faculty of Humanities & Social Science </p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Separator Heading Row */}
                <tr>
                  <td className="text-center"><p className="m-0 font-bold">-</p></td>
                  <td colSpan={4}><p className="text-center font-bold m-0">Four Eminent Scholars</p></td>
                </tr>

                {/* Row 7 */}
                <tr>
                  <td className="text-center"><p className="m-0">7</p></td>
                  <td><p className="text-center">Mr. Sangram Patil</p></td>
                  <td></td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 8 */}
                <tr>
                  <td className="text-center"><p className="m-0">8</p></td>
                  <td><p className="text-center">Prof. Dr. C. D. Lokhande</p></td>
                  <td></td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 9 */}
                <tr>
                  <td className="text-center"><p className="m-0">9</p></td>
                  <td><p className="text-center">Dr. P. P. Wadgaonkar</p></td>
                  <td></td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 10 */}
                <tr>
                  <td className="text-center"><p className="m-0">10</p></td>
                  <td><p className="text-center">Dr. Sandeep Shiyekar</p></td>
                  <td></td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 11 */}
                <tr>
                  <td className="text-center"><p className="m-0">11</p></td>
                  <td><p className="text-center">Dr. Srinivasan Iyengar (Management)</p></td>
                  <td></td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 12 */}
                <tr>
                  <td className="text-center"><p className="m-0">12</p></td>
                  <td><p className="text-center">Dr. Shirish Ambavdekar (Pharmacy)</p></td>
                  <td></td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 13 */}
                <tr>
                  <td className="text-center"><p className="m-0">13</p></td>
                  <td><p>(Law)</p></td>
                  <td></td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 14 */}
                <tr>
                  <td className="text-center"><p className="m-0">14</p></td>
                  <td><p></p></td>
                  <td>(Social Sciences)</td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
                </tr>

                {/* Row 15 */}
                <tr>
                  <td className="text-center"><p className="m-0">15</p></td>
                  <td><p></p></td>
                  <td>Director (Innovation, Incubation and Research)</td>
                  <td><p>Member Secretary</p></td>
                  <td><p></p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfResearch;