import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const EnglishDeptDownloads = () => {
  return (
    <section className="pt-100 pb-100">
    <div className="container-fluid">
    <div className="row">
          <MenuList dept="English" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-4 align-items-center">
            <div className="col-lg-5">
                <div className="tl-13-banner-img text-center text-lg-end">
                    <img src="assets/images/english-dept/download-brochure/download-brochure-image.png" alt="Download Brochure Image" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-lg-7">
                <div className="tl-13-banner-txt">
                    <h1 className="tl-13-banner-title">Learn Tech Embracing Technology Education Excellence.</h1>
                    <p className="tl-13-banner-descr">To be the centre of excellence in education and research in the field of School of Commerce and Management.</p>
                    <div className="tl-header-actions"><a className="tl-def-btn" href="https://manage-api.sguk.ac.in/api/assets/6751765b4b17e19d8f361ed7" target="_blank">Brochure</a></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  )
}

export default EnglishDeptDownloads