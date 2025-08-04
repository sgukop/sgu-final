import Link from 'next/link';
import React from 'react'
interface CampusProps {
    style: string;
    textBg: string;
}
const CampusSection:React.FC<CampusProps> = ({style,textBg}) => {
  return (
    <section className={style}>
        <div className="row g-0">
            <div className="col-xxl-4 col-lg-3">
                <div className="tl-5-campus-img">
                    <img src="assets/images/tl-5/university3.1.jpg" alt="Students"/>
                </div>
            </div>
            <div className="col-xxl-4 col-lg-6 d-flex justify-content-center">
                <div className={`tl-4-campus-txt ${textBg}`}>
                    <h2 className="tl-5-section-title">EXPLORE SANJAY GHODAWAT UNIVERSITY.</h2>
                    <Link className="tl-def-btn" href="/admission-open" target="_self">Apply Online Now</Link>
                </div>
            </div>
            <div className="col-xxl-4 col-lg-3">
                <div className="tl-5-campus-img">
                    <img src="assets/images/tl-5/university4.1.jpg" alt="Students"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CampusSection