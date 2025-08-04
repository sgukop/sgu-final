'use client';
import React from 'react';
import Link from 'next/link';
import WorkshopsSeminars from './WorkshopsSeminars';
import FDPSTTPConducted from './FDPSTTPConducted';
import SponsoredProject from './SponsoredProject';
import GuestLectures from './GuestLectures';
import IndustrialVisits from './IndustrialVisits';
import ParentsMeet from './ParentsMeet';
import Other from './Other';
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'

const ElectricalDeptActivities = () => {
    return (
      <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Activities</h2></div>
        <div className="row">
          <MenuList
            dept="Electrical & Electronics Engineering"
            subMenu={NavLinks}
          />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
               
                    <div className="col-lg-12">
                        <div className="accordion mt-10" id="electricalactivity">
                            <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-controls="collapseOne"
                                    >
                                    Workshops / Seminars Conducted - 2019
                                    </button>
                                </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#electricalactivity"
                            >
                          <div className="accordion-body">
                            <WorkshopsSeminars/>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                FDP / STTP /Workshops Conducted
                                    </button>
                                </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#electricalactivity"
                            >
                          <div className="accordion-body">
                            <FDPSTTPConducted/>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                    Sponsored Project and Consultancy
                                    </button>
                                </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#electricalactivity"
                            >
                          <div className="accordion-body">
                           <SponsoredProject/>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                   Guest Lectures
                                    </button>
                                </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#electricalactivity"
                            >
                          <div className="accordion-body">
                            <GuestLectures/>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                 Industrial Visits
                                    </button>
                                </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#electricalactivity"
                            >
                          <div className="accordion-body">
                            <IndustrialVisits/>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix"
                                        aria-expanded="false"
                                        aria-controls="collapseSix"
                                    >
                                        Parents Meet
                                    </button>
                                </h2>
                            <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#electricalactivity"
                            >
                          <div className="accordion-body">
                              <ParentsMeet/>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="collapseSeven"
                                    >
                                        Other
                                    </button>
                                </h2>
                            <div
                                id="collapseSeven"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#electricalactivity"
                            >
                          <div className="accordion-body">
                              <Other/>
                        </div>
                    </div>
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

export default ElectricalDeptActivities;