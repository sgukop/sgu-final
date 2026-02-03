import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const PhotoGallery = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50`}>Photo Gallery</h2>

        <div className={`row ${pageStyle}-categories-row`}>
         
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/photo-gallery-academic" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">Academic</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/photo-gallery-events" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Events</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/photo-gallery-celebrations" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Celebrations</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/photoes-national-festivals" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">National Festivals</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/photoes-social-gathering" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Social Gathering</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/photoes-celebrities-sgu" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Celebrities @ SGU</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/SGU-sports" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Sports @ SGU</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <Link href="/photo-gallery-Internationalisation" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">Internationalisation@SGU</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PhotoGallery