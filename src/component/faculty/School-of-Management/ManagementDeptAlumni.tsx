"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import ManagementDeptTestimonials from "./ManagementDeptTestimonials";
interface Props {
  style: string;
  array: ArrayItems[];
  
}
type ArrayItems = {
  id: number,
  imgSrc: string,
  name: string,
  batch: string,
  designation: string,
  dec : string
}
type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined; // Use the Slider type here
  autoplay: boolean;
  speed: number;
  arrows: boolean;
  dots: boolean;
};
const ManagementDeptAlumni:React.FC<Props> = ({style,array}) => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);
  useEffect(() => {
    const sliderSettings: SliderSettings = {
      slidesToShow: 1,
      asNavFor: imgNavRef.current as Slider, // Use type assertion here
      autoplay: true,
      speed: 1000,
      arrows: false,
      dots: false,
    };
    setSliderSetting(sliderSettings);
  }, []);

  const [sliderSettings, setSliderSetting] = useState<SliderSettings>({
    slidesToShow: 1,
    asNavFor: undefined, // Use undefined instead of null
    autoplay: true,
    speed: 1000,
    arrows: false,
    dots: false,
  });

  const testimonialImagesSettings = {
    slidesToShow: 1,
    draggable: false,
    arrows: false,
    swipe: false,
    fade: true,
    asNavFor: sliderRef.current as Slider, // Use type assertion here
    autoplay: true,
    speed: 1000,
  };
  return (
    <section className={`tl-7-testimonial ${style} tl-1-blogs`}>
      <div className="container-fluid">
      <h2 className="tl-9-section-title mb-50">Alumni Students</h2>
            <div className="row">
                <MenuList dept="School of Management" subMenu={NavLinks} />
                    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
                        <div className="tl-7-testimonial-row">
                            <div className="tl-7-reviewer-img-slider">
                              <Slider {...testimonialImagesSettings} ref={imgNavRef}>
                                {array.map((item) => (
                                  <img src={item.imgSrc} alt={item.name} key={item.id} />
                                ))}
                              </Slider>
                            </div>

                          <div className="tl-7-testimonial-slider-col">
                            <div className="tl-7-testimonial-slider">
                              <Slider {...sliderSettings} ref={sliderRef}>
                                {array.map((item) => (
                                  <div className="tl-7-testimony" key={item.id}>
                                    <p className="tl-7-testimony-txt">{item.dec}</p>

                                    <div className="tl-7-testimony-bottom">
                                      <div className="tl-7-testimony-bottom-left">
                                        <h5 className="tl-7-testimony-reviewer-name">
                                          {item.name}
                                        </h5>
                                        <span className="tl-7-testimony-reviewer-role">
                                          {item.designation}
                                        </span>
                                        <span className="tl-7-testimony-reviewer-role">
                                          {item.batch}
                                        </span>
                                      </div>

                                      <div className="tl-7-testimony-bottom-right">
                                        <img
                                          src="assets/images/tl-7/quotation.png"
                                          alt="Quotation Mark"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          </div>
                      </div>

                      <div className="row gx-0 tl-blog-details-row mt-50">
                      <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Alumni Student List</h2></div>
                      <div className="col-lg-12">
                        <Table bordered responsive className="governing-table">
                          <thead>
                            <tr>
                              <th><p className="text-[#4f70b6]">S.N.</p></th>
                              <th><p className="text-[#4f70b6]">Name of the Alumnus</p></th>
                              <th><p className="text-[#4f70b6]">Program & Batch</p></th>
                              <th><p className="text-[#4f70b6]">Designation & Company</p></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><p>1</p></td>
                              <td><p>Sanskar Nawal</p></td>
                              <td><p>BBA (International Business) 2017-20</p></td>
                              <td><p>Retail Planner Trainee, LVMH Perfumes & Cosmetics, Dubai, UAE.Founder, Glamup Ventures.</p></td>
                            </tr>

                            <tr>
                              <td><p>2</p></td>
                              <td><p>Varad Bagewadi</p></td>
                              <td><p>MBA (Marketing) 2021-23</p></td>
                              <td><p>Territory Sales Officer, Asian Paints, Mumbai</p></td>
                            </tr>

                            <tr>
                              <td><p>3</p></td>
                              <td><p>Punit Savala</p></td>
                              <td><p>MBA (Marketing) 2021-23</p></td>
                              <td><p>Talent Acquisition Specialist, Digital Intelligence Systems, LLC (DISYS) India Pvt. Ltd. Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>4</p></td>
                              <td><p>Manasi Mirajkar</p></td>
                              <td><p>MBA (HR) 2021-23</p></td>
                              <td><p>HR Professional, Atyeti Inc. Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>5</p></td>
                              <td><p>Vedashri Kulkarni</p></td>
                              <td><p>MBA (Marketing) 2021-23</p></td>
                              <td><p>US IT Recruiter, Spearhead Technology, Dallas, Texas, United States-On-site.</p></td>
                            </tr>

                            <tr>
                              <td><p>6</p></td>
                              <td><p>Ronak Chauhan</p></td>
                              <td><p>MBA (HR) 2021-23</p></td>
                              <td><p>Talent Acquisition Specialist, Velociti HR Services, Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>7</p></td>
                              <td><p>Harshada Mohite</p></td>
                              <td><p>MBA (Operations & SCM) 2021-23</p></td>
                              <td><p>Resource Executive, Shipco IT Private Limited, Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>8</p></td>
                              <td><p>Avinash Diwan</p></td>
                              <td><p>MBA (Marketing) 2020-22</p></td>
                              <td><p>Sales Consultant, Lindström, Kolhapur.</p></td>
                            </tr>

                            <tr>
                              <td><p>9</p></td>
                              <td><p>Vedika Narote</p></td>
                              <td><p>MBA (HR) 2021-23</p></td>
                              <td><p>Business Development Executive, tCognition, Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>10</p></td>
                              <td><p>Saurabh Agare</p></td>
                              <td><p>MBA (Operations & SCM) 2020-22</p></td>
                              <td><p>Operations Specialist, Tech Mahindra, Sangli.</p></td>
                            </tr>

                            <tr>
                              <td><p>11</p></td>
                              <td><p>Aishwarya Shettimali</p></td>
                              <td><p>MBA (HR) 2020-22</p></td>
                              <td><p>Executive HR Recruiter, Le Human Resources Solutions Pvt. Ltd., Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>12</p></td>
                              <td><p>Abhinav Nalawade</p></td>
                              <td><p>MBA (Marketing) 2017-19</p></td>
                              <td><p>Deputy Manager-Corporate Sales, Indo Edge India Ltd., Kolhapur.</p></td>
                            </tr>

                            <tr>
                              <td><p>13</p></td>
                              <td><p>Sanyukta Bhilare</p></td>
                              <td><p>BBA (International Business) 2018-21</p></td>
                              <td><p>Import Export Executive, Seashell Logistics Pvt Ltd, Navi Mumbai.</p></td>
                            </tr>

                            <tr>
                              <td><p>14</p></td>
                              <td><p>Sonukumar Bharti</p></td>
                              <td><p>B.Com. (Accounting & Finance) 2021-23</p></td>
                              <td><p>Business Development Manager, Niva Bupa Health Insurance, Sangli.</p></td>
                            </tr>

                            <tr>
                              <td><p>15</p></td>
                              <td><p>Amar Vishnu Patil</p></td>
                              <td><p>MBA (Finance) 2021-23</p></td>
                              <td><p>Relationship Manager, Home First Finance Company (HFFC), Sangli.</p></td>
                            </tr>

                            <tr>
                              <td><p>16</p></td>
                              <td><p>Shweta Chandwani</p></td>
                              <td><p>MBA (Marketing) 2019-21</p></td>
                              <td><p>International Sales Executive, Market Research Future® (MRFR), Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>17</p></td>
                              <td><p>Amartya Yevluje</p></td>
                              <td><p>MBA (Marketing) 2021-23</p></td>
                              <td><p>Brand Manager, The Socma Digital Pvt Ltd, Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>18</p></td>
                              <td><p>Vijayraj Khobare</p></td>
                              <td><p>MBA (Marketing) 2017-19</p></td>
                              <td><p>Business Owner, RepubliQ Fine Dine, Kolhapur.</p></td>
                            </tr>

                            <tr>
                              <td><p>19</p></td>
                              <td><p>Rohit Malagi</p></td>
                              <td><p>MBA (HR) 2012-14</p></td>
                              <td><p>Senior Human Resources Generalist, Atyeti Inc, Pune.</p></td>
                            </tr>

                            <tr>
                              <td><p>20</p></td>
                              <td><p>Atul Malpani</p></td>
                              <td><p>MBA (Marketing) 2014-16</p></td>
                              <td><p>Executive Secretary and Business Coordinator, E-clerk, Samrudhi Industries Ltd, Sangli.</p></td>
                            </tr>

                            <tr>
                              <td><p>21</p></td>
                              <td><p>Chintan Rathod</p></td>
                              <td><p>MBA (Marketing & HR) 2015-17</p></td>
                              <td><p>Owner, Nakoda Travels, Kolhapur.</p></td>
                            </tr>

                            <tr>
                              <td><p>22</p></td>
                              <td><p>Kushal Kukade</p></td>
                              <td><p>MBA (Marketing) 2011-13</p></td>
                              <td><p>Founder Director, Wellnex Digilife India Pvt Ltd, Kolhapur.</p></td>
                            </tr>

                          </tbody>
                        </Table>
                      </div>
                      </div>

                      <div className="row">
                            <div className="col-lg-12">
                                <ManagementDeptTestimonials padding='pt-50 pb-50' />
                            </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ManagementDeptAlumni;
