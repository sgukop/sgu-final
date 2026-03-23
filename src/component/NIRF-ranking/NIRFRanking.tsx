import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const NIRFRanking = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>NIRF Ranking</h2>

        <div className={`row ${pageStyle}-categories-row`}>
         
              <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/NIRF-2026" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">NIRF 2026</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
              <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/NIRF-2025" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">NIRF 2025</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/NIRF-2024" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">NIRF 2024</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/NIRF-2023" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">NIRF 2023</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-6 col-xxs-12">
              <Link href="/NIRF-2022" className={`tl-3-single-program ${categoryStyle}`}>
                <h5 className="tl-3-single-program-title">NIRF 2022</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>

        </div>
      </div>
    </section>
  )
}

export default NIRFRanking