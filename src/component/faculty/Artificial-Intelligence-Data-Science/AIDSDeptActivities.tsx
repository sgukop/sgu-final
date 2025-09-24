import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AIDSDeptActivities = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Activities & Achievements</h2>
        <div className="row">
            <MenuList dept="Artificial Intelligence and Machine Learning" subMenu={NavLinks} />
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
                            <figure><img src="assets\images\AIDS\activities&achievements/AIDS1.jpg" alt="Activities & Achievements Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">orientation day </h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                        <figure><img src="assets\images\AIDS\activities&achievements/AIDS2.jpg" alt="Activities & Achievements Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Ideathon</h3>
                    </div>
                  </div>

                  
                  </div>

                  
                  </div>
              </div> 
          </div>
       
    </section>
  )
}

export default AIDSDeptActivities