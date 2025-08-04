import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ElectronicsDeptVideos = () => {
  return (
    <section className="tl-9-blogs tl-9-section-spacing">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Videos</h2>
        <div className="row">
                    <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
                        <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
            <div className="row g-3 g-lg-4 justify-content-center">
               <div className="col-lg-6 col-md-6 col-10 col-xxs-12">
                    <div className="video-blog"> 
                        <div className="video">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/Vz3MqaUYMJ8?rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <h6 className="tl-8-feature-title mt-4">Electric Vehicle</h6>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-10 col-xxs-12">
                    <div className="video-blog"> 
                        <div className="video">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/fbEurJUPSA0?rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <h6 className="tl-8-feature-title mt-4">Modeling of Electrical Machine</h6>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-10 col-xxs-12">
                    <div className="video-blog"> 
                        <div className="video">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/WR0l8cCMK0E?rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <h6 className="tl-8-feature-title mt-4">Power Electronics Simulation</h6>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-10 col-xxs-12">
                    <div className="video-blog"> 
                        <div className="video">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/8zv8syJbIWI?rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <h6 className="tl-8-feature-title mt-4">Wind Energy Conversion System</h6>
                    </div>
                </div>
            </div>   
        </div>
       </div>
       </div>
    </section>
  )
}

export default ElectronicsDeptVideos