import Link from 'next/link'
import React from 'react'

const KnowledgeClub = () => {
  return (
    <section className="tl-1-teachers pt-100 pb-100">
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Knowledge Club</h2>

            <div className="row">
                <div className="col-md-12">
                    <div>
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Registration</h3>
                            <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <div className="col-lg-6 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#">
                                        <h6 className="tl-3-single-program-title publication-title">Registration link for SGU Student Clubs 2023-24 <i className="fa-regular fa-arrow-right-long"></i></h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row tl-event-details-row g-0 mt-50">
                <div>
                 <h3 className="tl-event-details-area-title text-[#4f70b6]">Officer</h3>
                    <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                        <div className="row g-3 g-xl-4">
                            <div className="col-lg-4 col-sm-6">
                                <div className="tl-2-blog tl-2-course">
                                    <div className="tl-2-course-img">
                                        <img src="assets/images/student/officer/male.jpg" alt="Profile Image"/>
                                    </div>

                                    <div className="tl-2-course-txt">
                                        <h4 className="tl-1-course-title tl-2-course-title"><strong>Faculty Coordinators</strong></h4>
                                        <p className="tl-2-course-descr"><strong>Dr. Akshay Bhosale</strong></p>
                                        <p className="tl-2-course-descr"><strong>Mobile No.8208317227</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="tl-2-blog tl-2-course">
                                    <div className="tl-2-course-img">
                                        <img src="assets/images/student/officer/male.jpg" alt="Profile Image"/>
                                    </div>

                                    <div className="tl-2-course-txt">
                                        <h4 className="tl-1-course-title tl-2-course-title"><strong>President</strong></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="tl-2-blog tl-2-course">
                                    <div className="tl-2-course-img">
                                        <img src="assets/images/student/officer/male.jpg" alt="Profile Image"/>
                                    </div>

                                    <div className="tl-2-course-txt">
                                        <h4 className="tl-1-course-title tl-2-course-title"><strong>Secretory</strong></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="row tl-event-details-row g-0 mt-50">
                <div>
                    <h3 className="tl-event-details-area-title text-[#4f70b6]">Report And Photo Gallery</h3>
                    <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                        <div className="row tl-event-details-row g-0">
                            <div className="col-lg-6 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/6756d7259173bf9f471abf87.pdf" target="_blank">
                                        <h6 className="tl-3-single-program-title publication-title">Adventure Club Panhla Pawankhind Treck Report <i className="fa-regular fa-arrow-right-long"></i></h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row tl-event-details-row g-3 mt-1">
                            <div className="col-lg-3 col-md-6 col-xxs-6">
                                <div className="tl-9-blog"> 
                                    <div className="tl-9-event-img">
                                        <figure><img src="assets/images/student/student-photo-gallery/photo-gallery1.jpg" alt="Workshop Image"/></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xxs-6">
                                <div className="tl-9-blog"> 
                                    <div className="tl-9-event-img">
                                        <figure><img src="assets/images/student/student-photo-gallery/photo-gallery2.png" alt="Workshop Image"/></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xxs-6">
                                <div className="tl-9-blog"> 
                                    <div className="tl-9-event-img">
                                        <figure><img src="assets/images/student/student-photo-gallery/photo-gallery3.png" alt="Workshop Image"/></figure>
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

export default KnowledgeClub