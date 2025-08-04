'use client'
import React from 'react'
import Slider from 'react-slick';
interface AboutProps{
    padding: string;
    margin: string;
}
const AboutCampus:React.FC<AboutProps> = ({padding,margin}) => {
    const settingsReverse = {
        dots: false,
        arrows: false,
        infinite: true, // Set to true to enable infinite loop
        slidesToShow: 2,
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
    
        <div className="container">
            <div className={`tl-7-about-content ${margin}`}>
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-7-about-campus-cards">
                            <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-1 reverse-slider"
                            {...settingsReverse}
                            >
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus1.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus2.jpg" alt="Dance Image"/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus3.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus4.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus5.jpg" alt="Dance Image"/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus6.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus7.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus8.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus9.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus10.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus11.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus12.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus13.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus14.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/about-campus/campus15.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="tl-7-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto">About Campus</h2>
                            <div className="p-10 box-shadow-none">
                            <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.6)]">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Classification of Land - Category -RURAL</li>
                                    <li>Letter Issued by - Gram Vikas Adhikari - A/P. Atigre Taluka - Hatkanangale Sarpanch A/P. Atigre Taluka - Hatkanangale</li>
                                    <li>Land Use Certificate Issued by - Tahsildar - Taluka : Hatkanangale</li>
                                    <li>Details of Building Plan Approved by- Gram Vikas Adhikari - A/P. Atigre, Taluka - Hatkanangale, Sarpanch A/P. Atigre Taluka - Hatkanangale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
  )
}

export default AboutCampus