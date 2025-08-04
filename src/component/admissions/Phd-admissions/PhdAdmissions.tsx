import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const PhdAdmissions = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>Ph.D Admissions 2023-24</h2>

        <div className={`row ${pageStyle}-categories-row justify-content-center`}>
         
            <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">Ph.D. Admissions Notification</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Rules and Regulations</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6 col-12 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Ph.D. Entrance Test Syllabus</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 col-12 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Application Form Ph.D. Entrance Test 2023</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Admission Calendar for Ph.D. Programs</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PhdAdmissions