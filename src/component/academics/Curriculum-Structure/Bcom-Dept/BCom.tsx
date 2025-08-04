import React from 'react';
import Table from "react-bootstrap/Table";

const BCom = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">B.Com</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>FY B COM</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67779c364f56d3a0bcfb426c">FY B COM <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>

             <tr>
                  <td><p>SY B.COM</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67779c4c4f56d3a0bcfb4271">SY B.COM <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>

             <tr>
                  <td><p>TY B.COM</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67779c5f4f56d3a0bcfb4276">TY B.COM <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default BCom