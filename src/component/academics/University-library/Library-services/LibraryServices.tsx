import React from "react";
import NavLinks from "../Reusable-components/Navlinks";
import MenuList from "../Reusable-components/MenuList";

const LibraryServices = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Knowledge Research Center Services</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
              <div>
                <div>
                  <div className="tl-event-details-key-content tl-event-details-area">
                   
                    <ul className="tl-event-details-key-content-list phd-container text-[#000000]">
                      <li>Current Awareness Services (CAS)</li>
                      <li>
                        Selective Dissemination of Information (SDI) to support
                        research
                      </li>
                      <li>Bibliographic and New arrivals services</li>
                      <li>Newspaper clipping daily mail services</li>
                      <li>Conference alert</li>
                      <li>Thesis of the month service</li>
                      <li>
                        IMP University / AICTE / UGC circulars email service
                      </li>
                      <li>Print Journal Index email service</li>
                      <li>Library Orientation program for Student and staff</li>
                      <li>Technical sessions for students and Staff</li>
                      <li>Inter Library Loan (DELNET) to support research.</li>
                      <li>Involving in final year student project work</li>
                      <li>Open Access to stack area for staff & student</li>
                      <li>Online Public Access Catalogue through LAN</li>
                      <li>Automated Library with Bar-coding (SLIM software)</li>
                      <li>Digital Library with 20 PC</li>
                      <li>Issue - Return</li>
                      <li>Book Bank for Toppers</li>
                      <li>Book Bank for All</li>
                      <li>Book bank for differently able students</li>
                      <li>Scanning</li>
                      <li>Printing</li>
                      <li>Reprography</li>
                      <li>Reference services</li>
                      <li>Reading Hall</li>
                      <li>Wi-Fi connectivity</li>
                      <li>
                        Scanned Question paper of University on Library web
                      </li>
                      <li>
                        Access to National Digital Library (4,48,14,935
                        Documents)
                      </li>
                      <li>Plagiarism Checking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryServices;
