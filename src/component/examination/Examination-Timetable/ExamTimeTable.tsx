import Link from "next/link";
import React from "react";

const ExamTimeTable = () => {

  const examData = [
    { name: "CIRCULAR 15-5-2026", link: "https://manage-api.sguk.ac.in/api/assets/6a0ed0a11125cf338030924d" },
    { name: "CIRCULAR 21-5-2026", link: "https://manage-api.sguk.ac.in/api/assets/6a0ed0851125cf3380309246" },
    { name: "M Tech Aero Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fadd32ac9a0b02a5b20778" },
    { name: "M Tech AIML AIDS Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fadd5cac9a0b02a5b2077d" },
    { name: "M Tech Civil Construction Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fadd89ac9a0b02a5b20782" },
    { name: "M Tech Civil Structure Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69faddc2ac9a0b02a5b20787" },
    { name: "Master of Pharmacy Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69faddf5ac9a0b02a5b2078c" },
    { name: "MBA Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fadea7ac9a0b02a5b20797" },
    { name: "MBA-DM Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fc7c8e8080b897906ff8b0" },
    { name: "MCA Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fadf5dac9a0b02a5b207a4" },
    { name: "Mechanical Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fadfc2ac9a0b02a5b207ac" },
    { name: "MLT Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae04bac9a0b02a5b207b4" },
    { name: "Aero Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae097ac9a0b02a5b207b9" },
    { name: "AIDS Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae0b3ac9a0b02a5b207be" },
    { name: "AIML Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae161ac9a0b02a5b207c3" },
    { name: "B Pharm Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae1c3ac9a0b02a5b207c8" },
    { name: "B Sc Physics & Chemistry Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae20aac9a0b02a5b207cd" },
    { name: "BA Revised Timetable S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae275ac9a0b02a5b207d2" },
    { name: "Bachelor of Laws Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae2d2ac9a0b02a5b207d7" },
    { name: "BBA Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae4bdac9a0b02a5b207de" },
    { name: "BCA Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae54cac9a0b02a5b207e3" },
    { name: "B Com Revised Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae5f1ac9a0b02a5b207f3" },
    { name: "Biotechnology Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae5c5ac9a0b02a5b207ec" },
    { name: "BJMC Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae61dac9a0b02a5b207f8" },
    { name: "Civil Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae690ac9a0b02a5b20802" },
    { name: "CRT Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae676ac9a0b02a5b207fd" },
    { name: "CSE Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae6d7ac9a0b02a5b20807" },
    { name: "Design Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae6f5ac9a0b02a5b2080c" },
    { name: "E & C Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae772ac9a0b02a5b20811" },
    { name: "Electrical Time Table S-2026", link: "https://manage-api.sguk.ac.in/api/assets/69fae78cac9a0b02a5b20816" },
    { name: "FST Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae828ac9a0b02a5b2081b" },
    { name: "M Sc Chemistry Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae839ac9a0b02a5b20820" },
    { name: "M Sc Physics Time Table S 26", link: "https://manage-api.sguk.ac.in/api/assets/69fae85eac9a0b02a5b20825" },
  ];

  return (
    <div className="tl-event-details-container pt-100 pb-100">
      <div className="container text-center">

        {/* Title */}
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-10">
          Examination Time Table
        </h2>

        {/* Table */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl overflow-x-auto">

            <table className="table table-bordered table-striped w-full table-fixed">

              <thead className="bg-[#4f70b6] text-white">
                <tr>
                  <th className="text-center w-[80px]">Sr. No.</th>
                  <th className="text-center">Examination Name</th>
                  <th className="text-center w-[120px]">Download</th>
                </tr>
              </thead>

              <tbody>
                {examData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition">
                    
                    <td className="text-center align-middle">
                      {index + 1}
                    </td>

                    <td className="text-start px-3 py-2 break-words">
                      {item.name}
                    </td>

                    <td className="text-center align-middle">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                      >
                        <i className="fa-regular fa-down-to-bracket text-lg text-blue-700"></i>
                      </Link>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ExamTimeTable;