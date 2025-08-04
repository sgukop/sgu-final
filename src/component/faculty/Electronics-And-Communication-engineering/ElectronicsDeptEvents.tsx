import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ElectronicsDeptEvents = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Upcoming Events</h2>
        <div className="row">
          <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <h3 className="tl-event-details-area-title">Events</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Finishing School in VLSI and Embedded systems</li>
                                    <li>Program Verticals in Collaboration with Industry</li>
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

export default ElectronicsDeptEvents