import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AIDSDeptInfrastructure= () => {
  return (
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Laboratories</h2>
            <div className="row g-3 g-lg-4 justify-content-center">
            <MenuList dept="Artifitial Intelligence and Machine Learning" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets\images\AIDS\academic-infrastructure/1.jpg" alt="Infrastructure Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">5.0 Lab</h3>
                    </div>
                  </div>
                 
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets\images\AIDS\academic-infrastructure/2.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Staffroom</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets\images\AIDS\academic-infrastructure/3.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Classroom 1</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets\images\AIDS\academic-infrastructure/4.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Classroom 2</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets\images\AIDS\academic-infrastructure/5.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Classroom 3</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets\images\AIDS\academic-infrastructure/8.jpg" alt="Events Image"/></figure>
                        </div>S
                        <h3 className="tl-6-latest-article-title mt-10">Classroom 4</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure> <img src="assets\images\AIDS\academic-infrastructure/7.jpeg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Anenka Lab 1</h3>
                      </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets\images\AIDS\academic-infrastructure/6.jpeg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Anenka Lab 2</h3>
                      </div>
                  </div>
            </div>   
        </div>
       </div>
       </div>
    </section>
  )
}

export default AIDSDeptInfrastructure