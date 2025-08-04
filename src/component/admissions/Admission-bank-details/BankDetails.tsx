'use client';
import React from 'react';
import Table from "react-bootstrap/Table";

const BankDetails = () => {
    return (
        <div className="accordion mt-10" id="accordionExample">
            <div className="tl-event-details-area tl-course-details-curriculum">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"

                        aria-controls="collapseOne"
                    >
                       College Fees and Bus Fees - For All Schools
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">

                        <div className="tl-event-details-left " style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>
                                <div className="col-md-6 col-12"> 
                                <p className="dark-mode-white-color">Students who are taking admission for any school, kindly pay Admission/Bus Fee to -</p>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li><strong>Bank Name</strong> : YES BANK LTD.</li>
                                    <li><strong>Bank Address</strong> : Plot No 234, Station Road,Galli no 8,Jaysingpur ,Tal: Shirol, Dist: Kolhapur, Maharashtra, Pin Code: 416101</li>
                                    <li><strong>Bank Account Number</strong> : 087194600000051</li>
                                    <li><strong>Bank Account Name</strong> : SANJAY GHODAWAT UNIVERSITY</li>
                                    <li><strong>Account Type</strong> : SAVING</li>
                                    <li><strong>IFS Code</strong> : YESB0000871</li>
                                    <li><strong>MICR Code</strong> : 416532151</li>
                                    <li><strong>PAN NO.</strong> : AAAJS7853H</li>
                                </ul>
                               
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
                       Hostel Fees - For All Schools
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                      
                    <div className="tl-event-details-left " style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>
                            <div className="col-md-6 col-12"> 
                               <p className="dark-mode-white-color">Students who are taking admission for Hostel, kindly pay Hostel Fee Seperately to -</p>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li><strong>Bank Name</strong> : State Bank of India.</li>
                                    <li><strong>Bank Address</strong> : Main Road, Gandhi Chowk, Jaysingpur.416 101</li>
                                    <li><strong>Bank Account Number</strong> : 30455387768</li>
                                    <li><strong>Bank Account Name</strong> : Sou. Sushila Danchand Ghodawat Charitable Trust</li>
                                    <li><strong>Account Type</strong> : Current</li>
                                    <li><strong>IFS Code</strong> : SBIN0011136</li>
                                    <li><strong>MICR Code</strong> : 416002590</li>
                                    <li><strong>PAN NO.</strong> : AAATS5501N</li>
                                </ul>
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
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                      For Queries
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                      
                    <div className="tl-event-details-left " style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>
                            <div className="col-md-6 col-12"> 
                            <ul className="tl-event-details-key-content-list phd-container">
                                    <li><strong>Fee Section</strong> : 0230-2463725 Mob No. 9130098769</li>
                                    <li><strong>Fee Section</strong> : 0230-2463730 Mob No. 9552572003</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default BankDetails;