import Link from 'next/link';
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const EligibilityCriteria = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>Eligibility Criteria for UG & PG Programmes</h2>

        <div className={`row ${pageStyle}-categories-row justify-content-center`}>
         
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
              <Link href="#" className={`tl-3-single-program ${categoryStyle}`}>
               <h5 className="tl-3-single-program-title">Click here for Eligibility Criteria for Admission</h5>
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default EligibilityCriteria