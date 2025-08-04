import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const ElectricalDeptTestimonials = () => {
  return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Student Testinomials</h2>
            <div className="row">
          <MenuList
            dept="Electrical & Electronics Engineering"
            subMenu={NavLinks}
          />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
                <div className="row gy-4 align-items-center">
                   <div className="col-lg-6">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/x-mJ_pS6D9Q?rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>

                    <div className="col-lg-6">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/HqwP5kNroCw?rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </section>  

  )
}

export default ElectricalDeptTestimonials