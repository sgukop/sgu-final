import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AerospaceDeptLab = () => {
  return (
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Academic Infrastructure</h2>
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
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Aero Engine Maintenance Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href=""><h3 className="tl-6-latest-article-title mt-10">Aero Engine Maintenance Lab.</h3></Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Aerodynamics Lab.jpeg" alt="Events Image"/>
                        </div>
                       <Link href="https://manage-api.sguk.ac.in/api/assets/67de5f724f56d3a0bcfba92d" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Aerodynamics Lab</h3></Link>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Aircraft General Engineering Maintenance Lab.jpeg" alt="Events Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Aircraft General Engineering Maintenance Lab</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Aircraft Strucutres Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de5fd24f56d3a0bcfba936" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Aircraft Strucutres Lab</h3></Link>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Aircraft Systems Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de60044f56d3a0bcfba93b" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Aircraft Systems Lab</h3></Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Composite Materials Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de602a4f56d3a0bcfba940"  target="_blank"><h3 className="tl-6-latest-article-title mt-10">Composite Materials Lab</h3></Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Computer Aided and Simulation Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de60b84f56d3a0bcfba945"  target="_blank"><h3 className="tl-6-latest-article-title mt-10">Computer Aided and Simulation Lab</h3></Link>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/drone-lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de60ca4f56d3a0bcfba94a" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Drone lab</h3></Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Fuild Mechanics Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de60e64f56d3a0bcfba94f" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Fuild Mechanics Lab</h3></Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Propulsion Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de60f84f56d3a0bcfba954" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Propulsion Lab</h3></Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Thermodynamics Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Thermodynamics Lab</h3></Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Vibration and Aero Elasticity Lab.jpeg" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67de61094f56d3a0bcfba959" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Vibration and Aero Elasticity Lab</h3></Link>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/aerospace-engineering-dept/laboratories/new-lab-photoes/Theory of Machines Lab.png" alt="Events Image"/>
                        </div>
                        <Link href="https://manage-api.sguk.ac.in/api/assets/697c87e4fb80a1d956db43ed" target="_blank"><h3 className="tl-6-latest-article-title mt-10">Theory of Machines Lab</h3></Link>
                    </div>
                  </div>
                </div>   
              </div>
          </div>
       </div>
    </section>
  )
}

export default AerospaceDeptLab