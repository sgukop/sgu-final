import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const ResearchBooklet = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title text-center py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50`}>Research & Development Cell</h2>
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Booklet</h2></div>
            <div className={`row ${pageStyle}-categories-row`}>
              <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="#">
                        <h5 className="tl-3-single-program-title publication-title text-md font-semibold">Research & Development Booklet <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="#">
                        <h5 className="tl-3-single-program-title publication-title text-md font-semibold">Research & Development Booklet <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ResearchBooklet