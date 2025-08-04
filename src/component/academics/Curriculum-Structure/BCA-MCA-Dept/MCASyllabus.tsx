'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";


const MCASyllabus = () => {
  return (
      <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">MCA</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
            <tr>
                  <td><p>FY MCA Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/686e0fd7ab9e6efa3e79e2f1">FY MCA Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>

             <tr>
                  <td><p>SY MCA Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/686e1008ab9e6efa3e79e2f8">SY MCA Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr> 
          </tbody>
      </Table>
        
  )
}

export default MCASyllabus