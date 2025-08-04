import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MathematicsDeptEvents = () => {
  return (
    <>
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
            <div className="tl-9-section-heading">
                <div className="row gy-4 align-items-center">
                    <div className="col-md-12">
                        <h2 className="tl-9-section-title mb-50">Events</h2>
                    </div>
                </div>
            </div>

            <div className="row">
          <MenuList dept="Mathematics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
         
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Womens Day 2019</h2></div>
            <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/womens-day/wd1.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/womens-day/wd2.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/womens-day/wd3.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/womens-day/wd4.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/womens-day/wd5.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/womens-day/wd6.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>
                </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">SciSTAR 2019</h2></div>
            <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2019/ss2019-1.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2019/ss2019-2.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2019/ss2019-3.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2019/ss2019-4.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2019/ss2019-5.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2019/ss2019-6.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>
                </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">SciSTAR 2018</h2></div>
            <a href="https://manage-api.sguk.ac.in/api/assets/675809d29173bf9f471ac0e1" target="_blank" className="tl-def-btn-2 mb-4">Click Here For Report <i className="fa-regular fa-arrow-right"></i></a>
            <div className="row g-3 g-lg-4 justify-content-center">
                
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2018/ss2018-1.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2018/ss2018-2.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2018/ss2018-3.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2018/ss2018-4.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2018/ss2018-5.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scistar-2018/ss2018-6.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>
                </div>  

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Scilab 2019</h2></div>
            <a href="https://manage-api.sguk.ac.in/api/assets/675809af9173bf9f471ac0dc" target="_blank" className="tl-def-btn-2 mb-4">Click Here For Report <i className="fa-regular fa-arrow-right"></i></a>
            <div className="row g-3 g-lg-4">
                
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/department-of-mathematics/events/scilab-2019/sl2019-12.jpg" alt="Events Image"/></figure>
                        </div>
                    </div>
                  </div>
                </div> 

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Scilab 2018</h2></div>
            <div className="tl-3-programs-pills">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/675809fc9173bf9f471ac0e6" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">Report on Introduction to Scilab on 27th January 2018 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6758092a9173bf9f471ac0d2" className="tl-3-single-program-new">
                          <h5 className="tl-3-single-program-title-new">Report on Introduction to Scilab on 1st February 2018 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
</>
  )
}

export default MathematicsDeptEvents