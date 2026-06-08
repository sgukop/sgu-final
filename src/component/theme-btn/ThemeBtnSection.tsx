'use client'
import { useTalimContext } from '@/context/TalimContext';
import Link from 'next/link';
import React from 'react';

const ThemeBtnSection = () => {
  const {isDarkTheme,toggleTheme} = useTalimContext()

  return (
    <>
   {/* <div className={`tl-dark-light-view-box ${isDarkTheme ? '' : 'has-clicked'}`} onClick={toggleTheme}>
          <div className={`tl-dark-light-view-toogle-dot ${isDarkTheme ? 'pos-bottom' : ''}`}></div>
    </div>  */}

    {/* <div className="social-media-container">
      <div>
          <a href="https://www.facebook.com/SGUniversityKolhapur" target="_blank"><img src="assets/images/social-media-icons/facebook.png" /></a>
      </div>
      <div>
          <a href="https://www.youtube.com/watch?v=dia-Km9XXP4" target="_blank"><img src="assets/images/social-media-icons/youtube.png" /></a>
      </div>
      <div>
          <a href="https://twitter.com/SGUniversityKop" target="_blank"><img src="assets/images/social-media-icons/twitter.png" /></a>
      </div>
      <div>
          <a href="https://www.sanjayghodawatuniversity.ac.in/sgu-exam" target="_blank"><img src="assets/images/social-media-icons/google-plus.png" /></a>
      </div>
    </div>  */}

    <ul className="social-media">
        <li>
            <a href="https://www.facebook.com/SGUniversityKolhapur?mibextid=LQQJ4d" target="_blank"><i className="fab fa-facebook-f icon"></i></a>
        </li>
        <li>
          <a href="https://www.youtube.com/@sguniversity7645" target="_blank"><i className="fab fa-youtube icon"></i></a>
        </li>
        <li>
          <a href="https://www.instagram.com/sanjayghodawatuniversity/profilecard/?igsh=MWp3b3Q3OTF2bHBwcQ==" target="_blank"><i className="fab fa-instagram icon"></i></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/school/sanjayghodawatuniversity/" target="_blank"><i className="fab fa-linkedin icon"></i></a>
        </li>
    </ul>

     <div>
	     {/*  <div className="admission-btn">
		      <a href="/admission-open"><h3>Admission Open</h3></a>
	      </div>  */}

     {/* <ul className="social-media-right">
          <li>
                <a href="#"><i className="fa-solid fa-phone icon"></i></a>
          </li>
          <li>
              <a href="#"><i className="fa-brands fa-whatsapp icon"></i></a>
          </li>
          <li>
              <a href="#"><i className="fa-solid fa-disc-drive icon"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-pen-line icon"></i></a>
          </li>
          <li>
              <a href="#"><i className="fa  fa-list-alt icon"></i></a>
          </li>
      </ul>  */}

    <div className="social-media-right">
        <ul>
            <li>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=+917028811192&amp;text=Hi%2C%20I%20need%20assistance%20for%20Admissions%202026.">
                    <i className="fa-brands fa-whatsapp icon"></i>
                    <span className="st-label">Whatsapp only <br/> +91 7028811192</span>
                </a>
            </li>
            
            <li>
                <a href="/admission-open" target="_blank">
                    <i className="fa  fa-list-alt icon"></i>
                    <span className="st-label">Enquiry Form</span>
                </a>
            </li>
           {/* <li>
                <a className="feedback-btn" href="https://forms.gle/YYbkzzEuNAu7Q2r87" target="_blank">
                    <i className="fa  fa-list-alt icon"></i>
                    <span className="st-label">SGUEED 2025 Form</span>
                </a>
            </li>*/}
        </ul>
    </div>
</div>
    
</>
  );
};

export default ThemeBtnSection;

