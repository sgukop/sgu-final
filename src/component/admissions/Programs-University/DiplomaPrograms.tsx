import Link from 'next/link';
import React from 'react';

const DiplomaPrograms = () => {
  return (
    <div className="accordion mt-100" id="diplomaprograms">
   
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
          School of Pharmaceutical Sciences
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#diplomaprograms"
      >
        <div className="accordion-body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                      <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title-new">Diploma in Pharmacy</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li>Diploma in Pharmacy</li>
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

export default DiplomaPrograms