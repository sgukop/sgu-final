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
                  <td><p>First year R23</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6883493f153ff71942442955">First year R23<i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>  
              <tr>
                  <td><p>Second year R23</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68834964153ff71942442960">Second year R23 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Third year R22</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6883497c153ff71942442965">Third year R22 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Final Year R21</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/688349a0153ff7194244296a">Final Year R21 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Minor Aero R23</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68834a05153ff71942442972">Minor Aero R23 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>

             <tr>
                  <td><p>Open Elective I and II R23</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/68834a27153ff71942442979">Open Elective I and II R23 <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
              
          </tbody>
      </Table>

    </div>
  )
}

export default BtechSyllabus