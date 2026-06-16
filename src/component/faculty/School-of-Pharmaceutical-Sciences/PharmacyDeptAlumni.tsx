'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Table from "react-bootstrap/Table";
import { pharmacyAlumniList } from '@/data/Data';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import Link from 'next/link';

type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined;
  infinite: boolean;
  speed: number;
  slidesToScroll: number;
  arrows: boolean;
};

const PharmacyDeptAlumni: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);

  const sliderSettings: SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: imgNavRef.current || undefined,
    arrows: false,
  };

  return (
    <section className="tl-4-testimonial tl-3-section-spacing">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">
          Alumni
        </h2>
        <div className="row">
                    <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
                        <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">

        <div className="tl-4-testimonial-slider owl-carousel">
          <Slider ref={sliderRef} {...sliderSettings}>
            {pharmacyAlumniList.map((item) => (
              <div key={item.id}>
                <div className="tl-4-testimony">
                  

                  <div className="tl-4-testimony-txt">
                    <p className="tl-4-testimony-review">{item.name}</p>

                    <div className="tl-4-reviewer">
                      <div className="tl-4-reviewer-txt">
                        <h6 className="tl-4-reviewer-name">{item.company}</h6>
                        <span className="tl-4-reviewer-label">{item.package}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="tl-4-testimonial-users">
          <Slider
            ref={imgNavRef}
            asNavFor={sliderRef.current || undefined}
            slidesToShow={pharmacyAlumniList.length}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {pharmacyAlumniList.map((item) => (
              <div key={item.id} role='button' onClick={() => sliderRef.current?.slickGoTo(item.id)}>
                <button>
                  {/* Use onClick to manually control the first slider */}
                  <span className="tl-4-reviewer">
                    <img
                      src={item.imgSrc}
                      alt="User Image"
                      className="tl-4-reviewer-img"
                    />

                    <span className="tl-4-reviewer-txt">
                      <span className="tl-4-reviewer-name">{item.name}</span>
                      <span className="tl-4-reviewer-label">{item.company}</span>
                      <span className="tl-4-reviewer-label">{item.package}</span>
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </Slider>
        </div>

        <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Alumni List (D Pharmacy)</h2>
            </div>

            <div className="row">
               
               <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   <Link href="https://manage-api.sguk.ac.in/api/assets/67dcf7d04f56d3a0bcfba42c" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST D PHARM 20-21 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>
               <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   <Link href="https://manage-api.sguk.ac.in/api/assets/67dcf7e24f56d3a0bcfba435" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST D PHARM 21-22 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>

               <div className="col-lg-6 col-md-12 col-12 col-xxs-12 mt-20">
                   <Link href="https://manage-api.sguk.ac.in/api/assets/67dcf7f24f56d3a0bcfba43a" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST D PHARM 22-23 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>

               <div className="col-lg-6 col-md-12 col-12 col-xxs-12 mt-20">
                   <Link href="https://manage-api.sguk.ac.in/api/assets/67dcf8014f56d3a0bcfba43f" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST D PHARM 23-24 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>
           </div>

           <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Alumni List (B Pharmacy)</h2>
            </div>

            <div className="row">
               
               <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   <Link href="https://manage-api.sguk.ac.in/api/assets/67dcf9a74f56d3a0bcfba450" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST B PHARM 22-23 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>
               <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   <Link href="https://manage-api.sguk.ac.in/api/assets/67dcf9b74f56d3a0bcfba455" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST B PHARM 23-24 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>
               <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   <Link href="https://manage-api.sguk.ac.in/api/assets/6a0d86e312260ec08e7c8387" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST B PHARM 24-25 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>
          </div>

          <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Alumni List (M Pharmacy)</h2>
            </div>

            <div className="row">
               
               <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   <Link href="#" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST M PHARM 2025-26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>
               <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   <Link href="#" className="tl-3-single-program-new" target="_blank">
                     <h5 className="tl-3-single-program-title-new">ALUMNI LIST M PHARM 2026-27 <i className="fa-regular fa-arrow-right-long"></i></h5>
                   </Link>
               </div>
          </div>
        </div>
      </div>
    </div>
     
    </section>
  );
};

export default PharmacyDeptAlumni;
