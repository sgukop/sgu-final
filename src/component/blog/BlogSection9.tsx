'use client'
import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const BlogSection9 = () => {
    return (
        <section className="tl-13-blogs pb-60 pt-60">
            <div className="container">
                <div className="tl-13-section-heading" style={{borderBottom:'1px solid rgba(23, 22, 28, 0.14);'}}>
                    <h2 className="tl-section-title tl-10-section-title" style={{paddingBottom:'10px'}}>Latest news / Events / Announcement / Blog</h2>
                    <div className='d-flex gap-2 tl-13-blogs-slider-nav'>        <button
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
                        </button></div>
                </div>

                <Swiper
                    className="tl-13-blogs-slider owl-carousel pb-20"
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={true}
                    navigation={{
                        nextEl: '.tl-13-blogs-next',
                        prevEl: '.tl-13-blogs-prev'
                    }}
                    modules={[Autoplay, Navigation]}
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
                    {blogList.slice(0, 10).map((item) => (
                        <SwiperSlide className="tl-9-class tl-13-event tl-13-course" key={item.id}>
                            <span className="tl-9-class-tag">{item.category}</span>
                            <img src={item.imgSrc} alt="class image" className="tl-9-class-img" />
                            <div className="tl-9-class-infos">
                                <span className="tl-9-class-category">{item.date}</span>
                            </div>
                            <h3 className="tl-13-course-title">
                                {item.slug ? (
                                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                                ) : (
                                    item.title
                                )}
                            </h3>
                            <p className="tl-single-blog-descr tl-10-single-blog-descr">{item.desc.slice(0, 80)}...</p>
                            {item.slug ? (
                                <Link className="tl-single-blog-btn tl-10-single-blog-btn" href={`/blog/${item.slug}`} target="_blank">Read More <i className="fa-regular fa-arrow-right"></i></Link>
                            ) : (
                                <span className="tl-single-blog-btn tl-10-single-blog-btn">Read More <i className="fa-regular fa-arrow-right"></i></span>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BlogSection9