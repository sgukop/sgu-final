'use client'
import { useTalimContext } from '@/context/TalimContext';
import React from 'react'

const AboutSGGroup = () => {
    const {openVideoModal} = useTalimContext() 
  return (
    <section className="tl-13-about pt-100 pb-100">
        <div className="container">
            <div className="row gx-0 gy-4 gy-md-5 align-items-center justify-content-between">
                <div className="col-xxl-6 col-lg-6">
                    <div className="w-full">
                        <img src="assets/images/about-us/sggroup-new.png" alt="About SGG Image" className="rounded-full w-full h-full w-fit about-sgg-image" style={{border:"30px solid #4f70b6",padding:"20px"}}/>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div>
                        <h2 className="tl-13-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white">Sanjay Ghodawat Group</h2>
                        <p className="tl-13-about-descr">Sanjay Ghodawat Group is a popular conglomerate that spans its products and services from Salt to Airlines in various sectors. It was commenced in the decade of 90s by the Chairman of the Group, Hon. Sanjay Ghodawat who himself is a Mechanical Engineer, Trained and certified pilot, Educational Entrepreneur and Industrialist. The Group today boasts of a strength of more than 10,000 employees under its aegis. Consumer Goods, Real Estate, Floriculture, Wind Turbines, Energy, Education, Airlines, Marble Mining, Textiles, Beverages, Softech etc are some of its verticals that the Group has forayed into. Enhancing Lives Globally is its maxim and true to its philosophy the Group is focussed on bettering and enhancement of human lives through its products and services.</p>
                        <a href="https://www.ghodawat.com/" target="_blank" className="tl-13-about-btn">www.ghodawat.com <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
</section>
  )
}

export default AboutSGGroup