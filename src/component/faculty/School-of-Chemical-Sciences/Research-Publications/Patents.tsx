import Link from 'next/link';
import React from 'react';

const Patents = () => {
  return (
    <div className="accordion" id="patents">
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
         
          aria-controls="collapseOne"
        >
          2021-2022
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#patents"
      >
        <div className="accordion-body">
        <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Mrs Ruth M. Kamble, Dr. Pallavi Bhange, Dr. Abhinandan Patil, 2022, Intranasal Drug Delivery Device, Indian Patent:354384-001.</li>
                                <li>Dr. Abhinandan Ravsaheb Patil, Dr. Ajay Sarjerao Nalawade, Ms. Nita Bhauso Pawar, 2022, Plant Extract Analyzing Device to Identify Disease, Indian Patent: 357958-001 357958-001.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
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
           2022-2023
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#patents"
      >
        <div className="accordion-body">
        <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Ms. Nita Bhauso Pawar, Dr. Sunetra Deshmukh, Dr. Abhinandan Ravsaheb Patil, Priya Prasad Dhokarikar, 2023, Blood Glucose Meter with Insulin Dispenser, IP-Australian patent: 202215920.</li>
                                <li>Dr. Abhinandan Ravsaheb Patil, Dr. Ajay Sarjerao Nalawade, Dr. S. K. B. Sangeetha, Mr. Prashant M. Desai, 2023, Portable Briefcase for Plant Transportation, Indian patent: 375335-001.</li>
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

export default Patents