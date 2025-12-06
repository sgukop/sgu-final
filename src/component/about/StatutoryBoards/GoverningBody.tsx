"use client";

import React from "react";
import Table from "react-bootstrap/Table";

function GoverningBody() {
  const governingMembers = [
    {
      name: "Mr. Sanjay D. Ghodawat",
      post: "President. Sanjay Ghodawat University, Kolhapur",
      designation: "President",
      section: "21(1) (a)",
    },
    {
      name: "Dr. Udhav Bhosle",
      post: "Vice- Chancellor, Sanjay Ghodawat University, Kolhapur",
      designation: "Member",
      section: "21(1) (b)",
    },
    {
      name: "Mr.Shrenik S.Ghodawat",
      post: "Secretary, Sou.Sushila Danchand Ghodawat Charitable Trust, Jaysingpur",
      designation: "Member (Nominated by the sponsoring body)",
      section: "21(1) (c)",
    },
    {
      name: "Mr.Vinayak V. Bhosale",
      post: "Trustee, Sou.Sushila Danchand Ghodawat Charitable Trust, Jaysingpur",
      designation: "Member (Nominated by the sponsoring body)",
      section: "21(1) (c)",
    },
    {
      name: "Dr. Arun D. Sawant",
      post: "Former Vice- Chancellor, University of Rajasthan, Jaipur",
      designation: "Member (Nominated by the sponsoring body)",
      section: "21(1) (c)",
    },
    {
      name: "Dr. Salunkhe Manikrao M.",
      post: "Former Vice- Chancellor, Bharati Vidyapeeth, Kolhapur",
      designation: "Member (Nominated by the sponsoring body)",
      section: "21(1) (c)",
    },
    {
      name: "Prof. Dr. Rajnish K. Kamat",
      post: "Vice- Chancellor, Dr.Homi Bhabha State University, Mumbai",
      designation: "Member (Nominated by the sponsoring body)",
      section: "21(1) (c)",
    },
    {
      name: "Dr. Bhimraya Metri",
      post: "Director, IIM Nagpur",
      designation: "Member (Nominee of the President from expert of Management outside of the University )",
      section: "21(1) (d)",
    },
    {
      name: "Awaited from State Government",
      post: "",
      designation: "Member (Nominee of the State Government)",
      section: "21(1) (e)",
    },
    {
      name: "Awaited from State Government",
      post: "",
      designation: "Member (Nominee of the State Government)",
      section: "21(1) (e)",
    },
    {
      name: "Mr. Anand Surana",
      post: "Director, Micro Labs Limited, Bengaluru",
      designation: "Member (Nominee of the President from Industry)",
      section: "21(1) (f)",
    },
    {
      name: "Mr. Amit Mate",
      post: "Managing Director, Adept Advisors India Pvt. Ltd and Partner of Adept Consultants, Kolhapur",
      designation: "Member (Nominee of the President from Industry)",
      section: "21(1) (f)",
    },
    {
      name: "Dr. Vivek M. Kayande",
      post: "Registrar, SGU Registrar, Sanjay Ghodawat University, kolhapur",
      designation: "Member Secretary",
      section: "21(1) (g)",
    },
  ];

  // FIX: Explicitly defined 'text' parameter as a string (string).
  const renderText = (text: string) => {
    if (!text) return <p className="mb-0">-</p>;
    
    // Split text based on commas and spaces to ensure multi-line rendering for complex entries
    const lines = text.split(/,\s?|\n/).filter(line => line.trim() !== '');

    return lines.map((line, i) => (
      <p key={i} className="mb-0">
        {line.trim()}
      </p>
    ));
  };

  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center">
                <h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] px-8 bg-[#4f70b6] font-bold text-white mb-50">
                  Governing Body
                </h2>
              </div>
              <span className="dark-mode-white-color mt-2 mb-12">
                (As per section 21(1) of SGU Act XL of 2017 of Govt of Maharashtra)
              </span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>Sr.No</p></th>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>SECTION</p></th>
                </tr>
              </thead>

              <tbody>
                {governingMembers.map((m, i) => (
                  <tr key={i}>
                    <td><p>{i + 1}</p></td>

                    {/* NAME OF THE MEMBER */}
                    <td>
                      <p>{m.name}</p>
                    </td>

                    {/* POST (Role Particulars) */}
                    <td>{renderText(m.post)}</td>

                    {/* DESIGNATION */}
                    <td>{renderText(m.designation)}</td>

                    {/* SECTION */}
                    <td><p>{m.section}</p></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoverningBody;
