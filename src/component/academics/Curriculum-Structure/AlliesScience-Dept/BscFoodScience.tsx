import React from 'react';
import Table from "react-bootstrap/Table";

const BscFoodScience = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>FST</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>FST Course Structure with NEP</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">FST Course Structure with NEP <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>FST II Year Structure and Syllabus with NEP</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">FST II Year Structure and Syllabus with NEP <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>FST III Year Structure and Syllabus without NEP</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">FST III Year Structure and Syllabus without NEP <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>FST Minor Courses with syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">FST Minor Courses with syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Open Elective Courses with Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">Open Elective Courses with Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
              
          </tbody>
      </Table>

    </div>
  )
}

export default BscFoodScience