import Link from "next/link";
import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const GeographyDeptObjectives = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title">Objectives</h2>
        <div className="row">
          <MenuList dept="Geography" subMenu={NavLinks} />
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
                                   <li>To provide quality teaching of geographical knowledge adopting latest tools and techniques.</li>
                                   <li>We aim to foster a culture of academic excellence and research innovation, encouraging faculty and students to engage in cutting-edge research projects that contribute to advancing geographical knowledge and addressing pressing global challenges.</li>
                                   <li>Our department seeks to promote interdisciplinary collaboration and partnerships with other academic disciplines, research institutions, government agencies, and community organizations to enhance the impact and relevance of geographical research and education.</li>
                                   <li>We strive to cultivate in our students a deep appreciation for the complexity and interconnectedness of the natural and human environments, empowering them to become informed global citizens and effective stewards of the Earth's resources.</li>
                                   <li>Through experiential learning opportunities, professional development activities, and community engagement initiatives, our objective is to prepare graduates for successful careers in diverse fields such as environmental management, urban planning, geographic information systems, education, and international development.</li>
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

export default GeographyDeptObjectives