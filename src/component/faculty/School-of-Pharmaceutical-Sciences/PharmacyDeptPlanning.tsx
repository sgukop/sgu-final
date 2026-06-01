import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacytDeptPlanning = () => {
  return (
    <section className="sttp-container pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Academic Planning</h2>
        <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-3-programs-pills">

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Academic Calendar EVEN Semester 2024-25</h2></div>
                <div className="row">
               
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6a0d8fdb12260ec08e7c8404" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Academic Calendar 2026-27  <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6a0d8ffa12260ec08e7c8409" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Academic Calendar 2025-26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67dcfef84f56d3a0bcfba4b1" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Academic Calendar 2024-25 Odd Sem <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67dcfeea4f56d3a0bcfba4ac" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Academic Calendar 2024-25 Even Sem <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Academic Calendar ODD Semester 2023-24</h2></div>
              <div className="row">
               
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6751701b4b17e19d8f361e85" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Academic Calendar 2023-24 Odd Semester <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67516fe34b17e19d8f361e80" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Academic Calendar 2023-24 Even Sem <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>

              {/* <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Academic Calendar EVEN Semester 2023-24</h2></div>
                <div className="row">
               
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67516fe34b17e19d8f361e80" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Academic Calendar 2023-24 Even Sem <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>  */}
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default PharmacytDeptPlanning