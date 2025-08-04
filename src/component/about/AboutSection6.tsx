'use client'
import React from 'react'
import Slider from 'react-slick';
interface AboutProps{
    padding: string;
    margin: string;
}
const AboutSection6:React.FC<AboutProps> = ({padding,margin}) => {
    const settingsReverse = {
        dots: false,
        arrows: false,
        infinite: true,
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
    <section className={`tl-7-about ${padding}`} style={{paddingBottom:'60px'}}>
        <div className="container">
            <div className={`tl-7-about-content ${margin}`}>
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-7-about-info-cards">
                            <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-1 reverse-slider mr-10"
                            {...settingsReverse}
                            >
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/company1.png" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/company2.png" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/company3.png" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/company4.png" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/company5.png" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/company6.png" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/engg10.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                               
                            </Slider>

                            <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-2"
                            {...settings}
                            >
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/engg02.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/engg03.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/engg04.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                               
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/engg09.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/engg06.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/engg07.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card" style={{backgroundColor:'#F2F3F8'}}>
                                        <img src="assets/images/recruiters/engg11.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-7-section-heading tl-7-about-heading yellow-clr">
                            {/* <h6 className="tl-7-section-sub-title">dance with us</h6> */}
                            <h2 className="tl-2-section-title">Our <span className="last-word">Recruiters</span>.</h2>
                            <p className="tl-7-about-descr mt-20">The SGU Training & Placement Cell is committed to providing all possible assistance to its graduates and postgraduates students in their efforts to find employment. The purpose of the Training and Placement is to give the students right knowledge, skill and aptitude and meet the manpower requirements of the Industry. This commitment is demonstrated by the existence Placement record.</p>
                           {/*  <a href="#" className="tl-def-btn-2">Learn More <i className="fa-regular fa-arrow-right"></i></a>  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection6