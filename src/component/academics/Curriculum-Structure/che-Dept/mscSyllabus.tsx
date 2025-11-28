import React from 'react';
import Table from "react-bootstrap/Table";

const MscSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">M.Sc</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
            
              
              <tr>
                  <td><p>Curriculum Structure </p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/69298ced21f871c0dce9ae14">Curriculum Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             
             
            
          </tbody>
      </Table>

    </div>
  )
}

export default MscSyllabus