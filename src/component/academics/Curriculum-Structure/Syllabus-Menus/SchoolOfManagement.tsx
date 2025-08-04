import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
import MenuList from '../Reusable-components/MenuList';
import NavLinks from '../Reusable-components/Navlinks';
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const SchoolOfManagement = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>
            Revised Syllabus from the Academic Year 2024-25
        </h2>
       <div className="row">
            <MenuList dept="Curriculum Structure and Syllabus" subMenu={NavLinks}/>
                <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
                    <div className={`row ${pageStyle}-categories-row`}>
                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/bba-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">BBA & MBA Syllabus</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                            <Link href="/bcom-syllabus" className={`tl-3-single-program ${categoryStyle}`}>
                                <h6 className="tl-3-single-program-title">B.Com Syllabus</h6>
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SchoolOfManagement