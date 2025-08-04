'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const LawDeptInfrastrcuture = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Academic Infrastructure</h2>
        <div className="row">
          <MenuList dept="School of Legal Studies(Law)" subMenu={NavLinks} />
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
                            <p className="dark-mode-white-color">State-of-the-art classrooms, a well-stocked law library with extensive legal resources, advanced research facilities, dedicated moot courtrooms for practical training, and modern technology to support comprehensive legal education.</p>
                        </div>
                  </div>
                </div>
            </div>

            <div className="row g-3 g-lg-4">
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/law-dept/academic-infrastructure/infra-1.jpeg" alt="Academic Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Modern Learning Environment </h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/law-dept/academic-infrastructure/infra-3.jpeg" alt="Academic Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Experience the Courtroom in Action  </h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/law-dept/academic-infrastructure/infra-5.jpeg" alt="Academic Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Library/E-Library</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/law-dept/academic-infrastructure/infra-4.jpeg" alt="Academic Infrastructure Image"/></figure>
                        </div>
                       
                    </div>
                  </div>
            </div> 
        </div>
    </div>
</div>
</section>
    )
}

export default LawDeptInfrastrcuture
