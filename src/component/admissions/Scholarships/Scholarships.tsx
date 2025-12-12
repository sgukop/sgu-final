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
              <Link href="https://manage-api.sguk.ac.in/api/assets/693bc0ca475c25da4f1219e2" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">Merit scholarship for Technology 2025-26</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxs-12">
              <Link href="https://manage-api.sguk.ac.in/api/assets/693bc164475c25da4f1219f6" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Merit Scholarship for all school 2025-26</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
              <Link href="https://manage-api.sguk.ac.in/api/assets/693bc0a5475c25da4f1219dd" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Loyalty 2025 -26</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
              <Link href="https://manage-api.sguk.ac.in/api/assets/693bc133475c25da4f1219eb" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">SPECIAL SCHOLARSHIP 2025-26</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Scholarships