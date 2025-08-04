import Link from "next/link";
import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const CommerceDeptPublications = () => {
   return(
    <div className="pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Research and Publications</h2>
        <div className="row">
          <MenuList dept="Commerce" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">

            <div className="col-lg-12">
                  <div className="tl-event-details-left">
                       <h3 className="tl-event-details-area-title">2022-23</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li> Mr. Patil A. & Jadhav P.S. (2022), Factors affecting performance of power loom industry in Maharashtra- A review of literature, Study in Indian Place names, 40, 138.</li>
                                <li>Pendnekar G. (2022), IGSREM, A Study on passenger perception about road transport with special reference to Kolhapur District,6,1.</li>
                                <li>Patil A. (2022), A socio economic assessment of Pradhan Mantri Ujwala yojana.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                      <h3 className="tl-event-details-area-title">2020-21</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Petare P. & Mohite P. V. (2020), A review on a study of internet utilisation and its impact on academic activities of faculty members.</li>
                                <li>Patil A. & Gramopadhye V. (2020), A study of Women SHGS and their social economic impact in and around Kolhapur city.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <h3 className="tl-event-details-area-title">2019-20</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Petare P. & Tamhane K. N. (2019), A Study on Online Shopping Behaviour through mobile applications in Kolhapur City, International Journal for Research in Engineering Application and Management (IJREAM), 69.</li>
                                    <li>Petare P. (2019), Reinforcement of small-scale industries in Western Maharashtra: A step towards sustainable development.</li>
                                    <li>Giri Y. L. & Petare P. (2019), An analytical and comparative study on valuation of shares of selected banks from banking industry.</li>
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

export default CommerceDeptPublications