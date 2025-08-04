'use client'
import { sguhighlightdata } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SguHighlights = () => {
  return (
    <section className="tl-13-blogs pb-50 pt-50">
        <div className="container">
            <div className="tl-13-section-heading">
                <h2 className="tl-13-section-title">SGU <span className="last-word">Highlights</span></h2>
                <div className="tl-13-blogs-slider-nav">
                <button 
                type="button" 
                role="presentation" 
                className="tl-13-blogs-prev">
                    <i className="fa-light fa-arrow-left"></i>
                </button>
                <button 
                type="button" 
                role="presentation" 
                className="tl-13-blogs-next"
                > 
                    <i className="fa-light fa-arrow-right"></i>
                </button>
                </div>
            </div>

            <Swiper 
            className="tl-13-blogs-slider owl-carousel"
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={true}
            navigation={{
                nextEl: '.tl-13-blogs-next',
                prevEl: '.tl-13-blogs-prev'
             }}
            modules={[Autoplay,Navigation]}
            breakpoints={{
                0: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1.3,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                1200: {
                    spaceBetween: 25,
                },
                1400: {
                    spaceBetween: 30,
                }
            }}
            >
                {sguhighlightdata.slice(0,6).map((item) => (
                 <SwiperSlide className="tl-9-class tl-13-course" key={item.id}>
                    <img src={item.imgSrc} alt="class image" className="tl-9-class-img"/>
                     <h3 className="tl-13-course-title"><Link href={item.slug} target="_blank">{item.title}</Link></h3>
                    <Link href={item.slug} target="_blank" className="tl-9-program-btn"><i className="fa-regular fa-arrow-right-long"></i></Link>
                </SwiperSlide>   
                ))}
                
            </Swiper>
        </div>
    </section>
  )
}

export default SguHighlights