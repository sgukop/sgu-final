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
                  <h3 className="accordion-table-title dark-mode-white-color">B.Design Academic Year 2024-25</h3>
                <Table striped bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p>Course Name</p></th>
                            <th><p>Intake</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>B.Design( Communication Design, Product Design, Fashion Design Styling & Business, Interior Design Styling & Practice)</p></td>
                            <td><p>Total 60</p></td>
                        </tr>
                        <tr>
                            <td><p>B.Science with Honours( Fashion Design, Interior Design, Game Design, Graphics, Animation & VFX,UI UX)</p></td>
                            <td><p>Total 150</p></td>
                        </tr>
                        <tr>
                            <td><p>( Graphic Design Animation & VFX, UI UX, Game Design, Hospitality, Tourism & Events)</p></td>
                            <td><p>Total 120</p></td>
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
                   Intake 2022-23
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  
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
                   Intake 2021-22
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  
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
                   Intake 2020-21
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  <h3 className="accordion-table-title dark-mode-white-color">B.Arch Academic Year 2020-21</h3>
                <Table striped bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p>Course Name</p></th>
                            <th><p>Intake</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>B.Arch</p></td>
                            <td><p>40</p></td>
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
                   Intake 2018-19
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  <h3 className="accordion-table-title dark-mode-white-color">B.Arch Academic Year 2018-19</h3>
                <Table striped bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p>Course Name</p></th>
                            <th><p>Intake</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>B.Arch</p></td>
                            <td><p>40</p></td>
                        </tr>
                    </tbody>
                </Table>

                  </div>
                </div>
              </div>


              
          
            </div>
          
   
  );
};

export default IntakeData;
