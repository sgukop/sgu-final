import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const ChemicalDeptInfrastructure = () => {
  return (
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Academic Infrastructure</h2>
            <div className="row g-3 g-lg-4 justify-content-center">
            <MenuList dept="Chemistry" subMenu={NavLinks} />
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
                            <figure><img src="assets/images/chemical-sciences-dept/academic-infrastructure/lab-1.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Analytical Chemistry Lab</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/chemical-sciences-dept/academic-infrastructure/lab-2.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Organic Chemistry Lab</h3>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/chemical-sciences-dept/academic-infrastructure/lab-3.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Research Lab</h3>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/chemical-sciences-dept/academic-infrastructure/lab-4.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Engineering Chemistry Lab</h3>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/chemical-sciences-dept/academic-infrastructure/lab-5.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Classroom</h3>
                    </div>
                  </div>
                </div>   
            </div>
            </div>
       </div>
    </section>
  )
}

export default ChemicalDeptInfrastructure