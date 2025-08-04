import React from 'react'
import FacultyAchievements from './FacultyAchievements'
import StudentsAchievements from './StudentsAchievements'
import DepartmentAchievements from './DepartmentAchievements'
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'
const CivilDeptAchievements = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
    <div className="container-fluid">
        <div className="tl-14-section-heading">
            <h2 className="tl-14-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Achievements</h2>
        </div>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <FacultyAchievements/>
        <StudentsAchievements/>
        <DepartmentAchievements/>
    </div>
    </div>
    </div>
    </section>
       
  )
}

export default CivilDeptAchievements