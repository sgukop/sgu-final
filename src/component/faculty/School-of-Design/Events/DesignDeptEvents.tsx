import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from '../Navlinks';
import MenuList from '../../Reusable-components/MenuList';

const DesignDeptEvents = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Events</h2>
            <div className="row">
            <MenuList dept="Design" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
                <div className="row gy-4 gy-sm-5 tl-1-blogs-row">
                    <div className="col-lg-6">
                        <div className="tl-1-blog">
                            <img src="assets/images/design-dept/events/1.jpeg" alt="Event Images" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/design-events-garba">Garba Event :- 2022</Link></h4>
                                    <Link href="/design-events-garba" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
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

export default DesignDeptEvents