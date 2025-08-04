import React from 'react'

const ChemicalPHDProgram = () => {
  return (
    <>
<section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programmes</h2>
        <div className="row g-5 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/chemical-sciences-dept/programmes/phd-image.png" alt="Ph.D. programmes Image" className="rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-6 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                <h2 className="tl-8-section-title">Ph.D. Programmes</h2>
                        <div className="tl-8-feature">
                        <ul className="tl-event-details-key-content-list phd-container">
                                <li>Ph. D. in Chemistry</li>
                                <li>Number of Ph.D. Students : 16</li>
                            </ul>

                            <p style={{marginBottom:"20px", marginTop:"40px",fontSize:"20px",color:"#4f70b6"}}><strong>Ph.D. Thrust Areas : </strong><span style={{fontSize:"18px",color:"#000"}}></span></p>
                            <ul className="tl-event-details-key-content-list phd-container">
                           <li>Green Chemistry and Catalysis</li> 
                           <li>Biopolymers and Macromolecules</li> 
                           <li>Ionic Liquid Formulations</li> 
                           <li>Hydrogen Generation and Environment Remediation</li> 
                           <li>Material Science</li> 
                           <li>Fluorescence based Nanosensors</li> 

                            </ul>

                            
                        </div>

                        <h2 className="tl-8-section-title" style={{marginBottom:"20px", marginTop:"40px"}}>Fellowship</h2>
                        <strong><p className="mb-4">Recieved SARATHI Fellowship from Gov. of Maharashtra to persue their Ph.D.</p></strong>
                        <div className="tl-8-feature">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Shrilekha Bachche</li>
                                <li>Triveni Patil </li>
                                <li>Sachin Khade</li>
                            </ul>
                        </div>

                        <p style={{marginBottom:"20px", marginTop:"40px",fontSize:"20px",color:"#4f70b6"}}>Eligibility : <span style={{fontSize:"18px",color:"#000"}}>M.Sc. Chemistry or Equivalent</span></p>
                </div>
            </div>
        </div>

      
    </div>
</section>
</>
  )
}

export default ChemicalPHDProgram