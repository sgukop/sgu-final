import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const BtechSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">ECE</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
         {/*     <tr>
                  <td><p>Second Year B.Tech E&C Engineering Structure and Syllabus as per NEP</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675149dd4b17e19d8f361cd7">Second Year B.Tech E&C Engineering Structure and Syllabus as per NEP <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Third Year B.Tech E&C Engineering Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675149f64b17e19d8f361cdc">Third Year B.Tech E&C Engineering Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Final Year B.Tech E&C Engineering Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675149624b17e19d8f361cd0">Final Year B.Tech E&C Engineering Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Open Elective Courses offered by ECE Dept</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67514a084b17e19d8f361ce1">Open Elective Courses offered by ECE Dept <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>   */}

             <tr>
                  <td><p>B.Tech E & C Engineering Strucutre R23</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a210446f423db2ce8992a55">B.Tech E & C Engineering Strucutre R23 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>B.Tech E & C Engineering Strucutre R25 (Sem I to VIII)</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a2104dff423db2ce8992a5a">B.Tech E & C Engineering Strucutre R25 (Sem I to VIII) <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>B.Tech E & C Engineering Strucutre and syllabus  R23 Final  Year</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a2104f8f423db2ce8992a5f">B.Tech E & C Engineering Strucutre and syllabus  R23 Final  Year <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>SY B.Tech ECE Syllabus (R-25)</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a210505f423db2ce8992a64">SY B.Tech ECE Syllabus (R-25) <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr> 

                       </tbody>
      </Table>

    </div>
  )
}

export default BtechSyllabus