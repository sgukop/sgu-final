import Link from "next/link";
import React from "react";

const TAndPSoftSkillSyllabus = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Aptitude & Soft Skill Syllabus</h2>
              <div className="row tl-event-details-row g-4 mt-50">
               
                <div className="col-lg-6 col-md-12 col-xxs-12">
                <div className="tl-11-section-heading">
                        <h2 className="tl-11-section-title">Aptitude Syllabus</h2>
                </div>
                    <div className="publications-content">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6756d2349173bf9f471abf26" target="_blank">
                            <h5 className="tl-3-single-program-title publication-title">TE Aptitude Skill <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
           

          
               <div className="col-lg-6 col-md-12 col-xxs-12">
                <div className="tl-11-section-heading">
                        <h2 className="tl-11-section-title">Soft Skill Syllabus</h2>
                </div>
                    <div className="publications-content">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6756d2689173bf9f471abf2b" target="_blank">
                            <h5 className="tl-3-single-program-title publication-title">TE Soft Skill <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-xxs-12">
                    <div className="publications-content">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6756d27d9173bf9f471abf30" target="_blank">
                            <h5 className="tl-3-single-program-title publication-title">SE Soft Skill <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-xxs-12">
                    <div className="publications-content">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6756d28d9173bf9f471abf35" target="_blank">
                            <h5 className="tl-3-single-program-title publication-title">MBA Soft Skill <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default TAndPSoftSkillSyllabus