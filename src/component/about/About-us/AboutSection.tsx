import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="tl-10-about-section p-50">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            {/* <div className="tl-10-about-img">
              <img src="assets/images/about-us/about-universityy.jpg" alt="university" />

            </div> */}
                       <div className="tl-10-about-img">
              <img src="assets/images/about-us/about-universityy.jpg" alt="university" />

              <span className="bottom-img">
                <img src="assets/images/about-us/about-universityy2.jpg" alt="university" />
              </span>

              {/* <div className="tl-10-users">
                <div className="tl-10-users-img">
                  <img src="assets/images/tl-10/04.png" alt="user" />
                  <img src="assets/images/tl-10/03.png" alt="user" />
                  <img src="assets/images/tl-10/02.png" alt="user" />
                  <span className="last-img">
                    <img src="assets/images/tl-10/01.png" alt="user" />
                    <span className="last-img-txt">2k+</span>
                  </span>
                </div>

                <h6 className="tl-10-users-txt">
                  More Than <br /> 2k+ Tutors
                </h6>
              </div> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tl-10-about-txt">
              <h2 className="tl-section-title">
                Leadership The Educupt Global{" "}
                <span className="last-word">Education</span>.
              </h2>
              <p className="tl-10-about-descr tl-about-descr">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected randomised words which don't look even slightly
                believable.
              </p>
              <Link href="/about-university" target="_self" className="tl-def-btn-2">
                University Overview{" "}
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
