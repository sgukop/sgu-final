"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function ExamNotice() {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
                <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Examination Notice</h2>
             </div>
             <div className="tl-11-section-heading"><h2 className="tl-11-section-title text-[#4f70b6]">Notice, Circular & Notification</h2></div>
            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Date</p></th>
                  <th><p className="text-[#4f70b6]">Particulrs</p></th>
                  <th><p className="text-[#4f70b6]">Type</p></th>
                </tr>                              
              </thead>
              <tbody>
                <tr>
                  <td><p>04-05-2026</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/6a1e7f635b3f089b85a78a49" rel="noopener noreferrer" target="_blank" className="table-link">NPTL Time Table Summer-2026<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                 <tr>
                  <td><p>04-05-2026</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/69f8689f90f419ef19cce9ca" rel="noopener noreferrer" target="_blank" className="table-link">Last Opportunity of Exam Form NEP Studets<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                 <tr>
                  <td><p>04-05-2026</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/69f868bf90f419ef19cce9cf" rel="noopener noreferrer" target="_blank" className="table-link">Last Opportunity of Exam Form S-2026 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>17-03-2026</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/69c0f704eb0b0a6998c15b35" rel="noopener noreferrer" target="_blank" className="table-link">NEP Backlog Exam Form <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>17-02-2026</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/699459c7601ecefb5ce223fc" rel="noopener noreferrer" target="_blank" className="table-link">All Final Year B.Tech Revised Schedule Notice <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>10-02-2026</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/698c5014496356092bc64786" rel="noopener noreferrer" target="_blank" className="table-link">All Final Year B.Tech & B.Pharmacy and Third Year B.Pharmacy students<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>10-02-2026</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/698c5041496356092bc6478e" rel="noopener noreferrer" target="_blank" className="table-link">All First, Second, and Third Year students under NEP Curriculum (except Third Year B.Pharmacy)<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                 {/*<tr>
                  <td><p>26-11-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/6926e1c1160c943cf4224c2f" rel="noopener noreferrer" target="_blank" className="table-link">MOOC Exam Time Table<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>26-11-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/6926e1af160c943cf4224c2a" rel="noopener noreferrer" target="_blank" className="table-link">Mooc Exam Form Notice<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>24-11-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/692447a6eb601ff3d66987c9" rel="noopener noreferrer" target="_blank" className="table-link">Winter-2025_Exam-Schedule.<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>12-11-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/6916da3f26921e2c8e7f9ae2" rel="noopener noreferrer" target="_blank" className="table-link">All Fourth Year students of B. Tech  <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>12-11-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/6916da5326921e2c8e7f9ae7" rel="noopener noreferrer" target="_blank" className="table-link">All First, Second, and Third Year students NEP Curriculum <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>01-11-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/6905f14da6aabba1bc84645b" rel="noopener noreferrer" target="_blank" className="table-link">Examination Form Submission bynaric <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>01-11-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/6905f159a6aabba1bc846460" rel="noopener noreferrer" target="_blank" className="table-link">NEP Curriculum  Examination Form  Notice<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>30-08-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca5bb458f443fed174b780" rel="noopener noreferrer" target="_blank" className="table-link">REFUND NOTICE for Re-Valuation Fess<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>30-08-2025</p></td>
                  <td><a href="https://www.sanjayghodawatuniversity.ac.in/examination/Additional%20Makeup%20Examination%20Summer%202025.pdf" rel="noopener noreferrer" target="_blank" className="table-link">Additional Make-up Examination - Summer 2025<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>08-07-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/686cfba7ab9e6efa3e79e0e7" rel="noopener noreferrer" target="_blank" className="table-link">Re-Valuation Notice Summer-2025<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>08-07-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca581f58f443fed174b74f" rel="noopener noreferrer" target="_blank" className="table-link"> Exam Form Notice-S-2025 Make-Up20250619 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>08-07-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca580358f443fed174b74a" rel="noopener noreferrer" target="_blank" className="table-link"> Refund Notice Law-Winter-2024  <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>08-07-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca57e258f443fed174b745" rel="noopener noreferrer" target="_blank" className="table-link">Extended exam form submission Core ERP SEM-IV <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>20-03-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca57b958f443fed174b740" rel="noopener noreferrer" target="_blank" className="table-link">Re--Valuation Notice <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>20-03-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca579e58f443fed174b73b" rel="noopener noreferrer" target="_blank" className="table-link"> SEM-IV Exam Form Notice _Core ERP       <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>12-03-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca573558f443fed174b736" rel="noopener noreferrer" target="_blank" className="table-link"> 1nd year_CORE ERP      <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>12-03-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca571a58f443fed174b731" rel="noopener noreferrer" target="_blank" className="table-link"> 2nd year_CORE ERP      <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>10-03-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca56f058f443fed174b72c" rel="noopener noreferrer" target="_blank" className="table-link"> Student refund request form revaluation     <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>10-03-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca56ba58f443fed174b727" rel="noopener noreferrer" target="_blank" className="table-link"> Refund Notice    <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>05-03-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca569058f443fed174b722" rel="noopener noreferrer" target="_blank" className="table-link"> Extended Exam Form Notice Bynaric ERP    <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>05-03-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca561558f443fed174b719" rel="noopener noreferrer" target="_blank" className="table-link">Extended Exam Form Notice Core ERP   <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>14-02-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca55ee58f443fed174b714" rel="noopener noreferrer" target="_blank" className="table-link">Notice_degree correction   <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>14-02-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca55c958f443fed174b70f" rel="noopener noreferrer" target="_blank" className="table-link">Notice for Summer-2025 examination  <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>23-01-2025</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/68ca558b58f443fed174b70a" rel="noopener noreferrer" target="_blank" className="table-link">Amendments in Exam Ordinances 2024 23_01_2025 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>08-11-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a6cd69173bf9f471ac3e9" rel="noopener noreferrer" target="_blank" className="table-link">Last opportunity for Submission of Exam Form winter-2024 Bynaric <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>08-11-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a6d479173bf9f471ac3ee" rel="noopener noreferrer" target="_blank" className="table-link">Last opportunity for Submission of Exam Form winter-2024 Core <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>08-11-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a6d6c9173bf9f471ac3f3" rel="noopener noreferrer" target="_blank" className="table-link">Ph.D Submission of Exam Form winter-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>08-11-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a6d949173bf9f471ac3f8" rel="noopener noreferrer" target="_blank" className="table-link">Final opportunity for Examination form Bynaric <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>08-11-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a6db79173bf9f471ac3fd" rel="noopener noreferrer" target="_blank" className="table-link">Revised_Exam Form Notice-CORE ERP <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>18-10-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a6ddb9173bf9f471ac402" rel="noopener noreferrer" target="_blank" className="table-link">Revised Schedule For Exam Form-18-10-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>18-10-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a6df79173bf9f471ac407" rel="noopener noreferrer" target="_blank" className="table-link">Revised Schedule For Exam Form <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>15-10-2024</p></td>
                  <td><a href="##" rel="noopener noreferrer" target="_blank" className="table-link">Exam form Submission Notice_Bynaric ERP <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>15-10-2024</p></td>
                  <td><a href="##" rel="noopener noreferrer" target="_blank" className="table-link">Exam form Submission Notice_CORE ERP <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>02-08-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a70569173bf9f471ac433" rel="noopener noreferrer" target="_blank" className="table-link">Re-SEE Exam Form All First-Year Bynaric <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>02-08-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a70729173bf9f471ac438" rel="noopener noreferrer" target="_blank" className="table-link">Re-SEE Exam Form All First-Year Core <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>02-08-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a70b29173bf9f471ac43f" rel="noopener noreferrer" target="_blank" className="table-link">Re-SEE Exam Form Second Year-onwards<i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>


                <tr>
                  <td><p>01-08-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a717e9173bf9f471ac452" rel="noopener noreferrer" target="_blank" className="table-link">Re-SEE 24 Rescheduled <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>
                <tr>
                  <td><p>29-07-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a71ce9173bf9f471ac459" rel="noopener noreferrer" target="_blank" className="table-link">RE-SEE Exam Form Notice First-Year Bynaric ERP <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>29-07-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a72129173bf9f471ac460" rel="noopener noreferrer" target="_blank" className="table-link">RE-SEE Exam Form Notice First-Year Core ERP <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>29-07-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a72889173bf9f471ac46d" rel="noopener noreferrer" target="_blank" className="table-link">RE-SEE Exam Form Notice Second Year onwards Bynaric ERP <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>17-07-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a72c39173bf9f471ac474" rel="noopener noreferrer" target="_blank" className="table-link">Revaluation notice for Summer 2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>06-06-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a730f9173bf9f471ac481" rel="noopener noreferrer" target="_blank" className="table-link">Re-valuation / Photocopy/ Re-Verification Summer-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>06-06-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a73799173bf9f471ac48a" rel="noopener noreferrer" target="_blank" className="table-link">Exam form Submission for Course II2802 Semester VIII <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>29-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a742c9173bf9f471ac497" rel="noopener noreferrer" target="_blank" className="table-link">Overlap SEE Circular <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>29-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a747a9173bf9f471ac4a0" rel="noopener noreferrer" target="_blank" className="table-link">SEE for overlap subjects (due to carry on & equivalence) <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>28-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a74bf9173bf9f471ac4a9" rel="noopener noreferrer" target="_blank" className="table-link">Exam form Submission Notice of PhD Scholars Summer_28-05-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>28-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a75199173bf9f471ac4b4" rel="noopener noreferrer" target="_blank" className="table-link">Exam timetable Overlapping (Subject) for Summer 2024 Examination_27-05-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>28-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a755f9173bf9f471ac4bb" rel="noopener noreferrer" target="_blank" className="table-link">Notification_Resolutions Summer 2024 Examination_06.05.2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>14-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a75a99173bf9f471ac4c4" rel="noopener noreferrer" target="_blank" className="table-link">Exam form submission Notice_14 5 2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>14-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a75eb9173bf9f471ac4cb" rel="noopener noreferrer" target="_blank" className="table-link">Students Notice_ERP Photo Uploading <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>06-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a76329173bf9f471ac4d2" rel="noopener noreferrer" target="_blank" className="table-link">submission for Summer 2024 examination <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>06-05-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a76329173bf9f471ac4d2" rel="noopener noreferrer" target="_blank" className="table-link">Extended Exam form Submission Date notice_6 5 2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>26-04-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a76cb9173bf9f471ac4d9" rel="noopener noreferrer" target="_blank" className="table-link">F.Y Exam Form Bynaric Notice <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>26-04-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a770a9173bf9f471ac4e0" rel="noopener noreferrer" target="_blank" className="table-link">F.Y Exam Form Core Notice 24-04-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>26-04-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a774a9173bf9f471ac4e9" rel="noopener noreferrer" target="_blank" className="table-link">S.Y.T.Y.Final Year Exam Form Notice-24-04-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>29-03-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a77909173bf9f471ac4f0" rel="noopener noreferrer" target="_blank" className="table-link">Fy exam form notice-bynaric ERP <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>29-03-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a77c79173bf9f471ac4f7" rel="noopener noreferrer" target="_blank" className="table-link">Fy exam form notice-core ERP <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>28-03-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a78079173bf9f471ac4fe" rel="noopener noreferrer" target="_blank" className="table-link">Exam Form Notice SY onwards 28-03-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>25-03-2024</p></td>
                  <td><a href="https://manage-api.sguk.ac.in/api/assets/675a789e9173bf9f471ac505" rel="noopener noreferrer" target="_blank" className="table-link">Exam Form D.Pharmacy <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr> */}

               
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamNotice;
