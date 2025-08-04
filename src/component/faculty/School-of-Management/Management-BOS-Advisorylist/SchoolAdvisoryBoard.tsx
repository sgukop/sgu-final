"use client";
import React from "react";
import Table from "react-bootstrap/Table";


function SchoolAdvisoryBoard() {
  return (
    <div className="row gx-0 tl-blog-details-row mt-100">
        <div className="col-lg-12">
            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr. no.</p></th>
                  <th><p className="text-[#4f70b6]">Name of IAB Members</p></th>
                  <th><p className="text-[#4f70b6]">Organization</p></th>
                  <th><p className="text-[#4f70b6]">Role</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Mr. Lokendra Singh</p></td>
                  <td><p>Managing Director - Ross Process Equipment Pvt. Ltd., Pune</p></td>
                  <td><p>Chairman (External)</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>Mr. Lawrence Fernandes</p></td>
                  <td><p>Director-Retail Learning and Membership, Retailers Association  of India, Mumbai</p></td>
                  <td><p>Member (External)</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>Mr. Kamlesh Rathod</p></td>
                  <td><p>Senior Manager-Corporate Communications at Reliance Jio Infocom ltd., Mumbai</p></td>
                  <td><p>Member (External)</p></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>Mr. Abhinav Nalawade</p></td>
                  <td><p>Deputy Manager- 99Acers Vertical</p></td>
                  <td><p>Member (External)</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>Mr. Sanskar Naval</p></td>
                  <td><p>Founder and Owner- Glam up venture </p></td>
                  <td><p>Member (External)</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>Dr. N. V. Pujari</p></td>
                  <td><p>TPO, Sanjay Ghodawat University</p></td>
                  <td><p>Member (Internal)</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>Dr. Y. L. Giri</p></td>
                  <td><p>Professor,  School of Commerce and Management</p></td>
                  <td><p>Member (Internal)</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>Dr. Vishwas Pendse</p></td>
                  <td><p>Associate Professor School of Commerce and Management</p></td>
                  <td><p>Member (Internal)</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>Dr. Revati Deshpande</p></td>
                  <td><p>Associate Professor, School of Commerce and Management</p></td>
                  <td><p>Member (Internal)</p></td>
                </tr>

                <tr>
                  <td><p>10</p></td>
                  <td><p>Dr. Ganesh Jagtap</p></td>
                  <td><p>Associate Professor, School of Commerce and Management</p></td>
                  <td><p>Member (Internal)</p></td>
                </tr>

                <tr>
                  <td><p>11</p></td>
                  <td><p>Sagar Kurane</p></td>
                  <td><p>Assistant Professor, School of Commerce and Management</p></td>
                  <td><p>Member (Internal)</p></td>
                </tr>

                <tr>
                  <td><p>12</p></td>
                  <td><p>Chetan Neman</p></td>
                  <td><p>Assistant Professor, School of Commerce and Management</p></td>
                  <td><p>Member (Internal)</p></td>
                </tr>

                <tr>
                  <td><p>13</p></td>
                  <td><p>Pooja Khopkar</p></td>
                  <td><p>Assistant Professor, School of Commerce and Management</p></td>
                  <td><p>Member (Internal)</p></td>
                </tr>
        </tbody>
    </Table>
    </div>
</div>
       
  );
}

export default SchoolAdvisoryBoard;
