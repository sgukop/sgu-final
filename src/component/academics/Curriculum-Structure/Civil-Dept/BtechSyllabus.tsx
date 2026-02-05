import React from 'react';
import Table from "react-bootstrap/Table";

const BtechSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">B. Tech</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
            <td><p>FY_Civil_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/69847cc609a4f8562bb027b3">FY_Civil_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             
              <tr>
                  <td><p>SY_Civil_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/69847c4b09a4f8562bb027a9">SY_Civil_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>TY_Civil_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/69847c6f09a4f8562bb027ae">TY_Civil_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Final_Civil_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/69847b9209a4f8562bb027a4">Final_Civil_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Minor_Civil</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675032c44b17e19d8f361b45">Minor_Civil_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             
          </tbody>
      </Table>

    </div>
  )
}

export default BtechSyllabus