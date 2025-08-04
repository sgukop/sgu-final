import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const InfrastructureSubMenues = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50"`}>
            Infrastructure
        </h2>

        <div className={`row ${pageStyle}-categories-row`}>
         
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">Campus Images</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Various Classrooms</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Laboratories</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">CoE</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Library</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Sports Infrastructure</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Food Court</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Hostel</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Transport</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Recreational Facilities</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Gymnasium</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Medical Facilities</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Water Filter</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Solar</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">HTP</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
           
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Rain water harvesting</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Marts</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">ATM/Bank</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
      </div>
    </section>
  )
}

export default InfrastructureSubMenues