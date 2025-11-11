import React, { useState } from "react";
import NavLink from "./NavLink";

interface DropdownState {
  home: boolean;
  leadership: boolean;
  aboutTrust: boolean;
  statutoryboard: boolean;
  statutorybodies: boolean;
  committee: boolean;
  infrastructure: boolean;
  admissions: boolean;
  feestructure: boolean;
  academics: boolean; // Retaining this for the main 'Academics' link click
  faculty: boolean; // Retaining this for the main 'Academics' link click
  scienceandtechnology: boolean;
  schoolofengineering: boolean;
  deptofengineering: boolean,
  computerapplications: boolean;
  physicalandchemical: boolean;
  alliedhealth: boolean;
  pharmaceuticalsciences: boolean;
  managementandcommerce : boolean;
  schoolofmanagement: boolean;
  humanitiesandsocialsciences : boolean;
  interdisciplinarystudies: boolean;
  schoolofmedia: boolean;
  schoolofdesign : boolean;
  schoolofarchitecture : boolean;
  lawdept: boolean;
  socialsciences: boolean;
  swayam : boolean,
  finishingschool : boolean;
  researchdevelopment: boolean;
  examination: boolean;
  student: boolean;
  facilities: boolean;
  sports: boolean;
  antiragging: boolean;
  trainingandplacement: boolean;
  events : boolean,
  recruiters: boolean;
  contactus: boolean;
  feedback: boolean;
  courses: boolean;
  page: boolean;
  blog: boolean;
  about: boolean;
  staff: boolean;
  event: boolean;
  contact: boolean;
  blogPages: boolean;
  auth: boolean;
}

const MobileNavSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownState>({
    home: false,
    leadership: false,
    aboutTrust: false,
    statutoryboard: false,
    statutorybodies : false,
    committee: false,
    infrastructure: false,
    admissions: false,
    feestructure: false,
    academics: false,
    faculty: false,
    scienceandtechnology: false,
    schoolofengineering: false,
    deptofengineering: false,
    computerapplications: false,
    physicalandchemical: false,
    alliedhealth: false,
    pharmaceuticalsciences: false,
    managementandcommerce: false,
    schoolofmanagement: false,
    humanitiesandsocialsciences : false,
    interdisciplinarystudies: false,
    schoolofmedia: false,
    schoolofdesign : false,
    lawdept: false,
    socialsciences: false,
    schoolofarchitecture : false,
    swayam : false,
    finishingschool : false,
    researchdevelopment: false,
    examination: false,
    student: false,
    facilities: false,
    sports: false,
    antiragging: false,
    trainingandplacement: false,
    events : false,
    recruiters: false,
    contactus: false,
    feedback: false,
    courses: false,
    blog: false,
    page: false,
    about: false,
    staff: false,
    event: false,
    contact: false,
    blogPages: false,
    auth: false,
  });
    // STATE FOR POPUP (as requested)
    const [showPopup, setShowPopup] = useState(true); // Pop-up starts visible (autoplay)

    // VIDEO URL (as requested)
    const videoEmbedUrl = "https://www.youtube.com/embed/6YuWY_kgy24?autoplay=1"; 

  // Define the function for handling dropdown toggle
  const handleDropdownToggle = (dropdownName: keyof DropdownState) => {
    setTimeout(() => {
      setIsDropdownOpen((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }, 100);
  };
  
  return (
    <>
        {/* POPUP MODIFICATION: Full page overlay with embedded video (as requested) */}
        {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-[999]">
                
                <div className="bg-white p-2 rounded-xl shadow-2xl border-4 border-red-600 max-w-1xl w-full mx-4 relative" style={{ height: '50vh' }}>
                    
                    <p className="text-xl font-bold text-red-700 text-center mb-2">
                        Sanjay Ghodawat University 7th Convocation Live 
                    </p>
                    
                    {/* Video Embed Container (Takes up most of the space) */}
                    <div className="w-full h-[85%]"> 
                        <iframe
                            title="Important Announcement Video"
                            src={videoEmbedUrl}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        ></iframe>
                    </div>

                    {/* Close Button at the bottom */}
                    <button
                        onClick={() => setShowPopup(false)}
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mt-4 px-6 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 font-medium transition"
                    >
                        Close Video and Continue to Website
                    </button>
                </div>
            </div>
        )}

    <nav className="mean-nav">
      <ul className="justify-content-center">
        <li className="tl-nav-item">  
            <a href="/" role="button">
                Home
            </a>
        </li> 
        {/* ========================================================== */}
        {/* ABOUT US MENU */}
        {/* ========================================================== */}
        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.home ? "dropdown-open" : ""}>
            About Us{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.home ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("home")}
            >
              {isDropdownOpen.home ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.home ? "d-block" : "d-none"
            }`}
          >
            <li>
              <NavLink href="/about-group">Sanjay Ghodawat Group</NavLink>
            </li>
            
            <li className="tl-nav-item tl-dropdown">
              <a className={isDropdownOpen.aboutTrust ? "dropdown-open" : ""}>
                  Sanjay Ghodawat Trust{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.aboutTrust ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("aboutTrust")}
                >
                  {isDropdownOpen.aboutTrust ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu ${
                  isDropdownOpen.aboutTrust ? "d-block" : "d-none"
                }`}
              >
                <li>
                  <NavLink href="/about-trust">About Trust</NavLink>
                </li>
                <li>
                  <NavLink href="/board-of-directors">Trust Board of Directors</NavLink>
                </li>
              </ul>
            </li>

            <li className="tl-nav-item tl-dropdown">
              <a className={isDropdownOpen.leadership ? "dropdown-open" : ""}>
                  Sanjay Ghodawat University{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.leadership ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("leadership")}
                >
                  {isDropdownOpen.leadership ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu ${
                  isDropdownOpen.leadership ? "d-block" : "d-none"
                }`}
              >
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

            <li className="tl-nav-item tl-dropdown">
              <a
                className={isDropdownOpen.statutoryboard ? "dropdown-open" : ""}
              >
                Statutory Authorities{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.statutoryboard ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("statutoryboard")}
                >
                  {isDropdownOpen.statutoryboard ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu ${
                  isDropdownOpen.statutoryboard ? "d-block" : "d-none"
                }`}
              >
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

            <li className="tl-nav-item tl-dropdown">
              <a
                className={isDropdownOpen.statutorybodies ? "dropdown-open" : ""}
              >
                Statutory Bodies{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.statutorybodies ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("statutorybodies")}
                >
                  {isDropdownOpen.statutorybodies ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu ${
                  isDropdownOpen.statutorybodies ? "d-block" : "d-none"
                }`}
              >
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

            <li className="tl-nav-item tl-dropdown">
              <a className={isDropdownOpen.committee ? "dropdown-open" : ""}>
                Committee{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.committee ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("committee")}
                >
                  {isDropdownOpen.committee ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu ${
                  isDropdownOpen.committee ? "d-block" : "d-none"
                }`}
              >
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
        {/* ========================================================== */}
        {/* ADMISSIONS MENU */}
        {/* ========================================================== */}
        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.admissions ? "dropdown-open" : ""}>
            Admissions{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.admissions ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("admissions")}
            >
              {isDropdownOpen.admissions ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.admissions ? "d-block" : "d-none"
            }`}
          >
            <li>
              <NavLink href="/programs-university">Programs</NavLink>
            </li>
            <li>                <NavLink href="/admission-process">Admission Process</NavLink>
            </li>
            <li>
                <NavLink href="/prospectus">Prospectus</NavLink>
            </li>
            <li>
                <NavLink href="/contact-admission">Contact For Admission</NavLink>
            </li>
          </ul>
        </li>
        {/* ========================================================== */}
        {/* ACADEMICS MENU (Corrected Structure) */}
        {/* ========================================================== */}
      <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.faculty ? "dropdown-open" : ""}>
            Academics{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.faculty ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("faculty")}
            >
              {isDropdownOpen.faculty ? "-" : "+"}
            </span>
          </a>
          
          <ul
            className={`tl-submenu ${
              isDropdownOpen.faculty ? "d-block" : "d-none"
            }`}
          >
            <h6 style={{fontSize:"13px",color:"#fff",marginLeft:"10px",textAlign:"left",marginTop:"5px"}}>Faculty</h6>
            
            {/* Faculty of Science and Technology container */}
            <li className="tl-nav-item tl-dropdown">
              <a
                className={
                  isDropdownOpen.scienceandtechnology ? "dropdown-open" : ""
                }
              >
                Faculty of Science and Technology{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.scienceandtechnology ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("scienceandtechnology")}
                >
                  {isDropdownOpen.scienceandtechnology ? "-" : "+"}
                </span>
              </a>

              {/* START: Sub-menu for Faculty of Science and Technology */}
              <ul
                className={`tl-submenu ${
                  isDropdownOpen.scienceandtechnology ? "d-block" : "d-none"
                }`}
              >
                
                {/* School of Engineering & Technology (Level 3) */}
                <li className="tl-nav-item tl-dropdown">
                  <a className={isDropdownOpen.schoolofengineering ? "dropdown-open" : ""}>
                    School of Engineering & Technology{" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.schoolofengineering ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("schoolofengineering")
                      }
                    >
                      {isDropdownOpen.schoolofengineering ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.schoolofengineering ? "d-block" : "d-none"
                    }`}
                  >
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
                      <NavLink href="/AI-ML-dept-about">Artificial Intelligence and Machine Learning</NavLink>
                    </li>
                    <li>
                      <NavLink href="/NIAT-AIML-Data-Science-dept-about">NIAT Corporate(AI/Ml, Data Science)</NavLink>
                    </li>
                    <li>
                      <NavLink href="/AI-DS-dept-about">Artificial Intelligence and <br/> Data Science(AIDS)</NavLink>
                    </li>
                  </ul>
                </li>


                {/* School of Computer Applications (Level 3) */}
                <li className="tl-nav-item tl-dropdown">
                  <a
                    className={
                      isDropdownOpen.computerapplications ? "dropdown-open" : ""
                    }
                  >
                    School of Computer Applications{" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.computerapplications ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("computerapplications")
                      }
                    >
                      {isDropdownOpen.computerapplications ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.computerapplications ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <NavLink href="/BCA-dept-about">Department of Computer Applications</NavLink>
                    </li>

                  </ul>
                </li>
                
                {/* School of Physical & Chemical Sciences (Level 3) */}
                <li className="tl-nav-item tl-dropdown">
                  <a
                    className={
                      isDropdownOpen.physicalandchemical ? "dropdown-open" : ""
                    }
                  >
                    School of Physical & Chemical Sciences{" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.physicalandchemical ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("physicalandchemical")
                      }
                    >
                      {isDropdownOpen.physicalandchemical ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.physicalandchemical ? "d-block" : "d-none"
                    }`}
                  >
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

                {/* School of Life Sciences (Level 3) - Uses alliedhealth state key, retaining for functional continuity */}
                <li className="tl-nav-item tl-dropdown">
                  <a
                    className={
                      isDropdownOpen.alliedhealth ? "dropdown-open" : ""
                    }
                  >
                    School of Life Sciences{" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.alliedhealth ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("alliedhealth")
                      }
                    >
                      {isDropdownOpen.alliedhealth ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.alliedhealth ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <NavLink href="/FST-dept-about">B.Sc. (Food Science & Technology)</NavLink>
                    </li>
                    <li>
                      <NavLink href="/MLT-dept-about">B.Sc. (Medical Laboratory Technology)</NavLink>
                    </li>
                    <li>
                      <NavLink href="/biotech-dept-about">B.Sc. (Biotechnology)</NavLink>
                    </li>
                  </ul>
                </li>


                {/* School of Pharmaceutical Sciences (Level 3) */}
                <li className="tl-nav-item tl-dropdown">
                  <a
                    className={
                      isDropdownOpen.pharmaceuticalsciences ? "dropdown-open" : ""
                    }
                  >
                    School of Pharmaceutical Sciences{" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.pharmaceuticalsciences ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("pharmaceuticalsciences")
                      }
                    >
                      {isDropdownOpen.pharmaceuticalsciences ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.pharmaceuticalsciences ? "d-block" : "d-none"
                    }`}
                  >

                    <li>
                      <NavLink href="pharmacy-dept-about">Department of Pharmacy</NavLink>
                    </li>
                  </ul>
                </li>

              </ul>
              {/* END: Sub-menu for Faculty of Science and Technology */}
            </li>

            {/* Faculty Of Commerce and Management container */}
            <li className="tl-nav-item tl-dropdown">
              <a className={isDropdownOpen.managementandcommerce ? "dropdown-open" : ""}>
                Faculty Of Commerce and Management{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.managementandcommerce ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("managementandcommerce")}
                >
                  {isDropdownOpen.managementandcommerce ? "-" : "+"}
                </span>
              </a>

              {/* START: Sub-menu for Faculty Of Commerce and Management */}
              <ul
                className={`tl-submenu ${
                  isDropdownOpen.managementandcommerce ? "d-block" : "d-none"
                }`}
              >
                {/* School of Commerce & Management (Level 3) */}
                <li className="tl-nav-item tl-dropdown">
                  <a
                    className={
                      isDropdownOpen.schoolofmanagement ? "dropdown-open" : ""
                    }
                  >
                    School of Commerce & Management{" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.schoolofmanagement ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("schoolofmanagement")
                      }
                    >
                      {isDropdownOpen.schoolofmanagement ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.schoolofmanagement ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <NavLink href="/commerce-dept-about">Department of Commerce</NavLink>
                    </li>
                    <li>
                      <NavLink href="/management-dept-about">Department of Management</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* END: Sub-menu for Faculty Of Commerce and Management */}
            </li>

            {/* Faculty of Humanities and Social Sciences container */}
            <li className="tl-nav-item tl-dropdown">
              <a className={isDropdownOpen.humanitiesandsocialsciences ? "dropdown-open" : ""}>
                Faculty of Humanities and Social Sciences{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.humanitiesandsocialsciences ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("humanitiesandsocialsciences")}
                >
                  {isDropdownOpen.humanitiesandsocialsciences ? "-" : "+"}
                </span>
              </a>

              {/* START: Sub-menu for Faculty of Humanities and Social Sciences */}
              <ul
                className={`tl-submenu ${
                  isDropdownOpen.humanitiesandsocialsciences ? "d-block" : "d-none"
                }`}
              >
                {/* School of Social Science (Level 3) */}
                <li className="tl-nav-item tl-dropdown">
                  <a
                    className={
                      isDropdownOpen.socialsciences ? "dropdown-open" : ""
                    }
                  >
                    School of Social Science{" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.socialsciences ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("socialsciences")
                      }
                    >
                      {isDropdownOpen.socialsciences ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.socialsciences ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <NavLink href="/english-dept-about">Department of English</NavLink>
                    </li>
                    <li>
                      <NavLink href="/geography-dept-about">Department of Geography</NavLink>
                    </li>
                  </ul>
                </li>


                {/* School of Legal Studies(Law) (Level 3) */}
                <li className="tl-nav-item tl-dropdown">
                  <a
                    className={
                      isDropdownOpen.lawdept ? "dropdown-open" : ""
                    }
                  >
                    School of Legal Studies(Law){" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.lawdept ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("lawdept")
                      }
                    >
                      {isDropdownOpen.lawdept ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.lawdept ? "d-block" : "d-none"
                    }`}
                  >
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
              {/* END: Sub-menu for Faculty of Humanities and Social Sciences */}
            </li>

            {/* Faculty of Interdisciplinary Studies container */}
            <li className="tl-nav-item tl-dropdown">
              <a className={isDropdownOpen.interdisciplinarystudies ? "dropdown-open" : ""}>
                  Faculty of Interdisciplinary Studies{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.interdisciplinarystudies ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("interdisciplinarystudies")}
                >
                  {isDropdownOpen.interdisciplinarystudies ? "-" : "+"}
                </span>
              </a>

              {/* START: Sub-menu for Faculty of Interdisciplinary Studies */}
              <ul
                className={`tl-submenu ${
                  isDropdownOpen.interdisciplinarystudies ? "d-block" : "d-none"
                }`}
              >
                {/* School of Media (Level 3) */}
                <li className="tl-nav-item tl-dropdown">
                  <a
                    className={
                      isDropdownOpen.schoolofmedia ? "dropdown-open" : ""
                    }
                  >
                    School of Media{" "}
                    <span
                      className={`inner-mean-expand ${
                        isDropdownOpen.schoolofmedia ? "active" : ""
                      }`}
                      role="button"
                      onClick={() =>
                        handleDropdownToggle("schoolofmedia")
                      }
                    >
                      {isDropdownOpen.schoolofmedia ? "-" : "+"}
                    </span>
                  </a>
                  <ul
                    className={`tl-submenu ${
                      isDropdownOpen.schoolofmedia ? "d-block" : "d-none"
                    }`}
                  >
                    <li>
                      <NavLink href="/masscommunication-dept-about">B.A-Journalism & Mass Communication</NavLink>
                    </li>
                  </ul>
                </li>

                {/* School of Design (Level 3) - Simple link here, but kept in correct parent */}
                <li className="tl-nav-item">
                    <NavLink href="/design-dept-about">School of Design</NavLink>
                </li>
              </ul>
              {/* END: Sub-menu for Faculty of Interdisciplinary Studies */}
            </li>

            <li>
              <NavLink href="/academic-calendar">Academic Calendar</NavLink>
            </li>

            {/* Swayam/MOOCs */}
            <li className="tl-nav-item tl-dropdown">
              <a className={isDropdownOpen.swayam ? "dropdown-open" : ""}>
                  Swayam/MOOCs {" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.swayam ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("swayam")}
                >
                  {isDropdownOpen.swayam ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu ${
                  isDropdownOpen.swayam ? "d-block" : "d-none"
                }`}
              >
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

            {/* SGU Finishing School */}
            <li className="tl-nav-item tl-dropdown">
              <a className={isDropdownOpen.finishingschool ? "dropdown-open" : ""}>
                  SGU Finishing School {" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.finishingschool ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("finishingschool")}
                >
                  {isDropdownOpen.finishingschool ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu ${
                  isDropdownOpen.finishingschool ? "d-block" : "d-none"
                }`}
              >
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
            <li>
                <NavLink href="/phd-program">PG & Ph.D. Section</NavLink>
            </li>
          </ul>
      </li> 
      
      {/* ========================================================== */}
      {/* LIFE @SGU MENU */}
      {/* ========================================================== */}
      <li className="tl-nav-item tl-dropdown">
          <a
            className={
              isDropdownOpen.infrastructure ? "dropdown-open" : ""
            }
          >
            Life @SGU{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.infrastructure ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("infrastructure")}
            >
              {isDropdownOpen.infrastructure ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.infrastructure ? "d-block" : "d-none"
            }`}
          >
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

      {/* ========================================================== */}
      {/* R&D MENU */}
      {/* ========================================================== */}
      <li className="tl-nav-item tl-dropdown">
          <a
            className={
              isDropdownOpen.researchdevelopment ? "dropdown-open" : ""
            }
          >
            Research & Development{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.researchdevelopment ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("researchdevelopment")}
            >
              {isDropdownOpen.researchdevelopment ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.researchdevelopment ? "d-block" : "d-none"
            }`}
          >
            
            <li>
                <NavLink href="/research-structure">Research & Development Cell</NavLink>
            </li>

            <li>
              <NavLink href="research-patents">Patents & Innovations Cell</NavLink>
            </li>
            <li>
                <NavLink href="/research-structure">Structure of Research & Development Cell</NavLink>
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

        {/* ========================================================== */}
        {/* EXAMINATION MENU */}
        {/* ========================================================== */}
        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.examination ? "dropdown-open" : ""}>
            Examination{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.examination ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("examination")}
            >
              {isDropdownOpen.examination ? "-" : "+"}
            </span>
          </a>
          <ul
            className={`tl-submenu ${
              isDropdownOpen.examination ? "d-block" : "d-none"
            }`}
          >
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

        {/* ========================================================== */}
        {/* TRAINING & PLACEMENT MENU */}
        {/* ========================================================== */}
        <li className="tl-nav-item tl-dropdown">
          <a
            className={
              isDropdownOpen.trainingandplacement ? "dropdown-open" : ""
            }
          >
            Training & Placement{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.trainingandplacement ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("trainingandplacement")}
            >
              {isDropdownOpen.trainingandplacement ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.trainingandplacement ? "d-block" : "d-none"
            }`}
          >
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

          </ul>
        </li>

        {/* ========================================================== */}
        {/* EVENTS MENU */}
        {/* ========================================================== */}
        <li className="tl-nav-item tl-dropdown">
          <a
            className={
              isDropdownOpen.events ? "dropdown-open" : ""
            }
          >
            Events{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.events ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("events")}
            >
              {isDropdownOpen.events ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.events ? "d-block" : "d-none"
            }`}
          >
            	<li>
                <NavLink href="/icctvb2025">International Conference on CCTVB2025</NavLink>
            </li>
            	<li>
                <NavLink href="/icsshfe2026">International Conference ICSHFSE 2026</NavLink>
            </li>
            <li>
                <NavLink href="/icsbp2026">International Conference ICSBP 2026 </NavLink>
            </li>
            
          </ul>
        </li>

        {/* ========================================================== */}
        {/* CONTACT US MENU */}
        {/* ========================================================== */}
        <li className="tl-nav-item">  
            <a href="/contact-us" role="button">
                Contact Us
            </a>
        </li> 
      </ul>
    </nav>
    </>
  );
};

export default MobileNavSection;
