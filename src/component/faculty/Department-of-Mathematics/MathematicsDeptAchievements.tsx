import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MathematicsDeptAchievements = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
    <div className="container-fluid">
        <div className="tl-14-section-heading">
            <h2 className="tl-9-section-title mb-50">Achievements</h2>
        </div>

        <div className="row">
          <MenuList dept="Mathematics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Faculty Achievements</h2></div>
            <div className="tl-8-course mb-30">
                <div className="tl-8-course-img">
                    <img src="assets/images/department-of-mathematics/achievements/sushant-patil.jpg" alt="Achievements"/>
                </div>
                <div className="tl-8-course-txt">
                    <p className="dark-mode-white-color">Mr. Sushant T. Patil qualified SET examination in Mathematical Science subject</p>
                </div>
            </div>

        
            <div className="row g-xl-4 g-3">
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-single-blog tl-14-blog">
                        <div className="tl-single-blog-txt tl-14-blog-txt">
                            <h4 className="achievements-title">Ms. Ashwini K. Kulkarni successfully completed Ph.D. in Mathematics</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Students Achievements</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px]">
                        <div className="tl-8-course-img">
                            <img src="assets/images/department-of-mathematics/achievements/student-achievements1.jpg" alt="Industrial Visit"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <p className="dark-mode-white-color">Mr. Akash Pawar M.Sc.-I students got selected for one month Summer program in Mathematics at NICER Bhuneshwar and Harish Chandra Research Institute at Allhabhad during May 2018.</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px]">
                        <div className="tl-8-course-img">
                            <img src="assets/images/department-of-mathematics/achievements/student-achievements2.jpg" alt="Industrial Visit"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <p className="dark-mode-white-color">Mr. Akash Powar from M.Sc.-II awarded as Best Outgoing Student from School of Science for A.Y. 2018-19</p>
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

export default MathematicsDeptAchievements