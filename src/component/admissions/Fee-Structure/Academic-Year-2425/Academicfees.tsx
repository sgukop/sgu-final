import React from 'react';
import Table from "react-bootstrap/Table";

const Academicfees = () => {
  return (
    <div className="accordion mt-20" id="accordionExample">
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
         
          aria-controls="collapseOne"
        >
          School of Pharmacy
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
      
      <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>D. Pharmacy</p></td>
                  <td><p>97500</p></td>
                  <td><p>5000</p></td>
                  <td><p>102500</p></td>
              </tr>
              <tr>
                  <td><p>B. Pharmacy</p></td>
                  <td><p>122500</p></td>
                  <td><p>5000</p></td>
                  <td><p>127500</p></td>
              </tr>
              <tr>
                  <td><p>M. Pharmacy</p></td>
                  <td><p>95000</p></td>
                  <td><p>5000</p></td>
                  <td><p>100000</p></td>
              </tr>
          </tbody>
      </Table>

     
        </div>
      </div>
    </div>
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
         School of Engineering & Technology
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>B.Tech. in Aeronautical Engineering</p></td>
                  <td><p>145000</p></td>
                  <td><p>5000</p></td>
                  <td><p>150000</p></td>
              </tr>
              <tr>
                  <td><p>B.Tech in Electronics & Communication Engineering</p></td>
                  <td><p>145000</p></td>
                  <td><p>5000</p></td>
                  <td><p>150000</p></td>
              </tr>
              <tr>
                  <td><p>B.Tech in Computer Science Engineering</p></td>
                  <td><p>155000</p></td>
                  <td><p>5000</p></td>
                  <td><p>160000</p></td>
              </tr>
              <tr>
                  <td><p>B.Tech in Artificial Intelligence and Machine Learning</p></td>
                  <td><p>155000</p></td>
                  <td><p>5000</p></td>
                  <td><p>160000</p></td>
              </tr>
              <tr>
                  <td><p>M.Tech. in Civil Engineering (Construction Engineering & Management)</p></td>
                  <td><p>120000</p></td>
                  <td><p>5000</p></td>
                  <td><p>125000</p></td>
              </tr>
              <tr>
                  <td><p>M.Tech. in Artificial Intelligence & Data Science</p></td>
                  <td><p>120000</p></td>
                  <td><p>5000</p></td>
                  <td><p>125000</p></td>
              </tr>
              <tr>
                  <td><p>M.Tech. in Electronics Engineering (Embedded System)</p></td>
                  <td><p>120000</p></td>
                  <td><p>5000</p></td>
                  <td><p>125000</p></td>
              </tr>
          </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
         School of Computer Applications
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>B.C.A</p></td>
                  <td><p>55000</p></td>
                  <td><p>5000</p></td>
                  <td><p>60000</p></td>
              </tr>
              <tr>
                  <td><p>M.C.A</p></td>
                  <td><p>105000</p></td>
                  <td><p>5000</p></td>
                  <td><p>100000</p></td>
              </tr>
              
          </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
         School of Design
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>Bachelor in Design (Graphic Design)</p></td>
                  <td><p>245000</p></td>
                  <td><p>5000</p></td>
                  <td><p>250000</p></td>
              </tr>
              <tr>
                  <td><p>Bachelor in Design (Product Design)</p></td>
                  <td><p>245000</p></td>
                  <td><p>5000</p></td>
                  <td><p>250000</p></td>
              </tr>
              <tr>
                  <td><p>Bachelor in Design (Interior Design)</p></td>
                  <td><p>245000</p></td>
                  <td><p>5000</p></td>
                  <td><p>250000</p></td>
              </tr>
              <tr>
                  <td><p>Bachelor in Design (Fashion Design)</p></td>
                  <td><p>245000</p></td>
                  <td><p>5000</p></td>
                  <td><p>250000</p></td>
              </tr>

              <tr>
                  <td><p>B Sc with Honours (Fashion Design)</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>

              <tr>
                  <td><p>B Sc with Honours (Interior Design)</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>

              <tr>
                  <td><p>B Sc with Honours (Game Design)</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>

              <tr>
                  <td><p>B Sc with Honours (Graphics, Animation & VFX)</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>

              <tr>
                  <td><p>B Sc with Honours (UI UX)</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>

              <tr>
                  <td><p>Certification Program in Graphic Design Animation & VFX</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>

              <tr>
                  <td><p>Certification Program in UI UX</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>

              <tr>
                  <td><p>Certification Program in Game Design</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>

              <tr>
                  <td><p>Certification Program in Hospitality, Tourism & Events</p></td>
                  <td><p>1,00,000</p></td>
                  <td><p>5000</p></td>
                  <td><p>1,05,000</p></td>
              </tr>
              
              
          </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
         School of Commerce and Management
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>Bachelor of Commerce (B.Com)</p></td>
                  <td><p>32500</p></td>
                  <td><p>5000</p></td>
                  <td><p>37500</p></td>
              </tr>
              <tr>
                  <td><p>Bachelor in Businees Administration (B.B.A.)</p></td>
                  <td><p>97500</p></td>
                  <td><p>5000</p></td>
                  <td><p>102500</p></td>
              </tr>
              <tr>
                  <td><p>Master in Businees Administration (M.B.A.)</p></td>
                  <td><p>197500</p></td>
                  <td><p>5000</p></td>
                  <td><p>202500</p></td>
              </tr>
         </tbody>
      </Table>

        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
          aria-expanded="false"
          aria-controls="collapseSix"
        >
         School of Sciences
        </button>
      </h2>
      <div
        id="collapseSix"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>Bachelor of Science (B.Sc.) - Physics / Chemistry</p></td>
                  <td><p>27500</p></td>
                  <td><p>5000</p></td>
                  <td><p>32500</p></td>
              </tr>
              <tr>
                  <td><p>Bachelor of Bio-technology - Bio-technology</p></td>
                  <td><p>25000</p></td>
                  <td><p>5000</p></td>
                  <td><p>30000</p></td>
              </tr>
              <tr>
                  <td><p>Master of Science (M.Sc.) - Chemistry (Organic /Analytical)</p></td>
                  <td><p>62500</p></td>
                  <td><p>5000</p></td>
                  <td><p>67500</p></td>
              </tr>
              <tr>
                  <td><p>Master of Science (M.Sc.) - Physics (Space Science/ Nano Science / Atmospheric Science )</p></td>
                  <td><p>42500</p></td>
                  <td><p>5000</p></td>
                  <td><p>47500</p></td>
              </tr>
              <tr>
                  <td><p>Master of Bio-technology -Bio-technology</p></td>
                  <td><p>60000</p></td>
                  <td><p>5000</p></td>
                  <td><p>65000</p></td>
              </tr>
         </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSeven"
          aria-expanded="false"
          aria-controls="collapseSeven"
        >
         School of Media
        </button>
      </h2>
      <div
        id="collapseSeven"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>Bachelor of Arts (B.A.) - Journalism & Mass Communication</p></td>
                  <td><p>52500</p></td>
                  <td><p>5000</p></td>
                  <td><p>57500</p></td>
              </tr>
              
         </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseEight"
          aria-expanded="false"
          aria-controls="collapseEight"
        >
         School of Social Science
        </button>
      </h2>
      <div
        id="collapseEight"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>Bachelor of Arts (B.A.) - Geography</p></td>
                  <td><p>27500</p></td>
                  <td><p>5000</p></td>
                  <td><p>32500</p></td>
              </tr>
              
         </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNine"
          aria-expanded="false"
          aria-controls="collapseNine"
        >
        School of Allied Health Sciences
        </button>
      </h2>
      <div
        id="collapseNine"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>B.Sc. in Medical Lab Technology (B.M.L.T)</p></td>
                  <td><p>52500</p></td>
                  <td><p>5000</p></td>
                  <td><p>57500</p></td>
              </tr>
              <tr>
                  <td><p>B.Sc. Food Science & Technology</p></td>
                  <td><p>42500</p></td>
                  <td><p>5000</p></td>
                  <td><p>47500</p></td>
              </tr>
              
         </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTen"
          aria-expanded="false"
          aria-controls="collapseTen"
        >
       School of Legal Studies (Law) :-Proposed
        </button>
      </h2>
      <div
        id="collapseTen"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Programme Name</p></th>
                  <th><p>Course Fee</p></th>
                  <th><p>Exam Fee</p></th>
                  <th><p>Total Fee</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>LLB</p></td>
                  <td><p>35000</p></td>
                  <td><p>5000</p></td>
                  <td><p>40000</p></td>
              </tr>
              <tr>
                  <td><p>B.A.LLB</p></td>
                  <td><p>55000</p></td>
                  <td><p>5000</p></td>
                  <td><p>60000</p></td>
              </tr>
              <tr>
                  <td><p>BBA LLB</p></td>
                  <td><p>85000</p></td>
                  <td><p>5000</p></td>
                  <td><p>90000</p></td>
              </tr>
              
         </tbody>
      </Table>
        </div>
      </div>
    </div>
</div>
  )
}

export default Academicfees