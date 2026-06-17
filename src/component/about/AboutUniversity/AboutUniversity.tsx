import React from 'react'

const AboutUniversity = () => {
  return (
    <section className="tl-4-about tl-3-section-spacing">
        <div className="container">
            <div className="row gy-4 gy-sm-5 align-items-center">
                <div className="col-lg-6 col-12">
                  <div className="gallery">
                        <img src="assets/images/about-university/image1.jpg" alt="University Image" />
                        <img src="assets/images/about-university/image2.jpg" alt="University Image" />
                        <img src="assets/images/about-university/image3.jpg" alt="University Image" />
                        <img src="assets/images/about-university/image4.jpg" alt="University Image" />
                    </div>
                </div> 

                <div className="col-lg-6 col-sm-6 col-12">
                    <div className="pl-8">
                        <h2 className="tl-4-section-title-new py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white">Sanjay Ghodawat University</h2>
                        <p className="tl-4-about-descr">Sanjay Ghodawat University was established as a State Private University in the year 2017. Previously it was Sanjay Ghodawat Institute formed in the year 2009 by the Chairman of SG Group, Sanjay Ghodawat. The Institute had received NAAC A grade and also its programs were accredited by NBA and after this the natural progression was the evolvement of Sanjay Ghodawat University.</p>
                    </div>
                </div>
            </div>
          {/*   <div className="tl-1-stats">
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">4k+</span>
                    <h6 className="tl-1-stat-name">Students</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">500+</span>
                    <h6 className="tl-1-stat-name">Personnel</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">100+</span>
                    <h6 className="tl-1-stat-name" style={{right:"18px"}}>Industry Collaborations</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">15k+</span>
                    <h6 className="tl-1-stat-name">Alumni's</h6>
                </div>
            </div>  */}

            <div className="row gy-5 align-items-center mt-50">
          <div className="col-lg-5">
            <div className="tl-10-fees-txt">
             {/*  <img
                src="assets/images/tl-10/fees-icon.png"
                alt=""
                className="tl-10-fees-img"
              />  */}
             <h2 className="tl-section-title tl-10-fees-title">
              Vision and <span className="last-word">Mission</span>
              </h2>
              
              <img src="assets/images/about-university/image2.jpg" alt="vision and mision image" className="rounded-full w-full h-[500px] w-fit" style={{border: "10px solid rgb(79, 112, 182)", padding: "20px"}}/>
              
            </div>
          </div>

          <div className="col-lg-7">
            <div className="tl-10-tution-details d-flex">
              <div className="bg-[#4f70b6] p-10 text-white rounded-[5%]">
                 <h4 className="tl-10-single-package-title">VISION</h4>
                  <h6 className="vision-info">Internationally recognized university of excellence in creating and disseminating knowledge through value-based quality education leading to betterment of mankind.</h6>
              </div>

              <div className="bg-[#f26122] p-10 text-white rounded-[5%]">
                <h4 className="tl-10-single-package-title">MISSION</h4>

                <ul className="tl-10-tutions">
                <li className="tl-10-tution-info">
                    <span className="tution-name">To prepare students for life-long learning and leadership in a global academic culture</span>
                   
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">To create intellectual manpower relevant to the industry and society at large</span>
                    
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">To collaborate with institutions of international repute for academic excellence</span>
                   
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">To promote research and development through conducive environment</span>
                    
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">To encourage entrepreneurship and skill development programs</span>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default AboutUniversity