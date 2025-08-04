"use client";
import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import Slider from "react-slick";

interface AboutProps{
    margin: string;
 }

const AIandMLDeptAlumni:React.FC<AboutProps> = ({margin}) => {
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
      const recruiters = [
        {
          imgSrc: "assets/images/AIML/recruiters/1.png",
        },
        {
            imgSrc: "assets/images/AIML/recruiters/2.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/3.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/4.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/5.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/6.png",
          },
          /*  {
            imgSrc: "assets/images/AIML/recruiters/7.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/8.png",
          },  */
          {
            imgSrc: "assets/images/AIML/recruiters/9.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/10.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/11.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/12.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/13.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/14.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/15.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/16.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/17.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/18.png",
          },
          {
            imgSrc: "assets/images/AIML/recruiters/19.png",
          },
          /* {
            imgSrc: "assets/images/AIML/recruiters/20.png",
          },  */
                          
      ]
  return (
    <section className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship & Placement</h2>
            <div className="row">
                <MenuList dept="Artificial Intelligence and Machine Learning" subMenu={NavLinks} />
                    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
                        <div className="row gx-0 tl-blog-details-row">
                             <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Internship</h2></div>  
                                <div className="col-lg-12">
                                   <Table bordered responsive className="governing-table">
                                        <thead>
                                            <tr>
                                                <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                                <th><p className="text-[#4f70b6]">Year</p></th>
                                                <th><p className="text-[#4f70b6]">No. of Students</p></th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><p>1</p></td>
                                                <td><p>2023-24</p></td>
                                                <td><p>65</p></td>
                                            </tr>
                                        </tbody>
                                    </Table>  
                                </div>
                            </div>

                            <div className="row gx-0 tl-blog-details-row mt-50">
                             <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Placements</h2></div>  
                                <div className="col-lg-12">
                                   <Table bordered responsive className="governing-table">
                                        <thead>
                                            <tr>
                                                <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                                <th><p className="text-[#4f70b6]">Year</p></th>
                                                <th><p className="text-[#4f70b6]">No. of Students</p></th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><p>1</p></td>
                                                <td><p>2023-24</p></td>
                                                <td><p>41</p></td>
                                            </tr>
                                        </tbody>
                                    </Table>  
                                </div>
                            </div>

                            <div className="row g-0 align-items-center mt-50">
                                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Our Recruiters</h2></div>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-lg-12">
                                            <Slider 
                                                className="tl-7-about-info-cards-col-new tl-7-about-info-cards-col-1 reverse-slider"
                                                {...settings}
                                            >
                                            {recruiters.map((techitem, index) => (
                                                <div className="slider-item" key={index}>
                                                    <div className="tl-7-about-info-card" style={{padding:"10px"}}>
                                                        <img src={techitem.imgSrc} alt="Recruiters Company Logo" className="min-w-[200px] object-cover"/>
                                                    </div>
                                                </div>
                                            ))}
                                            </Slider>
                                        </div>  
                                    </div>  
                                </div>
                            </div>
                    </div>
            </div>
    </section>
  );
};

export default AIandMLDeptAlumni;
