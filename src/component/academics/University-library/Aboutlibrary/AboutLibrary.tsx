'use client'
import React from 'react';
import LibraryAutomation from './LibraryAutomation';
import NavLinks from "../Reusable-components/Navlinks"
import MenuList from "../Reusable-components/MenuList"

const AboutLibrary = () => {
   return (
    <section className="pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">About Knowledge Research Center</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks}/>
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/sgu-library/about-library/about.png" alt="Library Image" className="rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}}/>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div>
                       {/*  <h2 className="tl-14-section-title">About Library</h2>  */}
                        <p className="dark-mode-white-color text-black">	
                        SGU Central Knowledge Research Center provides a safe, comfortable and friendly environment enabling learning and advancement of knowledge. The vision of the Central Library is to be a leader and partner in providing worldwide information in creating and implementing ideas and services that advance research, teaching and learning. <br/><br/> The library has 37009 Books, 107 Journals and magazines, 3 e-journal packages which contain 4000 e-journals, approx 1600+ CD ROM, 12,000+ IIT Video lectures, 13 Newspapers and 50,000+ IIT Web Courses.</p>
                    </div>
                </div>
            </div>

            <div className="row tl-event-details-row g-4 mt-50 mb-50">
                <div className="col-lg-6">
                    <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                            <h3 className="tl-event-details-area-title text-white">Vision</h3>
                            <p className="dark-mode-white-color">The University library will be leader and partner in providing world wide information in creating and implementing ideas, services that advance research, teaching and learning.</p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                            <h3 className="tl-event-details-area-title text-white">Mission</h3>
                            <p className="dark-mode-white-color">To facilitate creation of new knowledge through acquisition, organization and dissemination of knowledge resources and providing value added services for bringing effectiveness in teaching, learning and research.</p>
                    </div>
                </div>
                <LibraryAutomation/>
            </div>
        </div>
    </div>
    </div>
</section>
    )
}

export default AboutLibrary
