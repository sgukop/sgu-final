"use client"
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";

const OnlineWebsiteLink = () =>  {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title mb-50">Anti-Ragging Web Site Link</h2>
            <div className="tl-event-details-left">
                <div className="tl-event-details-key-content tl-event-details-area">
                    <div className="row tl-event-details-row g-0">
                        <h6 className="tl-8-feature-title">How to fill Anti-Ragging Undertaking</h6>
                        <p className="dark-mode-white-color">Dear Students,<br/><br/>

                            It is mandatory for each student to submit an online undertaking at each academic year.Anti-ragging declaration form is now made online. Following is the procedure to apply online: <br/>

                            You will require following information for filling University details</p>
                    </div>
                    <div className="row tl-event-details-row g-0">
                        <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                            <Table bordered  responsive className="governing-table">
                                <thead>
                                    <tr>
                                        <th><p>Vice chancellor name</p></th>
                                        <th><p>University Phone no</p></th>
                                        <th><p>University Landline No</p></th>
                                        <th><p>Nearest Police Station</p></th>
                                        <th><p>Nodal Officer</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>Dr. Udhav Bhosle</p></td>
                                        <td><p>+91 90110 22567</p></td>
                                        <td><p>02302463705</p></td>
                                        <td><p>Hatkanangale</p></td>
                                        <td><p><strong><i className="fa-regular fa-user"></i> Dr. Indrajit A. Kamble</strong><br/> <i className="fa-regular fa-mobile"></i> +91 9545548341 <br/>
                                            <i className="fa-regular fa-envelope"></i>  Indrajit.kamble@sanjayghodawatuniversity.ac.in</p></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row tl-event-details-row g-0 mt-20">
                        <h6 className="tl-8-feature-title">Go to</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li><Link href="https://www.antiragging.in/affidavit_university_form.php" target='_blank'>
                                <h6 className="tl-3-single-program-title publication-title">Anti Ragging Web Site Link <i className="fa-regular fa-arrow-right-long"></i></h6>
                            </Link></li><span className="ml-20 dark-mode-white-color">OR</span>
                            <li><Link href="https://www.antiragging.in/" target='_blank'>
                                <h6 className="tl-3-single-program-title publication-title">Anti Ragging Web Site Link <i className="fa-regular fa-arrow-right-long"></i></h6>
                            </Link></li>
                            <p className="dark-mode-white-color">You will get Affidavit Registration Form For Universities</p>
                        </ul>

                        <h6 className="tl-8-feature-title">Step 1:</h6>
                        <p className="dark-mode-white-color">Fill in the information as required for you and your parents in first and second section.In third section fill University and Course Details</p>

                        <h6 className="tl-8-feature-title">Step 2:</h6>
                        <p className="dark-mode-white-color">On successful completion the student will receive REFERENCE NUMBER on their provided email id. This reference number is unique number and Student must provide this reference no the respective departmental Anti-ragging committee member.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default OnlineWebsiteLink