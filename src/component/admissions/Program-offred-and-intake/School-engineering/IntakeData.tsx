import React from "react";
import Link from "next/link";
import Table from "react-bootstrap/Table";

const IntakeData = () => {
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
                    Intake 2024-25
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  <h3 className="accordion-table-title dark-mode-white-color">B.Tech First Year Academic Year 2024-25</h3>
                <Table striped bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p>Course Name</p></th>
                            <th><p>Intake</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Aeronautical Engineering</p></td>
                            <td><p>30</p></td>
                        </tr>
                        <tr>
                            <td><p>Civil Engineering</p></td>
                            <td><p>30</p></td>
                        </tr>
                        <tr>
                            <td><p>Electronics & Communication Engineering</p></td>
                            <td><p>30</p></td>
                        </tr>
                        <tr>
                            <td><p>Computer Science and Engineering</p></td>
                            <td><p>180</p></td>
                        </tr>
                        <tr>
                            <td><p>Artificial Intelligence and Machine Learning</p></td>
                            <td><p>120</p></td>
                        </tr>
                    </tbody>
                </Table>

                <h3 className="accordion-table-title dark-mode-white-color">B.Tech Direct Second Year Academic Year 2024-25</h3>
                <Table striped bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p>Course Name</p></th>
                            <th><p>Intake</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Aeronautical Engineering</p></td>
                             <td rowSpan={8}><center><br/>Lateral Entry 10% <br/> +<br/> Last Year Vacancy <br/>=<br/> Total DSE Seat Available</center></td>
                        </tr>
                        <tr>
                            <td><p>Civil Engineering</p></td>
                        </tr>
                        <tr>
                            <td><p>Electronics & Communication Engineering</p></td>
                        </tr>
                        <tr>
                            <td><p>Computer Science and Engineering</p></td>
                        </tr>
                        <tr>
                            <td><p>Artificial Intelligence and Machine Learning</p></td>
                        </tr>
                    </tbody>
                </Table>

                <h3 className="accordion-table-title dark-mode-white-color">M.Tech First Year Academic Year 2024-25</h3>
                <Table striped bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p>Course Name</p></th>
                            <th><p>Intake</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Aerospace Engineering</p></td>
                            <td><p>18</p></td>
                        </tr>
                        <tr>
                            <td><p>Civil Engineering (Construction Engineering & Management)</p></td>
                            <td><p>12</p></td>
                        </tr>
                        <tr>
                            <td><p>Civil Engineering (Structural Engineering)</p></td>
                            <td><p>30</p></td>
                        </tr>
                        <tr>
                            <td><p>Electronics Engineering (Embedded System)</p></td>
                            <td><p>06</p></td>
                        </tr>
                        <tr>
                            <td><p>Artificial Intelligence and Data Science</p></td>
                            <td><p>12</p></td>
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
                   Intake 2023-24
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  
                  </div>
                </div>
              </div>
          
            </div>
          
   
  );
};

export default IntakeData;
