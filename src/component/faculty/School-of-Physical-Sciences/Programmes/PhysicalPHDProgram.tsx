import React from 'react'

const PhysicalPHDProgram = () => {
  return (
    <>
    <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programmes under Physics Department</h2>
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/physical-sciences-dept/programmes/PhD-Physics.png" alt="Ph.D. programmes Image" className="tl-8-about-main-img rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}}
                    />
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                <h2 className="tl-8-section-title">Ph.D. programmes</h2>
                        <div className="tl-8-feature">
                            <h6 className="tl-8-feature-title mt-10">Eligibility : </h6>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>M.Sc. Physics with minimum 55 % marks( or CGPA)</li>
                                <li>Qualified SGU Ph.D. entrance exam or SET, NET, GATE </li>
                            </ul>
                        </div>

                        <div className="tl-8-feature">
                            <h6 className="tl-8-feature-title mt-10">Research Area : </h6>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Materials science, Nanoscience</li>
                                <li>Nanomaterials for Energy conversion and storage devices.</li>
                                <li>Hydrophilic and hydrophobic coating for anticorrosion application.</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default PhysicalPHDProgram