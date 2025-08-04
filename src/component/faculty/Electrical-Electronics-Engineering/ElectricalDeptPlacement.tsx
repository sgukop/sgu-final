import Link from 'next/link'
import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
const ElectricalDeptPlacement = () => {
  return (
    <section className="sttp-container">
        <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">Placement</h2>
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
            <div className="tl-3-programs-pills">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67513ac64b17e19d8f361c7c" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Placements in the year 2019-20 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67513b174b17e19d8f361c83" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Placements in the year 2018-19 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67513b324b17e19d8f361c88" className="tl-3-single-program-new" target="_blank">
                           <h5 className="tl-3-single-program-title-new">Placements in the year 2017-18 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67513b764b17e19d8f361c8f" className="tl-3-single-program-new" target="_blank">
                            <h5 className="tl-3-single-program-title-new">Placement Report of the year 2017-18 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67513b954b17e19d8f361c94" className="tl-3-single-program-new" target="_blank">
                            <h5 className="tl-3-single-program-title-new">Placements in the year 2016-17 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67513baa4b17e19d8f361c99" className="tl-3-single-program-new" target="_blank">
                            <h5 className="tl-3-single-program-title-new">Placements in the year 2015-16 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67513bbe4b17e19d8f361c9e" className="tl-3-single-program-new" target="_blank">
                            <h5 className="tl-3-single-program-title-new">Placement Report of the year 2015-16 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67513bd04b17e19d8f361ca3" className="tl-3-single-program-new" target="_blank">
                            <h5 className="tl-3-single-program-title-new">Placement in the year 2013-14 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default ElectricalDeptPlacement