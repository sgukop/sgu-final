import Link from "next/link";
import React from "react";

const Feedback = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container">
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Feedback</h2>
                    <div className="tl-event-details-left">
                       <h3 className="tl-event-details-area-title text-[#4f70b6]">Students feedback</h3>
                        <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#"><h5 className="tl-3-single-program-title publication-title">Student's feedback on Curriculum Academic Year 2023-24, Summer-2024 <i className="fa-regular fa-arrow-right-long"></i></h5></Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#"><h5 className="tl-3-single-program-title publication-title">Students feedback on Teaching Learning Process Academic Year 2023-24, Summer-2024 <i className="fa-regular fa-arrow-right-long"></i></h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Faculty Feedback</h3>
                        <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#"><h5 className="tl-3-single-program-title publication-title">Faculty Feedback on Curriculum Academic Year 2023-24 Summer-2024 <i className="fa-regular fa-arrow-right-long"></i></h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Alumni Feedback</h3>
                        <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#"><h5 className="tl-3-single-program-title publication-title">Alumni Feedback <i className="fa-regular fa-arrow-right-long"></i></h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Parents feedback</h3>
                        <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#"><h5 className="tl-3-single-program-title publication-title">Parents feedback <i className="fa-regular fa-arrow-right-long"></i></h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                      <h3 className="tl-event-details-area-title text-[#4f70b6]">Final Year Student's Program Exit Survey Summer 2024</h3>
                        <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#"><h5 className="tl-3-single-program-title publication-title">Final Year Student's Program Exit Survey Summer 2024 <i className="fa-regular fa-arrow-right-long"></i></h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Feedback