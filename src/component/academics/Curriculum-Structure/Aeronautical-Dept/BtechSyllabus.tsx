import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const BtechSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">B. Tech</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
               <tr>
                  <td><p>Curriculum Structure Sem I-VIII R25</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68c2b84bdceab808938fd380">Curriculum  Structure Sem I-VIII R25<i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Curriculum Structure Sem I-VIII R23</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68c2b8aadceab808938fd385">Curriculum Structure Sem I-VIII R23<i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>First Year Structure and Syllabus R25</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68c2b8bedceab808938fd38a">First Year Structure and Syllabus R25<i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>  
              <tr>
                  <td><p>Second Year Structure and Syllabus R23</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68c2b8cedceab808938fd38f">Second Year Structure and Syllabus R23 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Third Year Structure and Syllabus R23</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68c2b8dfdceab808938fd394">Third Year Structure and Syllabus R23 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Final Year Structure and Syllabus R22</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68c2b8f5dceab808938fd399">Final Year Structure and Syllabus R21 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Minor Aero Structure and Syllabus R23</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68834a05153ff71942442972">Minor Aero Structure and Syllabus R23 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Minor Aero Structure and Syllabus R25</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68c2b920dceab808938fd39e">Minor Aero Structure and Syllabus R23 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             
              
          </tbody>
      </Table>

    </div>
  )
}

export default BtechSyllabus