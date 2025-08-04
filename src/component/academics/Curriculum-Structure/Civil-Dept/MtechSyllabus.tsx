import React from 'react';
import Table from "react-bootstrap/Table";

const MtechSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">M.Tech</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
            <tr>
                  <td><p>Construction Engineering and Management</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675032eb4b17e19d8f361b4a">	Curriculum Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Structural Engineering</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675033034b17e19d8f361b4f">	Curriculum Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default MtechSyllabus