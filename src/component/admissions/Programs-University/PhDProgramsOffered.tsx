import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const PhDProgramsOffered = () => {
  return (
    <div className="accordion mt-100" id="phdprograms">
      <h3 className="tl-event-details-area-title-new text-[#f26122] mb-4">Faculty of Science & Technology</h3>
    <div className="tl-course-details-curriculum rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-controls="collapseOne"
        >
          School of Engineering & Technology
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#phdprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title-new">Doctor of Philosophy (Ph.D.)</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>Aerospace Engineering</li>
                                <li>Civil Engineering</li>
                                <li>Computer Science & Engineering</li>
                                <li>Electronics Engineering</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>

    <div className="tl-course-details-curriculum rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          School of Physical and Chemical Sciences 
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#phdprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title-new">Doctor of Philosophy in Science (Ph.D.)</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>Physics</li>
                                <li>Chemistry</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>

    <div className="tl-course-details-curriculum rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
          School of Pharmaceutical Sciences
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#phdprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title-new">Doctor of Philosophy (Ph.D.)</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>Pharmacology</li>
                                <li>Pharmaceutics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>
    
    <h3 className="tl-event-details-area-title-new text-[#f26122] mb-4">Faculty of Commerce & Management</h3>
    <div className="tl-course-details-curriculum rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
           School of Commerce & Management
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#phdprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                    <h3 className="tl-event-details-area-title-new">Doctor of Philosophy (Ph.D.)</h3>
                        <ul className="tl-event-details-key-content-list">
                            <li>Management</li>
                            <li>Commerce</li>
                        </ul>
                    </div>
                    </div>
                </div>
              </div>  
        </div>
      </div>
    </div>
  
    <h3 className="tl-event-details-area-title-new text-[#f26122] mb-4">Faculty of Humanities and Social Sciences</h3>
    <div className="tl-course-details-curriculum rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          School of Social Science
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#phdprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title-new">Doctor of Philosophy in Arts (Ph.D.)</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>English</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>

  
</div>
)
}

export default PhDProgramsOffered