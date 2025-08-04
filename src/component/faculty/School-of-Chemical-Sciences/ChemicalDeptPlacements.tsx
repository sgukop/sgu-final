'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ChemicalDeptPlacements = () => {
  return (
    <section className="tl-8-testimonial pt-100 pb-100">
        <div className="container-fluid">
            <div className="tl-8-experts-heading">
                <h2 className="tl-9-section-title mb-50">Placements</h2>
            </div>
            <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row justify-content-center position-relative">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">PLACEMENTS 2020-21</h2></div>
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
                                <img src="assets/images/chemical-sciences-dept/placement/placement1.jpg" alt="Placement image"/>
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
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default ChemicalDeptPlacements