'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const BiotechDeptAlumni = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Alumni</h2>
        <div className="row">
          <MenuList dept="Biotechnology" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                    <p className="dark-mode-white-color">As a newly established School of Biotechnology, we aspire to cultivate a future community of accomplished  alumni who will excel as researchers and leaders in the field of Biotechnology. Our vision is to empower students with the knowledge skills, and opportunities necessary to make meaningful contributions to the field of Biotechnology and its advancements.  <br/><br/>
                        While our alumni journey is just beginning, we are committed to building a strong foundation that fosters lifelong connections, mentorship, and professional growth. Together, our future graduates will shape a legacy of excellence and create an impact on a global scale.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default BiotechDeptAlumni
