import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const Scholarships = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>Scholarships</h2>

        <div className={`row ${pageStyle}-categories-row justify-content-center`}>
         
            <div className="col-lg-6 col-md-6 col-12 col-xxs-12">
              <Link href="https://manage-api.sguk.ac.in/api/assets/69d898ee86adebb75e5b9a48" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">Technology merit scholarship 2026-27</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxs-12">
              <Link href="https://manage-api.sguk.ac.in/api/assets/69d8988486adebb75e5b9a3e" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Merit Scholarship 2026-27 for All Schools</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
              <Link href="https://manage-api.sguk.ac.in/api/assets/69d8985786adebb75e5b9a39" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Loyalty Scholarship 2026-27</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
              <Link href="https://manage-api.sguk.ac.in/api/assets/69d898bb86adebb75e5b9a43" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Special Scholarship for Pharmacy program 2026-27</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Scholarships