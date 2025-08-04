import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'

const ExamRulesForDpharm = () => {
  return (
    <section className="tl-14-blogs pt-100 pb-100" data-bg-color="#F3F1F1" style={{backgroundColor:"#F3F1F1"}}>
      <div className="container">
        <h2 className="tl-9-section-title mb-50">Examination Rule D. Pharm</h2>
        <div className="row">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">D. Pharm. Examination Rules & Regulations</h2></div>
            <div className="col-lg-10 col-md-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="#">
                        <h5 className="tl-3-single-program-title publication-title">D. Pharm. Examination Rules & Regulations <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default ExamRulesForDpharm