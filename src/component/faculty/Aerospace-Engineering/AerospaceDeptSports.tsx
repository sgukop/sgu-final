import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AerospaceDeptSports = () => {
  return (
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Sports</h2>
        <div className="row">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
           <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport1.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">BOYS SPORTS TEAM FROM AERONAUTICAL ENGINEERING</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport2.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">GIRLS SPORTS TEAM FROM AERONAUTICAL ENGINEERING</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport3.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">WINNERS AT NATIONAL LEVEL VOLLEYBALL COMPETITION</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport4.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">WINNERS FELICITATION BY HOD</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport5.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">NATIONAL WINNERS WITH DEPARTMENT FACULTIES</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/sports/sport6.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">DEPARTMENT SPORTS ACTIVITY 2023-2024</h3>
                    </div>
                  </div>
            </div>   
        </div>
        </div>
       </div>
    </section>
  )
}

export default AerospaceDeptSports