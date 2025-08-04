"use client"
import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AerospaceDeptMOU = () => { 
 

  return (
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">MOU</h2>
        <div className="row">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

        <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/mou/mou1.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">MOU with AEROTICS TECHNOLOGIES, BENGALURU</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/mou/mou2.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">MOU with AGNI AEROSPORTS PVT. LTD.</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/mou/mou3.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">MOU WITH BANGALORE AIRCRAFT INDUSTRIES PVT. LTD.(BAIL)</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/mou/mou4.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">MOU WITH TANEJA AEROSPACE AVIATION PVT. LTD.</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/mou/mou5.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">MOU WITH SKY AEROSPACE BANGALORE</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex flex-col h-full"> 
                        <div className="tl-9-event-img">
                          <figure><img src="assets/images/aerospace-engineering-dept/mou/mou6.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">MOU WITH SS TECHNOLOGIES BANGALORE</h3>
                    </div>
                  </div>
            </div> 
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area" style={{padding:"2px 0px 2px 5px"}}>
                        <h3 className="tl-6-latest-article-title mt-10">MOU with Garuda Aerospace to establish Centre of Excellence in Drone Technology.</h3>
                    </div>
                  </div>
            </div>
           
          </div>
       </div>
       </div>
    </section>
  )
}

export default AerospaceDeptMOU