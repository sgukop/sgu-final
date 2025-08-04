import Link from 'next/link'
import React from 'react'

const AlumniAssociation = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container">
            <div className="tl-14-section-heading">
                <h2 className="tl-14-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">SGU Alumni Association</h2>
            </div>
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Student Council 2021-22</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/student/sgu-alumni-association/Student_Council_21_22.jpg" alt="Achievement Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6756d8859173bf9f471abf94" target="_blank">
                            <h5 className="tl-3-single-program-title publication-title">Student Council Details <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default AlumniAssociation