'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ComputerDeptProfessional = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Professional Bodies</h2>
        <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                    <h3 className="tl-event-details-area-title">Computer Society of India</h3>
                          <p className="dark-mode-white-color mt-30">The seed for the Computer Society of India (CSI) was first shown in the year 1965 with a handful of IT enthusiasts who were a computer user group and felt the need to organize their activities. They also wanted to share their knowledge and exchange ideas on what they felt were a fast emerging sector. Today the CSI takes pride in being the largest and most professionally managed association of and for IT professionals in India. The purposes of the Society are scientific and educational directed towards the advancement of the theory and practice of computer science and IT. <br/><br/> CSI works towards making the profession an area of choice amongst all sections of the society. The promotion of Information Technology as a profession is the top priority of CSI today.<br/> To fulfill this objective, the CSI regularly organizes conferences, conventions, lectures, projects, and awards. And at the same time it also ensures that regular training and skill updating are organized for the IT professionals. We registered under Pune Chapter with <strong>Institutional Membership Number M11026.</strong></p>
                        </div>
                  </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default ComputerDeptProfessional
