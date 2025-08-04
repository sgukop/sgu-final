'use client';
import React from 'react';
import Link from 'next/link';
import ValueAddedTraining from './ValueAddedTraining';
import ExperLectures from './ExperLectures';
import SeminarsFaculties from './SeminarsFaculties';
import ConferencesByFaculties from './ConferencesByFaculties';
import ConferencesByStudents from './ConferencesByStudents';
import EducationalVisits from './EducationalVisits';
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'
import FacultyAchievements from '../Achievements/FacultyAchievements';
import StudentsAchievements from '../Achievements/StudentsAchievements';
import DepartmentAchievements from '../Achievements/DepartmentAchievements';


const CivilDeptActivities = () => {
    return (
      <section className="tl-14-blogs tl-3-section-spacing" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Events, Activities & Achievements</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Activities</h2></div>
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
                                    Value Added Training Programme and Workshop Conducted
                                    </button>
                                </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                            <ValueAddedTraining/>
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
                                 Guest / Expert Lectures
                                    </button>
                                </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                            <ExperLectures/>
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
                                    Seminars / Workshops attended by the Faculties
                                    </button>
                                </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                            <SeminarsFaculties/>
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
                                   Conferences attended by the Faculties
                                    </button>
                                </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                            <ConferencesByFaculties/>
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
                                  Conferences attended by the Students
                                    </button>
                                </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                            <ConferencesByStudents/>
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
                                  Industrial and Educational Visits
                                    </button>
                                </h2>
                            <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#civilactivity"
                            >
                          <div className="accordion-body">
                               <EducationalVisits/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50 mt-50">Achievements</h2>
    <div className="row">
         
          
        <FacultyAchievements/>
        <StudentsAchievements/>
        <DepartmentAchievements/>
    </div>
    </div>
</div>
</div>

</section>
       
    )
}

export default CivilDeptActivities;