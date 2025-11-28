import React from "react";
import NavLinks from "../Reusable-components/Navlinks";
import MenuList from "../Reusable-components/MenuList";

const LibraryPlan = () => {
   return(
    <div className="pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Area Plan</h2>
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
                    <ul className="tl-event-details-infos text-black">

                    <li className="tl-event-details-info">
                        <span className="key">Library Stack Area</span> 
                        <span className="ml-20">400 sq.mtr.</span>
                    </li>

                    <li className="tl-event-details-info">
                        <span className="key">Circulation Section</span> 
                        <span className="ml-20">100 sq.mtr.</span>
                    </li>

                    <li className="tl-event-details-info">
                        <span className="key">Librarian Cabin</span> 
                        <span className="ml-20">75 sq.mtr.</span>
                    </li>

                    <li className="tl-event-details-info">
                        <span className="key">Reference Section</span> 
                        <span className="ml-20">125 sq.mtr.</span>
                    </li>

                    <li className="tl-event-details-info">
                        <span className="key">Digital Library</span> 
                        <span className="ml-20">100 sq.mtr.</span>
                    </li>

                    <li className="tl-event-details-info">
                        <span className="key">Reading Hall Area</span> 
                        <span className="ml-20">150 sq.mtr.</span>
                    </li>
                    <li className="tl-event-details-info font-bold">
                        <span className="key">Total Area</span> 
                        <span className="ml-20">950 sq.mtr.</span>
                    </li>

                </ul>

                    </div> 
                </div>
            </div>
        </div>
      </div>
      </div>
      
      
   )
}

export default LibraryPlan