import React from 'react';
import Table from "react-bootstrap/Table";

const BCAMCA = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">BCA</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>FYBCA Sem I and II Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/686e0f38ab9e6efa3e79e2d8">FY BCA  Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>SY BCA Syllabus 2024-25</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/686e0fa9ab9e6efa3e79e2df">SY BCA Syllabus  <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>TYBCA Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/686e0fbeab9e6efa3e79e2e4">TY BCA Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>

            {/*  <tr>
                  <td><p>FYMCA Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">FYMCA Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>

             <tr>
                  <td><p>SYMCA Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">SYMCA_Syllabus2023-2025 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>  */}
          </tbody>
      </Table>

    </div>
  )
}

export default BCAMCA