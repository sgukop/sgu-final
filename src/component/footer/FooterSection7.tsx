import Link from 'next/link'
import React from 'react'
import NavLink from '../../component/navigation/NavLink';
interface FooterProp {
    logo: string;
    style: string;
    descStyle: string;
    socialStyle: string;
}
const FooterSection7:React.FC<FooterProp> = ({logo, style, descStyle, socialStyle}) => {
  return (
    <footer className={`tl-footer ${style}`}>
        <div className="tl-footer-top">
            <div className="container">
                <div className="row gy-5 justify-content-between">
                    <div className="col-xxl-7 col-xl-7">
                        <div className="row gy-5">
                            <div className="col-md-11 col-sm-10 col-12">
                                <div className="tl-footer-widget">
                                   {/* <Link href="/" className="footer-logo">
                                        <img src={logo} alt="Logo"/>
                                    </Link>

                                    <p className={descStyle}>The Sanjay Ghodawat University stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life.</p>  */}
                                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4401.734396445252!2d74.3826016900257!3d16.74328798113293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1511256219757" width="100%" height="400px" style={{border:"0px"}} ></iframe>

                                   {/*  <ul className={socialStyle} style={{marginTop:"20px"}}>
                                        <li><a href="https://twitter.com/SGUniversityKop" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="https://www.facebook.com/SGUniversityKolhapur" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dia-Km9XXP4" target="_blank"><i className="fa-brands fa-square-youtube"></i></a></li>
                                        <li><a href="https://www.sanjayghodawatuniversity.ac.in/sgu-exam" target="_blank"><i className="fa-brands fa-square-google-plus"></i></a></li>
                                    </ul>  */}
                                </div>
                            </div>

                           {/*  <div className="col-sm-6 col-12 text-md-start text-sm-end">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">Get in touch</h5>

                                    <ul className="tl-footer-links tl-footer-contact-infos">

                                    <li><a href="mailto:registrar@sanjayghodawatuniversity.ac.in" target="_blank" className="tl-footer-number">registrar@sanjayghodawatuniversity.ac.in</a></li>

                                        <li className="tl-footer-number">Toll Free : 1800 31300 1566</li>
                                        <li className="tl-footer-number">+91 90110 39800 / 90110 22567</li> <br/>
                                        
                                        <li>
                                            <p className="tl-footer-address">Sanjay Ghodawat University,<br/>Kolhapur - Sangli Highway, <br/> A/p Atigre - 416 118, <br/>Tal. - Hatkanangale, <br/> Dist. - Kolhapur,Maharashtra, India</p>
                                        </li>

                                        <li><Link href="/location-map" className="tl-6-footer-map-btn">Get Directions <i className="fa-light fa-arrow-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-xxl-5 col-xl-5">
                        <div className="row gy-5">
                            <div className="col-sm-6 col-6 col-xxs-12">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">About Us</h5>
                                    <ul className="tl-footer-links">
                                        <li><Link href="/about-university" target="_blank">About SGU</Link></li>
                                         {/*<li><Link href="/vision-mision" target="_blank">Vision & Mission</Link></li>
                                        <li><Link href="/quality-policy" target="_self">Quality Policy & Objective</Link></li>
                                        <li><Link href="/core-values" target="_self">Core Values</Link></li>  
                                        <li><Link href="/social-responsibilities" target="_blank">Social Responsibilities</Link></li>*/}
                                        <li><Link href="/student-submenues" target="_blank">Student</Link></li>
                                        <li><Link href="/infrastructure" target="_self">Infrastructure</Link></li>
                                        <li><Link href="/feedback" target="_blank">Feedback</Link></li>
                                        <li><Link href="/download" target="_blank">Download</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-6 col-xxs-12 text-md-start text-sm-center">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">Academics</h5>
                                    <ul className="tl-footer-links">
                                        <li><Link href="/academic-brochure" target="_blank">Academic Brochure</Link></li>
                                       {/*  <li><Link href="/academic-framework" target="_blank">Academic Framework</Link></li>  */}
                                        <li><Link href="/collaborations" target="_blank">Foreign University Collaborations</Link></li>
                                        <li><Link href="/industry-collaborations" target="_blank">Industry Collaborations</Link></li>
                                        <li><Link href="/library-about" target="_blak">Knowledge Research Center</Link></li>
                                        {/* <li><Link href="/beyond-studies" target="_blank">Beyond Studies</Link></li>  */}
                                       
                                    </ul>
                                </div>
                            </div>

                           {/* <div className="col-sm-4 col-6 col-xxs-12 text-md-start text-sm-center">
                                <div className="tl-footer-widget">
                                   <ul className="tl-footer-links mt-40">
                                        <li><Link href="/sgu-global" target="_blank">SGU Global</Link></li>
                                        <li><Link href="#" target="_blank">Mandatory Disclosure</Link></li>
                                        <li><Link href="/careers" target="_blank">Careers</Link></li>
                                        <li><Link href="/antiragging" target="_blank">Anti-Ragging</Link></li>
                                        <li><Link href="/photo-gallery" target="_blank">Photo Gallery</Link></li>
                                        <li><Link href="http://117.239.47.179:82/School/" target="_blank">SGU Moodle</Link></li>
                                       
                                    </ul>
                                </div>
                            </div>  */}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-footer-bottom">
            <div className="container">
                <p className="tl-copyright-txt m-0 text-center">Copyright &copy; 2024 All Rights Reserved by Enark</p>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection7