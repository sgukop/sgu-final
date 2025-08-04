import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../../Reusable-components/MenuList';

const FSTDeptInfrastructure = () => {
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
              <p className="key-features-box">The Department of Food Science and Technology at Sanjay Ghodawat University provides a well-equipped and modern learning environment. Our classrooms are designed for interactive learning, featuring audio-visual aids to enhance the teaching experience. The seminar hall serves as a hub for guest lectures, workshops, and student presentations, encouraging knowledge sharing and industry engagement.<br/><br/>
              Practical learning is at the heart of our program. Our Food Analysis Lab is equipped with advanced instruments to help students test food composition, quality, and safety. The Food Processing Lab gives hands-on experience in bakery, confectionery, dairy, and other food manufacturing techniques, ensuring students gain real-world skills. With these state-of-the-art facilities, we create an engaging and practical learning space that prepares students for successful careers in the food industry.</p>

               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/allied-health-sciences/FST/academic-infra/1.png" alt="Events Image"/>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/allied-health-sciences/FST/academic-infra/2.png" alt="Events Image"/>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/allied-health-sciences/FST/academic-infra/3.png" alt="Events Image"/>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/allied-health-sciences/FST/academic-infra/4.png" alt="Events Image"/>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/allied-health-sciences/FST/academic-infra/5.png" alt="Events Image"/>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog flex-flex-col h-full"> 
                        <div className="tl-9-event-img">
                            <img src="assets/images/allied-health-sciences/FST/academic-infra/6.png" alt="Events Image"/>
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

export default FSTDeptInfrastructure