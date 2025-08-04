"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList';
import Slider from 'react-slick';

interface AboutProps{
    margin: string;
 }

const ManagementDeptInternship:React.FC<AboutProps> = ({margin}) => {
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
          imgSrc: "assets/images/management-dept/our-recruiters/company1.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company2.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company3.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company4.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company5.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company6.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company7.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company8.png",
        },
       {
            imgSrc: "assets/images/management-dept/our-recruiters/company9.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company10.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company11.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company12.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company13.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company14.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company15.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company16.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company17.png",
        },
        {
            imgSrc: "assets/images/management-dept/our-recruiters/company18.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company19.png",
        }, 
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company20.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company21.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company22.png",
        },
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company24.png",
        }, 
        {
          imgSrc: "assets/images/management-dept/our-recruiters/company23.png",
        },  
       
      ]
  return (
    <div className="pt-100 pb-100">
    <div className="container-fluid">
          <div className="governing-body">
              <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Internship and Placement Details</h2></div>
          </div>
          <div className="row">
              <MenuList dept="School of Management" subMenu={NavLinks} />
          <div
          data-spy="scroll"
          className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
          data-target="#menu-navbar"
          data-offset="0"
        >
      <div className="row gx-0 tl-blog-details-row">
        <div className="col-lg-12">
           <Table striped bordered hover responsive className="governing-table">
            <thead>
              <tr>
                <th><p className="text-[#4f70b6]">Academic Year</p></th>
                <th><p className="text-[#4f70b6]">MBA</p></th>
                <th><p className="text-[#4f70b6]">BBA</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p>2020-2021</p></td>
                <td><p>63</p></td>
                <td><p>108</p></td>
              </tr>

              <tr>
                <td><p>2021-2022</p></td>
                <td><p>56</p></td>
                <td><p>114</p></td>
              </tr>

              <tr>
                <td><p>2022-2023</p></td>
                <td><p>56</p></td>
                <td><p>81</p></td>
              </tr>

              <tr>
                <td><p>2023-2024</p></td>
                <td><p>81</p></td>
                <td><p>80</p></td>
              </tr>

              <tr>
                <td><p>2024-2025</p></td>
                <td><p>Summer 25</p></td>
                <td><p>84</p></td>
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
                                        <img src={techitem.imgSrc} alt="Recruiters Company Logo"/>
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
  </div>
  )
}

export default ManagementDeptInternship