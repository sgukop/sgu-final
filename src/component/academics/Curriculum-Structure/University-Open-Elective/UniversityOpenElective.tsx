import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const UniversityOpenElective = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>University Open Elective</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>University Open Elective I and II</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">University Open Elective I and II <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default UniversityOpenElective