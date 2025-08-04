import React from 'react'

const RegistrarContact = () => {
  return (
    <div className="tl-event-details-container pt-100 pb-100">
    <div className="container">
      <div className="row align-items-center justify-content-center">
      <h2 className="tl-9-section-title mb-50">Registrar</h2>
        <div className="col-lg-12 mb-20">
            <ul className="tl-event-details-infos pl-50">
                <li className="tl-event-details-info">
                    <span className="key mt-20">
                        <i className="fa-solid fa-user mr-10"></i><strong>Dr. Vivek M. Kayande</strong><br/> <p className="mt-10 ml-25">Registrar - Sanjay Ghodawat University Kolhapur</p>
                    </span>
       
                </li>
                <li className="tl-event-details-info">
                    <span className="key mt-10 mb-10">
                        <i className="fa-solid fa-phone-office mr-10"></i> +91 230 2463774
                    </span>
                </li>
               
                <li className="tl-event-details-info">
                    <span className="key mt-10 mb-10">
                        <i className="fa-solid fa-envelope mr-10"></i> 
                        <a target="_blank" href="mailto: registrar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">
                            registrar@sanjayghodawatuniversity.ac.in
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

export default RegistrarContact