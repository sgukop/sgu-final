"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function IQACCommittee() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">IQAC Committee</h2></div>
              <span className="dark-mode-white-color mt-2 mb-12">IQAC of <strong>Sanjay Ghodawat University</strong> is constituted under the chairmanship of honorable Vice Chancellor with heads of different academic and administrative units and representatives from management, society and other stakeholders. Detailed member list for A.Y. 2023-24 is mentioned below-</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>Sr. No.</p></th>
                  <th><p>Name and Designation</p></th>
                  <th><p>Position</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td><p>1</p> </td>
                    <td><p>Prof. Dr. Uddhav Bhosle,<br/> Hon'ble Vice Chancellor</p></td>
                    <td><p>Chairman</p></td>
                </tr>

                <tr>
                    <td><p>2</p> </td>
                    <td><p>Mr. Vinayak Bhosale, <br/> Trustee, SSDGCT.</p></td>
                    <td><p>Management Representative</p></td>
                </tr>

                <tr>
                    <td><p>3</p> </td>
                    <td><p>Dr. Vivek M. Kayande., <br/> Registrar</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>4</p> </td>
                    <td><p>Dr. Vivek V. Kulkarni, <br/> Dean Faculty of Science & Technology.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>5</p> </td>
                    <td><p>Dr. N.K. Patil, <br/> Controller of Examination.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>6</p> </td>
                    <td><p>Dr. Giri Y. L, <br/> Dean Faculty of Commerce & Management.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>7</p> </td>
                    <td><p>Dr. Kumbhar Subhash Trimbakrao, <br/> Director School of Pharmaceutical Sciences.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>8</p> </td>
                    <td><p>Mr. Sanjaykumar Ingale, <br/> I/c Dean Faculty of Interdisciplinary studies.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>9</p> </td>
                    <td><p>Dr. Jadhav Uttam Pandurang, <br/> I/c Dean Faculty of Humanities & Social Sciences.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>10</p> </td>
                    <td><p>Dr. A D Sawant, <br/> Associate Dean Faculty of Science & Technology.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>11</p> </td>
                    <td><p>Mr. Desai Prakash Annasaheb, <br/> Chief Finance Officer.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>12</p> </td>
                    <td><p>Dr. Hirikude Swapnil M., <br/> Training & Placement Officer.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>13</p> </td>
                    <td><p>Mr. Salagare. S.S., <br/> Assistant Professor.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>14</p> </td>
                    <td><p>Mrs Vidyarani Khot., <br/> Assistant Professor.</p></td>
                    <td><p>Member</p></td>
                </tr>

                <tr>
                    <td><p>15</p> </td>
                    <td><p>Dr. Mahesh Kakade, <br/> Director Board of Examination & Evaluation SPPU Pune.</p></td>
                    <td><p>External Academic Expert</p></td>
                </tr>

                <tr>
                    <td><p>16</p> </td>
                    <td><p>Dr. Neeta Mane, <br/> Consultant ENT Surgeon & Ex-Mayor Jaysingpur.</p></td>
                    <td><p>Society Representative</p></td>
                </tr>

                <tr>
                    <td><p>17</p> </td>
                    <td><p>Mr. Sohan Shirgaokar, <br/> Industrialist.</p></td>
                    <td><p>Industry Expert</p></td>
                </tr>

                <tr>
                    <td><p>18</p> </td>
                    <td><p>Mr. Rajwardhan Jagdale, <br/> Industrialist.</p></td>
                    <td><p>Industry Expert</p></td>
                </tr>

                <tr>
                    <td><p>19</p> </td>
                    <td><p>Mr.Viraj Sunilkumar Sarnaik, <br/> Industrialist.</p></td>
                    <td><p>Industry Expert</p></td>
                </tr>

                <tr>
                    <td><p>20</p> </td>
                    <td><p>Dr. Raghavendra Kulkarni.</p></td>
                    <td><p>Parent Representative</p></td>
                </tr>

                <tr>
                    <td><p>21</p> </td>
                    <td><p>Mr. Khot Shivtej Shahaji</p></td>
                    <td><p>Student Representative</p></td>
                </tr>

                <tr>
                    <td><p>22</p> </td>
                    <td><p>Ms. Vishnavi Hirekodi</p></td>
                    <td><p>Alumni Representative</p></td>
                </tr>

                <tr>
                    <td><p>23</p> </td>
                    <td><p>Mr. Kishor Suryawanshi, <br/> Clerk</p></td>
                    <td><p>Administrative Staff Representative</p></td>
                </tr>

                <tr>
                    <td><p>24</p> </td>
                    <td><p>Mr. Sumit Patil, <br/> Lab Assistant</p></td>
                    <td><p>Administrative Staff Representative</p></td>
                </tr>
                <tr>
                    <td><p>25</p> </td>
                    <td><p>Dr. Revati Deshpande</p></td>
                    <td><p>Director IQAC</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IQACCommittee;
