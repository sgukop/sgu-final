"use client";

import React from "react";
import Table from "react-bootstrap/Table";

function AcademicCouncil() {
  const councilMembers = [
    {
      name: "Dr. Udhav Bhosle",
      address: "SGU Campus, Atigre",
      email: "vc@sguk.ac.in",
      post: "Vice-Chancellor, Sanjay Ghodawat University, Kolhapur.",
      designation: "Chairperson",
      statute: "20.2(i)",
    },
    {
      name: "Dr. Vivek V. Kulkarni",
      address: "SGU Campus, Atigre",
      email: "dean@fst.sguk.ac.in",
      post: "Dean, Faculty of Science & Technology\nDirector (Add. Charge)-School of Design",
      designation: "Member",
      statute: "20.2(ii)\n20.2(iv)",
    },
    {
      name: "Dr. S. Gomathi",
      address: "SGU Campus, Atigre",
      email: "dean@fcm.sguk.ac.in",
      post: "Dean, Faculty of Commerce and Management\nDirector - School of Commerce & Management",
      designation: "Member",
      statute: "20.2(ii)\n20.2(iii)\n20.2(iv)",
    },
    {
      name: "Dr. U. P. Jadhav",
      address: "C-Block, SGU Campus, Atigre.",
      email: "dean@fhs.sguk.ac.in",
      post: "I/C Dean, Faculty of Humanities & Social Science\nBOS Chairman of Humanities and Social Science\nDirector-School of Social Sciences",
      designation: "Member",
      statute: "20.2(ii)\n20.2(iii)\n20.2(iv)",
    },
    {
      name: "Dr. Somesh Gurao",
      address: "SGU Campus, Atigre",
      email: "somesh.gurao@sguk.ac.in",
      post: "I/C Dean, Faculty of Interdisciplinary Study\nHead - Department of Design",
      designation: "Member",
      statute: "20.2(ii)\n20.2(iii)\n20.2(iv)",
    },
    {
      name: "Dr. A. D. Sawant",
      address:
        "Department of Chemistry, Sanjay Ghodawat University, Kolhapur - 416118",
      email: "anand.sawant@ch.sguk.ac.in",
      post: "Associate Dean Sciences\nDirector Life Sciences",
      designation: "Member",
      statute: "20.2(iv)",
    },
    {
      name: "Dr. Raja Krushnamurthi",
      address: "SGU Campus, Atigre",
      email: "rajak@sguk.ac.in",
      post: "Associate Dean Engineering & Technology\nDirector - National International Linkages",
      designation: "Member",
      statute: "20.2(iv)",
    },

    // --------------- BOS / HOD Members ------------------

    {
      name: "Mr. S. Sulthan",
      address:
        "School of Technology, C/o Aeronautical Engineering, Sanjay Ghodawat University, Atigre.",
      email: "s.sulthan@as.sguk.ac.in",
      post: "BOS Chairman, Aeronautical Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. D. V. Patil",
      address: "Computer Science Engineering, B-Block, SGU Campus, Atigre",
      email: "deepika.patil@cs.sguk.ac.in",
      post: "BOS Chairman, Computer Science Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. M. P. Gaikwad",
      address:
        "Artificial Intelligence and Machine Learning, SGU Campus, Atigre",
      email: "mahesh.gaikwad@am.sguk.ac.in",
      post: "BOS Chairman, AIML",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Swapnil Hirikude",
      address:
        "Electronics and Communication Engineering, SGU Campus, Atigre",
      email: "swapnil.hirikude@ec.sguk.ac.in",
      post: "Chairman BOS - Electronics & Communication Engineering",
      designation: "Member",
      statute: "20.2(iii)\n20.2(iv)",
    },
    {
      name: "Mr. A. P. Dhawan",
      address: "Mechanical Engineering, SGU Campus, Atigre",
      email: "ajay.dhawan@me.sguk.ac.in",
      post: "BOS Chairman, Mechanical Engineering",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Shubhash Kumbhar",
      address: "School of Pharmacy, SGU Campus, Atigre",
      email: "shubhash.kumbhar@ph.sguk.ac.in",
      post: "Chairman BOS - Pharmacy\nDirector - School of Pharmacy",
      designation: "Member",
      statute: "20.2(iii)\n20.2(iv)",
    },
    {
      name: "Dr. Chetan Arage",
      address: "Computer Application, SGU Campus, Atigre",
      email: "chetan.arage@ca.sguk.ac.in",
      post: "BOS Chairman, Computer Applications",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. P. D. Bhange",
      address:
        "School of Physical & Chemical Science, SGU Campus, Atigre",
      email: "pallavi.bhange@ch.sguk.ac.in",
      post: "Chairman BOS- Chemistry\nDirector- School of Physical & Chemical Science",
      designation: "Member",
      statute: "20.2(iii)\n20.2(iv)",
    },
    {
      name: "Dr. S. M Pawar",
      address:
        "Department of Physics, Sanjay Ghodawat University",
      email: "sambhaji.pawar@ph.sguk.ac.in",
      post: "BOS Chairman, Physics\nDirector -Innovation & Research",
      designation: "Member",
      statute: "20.2(iii)\n20.2(iv)",
    },
    {
      name: "Dr. Tejaswini A. Vhaskoti",
      address:
        "Department of Food Science And Technology, SGU Campus, Atigre",
      email: "tejaswini.vhaskoti@sguk.ac.in",
      post: "Head - Department of Food Science And Technology",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Prajakata B. Shete",
      address:
        "Department of Medical Laboratory Technology, SGU Campus, Atigre",
      email: "prajakata.shete@sguk.ac.in",
      post: "Head - Department of Medical Laboratory Technology",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Ajay S. Nalawade",
      address: "Department of Biotechnology, SGU Campus, Atigre",
      email: "ajay.nalawade@sguk.ac.in",
      post: "Head - Department of Biotechnology",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. V.S. Khot",
      address: "SGU Campus, Atigre",
      email: "vs.khot@sguk.ac.in",
      post: "Head - Clinical Research & Technology",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Vilas Balgaonkar",
      address: "Department of Management, SGU Campus, Atigre",
      email: "vilas.balgaonkar@sguk.ac.in",
      post: "Head - Department of Management",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. R. L .Deshpande",
      address: "SGU Campus, Atigre",
      email: "iqac@sguk.ac.in",
      post: "Director, IQAC\nHead- Department of Commerce",
      designation: "Member",
      statute: "20.2(iii)\n20.2(iv)",
    },
    {
      name: "Mrs. Priyanka Patil",
      address:
        "School of Media, Block –B, SGU Campus, Atigre.",
      email: "priyanka.patil@jm.sguk.ac.in",
      post: "I/C Head - Social Media",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Kapil Patil",
      address:
        "School of Social Science, SGU Campus, Atigre",
      email: "kapil.patil@sguk.ac.in",
      post: "Head - Social Science",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Adv. Dr. Anjali Patil",
      address:
        "Department of LAW, Block-C, SGU Campus, Atigre.",
      email: "anjali.patil@lw.sguk.ac.in",
      post: "Chairman, BOS & Director-Legal Studies",
      designation: "Member",
      statute: "20.2(iii)\n20.2(iv)",
    },
    {
      name: "Dr. Jiwan Lavande",
      address:
        "Department of B. Pharmacy, SGU Campus, Atigre",
      email: "jiwan.lavande@sguk.ac.in",
      post: "Head - Department of B. Pharmacy",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Mr . Gurunath G. Machhale",
      address:
        "Department of Artificial Intelligence & Data Science (AIDS), SGU Campus, Atigre",
      email: "gurunath.machhale@sguk.ac.in",
      post: "Head - Department of Artificial Intelligence & Data Science (AIDS)",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. Sachin Popat Patil",
      address:
        "C/o Civil Engineering, A-Block, Sanjay Ghodawat University, Atigre",
      email: "sachin.patil@ce.sguk.ac.in",
      post: "Chairman, Civil Engineering\nDirector School of Engineering & Technology",
      designation: "Member",
      statute: "20.2(iii)\n20.2(iv)",
    },
    {
      name: "Mr. S. N. Patil (Incharge)",
      address:
        "Department of Allied Health & Science, SGU Campus, Atigre.",
      email: "samsher.patil@sanjayghodawatuniveristy.ac.in",
      post: "Chairman, BOS Allied Health & Science",
      designation: "Member",
      statute: "20.2(iii)",
    },
    {
      name: "Dr. S. P. Patil",
      address:
        "School of Architecture, Block –B, SGU Campus, Atigre.",
      email: "sachin.patil@ce.sguk.ac.in",
      post: "I/C Director / School of Architecture",
      designation: "Member",
      statute: "20.2(iv)",
    },

    // ------------------ Nominated ------------------

    {
      name: "Dr. Subhabrata (Subho) Ghosal",
      address: "RGIT, Mumbai University",
      email: "subhoghosal@gmail.com",
      post: "Industry Expert (Nominated by Vice Chancellor)",
      designation: "Nominated",
      statute: "20.2(v)",
    },
    {
      name: "Dr. Aneish Kumar",
      address: "RGIT, Mumbai University",
      email: "aneishk@yahoo.com",
      post: "Industry Expert (Nominated by Vice Chancellor)",
      designation: "Nominated",
      statute: "20.2(v)",
    },
    {
      name: "Dr. Deepak Panaskar",
      address: "SRTMU, Nanded",
      email: "dbpanaskar@gmail.com",
      post: "Academician / Scientist (Nominated by President)",
      designation: "Nominated",
      statute: "20.2(vi)",
    },
    {
      name: "Dr. K. V. Srinivasan",
      address: "TIFR, Mumbai",
      email: "kvsrini@tifr.res.in",
      post: "Academician / Scientist (Nominated by President)",
      designation: "Nominated",
      statute: "20.2(vi)",
    },
    {
      name: "Dr. H. Barkate",
      address: "TIFR, Mumbai",
      email: "hbarkate@gmail.com",
      post: "Academician / Scientist (Nominated by President)",
      designation: "Nominated",
      statute: "20.2(vi)",
    },
    {
      name: "Mrs. V. Ambili",
      address:
        "Deputy Director General, Geological Survey of India, Thiruvananthapuram",
      email: "v.ambli@gsi.gov.in",
      post: "Academician / Scientist (Nominated by President)",
      designation: "Nominated",
      statute: "20.2(vi)",
    },
    {
      name: "Dr. Manjunath K.N",
      address: "Associate Professor, SCE, MIT MAHE Manipal ",
      email: "manjunath.kn@manipal.edu",
      post: "Academician (Nominated by President)",
      designation: "Nominated",
      statute: "20.2(vi)",
    },
    {
      name: "Dr. Akash Saxena",
      address: "Professor, Department of Electrical Engineering,School of Engineering and Technology,Central University of Haryana",
      email: "drakash@cuh.ac.in ",
      post: "Academician (Nominated by President)",
      designation: "Nominated",
      statute: "20.2(vi)",
    },

    // ------------------ Permanent Invitee ------------------

    {
      name: "Dr. N. K. Patil",
      address: "",
      email: "coe@sguk.ac.in",
      post: "Controller of Examinations",
      designation: "Permanent Invitee",
      statute: "20.2(viii)",
    },

    // ------------------ Member Secretary ------------------

    {
      name: "Dr. Vivek M. Kayande",
      address: "Sanjay Ghodawat University, Kolhapur",
      email: "registrar@sanjayghodawatuniversity.ac.in",
      post: "Registrar, Sanjay Ghodawat University",
      designation: "Member Secretary",
      statute: "20.2(vii)",
    },
  ];

  // ----------- FIX: typed parameter (text: string) ------------
  const renderMultiLine = (text: string) => {
    if (!text) return <p>-</p>;

    return text.split("\n").map((line: string, index: number) =>
      line.trim() ? <p key={index}>{line}</p> : null
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
              <span className="dark-mode-white-color mt-2 mb-12">
                (As per Statute 20.2)
              </span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>Sr.No</p></th>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST/CATEGORY</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>STATUTE NO.</p></th>
                </tr>
              </thead>

              <tbody>
                {councilMembers.map((member, index) => (
                  <tr key={index}>
                    <td><p>{index + 1}</p></td>

                    <td>
                      <p>{member.name}</p>
                      {member.address && <p>{member.address}</p>}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="table-link">
                          {member.email} <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      )}
                    </td>

                    <td>{renderMultiLine(member.post)}</td>

                    <td><p>{member.designation}</p></td>

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
