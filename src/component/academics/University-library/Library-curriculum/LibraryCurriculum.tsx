import React from "react";
import NavLinks from "../Reusable-components/Navlinks";
import MenuList from "../Reusable-components/MenuList";

const LibrrayCurriculum = () => {
   return(
    <div className="pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Curriculum</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-3">
                <div className="col-md-6 col-lg-6 col-xxs-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <h3 className="tl-event-details-area-title text-[#4f70b6]">School of Technology</h3>
                               <ul className="tl-event-details-key-content-list phd-container">
                                    <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/676267f99173bf9f471acfc3">FY B.Tech <i className="fa-regular fa-arrow-right-long"></i></a></li>

                                    <li><p className="dark-mode-white-color mb-2"><strong>SY B.Tech</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692b314f56d3a0bcfb3516" target="_blank" className="tl-blog-details-tag">Aeronautical</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692b444f56d3a0bcfb351b" target="_blank" className="tl-blog-details-tag">Civil</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692b594f56d3a0bcfb3520" target="_blank" className="tl-blog-details-tag">CSE</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692b6a4f56d3a0bcfb3525" target="_blank" className="tl-blog-details-tag">Electrical</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692b7a4f56d3a0bcfb352a" target="_blank" className="tl-blog-details-tag">Electronics</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692b8a4f56d3a0bcfb352f" target="_blank" className="tl-blog-details-tag">Mechanical</a>
	                                    </div>
                                    </li>

                                    <li><p className="dark-mode-white-color mb-2"><strong>TY B.Tech</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c054f56d3a0bcfb3540" target="_blank" className="tl-blog-details-tag">Aeronautical</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c164f56d3a0bcfb3545" target="_blank" className="tl-blog-details-tag">Civil</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c274f56d3a0bcfb354a" target="_blank" className="tl-blog-details-tag">CSE</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c374f56d3a0bcfb354f" target="_blank" className="tl-blog-details-tag">Electrical</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c484f56d3a0bcfb3554" target="_blank" className="tl-blog-details-tag">Electronics</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c5a4f56d3a0bcfb3559" target="_blank" className="tl-blog-details-tag">Mechanical</a>
	                                    </div>
                                    </li>

                                    <li><p className="dark-mode-white-color mb-2"><strong>M.Tech</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c734f56d3a0bcfb355e" target="_blank" className="tl-blog-details-tag">Civil Construction Engg. & Management M.Tech</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c854f56d3a0bcfb3563" target="_blank" className="tl-blog-details-tag">Civil Structural Engineering M.Tech</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692c964f56d3a0bcfb3568" target="_blank" className="tl-blog-details-tag">CSE M.Tech</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692ca74f56d3a0bcfb356d" target="_blank" className="tl-blog-details-tag">E&TC M.Tech</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692cbb4f56d3a0bcfb3572" target="_blank" className="tl-blog-details-tag">Electrical M.Tech</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692cca4f56d3a0bcfb3577" target="_blank" className="tl-blog-details-tag">Mechanical Design M.tech</a>
                                            <a href="https://manage-api.sguk.ac.in/api/assets/67692cdb4f56d3a0bcfb357c" target="_blank" className="tl-blog-details-tag">Mechanical MFG tech. M.tech</a>
	                                    </div>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
               
              
                <div className="col-md-6 col-lg-6 col-xxs-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <h3 className="tl-event-details-area-title text-[#4f70b6]">School of Commerce and Management</h3>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li><p className="dark-mode-white-color mb-2"><strong>B.Com Part I ,II & III</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692d594f56d3a0bcfb358f" target="_blank" className="tl-blog-details-tag">B.Com. Part I Sem I & II</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692d6a4f56d3a0bcfb3594" target="_blank" className="tl-blog-details-tag">B.Com. Part II Sem III & IV</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692d7a4f56d3a0bcfb3599" target="_blank" className="tl-blog-details-tag">B.Com. Part III Sem V & VI</a>
	                                    </div>
                                </li>

                                <li><p className="dark-mode-white-color mb-2"><strong>BBA Part I ,II & III</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692d944f56d3a0bcfb359e" target="_blank" className="tl-blog-details-tag">BBA Part I Sem I & II</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692da54f56d3a0bcfb35a3" target="_blank" className="tl-blog-details-tag">BBA Part II Sem III & IV</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692db64f56d3a0bcfb35aa" target="_blank" className="tl-blog-details-tag">BBA Part III Sem V & VI</a>
	                                    </div>
                                </li>
                                <li><p className="dark-mode-white-color"><strong>MBA Part I & II</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692dcc4f56d3a0bcfb35af" target="_blank" className="tl-blog-details-tag">MBA Part I Sem I & II</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692ddf4f56d3a0bcfb35b4" target="_blank" className="tl-blog-details-tag">MBA Part II Sem III & IV</a>
	                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xxs-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">School of Science</h3>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li><p className="dark-mode-white-color mb-2"><strong>B.Sc Chemistry I ,II & III</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692e024f56d3a0bcfb35b9" target="_blank" className="tl-blog-details-tag">F.Y. B.Sc. Chemistry</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692e164f56d3a0bcfb35be" target="_blank" className="tl-blog-details-tag">S.Y. B.Sc. Chemistry</a>
                                            <a href="https://manage-api.sguk.ac.in/api/assets/67692e294f56d3a0bcfb35c3" target="_blank" className="tl-blog-details-tag">T.Y. B.Sc. Chemistry</a>
	                                    </div>
                                </li>

                                <li><p className="dark-mode-white-color mb-2"><strong>M.Sc Chemistry I & II</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692e414f56d3a0bcfb35c8" target="_blank" className="tl-blog-details-tag">F.Y. M.Sc. Chemistry</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692e554f56d3a0bcfb35cd" target="_blank" className="tl-blog-details-tag">S.Y. M.Sc. Analytical Chemistry</a>
                                            <a href="https://manage-api.sguk.ac.in/api/assets/67692e674f56d3a0bcfb35d2" target="_blank" className="tl-blog-details-tag">S.Y. M.Sc. Organic Chemistry</a>
	                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xxs-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">School of Pharmaceutical Sciences</h3>
                            <ul className="tl-event-details-key-content-list phd-container">
                               <li><p className="dark-mode-white-color mb-2"><strong>B. Pharmacy</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692e814f56d3a0bcfb35d7" target="_blank" className="tl-blog-details-tag">F.Y. B.Pharm.</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692e954f56d3a0bcfb35dc" target="_blank" className="tl-blog-details-tag">S.Y. B.Pharm.</a>
                                        </div>
                                </li>
                                <li><p className="dark-mode-white-color mb-2"><strong>D. Pharmacy</strong></p>
                                        <div className="tl-blog-details-tags flex-wrap">
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/676930074f56d3a0bcfb3609" target="_blank" className="tl-blog-details-tag">F.Y. D.Pharm.</a>
	                                        <a href="https://manage-api.sguk.ac.in/api/assets/67692ebf4f56d3a0bcfb35e6" target="_blank" className="tl-blog-details-tag">S.Y. D.Pharm.</a>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xxs-12">
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">School of Liberal Arts</h3>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/676274d69173bf9f471acfd9">FY. B.A. MMMC - Booklet print <i className="fa-regular fa-arrow-right-long"></i></a></li>

                                <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/676275dc9173bf9f471acffb">SY.B.A. MMMC Booklet print <i className="fa-regular fa-arrow-right-long"></i></a></li>

                                <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/676274709173bf9f471acfd2">FY.B.A. <i className="fa-regular fa-arrow-right-long"></i></a></li>

                                <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/676274ed9173bf9f471acfde">SY.B.A. <i className="fa-regular fa-arrow-right-long"></i></a></li>

                                <li><a rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/676275039173bf9f471acfe3">TY.B.A. <i className="fa-regular fa-arrow-right-long"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default LibrrayCurriculum