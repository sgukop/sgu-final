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
                                   <li>Teaching Methodology workshop for faculty members on Freshman Engineering Design course FYT 125 on 9th January 2020 </li>
                                   <li>A Three-Day Student Induction Program has been organised from 8th to 10th July 2019. </li>
                                   <li>A Five-Day workshop on "Industry 4.0 Workshop for Faculty" arranged by Sanjay Ghodawat University, Kolhapur from 20th January to 24th January 2020 </li>
                                   <li>A One Day Workshop on "Ozone Day" arranged by Sanjay Ghodawat University in Association with ISHRAE, Kolhapur-Sangli Sub-Chapter on 16th September 2019 </li>
                                   <li>A workshop on "Are you ready for Industry 4.0" was organized by Mechanical Engineering Department and IUI Cell in association with C4i4 Lab, Pune on 28th May 2019 </li>
                                   <li>A Two Days Workshop on "Electric Autonomous Self Driving Car Design & Demonstration" arranged by Sanjay Ghodawat University in Association With RCDC India on 14th and 15th September 2019 </li>
                                   <li>Organised Three days Entrepreneurship Awareness Camp funded by Entrepreneurship Development Institute of India(EDI), Gandhinagar under the aegis of National Science & Technology Entrepreneurship Development Board (NSTEDB), Department of Science and Technology, Govt. of India, NewDelhi. ,15th January to 17th January 2020 </li>
                                   <li>A One Day Workshop on NPTEL (National Program on Technology Enhanced Learning) has been organised on 22nd July 2019 jointly organized by NPTEL, IIT Bombay and Sanjay Ghodawat University, Kolhapur </li>
                                   <li>Mr. Sabnis N.V. attended National level Mentoring Educators in Educational Technology- FDP 301x organized by IIT Bombay from Mar 17th to June 27th, 2018</li>
                                   <li>Mr. Sabnis N.V. attended National level Introduction to Research (NPTEL) organized by IIT Bombay on 07 October 2018</li>
                                   <li>Kamble.S. B., Kadam. M.S. and Godbole S. S. attended National level Foundation Program in ICT for Education (Part I) organized by IIT Bombay on September - October 2018</li>
                                   <li>Dr.S.G.Bhatwdekar, Ingale S.M., Sabnis N.V., Dhanal S.V., Shinde T.B., Mulla L.B., Kulkarni P. B, Sawant.P.J., Pandav A.N., Godbole S. S., Kamble.A.A., Dhawan A.P., Patil S.S., Dhulugade Y.N., Sagare P.M,Pujari.N.V,Shinde.P.U, Patil P.R., Kulkarni.P.V, Kadam.M.S, Patwegar A.A, Patil A.A., Desai N.S., Gavali P.B., Kamble.S.B, Shinde.H.T, Koorse S D, Kumbhar Y.B. attended college level One day Workshop on Use of MOODLE, July 2018 Department of Mechanical Engineering organised by SGI on July 2018.</li>
                                   <li>National level One Day Seminar was conducted on 19th January 2019 on Industry 4.0 sponsored by KOEL. Resource persons were Dr. V. A. Raikar, Mr. D. S. Navalgundkar, Dir.,C4i4 Lab, Samarth Udyog Technology Forum, (Dept. of Heavy Industries, GoI,) Pune, Mr. Sandip Pachapurkar (Business Head, Western Zone), SIEMENS India Ltd., Mr. Nikhil Padte, Jangs Technology, Ichalkaranji, Mr. Bipin Jirage,M. D.,IFM Electronics Pvt. Ltd. Kolhapur, Mr. Siddharth Sujir,V.P., Altizon Systems Pvt. Ltd., Pune, Mr.SinivasMarnadu (Divisional Manager-TAL, Pune) and Mr. Anand Deshpande, Sound Castings Pvt. Ltd., Kolhapur</li>
                                   <li>Guest Lecture on "Industrial refrigerants and safety" by ITI Refrigeration, Kolhapur on 2 October 2019 </li>
                                   <li>Guest Lecture on "Autonomous Driveless Car" by AMZ Automotive on 2 August 2019</li>
                                   <li>Student Activities Conducted</li>
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