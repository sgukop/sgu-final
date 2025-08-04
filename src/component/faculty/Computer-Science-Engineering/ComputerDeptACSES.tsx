import Link from 'next/link'
import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const ComputerDeptACSES = () => {
  return (
    <section className="sttp-container pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">ACSES</h2>
        <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
         {/*   <div className="tl-3-programs-pills">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Events under ACSES at Sanjay Ghodawat University</h2></div>
              <div className="row">
              <h6 className="tl-8-feature-title">Academic Year : 2019-20</h6>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   
                        <Link href="#" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">Blind Coding Compitition on 15th September 2019. <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                 
                        <Link href="#" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">Chess and Carrom Compititioin on 14th September 2019. <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>

                <div className="row mt-20">
                <h6 className="tl-8-feature-title">Academic Year : 2018-19</h6>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                   
                        <Link href="#" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">All events Conducted for AY 2018-19 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>   */}
        </div>
        </div>
        </div>
    </section>
  )
}

export default ComputerDeptACSES