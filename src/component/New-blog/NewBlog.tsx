import Link from "next/link";
import React from "react";

const Blogs = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container">
            <h2 className="tl-9-section-title mb-50">Blog</h2>
              <div className="row tl-event-details-row g-0">
                <div className="examination-container">
                    <div className="row tl-event-details-row g-2">
                        <div className="col-lg-10 mb-0">
                            <h6 className="exam-title mb-0">SANJAY GHODAWAT UNIVERSITY - MANAGEMENT-2022</h6> 
                        </div>

                        <div className="col-lg-2">
                            <h4 className="exam-download-icon"><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/69c0da01eb0b0a6998c15ab4"><i className="fa-regular fa-down-to-bracket"></i></Link></h4> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Blogs