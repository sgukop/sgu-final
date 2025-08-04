import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const BtechFoodScience = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">B.Tech (Food Science and Technology)</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>B. Sc. Biotech</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6757e64c9173bf9f471ac05f">B. Sc. Biotech <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default BtechFoodScience