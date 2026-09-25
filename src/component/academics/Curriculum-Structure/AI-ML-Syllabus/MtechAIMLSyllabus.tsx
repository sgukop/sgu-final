import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const MtechAIMLSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">M.Tech AI & DS</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
            <tr>
                  <td><p>First Year M.Tech in AI & DS</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6ab63ef2f7f7f18b12973387">First Year M.Tech Syllabus in AI & DS <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr> 

             
             <tr>
                  <td><p>R24 Second Year_M.tech as per NEP</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6ab63f20f7f7f18b1297338c">R24 Second Year_M.tech Syllabus as per NEP <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
          </tbody>
      </Table>

    </div>
  )
}

export default MtechAIMLSyllabus