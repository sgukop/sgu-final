import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const CivilDeptDownloads = () => {
  return (
    <section>
    <div className="container-fluid mt-50">
    <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gy-5 align-items-center">
        <div className="col-lg-5">
                <div className="tl-13-banner-img text-center text-lg-end">
                    <img src="assets/images/civil-engineering-dept/download-brochure/brochure.jpg" alt="Banner Image"/>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="tl-13-banner-txt">
                    <h1 className="tl-13-banner-title">Learn Tech Embracing Technology Education Excellence.</h1>
                    <p className="tl-13-banner-descr">To be the centre of excellence in education and research in the field of Aeronautical Engineering.</p>
                    <div className="tl-header-actions"><a className="tl-def-btn bg-[#f26122] text-white" href="#" target="_blank">Civil Engineering Brochure</a></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  )
}

export default CivilDeptDownloads