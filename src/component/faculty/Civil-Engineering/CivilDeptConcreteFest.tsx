import Link from 'next/link'
import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const CivilDeptConcreteFest = () => {
  return (
    <section className="sttp-container pt-100 pb-100">
        <div className="container-fluid">
          <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Concrete Fest</h2>
          <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
                <div className="tl-event-details-key-content">
                   <div className="tl-3-programs-pills">
                        <div className="row">
                             <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675035414b17e19d8f361b6c" className="tl-3-single-program-new" target="_blank">
                                    <h5 className="tl-3-single-program-title-new">1. Concrete Fest 2K18 <i className="fa-regular fa-arrow-right-long"></i></h5>
                                </Link>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                                <Link href="https://manage-api.sguk.ac.in/api/assets/675035694b17e19d8f361b71" className="tl-3-single-program-new" target="_blank">
                                    <h5 className="tl-3-single-program-title-new">2. Concrete Fest 2K19 <i className="fa-regular fa-arrow-right-long"></i></h5>
                                </Link>
                            </div>
                           {/*  <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                                <Link href="#" className="tl-3-single-program-new" target="_blank">
                                    <h5 className="tl-3-single-program-title-new">3. Concrete Fest 2K22 <i className="fa-regular fa-arrow-right-long"></i></h5>
                                </Link>
                            </div>  */}
                        </div>
                    </div>
                </div>
           </div>
           </div>
           </div>
    </section>
  )
}

export default CivilDeptConcreteFest