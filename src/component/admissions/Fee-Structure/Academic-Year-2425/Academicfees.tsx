import React from 'react';
import Table from "react-bootstrap/Table";

const Academicfees = () => {
  return (
    <div className="accordion mt-20" id="accordionExample">
      {/* School of Pharmacy */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-controls="collapseOne"
          >
            School of Pharmaceutical Science
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
                  <td><p>B. Pharmacy</p></td>
                  <td><p>122500</p></td>
                  <td><p>5000</p></td>
                  <td><p>127500</p></td>
                </tr>
                <tr>
                  <td><p>M. Pharmacy</p></td>
                  <td><p>72500</p></td>
                  <td><p>5000</p></td>
                  <td><p>77500</p></td>
                </tr>
                <tr>
                  <td><p>D. Pharm</p></td>
                  <td><p>95000</p></td>
                  <td><p>5000</p></td>
                  <td><p>100000</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* School of Technology */}
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
            School of Technology
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
                  <td><p>B. Tech. Aeronautical / Electronics & Communication</p></td>
                  <td><p>160000</p></td>
                  
                  <td><p>5000</p></td>
                  <td><p>165000</p></td>
                </tr>
                <tr>
                  <td><p>B. Tech. Comp. Sci. (A.I. & M.L.) / Robotics</p></td>
                  <td><p>187500</p></td>
                  <td><p>5000</p></td>
                  <td><p>192500</p></td>
                </tr>
                <tr>
                  <td><p>B. Tech. AI & DS</p></td>
                  <td><p>170000</p></td>
                  <td><p>5000</p></td>
                  <td><p>175000</p></td>
                </tr>
                <tr>
                  <td><p>M. Tech. (All Specializations)</p></td>
                  <td><p>120000</p></td>
                  <td><p>5000</p></td>
                  <td><p>125000</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* School of Computer Applications */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header" id="headingThree">
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
          aria-labelledby="headingThree"
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
                  <td><p>B.C.A.</p></td>
                  <td><p>55000</p></td>
                  <td><p>5000</p></td>
                  <td><p>60000</p></td>
                </tr>
                <tr>
                  <td><p>M.C.A.</p></td>
                  <td><p>105000</p></td>
                  <td><p>5000</p></td>
                  <td><p>110000</p></td>
                </tr>
                <tr>
                  <td><p>M.C.A. Full Stack Development</p></td>
                  <td><p>122500</p></td>
                  <td><p>5000</p></td>
                  <td><p>127500</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* School of Design */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header" id="headingFour">
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
          aria-labelledby="headingFour"
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
                  <td><p>B. Design (Fashion/Interior/Communication/Product)</p></td>
                  <td><p>272500</p></td>
                  <td><p>5000</p></td>
                  <td><p>277500</p></td>
                </tr>
                <tr>
                  <td><p>B. Design (UI/UX)</p></td>
                  <td><p>187500</p></td>
                  <td><p>5000</p></td>
                  <td><p>192500</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* School of Commerce and Management */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header" id="headingFive">
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
          aria-labelledby="headingFive"
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
                  <td><p>B. Com.</p></td>
                  <td><p>40000</p></td>
                  <td><p>5000</p></td>
                  <td><p>45000</p></td>
                </tr>
                <tr>
                  <td><p>B. B. A.</p></td>
                  <td><p>120000</p></td>
                  <td><p>5000</p></td>
                  <td><p>125000</p></td>
                </tr>
                <tr>
                  <td><p>M.B.A. / M.B.A. Fintech</p></td>
                  <td><p>245000</p></td>
                  <td><p>5000</p></td>
                  <td><p>250000</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* School of Legal Studies */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header" id="headingTen">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTen"
            aria-expanded="false"
            aria-controls="collapseTen"
          >
            School of Legal Studies
          </button>
        </h2>
        <div
          id="collapseTen"
          className="accordion-collapse collapse"
          aria-labelledby="headingTen"
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

                  <td><p>55000</p></td>
                  <td><p>5000</p></td>
                  <td><p>60000</p></td>
                </tr>
                <tr>
                  <td><p>BA LLB / BBA LLB</p></td>
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
  );
};

export default Academicfees;