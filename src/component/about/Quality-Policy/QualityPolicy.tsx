import React from "react";

const QualityPolicy = () => {
  return (
    <section className="vision-mision-section tl-fees-section pt-100 pb-100">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-5">
            <div className="tl-10-fees-txt">
            {/*   <img
                src="assets/images/tl-10/fees-icon.png"
                alt=""
                className="tl-10-fees-img"
  />  */}
              <h2 className="tl-section-title tl-10-fees-title">
              Quality Policy & Objective
              </h2>
              <img src="assets/images/vision-mission/vision-mission.jpg" alt="vision and mision image" />
              
            </div>
          </div>

          <div className="col-lg-7">
            <div className="tl-10-tution-details d-flex">
              <div className="tl-10-single-package">
              <h4 className="tl-10-single-package-title">QUALITY POLICY</h4>
                <h6 className="vision-info">Sanjay Ghodawat University is committed to establish high standards in value-based quality education to enhance and nurture young minds to excel in their chosen profession and develop into socially responsible citizens through resourceful collaboration, innovation and research</h6>
              </div>

              <div className="tl-10-single-package tl-10-single-package-2">
               
                <h4 className="tl-10-single-package-title">QUALITY OBJECTIVE</h4>

                <ul className="tl-10-tutions">
                  <li className="tl-10-tution-info">
                    <span className="tution-name">To develop state-of-the-art infrastructure that promotes conducive ambience promoting innovation and research</span>
                   
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">To create intellectual manpower relevant to the industry and society at large</span>
                    
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">To foster mutually beneficial partnership with alumni, industry and academia</span>
                   
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">To inculcate ethics and values to develop socially responsible citizens and promote entrepreneurship</span>
                    
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

export default QualityPolicy;
