import React from 'react';
import Table from "react-bootstrap/Table";

const nirfData = [
  {
    year: 2026,
    items: [
      { title: "Engineering", link: "https://manage-api.sguk.ac.in/api/assets/69c0dbdceb0b0a6998c15ae0" },
      { title: "Management", link: "https://manage-api.sguk.ac.in/api/assets/69c0dbdceb0b0a6998c15ae0" },
      { title: "Overall", link: "https://manage-api.sguk.ac.in/api/assets/69c0dc00eb0b0a6998c15aea" },
    ]
  },
  {
    year: 2025,
    items: [
      { title: "Engineering", link: "https://manage-api.sguk.ac.in/api/assets/69c0db53eb0b0a6998c15acf" },
      { title: "Management", link: "https://manage-api.sguk.ac.in/api/assets/69c0db61eb0b0a6998c15ad4" },
      { title: "Overall", link: "https://manage-api.sguk.ac.in/api/assets/69c0db74eb0b0a6998c15ad9" },
    ]
  },
  {
    year: 2024,
    items: [
      { title: "Engineering", link: "https://manage-api.sguk.ac.in/api/assets/69c0da8ceb0b0a6998c15ac0" },
      { title: "Management", link: "https://manage-api.sguk.ac.in/api/assets/69c0daa8eb0b0a6998c15ac5" },
      { title: "Overall", link: "https://manage-api.sguk.ac.in/api/assets/69c0dabbeb0b0a6998c15aca" },
    ]
  },
  {
    year: 2023,
    items: [
      { title: "View Report", link: "https://manage-api.sguk.ac.in/api/assets/69c0da2aeb0b0a6998c15abb" },
    ]
  },
  {
    year: 2022,
    items: [
      { title: "View Report", link: "https://manage-api.sguk.ac.in/api/assets/69c0da01eb0b0a6998c15ab4" },
    ]
  }
];

const AboutNirf: React.FC = () => {
  return (
    <section className="tl-8-about pt-100">
      <div className="container">

        {/* Title */}
        <h2 className="tl-9-section-title py-3 rounded-tl-[40px] rounded-br-[40px] w-fit px-6 bg-[#4f70b6] font-bold text-white mx-auto mb-30 text-center">
          National Institutional Ranking Framework (NIRF)
        </h2>

        <div className="row g-0 justify-content-between align-items-center">

          {/* Image Section */}
          <div className="col-xl-6 col-lg-5 mb-4 mb-lg-0 text-center">
            <img
              src="/assets/images/nirf-logo.png"
              alt="NIRF Logo"
              loading="lazy"
              className="rounded-full w-100"
              style={{
                border: "12px solid rgb(79, 112, 182)",
                padding: "15px",
                maxWidth: "280px"
              }}
            />
          </div>

          {/* Table Section */}
          <div className="col-xl-5 col-lg-6">

            <h6 className="tl-8-feature-title mt-3 text-[#4f70b6]">
              NIRF Ranking Data Year Wise
            </h6>

            <Table striped bordered hover responsive size="sm" className="governing-table mt-2">
              <tbody>
                {nirfData.map((yearData, index) => (
                  <React.Fragment key={index}>

                    {/* Year Row */}
                    <tr className="bg-[#4f70b6] text-white text-center">
                      <td colSpan={1} className="fw-bold py-1">
                        NIRF {yearData.year}
                      </td>
                    </tr>

                    {/* Items */}
                    {yearData.items.map((item, i) => (
                      <tr key={i}>
                        <td className="py-0">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="table-link d-flex justify-content-between align-items-center"
                          >
                            <span>{item.title}</span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </a>
                        </td>
                      </tr>
                    ))}

                  </React.Fragment>
                ))}
              </tbody>
            </Table>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNirf;