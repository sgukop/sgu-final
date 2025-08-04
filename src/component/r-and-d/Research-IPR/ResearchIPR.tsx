"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function ResearchIPR() {
  return (
    <div className="pt-100 pb-100 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
            <div className="col-lg-12">
                <div className="governing-body">
                    <h2 className="tl-9-section-title mb-50">Research & Development Cell</h2>
                </div>
                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">IPR - Patents Filled</h2></div>
                    <Table striped bordered hover responsive className="governing-table">
                        <thead>
                            <tr>
                                <th><p>Sr No</p></th>
                                <th><p>Applicant / Inventor</p></th>
                                <th><p>Application No.</p></th>
                                <th><p>Date of Filing</p></th>
                                <th><p>Publication Date</p></th>
                                <th><p>Title of Invention</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>1</p></td>
                                <td><p>S R Kumbar and others</p></td>
                                <td><p>201921019332</p></td>
                                <td><p>15/05/2019</p></td>
                                <td><p>Under process</p></td>
                                <td><p>Invention:A Device and process for soldering of ornaments / jewelry</p></td>
                            </tr>

                            <tr>
                                <td><p>2</p></td>
                                <td><p>Devendra Gowda and others</p></td>
                                <td><p>201921033250</p></td>
                                <td><p>02/08/2019</p></td>
                                <td><p>Under process</p></td>
                                <td><p>Smart Grid Integration: Renewable based Micro hybrid power system</p></td>
                            </tr>

                            <tr>
                                <td><p>3</p></td>
                                <td><p>Sanjay Ghodawat Group of Institutions / Dr.Vivek Vasantrao Kulkarni</p></td>
                                <td><p>201921002603 A</p></td>
                                <td><p>22/01/2019</p></td>
                                <td><p>01/02/2019</p></td>
                                <td><p>Device for Measuring Reaction of Beam using floating Bracket Assembly.</p></td>
                            </tr>

                            <tr>
                                <td><p>4</p></td>
                                <td><p>Dr.A D Sawant</p></td>
                                <td><p>16/113,002 Pub No:US2019/0060883A1</p></td>
                                <td><p>27/08/2018</p></td>
                                <td><p>28/02/2019</p></td>
                                <td><p>Magnetic Particle Ionic Liquid Composite Materials And Methods Of Making And Use Thereof.</p></td>
                            </tr>

                            <tr>
                                <td><p>5</p></td>
                                <td><p>Pooja Kishor Akulwar and Mukesh Ramniranjan Kabra</p></td>
                                <td><p>201721015098</p></td>
                                <td><p>28/04/2017</p></td>
                                <td><p>02/11/2018</p></td>
                                <td><p>An Automated Sprinkler Irrigation Control System and method therefor</p></td>
                            </tr>

                            <tr>
                                <td><p>6</p></td>
                                <td><p>Mr. Shivaprasad Sakharam More</p></td>
                                <td><p>201721011991 A</p></td>
                                <td><p>03/04/2017</p></td>
                                <td><p>11/08/2017</p></td>
                                <td><p>Lossless Video Transmission Over Multi-Hop Design and Efficient Emergency Message Data Dissemination in Vanet.</p></td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">IPR - Copyrights</h2></div>
                    <Table striped bordered hover responsive className="governing-table">
                        <thead>
                            <tr>
                                <th><p>Sr No</p></th>
                                <th><p>Applicant</p></th>
                                <th><p>Application No.</p></th>
                                <th><p>Title of Work</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>1</p></td>
                                <td><p>Dr.Vivek Vasantrao Kulkarni</p></td>
                                <td><p>L-81463/2019</p></td>
                                <td><p>Expert System Based Adjustable Fixture Design.</p></td>
                            </tr>
                        </tbody>
                    </Table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchIPR;
