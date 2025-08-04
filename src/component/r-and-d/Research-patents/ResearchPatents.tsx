import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const ResearchPatents = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50`}>Patents & Innovations Cell</h2>

        <div className={`row ${pageStyle}-categories-row`}>
         
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/patents-aboutcell" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">About Cell</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/patents-policy" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Policy</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/patents-programs" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Programs</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/idea-of-the-month" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Idea of the Month</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/problem-of-the-month" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Problem of the Month</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/patents" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Patents</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-5 col-md-4 col-6 col-xxs-12">
              <Link href="/patents-srujan" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Srujan, Product Development Center</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ResearchPatents