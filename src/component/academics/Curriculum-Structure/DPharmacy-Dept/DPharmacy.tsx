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
                  <td><p>FY _D_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">FY _D_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>SY _ D_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">SY _ D_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
            
              
          </tbody>
      </Table>

    </div>
  )
}

export default DPharmacy