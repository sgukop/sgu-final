'use client'
import React from 'react';
import Slider from 'react-slick';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const CommerceDeptEventsNew = () => {
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
        slidesToShow: 1,
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
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Events</h2>
        <div className="row">
          <MenuList dept="Commerce" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">ADWITIYA 2024</h2></div>
         <div className="row g-4 align-items-center mb-50">
            
                    <div className="col-lg-6">
                        <div className="tl-7-about-campus-cards">
                            <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-1 reverse-slider"
                            {...settings}
                            >
                                 <div className="slider-item">
                                    <div className="tl-7-about-info-card-new">
                                        <img src="assets/images/commerce-dept/events/adwitiya-2024/event-image1.png" alt="Event Image" style={{padding:"10px"}}/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card-new">
                                        <img src="assets/images/commerce-dept/events/adwitiya-2024/event-image2.png" alt="Event Image" style={{padding:"10px"}}/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card-new">
                                        <img src="assets/images/commerce-dept/events/adwitiya-2024/event-image3.png" alt="Event Image" style={{padding:"10px"}}/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card-new">
                                        <img src="assets/images/commerce-dept/events/adwitiya-2024/event-image4.png" alt="Event Image" style={{padding:"10px"}}/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       <div>
                            <div className="tl-event-details-key-content">
                                    <p className="dark-mode-white-color"><strong>ADWITYA 2024</strong> was an all-encompassing, multidisciplinary student competition aimed at fostering excellence in intellect, creativity, and physical endurance. It served as a platform where participants could challenge themselves across a range of activities designed to test their cognitive abilities, teamwork, artistic expression, and physical stamina.
                                    </p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Biz Bazaar</h2></div>
            <div className="row g-3 g-lg-4 mt-30">
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/events/biz-bazaar/event-image1.png" alt="Event Image" /></figure>
                        </div>
                    </div>
                </div>
           
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                        <figure><img src="assets/images/commerce-dept/events/biz-bazaar/event-image2.png" alt="Event Image" /></figure>
                        </div>
                    </div>
                </div>
                <p className="dark-mode-white-color">The Star BizBazaar event was held on October 17th and 18th, 2024 at the food court on the campus of Sanjay Ghodawat University (SGU). This innovative initiative was organized by the Faculty of Commerce and Management and mainly sponsored by GS Tea, Chakote Bakers, Nandani and Girish Sales, Kolhapur at SGU to provide students with a platform to explore entrepreneurial opportunities and gain practical experience in diverse business activities. The total sponsorship for the event was approx 1,50,000/-. By combining business activities with cultural performances, the event created an engaging and well-rounded experience for all participants.</p>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">ANANTKALA 2024</h2></div>
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <div className="tl-7-about-campus-cards">
                        <Slider 
                        className="tl-7-about-info-cards-col tl-7-about-info-cards-col-1 reverse-slider"
                        {...settingsReverse}
                         >
                            <div className="slider-item" style={{marginBottom:"10px"}}>
                                <div className="tl-7-about-info-card">
                                    <img src="assets/images/commerce-dept/events/anantkala-2024/event-image1.png" alt="Event image"/>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                    <img src="assets/images/commerce-dept/events/anantkala-2024/event-image2.png" alt="Event image"/>
                                </div>
                            </div>

                            <div className="slider-item">
                                 <div className="tl-7-about-info-card">
                                    <img src="assets/images/commerce-dept/events/anantkala-2024/event-image3.png" alt="Event image"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div>
                        <div className="tl-event-details-key-content">
                        <p className="dark-mode-white-color"><strong>Anant Kala 2024,</strong> a grand celebration of the Ganpati festival, was successfully conducted on 5th September 2024. The event brought together people from different walks of life to celebrate the spirit of unity, devotion, and creativity through various cultural and religious activities centered around Lord Ganesha.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-11-section-heading mt-30"><h2 className="tl-11-section-title">Guest Session on ERP Overview on SAP</h2></div>
        <div className="row g-3 g-lg-4">
            <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                <div className="tl-9-blog flex flex-col h-full"> 
                    <div className="tl-9-event-img">
                        <figure><img src="assets/images/commerce-dept/events/ERP-SAP/event-image1.png" alt="Event image"/></figure>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                <div className="tl-9-blog flex flex-col h-full"> 
                    <div className="tl-9-event-img">
                        <figure><img src="assets/images/commerce-dept/events/ERP-SAP/event-image2.jpg" alt="Event image"/></figure>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div>
                    <div className="tl-event-details-key-content">
                        <p className="dark-mode-white-color">This Session is focused on Enterprise Resource Planning (ERP) systems, an essential technology for integrating business processes across an organization. ERP is increasingly relevant as organizations adopt digital transformation strategies, aiming to streamline operations, improve data access,and enhance decision-making.<br/><br/>
                        Speaker for this Session: <strong>Mr. CHANDRASHEKHAR SARNAIK Deputy Manager RTRGFSS Global Centre, EATON TECHNOLOGY at Kharadi, Pune.</strong></p>
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

export default CommerceDeptEventsNew
