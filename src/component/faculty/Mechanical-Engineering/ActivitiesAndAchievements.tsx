import React from "react";
import MenuList from "../Reusable-components/MenuList";
import NavLinks from "./Navlinks";

const ActivitiesAndAchievements = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Activities And Achievements</h2>
            <div className="row tl-event-details-row g-0">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                
                                   <li>ISHRAE Chapter Level Quiz Competition naming as aQuest competition on 02nd November 2019 </li>
                                   <li>Parents Meeting 2019-20 conducted on 14th September 2019.</li>
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

export default ActivitiesAndAchievements