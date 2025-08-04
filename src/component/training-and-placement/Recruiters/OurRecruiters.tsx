'use client'
import React from 'react'
import Slider from 'react-slick';
import RecruitersTechnology from './RecruitersTechnology';
import RecruitersManagement from './RecruitersManagement';
import RecruitersSciencePharmacy from './RecruitersSciencePharmacy';
interface AboutProps{
   margin: string;
}
const OurRecruiters:React.FC<AboutProps> = ({margin}) => {
   return (
    <>
    <section className={`tl-7-about`} style={{paddingBottom:'50px',paddingTop:"100px"}}>
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Our Recruiters - Technology</h2>
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Packages offered by Recruiters -</h2></div>
            <h6 className="tl-13-about-sub-title-new mr-20">Highest Package : 36 LPA</h6>
            <h6 className="tl-13-about-sub-title-new">Average Package : 3.80 LPA</h6>
                <div className="row g-0 align-items-center">
                    <div className="col-lg-12">
                       < RecruitersTechnology />
                    </div>
                </div>
        </div>
    </section>

    <section className={`tl-7-about`} style={{paddingBottom:'60px'}}>
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Our Recruiters - Commerce and Management</h2>
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Packages offered by Recruiters -</h2></div>
            <h6 className="tl-13-about-sub-title-new mr-20">Highest Package : 12 LPA</h6>
            <h6 className="tl-13-about-sub-title-new">Average Package : 4.25 LPA</h6>
                <div className="row g-0 align-items-center">
                    <div className="col-lg-12">
                        <RecruitersManagement />
                    </div>
                </div>
            </div>
    </section>

    <section className={`tl-7-about`} style={{paddingBottom:'60px'}}>
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Our Recruiters - Science & Pharmacy</h2>
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Packages offered by Recruiters -</h2></div>
            <h6 className="tl-13-about-sub-title-new mr-20">Highest Package : 4.60 LPA</h6>
            <h6 className="tl-13-about-sub-title-new">Average Package : 3.00 LPA</h6>
                <div className="row g-0 align-items-center">
                    <div className="col-lg-12">
                       <RecruitersSciencePharmacy />
                    </div>
                </div>
        </div>
    </section>
    </>
  )
}

export default OurRecruiters