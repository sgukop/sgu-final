"use client"
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import { Table } from 'react-bootstrap';

const PhysicalDeptActivities = () => {
    const scistar = [
        {
          imgSrc: "assets/images/physical-sciences-dept/activities/6.png",
        },
        {
          imgSrc: "assets/images/physical-sciences-dept/activities/7.png",
        },
        {
          imgSrc: "assets/images/physical-sciences-dept/activities/8.png",
        },
        {
          imgSrc: "assets/images/physical-sciences-dept/activities/9.png",
        },
        {
            imgSrc: "assets/images/physical-sciences-dept/activities/new-activities/image1.jpg",
        },
        {
            imgSrc: "assets/images/physical-sciences-dept/activities/new-activities/image2.jpg",
        },
        {
            imgSrc: "assets/images/physical-sciences-dept/activities/new-activities/image3.jpg",
        },
        {
            imgSrc: "assets/images/physical-sciences-dept/activities/new-activities/image4.jpg",
        },
        {
            imgSrc: "assets/images/physical-sciences-dept/activities/new-activities/image5.jpg",
        },
        {
            imgSrc: "assets/images/physical-sciences-dept/activities/new-activities/image6.jpg",
        },
        {
            imgSrc: "assets/images/physical-sciences-dept/activities/new-activities/image7.jpg",
        },
        {
            imgSrc: "assets/images/physical-sciences-dept/activities/new-activities/image8.jpg",
        },
    ];
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
    <div className="container-fluid">
        <div className="tl-14-section-heading">
            <h2 className="tl-9-section-title mb-50">Activities & Achievements</h2>
        </div>

        <div className="row">
          <MenuList dept="Physics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

       {/*  <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Industrial Visit</h2></div>  */}
            <div className="tl-11-section-heading">
                    <h2 className="tl-11-section-title">Sci-STAR</h2>
                </div>
           
            <div className="row tl-7-classes-row">
               {scistar.map((activityItems1, index) => (
                    <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                        <div className="tl-7-class">
                            <div className="tl-7-class-img">
                                <img src={activityItems1.imgSrc} alt="Activities Images" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            
                <div className="tl-11-section-heading mt-50">
                    <h2 className="tl-11-section-title">Achievements</h2>
                </div>
               
            <div className="row gy-4 align-items-center mt-30">
                <div className="col-lg-12 mt-0">
                    <div className="tl-event-details-area mt-0">
                      
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li>Dr. Sambhaji M. Pawar:  Listed in Stanford/Elsevier's Top 2% Scientist Rankings</li>
                            <li>Mr. Akshay  S. Patil, a Ph.D. student completed three months training programs along with fellowship at Nagoya University, Japan </li>
                        </ul>

                        <Table bordered responsive className="governing-table mt-20">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">S. N.</p></th>
                                    <th><p className="text-[#4f70b6]">Name</p></th>
                                    <th><p className="text-[#4f70b6]">Fellowship</p></th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Mr. Sanket Mali</p></td>
                                    <td><p>MAHA JYOTI</p></td>
                                </tr>
                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Miss Rutuja Patil</p></td>
                                    <td><p>SARATHI</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Miss. Aditi Yadav</p></td>
                                    <td><p>SARATHI</p></td>
                                </tr>

                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Mr. Bhushan Bhosale-Patil</p></td>
                                    <td><p>SARATHI</p></td>
                                </tr>

                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Mr. Kiran R. Shinde</p></td>
                                    <td><p>SERB SURE-JRF</p></td>
                                </tr>
                            </tbody>
                       </Table>
                    </div>
                </div>
            </div>


            <div className="tl-8-course mt-50 mb-30">
                <div className="tl-8-course-img">
                    <img src="assets/images/physical-sciences-dept/activities/1.jpg" alt="Activities Images" style={{width:"auto", height:"auto"}}/>
                </div>
                <div className="tl-8-course-txt">
                    <p className="dark-mode-white-color">National seminar on <strong>“EMERGING NANO MATERIALS FOR RENEWABLE ENERGY - 2022”</strong></p>
                </div>
            </div>

            <div className="tl-8-course mb-30">
                <div className="tl-8-course-img">
                    <img src="assets/images/physical-sciences-dept/activities/2.png" alt="Activities Images" style={{width:"auto", height:"auto"}}/>
                </div>
                <div className="tl-8-course-txt">
                    <p className="dark-mode-white-color"><strong>Industrial visits : </strong>One Day Industrial Visit @ Gokul, Kolhapur</p>
                </div>
            </div>

            <div className="tl-8-course mb-30">
                <div className="tl-8-course-img">
                    <img src="assets/images/physical-sciences-dept/activities/3.png" alt="Activities Images" style={{width:"auto", height:"auto"}} />
                </div>
                <div className="tl-8-course-txt">
                    <p className="dark-mode-white-color"><strong>Industrial visits : </strong>One Day Industrial Visit @ WAICHAL Research Lab, Ichalkaranji</p>
                </div>
            </div>

            <div className="tl-8-course mb-30">
                <div className="tl-8-course-img">
                    <img src="assets/images/physical-sciences-dept/activities/4.png" alt="Activities Images" style={{width:"auto", height:"auto"}} />
                </div>
                <div className="tl-8-course-img">
                    <img src="assets/images/physical-sciences-dept/activities/5.png" alt="Activities Images" style={{width:"auto", height:"auto"}} />
                </div>
                <div className="tl-8-course-txt">
                    <p className="dark-mode-white-color">State Level Science Competition</p>
                </div>
            </div>
        </div>
       </div>
       </div>
    </section>
  )
}

export default PhysicalDeptActivities