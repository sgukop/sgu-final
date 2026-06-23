"use client";

import React from "react";
import Table from "react-bootstrap/Table";

function AcademicCouncil() {
  const councilMembers = [
    {
      name: "Dr. Udhav Bhosle",
      post: "Vice-Chancellor",
      designation: "Chairman",
      statute: "20.2(i)",
    },
    {
      name: "Dr. Vivek V. Kulkarni",
      post: "Dean, Faculty of Science & Technology",
      designation: "Member",
      statute: "20.2(ii)",
    },
    {
      name: "Dr. S. Gomathi",
      post: "Dean, Faculty of Commerce and Management",
      designation: "Member",
      statute: "20.2(ii)",
    },
    {
      name: "Dr. U. P. Jadhav",
      post: "I/C Dean, Faculty of Humanities & Social Science",
      designation: "Member",
      statute: "20.2(ii)",
    },
    {
      name: "Dr. Somesh Gurao",
      post: "I/C Dean, Faculty of Interdisciplinary Study",
      designation: "Member",
      statute: "20.2(ii)",
    },
    {
      name: "Dr. A. D. Sawant",
      post: "Associate Dean Sciences",
      designation: "Member",
      statute: "20.2(iv)",
    },

    // --------------- BOS / HOD Members ------------------

    {
      name: "Mr. S. Sulthan",
      post: "BOS Chairman, Aeronautical Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. D. V. Patil",
      post: "BOS Chairman, Computer Science Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Santaji Shinde",
      post: "BOS Chairman, AIML",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Swapnil Hirikude",
      post: "BOS Chairman, Electronics & Communication Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Mr. A. P. Dhawan",
      post: "BOS Chairman, Mechanical Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Shubhash Kumbhar",
      post: "BOS Chairman, Pharmacy",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Chetan Arage",
      post: "BOS Chairman, Computer Applications",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. P. D. Bhange",
      post: "BOS Chairman, Chemistry",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. S. M Pawar",
      post: "BOS Chairman, Physics",
      designation: "Member",
      statute: "20.2(iii))",
    },
    {
      name: "Dr. Tejaswini A. Vhaskoti",
      post: "BOS Chairman, Food Science And Technology",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Prajakata B. Shete",
      post: "BOS Chairman, Medical Laboratory Technology",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Ajay S. Nalawade",
      post: "BOS Chairman, of Biotechnology",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. V.S. Khot",
      post: "BOS Chairman, Clinical Research & Technology",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Vilas Balgaonkar",
      post: "BOS Chairman, Management",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. R. L .Deshpande",
      post: "BOS Chairman, Commerce",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Mrs. Priyanka Patil",
      post: "BOS Chairman, Media",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Kapil Patil",
      post: "BOS Chairman, Social Science",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Adv. Dr. Anjali Patil",
      post: "BOS Chairman,Legal Studies",
      designation: "Member",
      statute: "20.2(iii)",
    },
   
    {
      name: "Mr . Gurunath G. Machhale",
      post: "BOS Chairman, Artificial Intelligence & Data Science ",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Sachin Popat Patil",
      post: "BOS Chairman, Civil Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },
     {
      name: "Dr. Jiwan Lavande",
      post: "PG Coordinator Pharmacy",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Ms. Adnya Sakharam Manjarekar",
      post: "PG Coordinator Civil Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },

    // ------------------ Nominated ------------------

    {
      name: "Dr. Subhabrata (Subho) Ghosal",
      address: "Former CEO TVS Infrastructure Pvt. Ltd, Mumbai",
      post: "Industry Expert (Nominated by Vice Chancellor)",
      designation: "Member",
      statute: "20.2(v)",
    },
    {
      name: "Dr. Aneish Kumar",
      address: "Former Country Head, Bank of Milan India",
      post: "Industry Expert (Nominated by Vice Chancellor)",
      designation: "Member",
      statute: "20.2(v)",
    },
    {
      name: "Dr. Deepak Panaskar",
      address: "SRTMU, Nanded",
      post: "Academician / Scientist (Nominated by President)",
      designation: "Member",
      statute: "20.2(vi)",
    },
    {
      name: "Dr. K. V. Srinivasan",
      address: "TIFR, Mumbai",
      post: "Scientist (Nominated by President)",
      designation: "Member",
      statute: "20.2(vi)",
    },
    {
      name: "Dr. H. Barkate",
      address: "Vice President of Glenmark Pharmaceuticals",
      post: "Industry Expert (Nominated by Vice Chancellor)",
      designation: "Member",
      statute: "20.2(vi)",
    },
    {
      name: "Mrs. V. Ambili",
      address: "Deputy Director General, Geological Survey of India, Thiruvananthapuram",
      post: "Scientist (Nominated by President)",
      designation: "Member",
      statute: "20.2(vi)",
    },
    {
      name: "Dr. Manjunath K.N",
      address: "Associate Professor, SCE, MIT MAHE Manipal",
      post: "Academician (Nominated by President)",
      designation: "Member",
      statute: "20.2(vi)",
    },
    {
      name: "Dr. Akash Saxena",
      address: "Professor, Department of Electrical Engineering, School of Engineering and Technology, Central University of Haryana",
      post: "Academician (Nominated by President)",
      designation: "Member",
      statute: "20.2(vi)",
    },

    // ------------------ Permanent Invitee ------------------

    {
      name: "Dr. N. K. Patil",
      post: "Controller of Examinations",
      designation: "Permanent Invitee",
      statute: "20.2(viii)",
    },

    // ------------------ Member Secretary ------------------

    {
      name: "Dr. Vivek M. Kayande",
      post: " Registrar ",
      designation: "Member Secretary",
      statute: "20.2(vii)",
    },
  ];

  const renderMultiLine = (text: string) => {
    if (!text) return <p className="mb-0">-</p>;

    return text.split("\n").map((line: string, index: number) =>
      line.trim() ? (
        <p key={index} className="mb-0">
          {line}
        </p>
      ) : null
    );
  };

  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <div className="d-flex justify-content-center">
                <h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] px-8 bg-[#4f70b6] font-bold text-white mb-50">
                  Academic Council
                </h2>
              </div>
              <span className="dark-mode-white-color mt-2 mb-12 d-block text-center">
                (As per Statute 20.2)
              </span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>NAME OF THE MEMBER</th>
                  <th>POST/CATEGORY</th>
                  <th>DESIGNATION</th>
                  <th>STATUTE NO.</th>
                </tr>
              </thead>

              <tbody>
                {councilMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>
                      <h6 className="font-bold mb-1">{member.name}</h6>
                      {member.address && (
                        <p className="small mb-0 text-muted">{member.address}</p>
                      )}
                    </td>

                    <td>{renderMultiLine(member.post)}</td>

                    <td>{member.designation}</td>

                    <td>{renderMultiLine(member.statute)}</td>
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

export default AcademicCouncil;