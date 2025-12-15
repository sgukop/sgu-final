import React from "react";

type DocumentSection = {
  title: string;
  documents: string[];
};

const documentData: DocumentSection[] = [
  {
    title:
      "For First Year B. Tech / Direct Second Year B. Tech / First Year & Direct Second Year B. Pharmacy Admissions",
    documents: [
      "CET / JEE / State Entrance Test Score Card (F. Y. B. Tech / B. Pharmacy)",
      "SSC Marksheet",
      "HSC Marksheet / Diploma Marksheet",
      "Leaving / Transfer Certificate",
      "Domicile and Nationality Certificate",
      "Migration Certificate (HSC Board other than Maharashtra State Board)",
      "Caste Certificate (if applicable)",
      "3 Colour Photos",
      "2 Photocopies of Above original Documents",
    ],
  },
  {
    title: "For First Year M. Tech / MBA / M. Sc / M.C.A. Admissions",
    documents: [
      "GATE / CET / ATMA / CAT / SGUEE",
      "SSC Marksheet",
      "HSC Marksheet / Diploma Marksheet",
      "Degree Final Year Marksheet",
      "Leaving / Transfer Certificate",
      "Domicile and Nationality Certificate",
      "Migration Certificate",
      "Caste Certificate (if applicable)",
      "3 Colour Photos",
      "2 Photocopies of Above original Documents",
    ],
  },
  {
    title:
      "For First Year BBA / B. Com / BA / B.C.A / D. Pharmacy / B.Sc / B.Sc Food Science and Technology / B.M.L.T. Admissions",
    documents: [
      "SSC Marksheet",
      "HSC Marksheet",
      "Leaving Certificate",
      "Domicile and Nationality Certificate",
      "Migration Certificate (HSC Board other than Maharashtra State Board)",
      "Caste Certificate (if applicable)",
      "3 Colour Photos",
      "2 Photocopies of Above original Documents",
    ],
  },
  {
    title: "For First Year B.Design",
    documents: [
      "SGUEED / UCEED / PERA CET",
      "SSC Marksheet",
      "HSC Marksheet / Diploma Marksheet",
      "Leaving / Transfer Certificate",
      "Domicile and Nationality Certificate",
      "Migration Certificate (HSC Board other than Maharashtra State Board)",
      "Caste Certificate (if applicable)",
      "3 Colour Photos",
      "2 Photocopies of Above original Documents",
    ],
  },
];

const DocumentRequired = () => {
  return (
    <div className="tl-event-details-container pt-100 pb-100 tl-10-about-section">
      <div className="container">
        <div className="row tl-event-details-row g-0">
          <div className="col-lg-12">
            <h2 className="universityobject-heading dark-mode-white-color mb-50">
              Documents Required for Admissions 2025-26
            </h2>

            {documentData.map((section, index) => (
              <div className="tl-event-details-left mt-30" key={index}>
                <div className="tl-event-details-key-content tl-event-details-area">
                  <h4 className="dark-mode-white-color mb-30">
                    {section.title}
                  </h4>
                  <ul className="tl-event-details-key-content-list phd-container">
                    {section.documents.map((doc, i) => (
                      <li key={i}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentRequired;
