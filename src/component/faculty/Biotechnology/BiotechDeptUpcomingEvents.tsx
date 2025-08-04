'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const BiotechDeptUpcomingEvents = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Upcoming Events</h2>
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
                        <ul className="tl-event-details-key-content-list phd-container">
                                <li>Hands on workshop on biotechnology tools</li>
                                <li>Guest lecture series</li>
                                <li>Biotechnology forums</li>
                            </ul>
                        </div>
                  </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default BiotechDeptUpcomingEvents
