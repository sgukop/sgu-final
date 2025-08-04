import React from 'react';
import Table from "react-bootstrap/Table";

const BscMedicalLaboratory = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>MLT</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>MLT Course Structure with NEP</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">MLT Course Structure with NEP <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>MLT II Year Structure and Syllabus with NEP</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">MLT II Year Structure and Syllabus with NEP <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>MLT III Year Structure and Syllabus wthout NEP</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">MLT III Year Structure and Syllabus wthout NEP <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>MLT Minor Courses with syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">MLT Minor Courses with syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
        </tbody>
      </Table>

    </div>
  )
}

export default BscMedicalLaboratory