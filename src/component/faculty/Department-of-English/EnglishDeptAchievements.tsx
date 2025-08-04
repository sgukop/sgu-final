import Link from "next/link";
import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const EnglishDeptAchievements = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Achievements</h2>
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
                     <h3 className="tl-event-details-area-title">Faculty Achievements</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                   <li>Dr.Surekha Gurupad Mandi Role Play: Pedagogical Tool. Sanjay Ghodawat University Faculty Conclave 2019.</li>
                                   <li>Dr. Mrs. Sunanda Mahesh Shinde prepared and presented an article entitled "Cooperative Learning: Jigsaw Method" in Faculty Conclave 2019 organized at SGU and Received first prize for best presentation.</li>
                                   <li>Dr. Mrs. Sunanda Mahesh Shinde received 'SAP Award of Excellence' from IIT Bombay for excellent performance in a Four Week AICTE approved FDP on "Use of ICT in Education for Online and Blended Learning" conducted by IIT Bombay under NMEICT initiative during 2 May to 10 July 2016</li>
                                   <li>Dr. Mrs. Sunanda Mahesh Shinde reviewed a chapter from proposed title Workbook on Communication Skills, Oxford University Press</li>
                                   <li>Dr. Mrs. Sunanda Mahesh Shinde reviewed a research paper entitled Communication Apprehension and Academic Achievement: A Systematic Review for JCDR International Journal</li>
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

export default EnglishDeptAchievements