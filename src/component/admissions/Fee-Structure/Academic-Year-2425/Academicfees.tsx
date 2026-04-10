import React from 'react';
import Table from "react-bootstrap/Table";

const Academicfees = () => {
  return (
    <div className="accordion mt-20" id="accordionExample">

      {/* School of Commerce & Management */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header">
          <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#comm">
            School of Commerce & Management
          </button>
        </h2>
        <div id="comm" className="accordion-collapse collapse show">
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
                <tr><td><p>B.Com</p></td><td><p>40000</p></td><td><p>5000</p></td><td><p>45000</p></td></tr>
                <tr><td><p>BBA</p></td><td><p>120000</p></td><td><p>5000</p></td><td><p>125000</p></td></tr>
                <tr><td><p>MBA</p></td><td><p>245000</p></td><td><p>5000</p></td><td><p>250000</p></td></tr>
                <tr><td><p>MBA - Fintech & Data Analytics</p></td><td><p>245000</p></td><td><p>5000</p></td><td><p>250000</p></td></tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* School of Engineering & Technology */}
<div className="tl-event-details-area tl-course-details-curriculum">
  <h2 className="accordion-header">
    <button
      className="accordion-button collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#eng"
    >
      School of Engineering & Technology
    </button>
  </h2>

  <div id="eng" className="accordion-collapse collapse">
    <div className="accordion-body">

      {/* UG Section */}
      <h4 className="mb-3">UG Programmes (B.Tech)</h4>
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
          <tr><td><p>B.Tech Aeronautical Engineering</p></td><td><p>160000</p></td><td><p>5000</p></td><td><p>165000</p></td></tr>
          <tr><td><p>B.Tech Civil Engineering</p></td><td><p>145000</p></td><td><p>5000</p></td><td><p>150000</p></td></tr>
          <tr><td><p>B.Tech Computer Science & Engineering</p></td><td><p>170000</p></td><td><p>5000</p></td><td><p>175000</p></td></tr>
          <tr><td><p>B.Tech Artificial Intelligence & Machine Learning</p></td><td><p>170000</p></td><td><p>5000</p></td><td><p>175000</p></td></tr>
          <tr><td><p>B.Tech Electronics & Communication Engineering</p></td><td><p>160000</p></td><td><p>5000</p></td><td><p>165000</p></td></tr>
          <tr><td><p>B.Tech Artificial Intelligence and Data Science</p></td><td><p>237500</p></td><td><p>5000</p></td><td><p>242500</p></td></tr>
          <tr><td><p>B.Tech Robotics Process Automation</p></td><td><p>187500</p></td><td><p>5000</p></td><td><p>192500</p></td></tr>
        </tbody>
      </Table>

      {/* PG Section */}
      <h4 className="mt-4 mb-3">PG Programmes (M.Tech)</h4>
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
          <tr><td><p>M.Tech Aerospace Engineering</p></td><td><p>120000</p></td><td><p>5000</p></td><td><p>125000</p></td></tr>
          <tr><td><p>M.Tech Civil Engineering (Structural)</p></td><td><p>120000</p></td><td><p>5000</p></td><td><p>125000</p></td></tr>
          <tr><td><p>M.Tech Artificial Intelligence & Data Science</p></td><td><p>120000</p></td><td><p>5000</p></td><td><p>125000</p></td></tr>
          
        </tbody>
      </Table>

    </div>
  </div>
</div>

      {/* School of Computer Applications */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#comp">
            School of Computer Applications
          </button>
        </h2>
        <div id="comp" className="accordion-collapse collapse">
          <div className="accordion-body">
            <Table striped bordered responsive className="governing-table">
              <tbody>
                <tr><td><p>BCA</p></td><td><p>55000</p></td><td><p>5000</p></td><td><p>60000</p></td></tr>
                <tr><td><p>MCA</p></td><td><p>105000</p></td><td><p>5000</p></td><td><p>110000</p></td></tr>
                <tr><td><p>MCA Full Stack Development</p></td><td><p>122500</p></td><td><p>5000</p></td><td><p>127500</p></td></tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* School of Science */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#science">
            School of Science
          </button>
        </h2>
        <div id="science" className="accordion-collapse collapse">
          <div className="accordion-body">
            <Table striped bordered responsive className="governing-table">
              <tbody>
                <tr><td><p>B.Sc Physics</p></td><td><p>27500</p></td><td><p>5000</p></td><td><p>32500</p></td></tr>
                <tr><td><p>B.Sc Chemistry</p></td><td><p>27500</p></td><td><p>5000</p></td><td><p>32500</p></td></tr>
                <tr><td><p>M.Sc Chemistry</p></td><td><p>62500</p></td><td><p>5000</p></td><td><p>67500</p></td></tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* School of Design */}
<div className="tl-event-details-area tl-course-details-curriculum">
  <h2 className="accordion-header">
    <button
      className="accordion-button collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#design"
    >
      School of Design
    </button>
  </h2>

  <div id="design" className="accordion-collapse collapse">
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
              <td><p>B.Des Fashion Design</p></td>
              <td><p>272500</p></td>
              <td><p>5000</p></td>
              <td><p>277500</p></td>
            </tr>
            <tr>
              <td><p>B.Des Communication Design</p></td>
              <td><p>272500</p></td>
              <td><p>5000</p></td>
              <td><p>277500</p></td>
            </tr>
            <tr>
              <td><p>B.Des Product Design</p></td>
              <td><p>272500</p></td>
              <td><p>5000</p></td>
              <td><p>277500</p></td>
            </tr>
            <tr>
              <td><p>B.Des Interior Design</p></td>
              <td><p>272500</p></td>
              <td><p>5000</p></td>
              <td><p>277500</p></td>
            </tr>
            <tr>
              <td><p>B.Des UI/UX Design</p></td>
              <td><p>187500</p></td>
              <td><p>5000</p></td>
              <td><p>192500</p></td>
            </tr>
          </tbody>
      </Table>
    </div>
  </div>
</div>

      {/* School of Pharmacy */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pharma">
            School of Pharmaceutical Science
          </button>
        </h2>
        <div id="pharma" className="accordion-collapse collapse">
          <div className="accordion-body">
            <Table striped bordered responsive className="governing-table">
              <tbody>
                <tr><td><p>B.Pharm</p></td><td><p>122500</p></td><td><p>5000</p></td><td><p>127500</p></td></tr>
                 <tr><td><p>B.Sc Clinical Research and Technology</p></td><td><p>72500</p></td><td><p>5000</p></td><td><p>77500</p></td></tr>
                <tr><td><p>M.Pharm - Pharmaceutics</p></td><td><p>95000</p></td><td><p>5000</p></td><td><p>100000</p></td></tr>
                <tr><td><p>M.Pharm - Pharmaceutical Quality Assurance</p></td><td><p>95000</p></td><td><p>5000</p></td><td><p>100000</p></td></tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
                    {/* School of Life Sciences */}
              <div className="tl-event-details-area tl-course-details-curriculum">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#lifescience">
                    School of Life Sciences
                  </button>
                </h2>
                <div id="lifescience" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <Table striped bordered responsive className="governing-table">
                      <tbody>
                        <tr>
                          <td><p>B. Sc. Food Science & Technology</p></td>
                          <td><p>42500</p></td>
                          <td><p>5000</p></td>
                          <td><p>47500</p></td>
                        </tr>
                        <tr>
                          <td><p>B.Sc. Medical Lab Technology</p></td>
                          <td><p>52500</p></td>
                          <td><p>5000</p></td>
                          <td><p>57500</p></td>
                        </tr>
                        <tr>
                          <td><p>B. Sc. Biotechnology</p></td>
                          <td><p>42500</p></td>
                          <td><p>5000</p></td>
                          <td><p>47500</p></td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>

      {/* School of Legal Studies */}
      <div className="tl-event-details-area tl-course-details-curriculum">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#law">
            School of Legal Studies
          </button>
        </h2>
        <div id="law" className="accordion-collapse collapse">
          <div className="accordion-body">
            <Table striped bordered responsive className="governing-table">
              <tbody>
                <tr><td><p>BBA Law (Hons.)</p></td><td><p>85000</p></td><td><p>5000</p></td><td><p>90000</p></td></tr>
                <tr><td><p>BA Law (Hons.)</p></td><td><p>55000</p></td><td><p>5000</p></td><td><p>60000</p></td></tr>
                <tr><td><p>LLB</p></td><td><p>35000</p></td><td><p>5000</p></td><td><p>60000</p></td></tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Academicfees;