import React from 'react'

const AcademicBhrochure = () => {
  return (
    <section className="pt-100 pb-100">
    <div className="container">
        <div className="row  align-items-center">
            <div className="col-lg-5">
                <div className="tl-13-banner-img text-center text-lg-end">
                    <img src="assets/images/academic-brochure-image/academic-brochure.jpg" alt="Banner Image" className="rounded-full" style={{border: "10px solid rgb(79, 112, 182)", padding: "10px"}}/>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="tl-13-banner-txt">
                    <h1 className="tl-13-banner-title text-[#4f70b6]">Learn Tech Embracing Technology Education Excellence</h1>
                    <p className="tl-13-banner-descr">Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.</p>
                    <div className="tl-header-actions"><a className="tl-def-btn bg-[#f26122] text-white text-semibold" href="#" target="_blank">Click here for University Brochure</a></div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AcademicBhrochure