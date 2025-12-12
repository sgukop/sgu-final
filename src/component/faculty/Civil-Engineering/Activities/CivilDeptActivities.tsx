'use client';
import React from 'react';
import Link from 'next/link';

import Convocation from './convocation';
import Khndenavami from './khndenavami';
import NSS from './NSS';
import ValueAddedTraining from './ValueAddedTraining';
import ExperLectures from './ExperLectures';
import SeminarsFaculties from './SeminarsFaculties';
import ConferencesByFaculties from './ConferencesByFaculties';
import ConferencesByStudents from './ConferencesByStudents';
import EducationalVisits from './EducationalVisits';

import NavLinks from '../Navlinks';
import MenuList from '../../Reusable-components/MenuList';

import FacultyAchievements from '../Achievements/FacultyAchievements';
import StudentsAchievements from '../Achievements/StudentsAchievements';
import DepartmentAchievements from '../Achievements/DepartmentAchievements';


const CivilDeptActivities = () => {
    return (
        <section className="tl-14-blogs tl-3-section-spacing" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container-fluid">

                <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
                    Events, Activities & Achievements
                </h2>

                <div className="row">
                    <MenuList dept="" subMenu={NavLinks} />

                    <div
                        data-spy="scroll"
                        className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
                        data-target="#menu-navbar"
                        data-offset="0"
                    >

                        <div className="tl-11-section-heading">
                            <h2 className="tl-11-section-title">Activities</h2>
                        </div>

                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-12">
                                <div className="accordion mt-10" id="civilactivity">

                                    {/* ITEM 1 - Convocation */}
                                    <div className="tl-event-details-area tl-course-details-curriculum">
                                        <h2 className="accordion-header" id="headingConvocation1">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseConvocation1"
                                                aria-expanded="false"
                                                aria-controls="collapseConvocation1"
                                            >
                                               7th Convocation
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseConvocation1"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingConvocation1"
                                            data-bs-parent="#civilactivity"
                                        >
                                            <div className="accordion-body">
                                                <Convocation />
                                            </div>
                                        </div>
                                    </div>
                                    {/* ITEM 2 - Khndenavami */}
                                         <div className="tl-event-details-area tl-course-details-curriculum">
                                          <h2 className="accordion-header" id="headingKhnde">
                                             <button
                                                className="accordion-button collapsed"
                                             type="button"
                                               data-bs-toggle="collapse"
                                               data-bs-target="#collapseKhnde"
                                              aria-expanded="false"
                                              aria-controls="collapseKhnde"
                                                  >
                                               Khndenavami
                                                 </button>
                                                     </h2>
                                                <div
                                                 id="collapseKhnde"
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby="headingKhnde"
                                                  data-bs-parent="#civilactivity"
                                                 >
                                                <div className="accordion-body">
                                                  <Khndenavami />
                                                  </div>
                                                     </div>
                                                     </div>
 
                                    {/* ITEM 3 - NSS */}
                                    <div className="tl-event-details-area tl-course-details-curriculum">
                                        <h2 className="accordion-header" id="headingNSS">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseNSS"
                                                aria-expanded="false"
                                                aria-controls="collapseNSS"
                                            >
                                               NSS
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseNSS"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingNSS"
                                            data-bs-parent="#civilactivity"
                                        >
                                            <div className="accordion-body">
                                                <NSS />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 4 - Value Added Training */}
                                    <div className="tl-event-details-area tl-course-details-curriculum">
                                        <h2 className="accordion-header" id="headingVAT">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseVAT"
                                                aria-controls="collapseVAT"
                                            >
                                                Value Added Training Programme and Workshop Conducted
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseVAT"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingVAT"
                                            data-bs-parent="#civilactivity"
                                        >
                                            <div className="accordion-body">
                                                <ValueAddedTraining />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 5 - Expert Lectures */}
                                    <div className="tl-event-details-area tl-course-details-curriculum">
                                        <h2 className="accordion-header" id="headingExpert">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseExpert"
                                                aria-expanded="false"
                                                aria-controls="collapseExpert"
                                            >
                                                Guest / Expert Lectures
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseExpert"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingExpert"
                                            data-bs-parent="#civilactivity"
                                        >
                                            <div className="accordion-body">
                                                <ExperLectures />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 6 - Seminars */}
                                    <div className="tl-event-details-area tl-course-details-curriculum">
                                        <h2 className="accordion-header" id="headingSem">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSem"
                                                aria-expanded="false"
                                                aria-controls="collapseSem"
                                            >
                                                Seminars / Workshops attended by the Faculties
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSem"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSem"
                                            data-bs-parent="#civilactivity"
                                        >
                                            <div className="accordion-body">
                                                <SeminarsFaculties />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 7 - Faculty Conferences */}
                                    <div className="tl-event-details-area tl-course-details-curriculum">
                                        <h2 className="accordion-header" id="headingFac">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFac"
                                                aria-expanded="false"
                                                aria-controls="collapseFac"
                                            >
                                                Conferences attended by the Faculties
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFac"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFac"
                                            data-bs-parent="#civilactivity"
                                        >
                                            <div className="accordion-body">
                                                <ConferencesByFaculties />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 8 - Student Conferences */}
                                    <div className="tl-event-details-area tl-course-details-curriculum">
                                        <h2 className="accordion-header" id="headingStd">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseStd"
                                                aria-expanded="false"
                                                aria-controls="collapseStd"
                                            >
                                                Conferences attended by the Students
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseStd"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingStd"
                                            data-bs-parent="#civilactivity"
                                        >
                                            <div className="accordion-body">
                                                <ConferencesByStudents />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 9 - Educational Visits */}
                                    <div className="tl-event-details-area tl-course-details-curriculum">
                                        <h2 className="accordion-header" id="headingVisit">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseVisit"
                                                aria-expanded="false"
                                                aria-controls="collapseVisit"
                                            >
                                                Industrial and Educational Visits
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseVisit"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingVisit"
                                            data-bs-parent="#civilactivity"
                                        >
                                            <div className="accordion-body">
                                                <EducationalVisits />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ---------------- Achievements Section ---------------- */}
                        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50 mt-50">
                            Achievements
                        </h2>

                        <div className="row">
                            <FacultyAchievements />
                            <StudentsAchievements />
                            <DepartmentAchievements />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CivilDeptActivities;
