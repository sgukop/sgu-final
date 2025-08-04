import React from "react";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
const CivilDeptCollaborations = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">MOU's & Professional Bodies</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
             
            <div className="row tl-event-details-row g-3">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Collaborations with Industries</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Xmetric water Solution Pvt.Ltd, Sangli</li>
                                    <li>Credai, Kolhapur</li>
                                    <li>Batu Builders, Kolhapur</li>
                                    <li>ACE Infrastructure & Co., Kolhapur</li>
                                    <li>Equinox Environments(India) Pvt.Ltd., Kolhapur</li>
                                    <li>Reddvise Realty Advisors Pvt.ltd, Pune</li>
                                </ul>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-12 mt-50">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Collaborations with Professional Bodies</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>American Concrete Institute (ACI)</li>
                                <li>Indian Society for Technical Education (ISTE)</li>
                                <li>Indian Geotechnical Society (IGS)</li>
                                <li>Institute for Steel Development & Growth. (INSDAG)</li>
                                <li>Hydrology Project, Water Resources Department, Govt. of Maharashtra (India)</li>
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

export default CivilDeptCollaborations