import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const PGProgramsOffered = () => {
  return (
    <div className="accordion mt-100" id="pgprograms">
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
        data-bs-parent="#pgprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title-new">Master of Technology (M.Tech)</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>Aerospace Engineering</li>
                                <li>Construction Engineering & Management </li>
                                <li>Structural Engineering</li>
                                <li>Artificial Intelligence & Data Science</li>
                                <li>Electronics Engineering -  Embedded Systems </li>
                                <li>Electrical Engineering - Power Electronics & Drives</li>
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
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
            School of Computer Applications
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#pgprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title-new">Master of Computer Applications</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>Master of Computer Applications</li>
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
        data-bs-parent="#pgprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title-new">Master of Science (M.Sc)</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>M. Sc. Physics(Space Sci./Nano Sci.)</li>
                                <li>M. Sc. Chemistry (Organic & Analytical)</li>
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
          School of Life Sciences
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#pgprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title-new">Allied Health Sciences</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>M Sc Food Technology</li>
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
          data-bs-target="#collapseSix"
          aria-expanded="false"
          aria-controls="collapseSix"
        >
         School of Pharmaceutical Sciences
        </button>
      </h2>
      <div
        id="collapseSix"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#pgprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title-new">Pharmaceutical Sciences</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>M Pharm (Pharmaceutics)</li>
                                <li>M Pharm (Pharmaceutical Quality Assurance)</li>
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
        data-bs-parent="#pgprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                    <h3 className="tl-event-details-area-title-new">Master of Business Administration (MBA)</h3>
                        <ul className="tl-event-details-key-content-list">
                            <li>Master of Commerce</li>
                            <li>Master of Business Administrations</li>
                            <li>Disaster Management</li>
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

export default PGProgramsOffered