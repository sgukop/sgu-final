import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MechanicalDeptInfrastructure = () => {
  return (
    <>
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Infrastructure & Laboratories</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            
         <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Mechanical department consists of different laboratories listed below.</h2></div>
            <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech1.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Computer Integrated Manufacturing Lab (CNC Machine)</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech2.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Mechanical Workshop(Machine Shop)</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech3.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Mechanical Workshop(Machine Shop)</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech4.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Carpentry Shop</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech5.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Smithy Shop</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech6.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">I.C. Engine Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech7.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Basic Mechanical Engg. Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech8.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Industrial Fluid Power Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech9.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Heat and Mass Transfer Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech10.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Theory of Machine Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech11.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Material Science and Metallurgy Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech12.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">CAD-CAM Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech13.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Fluid and Turbo Machinery</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech14.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Applied Thermodynamic Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech15.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Applied Thermodynamic Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech16.png" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Technology Competency Center(TTL)</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/mechanical-engineering-dept/laboratories/Mech17.jpg" alt="Events Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Car Lab</h3>
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

export default MechanicalDeptInfrastructure