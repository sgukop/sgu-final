import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MechanicalDeptSyllabus = () => {
  return (
    <section className="sttp-container pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Syllabus</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-3-programs-pills">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Syllabus - Academic Year 2022 - 23</h2></div>
              <div className="row">
                
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67502f094b17e19d8f361b11" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Second Year Syllabus <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67502f2d4b17e19d8f361b16" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Third Year Syllabus <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67502f434b17e19d8f361b1b" className="tl-3-single-program-new" target="_blank">
                           <h5 className="tl-3-single-program-title-new">Final Year Syllabus <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67502f584b17e19d8f361b20" className="tl-3-single-program-new" target="_blank">
                            <h5 className="tl-3-single-program-title-new">Syllabus MTech Mfg Tech.. <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Syllabus - Academic Year 2019 - 20</h2></div>
                <div className="row">
                
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67502f804b17e19d8f361b2a" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">TY B.Tech <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67502f6b4b17e19d8f361b25" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">SY B.Tech <i className="fa-regular fa-arrow-right-long"></i></h5>
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

export default MechanicalDeptSyllabus