'use client'
import React from 'react';
import Slider from 'react-slick';

const InternationalizationSGU = () => {
    const settingsReverse = {
        dots: false,
        arrows: false,
        infinite: true, // Set to true to enable infinite loop
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        rtl: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
      const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4800,
        autoplaySpeed: 0,
        cssEase: "linear",
        vertical: true,
        pauseOnHover: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Internationalization @SGU</h2>
          <div className="row tl-event-details-row g-2 mt-30">
                <div className="col-lg-6">
                   <div className="tl-event-details-left" style={{padding:"15px"}}>
                        <h4 className="dark-mode-white-color text-[#4f70b6]"><strong>Vision</strong></h4>
                        <div>
                          <p className="dark-mode-white-color mt-4">The ultimate objective of Sanjay Ghodawat University's Global Engagement department is to foster an internationalization strategy. The university's affiliation with prestigious foreign universities, esteemed institutions, and globally recognized research agencies is beneficial to both parties.</p>
                        </div>
                  </div>
                </div>

                <div className="col-lg-6">
                   <div className="tl-event-details-left">
                        <h4 className="dark-mode-white-color text-[#4f70b6]"><strong>Mission</strong></h4>
                        <div>
                          <p className="dark-mode-white-color mt-4">SGU Global strive to provide the SGU community with a current, cohesive picture of the diverse global trends, events, ideas, and circumstances as they occur, <br/> in addition to enhancing the academic experience of faculty and students.</p>
                        </div>
                  </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Global Engagement</h2></div>
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div>
                            <img src="assets/images/about-university/image2.jpg" alt="vision and mision image" className="rounded-full w-full h-[600px] w-fit" style={{border: "10px solid rgb(79, 112, 182)", padding: "20px"}}/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt" style={{paddingLeft:"40px"}}>
                            <p className="dark-mode-white-color">	
                                 Sanjay Ghodawat University's Office of Global Engagement coordinates international associations, partnerships, and collaborations to foster a culture of excellence and internationalization of education. We recognize the impact of international exposure on student learning and achievement.To this end University supports students aspiring for international study, research and internship with international institutions and organizations.  Faculty are encouraged to engage in international research, publications, and constant experiments with ways to be better.<br/><br/>
                                 Visits by foreign delegations of faculty, researchers and students to the university are a regular feature of the international collaboration initiative of the University. Master classes and panel discussions are routinely organized to facilitate interaction between the faculty on such areas as curriculum development, pedagogical innovation, collaborative teaching, and building relationship with the community in ways that go beyond mere sharing of information. Not only do such deliberations enrich the educational experience of the participants but also help in exploring aspects of synergy between associated universities and institutions.<br/><br/>
                                 Seminars and webinars by eminent international scholars and educationists are integral part of University's avowed pursuit of global outreach. Such talks, discussions, presentations and discourses- academic, social and cultural- are sponsored by the university so as to provide a platform to students and faculty for an incisive critique of various global issues.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="tl-11-section-heading mt-50 mb-50"><h2 className="tl-11-section-title">MBA Disaster Management( Co-created Program with Teesside University,UK)</h2></div>
                <div className="row g-4 align-items-center">
           
                    <div className="col-lg-6">
                        <div className="tl-14-about-txt" style={{paddingRight:"40px",paddingLeft:"0px"}}>
                            <p className="dark-mode-white-color mt-20">	
                            SGU is committed to equipping students with the skillsets and experiences required to succeed in the global environment. The student will have the opportunity to experience a study abroad module, industry immersion, and cultural understanding.<br/>
                            Sanjay Ghodawat University has received a Go-global grant from British Council and CDRI to work in the field of Disaster management. It is a consortium of three Universities from India. We have arranged a week-long 'Train the trainer' workshop on the SGU campus where delegates from Teesside University, SRM Chennai and Ajinkya D.Y.Patil University Pune. Along with British Council & CDRI has visited university and deliverd TOT program. This program is developed in association with Teesside University, UK, and funded through the British Council 'Going Global Partnership Grant'. The course covers modules like risk, disaster and resilience, International Public Health, Environmental Management, etc. <br/><br/> This course will equip you to be trained professionally in the field of disaster management, planning, finance, and implementation of infrastructure. The advantage of this course is that students can join Teesside University for an internship as a semester abroad or any organization involved in resilience planning or disaster management.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 tl-10-about-section">
                        <div className="tl-14-about-img">
                            {/*   <img src="assets/images/SGU-global/teesside-university.jpg" alt="Teesside University" />  */}
                            <img src="assets/images/SGU-global/teesside-university.png" alt="vision and mision image" className="rounded-full w-full h-full w-fit" style={{border: "10px solid rgb(79, 112, 182)", padding: "20px"}}/>
                        </div>
                    </div>
                </div>

                <div className="tl-11-section-heading mt-50 mb-50"><h2 className="tl-11-section-title">MSc. Disaster Management</h2></div>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-7-about-campus-cards">
                            <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-1 reverse-slider"
                            {...settings}
                            >
                                <div className="slider-item" style={{marginBottom:"10px"}}>
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/SGU-global/internationalization/teesside-university/image1.jpg" alt="Teesside University Images"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                <img src="assets/images/SGU-global/internationalization/teesside-university/image2.jpg" alt="Teesside University Images"/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                    <img src="assets/images/SGU-global/internationalization/teesside-university/image3.jpg" alt="Teesside University Images"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className="col-lg-6">
                       <div className="">
                            <div className="tl-event-details-key-content">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <h6 className="dark-mode-whitw-color text-[#4f70b6]" style={{fontWeight:"bold"}}>A Co-Created Postgraduate Programme with Teesside University, UK</h6>
                                <li>Semester Abroad with Teesside University, UK, or any other partner Indian Institute.</li>
                                <li>Internship Opportunity with government organizations and NGOs involved in resilience planning and disaster management.</li>
                            </ul>

                            <p className="dark-mode-white-color mt-20">SGU has undertaken Student Mobility to the next stage. Our pilot batch of four students visited Teesside university, UK successfully and we hosted students from Teesside University, UK. In addition to this Teesside University, Associate Dean Dr. Rob Burton from the School of Arts & Creative Industries visited our campus twice this year to initiate articulation in Design. Dr. Simon Linch, Dean of Internationalisation visited SGU and working closely with faculty toward M.S. Disaster Management course development.<br/><br/>$ students from Teesside University UK came to the University campus and stayed here for a month.SGU hosted them and helped them in their disaster management projects.They have given first hand knowledge on the disaster management initiative.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <h2 className="tl-9-section-title pt-100 pb-50 py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50 mt-50">Various Initiative /Activity</h2>

                            <div className="tl-11-section-heading mt-30">
                                <h2 className="tl-11-section-title">
                                    Semester Exchange Program (SEP) – SGU @ INTI University, Malaysia
                                </h2>
                            </div>

                            <div className="row g-3 g-lg-4">
                                {/* Image 1 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/1.jpeg"
                                                    alt="Semester Exchange Program at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                {/* Image 2 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/2.jpeg"
                                                    alt="SGU Students at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                {/* Image 3 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/3.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                  {/* Image 4 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/4.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                  {/* Image 5 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/5.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                  {/* Image 6 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/6.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                  {/* Image 7 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/7.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                  {/* Image 8 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/8.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                  {/* Image 9 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/9.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                  {/* Image 10 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/10.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                  {/* Image 11 */}
                                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                    <div className="tl-9-blog">
                                        <div className="tl-9-event-img">
                                            <figure>
                                                <img
                                                    src="assets/images/photo-gallery/academics/Internationalisation/11.jpeg"
                                                    alt="Campus Life at INTI University Malaysia"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="col-lg-12">
                                    <div className="tl-event-details-key-content">
                                        <p className="dark-mode-white-color">
                                            Sanjay Ghodawat University (SGU) is recognized for its academic excellence,
                                            industry-focused education, and strong graduate employability. In line with its
                                            commitment to Global Learning, International Collaboration, Global Internships
                                            with Academic Enhancement, Professional Development and Employability, and
                                            Cultural Immersion, SGU offers the <strong>Semester Exchange Program (SEP)</strong>.
                                            <br /><br />
                                            Through the Semester Abroad Program, SGU students study at reputed partner
                                            universities overseas for one semester, undertaking approved courses and/or
                                            major projects aligned with their academic program.
                                            <br /><br />
                                            Credits earned at the host university are transferred to SGU through an approved
                                            credit-transfer and conversion process and are counted toward degree requirements.
                                            Upon completion of the semester abroad, students return to SGU enriched with
                                            valuable global learning experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                    <div className="tl-11-section-heading mt-30">
                            <h2 className="tl-11-section-title">Singapore-Malaysia Immersion Program 2024</h2>
                        </div>
                        <div className="row g-3 g-lg-4">
                            <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                <div className="tl-9-blog"> 
                                    <div className="tl-9-event-img">
                                        <figure><img src="assets/images/SGU-global/internationalization/singapore-malaysia-2024/image1.jpg" alt="Singapore-Malaysia Immersion Program 2024 Image"/></figure>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                                <div className="tl-9-blog"> 
                                    <div className="tl-9-event-img">
                                    <figure><img src="assets/images/SGU-global/internationalization/singapore-malaysia-2024/image2.jpg" alt="Singapore-Malaysia Immersion Program 2024 Image"/></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div>
                                    <div className="tl-event-details-key-content">
                                        <p className="dark-mode-white-color">Singapore - Malaysia Immersion is unique opportunity to visit Singapore the fastest growing financial and vibrant cultural economy,ideally situated within the hub of Southeast Asia.As one of the world's leading private banking and wealth management centres, Singapore has  been positioned at the epicentre of Southeast Asia's wealth creation over the past decade.<br/><br/>In recent years,Singapore has accelerated its growth in future innovation and technologies,through which it has acquired the reputation of Asia's Silicon Valley.Malaysia is known for its friendly community and a melting pot of Asia's well-diverse community.Malaysia is a traveller's paradise that boasts a unique blend of breathtaking natural landscapes and tantalising culinary delight.During these program student visited to Malaysia Stock exchange,UCSI Malaysia University and Singapore port authority.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Dubai 2023</h2></div>
                    <div className="row g-4 align-items-center">
           
                        <div className="col-lg-6">
                            <div className="tl-7-about-campus-cards">
                                <Slider 
                                    className="tl-7-about-info-cards-col tl-7-about-info-cards-col-1 reverse-slider"
                                    {...settingsReverse}
                                >
                                    <div className="slider-item" style={{marginBottom:"10px"}}>
                                        <div className="tl-7-about-info-card">
                                            <img src="assets/images/SGU-global/internationalization/dubai-2023/image1.jpg" alt="Dubai 2023 Images"/>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="tl-7-about-info-card">
                                            <img src="assets/images/SGU-global/internationalization/dubai-2023/image2.jpg" alt="Dubai 2023 Images"/>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="tl-7-about-info-card">
                                            <img src="assets/images/SGU-global/internationalization/dubai-2023/image3.jpg" alt="Dubai 2023 Images"/>
                                        </div>
                                    </div>

                                    <div className="slider-item">
                                        <div className="tl-7-about-info-card">
                                        <img src="assets/images/SGU-global/internationalization/dubai-2023/image4.jpg" alt="Dubai 2023 Images"/>
                                        </div>
                                    </div>

                                    <div className="slider-item">
                                        <div className="tl-7-about-info-card">
                                        <img src="assets/images/SGU-global/internationalization/dubai-2023/image5.jpg" alt="Dubai 2023 Images"/>
                                        </div>
                                    </div>

                                    <div className="slider-item">
                                        <div className="tl-7-about-info-card">
                                        <img src="assets/images/SGU-global/internationalization/dubai-2023/image6.jpg" alt="Dubai 2023 Images"/>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div>
                                <div className="tl-event-details-key-content">
                                    <p className="dark-mode-white-color">We understand the importance of providing practical exposure and hands-on experiences to students to supplement their theoretical knowledge. Thus Global Engagement Office of Sanjay Ghodawat University takes immense pleasure to organise this global immersion program to <strong>Dubai 2023</strong></p>
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>Workshop at Apple Inc</li>
                                            <li>Visit to Damac Properties</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tl-11-section-heading mt-50">
                        <h2 className="tl-11-section-title">Melbourne 2022</h2>
                    </div>
                    <div className="row g-3 g-lg-4">
                        <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                            <div className="tl-9-blog"> 
                                <div className="tl-9-event-img">
                                    <figure><img src="assets/images/SGU-global/internationalization/melbourne-2022/image1.jpg" alt="Melbourne 2022 Image"/></figure>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                            <div className="tl-9-blog"> 
                                <div className="tl-9-event-img">
                                <figure><img src="assets/images/SGU-global/internationalization/melbourne-2022/image2.jpg" alt="Melbourne 2022 Image"/></figure>
                                </div>
                            </div>
                        </div>
                        <p>As a initiative towards Internationalisation SGU students and co-ordinators visited Melbourne and interacted with various partnered  Universities in Melbourne namely Swinburne University of Technology,Victorian Institute of Technology and Monash University.</p>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default InternationalizationSGU
