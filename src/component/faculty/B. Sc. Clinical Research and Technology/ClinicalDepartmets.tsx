import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacyDepartments = () => {
  return (
    <section className="tl-1-about pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Departments</h2>
            <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Pharmaceutics</li>
                                <li>Pharmaceutical Chemistry</li>
                                <li>Pharmacognosy</li>
                                <li>Pharmacology</li>
                                <li>Pharmacy practice</li>
                                <li>Pharmaceutical Quality Assurance</li>
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

export default PharmacyDepartments