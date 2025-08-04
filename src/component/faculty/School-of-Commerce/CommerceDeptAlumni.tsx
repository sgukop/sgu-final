'use client'
import React, { useEffect, useRef, useState } from 'react';
import { commerceAlumni } from '@/data/Data';
import Slider from 'react-slick';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
type SliderSettings = {
    slidesToShow: number;
    asNavFor?: Slider | undefined; // Use the Slider type here
    autoplay: boolean;
    speed: number;
    arrows: boolean;
  };
  
const CommerceDeptAlumni = () => {
    const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);
  const [sliderSettings, setSliderSetting] = useState<SliderSettings>({
    slidesToShow: 1,
    asNavFor: undefined, // Use undefined instead of null
    autoplay: true,
    speed: 1000,
    arrows: false,
  });

  useEffect(() => {
    const sliderSettings: SliderSettings = {
      slidesToShow: 1,
      asNavFor: imgNavRef.current as Slider, // Use type assertion here
      autoplay: true,
      speed: 1000,
      arrows: false,
    };
    setSliderSetting(sliderSettings);
  }, []);
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

  useEffect(() => {
    if (sliderRef.current) {
      setSliderSetting((prevSettings) => ({
        ...prevSettings,
        asNavFor: imgNavRef.current as Slider, // Use type assertion here
      }));
    }
  }, []);
  return (
    <section className="tl-13-testimonial pt-120 pb-120 bg-defaults" data-background="assets/images/tl-13/testimonial-bg.png">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Alumni Students</h2>
            <div className="row">
                    <MenuList dept="Commerce & Management" subMenu={NavLinks} />
                        <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
            <div className="row gy-4 align-items-center justify-content-center">
           <div className="col-lg-5">
                    <div className="tl-13-testimonial-img">
                        <Slider 
                        className="tl-13-testimonial-user-slider"
                        {...testimonialImagesSettings}
                        ref={imgNavRef}
                        >
                            {
                                commerceAlumni.map((item1)=>(
                                    <img src={item1.imgSrc} alt="User Image" key={item1.id} />
                                ))
                            }
                           
                        </Slider>

                       
                    </div>
                </div>  
               <div className="col-lg-7">
                    <Slider 
                    className="tl-13-testimonial-slider"
                    {...sliderSettings}
                    ref={sliderRef}
                    >

                        {
                            commerceAlumni.map((item)=>(
                                <div className="tl-4-testimony-txt" key={item.id}>
                                      <p className="tl-4-testimony-review">{item.review}</p>

                                      <div className="tl-4-reviewer">
                                <img src={item.imgSrc} alt="User Image" className="tl-4-reviewer-img"/>

                                <div className="tl-4-reviewer-txt">
                                    <h6 className="tl-4-reviewer-name">{item.name}</h6>
                                    <span className="tl-4-reviewer-label">{item.batch}</span><br/>
                                    <span className="tl-4-reviewer-label">{item.label}</span>
                                </div>
                            </div>
                                </div>
                            ))
                        }
                      
                       
                    </Slider>
                </div>
            </div>
         </div>
         </div>
        </div>
    </section>
  )
}

export default CommerceDeptAlumni