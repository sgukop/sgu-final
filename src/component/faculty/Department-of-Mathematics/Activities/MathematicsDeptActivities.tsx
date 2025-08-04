'use client';
import React from 'react';
import Link from 'next/link';
import IndustrialVisits from './IndustrialVisits';
import Seminars from './Seminars';
import ProgramsConducted from './ProgramsConducted';
import GuestLectures from './GuestLectures';
import NavLinks from '../Navlinks';
import MenuList from '../../Reusable-components/MenuList';

const MathematicsDeptActivities = () => {
    return (
      <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Activities</h2>
        <div className="row">
          <MenuList dept="Mathematics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
                <div className="col-lg-12">
                        <div className="accordion mt-10" id="civilactivity">
                            <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-controls="collapseOne"
                                    >
                                    Industrial Visits / Educational Tours
                                    </button>
                                </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#civilactivity"
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
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                Seminars / Workshops / Conferences Attended
                                    </button>
                                </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                            <Seminars/>
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
                                     Workshops / Programs Conducted
                                    </button>
                                </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                            <ProgramsConducted/>
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
                                   Guest / Expert Lectures
                                    </button>
                                </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                            <GuestLectures/>
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

export default MathematicsDeptActivities;