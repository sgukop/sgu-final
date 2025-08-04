"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

function LawDeptProgrammes() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Programmes</h2>
        <div className="row">
          <MenuList dept="School of Legal Studies(Law)" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row">
                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/law-dept/programs/LLB-Program.png" alt="Law Department Program Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/law-dept-LLB">LLB</Link></h4>
                                    <Link href="/law-dept-LLB" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/law-dept/programs/BBA-LLB-program.png" alt="Law Department Program Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/law-dept-BBALLB">BBA LLB</Link></h4>
                                    <Link href="/law-dept-BBALLB" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/law-dept/programs/BA-LLB-program.png" alt="Law Department Program Image" className="tl-1-blog-img"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/law-dept-BALLB">BA LLB</Link></h4>
                                    <Link href="/law-dept-BALLB" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>
                </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default LawDeptProgrammes;
