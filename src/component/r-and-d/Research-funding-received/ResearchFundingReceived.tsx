"use client"
import Link from 'next/link'
import React from 'react'
import Table from "react-bootstrap/Table";

const ResearchFundingReceived = () =>  {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title mb-50">Research & Development Cell</h2>
            <div className="tl-event-details-left mt-30">
                <h4 className="dark-mode-white-color">Funds Received in 2019-20</h4>
                    <div className="tl-event-details-key-content tl-event-details-area">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                <Table bordered  responsive className="governing-table">
                                    <thead>
                                        <tr>
                                            <th><p>Sr. No.</p></th>
                                            <th><p>Project Details</p></th>
                                            <th><p>Name of the Faculty</p></th>
                                            <th><p>Department</p></th>
                                            <th><p>Amount(in Rs.)</p></th>
                                            <th><p>Remark(Sanctioned/Received)</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>1</p></td>
                                            <td><p>Automatic and Smart Toilets using IoT and Image Processing for Smart Cities</p></td>
                                            <td><p>Dr. N. B. Bhahadure</p></td>
                                            <td><p>E&TC</p></td>
                                            <td><p>30,000.00</p></td>
                                            <td><p>Sanctioned</p></td>
                                        </tr>

                                        <tr style={{backgroundColor:"#F4B826"}}>
                                            <td colSpan={4}><p className="text-center"><strong>Total</strong></p></td>
                                            <td colSpan={2}><p className="text-center"><strong>30,000.00</strong></p></td>
                                        </tr>
                                    </tbody>
                                 </Table>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="tl-event-details-left mt-30">
                <h4 className="dark-mode-white-color">Funds Received in 2018-19</h4>
                    <div className="tl-event-details-key-content tl-event-details-area">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                <Table bordered  responsive className="governing-table">
                                    <thead>
                                        <tr>
                                            <th><p>Sr. No.</p></th>
                                            <th><p>Project Details</p></th>
                                            <th><p>Name of the Faculty</p></th>
                                            <th><p>Department</p></th>
                                            <th><p>Amount(in Rs.)</p></th>
                                            <th><p>Remark(Sanctioned/Received)</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>1</p></td>
                                            <td><p>Research Sensitization Scheme Under Lead college Activity Shivaji University</p></td>
                                            <td><p>--</p></td>
                                            <td><p>Civil</p></td>
                                            <td><p>10,000.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>2</p></td>
                                            <td><p>Two days workshop on “Drone Making” , Lead college activity Shivaji University</p></td>
                                            <td><p>Ms. P. K. Akulwar , Mr. Rahul Sonkamble</p></td>
                                            <td><p>CSE</p></td>
                                            <td><p>15,000.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>3</p></td>
                                            <td><p>Two day's workshop on “Machine Learning for Data Science” Lead college activity Shivaji University</p></td>
                                            <td><p>Dr. B. C. Melinamath</p></td>
                                            <td><p>C.S.E.</p></td>
                                            <td><p>20,000.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>4</p></td>
                                            <td><p>Two day's workshop on “Automotive Mechatronic” Lead college activity Shivaji University 8-9 March 2019</p></td>
                                            <td><p>Mr. PravinBidkar</p></td>
                                            <td><p>E&TC</p></td>
                                            <td><p>15,000.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>5</p></td>
                                            <td><p>Entrepreneurship Awareness Camp, 10-12 Jan 2019 funded by EDI under DST/NIMAT MHRD</p></td>
                                            <td><p>Mr. S M Hirikude</p></td>
                                            <td><p>E&TC</p></td>
                                            <td><p>20,000.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>6</p></td>
                                            <td><p>Lecture Workshop on "Recent Advances in Algorithms & Graph Theory with respect to machine learning" under Science Academies, Indian Academy of Science (IASc) Bengaluru, Indian National Science Academy</p></td>
                                            <td><p>Dr. B. Melinmath</p></td>
                                            <td><p>C.S.E</p></td>
                                            <td><p>1,31,500.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>7</p></td>
                                            <td><p>	
                                            First National Conference on Space and Atmospheric Science (NCSAS-2019), 10-11 May, 2019 sponsored by DST-SERB</p></td>
                                            <td><p>Dr. D. P.Nade</p></td>
                                            <td><p>Physics</p></td>
                                            <td><p>2,50,000.00</p></td>
                                            <td><p>Sanctioned</p></td>
                                        </tr>

                                        <tr style={{backgroundColor:"#F4B826"}}>
                                            <td colSpan={4}><p className="text-center"><strong>Total</strong></p></td>
                                            <td colSpan={2}><p className="text-center"><strong>4,61,000.00</strong></p></td>
                                        </tr>
                                    </tbody>
                                 </Table>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="tl-event-details-left mt-30">
                <h4 className="dark-mode-white-color">Funds Received in 2017-18</h4>
                    <div className="tl-event-details-key-content tl-event-details-area">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-12 col-md-12 col-12 col-xxs-12">
                                <Table bordered  responsive className="governing-table">
                                    <thead>
                                        <tr>
                                            <th><p>Sr. No.</p></th>
                                            <th><p>Project Details</p></th>
                                            <th><p>Name of the Faculty</p></th>
                                            <th><p>Department</p></th>
                                            <th><p>Amount(in Rs.)</p></th>
                                            <th><p>Remark(Sanctioned/Received)</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>1</p></td>
                                            <td><p>Development of Fatigue Life prediction models of  carbon epoxy composites by model testing  sponsored by DRDO</p></td>
                                            <td><p>Dr. V. V. Kulkarni</p></td>
                                            <td><p>Mechanical Engg.</p></td>
                                            <td><p>26,80,000.00</p></td>
                                            <td><p>Received Rs.20Lac</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>2</p></td>
                                            <td><p>Research Sensitization Scheme Under Lead college Activity Shivaji University</p></td>
                                            <td><p>Mr. Nilesh Desai</p></td>
                                            <td><p>Mechanical Engg.</p></td>
                                            <td><p>9,951.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>3</p></td>
                                            <td><p>ISHARE research Proposal Grant</p></td>
                                            <td><p></p></td>
                                            <td><p>Mechanical Engg.</p></td>
                                            <td><p>26,250.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>4</p></td>
                                            <td><p>AICTE, Travel Grant for presenting paper titled on “Effect of change in position of neutral axis on thr bending of functionally graded  plates” at 3rd International Conference on Mechanics of composites(MECHCOMP3),Bolonga,Italy 4-7/07/2017</p></td>
                                            <td><p>Dr. S.M. Shiyekar</p></td>
                                            <td><p>Civil</p></td>
                                            <td><p>1,15,683.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>5</p></td>
                                            <td><p>Entrepreneurship Awareness Camp, 27-29 June 2018 funded by EDI under DST/NIMAT MHRD</p></td>
                                            <td><p>Mr. S. M. Hirikude</p></td>
                                            <td><p>E&TC</p></td>
                                            <td><p>20,000.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>6</p></td>
                                            <td><p>To investigate the aerosol distributions and ozone depletion using the TPM over Atigre Village at Kolhapur region</p></td>
                                            <td><p>Dr. D. P. Nade</p></td>
                                            <td><p>Physics</p></td>
                                            <td><p>21,00,000.00</p></td>
                                            <td><p>Sanctioned & Received Rs.16 lac</p></td>
                                        </tr>

                                        <tr>
                                            <td><p>7</p></td>
                                            <td><p>Lecture Workshop on "Recent advance in Catalysis Sciences" under Science Academies, Indian Academy of Science (IASc) Bengaluru, Indian National Science Academy</p></td>
                                            <td><p>Dr. P. D. Bhange</p></td>
                                            <td><p>Chemistry</p></td>
                                            <td><p>1,65,000.00</p></td>
                                            <td><p>Received</p></td>
                                        </tr>

                                        <tr style={{backgroundColor:"#F4B826"}}>
                                            <td colSpan={4}><p className="text-center"><strong>Total</strong></p></td>
                                            <td colSpan={2}><p className="text-center"><strong>51,16,884.00</strong></p></td>
                                        </tr>
                                    </tbody>
                                 </Table>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
   
  )
}

export default ResearchFundingReceived