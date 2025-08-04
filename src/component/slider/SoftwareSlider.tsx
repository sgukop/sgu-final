'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SoftwareSlider = () => {
    return (
        <section className="tl-14-software pt-120 pb-120">
            <div className="container">
            <h2 className="tl-14-section-title">Want to know More About The Sanjay Ghodawat University?</h2>
            <p className='moreee-tite'>Latest news / Events / Announcements</p>

                <Swiper
                    className="tl-14-software-slider owl-carousel"
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={true}
                    loop={true}
                    pagination={{
                        el: '.tl-14-software-slider-dots',
                        clickable: true,
                        bulletElement: 'button',
                        bulletClass: 'tl-14-software-bullet',
                        bulletActiveClass: 'active',
                        renderBullet: function (index, className) {
                            return '<button class="' + className + '">' + '0' + (index + 1) + '</button>';
                        },
                    }}
                    navigation={{
                        prevEl: '.tl-14-software-prev',
                        nextEl: '.tl-14-software-next'
                    }}
                >
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">01</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT</h3>
                            <p className="tl-8-course-descr">Chairman Sanjay ji Ghodawat is voted as the Influential Educator of the Year 2023 by 'Education Today' and has been awarded the Certificate of Excellence</p>
                            <a href="/assets/images/more-details/educationtoday.jpeg" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                        <img src="assets/images/tl-1/educationtoday 1.png" alt="About Image" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">02</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT</h3>
                            <p className="tl-8-course-descr">Sancheti, Chairman Sanjay ji Ghodawat were felicitated at the 35th Pune Festival.</p>
                            <a href="assets/images/tl-1/Boss11.png" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                        <img src="assets/images/tl-1/Boss11.png" alt="About Image" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">03</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT</h3>
                            <p className="tl-8-course-descr">Chairman Sanjay ji Ghodawat receives Navbharat Times Scroll of Honour Award 2023 by the hands of Hon'ble Deputy CM Devendra Fadanvis for contributing in making Maharashtra's Economy number one in the country.</p>
                            <a href="assets/images/tl-1/more33.png" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/more33.png" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">04</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT</h3>
                            <p className="tl-8-course-descr">Congratulations Chairman Sanjay ji Ghodawat receives Singhania Lifetime Achievement Award by the hands of Hon'ble Minister of Marathi Language and School Education Deepak ji Kesarkar.</p>
                            <a href="assets/images/tl-1/more44.png" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/more44.png" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">05</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT</h3>
                            <p className="tl-8-course-descr">Greetings from Sanjay Ghodawat University (SGU) Kolhapur...! We, SGU's Faculty of Commerce and Management* cordially invites you to participate in Five Days Online Faculty Development Program (FDP) on NEP 2020 - Paradigm Shift in Asynchronous Learning and Industry- Academic Research Collaboration. Let us hear from renowned speakers and pave our journey for effective implementation of National Education Policy-2020. <br />
                                Date: 12th to 16th May 2023 <br />
                                ▪️Registration Fees - ₹500/- <br />
                                ▪️Certificates for successful participation.<br />
                                Link for Registration: <br />
                                https://lnkd.in/dc6cDCTW.</p>
                            <a href="assets/images/tl-1/banner-img.jpg" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/university.jpg" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">06</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT</h3>
                            <p className="tl-8-course-descr">Proud moment for Sanjay Ghodawat University as Indian Star Woman Cricketer and Vice Captain, Smriti Mandhana has taken admission in our University for B. Com course. It is indeed a great news for SGU! Congratulations Team SGU and Smriti.</p>
                            <a href="assets/images/tl-1/more10.png" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/more10.png" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">07</span> */}
                            <h3 className="tl-8-course-title">SGU GLOBAL</h3>
                            <p className="tl-8-course-descr">SGU Global Articulation and partnership programs.</p>
                            <a href="assets/images/tl-1/banner-img.jpg" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/university.jpg" alt="About Image" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">08</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT
                            </h3>
                            <p className="tl-8-course-descr">Sanjay Ghodawat Group (SGG) has grown significantly under its Founder & Chairman Mr Sanjay Ghodawat’s stewardship. Driven by ethics and values, SGG has millions of customers globally, a workforce of more than 10,000, and a student base of more than 17,000.</p>
                            <a href="https://www.outlookindia.com/business-spotlight/30-glorious-years-of-business-excellence-news-273931?prev" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/university.jpg" alt="About Image" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">09</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT
                            </h3>
                            <p className="tl-8-course-descr">International school Miss. Aishwarya Jadhav Has won the 1st runner up title in finals of international Tennis Federation (ITF) J30 Tennis Tournament Girls Under-18 held at Bhilai.Congrats Aishwarya and her coach Arshad Desai.</p>
                            <a href="assets/images/tl-1/more5.png" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/more5.png" alt="About Image" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">10</span> */}
                            <h3 className="tl-8-course-title">NEWS AND EVENT
                            </h3>
                            <p className="tl-8-course-descr">Certificate and trophy of Appreciation to Hon'ble Sanjay ji Ghodawat, Chairman SG Group by Pravasi Sandesh for Most Prominent Indian Business Conglomerate having a legacy of more than 30 years of excellence in the business field.</p>
                            <a href="assets/images/tl-1/more6.png" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/more6.png" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">11</span> */}
                            <h3 className="tl-8-course-title">DISASTER MANAGEMENT
                            </h3>
                            <p className="tl-8-course-descr">Train the Trainers Workshop on Disaster Management - The project supported by a Going Global Partnership Grant from the British Council's Going Global Partnership program.</p>
                            <a href="assets/images/tl-1/disaster-management.jpeg" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>

                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/disaster-management.jpeg" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">12</span> */}
                            <h3 className="tl-8-course-title">GOLD MEDAL
                            </h3>
                            <p className="tl-8-course-descr">🚨🏆 SGU's Faculty of Commerce and Management proud to announce that our B.Com. student Mr. Suchit Patil won Gold Medal🏅 in 50mtr Butterfly style and won Bronze Medal🥉 in 100mtr Freestyle Swimming Championship in Maharashtra State Olympic Games 2023/Maharashtra Mini Olympic Games organised by Maharashtra Government, in association with the Maharashtra Olympic Association (MOA) during 2nd- 12th January 2023.</p>
                            <a href="assets/images/tl-1/more77.png" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>
                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/more77.png" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">13</span> */}
                            <h3 className="tl-8-course-title">CLOUD AND EDGE COMPUTING
                            </h3>
                            <p className="tl-8-course-descr">International Workshop on cloud and edge computing.</p>
                            <a href="https://manage-api.sguk.ac.in/api/assets/6756b9a59173bf9f471abde5" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>
                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/university.jpg" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">14</span> */}
                            <h3 className="tl-8-course-title">INDIAN FREEDOM STRUGGLE & YOUTH
                            </h3>
                            <p className="tl-8-course-descr">Guest Lecture On "Indian Freedom Struggle & Youth" on 18th March,2023.</p>
                            <a href="assets/images/tl-1/indian-freedom.jpg" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>
                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/indian-freedom.jpg" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">15</span> */}
                            <h3 className="tl-8-course-title">TEACHER'S DAY CELEBRATION
                            </h3>
                            <p className="tl-8-course-descr">Teacher's Day celebrations organised on Saturday, 4th September 2021.</p>
                            <a href="https://manage-api.sguk.ac.in/api/assets/6756baef9173bf9f471abdee" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>
                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/teachers-day.png" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">16</span> */}
                            <h3 className="tl-8-course-title">INDUSTRIAL TRAINING / INTERNSHIP
                            </h3>
                            <p className="tl-8-course-descr">Director, Industry University Relations,
