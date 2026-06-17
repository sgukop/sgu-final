import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacyDeptStudentsForum = () => {
  return (
    <section className="sttp-container">
        <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">Students Forum</h2>
          <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-3-programs-pills">
              <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Students Forum</h2></div>
                <div className="row">
                   {/* <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67516f534b17e19d8f361e79" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Student Welfare Cell <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>  */}

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de7daf4f56d3a0bcfba9e4" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">PSA 2023 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de7e6c4f56d3a0bcfba9e9" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">PSA 2024 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de7e7d4f56d3a0bcfba9ee" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">PSA 2025 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6a0d8d4412260ec08e7c83cf" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">PSA 2026 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Student Mentorship 24-25</h2></div>
            <div className="tl-3-programs-pills">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67dcfcca4f56d3a0bcfba480" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Final Yr 25 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67dcfcd74f56d3a0bcfba485" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">First Yr 25 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67dcfce54f56d3a0bcfba48a" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Second Yr 25 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67dcfcf24f56d3a0bcfba491" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Third Yr 25 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>
             <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Student Mentorship 25-26</h2></div>
            <div className="tl-3-programs-pills">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6a1e9ccfb7ec52d9d3245116" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Final Yr 26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6a0d8c8812260ec08e7c83bb" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">First Yr 26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6a0d8c9d12260ec08e7c83c0" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Second Yr 26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6a0d8cac12260ec08e7c83c5" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Third Yr 26 <i className="fa-regular fa-arrow-right-long"></i></h5>
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

export default PharmacyDeptStudentsForum