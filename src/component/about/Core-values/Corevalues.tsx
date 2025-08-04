import { categoriesData } from '@/data/Data'
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const Corevalues = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>Core Values</h2>

        <div className={`row ${pageStyle}-categories-row`}>
         
            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <a href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <div className="tl-3-single-program-icon">
                <i className="fa-sharp fa-solid fa-object-group dark-mode-icon-color"></i>
                </div>
                <h5 className="tl-3-single-program-title">INTEGRITY</h5>
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <a href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <div className="tl-3-single-program-icon">
                <i className="fa-sharp fa-regular fa-window-frame dark-mode-icon-color"></i>
                </div>
                <h5 className="tl-3-single-program-title">TRANSPARENCY</h5>
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <a href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <div className="tl-3-single-program-icon">
                <i className="fa-sharp fa-solid fa-circle-dot dark-mode-icon-color"></i>
                </div>
                <h5 className="tl-3-single-program-title">ACCOUNTABILITY</h5>
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <a href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <div className="tl-3-single-program-icon">
                <i className="fa-sharp fa-solid fa-bullseye dark-mode-icon-color"></i>
                </div>
                <h5 className="tl-3-single-program-title">EQUALITY</h5>
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <a href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <div className="tl-3-single-program-icon">
                <i className="fa-sharp fa-solid fa-chart-line dark-mode-icon-color"></i>
                </div>
                <h5 className="tl-3-single-program-title">QUALITY</h5>
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <a href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <div className="tl-3-single-program-icon">
                <i className="fa-sharp fa-solid fa-bullseye dark-mode-icon-color"></i>
                </div>
                <h5 className="tl-3-single-program-title">EMPATHY</h5>
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <a href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <div className="tl-3-single-program-icon">
                <i className="fa-sharp fa-solid fa-table-cells-large dark-mode-icon-color"></i>
                </div>
                <h5 className="tl-3-single-program-title">STEWARDSHIP</h5>
              </a>
            </div>
      
        </div>
      </div>
    </section>
  )
}

export default Corevalues