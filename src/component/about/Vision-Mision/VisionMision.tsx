import React from "react";

const VisionMision = () => {
  return (
    <section className="tl-10-fees-section tl-fees-section p-120">
      <div className="container">
        <div className="row gy-5 align-items-center">
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
              <img src="assets/images/vision-mission/vision-mission.jpg" alt="vision and mision image" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="tl-10-tution-details d-flex">
              <div className="tl-10-single-package">
                  <div className="tl-10-single-package">
                    <h4 className="tl-10-single-package-title">VISION</h4>
                    <h6 className="vision-info">Internationally recognized university of excellence in creating and disseminating knowledge through value-based quality education leading to betterment of mankind.</h6>
                  </div>
              </div>

              <div className="tl-10-single-package tl-10-single-package-2">
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
  );
};

export default VisionMision;
