'use client';
import React from 'react';
import Table from "react-bootstrap/Table";

const LibraryAutomation = () => {
    return (
        <div className="accordion mt-10" id="accordionExample">
            <div className="tl-event-details-area tl-course-details-curriculum rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-controls="collapseOne"
                    >
                      Library Automation
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
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                              <div className="tl-14-about-descr col-md-12 col-12"> 
                                <p> 
                                SGUK Knowledge Resource Center uses SLIM 21 software package which is an integrated multi-user Library management system that supports all in-house operations of the library. The SLIM 21 consists of modules on acquisition, cataloguing, circulation, serial control, utilities and OPAC. Retrospective conversion of bibliographic records has been completed and more than 38841 bibliographic records of books available in the library can now be accessed through the SLIM 21 OPAC. The database of books available in the library is being updated on day-to-day basis with details of recently acquired books. Records of all the Library patrons have also been created in the SLIM 21 software version 4.1.1.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="tl-event-details-area tl-course-details-curriculum rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                      IT Infrastructure
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
                        <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                            <div className="tl-14-about-descr col-md-12 col-12"> 
                                <p> 
                                SGUK Knowledge Resource Center is a part of the University-wide network built around a fibre optic Ethernet backbone comprising of five routing switches. The library is connected to the backbone through one of the routing switches. University backbone in turn is connected to 1000 maps of Internet band width on leased links from Jio. The Digital Library has 2 servers, 20 PCs and other accessories adequate to cater to the needs of users. PCs are meant for users to access OPAC, databases, e-books, e-journals, Plagiarism checking software (Turnitin) and other e-resources. Currently the reading areas in the library have Wi-Fi enabled to provide wireless access to the Internet. Users are welcome to use their laptops in the library. Also, all 20 PCs are connected to links of NPTEL video lectures, which includes approximate 12,000+ video lectures for students and faculty members. A part from above 20PC's library is having 7 more computers exclusively used for library administrative work.
                                </p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibraryAutomation;