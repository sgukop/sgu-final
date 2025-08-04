import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const BCADeptInfrastructure = () => {
  return (
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Academic Infrastructure</h2>
            <div className="row g-3 g-lg-4 justify-content-center">
            <MenuList dept="Bachelor of Computer Applications" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row g-3 g-lg-4 justify-content-center">
               {/* <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/1.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">HOD Cabin</h3>
                  </div>
                  </div>  */}
                 <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/4.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Cyber security Lab</h3>
                      </div>
                  </div> 
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/10.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Well Equipped Lab</h3>
                      </div>
                  </div>

                 {/* <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/10.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Well Equipped Lab</h3>
                      </div>
                  </div>  */}

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/python-programng-lab.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Python Programming Lab</h3>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/analytics-lab.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Data Analytics Lab</h3>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/2.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Well Equipped ClassRoom 1</h3>
                      </div>
                  </div> 
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/3.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Well Equipped ClassRoom 2</h3>
                    </div>
                  </div>
                 
             {/*    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/5.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/7.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                    </div>
                  </div>
                 
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/8.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/9.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/BCA-dept/academic-infrastructure/6.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                    </div>
                  </div>   */}
                </div>   
            </div>
            </div>
           
       </div>
    </section>
  )
}

export default BCADeptInfrastructure