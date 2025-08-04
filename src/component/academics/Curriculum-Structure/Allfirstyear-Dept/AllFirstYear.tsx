import React from 'react';
import Table from "react-bootstrap/Table";

const AllFirstYear = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>First Year Structure</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>First year structure for AY 2023-24 onwards (CSE and AIML)</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">	First year structure for AY 2023-24 onwards (CSE and AIML) <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>First year structure for AY 2023-24 onwards (Civil, Electronics, Aeronautical)</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="#">First year structure for AY 2023-24 onwards (Civil, Electronics, Aeronautical) <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
            
          </tbody>
      </Table>

    </div>
  )
}

export default AllFirstYear