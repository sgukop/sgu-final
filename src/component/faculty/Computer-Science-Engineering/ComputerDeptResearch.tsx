'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react';
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
const ComputerDeptResearch = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Research</h2>
        <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                    <div className="tl-14-about-img">
                        <img src="assets/images/computer-science-engineering/research/research-image.png" alt="Faculty Research Image" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-14-about-txt">
                    <h6 className="tl-8-feature-title">Faculty Research Interest Groups</h6>
                        <p className="dark-mode-white-color">A Research Interest Group (RIG) is a cluster of faculty, researchers and PhD students working on a common research theme. These groups evolve over time and represent emerging areas of research strength in the department. <br/><br/> RIGs provide a forum for researchers from across disciplines, and the community to work collaboratively. They also seek funding opportunities for the purpose of conducting innovative research on specific topics.</p>
                    </div>
                </div>
            </div>

            <div className="row gy-4 align-items-center mt-30">
              <h6 className="tl-8-feature-title">Following research groups are active in department of CSE.</h6>
                <div className="col-lg-4 mt-0">
                    <div className="tl-event-details-area mt-0">
                        <h6 className="tl-8-feature-title">1. Image Processing</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li>Mr. Krishna Aldar</li>
                            <li>Ms. Priyanka Koshti</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 mt-0">
                    <div className="tl-event-details-area">
                        <h6 className="tl-8-feature-title">2. Big Data & Database Systems</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li>Mr. Sameer Tamboli</li>
                            <li>Mr. Avinash Budargade</li>
                            <li>Mrs. Hemalata Magdum</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 mt-0">
                    <div className="tl-event-details-area mt-0">
                        <h6 className="tl-8-feature-title">3. Wireless Sensor Networks</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li>Dr. Deepika Patil</li>
                            <li>Mr. Sameer Tamboli</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 mt-0">
                    <div className="tl-event-details-area">
                        <h6 className="tl-8-feature-title">4. Optimization Techniques</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li>Dr. Deepika Patil</li>
                            <li>Mr. Sameer Tamboli</li>
                            <li>Mr. Avinash Budargade</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 mt-0">
                    <div className="tl-event-details-area">
                        <h6 className="tl-8-feature-title">5. Machine Learning</h6>
                        <ul className="tl-event-details-key-content-list phd-container pb-10">
                            <li>Dr. Deepika Patil</li>
                            <li>Mr. Sameer Tamboli</li>
                            <li>Mr. Avinash Budargade</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 mt-0">
                    <div className="tl-event-details-area">
                        <h6 className="tl-8-feature-title">6. Deep Learning</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li>Dr. Deepika Patil</li>
                            <li>Mr. Sameer Tamboli</li>
                            <li>Mr. Avinash Budargade</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 mt-0">
                    <div className="tl-event-details-area">
                        <h6 className="tl-8-feature-title">7. Cyber Security</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li>Mr. Gurunath Machhale</li>
                            <li>Mr. Sameer Tamboli</li>
                            <li>Mr. Krishna Aldar</li>
                            <li>Ms. Surabhi Gaikwad</li>
                            <li>Ms. Priyanka Koshti</li>
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

export default ComputerDeptResearch
