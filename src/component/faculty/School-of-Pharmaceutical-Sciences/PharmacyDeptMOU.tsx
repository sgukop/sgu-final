import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacyDeptMOU = () => {
  return (
    <section className="sttp-container">
        <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">MOU's & Professional Bodies</h2>
          <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-3-programs-pills">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">MOU's</h2></div>
                <div className="row justify-content-center">
                   <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67d3dc884f56d3a0bcfb9bd4" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">MOU With Mistair Health & Hygiene PVT.LTD., Kolhapur <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675171ab4b17e19d8f361e98" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">MOU With Ingenious Institute of Clinical Research <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675171f94b17e19d8f361e9d" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">MOU With Prof. Gadgils GPATAcademy <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Professional Bodies</h2></div>
            <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li><a href="https://ipapharma.org/" className="tl-def-btn-2" target="_blank">Indian Pharmaceutical Association (IPA)<i className="fa-regular fa-arrow-right"></i></a></li>

                                <li><a href="https://aptiindia.org/" className="tl-def-btn-2" target="_blank">Association of Pharmacy Teachers of India (APTI)<i className="fa-regular fa-arrow-right"></i></a></li>

                                <li><a href="#" className="tl-def-btn-2" target="_blank">Indian Pharmaceutical Congress(IPC)<i className="fa-regular fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default PharmacyDeptMOU