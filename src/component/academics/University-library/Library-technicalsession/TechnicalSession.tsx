import React from "react";
import NavLinks from "../Reusable-components/Navlinks";
import MenuList from "../Reusable-components/MenuList";

const TechnicalSeesion = () => {
   return(
    <div className="pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Technical Session</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
               <div className="tl-event-details-left">
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <h3 className="tl-event-details-area-title text-[#4f70b6]">Knowledge Research Center Orientation and Technical Sessions</h3>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6756d1219173bf9f471abf1d">Knowledge Research Center Orientation and Technical Sessions PPT <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
     </div>
      
      
   )
}

export default TechnicalSeesion