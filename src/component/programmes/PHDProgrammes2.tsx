import React from 'react';
import Table from "react-bootstrap/Table";

const PHDProgrammes2 = () => {
  return (
    <div className="tl-event-details-container pb-50" style={{padding:'20px'}}>
    <div className="container">
        <div className="row tl-event-details-row g-0">
            <div className="col-lg-12">
                {/* <h2 className="universityobject-heading dark-mode-white-color">Scholarships</h2> */}
                <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content tl-event-details-area" style={{marginTop:'8px'}}>
                        <h4 className="tab-titleee dark-mode-white-color">Transferable Skills</h4>
                           <ul className="tl-event-details-key-content-list phd-container">
    
                                <li className="dark-mode-white-color" >Skills of both oral and written communication</li>
                                <li className="dark-mode-white-color" >Problem solving skills</li>
                                <li className="dark-mode-white-color" >Mathematical skills, correct use of units and data presentation</li>
                                <li className="dark-mode-white-color" >Information retrieval skills</li>
                                <li className="dark-mode-white-color" >IT skills</li>
                                <li className="dark-mode-white-color" >Interpersonal skills such as interaction with others and team work</li>
                                <li className="dark-mode-white-color" >Time management and organizational skills.</li>
                                <li className="dark-mode-white-color" >Skills related to ethical, social and professional understanding</li>
                            </ul>
                        </div>
                    </div>
    
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default PHDProgrammes2