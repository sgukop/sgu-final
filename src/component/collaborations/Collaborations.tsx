import { eventList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const Collaborations = () => {
  return (
    <section className="tl-3-events tl-3-section-spacing">
        <div className="container">
           <div className="tl-3-events-cards">
                <div className="row">
                  
                    <div className="col-md-6">
                        <div className="tl-3-single-event">
                            <div className="tl-3-single-event-date">
                            <i className="fa-regular fa-handshake"></i>
                            </div>
                            <div className="tl-3-single-event-txt">
                                <div className="tl-3-single-event-info">
                                    <h6 className="tl-3-single-event-location">
                                       SGU has collaborations with Foreign Universities, Industries .....
                                    </h6>
                                 </div>
                                 <h3 className="tl-3-single-event-title"><Link href="https://www.sanjayghodawatuniversity.ac.in/collaboration-foreignUni.php" target="_blank">Collaborations</Link></h3>
                            </div>
                        </div>
                    </div> 

                     <div className="col-md-6">
                        <div className="tl-3-single-event">
                            <div className="tl-3-single-event-date">
                            <i className="fa-regular fa-th"></i>
                            </div>
                            <div className="tl-3-single-event-txt">
                                <div className="tl-3-single-event-info">
                                    <h6 className="tl-3-single-event-location">
                                       Student have the flexibility to pursue
                                    </h6>
                                 </div>
                                 <h3 className="tl-3-single-event-title"><Link href="https://www.sanjayghodawatuniversity.ac.in/cbe-system.php" target="_blank">Credit Based Evaluation (CBE) System</Link></h3>
                            </div>
                        </div>
                    </div> 

                     <div className="col-md-6">
                        <div className="tl-3-single-event">
                            <div className="tl-3-single-event-date">
                            <i className="fa-regular fa-book"></i>
                            </div>
                            <div className="tl-3-single-event-txt">
                                <div className="tl-3-single-event-info">
                                    <h6 className="tl-3-single-event-location">
                                          Industry Oriented Programmes for job opportunities
                                    </h6>
                                 </div>
                                 <h3 className="tl-3-single-event-title"><Link href="https://www.sanjayghodawatuniversity.ac.in/programme-ST.php" target="_blank">Job Oriented Programmes</Link></h3>
                            </div>
                        </div>
                    </div> 

                    <div className="col-md-6">
                        <div className="tl-3-single-event">
                            <div className="tl-3-single-event-date">
                            <i className="fa-regular fa-clipboard"></i>
                            </div>
                            <div className="tl-3-single-event-txt">
                                <div className="tl-3-single-event-info">
                                    <h6 className="tl-3-single-event-location">
                                          Best Practices in Teaching - Learning
                                    </h6>
                                 </div>
                                 <h3 className="tl-3-single-event-title"><Link href="https://www.sanjayghodawatuniversity.ac.in/obe-system.php" target="_blank">Outcome Based Education (OBE) System</Link></h3>
                            </div>
                        </div>
                    </div>    
                     
                  
                    
                </div>
            </div>
         </div>
    </section>
  )
}

export default Collaborations