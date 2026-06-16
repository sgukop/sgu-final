import React from 'react';
import Table from "react-bootstrap/Table";

const ComputerScience = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p className="text-[#4f70b6]">Computer Science and Engineering</p></th>
                  <th><p className="text-[#4f70b6]">Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>B. Tech. S. Y. CSE syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a21288ff423db2ce8992aaf"><i className="fa-regular fa-arrow-right-long">B. Tech. S. Y. CSE syllabus</i></a></td>
             </tr>
             <tr>
                  <td><p>B.Tech Computer Science and  Engineering Strucutre R25</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a212937f423db2ce8992ab9"><i className="fa-regular fa-arrow-right-long">B.Tech Computer Science and  Engineering Strucutre R25</i></a></td>
             </tr>
             <tr>
                  <td><p>R23 B.Tech CSE Structure</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a212946f423db2ce8992abe"><i className="fa-regular fa-arrow-right-long">R23 B.Tech CSE Structure</i></a></td>
             </tr>
             <tr>
                  <td><p>R23_Final Year B.Tech. CSE Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6a212959f423db2ce8992ac3"><i className="fa-regular fa-arrow-right-long">R23_Final Year B.Tech. CSE Syllabus</i></a></td>
             </tr>
             
              
          </tbody>
      </Table>

    </div>
  )
}

export default ComputerScience