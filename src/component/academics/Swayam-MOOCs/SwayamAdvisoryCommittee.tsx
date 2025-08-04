"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function SwayamAdvisoryCommittee() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
                <div className="d-flex justify-content-center mb-50"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto">SWAYAM Advisory Committee</h2></div>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">No</p></th>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                  <th><p className="text-[#4f70b6]">Designation</p></th>
                  <th><p className="text-[#4f70b6]">Position</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td><p>1</p></td>
                    <td><p>Dr. Udhav Bhosle</p></td>
                    <td><p>Vice Chancellor</p></td>
                    <td><p>Chairperson</p></td>
                </tr>

                <tr>
                    <td><p>2</p></td>
                    <td><p>Dr. V. V. Kulkarni</p></td>
                    <td><p>Dean, FST</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>3</p></td>
                    <td><p>Dr. A. D. Sawant</p></td>
                    <td><p>Asso.Dean</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>4</p></td>
                    <td><p>Dr. Balgaonkar</p></td>
                    <td><p>Asso. Prof. Dept. of Management</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>5</p></td>
                    <td><p>Mr. N. V. Sabnis</p></td>
                    <td><p>Asso. Prof. Mechanical Engg.</p></td>
                    <td><p>Nodal officer</p></td>
                </tr>

                <tr>
                    <td><p></p></td>
                    <td><p className="text-[#4f70b6]"><strong>SWAYAM  Coordinators</strong></p></td>
                    <td><p className="text-[#4f70b6]"><strong>Department</strong></p></td>
                    <td><p></p></td>
                </tr>

                <tr>
                    <td><p>6</p></td>
                    <td><p>Mr. Syed  Habeeb</p></td>
                    <td><p>Aerospace Engineering</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>7</p></td>
                    <td><p>Mr. Nitish Patil</p></td>
                    <td><p>Civil Engineering</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>8</p></td>
                    <td><p>Mr. Anand Kumbhar</p></td>
                    <td><p>Electrical Engineering</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>9</p></td>
                    <td><p>Dr. Patil Abhijit</p></td>
                    <td><p>Mechanical Engineering</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>10</p></td>
                    <td><p>Ms. Aishwarya M. P</p></td>
                    <td><p>Artificial Intelligence & Machine Learning</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>11</p></td>
                    <td><p>Ms. Srushti Patil</p></td>
                    <td><p>Computer Science and Eng.</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>12</p></td>
                    <td><p>Ms. Swati  Patil</p></td>
                    <td><p>Computer Application</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>13</p></td>
                    <td><p>Ms. Monika Chavan</p></td>
                    <td><p>School of Physical and Chemical Sciences</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>14</p></td>
                    <td><p>Ms. Minakshi Chauthamahal</p></td>
                    <td><p>School of Commerce and Management</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>15</p></td>
                    <td><p>Ms. Sharvari Madhale</p></td>
                    <td><p>School of Media</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>16</p></td>
                    <td><p>Ms. Deepali Suryavanshi</p></td>
                    <td><p>School of Pharmaceutical Sciences</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>17</p></td>
                    <td><p>Mrs. Jyoti Waykule</p></td>
                    <td><p>Electronics and Communication Eng.</p></td>
                    <td><p>Member</p></td>
                </tr>
                <tr>
                    <td><p>18</p></td>
                    <td><p>Ms. Rasika Kandale</p></td>
                    <td><p>School of Design</p></td>
                    <td><p>Member</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwayamAdvisoryCommittee;
