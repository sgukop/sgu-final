"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import AIMLDeptTestimonials from "./AIMLDeptTestimonials";
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
const AIMLDeptAlumni:React.FC<Props> = ({style,array}) => {
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
                              <td><p></p></td>
                              <td><p></p></td>
                              <td><p></p></td>
                            </tr>
                           
                          </tbody>
                        </Table>
                      </div>
                      </div>

                      <div className="row">
                            <div className="col-lg-12">
                                <AIMLDeptTestimonials padding='pt-50 pb-50' />
                            </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AIMLDeptAlumni;
