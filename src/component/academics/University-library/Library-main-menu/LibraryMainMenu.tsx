import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const LibraryMainMenu = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>SGU Library</h2>

        <div className={`row ${pageStyle}-categories-row`}>
         
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-about" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">About Library</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-area-plan" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Area Plan</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-statistics" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Statistics</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-e-resources" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">E - Resources</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-services" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Library Services</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-team" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Our Team</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-activities" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Activities</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-image-gallery" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Image Gallery</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-rules-regulations" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Rules & Regulation</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-download-forms" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Download Forms</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/library-curriculum" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Curriculum</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/question-papers" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Question Papers</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/library-technical-sessions" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Orientation & Technical session</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default LibraryMainMenu