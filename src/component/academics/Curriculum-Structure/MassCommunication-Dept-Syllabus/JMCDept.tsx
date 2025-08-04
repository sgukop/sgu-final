import React from 'react';
import Table from "react-bootstrap/Table";

const JMCDept = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">JMC</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>curriculum-structure-I-II</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67e102044f56d3a0bcfbac04">curriculum-structure-I-II <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default JMCDept