"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
//import ManagementDeptTestimonials from "./ManagementDeptTestimonials";
interface Props {
  style: string;
  array: ArrayItems[];
  
}
type ArrayItems = {
  id: number,
  imgSrc: string,
  name: string,
  company: string,
  designation: string,
  package:string,
  testimonials : string
}
type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined; // Use the Slider type here
  autoplay: boolean;
  speed: number;
  arrows: boolean;
  dots: boolean;
};
const ComputerDeptAlumni:React.FC<Props> = ({style,array}) => {
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
                    <p className="tl-7-testimony-txt">{item.testimonials}</p>

                    <div className="tl-7-testimony-bottom">
                      <div className="tl-7-testimony-bottom-left">
                        <h5 className="tl-7-testimony-reviewer-name">
                          {item.name}
                        </h5>
                        <span className="tl-7-testimony-reviewer-role">
                          {item.designation}
                        </span>
                        <span className="tl-7-testimony-reviewer-role">
                          {item.company}
                        </span>
                        <span className="tl-7-testimony-reviewer-role">
                          {item.package}
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
      </div>
      </div>
      </div>
    </section>
  );
};

export default ComputerDeptAlumni;
