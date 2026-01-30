"use client"
import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Table } from 'react-bootstrap'

const AerospaceDeptInternship = () => {
  return (
    <>
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Internships & Placements</h2>
        <div className="row">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
          <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title">Internship</h2>
          </div>
          <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/aerospace-engineering-dept/internship/internship1.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">INTERNSHIP AT AEROTICS BENGALURU</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/internship/internship2.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">INTERNSHIP AT BAIL BENGALURU</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/internship/internship3.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">INTERNSHIP AT STAR AIR, BENGALURU</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/internship/internship4.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">INTERNSHIP IN BAIL INDIA BANGALORE</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/internship/internship5.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">INTERNSHIP IN TANEJA AEROSPACE AND AVIATION</h3>
                    </div>
                  </div>
          </div>
          <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Internship Details</h2></div>
              <div className="row gy-4">
                 <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="#" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Final Year Internship (2025-26) <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67d13e314f56d3a0bcfb9779" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Final Year Internship (2024-25) <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675025f34b17e19d8f361aae" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">TY Internship 2023-2024 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675026234b17e19d8f361ab3" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Final Year Internship 2023-2024 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675025d84b17e19d8f361aa9" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Final Year Internship 2022-2023 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675025ad4b17e19d8f361a9f" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">TY Internship 2021-2022 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675025c24b17e19d8f361aa4" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Final Year Internship 2021-2022 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675025534b17e19d8f361a95" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">TY Internship 2020-2021 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675025974b17e19d8f361a9a" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Final Year Internship 2020-2021 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
              </div>


     <div className="tl-11-section-heading mt-50">
	          <h2 className="tl-11-section-title">Placements</h2>
      </div>

      {/*<div className="tl-8-experts-heading justify-content-center">
          <a href="https://manage-api.sguk.ac.in/api/assets/6750269e4b17e19d8f361abe" target="_blank" className="tl-def-btn-2">Read More <i className="fa-regular fa-arrow-right"></i></a>
      </div>

     <div className="row justify-content-center position-relative">
          <div className="col-lg-10 col-md-12">
              <Swiper 
              autoplay={true}
              loop={true}
              navigation={{
                  nextEl: '.owl-next',
                  prevEl: '.owl-prev'
              }}
              modules={[Autoplay,Navigation]}
              className="tl-8-testimonial-slider owl-carousel">
                   <SwiperSlide className="placement-image">
                          <h2 className="tl-11-section-title mx-auto text-center mb-6">2021-2025</h2>
                          <img src="assets/images/aerospace-engineering-dept/placements/2021-2025 Placement.jpg" alt="Placement image"/>
                  </SwiperSlide>
                  <SwiperSlide className="placement-image">
                          <img src="assets/images/aerospace-engineering-dept/placements/placement1.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement2.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement3.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement4.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement5.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement6.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement7.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement8.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement9.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement10.jpg" alt="Placement image"/>
                  </SwiperSlide>

                  <SwiperSlide className="placement-image">
                  <img src="assets/images/aerospace-engineering-dept/placements/placement11.jpg" alt="Placement image"/>
                  </SwiperSlide>
              </Swiper>
          </div>

          <div className="tl-8-testimonial-slider-nav">
              <button type="button" role="presentation" className="owl-prev">
                  <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button type="button" role="presentation" className="owl-next"> 
                  <i className="fa-regular fa-arrow-right"></i>
              </button>
          </div>
      </div>   */}

        <div className="row tl-event-details-row g-4 mt-50">
          <div className="col-lg-12">
                <div className="tl-event-details-left flex flex-col h-full">
                  <h3 className="tl-event-details-area-title">PLACEMENT DETAILS - BATCH 2021-25</h3>
                  <h5 className="dark-mode-white-color mb-3">
                      Total No. of Students : 16 
                  </h5>
                 {/* <h5 className="dark-mode-white-color mb-3">
                      No of Students : 59
                  </h5>   */}
                  <div className="tl-event-details-key-content">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">S.No</p></th>
                            <th><p className="text-[#4f70b6]">Name of company</p></th>
                            <th><p className="text-[#4f70b6]">Type of company</p></th>
                            <th><p className="text-[#4f70b6]">No. of Students Placed</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>Hitech Ahmedabad</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>5</p></td>
                        </tr>

                        <tr>
                            <td><p>2</p></td>
                            <td><p>Star Air</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>2</p></td>
                        </tr>

                        <tr>
                            <td><p>3</p></td>
                            <td><p>Umas India Pvt Ltd, Pune</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>1</p></td>
                        </tr>
                        <tr>
                            <td><p>4</p></td>
                            <td><p>Epsilon Aerospace Pvt Ltd</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>1</p></td>
                        </tr>

                        <tr>
                            <td><p>5</p></td>
                            <td><p>Aero champ Aviation Mumbai</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>4</p></td>
                        </tr>

                        <tr>
                            <td><p>6</p></td>
                            <td><p>IAC Pune</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>3</p></td>
                        </tr>
                    </tbody>
                </Table>
                   
                   </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="tl-event-details-left flex flex-col h-full">
                  <h3 className="tl-event-details-area-title">PLACEMENT DETAILS - BATCH 2020-24</h3>
                  <h5 className="dark-mode-white-color mb-3">
                      Total No. of Students : 18 
                  </h5>
                 <h5 className="dark-mode-white-color mb-3">
                      Higher Studies : 4
                  </h5> 
                  <div className="tl-event-details-key-content">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">S.No</p></th>
                            <th><p className="text-[#4f70b6]">Name of company</p></th>
                            <th><p className="text-[#4f70b6]">Type of company</p></th>
                            <th><p className="text-[#4f70b6]">No. of Students Placed</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>Safran, Bangalore</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>1</p></td>
                        </tr>

                        <tr>
                            <td><p>2</p></td>
                            <td><p>Aeronautical Development Establishment</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>2</p></td>
                        </tr>

                        <tr>
                            <td><p>3</p></td>
                            <td><p>CAE Analyzer</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>1</p></td>
                        </tr>
                        <tr>
                            <td><p>4</p></td>
                            <td><p>CAE Solutions Pune</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>2</p></td>
                        </tr>

                        <tr>
                            <td><p>5</p></td>
                            <td><p>Capgemini</p></td>
                            <td><p>Technical Publications</p></td>
                            <td><p>5</p></td>
                        </tr>

                        <tr>
                            <td><p>6</p></td>
                            <td><p>Hitech Ahmedabad</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>2</p></td>
                        </tr>

                        <tr>
                            <td><p>7</p></td>
                            <td><p>Star Air</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>2</p></td>
                        </tr>

                        <tr>
                            <td><p>8</p></td>
                            <td><p>Umas India Pvt Ltd, Pune</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>3</p></td>
                        </tr>
                    </tbody>
                </Table>
                   
                   </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="tl-event-details-left flex flex-col h-full">
                  <h3 className="tl-event-details-area-title">PLACEMENT DETAILS - BATCH 2019-23</h3>
                  <h5 className="dark-mode-white-color mb-3">
                    Total No. of Students got the Job : 26
                  </h5>
                 <h5 className="dark-mode-white-color mb-3">
                      Higher Studies : 16
                  </h5> 
                  <div className="tl-event-details-key-content">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">S.No</p></th>
                            <th><p className="text-[#4f70b6]">Name of company</p></th>
                            <th><p className="text-[#4f70b6]">Type of company</p></th>
                            <th><p className="text-[#4f70b6]">No. of Students Placed</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>TCS, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>2</p></td>
                            <td><p>Hi-Tech, Ahmedabad</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>07</p></td>
                        </tr>

                        <tr>
                            <td><p>3</p></td>
                            <td><p>QI</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>01</p></td>
                        </tr>
                        <tr>
                            <td><p>4</p></td>
                            <td><p>Star Air</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>07</p></td>
                        </tr>

                        <tr>
                            <td><p>5</p></td>
                            <td><p>Garuda Aerospace</p></td>
                            <td><p>Technical Publications</p></td>
                            <td><p>4</p></td>
                        </tr>

                        <tr>
                            <td><p>6</p></td>
                            <td><p>Capgemini</p></td>
                            <td><p>Technical Publications</p></td>
                            <td><p>4</p></td>
                        </tr>

                        <tr>
                            <td><p>7</p></td>
                            <td><p>Indigo</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>1</p></td>
                        </tr>

                        <tr>
                            <td><p>8</p></td>
                            <td><p>Boeing</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>1</p></td>
                        </tr>
                    </tbody>
                </Table>
                   
                   </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="tl-event-details-left flex flex-col h-full">
                  <h3 className="tl-event-details-area-title">PLACEMENT DETAILS - BATCH 2018-22</h3>
                  <h5 className="dark-mode-white-color mb-3">
                  Total No. of Students  : 29
                  </h5>
                 <h5 className="dark-mode-white-color mb-3">
                    Total No. of Students Joined Higher studies : 03
                  </h5> 
                  <div className="tl-event-details-key-content">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">S.No</p></th>
                            <th><p className="text-[#4f70b6]">Name of company</p></th>
                            <th><p className="text-[#4f70b6]">Type of company</p></th>
                            <th><p className="text-[#4f70b6]">No. of Students Placed</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>BYJUS, Pune</p></td>
                            <td><p>IT</p></td>
                            <td><p>03</p></td>
                        </tr>

                        <tr>
                            <td><p>2</p></td>
                            <td><p>Accenture, Bangalore</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>3</p></td>
                            <td><p>Capegemini, Bangalore</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>09</p></td>
                        </tr>
                        <tr>
                            <td><p>4</p></td>
                            <td><p>Wipro, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>5</p></td>
                            <td><p>Infosys, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>02</p></td>
                        </tr>

                        <tr>
                            <td><p>6</p></td>
                            <td><p>STAR-AIR, Bangalore</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>02</p></td>
                        </tr>

                        <tr>
                            <td><p>7</p></td>
                            <td><p>Indigo Airlines, Mumbai</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>8</p></td>
                            <td><p>Hi-Tech, Ahmedabad</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>06</p></td>
                        </tr>

                        <tr>
                            <td><p>9</p></td>
                            <td><p>Q-Spider, Pune</p></td>
                            <td><p>IT</p></td>
                            <td><p>02</p></td>
                        </tr>

                        <tr>
                            <td><p>10</p></td>
                            <td><p>FACE, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>11</p></td>
                            <td><p>Skillatwill, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>01</p></td>
                        </tr>
                    </tbody>
                </Table>
              </div>
          </div>
      </div>

      <div className="col-lg-12">
                <div className="tl-event-details-left flex flex-col h-full">
                  <h3 className="tl-event-details-area-title">PLACEMENT DETAILS - BATCH 2018-22</h3>
                  <h5 className="dark-mode-white-color mb-3">
                  Total No. of Students  : 21
                  </h5>
                 <h5 className="dark-mode-white-color mb-3">
                 Total No. of Students Joined Higher studies : 03
                  </h5> 
                  <div className="tl-event-details-key-content">
                  <Table bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p className="text-[#4f70b6]">S.No</p></th>
                            <th><p className="text-[#4f70b6]">Name of company</p></th>
                            <th><p className="text-[#4f70b6]">Type of company</p></th>
                            <th><p className="text-[#4f70b6]">No. of Students Placed</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>Cognizant, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>03</p></td>
                        </tr>

                        <tr>
                            <td><p>2</p></td>
                            <td><p>BOEING, Chennai</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>3</p></td>
                            <td><p>Capegemini, Bangalore</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>05</p></td>
                        </tr>
                        <tr>
                            <td><p>4</p></td>
                            <td><p>Wipro, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>5</p></td>
                            <td><p>Infosys, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>03</p></td>
                        </tr>

                        <tr>
                            <td><p>6</p></td>
                            <td><p>Safran, Bangalore</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>7</p></td>
                            <td><p>TCS, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>04</p></td>
                        </tr>

                        <tr>
                            <td><p>8</p></td>
                            <td><p>Hi-Tech, Ahmedabad</p></td>
                            <td><p>Core Aero</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>9</p></td>
                            <td><p>Umlaut, Bangalore</p></td>
                            <td><p>IT</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>10</p></td>
                            <td><p>Evolveware, Pune</p></td>
                            <td><p>IT</p></td>
                            <td><p>01</p></td>
                        </tr>

                        <tr>
                            <td><p>11</p></td>
                            <td><p>Q-Spider, Pune</p></td>
                            <td><p>IT</p></td>
                            <td><p>01</p></td>
                        </tr>
                    </tbody>
                </Table>
              </div>
          </div>
      </div>
    </div>
    </div>   
  </div>
</div>
</section>
</>
  )
}

export default AerospaceDeptInternship