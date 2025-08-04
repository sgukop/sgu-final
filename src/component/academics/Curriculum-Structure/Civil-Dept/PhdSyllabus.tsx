import React from 'react';
import Table from "react-bootstrap/Table";

const PhdSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">Year</p></th>
                  <th><p className="text-[#4f70b6]">PDF</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>First Year</p></td>
                  <td><p>93</p></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default PhdSyllabus