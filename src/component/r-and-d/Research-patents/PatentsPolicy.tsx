import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const PatentsPolicy = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title text-center py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50`}>IPR Policy</h2>
            <div className={`row ${pageStyle}-categories-row`}>
        
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67b2fd924f56d3a0bcfb7a41" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title text-md font-semibold">Click Here for SGU IPR Policy <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47c7b4f56d3a0bcfb6878.pdf" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title text-md font-semibold">Click Here for National IPR Policy <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://1xltest.s3.ap-south-1.amazonaws.com/sguassets/67a47c8d4f56d3a0bcfb687f.pdf" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title text-md font-semibold">Click Here for Invention Disclosure Form (IDF) <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PatentsPolicy