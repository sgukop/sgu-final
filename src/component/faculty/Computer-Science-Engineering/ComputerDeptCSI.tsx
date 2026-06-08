import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const ComputerDeptCSI = () => {
  return (
    <section className="tl-1-about pt-100 pb-100">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Computer Society of India (CSI)</h2>
    <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row align-items-center tl-1-about-row">
            <div className="col-lg-6">
                <div className="tl-1-about-img">
                    <img src="assets/images/computer-science-engineering/CSI/CSI-logo.png" alt="CSI Logo Image" className="rounded-full
                    " style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-lg-6">
                <div className="tl-1-about-txt">
                    <h6 className="tl-8-feature-title mt-20">About CSI</h6>
                    <ul className="tl-event-details-key-content-list phd-container">
                        <li>CSI has been a prestigious Association in our university since its inception. It has been working rigorously focusing on the improvement of the students as well as the department in all aspects.</li>
                        <li>Our vision is to make the CSE department as a full-fledged branch where each student thinks out of the box and gains beyond his dreams.</li>
                        <li>Computer Society of India is the first and largest body of computer professionals in India.</li>
                        <li>It was started on 6 March 1965 by a few computer professionals and has now grown to be the national body representing computer professionals. It has 72 chapters across India, 511 student branches, and more than 100,000 members. Since 1974, when CSI became a member of IFIP that is International Federation for Information Processing, CSI has organized many IFIP sponsored events.</li>
                    </ul>

                    <div className="tl-1-about-author mt-30">
                            <div className="tl-1-about-author-intro">
                                <div className="tl-1-about-author-img">
                                    <img src="/assets/images/faculty-profile-photos/cse/11. Ms. KETAKI KUDALE.jpg" alt="Author image" className="rounded-full"
                                        style={{border:"4px solid #4f70b6", padding:"10px",width:"100px",height:"100px"}}/>
                                </div>
                                <div className="tl-1-about-author-info">
                                <h6 className="tl-8-feature-title">Student Branch Coordinator</h6>
                                    <h5 className="tl-1-about-author-name">Mrs. Ketki K. Kudale</h5>
                                   
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">Membership Benefits</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                        <h6 className="tl-8-feature-title mb-4"> Institution Membership</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Recognition by Accreditation bodies for association with a professional organization.</li>
                                    <li>Grant of Free nominee membership to three faculty members with voting rights & log-in privilege on CSI knowledge portal.</li>
                                    <li>4 copies of CSI Communications every month.</li>
                                    <li>Access to CSI knowledge portal and distinguished speaker list and eligibility for volunteering to be a speaker.</li>
                                    <li>Eligibility to apply for assistance to attend International conferences.</li>
                                </ul>

                                <h6 className="tl-8-feature-title mt-30 mb-4">Student Branches (All Advantages of IM Plus)</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Eligibility for nomination of best Student Branch award.</li>
                                    <li>Additional 4 copies of CSI Communications to the institution & log-in privilege to the students on CSI knowledge portal.</li>
                                    <li>Attachment to a Regional Student coordinator & National Student coordinator for assistance with resource persons for various events and chapter support to organize seminars / workshops / tutorials / competitions / Expo.</li>
                                    <li>Invitation for all Regional/State/National student conventions/conferences and competitions.</li>
                                    <li>Concessional rates for CSI Conferences and Tutorials for student members.</li>
                                    <li>Opportunity for students to interact with Industry professionals.</li>
                                    <li>Eligibility to publish articles in CSI communications and journal for student members.</li>
                                    <li>Eligibility to be nominated for the best Student paper in CSI communications.</li>
                                    <li>Eligibility for CSI funded minor projects (for College Students).</li>
                                    <li>CSI Certification and Training programs at discounted rates for students.</li>
                                    <li>Permission to conduct events under CSI Banner.</li>
                                </ul> 

                                <h6 className="tl-8-feature-title mt-30 mb-4">Individual Membership</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Access to CSI Knowledge Portal with a unique login ID and Password.</li>
                                    <li>Opportunity for member to member virtual networking through CSI Communities, Forums, Blogs.</li>
                                    <li>Both print and electronic versions of CSI-Communications each month.</li>
                                    <li>Right to vote in CSI elections.</li>
                                    <li>Concessional registration fee for CSI events and training programs</li>
                                    <li>Opportunity to offer workshops/ trainings on profit sharing basis in collaboration with CSI.</li>
                                    <li>Opportunity to deliver guest lectures in educational institutes associated to CSI across India.</li>
                                    <li>Opportunities to benefit from CSI affiliations with sister societies and collaborating organisations such as IEEE, Project Management Institute , C-DAC, Singapore Computer Society</li>
                                    <li>Opportunity to participate in CSI Divisional research projects.</li>
                                    <li>Financial support for minor research projects.</li>
                                    <li>Part sponsorship for presenting papers at prestigious International events</li>
                                </ul>        
                        </div>
                    </div>
                </div>
        </div>

        <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">Benefits and Advantages to CSI Student members</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                        <h6 className="tl-8-feature-title mb-4">Recognition :</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>CSI membership identity card.</li>
                                    <li>Appreciation letter / certificate for performance excellence.</li>
                                    <li>Industry recognized CSI certification opportunities.</li>
                                </ul>

                                <h6 className="tl-8-feature-title mt-30 mb-4">Knowledge Enhancement :</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Access to CSI knowledge portal through Login-id and password.</li>
                                    <li>Technology updates through Conferences, Seminars, Tutorials & workshop at discounted rates.</li>
                                    <li>A forum for activities like Paper Presentations, Quiz, Competitions and Exhibitions.</li>
                                    <li>Ability to connect with distinguished speakers on different technology areas.</li>
                                </ul> 

                                <h6 className="tl-8-feature-title mt-30 mb-4">CSI Publication :</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>CSI Communications - Monthly Magazine (soft copy with option for hard copy at additional payment).</li>
                                    <li>CSI eNewsletter.</li>
                                    <li>Eligibility to publish articles in CSI communications, journal.</li>
                                </ul>

                                <h6 className="tl-8-feature-title mt-30 mb-4">Awards :</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Eligibility to be nominated for the best Student paper in CSI communications.</li>
                                    <li>Best Student Branch award (only for Student Branch and not applicable for individual student members).</li>
                                </ul>

                                <h6 className="tl-8-feature-title mt-30 mb-4">R & D :</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>CSI Minor Research project funding up to Rs. 50000/-.</li>
                                </ul> 

                                <h6 className="tl-8-feature-title mt-30 mb-4">CSI events :</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Discounted registration fee for CSI conventions & seminars</li>
                                    <li>Besides the activities held at the Chapters and Student Branches, the Society also conducts periodic conferences, seminars.</li>
                                    <li>We believe that “Practice makes a man perfect” and we constantly endeavor to achieve our aim.</li>
                                    <li>Today's world depends on thousands of those engineers who design, produce, operate and maintain a vast array of equipment and services to revolutionize the way we live.</li>
                                    <li>Career paths for engineers vary in many ways. In general, an engineer's position stresses theory, analysis, and design.</li>
                                    <li>Computer science covers computer architecture, programming languages, algorithms, computations and theories. Students will have to study topics such as modeling, robotics, artificial intelligence, security and Internet systems, among others.</li>
                                </ul>         
                        </div>
                    </div>
                </div>
        </div>

        <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">Events under CSI</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                        <h6 className="tl-8-feature-title mb-4">Academic Year : 2019-20</h6>
                               <ul className="tl-event-details-key-content-list phd-container">
                                    <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#">Two Days Workshop conducted on "Internet of Things" on 9th February 2020. <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                    <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#">An Expert Lecture on "Campus to Corporate" conducted on 17th September 2019. <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                    <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#">An Inauguration function of CSI and Expert Lecture conducted on "Industry 4.0" on 16th September 2019. <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                </ul>

                                <h6 className="tl-8-feature-title mb-4 mt-30">Academic Year : 2018-19</h6>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="#">C Programming contest Conducted on 10th August 2018. <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
    </div>
    </div>
</section>
  )
}

export default ComputerDeptCSI