import React from 'react'

const NodalOfficeContact = () => {
  return (
    <div className="tl-event-details-container pt-100 pb-100">
    <div className="container">
      <div className="row align-items-center justify-content-center">
      <h2 className="tl-9-section-title mb-50">Nodal officer Contact</h2>
        <div className="col-lg-12 mb-20">
            <ul className="tl-event-details-infos pl-50">
                <li className="tl-event-details-info">
                    <span className="key mt-20">
                        <i className="fa-regular fa-user"></i><strong>Dr. Indrajit Appasaheb Kamble</strong><br/> <p className="mt-20">Assistant Professor,<br/> Department of Humanities and Social Sciences,<br/>
                        Sanjay Ghodwat University,<br/>
                        Kolhapur 416 118 MS.India.</p> 
                    </span>
       
                </li>
                <li className="tl-event-details-info">
                    <span className="key mt-10 mb-10">
                        <i className="fa-regular fa-mobile"></i> +91 9545548341
                    </span>
                </li>
                <li className="tl-event-details-info">
                    <span className="key mt-10 mb-10">
                        <i className="fa-regular fa-envelope"></i> 
                        <a target="_blank" href="mailto:indrajit.kamble@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">
                            indrajit.kamble@sanjayghodawatuniversity.ac.in
                        </a>
                    </span>
                </li>
            </ul>
        </div>
       </div>
    </div>
  </div>
  )
}

export default NodalOfficeContact