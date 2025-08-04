'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ChemicalProfessionalBOdies = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title">Professional Bodies</h2>
        <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                   <p className="dark-mode-white-color my-4"><strong>Dr. Pallavi Bhange</strong></p>
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>Dr. Pallavi Bhange, member of Maharashtra Academy of Science.</li>
                                   <li>Member-Australia India Critical Minerals Research Hub</li>
                            </ul>
                        </div>
                  </div>

                  <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                   <p className="dark-mode-white-color my-4"><strong>Dr. Aanand Sawant</strong></p>
                    <p>Association with other Universities / Professional Bodies / Industries / NGO etc</p>
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>Member-Association of Environmental Analytical Chemistry of India (AEACI), BARC, Mumbai.</li>
                                   <li>Member-American Chemical Society (Number 31823388) </li>
                                   <li>Affiliate Member-Royal Society of Chemistry (Number 697458) </li>
                                   <li>Member-Australia India Critical Minerals Research Hub </li>
                                   <li>Member- CO2INDIA Network</li>
                            </ul>
                        </div>
                  </div>

                  <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                   <p className="dark-mode-white-color my-4"><strong>Dr. Monika S. Chavan</strong></p>
                        <ul className="tl-event-details-key-content-list phd-container">
                                   <li>Mentor, Standards Club (SC-350), BIS, Pune.</li>
                                   <li>ACS (American Chemical Society) chemistry for life community member (Membership number: 32691583) 2021.</li>
                          </ul>
                        </div>
                  </div>

                  <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                   <p className="dark-mode-white-color my-4"><strong>Sonali Suryawanshi</strong></p>
                    <p>Association with other Universities / Professional Bodies / Industries / NGO etc</p>
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>ACS (American Chemical Society) chemistry for life community member (Membership number: 32691583) 2021. </li>
                                   <li>The Indian Carbon Society, Life membership (LM 659)</li>
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

export default ChemicalProfessionalBOdies
