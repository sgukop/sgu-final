import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const Awards = () => {
  return (
    <section className="tl-14-blogs award-container pt-100 pb-100" data-bg-color="#F3F1F1">
    <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Awards and Accolades</h2>

        <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">SGU Awarded All India 4th Rank for Top Emerging Engineering Institute by Times Engineering Survey-2021.</h4>
                  </div>
                </div>
            </div>  

            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">SGU Awarded All India 5th Rank for Emerging Engineering Institute : Placement by Times Engineering Survey-2021.</h4>
                  </div>
                </div>
            </div>  

            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">SGU Awarded All India 2nd Rank for Emerging Engineering Institute : Research Capability by Times Engineering Survey-2021.</h4>
                  </div>
                </div>
            </div>  

            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">SGU Awarded for Top Emerging Private University of India by Times B-School Survey-2020.</h4>
                  </div>
                </div>
            </div>  

            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title mb-55">SGU Awarded for Best Emerging Private University of Maharashtra by Navbharat times at Nagpur</h4>
                  </div>
                </div>
            </div> 
            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">SGU is Recognised in the band "PROMISSING" under the category "University & Deemed to be University (Private / Self Financed)(Technical)" in Atal Ranking Institutions on Innovation Achievement (ARIIA) 2021.</h4>
                  </div>
                </div>
            </div>  
        </div>
    </div>
</section>
  )
}

export default Awards