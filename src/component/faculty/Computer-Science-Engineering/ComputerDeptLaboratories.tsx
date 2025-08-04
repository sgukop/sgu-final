import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const ComputerDeptLaboratories = () => {
  return (
    <>
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
            <div className="tl-9-section-heading">
                <div className="row gy-4 align-items-center">
                    <div className="col-md-12">
                        <h2 className="tl-9-section-title mb-50">Infrastructure & Laboratories</h2>
                    </div>
                </div>
            </div>
           
        <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">CSE department consists of different laboratories listed below.</h2></div>
            <div className="row g-3 g-lg-4 justify-content-center">
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <iframe width="100%" height="400" allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://vrhorizon.viewin360.co/share/collection/7bCXx?logo=1&info=0&logosize=107&fs=1&vr=1&gyro=0&autorotate=0.57&thumbs=-1&margin=4"></iframe>
                        </div>  
                         <h3 className="tl-6-latest-article-title mt-10">Research Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <iframe width="100%" height="400" allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://vrhorizon.viewin360.co/share/collection/7bC1h?logo=1&info=0&logosize=107&fs=1&vr=1&gyro=0&autorotate=0.57&thumbs=-1&margin=4"></iframe>
                        </div>  
                        <h3 className="tl-6-latest-article-title mt-10">Internet Of Things Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                        <iframe width="100%" height="400" allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://vrhorizon.viewin360.co/share/collection/7bxKL?logo=1&info=0&logosize=107&fs=1&vr=1&gyro=0&autorotate=0.57&thumbs=-1&margin=4"></iframe>
                        </div>  
                        <h3 className="tl-6-latest-article-title mt-10">High Performance Computing Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                        <iframe width="100%" height="400" allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://vrhorizon.viewin360.co/share/collection/7bCKM?logo=1&info=0&logosize=107&fs=1&vr=1&gyro=0&autorotate=0.57&thumbs=-1&margin=4"></iframe>
                        </div>  
                        <h3 className="tl-6-latest-article-title mt-10">Artificial Intelligence Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                        <iframe width="100%" height="400" allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://vrhorizon.viewin360.co/share/collection/7bCZB?logo=1&info=0&logosize=107&fs=1&vr=1&gyro=0&autorotate=0.57&thumbs=-1&margin=4"></iframe>
                        </div>  
                        <h3 className="tl-6-latest-article-title mt-10">Advance Databade Lab</h3>
                    </div>
                  </div>
              {/* <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse1.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Advanced Database System Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse2.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Computer Center Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse3.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Computer Center 1 Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse4.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Research Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse5.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Internet of Things Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse6.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">High Performance Computing Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse7.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Cloud Computing Lab Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse8.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Project Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/computer-science-engineering/laboratories/Cse9.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Artificial Intelligence Lab</h3>
                    </div>
                  </div>   */}
                </div>   
            </div>
        </div>
    </div>
    </section>
</>
  )
}

export default ComputerDeptLaboratories