import React from 'react'
import Link from 'next/link'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const GeographyDeptProgrammes = () => {
  return (
  <section className="tl-8-about tl-3-section-spacing">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Programmes Offered under Department of Social Science</h2>
    <div className="row">
          <MenuList dept="Geography" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-4 align-items-center">
            <div className="col-xl-6 col-lg-6">
                <div className="tl-8-about-img">
                    <img src="assets/images/geography-dept/programmes/BA-geography.png" alt="BA Geography Programmes" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                 <h6 className="tl-8-feature-title">Bachelor of Arts in Geography (B.A. in Geography)</h6> 
                      <div className="tl-8-feature">
                          <h6 className="tl-8-feature-title mt-4">About the Program & Career Opportunities : </h6>
                            <p className="tl-8-feature-descr mt-4">The B.A. in Geography program at <strong>Sanjay Ghodawat University </strong> offers students an in-depth understanding of physical and human geographic phenomena. The program covers diverse topics, including geomorphology, climatology, urban and rural studies, and environmental geography.<br/><br/> Graduates can pursue careers in fields like urban planning, environmental management, disaster management, cartography, and geographic information systems (GIS) analysis. Additionally, they are well-prepared for roles in government, NGOs, research institutions, and private consulting firms.</p>

                            <h6 className="tl-8-feature-title mt-4">Key Features of the Program : </h6>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li><strong>Comprehensive Curriculum : </strong>Covers a wide range of topics in both physical and human geography, fostering a holistic understanding of geographic issues.</li>
                                <li><strong>Practical Exposure : </strong>Hands-on training in GIS, remote sensing, and fieldwork, bridging theory with practical applications.</li>
                                <li><strong>Skill Development : </strong>Focus on analytical, research, and spatial data interpretation skills.</li>
                                <li><strong>Research Opportunities : </strong>Access to research projects and community-based initiatives.</li>
                                <li><strong>Experienced Faculty : </strong>Learning from qualified faculty members who bring expertise and industry experience in various geographic subfields.</li>
                              </ul> 
                      </div>
                    {/*  <div className="tl-8-feature">
                        <p className="dark-mode-white-color"><strong>Duration of Course : </strong>3 Years</p>
                        <p className="dark-mode-white-color"><strong>Eligibility : </strong>12th or Equivalent Examination passed</p>
                    </div>  */}
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</section>


  )
}

export default GeographyDeptProgrammes