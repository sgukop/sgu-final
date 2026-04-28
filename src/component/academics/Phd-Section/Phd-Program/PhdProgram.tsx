import React from "react";

const PhdProgram = () => {
  return (
    <div className="tl-event-details-container pt-100 pb-100">
      <div className="container">
        <div className="row tl-event-details-row g-0">
          <div className="col-lg-12">

            {/* ================= HEADING ================= */}
            <h2 className="universityobject-heading dark-mode-white-color py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
              Ph.D. Section
            </h2>

{/* ================= TOP LINKS TABLE ================= */}
<div className="table-responsive mb-5">
  <table className="table table-bordered table-hover">
    <thead className="bg-[#4f70b6] text-white">
      <tr>
        <th>No</th>
        <th>Document Name</th>
        <th>Format</th>
        <th>Open</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>01</td>
        <td>Ph.D. Ordinance</td>
        <td>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">PDF</span>
        </td>
        <td>
          <a href="https://manage-api.sguk.ac.in/api/assets/6756ce1b9173bf9f471abed0" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-file-pdf text-red-500"></i>
          </a>
        </td>
      </tr>

      <tr>
        <td>02</td>
        <td>Ph.D. Course Work Guidelines</td>
        <td>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">PDF</span>
        </td>
        <td>
          <a href="https://manage-api.sguk.ac.in/api/assets/6756cbfb9173bf9f471abea9" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-file-pdf text-red-500"></i>
          </a>
        </td>
      </tr>

      <tr>
        <td>03</td>
        <td>List of Supervisers</td>
        <td>
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">DOCX</span>
        </td>
        <td>
          <a href="https://manage-api.sguk.ac.in/api/assets/6756cc169173bf9f471abeae" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-file-word text-blue-500"></i>
          </a>
        </td>
      </tr>

      

      <tr>
        <td>04</td>
        <td>Circular</td>
        <td>
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">PDF</span>
        </td>
        <td>
          <a href="https://manage-api.sguk.ac.in/api/assets/6756cb1a9173bf9f471abe8e" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-file-pdf text-red-500"></i>
          </a>
        </td>
      </tr>

    </tbody>
  </table>
</div>
            {/* ================= PhD TABLE ================= */}
            <div className="table-responsive mb-5">
              <table className="table table-bordered table-hover">
                <thead className="bg-[#4f70b6] text-white">
                  <tr>
                    <th>No</th>
                    <th>Document Name</th>
                    <th>PDF</th>
                    <th>Word</th>
                  </tr>
                </thead>
                <tbody>

                  {[
                    ["01","Research Proposal Template","01_Research Proposal Template"],
                    ["02","Six Month Progress Report","02_Approved Ph. D Six Month Progress Report"],
                    ["03","Progress Report Submission","03_Approved Six-month PhD Progress Report Submission"],
                    ["04","PhD APS Guidelines","04_Approved PhD APS Guidelines"],
                    ["05","APS Report & Pre-PhD Seminar","05_Approved APS Report cum Extension of Ph. D Registration_Pre-PhD Seminar Form"],
                    ["06","PhD Synopsis Manual","06_Aproved Manual_Phd-Synosis"],
                    ["07","PhD Synopsis Template","07_Approved PhD Synopsis Template"],
                    ["08","Thesis Preparation Guidelines","08_Approved Guidelines for Peparation of PhD Thesis"],
                    ["09","Thesis Template","09_Approved SGU Ph.D. Thesis Template"],
                    ["10","Evaluator Appointment Letter","10_Approved PhD Evaluater Appointment Letter"],
                    ["11","Adjudication Report","11_Approved Ph.D Adjudication Report"],
                    ["12","Thesis Evaluation Letter","12_Approved PhD Evaluation of Thesis Letter"],
                    ["13","Remuneration Bill","13_Approved PhD Examination Remulneration Bill"],
                    ["14","Checklist with Thesis","14_CHECK LIST T0 BE SUBMITTED WITH THESIS"]
                  ].map(([no, name, file]) => (
                    <tr key={no}>
                      <td>{no}</td>
                      <td>{name}</td>
                      <td>
                        <a href={`/assets/files/phd/${file}.pdf`} target="_blank" rel="noopener noreferrer">
                          <i className="fa-solid fa-file-pdf text-red-500"></i>
                        </a>
                      </td>
                      <td>
                        <a href={`/assets/files/phd/${file}.docx`} target="_blank" rel="noopener noreferrer">
                          <i className="fa-solid fa-file-word text-blue-500"></i>
                        </a>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

            {/* ================= PG SECTION ================= */}
            <h2 className="universityobject-heading dark-mode-white-color py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
              PG Section
            </h2>

            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="bg-[#4f70b6] text-white">
                  <tr>
                    <th>No</th>
                    <th>Document Name</th>
                    <th>PDF</th>
                    <th>Word</th>
                  </tr>
                </thead>
                <tbody>

                  {[
                    ["01","PG Dissertation Guidelines","01_Approved Guidelines for PG Dissertation","01_Approved Guidelines for Peparation of PhD Thesis"],
                    ["02","PG Dissertation Template","02_Approved PG Dissertation Template","02_Approved PG Dissertation Template"],
                    ["03","PG Remuneration Bill","03_Approved PG Examination Remulneration Bill","03_Approved PG Examination Remulneration Bill"]
                  ].map(([no, name, pdfFile, wordFile]) => (
                    <tr key={no}>
                      <td>{no}</td>
                      <td>{name}</td>
                      <td>
                        <a href={`/assets/files/pg/${pdfFile}.pdf`} target="_blank" rel="noopener noreferrer">
                          <i className="fa-solid fa-file-pdf text-red-500"></i>
                        </a>
                      </td>
                      <td>
                        <a href={`/assets/files/pg/${wordFile}.docx`} target="_blank" rel="noopener noreferrer">
                          <i className="fa-solid fa-file-word text-blue-500"></i>
                        </a>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PhdProgram;