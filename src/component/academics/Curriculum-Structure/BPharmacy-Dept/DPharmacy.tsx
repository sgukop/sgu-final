import React from 'react';
import Table from "react-bootstrap/Table";

const DPharmacy = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">D. Pharmacy</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>D_Pharm Full Curriculum Structure</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67f8ebcb4f56d3a0bcfbbf4b">	D_Pharm Full Curriculum Structure <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
            {/*  <tr>
                  <td><p>FY _D_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67516e4d4b17e19d8f361e5c">	FY B_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>SY D_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67516e5f4b17e19d8f361e61">SY B_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>  */}
          </tbody>
      </Table>

    </div>
  )
}

export default DPharmacy