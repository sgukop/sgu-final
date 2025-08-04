import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'

const ManagementDeptProgramsNew = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
    <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Programs Under Department of Management</h2>
            <div className="row gy-4 gy-sm-5 tl-1-blogs-row justify-content-center">
            <MenuList dept="School of Management" subMenu={NavLinks} />
      <div
        data-spy="scroll"
        className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
        data-target="#menu-navbar"
        data-offset="0"
      >
         
         <div className="flex">
                <h3 className="tl-event-details-area-title mr-4">Powered by</h3>
                <img src="assets/images/management-dept/programs/logo1.png" className="mr-4"/> <span className="tl-event-details-area-title">& </span>
                <img src="assets/images/management-dept/programs/logo2.png" className="ml-4"/>
        
        </div>

        <div className="row mt-10 g-4">
                <div className="col-lg-4">
                    <div className="tl-1-blog">
                        <img src="assets/images/management-dept/programs/used34.jpg" alt="Management Program Image" className="tl-1-blog-img"/>
                            <div className="tl-1-blog-txt">
                                <h4 className="tl-1-blog-title"><Link href="/bba-program">Bachelor of Business Administration (BBA) (Hons.)</Link></h4>
                                <Link href="/bba-program" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                            </div>
                    </div>
                </div>
               
                <div className="col-lg-4">
                    <div className="tl-1-blog">
                        <img src="assets/images/management-dept/programs/used37.jpg" alt="Management Program Image" className="tl-1-blog-img"/>
                            <div className="tl-1-blog-txt">
                                <h4 className="tl-1-blog-title"><Link href="/mba-program">Master of Business Administration (MBA)</Link></h4>
                                <Link href="/mba-program" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="tl-1-blog">
                        <img src="assets/images/management-dept/programs/used36.jpg" alt="Management Program Image" className="tl-1-blog-img"/>
                            <div className="tl-1-blog-txt">
                                <h4 className="tl-1-blog-title"><Link href="/management-phd-program">Doctor of Philosophy (Ph.D.) in Management</Link></h4>
                                <Link href="/management-phd-program" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                            </div>
                    </div>
                </div> 

                <div className="col-lg-4">
                    <div className="tl-1-blog">
                        <img src="assets/images/management-dept/programs/diasaster.jpg" alt="Management Program Image" className="tl-1-blog-img"/>
                            <div className="tl-1-blog-txt">
                                <h4 className="tl-1-blog-title"><Link href="#">MBA (Disaster Management)</Link></h4>
                                <Link href="#" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                            </div>
                    </div>
                </div>  
        </div>

       {/*    <div className="row mt-50">
            <div className="col-lg-12 mt-50">
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                    <h3 className="tl-event-details-area-title">Key Differentiators of the Department of Management</h3>
                        <div className="tl-8-about-txt yellow-clr-hover">
                            <div className="tl-8-features">
                                <div className="tl-8-feature">
                                    <p className="dark-mode-white-color">By blending academic excellence with practical exposure, the Department of Management at SGU, Kolhapur, stands as a preferred destination for aspiring business professionals in Western Maharashtra, offering them a transformative educational experience. <br/><br/> Our key differentiators are - </p>
                                    <ul className="tl-event-details-key-content-list">
                                        <li><strong>Industry-Integrated Curriculum</strong><br/><br/>
                                            The department boasts an industry-aligned curriculum that blends contemporary business practices with academic rigor. Regular updates ensure students gain insights into emerging trends such as AI in management, sustainability, and global business strategies.
                                        </li>
                                        <li><strong>Experiential Learning Opportunities</strong><br/><br/>
                                        Hands-on learning is at the heart of pedagogy. Through case studies, live projects, internships, and simulation-based workshops, students acquire real-world problem-solving skills that set them apart in competitive job markets.</li>
                                        <li><strong>State-of-the-Art Infrastructure</strong><br/><br/>
                                        SGU provides world-class facilities, including advanced classrooms, a dedicated management research lab, Finance lab and access to leading business databases for in-depth research and analysis.</li>
                                        <li><strong>Strong Industry Back-up and Collaborations</strong><br/><br/>
                                        Partnerships with renowned Sanjay Ghodawat Group and other companies like L&T, NSE, and industry bodies facilitate internships, guest lectures, mentorship programs, and placement opportunities, giving students a competitive edge.</li>
                                        <li><strong>Entrepreneurship and Innovation Cell (EIC)</strong><br/><br/>
                                        To foster an entrepreneurial spirit, the department's EIC provides resources, mentorship, and funding support for student startups, making it a hub for innovation in Western Maharashtra.</li>
                                        <li><strong>Focus on Holistic Development</strong><br/><br/>
                                        Alongside academics, the department emphasizes personal and professional development through soft skills training, leadership programs, and co-curricular activities such as management fests and case competitions.</li>
                                        <li><strong>Expert Faculty and Research Orientation</strong><br/><br/>
                                        The department prides itself on its highly qualified faculty, with expertise in diverse management domains. Faculty-led research initiatives and projects offer students opportunities to engage with cutting-edge business research.</li>
                                        <li><strong>Community Engagement and CSR Initiatives</strong><br/><br/>
                                        Unique programs involving community outreach, sustainability projects, and CSR activities align with SGU's vision to create socially responsible business leaders.</li>
                                     <li><strong>Student-Driven Clubs Initiatives</strong><br/><br/>
                                        To foster all-around development and practical learning, the department promotes vibrant student-driven clubs, including few as : 
                                            <ul className="tl-event-details-key-content-list mt-20">
                                                <li><strong>Marketing Club : </strong>Organizes events like business fairs, branding challenges, market research projects, and ad-making competitions to hone creative and analytical skills.</li>
                                                <li><strong>Finance Club : </strong>Hosts stock market simulations, investment workshops, and finance boot camps to build expertise in financial management and analysis.</li>
                                                <li><strong>CSR Club : </strong>Engages students in community outreach, environmental sustainability initiatives, and social responsibility activities, nurturing ethical and compassionate business leaders.</li>
                                                <li><strong>Art & Culture Club : </strong>Encourages creativity and cultural appreciation through festivals, art exhibitions, and talent showcases, enhancing team-building and leadership skills.</li>
                                            </ul>
                                        </li>  
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
            </div>
    </div>
</section>
  )
}

export default ManagementDeptProgramsNew