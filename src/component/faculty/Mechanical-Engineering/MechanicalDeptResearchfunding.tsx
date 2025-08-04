import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MechanicalDeptResearchfunding = () => {
  return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Research Funding</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
             <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title">Research Funding Proposal Submitted / Sanctioned</h2>
            </div>
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                    <div className="tl-event-details-area-new flex flex-col h-full">
                      <div className="patents-container">
                            <span className="patents-title"><strong>Faculty Name (PI / Co-PI) : </strong></span>
                            <span className="patents-title-contents">PI -Dr. V. V. Kulkarni COPIs - Dr. N. K. Patil and Dr. S. M. Shiyekar</span>
                        </div>

                        <div className="patents-container">
                            <span className="patents-title"><strong>Funding Proposal Title : </strong></span>
                            <span className="patents-title-contents">Device for measuring reaction of beam using <br/>floating bracket assembly</span>
                        </div>

                        <div className="patents-container">
                            <span className="patents-title"><strong>Funding Agency : </strong></span>
                            <span className="patents-title-contents">DRDO</span>
                        </div>

                        <div className="patents-container">
                            <span className="patents-title"><strong>Total Amount : </strong></span>
                            <span className="patents-title-contents">26.80 Lakh</span>
                        </div>

                        <div className="patents-container">
                              <span className="patents-title"><strong>Status : </strong></span>
                              <span className="patents-title-contents">On-going</span>
                        </div>
                        <div className="patents-container">
                              <span className="patents-title"><strong>Funding Agency Type : </strong></span>
                              <span className="patents-title-contents">Government</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tl-event-details-area-new flex flex-col h-full">
                      <div className="patents-container">
                            <span className="patents-title"><strong>Faculty Name (PI / Co-PI) : </strong></span>
                            <span className="patents-title-contents">PI - Mr. N. S. Desai</span>
                        </div>

                        <div className="patents-container">
                            <span className="patents-title"><strong>Funding Proposal Title : </strong></span>
                            <span className="patents-title-contents">Low Energy Earth Pipe Cooling Novel Technology for providing thermal comfort in a building of Sanjay Ghodawat University, Maharashtra, India.</span>
                        </div>

                        <div className="patents-container">
                            <span className="patents-title"><strong>Funding Agency : </strong></span>
                            <span className="patents-title-contents">ISPG- ISHRAE</span>
                        </div>

                        <div className="patents-container">
                            <span className="patents-title"><strong>Total Amount : </strong></span>
                            <span className="patents-title-contents">44,000/-</span>
                        </div>

                        <div className="patents-container">
                              <span className="patents-title"><strong>Status : </strong></span>
                              <span className="patents-title-contents">On-going</span>
                        </div>
                        <div className="patents-container">
                              <span className="patents-title"><strong>Funding Agency Type : </strong></span>
                              <span className="patents-title-contents">--</span>
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

export default MechanicalDeptResearchfunding