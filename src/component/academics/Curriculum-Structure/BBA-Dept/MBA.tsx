import React from 'react';
import Table from "react-bootstrap/Table";

const MBA = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">MBA</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>MBA Syllabus </p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/69340db0914ce31b3c5b9c8e"> R25_I_II_Full_Syllabus_2025. <i className="fa-regular fa-arrow-right-long"></i></a></td>
                 
             </tr>
             <tr>
                 <td><p>MBA Syllabus </p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/686e24bcab9e6efa3e79e32c">MBA Syllabus  <i className="fa-regular fa-arrow-right-long"></i></a></td>
                  
             </tr>
             

          
        </tbody>
      </Table>

    </div>
  )
}

export default MBA