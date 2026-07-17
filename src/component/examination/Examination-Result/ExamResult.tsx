"use client";

import React from "react";
import Table from "react-bootstrap/Table";

const results = [
  {
    date: "17-07-2026",
    title: "Result Declaration Summer-2026 Design",
    link: "https://manage-api.sguk.ac.in/api/assets/6a59ecc66134c4211ee481c9",
  },
  {
    date: "17-07-2026",
    title: "Result Declaration Summer-2026 AIML",
    link: "https://manage-api.sguk.ac.in/api/assets/6a59ed2f6134c4211ee481ce",
  },
  {
    date: "01-06-2026",
    title: "Result Declaration Summer-2026 Notice-01-06-2026-1",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44eee6634f29742167a488",
  },
  {
    date: "01-06-2026",
    title: "Result Declaration Notice",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44ef59634f29742167a493",
  },
  {
    date: "01-06-2026",
    title: "CSE Non-NEP Curriculum",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44ef6d634f29742167a498",
  },
  {
    date: "01-06-2026",
    title: "AIML & B.Pharmacy",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44ef82634f29742167a49d",
  },
  {
    date: "01-06-2026",
    title: "Aero, Civil, Mechanical & Electrical",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44ef9c634f29742167a4a2",
  },
  {
    date: "01-06-2026",
    title: "FST & MLT",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44efae634f29742167a4a7",
  },
  {
    date: "01-06-2026",
    title: "B.Pharmacy & Civil Engineering",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44efc2634f29742167a4ac",
  },
  {
    date: "01-06-2026",
    title: "B.Sc Biotechnology",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44efd6634f29742167a4b1",
  },
  {
    date: "01-06-2026",
    title: "LLB",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44f00d634f29742167a4bf",
  },
  {
    date: "01-06-2026",
    title: "B.Design",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44f01e634f29742167a4c4",
  },
  {
    date: "01-06-2026",
    title: "BBA / CRT / BCA / CSE / Design",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44f03e634f29742167a4c9",
  },
  {
    date: "01-06-2026",
    title: "BA",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44f04e634f29742167a4ce",
  },
  {
    date: "01-06-2026",
    title: "BBA",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44f060634f29742167a4d3",
  },
  {
    date: "01-06-2026",
    title: "B.Sc Chemistry",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44f072634f29742167a4d8",
  },
  {
    date: "01-06-2026",
    title: "BJMC",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44f083634f29742167a4df",
  },
  {
    date: "01-06-2026",
    title: "M.Pharm",
    link: "https://manage-api.sguk.ac.in/api/assets/6a44f095634f29742167a4e4",
  },
];

const ExamResult = () => {
  return (
    <div className="tl-staff-profile pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
          Examination Results Notice
        </h2>

        <div className="tl-event-details-left mt-30">
          <h3 className="tl-event-details-area-title mb-10 text-[#4f70b6]">
            Result Declaration Notice
          </h3>

          <Table bordered hover responsive className="governing-table">
            <thead>
              <tr>
                <th >Date</th>
                <th >Notice</th>
                <th  className="text-center">
                  Download
                </th>
              </tr>
            </thead>

            <tbody>
              {results.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>

                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="table-link"
                    >
                      {item.title}
                    </a>
                  </td>

                  <td className="text-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fa-solid fa-download me-2"></i>
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ExamResult;