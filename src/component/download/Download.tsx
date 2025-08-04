import Link from 'next/link'
import React from 'react'

const Download = () => {
  return (
    <section className="tl-1-teachers pt-100 pb-100">
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Download</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <h3 className="tl-event-details-area-title text-[#4f70b6]">SGU Annual Report</h3>
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#">
                                        <h6 className="tl-3-single-program-title publication-title">SGU Annual Report <i className="fa-regular fa-arrow-right-long"></i></h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               {/* <div className="col-md-6">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <h4 className="dark-mode-white-color mb-30"><strong>SGU DPR</strong></h4>
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#">
                                        <h6 className="tl-3-single-program-title publication-title">SGU DPR <i className="fa-regular fa-arrow-right-long"></i></h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-30">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <h4 className="dark-mode-white-color mb-30"><strong>Mandatory Disclosure</strong></h4>
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#">
                                        <h6 className="tl-3-single-program-title publication-title">Mandatory Disclosure <i className="fa-regular fa-arrow-right-long"></i></h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}

                <div className="col-md-6">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                          <h3 className="tl-event-details-area-title text-[#4f70b6]">Examination Ordinance</h3>
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="https://manage-api.sguk.ac.in/api/assets/6756da469173bf9f471abfa1" target="_blank">
                                        <h6 className="tl-3-single-program-title publication-title">Examination Ordinance <i className="fa-regular fa-arrow-right-long"></i></h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-30">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <h3 className="tl-event-details-area-title text-[#4f70b6]">Circular & Notices</h3>
                            <div className="col-lg-12 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#">
                                        <h6 className="tl-3-single-program-title publication-title">Circular & Notices <i className="fa-regular fa-arrow-right-long"></i></h6>
                                    </Link>
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

export default Download