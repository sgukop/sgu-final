import React from "react";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const DesignDeptHamstech = () => {
  return (
    <section className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">
          School of Design
        </h2>

        <div className="row">
          <MenuList dept="Design" subMenu={NavLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-12 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="department-content">

              <div className="mb-5">
                <h3 className="mb-4">
                  A New Era of Design Education at Sanjay Ghodawat University
                </h3>

                <p>
                  Hamstech's industry-driven creative education, where you learn
                  through real projects, expert mentorship, and future-focused
                  skills, meets Sanjay Ghodawat University's academic excellence,
                  delivered within a world-class campus and a recognised
                  university experience. Together, we shape the designers of
                  tomorrow.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="mb-4">
                  About Hamstech
                </h3>

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
                  generation of designers, innovators, and creative
                  entrepreneurs.
                </p>
              </div>

              <div>
                <h3 className="mb-4">
                  About Sanjay Ghodawat University
                </h3>

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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDeptHamstech;