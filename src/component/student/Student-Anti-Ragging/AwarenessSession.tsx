import Link from "next/link";
import React from "react";

const AwarenessSession = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container">
            <h2 className="tl-9-section-title mb-50">Anti-Ragging Awareness Session</h2>
              <div className="row tl-event-details-row g-0">
                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12">
                            <Link href="#">
                                <h5 className="tl-3-single-program-title publication-title">Anti-Ragging Awareness Session AY 2018-19 <i className="fa-regular fa-arrow-right-long"></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12">
                            <Link href="#">
                                <h5 className="tl-3-single-program-title publication-title">Anti-Ragging Awareness Session AY 2020-21 <i className="fa-regular fa-arrow-right-long"></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-12">
                            <Link href="#">
                                <h5 className="tl-3-single-program-title publication-title">Anti-Ragging Awareness Session AY 2021-22 <i className="fa-regular fa-arrow-right-long"></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default AwarenessSession