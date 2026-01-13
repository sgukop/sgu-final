"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from "react-bootstrap";
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slider from 'react-slick';

const BCADeptPlacement = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4800,
    autoplaySpeed: 0,
    cssEase: "linear",
    horizontal: true,
    pauseOnHover: true,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  const placementimages = [
    {
      imgSrc: "assets/images/BCA-dept/placement/1.PNG",
    },
    {
      imgSrc: "assets/images/BCA-dept/placement/2.PNG",
    },
    {
      imgSrc: "assets/images/BCA-dept/placement/3.PNG",
    },
    {
        imgSrc: "assets/images/BCA-dept/placement/4.PNG",
    },
    {
      imgSrc: "assets/images/BCA-dept/placement/5.PNG",
    },
    {
      imgSrc: "assets/images/BCA-dept/placement/6.PNG",
    },
    
  ]
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship & Placements</h2>

        <div className="row">
          <MenuList dept="Bachelor of Computer Applications" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

          <div className="row g-0 align-items-center">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Placements</h2></div>
               <div className="col-lg-12">
                   <div className="tl-7-about-info-cards-new">
                       <Slider 
                       className="tl-7-about-info-cards-col-new tl-7-about-info-cards-col-1 reverse-slider"
                       {...settings}
                       >
                       {placementimages.map((techitem, index) => (
                           <div className="slider-item">
                               <div className="tl-7-about-info-card-new" style={{padding:"10px"}}>
                                   <img src={techitem.imgSrc} key={index} alt="Recruiters Company Logo"/>
                               </div>
                           </div>
                       ))}
                       </Slider>
                   </div>
               </div>
           </div>

          <div className="row gx-0 tl-blog-details-row mt-50">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Placements</h2></div>
              <div className="col-lg-12">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Year</p></th>
                            <th><p className="text-[#4f70b6]">Count</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>2024-2025</p></td>
                            <td><p>32</p></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
          </div>
          <div className="row tl-event-details-row g-4 mt-50">
          <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Internships</h2></div>
              <div className="col-lg-6">
                <div className="tl-event-details-left flex flex-col h-full">
                  <h3 className="tl-event-details-area-title">Internship Details</h3>
                {/*  <h5 className="dark-mode-white-color mb-3">
                    Program - SY MCA
                 </h5>  */}
                 <h5 className="dark-mode-white-color mb-3">
                 Academic Year 2022-23 
                 </h5>
                 <h5 className="dark-mode-white-color mb-3">
                 No of Students : 59
                 </h5>
                  
                  <div className="tl-event-details-key-content tl-event-details-area">
                    <ul className="tl-event-details-key-content-list phd-container">
                        <h5 className="text-[#4f70b6]"><strong>Company Name</strong></h5>
                      <li>
                        Virtuebyte Pvt. Ltd. Pune
                      </li>
                      <li>
                      SquareSoft Technology,Kolhapur
                      </li>
                      <li>
                      ITAIN software, Jaysingpur
                      </li>
                      <li>
                      Plarominds services pvt.Ltd, Kolhapur
                      </li>
                      <li>
                      Maxgen Technologies Pvt. Ltd, Pune
                      </li>
                      <li>
                      Softmusk Info Pvt. Ltd, Belgaum
                      </li>
                      <li>HiddenBrains Infotech Pvt.Ltd,Pune</li>
                      <li>wolfox services Pvt.Ltd, Kolhapur</li>
                      <li>Qspiders,Pune</li>
                      <li>Platominds services pvt.Ltd, Kolhapur</li>
                      <li>Aqmenz Automation Pvt Ltd ,Bengaluru</li>
                      <li>Codexlabz Technology,Sangli</li>
                      <li>Revolution IT Solution,kolhapur</li>
                    </ul>
                   
                   </div>
                </div>
              </div>
              

              <div className="col-lg-6">
                <div className="tl-event-details-left flex flex-col h-full">
                <h3 className="tl-event-details-area-title">Internship Details</h3>
                 {/* <h5 className="mt-3 dark-mode-white-color">
                    Program - SY MCA
                 </h5> */}
                 <h5 className="mt-3 dark-mode-white-color">
                 Academic Year 2023-24 
                 </h5>
                 <h5 className="mt-3 dark-mode-white-color">
                 No of Students : 104
                 </h5>
                  <div className="tl-event-details-key-content tl-event-details-area">
                    <ul className="tl-event-details-key-content-list phd-container">
                        <h5 className="text-[#4f70b6]"><strong>Company Name</strong></h5>
                      <li>
                      Revolution IT Solutions, Kolhapur
                      </li>
                      <li>
                      Sumago Infotech Pvt. Ltd, Pune
                      </li>
                      <li>
                      Edera Pvt. Ltd, Pune
                      </li>
                      <li>
                      Atharva Agronomics Pvt. Ltd., Kolhapur
                      </li>
                      <li>
                      Soft-Tech Computer training Institute, Kolhapur
                      </li>
                      <li>
                      Info Dynamic software solution Pvt. Ltd., Kolhapur
                      </li>
                      <li>ReapmindInovation Pvt. Ltd., Kolhapur</li>
                      <li>Softmusk Pvt Ltd, Belgaum</li>
                      <li>SevenMentor and traning Pvt Ltd, Pune</li>
                      <li>Platominds Services Pvt Ltd, Kolhapur</li>
                      <li>Secure up Company pvtltd, Pune</li>
                      <li>Maxgen software company Pvt Ltd, Pune</li>
                      <li>ScaleFullTechnologies, Pune</li>
                      <li>AIS Solutions Pvt Ltd, Pune</li>
                      <li>SushivTechnology, Pune</li>
                      <li>CodexlabzTechnology, Sangli</li>
                      <li>Code Alpha Pvt Ltd, Luknow</li>
                      <li>T- Cognizant,Kolhapur</li>
                      <li>GTL Software.PVT.LTD.,Pune</li>
                    </ul>
                   
                   </div>
                </div>
              </div>
              <div className="row tl-event-details-row g-4 mt-50">
         
              <div className="col-lg-6">
                <div className="tl-event-details-left flex flex-col h-full">
                  <h3 className="tl-event-details-area-title">Internship Details</h3>
                {/*  <h5 className="dark-mode-white-color mb-3">
                    Program - SY MCA
                 </h5>  */}
                <h5 className="dark-mode-white-color mb-3">
                 Academic Year 2024-25 
                 </h5>
                 <h5 className="dark-mode-white-color mb-3">
                 No of Students : 176
                 </h5>

                  <div className="tl-event-details-key-content tl-event-details-area">
                        <ul className="tl-event-details-key-content-list phd-container">
                          <h5 className="text-[#4f70b6]">
                            <strong>Company Name</strong>
                          </h5>

                          {[
                            "Adinity Infotech",
                            "Algoviz Solutions Pvt. Ltd",
                            "Alsh Technologies Pvt. Ltd., Pune",
                            "Atharav Solution",
                            "Atharava Transformative",
                            "Beyond Solutions",
                            "Biyani Technologies, Kolhapur",
                            "Code Quell",
                            "Codeplux Technologies",
                            "Comtrance Technologies",
                            "CoReco Technologies",
                            "Cyphersa® Softwares LLP",
                            "DigiDynamic, Pune",
                            "Edera Pvt. Ltd",
                            "Ellicium Solutions",
                            "Godlink Software Company",
                            "Gremio Technologies Pvt. Ltd",
                            "IndustillFarmtech Pvt. Ltd",
                            "Innothoughts Systems Pvt. Ltd",
                            "ITIAN Solutions",
                            "Itpreneur",
                            "Kiran Academy",
                            "Kolhapur District Cooperative Society",
                            "Kredpool Solutions Pvt. Ltd.",
                            "Lakshay Studios",
                            "Menstech Innovation Pvt. Ltd",
                            "MySoftway Technology IT Consultancy",
                            "Neuronexux Pvt. Ltd",
                            "Next24 Tech",
                            "One Star Software Solutions",
                            "Pawar Technology Services",
                            "Persistent Systems",
                            "Platominds Services Pvt. Ltd.",
                            "Pradip Patil Tax and Financial Consultant",
                            "Prism Enterprises",
                            "PTS - Pawar Technology Services",
                            "QSpiders",
                            "Qweez Technology",
                            "Ramakant Pathare – Tax and Financial Consultant",
                            "Rekonsile Com Tech Pvt. Ltd",
                            "Revolution IT Solutions",
                            "S.R. Infotech",
                            "Scalefull Technologies LLP",
                            "Shree Lakshmipati Granites, Ichalkaranji",
                            "Simdaa Technologies",
                            "Softmusk Info Pvt. Ltd.",
                            "Softron IT Solution",
                            "SoftTech Computer Training Institute",
                            "Sparklab IT Solutions Pvt. Ltd",
                            "StarCentuari Technologies Pvt. Ltd",
                            "StormSoft Technology",
                            "SUSHIV TECHNOLOGIES",
                            "SVL Automation",
                            "Technoworld Software",
                            "Test Yantra Software Solutions Pvt. Ltd",
                            "Unique System Skills Pvt. Ltd",
                            "Walstar Technology",
                            "Webisoftech",
                            "WIN INFOTECH",
                            "Wisdom Sprout",
                            "Wolfox",
                          ].map((company, index) => (
                            <li key={index}>{company}</li>
                          ))}
                        </ul>
                      </div>

                   
                   </div>
                </div>
              </div>
          
             </div>
          </div>
        </div>
        </div>
     
    </section>
  );
};

export default BCADeptPlacement;
