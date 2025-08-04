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
                  <td><p>B.Tech ECE Complete Program Structure as per NEP</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/684bbed190b84f1a67c86cb8">B.Tech ECE Complete Program Structure as per NEP w.e.f A.Y 2025-26 Onwards <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>First Year B.Tech ECE Structure and Syllabus as per NEP</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/684bbee590b84f1a67c86cbd">First Year B.Tech ECE Structure and Syllabus as per NEP -R.25 w.e.f A.Y 2025-26 Onwards <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Second Year B.tech ECE Structure and Syllabus as per NEP</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/684bbefb90b84f1a67c86cc2">Second Year B.tech ECE Structure and Syllabus as per NEP- R24 for A.Y. 2025-26 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Third Year B.Tech ECE Structure and Syllabus-R23 for A.Y 2025-26</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/684bbf0c90b84f1a67c86cc7">Third Year B.Tech ECE Structure and Syllabus-R23 for A.Y 2025-26 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr> 

             <tr>
                  <td><p>Final Year B.Tech ECE Structure and Syllabus R22 for A.Y 2025-26</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/684bbf1e90b84f1a67c86ccc">Final Year B.Tech ECE Structure and Syllabus R22 for A.Y 2025-26 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>   
          </tbody>
      </Table>

    </div>
  )
}

export default BtechSyllabus