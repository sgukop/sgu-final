"use client"; // Marks this file as a React Client Component

import React from "react";
import NavLinks from "./Navlinks"; // Lowercase 'l' to match the exact file casing on disk
import MenuList from "../Reusable-components/MenuList";

const DesignDeptHamstech = () => {
  return (
    
    <section className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">School of Design</h2>
        

        <div className="row">
          {/* Navigation Sidebar */}
          <MenuList dept="Design" subMenu={NavLinks} />

          {/* Main Content Pane */}
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-12 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            
            <div className="department-content">
              {/* Hero Banner Section */}
              <div className="mb-5">
                <h3
                  className="mb-4"
                  style={{
                    color: "#0056b3",
                    fontSize: "38px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  A New Era of Design Education at Sanjay Ghodawat University
                </h3>
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="/assets/images/design-dept/hamstech-sgu.png"
                    alt="Hamstech and Sanjay Ghodawat University"
                    className="img-fluid rounded shadow-sm"
                    style={{
                      width: "70%",
                      maxWidth: "900px",
                      height: "auto",
                    }}
                  />
                </div>
                <p>
                  Hamstech's industry-driven creative education, where you learn
                  through real projects, expert mentorship, and future-focused
                  skills, meets Sanjay Ghodawat University's academic excellence,
                  delivered within a world-class campus and a recognised
                  university experience. Together, we shape the designers of
                  tomorrow.
                </p>
              </div>

              {/* About Hamstech */}
              <div className="mb-5">
                <h3 className="mb-4">About Hamstech</h3>
                <div className="d-flex justify-content-center mb-4">
                  <iframe
                    width="900"
                    height="500"
                    src="https://www.youtube.com/embed/THewu4K0Xuo"
                    title="About Hamstech"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ borderRadius: "10px", border: "none" }}
                  ></iframe>
                </div>
                <p>
                  With over 30 years of expertise, Hamstech College of Creative
                  Education has grown into one of India's most trusted names in
                  creative education. Hamstech has empowered <strong>38,000+</strong>{" "}
                  students and alumni to transform their passion into successful
                  careers through industry-relevant programmes, hands-on
                  learning, and mentorship from expert and celebrity designers.
                </p>
                <p>
                  By integrating future-ready tools, AI-enabled learning, and
                  real-world exposure, Hamstech prepares students to thrive in
                  the evolving creative economy while building the next
                  generation of designers, innovators, and creative entrepreneurs.
                </p>
              </div>

              {/* About SGU */}
              <div className="mb-5">
                <h3 className="mb-4">About Sanjay Ghodawat University</h3>
                <div className="d-flex justify-content-center mb-4">
                  <iframe
                    width="900"
                    height="500"
                    src="https://www.youtube.com/embed/QAEJz-6tA-s"
                    title="About Sanjay Ghodawat University"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ borderRadius: "10px", border: "none" }}
                  ></iframe>
                </div>
                <p>
                  Located in Kolhapur, Maharashtra, Sanjay Ghodawat University is
                  a dynamic private university recognised by the UGC and
                  established under the Government of Maharashtra.
                </p>
                <p>
                  Built on a vision to nurture future leaders, Sanjay Ghodawat
                  University offers a learning environment where innovation,
                  creativity, and industry integration come together across
                  disciplines.
                </p>
                <p>
                  At Sanjay Ghodawat University, education goes beyond
                  classrooms, preparing you to create impact and shape the
                  future.
                </p>
              </div>

              {/* Legacy Statistics Grid */}
              <div className="my-5">
                <h3
                  className="mb-5"
                  style={{
                    color: "#0056b3",
                    fontSize: "38px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  A Combined Legacy of Excellence
                </h3>
                
                <div className="row text-center">
                  <div className="col-md-3 col-6 mb-4">
                    <div className="p-4 rounded shadow" style={{ backgroundColor: "#ac303d", color: "#fff" }}>
                      <h2 className="fw-bold mb-2">4K+</h2>
                      <p className="mb-0">Students</p>
                    </div>
                  </div>

                  <div className="col-md-3 col-6 mb-4">
                    <div className="p-4 rounded shadow" style={{ backgroundColor: "#0a68ce", color: "#fff" }}>
                      <h2 className="fw-bold mb-2">500+</h2>
                      <p className="mb-0">Personnel</p>
                    </div>
                  </div>

                  <div className="col-md-3 col-6 mb-4">
                    <div className="p-4 rounded shadow" style={{ backgroundColor: "#e06f06", color: "#fff" }}>
                      <h2 className="fw-bold mb-2">100+</h2>
                      <p className="mb-0">Industry Collaborations</p>
                    </div>
                  </div>

                  <div className="col-md-3 col-6 mb-4">
                    <div className="p-4 rounded shadow" style={{ backgroundColor: "#5a7b9e", color: "#fff" }}>
                      <h2 className="fw-bold mb-2">15K+</h2>
                      <p className="mb-0">Alumni</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Experience */}
              <div className="my-5">
                <h3
                  className="mb-5"
                  style={{
                    color: "#0056b3",
                    fontSize: "38px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Experience a WORLD-CLASS 165-Acre Campus
                </h3>

                <div className="row align-items-center">
                  <div className="col-lg-5 text-center mb-4 mb-lg-0">
                    <img
                      src="/assets/images/about-university/image1.jpg"
                      alt="World-Class Campus"
                      className="shadow"
                      style={{
                        width: "350px",
                        height: "350px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "6px solid #0056b3",
                      }}
                    />
                  </div>

                  <div className="col-lg-7">
                    <p>
                      Step into a campus designed for the way you learn, create, and grow.
                      Spread across <strong>165 acres</strong>, your environment here fuels
                      ideas, collaboration, and real-world thinking every single day.
                    </p>
                    <h5 className="mt-4 mb-3 fw-bold">What You'll Experience:</h5>
                    <ul>
                      <li>Smart classrooms that make learning interactive.</li>
                      <li>Design studios and creative labs where your ideas come to life.</li>
                      <li>Innovation and incubation centres to build and launch your own concepts.</li>
                      <li>Sports and recreation spaces to recharge and stay active.</li>
                      <li>Comfortable hostels and residential amenities that feel like home.</li>
                    </ul>
                    <p className="mt-4">
                      From your first day to your final project, every space is built to support
                      your journey academically, creatively, and personally.
                    </p>
                  </div>
                </div>
              </div>

              {/* Programmes Grid */}
              <div className="my-5">
                <h3
                  className="mb-5"
                  style={{
                    color: "#0056b3",
                    fontSize: "38px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Programmes Designed for the Creative Economy
                </h3>

                <div className="row g-4">
                  {/* Fashion Design */}
                  <div className="col-lg-6">
                    <div className="card text-center border-0 rounded-4 shadow h-100 p-4 text-white" style={{ backgroundColor: "#ff8c00" }}>
                      <div className="d-flex justify-content-center mb-4">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: "100px", height: "100px" }}>
                          <i className="fa-solid fa-shirt" style={{ fontSize: "40px", color: "#ff8c00" }}></i>
                        </div>
                      </div>
                      <h4 className="fw-bold">Bachelor of Design – Fashion Design</h4>
                      <p className="mb-4">4-Year Programme</p>
                      <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <a href="https://manage-api.sguk.ac.in/api/assets/6a576f8f935ebc5e821311ce" className="btn btn-light fw-semibold">
                          <i className="fa-solid fa-download me-2"></i>Prospectus
                        </a>
                        <a href="https://wa.me/918600360793" className="btn btn-outline-light fw-semibold" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-whatsapp me-2"></i>Chat
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Interior Design */}
                  <div className="col-lg-6">
                    <div className="card text-center border-0 rounded-4 shadow h-100 p-4 text-white" style={{ backgroundColor: "#0d6efd" }}>
                      <div className="d-flex justify-content-center mb-4">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: "100px", height: "100px" }}>
                          <i className="fa-solid fa-couch" style={{ fontSize: "40px", color: "#0d6efd" }}></i>
                        </div>
                      </div>
                      <h4 className="fw-bold">Bachelor of Design – Interior Design</h4>
                      <p className="mb-4">4-Year Programme</p>
                      <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <a href="https://manage-api.sguk.ac.in/api/assets/6a577129935ebc5e821311df" className="btn btn-light fw-semibold">
                          <i className="fa-solid fa-download me-2"></i>Prospectus
                        </a>
                        <a href="https://wa.me/918600360793" className="btn btn-outline-light fw-semibold" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-whatsapp me-2"></i>Chat
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Product Design */}
                  <div className="col-lg-6">
                    <div className="card text-center border-0 rounded-4 shadow h-100 p-4 text-white" style={{ backgroundColor: "#e83e8c" }}>
                      <div className="d-flex justify-content-center mb-4">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: "100px", height: "100px" }}>
                          <i className="fa-solid fa-cube" style={{ fontSize: "40px", color: "#e83e8c" }}></i>
                        </div>
                      </div>
                      <h4 className="fw-bold">Bachelor of Design – Product Design</h4>
                      <p className="mb-4">4-Year Programme</p>
                      <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <a href="https://manage-api.sguk.ac.in/api/assets/6a577045935ebc5e821311d5" className="btn btn-light fw-semibold">
                          <i className="fa-solid fa-download me-2"></i>Prospectus
                        </a>
                        <a href="https://wa.me/918600360793" className="btn btn-outline-light fw-semibold" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-whatsapp me-2"></i>Chat
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Communication Design */}
                  <div className="col-lg-6">
                    <div className="card text-center border-0 rounded-4 shadow h-100 p-4 text-white" style={{ backgroundColor: "#28a745" }}>
                      <div className="d-flex justify-content-center mb-4">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: "100px", height: "100px" }}>
                          <i className="fa-solid fa-palette" style={{ fontSize: "40px", color: "#28a745" }}></i>
                        </div>
                      </div>
                      <h4 className="fw-bold">Bachelor of Design – Communication Design</h4>
                      <p className="mb-4">4-Year Programme</p>
                      <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <a href="https://manage-api.sguk.ac.in/api/assets/6a57709d935ebc5e821311da" className="btn btn-light fw-semibold">
                          <i className="fa-solid fa-download me-2"></i>Prospectus
                        </a>
                        <a href="https://wa.me/918600360793" className="btn btn-outline-light fw-semibold" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-whatsapp me-2"></i>Chat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Makes Us Different */}
              <div className="my-5">
                <h3
                  className="mb-5"
                  style={{
                    color: "#0056b3",
                    fontSize: "38px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  What Makes This Design School Different
                </h3>

                <div className="row g-4">
                  {/* Item 1 */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-start p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#EAF3FF" }}>
                      <div className="d-flex align-items-center justify-content-center rounded-3 me-3" style={{ width: "60px", height: "60px", backgroundColor: "#0d6efd", color: "#fff", fontSize: "24px" }}>
                        <i className="fa-solid fa-robot"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold">AI-Integrated Courses</h5>
                        <p className="mb-0">Learn using AI tools, digital design technologies and emerging creative software.</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-start p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#EEF3FF" }}>
                      <div className="d-flex align-items-center justify-content-center rounded-3 me-3" style={{ width: "60px", height: "60px", backgroundColor: "#003366", color: "#fff", fontSize: "24px" }}>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold">Celebrity Mentorship</h5>
                        <p className="mb-0">Learn from Neeta Lulla and other industry experts.</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-start p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#FFF4E8" }}>
                      <div className="d-flex align-items-center justify-content-center rounded-3 me-3" style={{ width: "60px", height: "60px", backgroundColor: "#ff8c00", color: "#fff", fontSize: "24px" }}>
                        <i className="fa-solid fa-building-columns"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold">165-Acre World-Class Campus</h5>
                        <p className="mb-0">Experience innovation, collaboration and holistic learning.</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-start p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#EAFBF1" }}>
                      <div className="d-flex align-items-center justify-content-center rounded-3 me-3" style={{ width: "60px", height: "60px", backgroundColor: "#28a745", color: "#fff", fontSize: "24px" }}>
                        <i className="fa-solid fa-lightbulb"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold">Entrepreneurship Support</h5>
                        <p className="mb-0">Launch your own brands, creative studios and design ventures.</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-start p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#FFF0F8" }}>
                      <div className="d-flex align-items-center justify-content-center rounded-3 me-3" style={{ width: "60px", height: "60px", backgroundColor: "#e83e8c", color: "#fff", fontSize: "24px" }}>
                        <i className="fa-solid fa-briefcase"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold">Real Industry Exposure</h5>
                        <p className="mb-0">Participate in live projects and industry showcases.</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 6 */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-start p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#F2FFF4" }}>
                      <div className="d-flex align-items-center justify-content-center rounded-3 me-3" style={{ width: "60px", height: "60px", backgroundColor: "#7ED957", color: "#fff", fontSize: "24px" }}>
                        <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold">100% Placement Support</h5>
                        <p className="mb-0">Career guidance and placement assistance with leading design companies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruiter Logos */}
              <div className="my-5">
                <h3
                  className="mb-4"
                  style={{
                    color: "#0056b3",
                    fontSize: "38px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  400+ National & Global Recruiters
                </h3>

                <div className="row justify-content-center g-2">
                  {[...Array(20)].map((_, index) => (
                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4 text-center mb-2" key={index}>
                      <div
                        className="shadow-sm rounded-2 bg-white p-1 d-flex align-items-center justify-content-center"
                        style={{ height: "60px" }}
                      >
                        <img
                          src={`/assets/images/recruiters/${index + 1}.png`}
                          alt={`Recruiter ${index + 1}`}
                          className="img-fluid"
                          style={{
                            maxHeight: "100px",
                            maxWidth: "120px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
              {/* Call to Action Callout Box */}
              <div
                className="text-center mt-5 py-5 px-4 rounded-5 shadow"
                style={{
                  backgroundColor: "#f78409",
                  border: "3px solid #E67E22",
                }}
              >
                <h2 className="fw-bold" style={{ color: "#ffffff" }}>
                  Design the Future. Lead with Creativity.
                </h2>
                <p className="lead mt-3 text-white">
                  Start your journey with the School of Design by Hamstech at
                  <br />
                  Sanjay Ghodawat University.
                </p>
                <a
                  href="https://sanjayghodawat.edmission.app/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 30px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    fontSize: "18px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "600"
                  }}
                >
                  Apply Now
                </a>
              </div>
              
            
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDeptHamstech;