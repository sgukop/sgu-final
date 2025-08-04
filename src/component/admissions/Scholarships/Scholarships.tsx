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
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">Merit scholarship for Technology 2024-25</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Merit Scholarship for all school 2024-25</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Loyalty 2024 -25</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Scholarships