import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const BtechFoodScience = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">B.Sc. (Food Science and Technology)</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>B.Sc. FST</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675168d64b17e19d8f361e38">B.Sc. FST <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default BtechFoodScience