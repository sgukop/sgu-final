import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const StudentSubMenues = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50`}>
            Student
        </h2>

        <div className={`row ${pageStyle}-categories-row justify-content-center`}>
         
            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/student-council" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">Student Council</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/students-activities" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Students Activities</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/student-NSS" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">NSS/NCC</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/student-club" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Student  Clubs</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-5 col-md-4 col-6 col-xxs-12">
              <Link href="/student-alumni-association" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">SGU Alumni Association (SGUAS)</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default StudentSubMenues