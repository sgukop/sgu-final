'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../../Reusable-components/MenuList';

const MLTDeptInfrastructure = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title">Academic Infrastructure</h2>
        <div className="row">
          <MenuList dept="Allied Health Sciences" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content tl-event-details-area">
                           <ul className="tl-event-details-key-content-list phd-container mt-30">
                            <p className="dark-mode-white-color">The department has 3 lecture halls, 2 dedicated labs with high-end instruments like : </p>
                                   <li>Bioanalyzer</li>
                                   <li>Laminar air flow</li>
                                   <li>Needle shredder</li>
                                   <li>Microscopes</li>
                                   <li>Colorimeter</li>
                                   <li>Autoclave</li>
                                   <li>Digital Balance, etc.</li>
                            </ul>
                        </div>
                  </div>
                </div>
                  {/* ---------- IMAGES GRID ---------- */}
                  <div className="row g-3 g-lg-4">

                    {/* CARD 1 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/Infrastructure/1.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Instruments in the Laboratory</h3>
                      </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/Infrastructure/2.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">MLT Laboratory</h3>
                      </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/Infrastructure/3.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Microbiology Laboratory</h3>
                      </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/Infrastructure/4.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Instrumentation room</h3>
                      </div>
                    </div>

                   
                    </div>

                  </div>
                  {/* ---------- END IMAGES GRID ---------- */}

                </div>
              </div>
            </div>
        
    

</section>
    )
}

export default MLTDeptInfrastructure
