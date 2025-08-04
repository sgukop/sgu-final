import { blogList } from "@/data/Data";
import Link from "next/link";
import React from "react";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const CivilDeptLaboratories = () => {
  return (
    <>
      <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
          <div className="tl-9-section-heading">
            <div className="row gy-4 align-items-center">
              <div className="col-md-12">
                <h2 className="universityobject-heading dark-mode-white-color py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
                  Academic Infrastructure
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <MenuList dept="" subMenu={NavLinks} />
            <div
              data-spy="scroll"
              className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
              data-target="#menu-navbar"
              data-offset="0"
            >

                <div className="tl-11-section-heading">
                  <h2 className="tl-11-section-title">
                    Civil department consists of different laboratories listed
                    below.
                  </h2>
                </div>
              <div className="row g-3 g-lg-4 justify-content-center">
                
              {/*  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil1.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Engineering Geology Lab
                    </h3>
                  </div>
                </div>  */}

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil2.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Engineering Geology Lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil3.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Fluid Mechanics lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil4.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Fluid Mechanics lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil5.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Fluid Mechanics lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil6.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Fluid Mechanics lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil7.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Geotech Lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil8.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Geotech Lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil9.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Geotech Lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil10.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Structural Mechanic Lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil11.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Surveying Lab
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                  <div className="tl-9-blog">
                    <div className="tl-9-event-img">
                      <figure>
                        <img
                          src="assets/images/civil-engineering-dept/laboratories/Civil12.jpg"
                          alt="Events Image"
                        />
                      </figure>
                    </div>
                    <h3 className="tl-6-latest-article-title mt-10">
                      Surveying Lab
                    </h3>
                  </div>
                </div>
              </div>

              <div className="tl-11-section-heading mt-50">
                <h2 className="tl-11-section-title">Laboratories Cost</h2>
              </div>

              <div className="row justify-content-center gy-4">
                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">
                        Basic Civil Engineering / Applied Mechanics Lab
                      </h3>
                      <p className="tl-9-program-descr">
                        The lab involves study of basic equipment's of applied
                        mechanics and basic civil engineering such as study of
                        chain, compass, dumpy level with their filed
                        application.
                      </p>
                      <p
                        className="dark-mode-white-color"
                        style={{ marginBottom: "30px" }}
                      >
                        <strong>Total Investment : </strong>2.45 Lac
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">
                        Fluid Mechanics Lab
                      </h3>
                      <p className="tl-9-program-descr">
                        The lab gives clear visual appreciation of the
                        principles of fluid mechanics is the objective of our
                        designs combined with instrumentation which allows a
                        full range of experimental work to be completed.
                      </p>
                      <p
                        className="dark-mode-white-color"
                        style={{ marginBottom: "60px" }}
                      >
                        <strong>Total Investment : </strong>14.75 Lac
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">
                        Structural Engineering Lab
                      </h3>
                      <p className="tl-9-program-descr">
                        The student will be able to "see" and "feel" the
                        properties and behaviors of materials under tension,
                        bending, torsion and buckling. A computerized universal
                        testing machine is available for tensile and hardening
                        experiments, with corresponding graphical software.
                      </p>
                      <p className="dark-mode-white-color">
                        <strong>Total Investment : </strong>16.85 Lac
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">
                        Geotechnical Engineering Lab
                      </h3>
                      <p className="tl-9-program-descr">
                        The lab involves study of earth materials in the context
                        of engineering investigation, design and construction.
                        Available testing equipment ranges from standard devices
                        and soils laboratory infrastructure to state-of-the-art
                        soil and aggregate testing systems.
                      </p>
                      <p
                        className="dark-mode-white-color"
                        style={{ marginBottom: "60px" }}
                      >
                        <strong>Total Investment : </strong>5.00 Lac
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">Surveying Lab</h3>
                      <p className="tl-9-program-descr">
                        The lab provides practical work on.The Surveying
                        Laboratory enables students to understand the basic
                        principles of surveying by conducting field exercises
                        using surveying equipment such as Electronic Total
                        Station (Accuracy 5 sec), Vernier Transit Theodolite
                        (Accuracy 20 sec), Quick setting Dumpy Level, level etc.
                      </p>
                      <p
                        className="dark-mode-white-color"
                        style={{ marginBottom: "40px" }}
                      >
                        <strong>Total Investment : </strong>5.75 Lac
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">
                        Engineering Geology Lab
                      </h3>
                      <p className="tl-9-program-descr">
                        The laboratory portion of this course will introduce you
                        to some basic geologic principles, starting off with
                        basic identification of geologic materials, map use and
                        deformation of rock analogs. Then we will head outdoors
                        to explore geologic and geophysical mapping techniques;
                        and illustrate environmental, geologic and engineering
                        topics through visits to local field sites.
                      </p>
                      <p className="dark-mode-white-color">
                        <strong>Total Investment : </strong>1.75 Lac
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">
                        Environmental Engineering Lab
                      </h3>
                      <p className="tl-9-program-descr">
                        The primary objective of this lab is to demonstrate
                        environmental engineering testing procedures. Students
                        contribute through water testing procedures to build a
                        pollution database of the nearby rivers. A three meters
                        high settling column is available for wastewater
                        analysis. Other equipment includes BOD Incubator
                        Chamber, COD Digestion Apparatus.
                      </p>
                      <p className="dark-mode-white-color">
                        <strong>Total Investment : </strong>4.00 Lac
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">
                        Concrete Technology Lab
                      </h3>
                      <p className="tl-9-program-descr">
                        Students are actively involved in studying the behavior
                        of concrete through designing and testing concrete
                        mixes. Concrete is tested for consistency while fresh
                        and for strength after curing and hardening. A 3000KN
                        Digital Compression testing Machine, Permeability Test
                        Apparatus, Digital Accelerated Curing Tank, Flexural
                        beam testing machine, Humidity Chamber Heating Type
                        available.
                      </p>
                      <p className="dark-mode-white-color">
                        <strong>Total Investment : </strong>10.55 Lac
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="tl-9-program">
                    <div className="tl-9-program-txt">
                      <h3 className="tl-9-program-title">
                        Transportation Engineering Lab
                      </h3>
                      <p className="tl-9-program-descr">
                        The students will be able to design, mix, compact and
                        test asphalt mixtures. Ho-mix asphalt is analyzed using
                        Marshall Test and the bitumen binder is graded by
                        penetration. Aggregates are tested for abrasion with a
                        Los Angeles machine, and evaluated according to their
                        sand equivalent value and California bearing ratio.
                        Extraction of bitumen is also available for field
                        control testing.
                      </p>
                      <p className="dark-mode-white-color">
                        <strong>Total Investment : </strong>5.25 Lac
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CivilDeptLaboratories;
