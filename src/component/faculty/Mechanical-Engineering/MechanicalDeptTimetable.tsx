import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MechanicalDeptTimetable = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Time Table</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
               
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <h3 className="tl-event-details-area-title text-[#4f70b6]">Time Table - Academic Year 2019 - 20</h3>
                               <ul className="tl-event-details-key-content-list phd-container mt-30">
                                    <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/67502c8b4b17e19d8f361aee">Time Table Odd SEM 2022-23 <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
   )
}

export default MechanicalDeptTimetable