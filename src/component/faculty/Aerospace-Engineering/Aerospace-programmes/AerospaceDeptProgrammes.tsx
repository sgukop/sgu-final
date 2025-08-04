import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'

const AerospaceDeptProgrammes = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Aerospace Department Programmes</h2>
                <div className="row gy-4 gy-sm-5 tl-1-blogs-row justify-content-center">
                <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/aerospace-engineering-dept/programs/ug-image1.png" alt="Aerospace UG Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/aerospace-program-UG">UG</Link></h4>
                                    <Link href="/aerospace-program-UG" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/about-all-dept-images/aerospace-about2.jpg" alt="Aeropsace PG Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/aerospace-program-PG">PG</Link></h4>
                                    <Link href="/aerospace-program-PG" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/aerospace-engineering-dept/programs/about-aerospace-image.jpg" alt="Aeropsace PHD Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="#">Ph.D.</Link></h4>
                                    <Link href="#" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
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

export default AerospaceDeptProgrammes