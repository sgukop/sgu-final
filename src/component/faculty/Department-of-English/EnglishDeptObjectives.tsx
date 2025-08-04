import Link from "next/link";
import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const EnglishDeptObjectives = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Objectives</h2>
        <div className="row">
          <MenuList dept="English" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
               
                    <div className="tl-event-details-left">
                      <h3 className="tl-event-details-area-title">Objectives</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                   <li>To train students in communication skills in English</li>
                                   <li>To inculcate the spirit of inquisitiveness through the study of literature</li>
                                   <li>To strengthen their ability to analyze all genres of literature</li>
                                   <li>To prepare them for various careers and progression in higher education</li>
                                   <li>To encourage and guide students for research in English literature and language</li>
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

export default EnglishDeptObjectives