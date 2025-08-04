import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const PhysicalDeptEducationalObjectives = () => {
  return (
    <div className="pt-100 pb-100">
    <div className="container-fluid">
        <div className="row">
            <h2 className="tl-9-section-title mb-50">Educational Objectives</h2>
            <div className="row">
          <MenuList dept="Physics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list">
                                   <li>To learn and adopt innovative teaching-learning techniques.</li>
                                   <li>To provide ambient atmosphere and infrastructure for effective teaching-learning processes.</li>
                                   <li>To foster the collaborations with national and international research institutes and Universities.</li>
                                   <li>To generate research funds for strengthening research infrastructure.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default PhysicalDeptEducationalObjectives