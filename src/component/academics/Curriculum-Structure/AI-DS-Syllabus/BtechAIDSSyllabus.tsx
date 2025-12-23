import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const BtechAIMLSyllabus = () => {
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
                  <td><p>Semester 1 </p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6916dbbb26921e2c8e7f9aec">Semester 1  <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>

             <tr>
                  <td><p>Semester 2 </p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/694a5ed369c6a2c81e4614ee">Semester 2 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Semester 3 </p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/694a5f0969c6a2c81e4614ff">Semester 3 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Semester 4 </p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/694a5ec169c6a2c81e4614e9">Semester 4 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Semester 5 </p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/694a5ea769c6a2c81e4614e4">Semester 5 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Semester 6 </p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/694a5ef969c6a2c81e4614f8">Semester 6 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Semester 7 </p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/694a5ee769c6a2c81e4614f3">Semester 7 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>
             <tr>
                  <td><p>Semester 8 </p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/694a5f1869c6a2c81e461504">Semester 8 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>

             {/* <tr>
                  <td><p>3.1FA SA Format uni.open elective</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/677f5e704f56d3a0bcfb4b3d">3.1FA SA Format uni.open elective <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>

             <tr>
                  <td><p>4.ANNEXURE-IV_NEP_OpenElective</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/677f5e824f56d3a0bcfb4b42">4.ANNEXURE-IV_NEP_OpenElective <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>

             <tr>
                  <td><p>5.ANNEXURE V.1_MM1</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/677f5e944f56d3a0bcfb4b47">5.ANNEXURE V.1_MM1 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>

             <tr>
                  <td><p>5.ANNEXURE V.2_MM2</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/677f5ea54f56d3a0bcfb4b4c">5.ANNEXURE V.2_MM2 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>

             <tr>
                  <td><p>5.ANNEXURE V.3_MM3</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/677f5eb74f56d3a0bcfb4b51">5.ANNEXURE V.3_MM3 <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>

             <tr>
                  <td><p>6.ANNEXURE VI_FinalYear (2)</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/677f5ec84f56d3a0bcfb4b56">6.ANNEXURE VI_FinalYear (2) <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr>   

               <tr>
                  <td><p>First Year B.Tech AIML</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67d93f694f56d3a0bcfba049">First Year B.Tech AIML <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr> 

             <tr>
                  <td><p>Second Year B.Tech AIML</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67d93f7a4f56d3a0bcfba04e">Second Year B.Tech AIML <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr> 

             <tr>
                  <td><p>Third Year B.Tech AIML</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67d93f8b4f56d3a0bcfba053">Third Year B.Tech AIML <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr> 

             <tr>
                  <td><p>Final Year B.Tech AIML</p></td>
                  <td><Link rel="noopener noreferrer" className="tl-def-btn-2" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67d93f9b4f56d3a0bcfba05a">Final Year B.Tech AIML <i className="fa-regular fa-arrow-right-long"></i></Link></td>
             </tr> */}
          </tbody>
      </Table>

    </div>
  )
}

export default BtechAIMLSyllabus