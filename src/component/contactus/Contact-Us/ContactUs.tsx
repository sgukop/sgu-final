import React from 'react'

const ContactUs = () => {
  return (
    <div className="tl-event-details-container pt-100 pb-100">
        <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Contact Us</h2>
            <div className="row align-items-center justify-content-center">
            <h3 className="tl-event-details-area-title text-[#4f70b6]">SGU Contact</h3>
                <div className="col-lg-6">
                    <ul className="tl-event-details-infos pl-50">
                      <li className="tl-event-details-info">
                            <span>
                                <i className="fa-solid fa-building-columns mr-3"></i> <strong>Sanjay Ghodawat University,</strong><br/><p className="ml-10">Kolhapur - Sangli Highway, <br/> A/p Atigre - 416 118, <br/>Tal. - Hatkanangale, <br/> Dist. - Kolhapur,Maharashtra, India</p> 
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-envelope mr-3"></i> 
                                <a target="_blank" href="mailto:registrar@sguk.ac.in" className="tl-def-btn-2">
                                    registrar@sguk.ac.in
                                </a>
                            </span>
                        </li>
               
                           <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-mobile-button mr-3"></i> +91 90110 39800 / 90110 22567
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <h3 className="tl-event-details-area-title mt-10 text-[#4f70b6]">Admissions / Counselling Cell</h3>
                <p className="text-center dark-mode-white-color mt-6 mb-6">For admissions, more information & queries about admissions , admission process and other admission related information contact -</p>
               
                <div className="col-lg-6">
                    <ul className="tl-event-details-infos">
                        <li className="tl-event-details-info">
                            <span>
                                <i className="fa-solid fa-user mr-3"></i><strong>Mr. Vashikar Rajesh Ashok</strong><br/> <p className="ml-25">I/C Director, Admission & Marketing Cell</p> 
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-mobile-button mr-3"></i> +91 90110 39800
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-phone-office mr-3"></i> +91 230 - 2463781
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-envelope mr-3"></i> 
                                <a target="_blank" href="mailto:admissions@sguk.ac.in" className="tl-def-btn-2">
                                    admissions@sguk.ac.in
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="tl-event-details-infos">
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-regular fa-user"></i> <strong>Mr. Latkar Abhijit Raghunath</strong><br/> <p className="ml-20">Deputy Director, Admission & Marketing Cell</p> 
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-mobile-button mr-3"></i> +91 90110 22567
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-phone-office mr-3"></i> +91 230 - 2463782
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-envelope mr-3"></i> 
                                <a target="_blank" href="mailto:admissions@sguk.ac.in" className="tl-def-btn-2">
                                    admissions@sguk.ac.in
                                </a>
                            </span>
                        </li>
                    </ul>
                   
                </div>
            </div>

            <div className="row align-items-center justify-content-center">
                <h3 className="tl-event-details-area-title mt-10 mb-10 text-[#4f70b6]">IT Cell</h3>
                <div className="col-lg-6">
                    <ul className="tl-event-details-infos pl-50">
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-user mr-3"></i><strong>Mr. Kiran D. Dhanawade</strong><br/> <p className="ml-25">Manager IT - Sanjay Ghodawat University Kolhapur.</p>
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-mobile-button mr-3"></i> +91 90110 39935
                            </span>
                        </li>
               
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-envelope mr-3"></i> 
                                <a target="_blank" href="mailto: kiran.dhanawade@sguk.ac.in" className="tl-def-btn-2">
                                    kiran.dhanawade@sguk.ac.in
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* <div className="col-lg-6 mb-20">
                    <ul className="tl-event-details-infos pl-50">
                        <li className="tl-event-details-info">
                            <span className="key mt-20">
                                <i className="fa-solid fa-user mr-10"></i><strong>Mr. Nitin V. Kshirsagar</strong><br/> <p className="mt-10 ml-25">Assistant Network Admin</p>
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key mt-10 mb-10">
                                <i className="fa-solid fa-mobile-button mr-10"></i> +91 96894 85199
                            </span>
                        </li>
               
                        <li className="tl-event-details-info">
                            <span className="key mt-10 mb-10">
                                <i className="fa-solid fa-envelope mr-10"></i> 
                                <a target="_blank" href="mailto:nitin.kshirsagar@sguk.ac.in" className="tl-def-btn-2">
                                    nitin.kshirsagar@sguk.ac.in
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>  */}

                <div className="col-lg-6">
                    <ul className="tl-event-details-infos pl-50">
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-user mr-3"></i><strong>Mr. Vikas Bhandari</strong><br/> <p className="ml-25">Technician - Hardware & Software</p>
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-mobile-button mr-3"></i> +91 74990 02061
                            </span>
                        </li>
               
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-envelope mr-3"></i> 
                                <a target="_blank" href="mailto:vikas.bhandari@sguk.ac.in" className="tl-def-btn-2">
                                    vikas.bhandari@sguk.ac.in
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-6 mt-10">
                    <ul className="tl-event-details-infos pl-50">
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-user mr-3"></i><strong>Mr. Vishal Pasale</strong><br/> <p className="ml-25">System Administrator.</p>
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-mobile-button mr-3"></i> +91 8600360793
                            </span>
                        </li>
               
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-envelope mr-3"></i> 
                                    <a target="_blank" href="mailto:vishal.pasale@sguk.ac.in" className="tl-def-btn-2">
                                        vishal.pasale@sguk.ac.in
                                    </a>
                            </span>
                        </li>
                    </ul>
                
                </div>
            </div>

            <div className="row align-items-center justify-content-center">
                <h3 className="tl-event-details-area-title mt-10 mb-10 text-[#4f70b6]">Transport Department</h3>
                <div className="col-lg-6">
                    <ul className="tl-event-details-infos pl-50">
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-user mr-3"></i><strong>Mr. Amar Pawar</strong><br/> <p className="ml-25">Transport Incharge - Sanjay Ghodawat University Kolhapur</p>
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-phone-office mr-3"></i> +91 90110 39743
                            </span>
                        </li>
                    </ul>
               
                </div>
            </div>

            <div className="row align-items-center justify-content-center">
                <h3 className="tl-event-details-area-title mt-10 mb-10 text-[#4f70b6]">Ombudsperson</h3>
                <div className="col-lg-6">
                    <ul className="tl-event-details-infos pl-50">
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-user mr-3"></i><strong>Prof.(Dr.)A.M. Gurav.</strong><br/> <p className="ml-25">Ombudsperson - Sanjay Ghodawat University Kolhapur</p>
                            </span>
                        </li>
                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-phone-office mr-3"></i> +91 9850012545
                            </span>
                        </li>

                        <li className="tl-event-details-info">
                            <span className="key">
                                <i className="fa-solid fa-envelope mr-3"></i> 
                                    <a target="_blank" href="mailto:annasahebg@yahoo.co.in" className="tl-def-btn-2">
                                        annasahebg@yahoo.co.in
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

export default ContactUs