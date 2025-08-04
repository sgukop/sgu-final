import React from 'react';
import Table from "react-bootstrap/Table";

const MPharmacy = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">M. Pharmacy</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>M Pharm syllabus and structure Both branch</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67dcf4c94f56d3a0bcfba417">M Pharm syllabus and structure Both branch <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
           </tbody>
      </Table>

    </div>
  )
}

export default MPharmacy