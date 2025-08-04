import React from 'react'
import NavLink from './NavLink';
import Link from 'next/link';
interface NavProps {
    ulPosition: string;
    liStyle: string;
}
const NavSection:React.FC<NavProps> = ({ulPosition,liStyle}) => {
  return (
    <ul className={ulPosition} >
       <li className={`tl-nav-item ${liStyle}`}> 
            <a href="/" role="button" className="menu-heading">
                Home
            </a>
        </li> 
        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button" className="menu-heading">
                About Us <i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
                <li>
                    <NavLink href="/about-group">Sanjay Ghodawat Group</NavLink>
                </li>
               {/*  <li>
                    <NavLink href="/about-logo">About Logo</NavLink>
                </li>  */}
                <li className="tl-dropdown-2">
                    <a>
                    Sanjay Ghodawat Trust (Sponsoring Body) <i className="fa-regular fa-angle-right"></i>
                    </a>

                    <ul className="tl-submenu tl-submenu-2">
                        <li>
                            <NavLink href="/about-trust">About Trust</NavLink>
                        </li>
                        <li>
                            <NavLink href="/board-of-directors">Trust Board of Directors</NavLink>
                        </li>
                    </ul>
                </li>

                <li className="tl-dropdown-2">
                    <a>
                        Sanjay Ghodawat University <i className="fa-regular fa-angle-right"></i>
                    </a>

                    <ul className="tl-submenu tl-submenu-2">
                        <li>
                            <NavLink href="/about-university">Sanjay Ghodawat University</NavLink>
                        </li>
                        <li>
                            <NavLink href="/president">President</NavLink>
                        </li>
                        <li>
                            <NavLink href="/secretary">Secretary</NavLink>
                        </li>
                        <li>
                            <NavLink href="/trustee">Trustee</NavLink>
                        </li>
                        <li>
                            <NavLink href="/vice-chancellor">Vice Chancellor</NavLink>
                        </li>
                        <li>
                            <NavLink href="/officers-of-university">Officers of University</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="tl-dropdown-2">
                <a>
                    Statutory Authorities <i className="fa-regular fa-angle-right"></i>
                </a>

               <ul className="tl-submenu tl-submenu-2">
               <li>
                    <NavLink href="/governing-body">Governing Body</NavLink>
                </li>

                <li>
                    <NavLink href="/board-of-management">Board of Management</NavLink>
                </li>
                <li>
                    <NavLink href="/academic-council">Academic Council</NavLink>
                </li>
                <li>
                    <NavLink href="/board-of-university">Board of University Teaching and Research</NavLink>
                </li>
                
                <li>
                    <NavLink href="/board-of-examination">Board of Examination and Evaluation</NavLink>
                </li>
            </ul>
            </li>

            
            <li className="tl-dropdown-2">
                <a>
                    Statutory Bodies <i className="fa-regular fa-angle-right"></i>
                </a>

               <ul className="tl-submenu tl-submenu-2">
             
                <li>
                    <NavLink href="/board-of-research">Board of Research</NavLink>
                </li>
                <li>
                    <NavLink href="/board-of-deans">Board of Deans</NavLink>
                </li>
               
                 <li>
                    <NavLink href="/board-of-student">Board of Student Development</NavLink>
                </li>
                <li>
                    <NavLink href="/sports-physical-culture">Board of Sports & Physical Education</NavLink>
                </li>
                <li>
                    <NavLink href="/board-of-national">Board of National & International Linkages</NavLink>
                </li>
               
              </ul>
            </li>

            <li className="tl-dropdown-2">
                <a>
                Committee <i className="fa-regular fa-angle-right"></i>
                </a>

               <ul className="tl-submenu tl-submenu-2">
               <li>
                    <NavLink href="/finance-committee">Finance Committee</NavLink>
                </li>
               <li>
                    <NavLink href="/anti-ragging">Anti Ragging Committee</NavLink>
                </li> 
                <li>
                    <NavLink href="/grievance-cell">Grievance Readressal Cell</NavLink>
                </li> 
                <li>
                    <NavLink href="/IQAC-committee">Internal Quality Assurance Cell</NavLink>
                </li> 
                <li>
                    <NavLink href="/equal-opportunity-cell">Equal Opportunity Cell</NavLink>
                </li> 
                <li>
                    <NavLink href="/womens-committee">Womens Empowerment Centre Committee</NavLink>
                </li>
                <li>
                    <NavLink href="/internal-complaint">Internal Complaint</NavLink>
                </li>
                <li>
                    <NavLink href="/student-grievance-committee">Student Grievance Redressal Committee (SGRC)</NavLink>
                </li>
                <li>
                    <NavLink href="#">Anti-Discrimination Cell</NavLink>
                </li>
            </ul>
            </li>
            <li>
                <NavLink href="/affiliations">Statutory Authority Recognition & Approvals</NavLink>
            </li>
            <li>
                <NavLink href="/awards">Awards and Accolades</NavLink>
            </li>
          </ul> 
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button" className="menu-heading">Admissions <i className="fa-regular fa-angle-down"></i></a>
             <ul className="tl-submenu">
                <li>
                    <NavLink href="/programs-university">Programs</NavLink>
                </li>
                <li>
                    <NavLink href="/admission-process">Admission Process</NavLink>
                </li>
            
                <li>
                    <NavLink href="/prospectus">Prospectus</NavLink>
                </li>
                <li>
                    <NavLink href="/contact-admission">Contact For Admission</NavLink>
                </li>
            </ul> 
        </li>

       

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button" className="menu-heading">Academics <i className="fa-regular fa-angle-down"></i></a>
                <ul className="tl-submenu">
                   <h6 className="subfaculty-menu" style={{marginLeft:"16px"}}>Faculty</h6>
                            <li className="tl-dropdown-3">
                                <a>Faculty of Science & Technology<i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="tl-submenu tl-submenu-3">
                                        <li className="tl-dropdown-4">
                                            <a>School of Engineering & Technology<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <li>
                                                    <NavLink href="/aerospace-engineering-about">Aerospace Engineering</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/mechanical-dept-about">Mechanical Engineering</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/civil-dept-about">Civil Engineering</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/electrical-dept-about">Electrical and Electronics Engineering</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/electronics-dept-about">Electronics and Communication Engineering</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/computer-science-dept-about">Computer Science & Engineering</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/AI-ML-dept-about">Artificial Intelligence and Machine Learning(AI&ML)</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="tl-dropdown-4">
                                            <a>School of Computer Applications<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <h6 className="subfaculty-menu">Department of Computer Applications</h6>
                                                <li>
                                                    <NavLink href="/BCA-dept-about">Bachelor of Computer Applications(BCA)</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/MCA-dept-about">Master of Computer Application(MCA)</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="tl-dropdown-4">
                                            <a>School of Physical & Chemical Sciences<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <li>
                                                    <NavLink href="/physical-dept-about">Department of Physics</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/chemical-dept-about">Department of Chemistry</NavLink>
                                                </li>
                                                 <li>
                                                    <NavLink href="/mathematics-dept-about">Department of Mathematics</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="tl-dropdown-4">
                                            <a>School of Allied Health Sciences<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <h6 className="subfaculty-menu">Department of Allied Health Sciences</h6>
                                                <li>
                                                    <NavLink href="/FST-dept-about">B.Sc(Food Science & Technology)</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/MLT-dept-about">B.M.L.T(Food Science & Technology)</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/biotech-dept-about">Biotechnology</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="tl-dropdown-4">
                                            <a>School of Pharmaceutical Sciences<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <li>
                                                    <NavLink href="/pharmacy-dept-about">Department of Pharmacy</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                            </li>
                            <li className="tl-dropdown-3">
                                <a>Faculty of Commerce & Management<i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="tl-submenu tl-submenu-3">
                                        <li className="tl-dropdown-4">
                                        <a>School of Commerce & Management<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <li>
                                                    <NavLink href="/commerce-dept-about">Department of Commerce</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/management-dept-about">Department of Management</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                            </li> 


                            <li className="tl-dropdown-3">
                                <a>Faculty of Humanities and Social Sciences<i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="tl-submenu tl-submenu-3">
                                        <li className="tl-dropdown-4">
                                            <a>School of Social Science<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <h6 className="subfaculty-menu">Department of Social Sciences</h6>
                                                <li>
                                                    <NavLink href="/english-dept-about">Department of English</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/geography-dept-about">Department of Geography</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="tl-dropdown-4">
                                            <a>School of Legal Studies(Law)<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <h6 className="subfaculty-menu">Department of Law (Legal Studies)</h6>
                                                <li>
                                                        <NavLink href="/law-dept-about">B.A.L.L.B.</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/law-dept-about">B.B.A.L.L.B</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink href="/law-dept-about">L.L.B</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                            </li>

                            <li className="tl-dropdown-3">
                                <a>Faculty of Interdisciplinary Studies<i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="tl-submenu tl-submenu-3">
                                        <li className="tl-dropdown-4">
                                            <a>School of Media<i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="tl-submenu tl-submenu-4">
                                                <h6 className="subfaculty-menu">Department of Media</h6>
                                                <li>
                                                    <NavLink href="/masscommunication-dept-about">B.A-Journalism & Mass Communication</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="tl-dropdown-4">
                                          
                                            <NavLink href="/design-dept-about">School of Design</NavLink>
                                        </li>
                                    </ul>
                            </li>
                     <li>
                        <NavLink href="/academic-calendar">Academic Calendar</NavLink>
                    </li>
                  
                    <li className="tl-dropdown-2">
                    <a>
                        Swayam/MOOCs <i className="fa-regular fa-angle-right"></i>
                    </a>

                    <ul className="tl-submenu tl-submenu-2">
                        <li>
                            <NavLink href="/swayam-advisory-committee">Swayam Advisory committee</NavLink>
                        </li>
                        <li>
                            <a href="https://manage-api.sguk.ac.in/api/assets/6746d2a40566aa1186e16aa5" target="_blank">Credit Transfer Policy</a>
                        </li>
                    </ul>
                </li>
                 <li>
                        <a href="https://manage-api.sguk.ac.in/api/assets/6746d3a30566aa1186e16ab2" target="_blank">Open/ Generic Electives</a>
                    </li>
                   
                    <li className="tl-dropdown-2">
                    <a>
                        SGU Finishing School <i className="fa-regular fa-angle-right"></i>
                    </a>

                    <ul className="tl-submenu tl-submenu-2">
                        <li>
                            <a href="https://manage-api.sguk.ac.in/api/assets/675181544b17e19d8f361f72" target="_blank">SGU Finishing School</a>
                        </li>
                        <li>
                            <a href="https://manage-api.sguk.ac.in/api/assets/675181674b17e19d8f361f77" target="_blank">SGU Finishing School Enterprenuers and Higher studies</a>
                        </li>
                    </ul>
                </li>
                    <li>
                        <NavLink href="/library-about">Knowledge Research Center</NavLink>
                    </li>
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button" className="menu-heading">Life @SGU <i className="fa-regular fa-angle-down"></i></a>
             <ul className="tl-submenu">
                <li>
                    <NavLink href="/about-campus">Campus Pulse @SGU</NavLink>
                </li>
                <li>
                    <NavLink href="/facilities">Academic Facilities</NavLink>
                </li>
                <li>
                    <NavLink href="/campus-images">Computational Facilities</NavLink>
                </li>
                <li>
                    <NavLink href="/SGU-sports">Sports @SGU</NavLink>
                </li> 
		        <li>
                    <NavLink href="/recreational-facilities">Recreational Facilities</NavLink>
                </li>
                <li>
                    <NavLink href="/residential-facilities">Residential Facilities</NavLink>
                </li>
                <li>
                    <NavLink href="/transport-facilities">Transport</NavLink>
                </li>
                <li>
                    <NavLink href="/medical-facilities">Medical Aid Facilities</NavLink>
                </li>
            </ul>
        </li> 

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button" className="menu-heading">Research <i className="fa-regular fa-angle-down"></i></a>
             <ul className="tl-submenu">
                <li>
                    <NavLink href="/research-structure">Research & Development Cell</NavLink>
                </li>
                <li>
                    <NavLink href="#">Research Promotion Policy</NavLink>
                </li> 
                <li>
                    <NavLink href="/research-patents">Patents & Innovations Cell</NavLink>
                </li>
               
                <li>
                    <NavLink href="/research-facilities">Centre of Excellence and Research Facilities</NavLink>
                </li>
                <li>
                    <NavLink href="/research-product-development">Product Development Center</NavLink>
                </li>
                <li>
                    <NavLink href="/research-booklet">Research Booklet,Policies & Templates</NavLink>
                </li>
            </ul>
        </li> 

         <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button" className="menu-heading">Examination <i className="fa-regular fa-angle-down"></i></a>
             <ul className="tl-submenu">
                <li>
                    <NavLink href="/examination-timetable">Time Table</NavLink>
                </li>
                <li>
                    <NavLink href="/examination-result">Results</NavLink>
                </li>
                <li>
                    <NavLink href="/examination-notice">Notice</NavLink>
                </li>
                <li>
                    <NavLink href="/examination-revaluation">Revaluation/Re Verification/Photocopy</NavLink>
                </li>
                <li>
                    <NavLink href="/examination-convocation">Convocation</NavLink>
                </li>
            </ul>
        </li> 

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button" className="menu-heading">Training & Placement Office <i className="fa-regular fa-angle-down"></i></a>
             <ul className="tl-submenu">
                <li>
                    <NavLink href="/training-placement-about">About Training & Placement</NavLink>
                </li>
                <li>
                    <NavLink href="/training-and-placement-team">Our Team</NavLink>
                </li>
               
                <li>
                    <NavLink href="/our-recruiters">Our Recruiters</NavLink>
                </li>
                <li>
                    <NavLink href="/training-placement-statistical-analysis">Statistics</NavLink>
                </li>
                  <li>
                    <NavLink href="/sgu-photo-gallery">Photo Gallery</NavLink>
                </li> 
                <li>
                    <NavLink href="/training-placement-media-coverage">Media Coverage</NavLink>
                </li> 
                <li>
                    <NavLink href="/training-placement-softskills-syllabus">Aptitude & Soft Skill Syllabus</NavLink>
                </li>
              {/*  <li>
                    <NavLink href="/training-placement-contactus">Contact Us</NavLink>
                </li>  */}
            </ul>
        </li> 

        <li className={`tl-nav-item ${liStyle}`}>
            <a role="button" href="/contact-us" className="menu-heading">Contact Us</a>
        </li>  
    </ul>
  )
}

export default NavSection