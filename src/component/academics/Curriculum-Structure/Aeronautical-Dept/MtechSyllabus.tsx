import React from 'react';
import Table from "react-bootstrap/Table";

const MtechSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">M.Tech</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
            {/*  <tr>
                  <td><p>M.Tech I Year Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675023664b17e19d8f361a5d">SY_Aero_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>M.Tech II Year Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675023814b17e19d8f361a62">TY_Aero_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>  */}
              
              <tr>
                  <td><p>First Year R24</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68834a8f153ff71942442981">First Year R24 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Second year R22</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68834a9e153ff71942442988">Second year R22 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             
            
          </tbody>
      </Table>

    </div>
  )
}

export default MtechSyllabus