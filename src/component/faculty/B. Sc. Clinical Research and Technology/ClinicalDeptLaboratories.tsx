import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacyDeptLaboratories = () => {
  return (
    <>
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Infrastructure</h2>
        <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            
         <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Laboratories & Infrastructure</h2></div>
            <div className="row g-3 g-lg-4 justify-content-center">
              <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/Pharmacy Dissolution Machine.png" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Pharmacy Dissolution Machine</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/Pharma Analytical Laboratory.png" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Pharma Analytical Laboratory</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/UV Visible Spectrophotometer.png" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">UV Visible Spectrophotometer</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/Phamacy HPLC Machine.png" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Phamacy HPLC Machine</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/Pharmacy Board Room.png" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Pharmacy Board Room</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/Pharmacy Digital Classroom.png" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Pharmacy Digital Classroom</h3>
                    </div>
                  </div>

               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/languagelab.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Language Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/pharchemistrylab.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Pharmaceutical Chemistry Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/pharmaceutics.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Pharmaceutics Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/Pharmacognosylab.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Pharmacognosy Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/pharmacologylab.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Pharmacology Lab</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/classroom.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Classrooms</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/library.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Library</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/Auditorium.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Auditorium</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/pharmacy-dept/laboratories/machineroom.jpeg" alt="Laboratories Image"/></figure>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Machine Room</h3>
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

export default PharmacyDeptLaboratories