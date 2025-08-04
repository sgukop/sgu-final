import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'

const PublicationsHighlights = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Publication Highlights:</h2></div>
            <div className="col-lg-6 col-md-6 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="#">
                        <h5 className="tl-3-single-program-title publication-title">Research Publications <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default PublicationsHighlights