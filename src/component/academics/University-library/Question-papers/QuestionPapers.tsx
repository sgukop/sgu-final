import React from "react";
import Architecture from "./Architecture";
import CommerceManagement from "./CommerceManagement";
import LiberalArts from "./LiberalArts";
import SchoolOfScience from "./SchoolOfScience";
import SchoolOfPharmacy from "./SchoolOfPharmacy";
import ComputerScience from "./ComputerScience";
import SchoolOfTechnology from "./SchoolOfTechnology";
import NavLinks from "../Reusable-components/Navlinks";
import MenuList from "../Reusable-components/MenuList";
import Link from "next/link";
import AlliedHealth from "./AlliedHealth";

const QuestionPapers = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Question Papers</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            {/*  <div className="row tl-event-details-row g-0 mt-4 flex justify-between">
                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-10 mb-0">
                        <h6 className="exam-title">School of Pharmacy</h6> 
                        </div>

                        <div className="col-lg-2">
                            <h4 className="exam-download-icon"><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#"><i className="fa-regular fa-down-to-bracket"></i></Link></h4> 
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-10 mb-0">
                        <h6 className="exam-title">School of Commerce And Management</h6> 
                        </div>

                        <div className="col-lg-2">
                            <h4 className="exam-download-icon"><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#"><i className="fa-regular fa-down-to-bracket"></i></Link></h4> 
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-10 mb-0">
                        <h6 className="exam-title">School of Computer Science and Engineering</h6> 
                        </div>

                        <div className="col-lg-2">
                            <h4 className="exam-download-icon"><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#"><i className="fa-regular fa-down-to-bracket"></i></Link></h4> 
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-10 mb-0">
                        <h6 className="exam-title">School of Design</h6> 
                        </div>

                        <div className="col-lg-2">
                            <h4 className="exam-download-icon"><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#"><i className="fa-regular fa-down-to-bracket"></i></Link></h4> 
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-10 mb-0">
                        <h6 className="exam-title">School of Liberel Art</h6> 
                        </div>

                        <div className="col-lg-2">
                            <h4 className="exam-download-icon"><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#"><i className="fa-regular fa-down-to-bracket"></i></Link></h4> 
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-10 mb-0">
                        <h6 className="exam-title">School of Science</h6> 
                        </div>

                        <div className="col-lg-2">
                            <h4 className="exam-download-icon"><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#"><i className="fa-regular fa-down-to-bracket"></i></Link></h4> 
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-10 mb-0">
                        <h6 className="exam-title">School of Technology</h6> 
                        </div>

                        <div className="col-lg-2">
                            <h4 className="exam-download-icon"><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#"><i className="fa-regular fa-down-to-bracket"></i></Link></h4> 
                        </div>
                    </div>
                </div>
              </div>  */}
            <div className="row">
              <CommerceManagement />
              <LiberalArts />
              <SchoolOfScience />
              <SchoolOfPharmacy />
              <ComputerScience />
              <AlliedHealth />
              <SchoolOfTechnology />
             
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPapers;