For the year 2022-23, a total of 402 final-year students from the School of Technology, School of Computer Science & Engineering, and Liberal Arts secured internships with notable organizations such as BARC Mumbai, ISRO Bangalore, DRDO (Delhi and Nashik), Tata Boeing Aerospace Hyderabad, Star Air Bangalore, Garuda Aerospace Chennai, Hewlett-Packard Enterprise Bengaluru, Steel Tech Industries Ahmedabad, Tata Motors Pune, Tata Power Solar Mumbai, Airtel Xlab Pune, Kirloskar Oil Engines Kolhapur, Wilo Mather & Platt Pune, Nanded City Construction Pune, Magarpatta Township Pune, TV9 Marathi Mumbai, and ABP Maza Mumbai. Stipends for these internships range from Rs. 5,000 to Rs. 20,000 per month.</p>
                            <a href="#" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>
                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/university.jpg" alt="About Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-14-software-slide tl-8-course">
                        <div className="tl-8-course-txt">
                            {/* <span className="tl-14-software-slide-index">17</span> */}
                            <h3 className="tl-8-course-title">ISO 9001:2015 & ISO 21001:2018
                            </h3>
                            <p className="tl-8-course-descr">Congratulations..!! Sanjay Ghodawat University became first University in India to receive ISO 9001:2015 & ISO 21001:2018 Dual Certification.</p>
                            <a href="https://manage-api.sguk.ac.in/api/assets/6756bb819173bf9f471abdf5" target="_blank" className="tl-def-btn tl-14-def-btn">View</a>
                        </div>
                        <div className="tl-8-course-img">
                            <img src="assets/images/tl-1/iso-certification.png" alt="About Image" />
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="tl-14-software-slider-controls position-relative">
                    <div className="tl-14-slider-nav" id="tl-14-software-slider-nav">
                        {/* <button
                            type="button"
                            role="presentation"
                            className="tl-14-software-prev"
                        >
                            <i className="fa-light fa-arrow-left"></i>
                        </button> */}
                        {/* <button
                            type="button"
                            role="presentation"
                            className="tl-14-software-next"
                        >
                            <i className="fa-light fa-arrow-right"></i>
                        </button> */}
                    </div>
                    <div className="tl-14-software-slider-dots">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SoftwareSlider