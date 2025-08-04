'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link';
import React from 'react'
import AdmissionOpenForm from '../form/AdmissionOpenForm';
import AdmissionFormNew from '../admissions/AdmissionFormNew';

const BannerSection9 = () => {
    const {openVideoModal} = useTalimContext();
  return (
    <section className="tl-banner">
        <div className="container">
            <div className="row gy-5">
                <div className="col-md-12 col-lg-8 col-sm-12 col-12">
                    <div className="tl-banner-txt">
                        <h1 className="tl-banner-title">Let's Build Your Future With <span className="last-word">SGU</span>.</h1>
                        <p className="tl-banner-short-descr">Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.</p>
                        {/* <a href="https://www.sanjayghodawatuniversity.ac.in/admission-enquiry.php" target="_blank" className="tl-def-btn">More details <i className="fa-regular fa-arrow-right-long"></i></a> */}
                        <Link href="/more-details" target="_self" className="tl-def-btn">More details <i className="fa-regular fa-arrow-right-long"></i></Link>
                    </div>
                   
                </div>

                <div className="col-md-12 col-sm-12 col-12 col-lg-4 d-flex align-items-center justify-content-center justify-content-md-end">
                    <div className="tl-banner-video">
                        <a className="tl-banner-video-btn" role="button" onClick={() => openVideoModal("https://www.youtube.com/embed/urCL3rdQ5gA")}>
                            <i className="fa-solid fa-sharp fa-play"></i>
                            <svg className="eltdf-svg-circle">
                                <circle cx="50%" cy="50%" r="50%"></circle>
                            </svg>
                        </a>
                       
                    </div>
                   {/*  <AdmissionOpenForm style=''/>  */}
                    
                </div>
            </div>
        </div>
       

        <div className="tl-banner-cards">
            <div className="row g-0 align-items-end">
                <div className="col-md-3 col-6 col-xxs-12">
                    <div className="tl-banner-single-card">
                        <h5 className="single-card-title">Admission Enquiry 2024-2025</h5>
                        <Link href="/admission-open" target="_self" className="single-card-action">Learn more <i className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-md-3 col-6 col-xxs-12">
                    <div className="tl-banner-single-card tl-banner-single-card-2">
                        <h5 className="single-card-title">For Admission </h5>
                        <Link href="/admission-open" target="_self" className="single-card-action">Learn more <i className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-md-3 col-6 col-xxs-12">
                    <div className="tl-banner-single-card tl-banner-single-card-3">
                        <h5 className="single-card-title">Download Catalogue </h5>
                        <Link href="#" target="_self" className="single-card-action">Learn more <i className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-md-3 col-6 col-xxs-12">
                    <div className="tl-banner-single-card tl-banner-single-card-4">
                        <h5 className="single-card-title">More About SGU</h5>
                        <Link href="/about-university" target="_self" className="single-card-action">Learn more <i className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection9