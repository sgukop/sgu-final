import React from 'react';
import Table from "react-bootstrap/Table";

const BPharmacy = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">B. Pharmacy</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>R26- B.Pharm Curriculum Strucutre (NEP2020)</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a1ea6e4b7ec52d9d324514a">	B_Pharm Full Curriculum Structure <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
               <tr>
                  <td><p>R26- B.Pharm Regulations 2026 (NEP2020)</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a1ea693b7ec52d9d324513f">	R26- B.Pharm Regulations 2026 (NEP2020) <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
            <tr>
                  <td><p>R26- Sem I & Sem II SGU B. Pharm Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a1ea725b7ec52d9d324514f">R26- Sem I & Sem II SGU B. Pharm Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             
            {/* <tr>
                  <td><p>Final Year B_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67516e334b17e19d8f361e57">Final Year B_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>  */}
              
          </tbody>
      </Table>

    </div>
  )
}

export default BPharmacy