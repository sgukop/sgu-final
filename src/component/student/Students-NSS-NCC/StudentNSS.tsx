import Link from 'next/link'
import React from 'react'

const StudentNSS = () => {
  return (
    <section className="tl-1-teachers pt-100 pb-100">
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">National Service Scheme(NSS)</h2>

            <div className="tl-staff-profile-top-new mb-30">
                <img src="assets/images/student/nss-logo/nss-symbol.jpg" alt="NSS Logo Image" style={{border:"5px solid #4f70b6",padding:"10px"}}/>
                    <div className="tl-staff-profile-txt">
                            <p className="tl-staff-profile-bio">The symbol for the NSS has been based on the giant Rath Wheel of the world-famous Konark Sun Temple (The Black Pagoda) situated in Odisha, India. The wheel portrays the cycle of creation, preservation, and release. It signifies the movement in life across time and space, the symbol thus stands for continuity as well as change and implies the continuous striving of NSS for social change. The eight bars in the wheel represents 24 hours of a day. The red colour indicates that the volunteer is full of young blood that is lively, active, energetic, and full of high spirit. The navy-blue colour indicates the cosmos of which the NSS is tiny part, ready to contribute its share for the welfare of the mankind.</p>
                    </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <div className="tl-event-details-left mt-50">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Registration</h3>
                            <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                            <div className="col-lg-6 col-md-12 col-xxs-12">
                                <div className="publications-content">
                                    <Link href="#" target="_blank">
                                        <h5 className="tl-3-single-program-title publication-title">Registration link for SGU Student Clubs 2023-24 <i className="fa-regular fa-arrow-right-long"></i></h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="tl-event-details-left mt-50">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">National Service Scheme (NSS)</h3>
                            <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                                <p className="dark-mode-white-color" style={{fontWeight:"bold"}}>The National Service Scheme (NSS) is an Indian government sector public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969. Aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community (esp. Villages) linkage.</p>
                            </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="tl-event-details-left mt-50">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Aim</h3>
                            <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                                <p className="dark-mode-white-color">The programme aims to instilling the idea of social welfare in students, and to provide service to society without bias. NSS volunteers work to ensure that everyone who is needy gets help to enhance their standard of living and lead a life of dignity. In doing so, volunteers learn from people in villages how to lead a good life despite a scarcity of resources. It also provides help in natural and man-made disasters by providing food, clothing and first aid to the disaster's victims.</p>
                            </div>
                    </div>
                </div>
            </div>

            <div className="row tl-event-details-row g-0 mt-10 flex justify-between">
                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12 mb-0">
                            <h6 className="exam-title">NSS at Sanjay Ghodawat University</h6> 
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12 mb-0">
                            <h6 className="exam-title">Celebration of International Day of Yoga</h6> 
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12 mb-0">
                            <h6 className="exam-title">Celebration of Shahu Jayanti</h6> 
                        </div>
                    </div>
                </div>
                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12 mb-0">
                            <h6 className="exam-title">Blood Donation Camp</h6> 
                        </div>
                    </div>
                </div>
                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12 mb-0">
                            <h6 className="exam-title">Voter Registration Awareness Camp</h6> 
                        </div>
                    </div>
                </div>
                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12 mb-0">
                            <h6 className="exam-title">A Report on SGU NSS Special Seven Days Camp 2023 at Village Toap</h6> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default StudentNSS