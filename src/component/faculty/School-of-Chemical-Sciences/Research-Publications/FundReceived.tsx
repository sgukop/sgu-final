import Link from 'next/link';
import React from 'react';

const FundReceived = () => {
  return (
    <div className="accordion" id="fundreceived">
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
         
          aria-controls="collapseOne"
        >
          2023-2024
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#fundreceived"
      >
        <div className="accordion-body">
        <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li><strong>Dr. S. A. Deshmukh</strong>, Studies on Microwave Assisted Dissolution of silk fibroin with ionic liquids for their photonic applications. Fund received: <strong>1,60,000/-</strong></li>
                                <li><strong>Dr. A.D.Sawant</strong>, Design, Synthesis and Antimicrobial Evaluation of Dihydroquinazolinone and Quinazolinone linked Sulfonamide derivatives, Fund received: <strong>1,95,000/-</strong></li>
                                <li><strong>Dr. M. S. Chavan</strong>, Efficient, facial and greener protocol for the synthesis of heterocycles and its applications, Fund received: <strong>80,000/-</strong></li>
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

export default FundReceived