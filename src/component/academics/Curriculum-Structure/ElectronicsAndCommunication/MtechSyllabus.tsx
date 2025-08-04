import React from 'react';
import Table from "react-bootstrap/Table";

const MtechSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">M. Tech Electronics & Communication Engineering</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>M. Tech. Electronics Engineering Structure & Syllabus as per NEP2020</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/684bbf9490b84f1a67c86cdf">M. Tech. Electronics Engineering Structure & Syllabus as per NEP2020 - A.Y 2024-25 Onwards <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default MtechSyllabus