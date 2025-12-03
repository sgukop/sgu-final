import Link from 'next/link'
import React from 'react'

const Media = () => {
  return (
    <section className="tl-1-teachers pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
          New & Media @ SGU
        </h2>

        <div className="row">
          <div className="col-md-12">
            <div className="tl-event-details-left">
              <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.8)]">

                <h3 className="tl-event-details-area-title mb-10 text-[#4f70b6]">
                  New & Media
                </h3>

                <div className="col-lg-12 col-md-12 col-xxs-12">
                  <div className="tl-course-details-top-courses">
                    <div className="row g-4 g-xl-4 justify-content-center">

                        {/* CARD 1 */}
                            <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                            <div className="tl-1-course-new bg-white rounded-lg shadow-md overflow-hidden">

                                <div className="tl-1-course-img-new">
                                <img
                                    src="/assets/images/sgu-news/1.jpeg"
                                    alt="News Image"
                                    className="w-full h-auto"
                                />
                                </div>

                                <div className="tl-1-course-txt text-center p-4">
                                <p className="text-sm text-gray-600 mb-2">12 December 2024</p>

                                <h4 className="tl-1-course-title-new">
                                    Success of Ghodawat International School Boarding Students
                                </h4>
                                </div>

                            </div>
                            </div>
                        {/* CARD 1 end */}
                        {/* CARD 1 */}
                            <div className="col-md-12 col-lg-4 col-xxs-12 col-10">
                            <div className="tl-1-course-new bg-white rounded-lg shadow-md overflow-hidden">

                                <div className="tl-1-course-img-new">
                                <img
                                    src="/assets/images/sgu-news/2.jpg"
                                    alt="News Image"
                                    className="w-full h-auto"
                                />
                                </div>

                                <div className="tl-1-course-txt text-center p-4">
                                <p className="text-sm text-gray-600 mb-2">20 November 2025</p>

                                <h4 className="tl-1-course-title-new">
                                    “Sanjay Ghodawat Foundation’s Free Meal Service for Army Recruits.”
                                </h4>
                                </div>

                            </div>
                            </div>
                        {/* CARD 1 end */}



                      

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

export default Media
