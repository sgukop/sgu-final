import React from 'react'
import Link from 'next/link'

const EnglishPGProgram = () => {
  return (
  <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title mb-50">Programmes Offered under Department of English</h2>
       <div className="row g-0 justify-content-between align-items-center mt-100">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/english-dept/programmes/MA-english.png" alt="MA English Programmes" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>
            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
                    <h6 className="tl-8-feature-title">PG - Master of Arts in English (MA English)</h6>
                    <div className="tl-8-feature">
                        <p className="dark-mode-white-color"><strong>Duration of Course : </strong>3 Years</p>
                        <p className="dark-mode-white-color"><strong>Eligibility : </strong>12th or Equivalent Examination passed</p>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


  )
}

export default EnglishPGProgram