"use client";
import React from "react";
import Table from "react-bootstrap/Table";

function BOSMemberList() {
  return (
    <>
    <div className="row gx-0 tl-blog-details-row mt-100">
    <div className="col-lg-12">
      <Table striped bordered hover responsive className="governing-table">
        <thead>
          <tr>
            <th><p className="text-[#4f70b6]">Sr. No.</p></th>
            <th><p className="text-[#4f70b6]">Name of BOS Member & Designation </p></th>
            <th><p className="text-[#4f70b6]">Contribution to Board </p></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>1</p></td>
            <td><p><strong>Dr. Vishwas S. Pendse</strong> <br/> Head, Department of Management, <br/> School of commerce and Management, SGU</p></td>
            <td><p>Chairman</p></td>
          </tr>

          <tr>
            <td><p>2</p></td>
            <td><p><strong>Dr. Mahesh Shitole</strong> <br/>Professor&  Director, <br/> Jankidevi Bajaj Institute of Management Studies (JDBIMS), Mumbai</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>3</p></td>
            <td><p><strong>Dr. Nilesh Arora</strong> <br/>Director,<br/> USB, Chandigarh University, Gharuan, Mohali</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>4</p></td>
            <td><p><strong>Dr. Tarika Singh</strong> <br/>Professor&  & Deputy  Director,<br/> Prestige Institute of Management, Gwalior</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>5</p></td>
            <td><p><strong>Dr. Rajesh Torangatti </strong> <br/>HR Director,<br/>Cypress Semiconductor Corporation, Bangalore</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>6</p></td>
            <td><p><strong>Dr. Akshay Ganbote </strong> <br/>Deputy Manager Human Resources,<br/>Maharastra State power Generation Co. LTD (Mahagenco), Pune</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>7</p></td>
            <td><p><strong>Dr. Shanmuga  Priya A.R. </strong> <br/>Assi. Professor,<br/>Department Management, SRM University</p></td>
            <td><p> Invitees</p></td>
          </tr>

          <tr>
            <td><p>8</p></td>
            <td><p><strong>Dr. Ishwar  Haritas </strong> <br/>Asso. Professor, <br/>MBA - IB Program & T A Pai Centre for Inclusive Growth and Competitiveness, Manipal  </p></td>
            <td><p>Invitees</p></td>
          </tr>

          <tr>
            <td><p>9</p></td>
            <td><p><strong>Sanjaykumar  Ingale </strong> <br/>Dean, <br/>School of Interdisciplinary Sciences, SGU</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>10</p></td>
            <td><p><strong>Dr. Revati Deshpande </strong> <br/>School of commerce and Management, SGU</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>11</p></td>
            <td><p><strong>Atul Shinde </strong> <br/>Asst. Professor, <br/> School of commerce and Management, SGU</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>12</p></td>
            <td><p><strong>Dr. Dipak Jadhav  </strong> <br/>Asst. Professor, <br/> School of commerce and Management, SGU.</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>13</p></td>
            <td><p><strong>Sagar Kurane  </strong> <br/>Asst. Professor, <br/> School of commerce and Management, SGU</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>14</p></td>
            <td><p><strong>Dr. Ganesh Jagtap  </strong> <br/>Asso. Professor, <br/> School of commerce and Management, SGU</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>15</p></td>
            <td><p><strong>Prashant Kumbhar  </strong> <br/>Asst. Professor, <br/> School of commerce and Management, SGU</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>16</p></td>
            <td><p><strong>Vinayak Gramopadhye </strong> <br/>Asst. Professor, <br/> School of commerce and Management, SGU</p></td>
            <td><p>Member</p></td>
          </tr>

          <tr>
            <td><p>17</p></td>
            <td><p><strong>Rohit Pawar </strong> <br/>Asst. Professor, <br/> School of commerce and Management, SGU</p></td>
            <td><p>Member</p></td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
       {/* <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                  <th><p className="text-[#4f70b6]">Name, Designation & Affiliation</p></th>
                  <th><p className="text-[#4f70b6]">Role</p></th>
                  <th><p className="text-[#4f70b6]">Profile</p></th>
                  <th><p className="text-[#4f70b6]">Remark</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p><strong>Dr. Vishwas S. Pendse, </strong> <br/> Asso.  Professor & Head, Department of Management, School of Commerce & Management, FOCM. <br/><strong>Email ID : </strong>vishwas.pendse@sanjayghodawatuniversity.ac.in <br/> <strong>Mobile : </strong>+91-98607 81595</p></td>
                  <td><p>Chairman</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p><strong>Dr. Giri. Y. L.</strong> <br/> Professor and Dean <br/> Faculty of Commerce and Management <br/> Sanjay Ghodawat University, Kolhapur</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p><strong>Dr. Mahesh Shitole</strong> <br/> Professor &  Director, Jankidevi Bajaj Institute of Management Studies (JDBIMS), Mumbai</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic & Research </p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p><strong>Dr. Nilesh Arora</strong> <br/> Director, USB, Chandigarh University, Gharuan, Mohali.</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p><strong>Dr Tarika Singh</strong> <br/> Professor&  & Deputy  Director, Prestige Institute of Management, Gwalior.</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p><strong>Dr Rajesh Torangatti </strong> <br/> HR Director, Cypress Semiconductor Corporation, Bangalore</p></td>
                  <td><p>Member</p></td>
                  <td><p>Industry</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p><strong>Dr. Akshay Ganbote</strong> <br/> Deputy Manager Human Resources, Maharastra State power Generation Co. LTD (Mahagenco), Pune</p></td>
                  <td><p>Member</p></td>
                  <td><p>Industry</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p><strong>Dr. Joseph David Ponmany</strong> <br/>Dean, Financial Programs & Business Head Detagami Technology Series Pvt. Ltd.</p></td>
                  <td><p>Member</p></td>
                  <td><p>Industry</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p><strong>Mr. Iyer Murali Narsimhan</strong> <br/>CEO & Business Growth Leader Nupur Sangg Geet Entertianment LLP Mumbai</p></td>
                  <td><p>Member</p></td>
                  <td><p>Industry</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>10</p></td>
                  <td><p><strong>Mr. Sanjaykumar  Ingale</strong> <br/>I/C Dean, School of Interdisciplinary Sciences, SGU </p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>11</p></td>
                  <td><p><strong>Dr. Revati Deshpande </strong> <br/>Asso. Professor & Head, Department of Commerce School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>12</p></td>
                  <td><p><strong>Dr. Vilas Balgaonkar </strong> <br/>Asso. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>13</p></td>
                  <td><p><strong>Mr. Atul Shinde </strong> <br/>Assi. Professor, School of commerce and Management, SGU </p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>14</p></td>
                  <td><p><strong>Dr. Dipak Jadhav </strong> <br/>Assi. Professor, School of commerce and Management, SGU.</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>15</p></td>
                  <td><p><strong>Mr. Sagar Kurane </strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Existing</p></td>
                </tr>

                <tr>
                  <td><p>16</p></td>
                  <td><p><strong>Dr. Ganesh Jagtap</strong> <br/>Asso. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                
                <tr>
                  <td><p>17</p></td>
                  <td><p><strong>Mr. Anirudhha Kamble</strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>18</p></td>
                  <td><p><strong>Mr. Prashant Kumbhar</strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>19</p></td>
                  <td><p><strong>Mr. Vinayak Gramopadhye</strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>20</p></td>
                  <td><p><strong>Mr. Rohit Pawar</strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>21</p></td>
                  <td><p><strong>Mr. Chetan Neman </strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>22</p></td>
                  <td><p><strong>Miss. Pooja Khopkar </strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>23</p></td>
                  <td><p><strong>Mr. Milind Shinde </strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>24</p></td>
                  <td><p><strong>Mr. Chaitanya Shaha </strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>25</p></td>
                  <td><p><strong>Mr. Prasann Ingale  </strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>

                <tr>
                  <td><p>26</p></td>
                  <td><p><strong>Miss. Saloni Kurane </strong> <br/>Assi. Professor, School of commerce and Management, SGU</p></td>
                  <td><p>Member</p></td>
                  <td><p>Academic</p></td>
                  <td><p>Proposed</p></td>
                </tr>
            </tbody>
            </Table>
          </div>
        </div>  */}
    </>    
  );
}

export default BOSMemberList;
