'use client';
import React from 'react';
import Table from "react-bootstrap/Table";
import { openElectiveI,openElectiveII,openElectiveIII,openElectiveIV,openElectiveV } from '@/data/Data';
import Link from 'next/link';

const OpenElective = () => {
    return (
      <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container">
            <div className="row gy-4 align-items-center">
                <div className="d-flex justify-content-center"><h2 className="tl-2-section-title">Open Electives</h2></div>
                    <div className="col-lg-12">
                        <div className="accordion mt-10" id="openelective">
                            <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-controls="collapseOne"
                                    >
                                   Open Elective I
                                    </button>
                                </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#openelective"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <Table responsive className="governing-table">
                                            <thead>
                                                <tr>
                                                    <th><p>Sr. No.</p></th>
                                                    <th><p>Course Code</p></th>
                                                    <th><p>Course Title</p></th>
                                                    <th><p>Credits</p></th>
                                                    <th><p>School/Faculty</p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {openElectiveI.map((item) => (
                                                    <tr key= {item.id}>
                                                        <td><p>{item.id}</p></td>
                                                        <td><p>{item.courseCode}</p></td>
                                                        <td><Link href={item.slug} rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">{item.courseTitle} <i className="fa-regular fa-arrow-right"></i></Link></td>
                                                        <td><p>{item.credits}</p></td>
                                                        <td><p>{item.School}</p></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                  Open Elective II
                                    </button>
                                </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#openelective"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <Table responsive className="governing-table">
                                            <thead>
                                                <tr>
                                                    <th><p>Sr. No.</p></th>
                                                    <th><p>Course Code</p></th>
                                                    <th><p>Course Title</p></th>
                                                    <th><p>Credits</p></th>
                                                    <th><p>School/Faculty</p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {openElectiveII.map((item) => (
                                                    <tr key= {item.id}>
                                                        <td><p>{item.id}</p></td>
                                                        <td><p>{item.courseCode}</p></td>
                                                        <td><Link href={item.slug} rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">{item.courseTitle} <i className="fa-regular fa-arrow-right"></i></Link></td>
                                                        <td><p>{item.credits}</p></td>
                                                        <td><p>{item.School}</p></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                   Open Elective III
                                    </button>
                                </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#openelective"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <Table responsive className="governing-table">
                                            <thead>
                                                <tr>
                                                    <th><p>Sr. No.</p></th>
                                                    <th><p>Course Code</p></th>
                                                    <th><p>Course Title</p></th>
                                                    <th><p>Credits</p></th>
                                                    <th><p>School/Faculty</p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {openElectiveIII.map((item) => (
                                                    <tr key= {item.id}>
                                                        <td><p>{item.id}</p></td>
                                                        <td><p>{item.courseCode}</p></td>
                                                        <td><Link href={item.slug} rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">{item.courseTitle} <i className="fa-regular fa-arrow-right"></i></Link></td>
                                                        <td><p>{item.credits}</p></td>
                                                        <td><p>{item.School}</p></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                   Open Elective IV
                                    </button>
                                </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#openelective"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <Table responsive className="governing-table">
                                            <thead>
                                                <tr>
                                                    <th><p>Sr. No.</p></th>
                                                    <th><p>Course Code</p></th>
                                                    <th><p>Course Title</p></th>
                                                    <th><p>Credits</p></th>
                                                    <th><p>School/Faculty</p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {openElectiveIV.map((item) => (
                                                    <tr key= {item.id}>
                                                        <td><p>{item.id}</p></td>
                                                        <td><p>{item.courseCode}</p></td>
                                                        <td><Link href={item.slug} rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">{item.courseTitle} <i className="fa-regular fa-arrow-right"></i></Link></td>
                                                        <td><p>{item.credits}</p></td>
                                                        <td><p>{item.School}</p></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-controls="collapseFive"
                                    >
                                   Open Elective V
                                    </button>
                                </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#openelective"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <Table responsive className="governing-table">
                                            <thead>
                                                <tr>
                                                    <th><p>Sr. No.</p></th>
                                                    <th><p>Course Code</p></th>
                                                    <th><p>Course Title</p></th>
                                                    <th><p>Credits</p></th>
                                                    <th><p>School/Faculty</p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {openElectiveV.map((item) => (
                                                    <tr key= {item.id}>
                                                        <td><p>{item.id}</p></td>
                                                        <td><p>{item.courseCode}</p></td>
                                                        <td><Link href={item.slug} rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">{item.courseTitle} <i className="fa-regular fa-arrow-right"></i></Link></td>
                                                        <td><p>{item.credits}</p></td>
                                                        <td><p>{item.School}</p></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
       
    )
}

export default OpenElective;