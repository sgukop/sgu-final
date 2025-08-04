import React from 'react'

const LocationMap = () => {
  return (
    <section className="tl-8-contact pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title mb-50">Location Map</h2>
            <div className="row">
                <div className="col-lg-6 col-12 col-xxs-12">
                    <div className="tl-3-consult-img">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4401.734396445252!2d74.3826016900257!3d16.74328798113293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1511256219757" width="100%" height="430px" style={{border:"0px"}} ></iframe>
                    </div>
                </div>

                <div className="col-lg-6 col-12 col-xxs-12">
                <h4 className="dark-mode-white-color mb-20"><strong>Address</strong></h4>
                    <ul className="tl-event-details-infos pl-50">
                        <li className="tl-event-details-info">
                            <span className="key mt-20">
                                <i className="fa-solid fa-location-dot mr-10"></i><strong>Sanjay Ghodawat University, Kolhapur</strong><br/> <p className="mt-10 ml-25">Kolhapur - Sangli Highway,A/p Atigre - 416 118,Tal. - Hatkanangale, Dist. Kolhapur,Maharashtra, India</p>
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key mt-10 mb-10">
                                <i className="fa-solid fa-mobile-button mr-10"></i> Toll Free : 1800 31300 1566
                            </span>
                        </li>

                        <li className="tl-event-details-info">
                            <span className="key mt-10 mb-10">
                                <i className="fa-solid fa-mobile-button mr-10"></i>+91 90110 39800 / 90110 22567.
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

                <div className="tl-event-details-left mt-50">
                    <div className="tl-event-details-key-content tl-event-details-area">
                    <h4 className="dark-mode-white-color"><strong>Geographic Coordinate - Latitude and Longitude</strong></h4>
                        <small className="dark-mode-white-color">16°44'32.9"N 74°22'56.2"E</small>
                        <p className="dark-mode-white-color mt-20"> <i className="fa-solid fa-location-dot mr-10"></i> <strong>Off Mumbai - Bangalore National Highway No. 4 & on State Highway No. 3 (Sangli - Kolhapur)</strong></p>
                        <h6 className="tl-8-feature-title">Distance from -</h6>
                        <ul className="tl-event-details-key-content-list phd-container">
                            <li>Kolhapur Air Port - 21.5 KM</li>
                            <li>Kolhapur Bus stand - 18 KM</li>
                            <li>Hatkanangale Railway Station - 4.5 KM</li>
                            <li>Sangli Bus stand - 32 KM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LocationMap