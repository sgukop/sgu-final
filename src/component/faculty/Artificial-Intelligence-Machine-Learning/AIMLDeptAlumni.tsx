"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import AIMLDeptTestimonials from "./AIMLDeptTestimonials";

// 1. Define strict type interfaces
interface ArrayItems {
  id: number;
  imgSrc: string;
  name: string;
  batch: string;
  designation: string;
  dec: string;
}

interface Props {
  style?: string;      // Made optional (?) to prevent '{}' missing properties error
  array?: ArrayItems[]; // Made optional (?) with fallback array evaluation
}

const AIMLDeptAlumni: React.FC<Props> = ({ style = "", array = [] }) => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);

  // 2. React-Slick instance states for flawless synchronization without re-render loops
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  // 3. Bind slider references safely once elements mount into the DOM
  useEffect(() => {
    if (sliderRef.current && imgNavRef.current) {
      setNav1(sliderRef.current);
      setNav2(imgNavRef.current);
    }
  }, []);

  const mainSliderSettings = {
    slidesToShow: 1,
    asNavFor: nav2,
    autoplay: true,
    speed: 1000,
    arrows: false,
    dots: false,
  };

  const testimonialImagesSettings = {
    slidesToShow: 1,
    draggable: false,
    arrows: false,
    swipe: false,
    fade: true,
    asNavFor: nav1,
    autoplay: true,
    speed: 1000,
  };

  return (
    <section className={`tl-7-testimonial ${style} tl-1-blogs`}>
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Alumni Students</h2>
        <div className="row">
          <MenuList dept="School of Management" subMenu={NavLinks} />
          
          <div 
            data-spy="scroll" 
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" 
            data-target="#menu-navbar" 
            data-offset="0"
          >
            {/* --- OPTIONAL REACT-SLICK SLIDER HOOKS ---
              If you wish to display synchronized carousels inside this container,
              uncomment the block below:
              
              <div className="tl-7-testimonial-row">
                <Slider ref={sliderRef} {...mainSliderSettings}>
                  {array.map((item) => (
                    <div key={item.id}><h3>{item.name}</h3></div>
                  ))}
                </Slider>
                <Slider ref={imgNavRef} {...testimonialImagesSettings}>
                  {array.map((item) => (
                    <div key={item.id}><img src={item.imgSrc} alt={item.name} /></div>
                  ))}
                </Slider>
              </div>
            */}

            <div className="row gx-0 tl-blog-details-row mt-50">
              <div className="tl-11-section-heading">
                <h2 className="tl-11-section-title">Alumni Student List</h2>
              </div>
              
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
                    {array && array.length > 0 ? (
                      array.map((item, index) => (
                        <tr key={item.id || index}>
                          <td><p>{index + 1}</p></td>
                          <td><p>{item.name}</p></td>
                          <td><p>{item.batch}</p></td>
                          <td><p>{item.designation}</p></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="text-center py-4 text-muted">
                          No alumni records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <AIMLDeptTestimonials padding="pt-50 pb-50" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLDeptAlumni;