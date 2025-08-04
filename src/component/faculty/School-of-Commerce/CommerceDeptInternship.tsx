"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Table } from "react-bootstrap";
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slider from 'react-slick';

interface AboutProps{
    margin: string;
 }

const CommerceDeptInternship:React.FC<AboutProps> = ({margin}) => {
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
      imgSrc: "assets/images/commerce-dept/our-recruiters/company1.png",
    },
    {
      imgSrc: "assets/images/commerce-dept/our-recruiters/company2.png",
    },
    {
      imgSrc: "assets/images/commerce-dept/our-recruiters/company3.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company4.png",
    },
    {
      imgSrc: "assets/images/commerce-dept/our-recruiters/company5.png",
    },
    {
      imgSrc: "assets/images/commerce-dept/our-recruiters/company6.png",
    },
    {
      imgSrc: "assets/images/commerce-dept/our-recruiters/company7.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company8.jpg",
    },
   {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company9.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company10.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company11.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company12.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company13.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company14.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company15.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company16.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company17.png",
    },
    {
        imgSrc: "assets/images/commerce-dept/our-recruiters/company18.png",
    },  
  ]
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship</h2>

        <div className="row">
          <MenuList dept="Commerce" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

         <div className="row gx-0 tl-blog-details-row">
            
              <div className="col-lg-12">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">Sr.No.</p></th>
                            <th><p className="text-[#4f70b6]">Name of the Student</p></th>
                            <th><p className="text-[#4f70b6]">Company Name</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>Ankalkote Manish Sandeep (SGRA)</p></td>
                            <td><p>Aoone Industries, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>2</p></td>
                            <td><p>Chavan Yashodhan Abhijeet</p></td>
                            <td><p>Indrasen Industries, Pune</p></td>
                        </tr>
                        <tr>
                            <td><p>3</p></td>
                            <td><p>Chougule Niraj Rajkumar</p></td>
                            <td><p>Madhav Nagar Steel &amp; Alloy, Sangli</p></td>
                        </tr>
                        <tr>
                            <td><p>4</p></td>
                            <td><p>Farate Vinit Chandrakant</p></td>
                            <td><p>Bharat Auto Industries</p></td>
                        </tr>
                        <tr>
                            <td><p>5</p></td>
                            <td><p>Gandhi Khushi Dinesh</p></td>
                            <td><p>Arihant Textile, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>6</p></td>
                            <td><p>Jadhav Adish Uttam</p></td>
                            <td><p>Rohan Industries, Kagal, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>7</p></td>
                            <td><p>Khan Mohd Razahasan Abdul Ahad</p></td>
                            <td><p>Royal Plastic</p></td>
                        </tr>
                        <tr>
                            <td><p>8</p></td>
                            <td><p>Mane Sruthika Bhagavan</p></td>
                            <td><p>Ca Ramyasree And Assoiciates, Tamilnadu</p></td>
                        </tr>
                        <tr>
                            <td><p>9</p></td>
                            <td><p>Patil Aditee Vinay</p></td>
                            <td><p>Umed Sizers, Sangli</p></td>
                        </tr>
                        <tr>
                            <td><p>10</p></td>
                            <td><p>Patil Shivjeet Ranjeet (SGRA)</p></td>
                            <td><p>Shri-Shine-O Paints</p></td>
                        </tr>
                        <tr>
                            <td><p>11</p></td>
                            <td><p>Patil Sushant Suresh</p></td>
                            <td><p>Aone Industries, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>12</p></td>
                            <td><p>Pawar Kavita Madanlal</p></td>
                            <td><p>Prem Enterprises, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>13</p></td>
                            <td><p>Sah Pankaj</p></td>
                            <td><p>Shital Poultry Feeds, Pvt. Ltd. Sangli</p></td>
                        </tr>
                        <tr>
                            <td><p>14</p></td>
                            <td><p>Shinde Rajnandini Pankaj</p></td>
                            <td><p>S.S. Agro Agency, Barshi</p></td>
                        </tr>
                        <tr>
                            <td><p>15</p></td>
                            <td><p>Singh Ayushkumar Arunkumar</p></td>
                            <td><p>Vedanta Metacast, Pune</p></td>
                        </tr>
                        <tr>
                            <td><p>16</p></td>
                            <td><p>Solanki Kunalsingh Premsingh</p></td>
                            <td><p>Arihant Traders, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>17</p></td>
                            <td><p>Waghalakar Sakshi Sunil</p></td>
                            <td><p>Shree Samarth Agency, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>18</p></td>
                            <td><p>Kamble Nayomi Sachin</p></td>
                            <td><p>Kamala Plastics, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>19</p></td>
                            <td><p>Nikam Sakshi Ashishkumar</p></td>
                            <td><p>The Vijay Spring Works, Kolhapur</p></td>
                        </tr>
                        <tr>
                            <td><p>20</p></td>
                            <td><p>Shinde Yojana Milind (Dsy)</p></td>
                            <td><p>Rohit Transport</p></td>
                        </tr>
                        <tr>
                            <td><p>21</p></td>
                            <td><p>Bhosale Om Sunil (Carry On)</p></td>
                            <td><p>Kpt Industries Ltd, Shirol.</p></td>
                        </tr>
                        <tr>
                            <td><p>22</p></td>
                            <td><p>Desai Janmenjay Sunil (Carry On)</p></td>
                            <td><p>Paras Ice Cream, Dattawad</p></td>
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
    </section>
  );
};

export default CommerceDeptInternship;
