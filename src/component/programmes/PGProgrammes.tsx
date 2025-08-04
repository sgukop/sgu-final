import React from 'react';
import Table from "react-bootstrap/Table";

const PGProgrammes = () => {
  return (
    <div className="tl-event-details-container pb-50" style={{padding:'20px'}}>
    <div className="container">
        <div className="row tl-event-details-row g-0">
            <div className="col-lg-12">
                {/* <h2 className="universityobject-heading dark-mode-white-color">Scholarships</h2> */}
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content tl-event-details-area" style={{marginTop:'8px'}}>
                        <h4 className="tab-titleee dark-mode-white-color">Master of Technology (M.Tech)</h4>
                           <ul className="tl-event-details-key-content-list phd-container">
    
                                <li className="dark-mode-white-color" >M.Tech. in Aerospace Engineering</li>
                                <li className="dark-mode-white-color" >M.Tech. in Civil Engineering (Construction Engineering & Management, Structural Engineering)</li>
                                <li className="dark-mode-white-color" >M.Tech. in Artificial Intelligence & Data Science</li>
                                <li className="dark-mode-white-color" >M.Tech. in Electronics Engineering (Embedded System)</li>
                               
                            </ul>
                        </div>
                    </div>
    
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default PGProgrammes