import React from 'react'
import Industries from './Industries'


const IndustryCollaborations = () => {
  return (
  <section className="tl-8-about pt-100">
    <div className="container">
    <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Academic Partners & Industry Collaborations</h2>
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/academic-excellence/academic-collaborations.jpg" className="rounded-full w-full h-full" style={{border: "15px solid rgb(79, 112, 182)", padding:"20px"}} alt="Industry Collaborations"/>
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                    <div className="tl-8-features">
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr">The Sanjay Ghodawat University has established MOUs and functional relations with many Institutions and Industries with agreement of supporting student exchange, exchange of scholarly ideas / expertise and research, the support of specific discipline interaction; the development of programs to include student exchange.</p>
                        
                          <h6 className="tl-8-feature-title mt-30 text-[#4f70b6]">Competency Center Being Established For Conducting Practicals</h6>
                          <ul className="tl-event-details-key-content-list phd-container mt-30">
                                <li>Technology Center</li>
                                <li>Advanced Learning Center</li>
                                <li>Innovation Center</li>
                                <li>Teardown and Benchmarking Center</li>
                                <li>Visualization Center</li>
                                <li>Advanced Manufacturing Center/Robotics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        
    </div>
    <Industries/>
</section>
)
}

export default IndustryCollaborations