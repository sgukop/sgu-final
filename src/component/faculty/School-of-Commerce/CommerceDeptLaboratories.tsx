import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const CommerceDeptLaboratories = () => {
  return (
    <>
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
            <div className="tl-9-section-heading">
                <div className="row gy-4 align-items-center">
                    <div className="col-md-12">
                        <h2 className="universityobject-heading dark-mode-white-color">Academic Infrastructure</h2>
                    </div>
                </div>
            </div>
           
        <div className="row">
          <MenuList dept="Commerce" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
          <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/laboratories/computer-lab1.png" alt="Academic Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Computer Lab No. 1</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/laboratories/computer-lab2.png" alt="Academic Infrastructure Image" /></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Computer Lab No. 2</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/laboratories/classroom1.png" alt="Academic Infrastructure Image" /></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">ICT Enable Classroom</h3>
                    </div>
                  </div>

                 {/* <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/laboratories/classroom2.png" alt="Academic Infrastructure Image" /></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Classrooms</h3>
                    </div>
                  </div>  */}

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/laboratories/smartroom.png" alt="Academic Infrastructure Image" /></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Smart Classrooms</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/laboratories/auditorium.png" alt="Academic Infrastructure Image" /></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Auditorium</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/laboratories/financeclub1.png" alt="Academic Infrastructure Image" /></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Finance Club</h3>
                    </div>
                  </div>

                 {/* <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/laboratories/financeclub2.png" alt="Academic Infrastructure Image" /></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Finance Club</h3>
                    </div>
                  </div>  */}
               </div>   
            </div>
        </div>
    </div>
    </section>
</>
  )
}

export default CommerceDeptLaboratories