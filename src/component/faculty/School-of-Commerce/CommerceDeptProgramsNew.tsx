import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const CommerceDeptProgramsNew = () => {
  return (
    <>
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Program Overview</h2>
    <div className="row">
          <MenuList dept="Commerce" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-4 align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/commerce-dept/programs/program-image.png" alt="About Schools Programmes" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="yellow-clr-hover">
                 <h3 className="tl-event-details-area-title">Bachelor of Commerce (B.COM.) (Hons.)</h3>
                    <h6 className="tl-8-feature-title">About the Programme:</h6>
                    <div className="tl-8-features">
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr">In line with the National Education Policy (NEP) 2020, Bachelor of Commerce (B.Com.) program curriculum with three years and four years with Honours or Honours with Research optional is designed with updated knowledge related to accounting, banking & insurance, costing, auditing, taxation, etc. and delivered with the help of classroom teaching and practical including role-plays, debates, quizzes, presentations, case studies, live projects, simulations, internship and many more modern tools to promote learning and provide a variety of opportunities to enhance employability skills of the students aspiring for great success in their career.</p>
                           <h6 className="tl-8-feature-title mt-4">Eligibility-</h6>
                           <p className="tl-8-feature-descr">10+2 pass (Any discipline) / Equivalent Qualification</p>
                        </div>

                        <div className="tl-8-feature">
                            <h6 className="tl-8-feature-title">Specializations Offered:</h6>
                            <ul className="tl-event-details-key-content-list mt-1">
                                <li>Accounting</li>
                                <li>Banking & Insurance</li>
                                <li>Finance</li>
                            </ul>
                            <p className="dark-mode-white-color" style={{fontSize:"10px",fontStyle:"italic",lineHeight:"2"}}>* School will offer any specialization/elective course(s) on a condition that minimum 20%students of a batch must opt that specialization/elective course(s)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-50">
            <div className="col-lg-12">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Program Features</h3>
                            <ul className="tl-event-details-key-content-list">
                                <li> Fine blend of theory & practical courses with Multi-disciplinary electives courses as per the industry requirements.</li>
                                <li>Corporate exposure through mandatory internship of 6 weeks, industrial visits, expert sessions, etc.</li>
                                <li>Experiential learning through field projects, community engagement projects, student driven club activities/events, etc.</li>
                                <li>Foreign language (German/French) as a part of curriculum.</li>
                                <li>Life Skill, Personality Development, Leadership & Entrepreneurship Lab as a part of curriculum.</li>
                                <li>Emphasis on holistic development through Co-curricular activities like Performing arts, Yoga, NSS, NCC, Sports, Music, etc.</li>
                                <li>Finishing School.</li>
                            </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">Key Differentiators of the Department of Commerce</h3>
                        <p className="dark-mode-white-color mt-4">By blending academic excellence with practical exposure, the Department of Commerce at SGU, Kolhapur, stands as a preferred destination for aspiring business professionals in Western Maharashtra, offering them a transformative educational experience. Our key differentiators are - </p>
                            <ul className="tl-event-details-key-content-list">
                                <li><strong>Industry-Integrated Curriculum : </strong>The department boasts an industry-aligned curriculum that blends contemporary business practices with academic rigor. Regular updates ensure students gain insights into emerging trends such as AI in management, sustainability, and global business strategies.</li>

                                <li><strong>Experiential Learning Opportunities : </strong>Hands-on learning is at the heart of pedagogy. Through case studies, live projects, internships, and simulation-based workshops, students acquire real-world problem-solving skills that set them apart in competitive job markets.</li>

                                <li><strong>State-of-the-Art Infrastructure : </strong>SGU provides world-class facilities, including advanced classrooms, a dedicated management research lab, Finance lab and access to leading business databases for in-depth research and analysis.</li>

                                <li><strong>Strong Industry Back-up and Collaborations : </strong>Partnerships with renowned Sanjay Ghodawat Group and other companies like L&T, NSE, and industry bodies facilitate internships, guest lectures, mentorship programs, and placement opportunities, giving students a competitive edge.</li>

                                <li><strong>Focus on Holistic Development : </strong>Alongside academics, the department emphasizes personal and professional development through soft skills training, leadership programs, and co-curricular activities such as management fests and case competitions.</li>

                                <li><strong>Expert Faculty and Research Orientation : </strong>The department prides itself on its highly qualified faculty, with expertise in diverse management domains. Faculty-led research initiatives and projects offer students opportunities to engage with cutting-edge business research.</li>

                                <li><strong>Community Engagement and CSR Initiatives : </strong>Unique programs involving community outreach, sustainability projects, and CSR activities align with SGU's vision to create socially responsible business leaders.</li>

                                <li><strong>Student-Driven Clubs Initiatives : </strong>To foster all-around development and practical learning, the department promotes vibrant student-driven clubs, including few as:
                                    <ul className="tl-event-details-key-content-list mt-4">
                                        <li><strong>Marketing Club : </strong> Organizes events like business fairs, branding challenges, market research projects, and ad-making competitions to hone creative and analytical skills.</li>
                                        <li><strong>Finance Club : </strong> Hosts stock market simulations, investment workshops, and finance boot camps to build expertise in financial management and analysis.</li>
                                        <li><strong>CSR Club : </strong> Engages students in community outreach, environmental sustainability initiatives, and social responsibility activities, nurturing ethical and compassionate business leaders.</li>
                                        <li><strong>Art & Culture Club : </strong> Encourages creativity and cultural appreciation through festivals, art exhibitions, and talent showcases, enhancing team-building and leadership skills.</li>
                                    </ul>
                                </li>
                                <li><strong>Well-Qualified and Experienced Faculty : </strong>Our faculty members are highly qualified and have extensive experience in both academia and industry. They are dedicated to providing quality education and mentoring to students, helping them grow into competent professionals.</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</section>
</>
  )
}

export default CommerceDeptProgramsNew