'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const CommerceDeptActivitiesnew = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Students Activities</h2>
        <div className="row">
          <MenuList dept="Commerce" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                      <h3 className="tl-event-details-area-title">Student Clubs and Committees</h3>
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li><strong>Marketing Club : </strong>Organizes events like business fairs, branding challenges, market research projects, and ad-making competitions to hone creative and analytical skills.</li>
                                   <li><strong>Finance Club : </strong>Hosts stock market simulations, investment workshops, and finance boot camps to build expertise in financial management and analysis.</li>
                                   <li><strong>CSR Club : </strong>Engages students in community outreach, environmental sustainability initiatives, and social responsibility activities, nurturing ethical and compassionate business leaders.</li>
                                   <li><strong>Art & Culture Club : </strong>Encourages creativity and cultural appreciation through festivals, art exhibitions, and talent showcases, enhancing team-building and leadership skills.</li>
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

export default CommerceDeptActivitiesnew
