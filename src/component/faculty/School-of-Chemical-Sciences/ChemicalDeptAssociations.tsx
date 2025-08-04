import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ChemicalDeptAssociations = () => {
  return (
    <section className="tl-inner-courses pb-100 pt-100 bg-coffee">
      <div className="container-fluid">
        <div className="tl-2-section-heading d-flex justify-content-center" style={{ width: '100%' }}>
            <h2 className="tl-9-section-title mb-30">Associations with Institutes, Labs and Industries</h2>
        </div>
        <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-3 g-xl-4">
          
            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/associations1.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">Kolhapur</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px'}}>Sanjay Ghodawat University,Kolhapur</h4>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/associations2.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">Kolhapur</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px'}}>Sanjay Ghodawat University,Kolhapur</h4>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/north-carolina -sate-university-usa.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">USA</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px' }}>North Carolina Sate University, USA</h4>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/ICT-Mumbai.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">Mumbai</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px'}}>ICT, Mumbai</h4>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/Ncl-pune.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">Pune</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px' }}>National Chemical Laboratory, Pune</h4>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/jasons-laboratories.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">Pune</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px'}}>JASONS Laboratorie, Pune</h4>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/chonnam-university.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">South Korea</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px'}}>Chennom National University, South Korea</h4>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/IISER-Pune.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">Pune</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px'}}>DRDO and IISER Pune</h4>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="tl-1-course">
                <div className="tl-1-course-img">
                <img src="assets/images/chemical-sciences-dept/associations/callidus-laboratories.jpg" alt="Associations with Institutes Image"/>
                  <span className="tl-1-course-price">Pune</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px'}}>Callidus Laboratories, Pune</h4>
                 </div>
              </div>
            </div>
        
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default ChemicalDeptAssociations;
