import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MathematicsDeptNewsCorner = () => {
  return (
    <section className="tl-8-experts tl-3-section-spacing">
        <div className="container-fluid">
            <div className="tl-8-experts-heading">
                <h2 className="tl-9-section-title mb-50">News</h2>
            </div>
            <div className="row">
          <MenuList dept="Mathematics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-3-staff-row">
                <div className="row gx-3 gx-lg-4 g-3 justify-content-center">
                   <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/6.jpg" target="_blank">
                                    <img src="assets/images/department-of-mathematics/news-corner/6.jpg" alt="Staff Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/2.jpg" target="_blank">
                                    <img src="assets/images/department-of-mathematics/news-corner/2.jpg" alt="Staff Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/9.jpg" target="_blank">
                                    <img src="assets/images/department-of-mathematics/news-corner/9.jpg" alt="Staff Image"/>
                                </a>
                            </div>
                        </div>
                    </div>   
                   
                </div>
            </div>

            <div className="tl-3-staff-row mt-50">
                <div className="row gx-3 gx-lg-4 g-3 justify-content-center">
                   <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/11.jpg" target="_blank">
                                    <img src="assets/images/department-of-mathematics/news-corner/11.jpg" alt="Staff Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/10.jpg" target="_blank">
                                    <img src="assets/images/department-of-mathematics/news-corner/10.jpg" alt="Staff Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/7.jpg" target="_blank">
                                    <img src="assets/images/department-of-mathematics/news-corner/7.jpg" alt="Staff Image"/>
                                </a>
                            </div>
                        </div>
                    </div>   
                   
                </div>
            </div>

            <div className="tl-3-staff-row mt-50">
                <div className="row gx-3 gx-lg-4 g-3 justify-content-center">
                   <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/12.jpg" target="_blank">
                                    <img src="assets/images/department-of-mathematics/news-corner/12.jpg" alt="Staff Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                            <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/5.jpg" target="_blank">
                                <img src="assets/images/department-of-mathematics/news-corner/5.jpg" alt="Staff Image"/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 col-xxs-12">
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <a data-fslightbox href="assets/images/department-of-mathematics/news-corner/4.jpg" target="_blank">
                                    <img src="assets/images/department-of-mathematics/news-corner/4.jpg" alt="Staff Image"/>
                                </a>
                            </div>
                        </div>
                    </div>   
                   
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default MathematicsDeptNewsCorner