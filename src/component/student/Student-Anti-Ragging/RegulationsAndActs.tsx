import Link from "next/link";
import React from "react";

const RegulationsAndActs = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100 tl-10-about-section" >
        <div className="container">
            <h2 className="tl-9-section-title mb-50">Regulations & Acts</h2>
              <div className="row tl-event-details-row g-0">
                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12">
                            <Link href="#">
                                <h5 className="tl-3-single-program-title publication-title">UGC Regulation on Curbing the Menace of Ragging in Higher Educational Institutions, 2009 <i className="fa-regular fa-arrow-right-long"></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12">
                            <Link href="#">
                                <h5 className="tl-3-single-program-title publication-title">UGC Regulation on Curbing the Menace of Ragging in Higher Educational Institutions (First Amendment), 2012 <i className="fa-regular fa-arrow-right-long"></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12">
                            <Link href="#">
                                <h5 className="tl-3-single-program-title publication-title">UGC Regulation on Curbing the Menace of Ragging in Higher Educational Institutions (Second Amendment), 2013 <i className="fa-regular fa-arrow-right-long"></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12">
                            <Link href="#">
                                <h5 className="tl-3-single-program-title publication-title">UGC Regulation on Curbing the Menace of Ragging in Higher Educational Institutions (Third Amendment), 2016 <i className="fa-regular fa-arrow-right-long"></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12">
                            <Link href="#">
                                <h5 className="tl-3-single-program-title publication-title">Maharashtra Ani-Ragging Prevention Act 1999 <i className="fa-regular fa-arrow-right-long"></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
   )
}

export default RegulationsAndActs