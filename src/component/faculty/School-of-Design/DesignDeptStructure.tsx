import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
const DesignDeptStructure = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Structure of the Program</h2>
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
                            <img src="assets/images/design-dept/program-structure/product-design.png" alt="Product Design Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="https://manage-api.sguk.ac.in/api/assets/67517dd94b17e19d8f361f58" target="_blank">B. Des. Product Design</Link></h4>
                                    <Link href="https://manage-api.sguk.ac.in/api/assets/67517dd94b17e19d8f361f58" className="tl-1-blog-btn" target="_blank">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="tl-1-blog">
                            <img src="assets/images/design-dept/program-structure/graphic-design.jpg" alt="Graphic Design Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="https://manage-api.sguk.ac.in/api/assets/67517dc44b17e19d8f361f53" target="_blank">B. Des. Graphic Design</Link></h4>
                                    <Link href="https://manage-api.sguk.ac.in/api/assets/67517dc44b17e19d8f361f53" target="_blank" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-1-blog">
                            <img src="assets/images/design-dept/program-structure/interior-design.jpg" alt="Interior Design Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="https://manage-api.sguk.ac.in/api/assets/67517e174b17e19d8f361f5d" target="_blank">B. Des. Space (Interior) Design</Link></h4>
                                    <Link href="https://manage-api.sguk.ac.in/api/assets/67517e174b17e19d8f361f5d" target="_blank" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-1-blog">
                            <img src="assets/images/design-dept/program-structure/fashion-design.jpg" alt="Fashion Design Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="https://manage-api.sguk.ac.in/api/assets/67517d584b17e19d8f361f4e" target="_blank">B. Des. Fashion Design</Link></h4>
                                    <Link href="https://manage-api.sguk.ac.in/api/assets/67517d584b17e19d8f361f4e" target="_blank" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
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

export default DesignDeptStructure