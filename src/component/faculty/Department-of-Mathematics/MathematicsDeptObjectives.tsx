import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MathematicsDeptObjectives = () => {
  return (
    <div className="pt-100 pb-100">
        <div className="container-fluid">
            <div className="row">
                <h2 className="tl-9-section-title mb-50">Educational Objectives</h2>
                <div className="row">
          <MenuList dept="Mathematics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
                    <div className="col-lg-12">
                        <div className="tl-event-details-left">
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <h3 className="tl-event-details-area-title">Intellectual skills</h3>
                                    <ul className="tl-event-details-key-content-list">
                                        <li>Ability to demonstrate understanding of a broad set of knowledge concerning the fundamentals in the basic areas of the discipline</li>
                                        <li>Ability to apply their knowledge to design carryout, record and analyze the results of experiments</li>
                                        <li>Skills to communicate the results of their work.</li>
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="tl-event-details-left mt-50">
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <h3 className="tl-event-details-area-title">Practical skills</h3>
                                    <ul className="tl-event-details-key-content-list">
                                        <li>Skills in the monitoring of properties by observation and measurement, and the systematic and reliable recording and documentation.</li>
                                        <li>Skills in the operation of standard instrumentation.</li>
                                        <li>Skills required for the conduct of documented laboratory procedures involved</li>
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="tl-event-details-left mt-50">
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <h3 className="tl-event-details-area-title">Transferable skills</h3>
                                    <ul className="tl-event-details-key-content-list">
                                        <li>Skills of both oral and written communication.</li>
                                        <li>Problem solving skills.</li>
                                        <li>Mathematical skills, correct use of units and data presentation.</li>
                                        <li>Information retrieval skills.</li>
                                        <li>IT skills.</li>
                                        <li>Interpersonal skills such as interaction with others and team work.</li>
                                        <li>Time management and organizational skills.</li>
                                        <li>Skills related to ethical, social and professional understanding.</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default MathematicsDeptObjectives