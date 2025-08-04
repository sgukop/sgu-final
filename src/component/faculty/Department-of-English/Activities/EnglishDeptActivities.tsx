import React from 'react'
import FacultyPrograms from './FacultyPrograms'
import WorkshopConducted from './WorkshopConducted'
import STTPsWorkshop from './STTPsWorkshop'
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'

const EnglishDeptActivities = () => {
  return (
    <section className="tl-14-blogs pt-100 pb-100" data-bg-color="#F3F1F1" style={{backgroundColor:"#F3F1F1"}}>
      <h2 className="tl-9-section-title mb-50">Activities</h2>
      <div className="row">
          <MenuList dept="English" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

        <FacultyPrograms />
        <WorkshopConducted />
        <STTPsWorkshop />
    </div>
    </div>
    </section>
  )
}

export default EnglishDeptActivities