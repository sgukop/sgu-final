'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const PhysicalDeptInfra = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Academic Infrastructure</h2>
        <div className="row">
          <MenuList dept="Physics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>State-of-the - Art Classrooms</li>
                                   <li>Well equipped laboratories</li>
                                   <li>Cutting age research facilities</li>
                            </ul>
                        </div>
                  </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Instruments</h2>
            </div>


            <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/physical-sciences-dept/infrastructure/equipment/Potantiostat1.jpg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Potentiostat/Galvanostat (Metrohm Auto Lab)</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12"> 
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/physical-sciences-dept/infrastructure/equipment/GC 8860-1.jpg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">8860 GC System (Agilent)</h3>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/physical-sciences-dept/infrastructure/equipment/Hot-Air-Oven2.jpg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Hot Air Hoven (TECHNICS INDIA)</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/physical-sciences-dept/infrastructure/equipment/Muffle-Furnace1.jpg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Muffle Furnace (TECHNICS INDIA)</h3>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/physical-sciences-dept/infrastructure/equipment/Micro Balance1.jpg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Six Digit Microbalance (COUTECH)</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/physical-sciences-dept/infrastructure/equipment/DI Water Plant1.png" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">DI Water Plant (Way2Innovation Healthcare Pvt.Ltd)</h3>
                    </div>
                  </div>
         </div>   


         <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Infrastructure</h2>
            </div>


            <div className="row g-3 g-lg-4">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/physical-sciences-dept/infrastructure/equipment/GC Photo .jpeg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">8860 GC System Experiemental Setup</h3>
                    </div>
                  </div>
               
                 
                 
                 
         </div>  
        </div>
    </div>
</div>
</section>
    )
}

export default PhysicalDeptInfra
