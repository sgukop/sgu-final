"use client";

import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

function AIandDSDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <div className="governing-body">
          <div className="d-flex justify-content-center">
            <h2 className="tl-2-section-title mb-50">BOS Members List</h2>
          </div>
        </div>

        <div className="row">
          <MenuList
            dept="Artificial Intelligence and Data Science"
            subMenu={NavLinks}
          />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gx-0 tl-blog-details-row">
              <div className="col-lg-12">
                <Table striped bordered hover responsive className="governing-table">
                  <thead>
                    <tr>
                      <th>
                        <p className="text-[#4f70b6]">Sr. No</p>
                      </th>
                      <th>
                        <p className="text-[#4f70b6]">Name of the Member</p>
                      </th>
                      <th>
                        <p className="text-[#4f70b6]">Post</p>
                      </th>
                      <th>
                        <p className="text-[#4f70b6]">Designation</p>
                      </th>
                      <th>
                        <p className="text-[#4f70b6]">
                          Mail ID and Mobile No
                        </p>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <p>1</p>
                      </td>
                      <td>
                        <p>Mr. Gurunath Machhle</p>
                      </td>
                      <td>
                        <p>Assoc. Professor and HOD, AIDS</p>
                      </td>
                      <td>
                        <p>Chairman</p>
                      </td>
                      <td>
                        <a
                          href="mailto:hod@ad.sguk.ac.in"
                          className="tl-def-btn-2"
                        >
                          hod@ad.sguk.ac.in{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                        <p>7219104454</p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>2</p>
                      </td>
                      <td>
                        <p>Mr. Vijay Mithari</p>
                      </td>
                      <td>
                        <p>Program Manager</p>
                      </td>
                      <td>
                        <p>Member Secretary</p>
                      </td>
                      <td>
                        <a
                          href="mailto:vijaymithari1996@gmail.com"
                          className="tl-def-btn-2"
                        >
                          vijaymithari1996@gmail.com{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                        <p>9028704949</p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>3</p>
                      </td>
                      <td>
                        <p>Dr. Deepika Patil</p>
                      </td>
                      <td>
                        <p>Assoc. Professor and HOD, CSE</p>
                      </td>
                      <td>
                        <p>Member (Expert Academician)</p>
                      </td>
                      <td>
                        <a
                          href="mailto:hod@cse.sguk.ac.in"
                          className="tl-def-btn-2"
                        >
                          hod@cse.sguk.ac.in{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                        <p>7219104454</p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>4</p>
                      </td>
                      <td>
                        <p>Dr. Santaji Shinde</p>
                      </td>
                      <td>
                        <p>Assoc. Professor and HOD, AIML</p>
                      </td>
                      <td>
                        <p>Member (Expert Academician)</p>
                      </td>
                      <td>
                        <a
                          href="mailto:hod@ad.sguk.ac.in"
                          className="tl-def-btn-2"
                        >
                          hod@ad.sguk.ac.in{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>5</p>
                      </td>
                      <td>
                        <p>Mr. Sameer I. Tamboli</p>
                      </td>
                      <td>
                        <p>Assistant Professor</p>
                      </td>
                      <td>
                        <p>Member</p>
                      </td>
                      <td>
                        <a
                          href="mailto:sameer.tamboli@cs.sguk.ac.in"
                          className="tl-def-btn-2"
                        >
                          sameer.tamboli@cs.sguk.ac.in{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                        <p>9503716550</p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>6</p>
                      </td>
                      <td>
                        <p>Mr. Anurag Fulare</p>
                      </td>
                      <td>
                        <p>Tech Instructor</p>
                      </td>
                      <td>
                        <p>Member</p>
                      </td>
                      <td>
                        <a
                          href="mailto:anuragomprakash.fulare@nxtwave.co.in"
                          className="tl-def-btn-2"
                        >
                          anuragomprakash.fulare@nxtwave.co.in{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                        <p>9359651120</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIandDSDeptBOS;