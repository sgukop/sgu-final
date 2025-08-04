'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const BiotechDeptPlacement = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship & Placement</h2>
        <div className="row">
          <MenuList dept="Biotechnology" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-4">
               <div className="col-lg-6">
                   <div className="tl-event-details-key-content tl-event-details-area">
                   <h4 className="dark-mode-white-color mb-4 text-[#4f70b6]" style={{fontWeight:"bold"}}>Internship Count</h4>
                        <p className="dark-mode-white-color">We aim to offer a minimum of 4 internships per year with leading Biotechnology companies and research institutes.</p>
                    </div>
                </div>

                <div className="col-lg-6">
                   <div className="tl-event-details-key-content tl-event-details-area">
                   <h4 className="dark-mode-white-color mb-4 text-[#4f70b6]" style={{fontWeight:"bold"}}>Placement absorption</h4>
                        <p className="dark-mode-white-color">We are dedicated at ensuring that our students are well prepared for successful careers for which we provide 100% placement assistance.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default BiotechDeptPlacement
