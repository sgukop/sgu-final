import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
const AerospaceDeptSTTP = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
    <div className="container-fluid">
       <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">STTP Organised</h2>
       <div className="row">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

        <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
           <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">NPTEL Sponsored a one-day National level online workshop under the Title of NPTEL Awareness on 15/12/2021</h4>
                  </div>
                </div>
            </div>  

             <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">NPTEL Sponsored a one-day National level online workshop under the Title of NPTEL Awareness on 27/07/2022</h4>
                  </div>
                </div>
            </div>  

            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">ISTE Sponsored Five Days Online STTP on "Design, Development of Drone and Its Applications" from 21st to 25th June 2021.</h4>
                        <div className="tl-header-actions d-flex justify-content-start mt-25">
                            <Link className="tl-def-btn bg-[#f26122] text-white" href="https://manage-api.sguk.ac.in/api/assets/675026dc4b17e19d8f361ac5" target="_blank">STTP Brochure</Link> 
                            <Link className="tl-def-btn bg-[#f26122] text-white" href="https://manage-api.sguk.ac.in/api/assets/6750270a4b17e19d8f361aca" target="_blank">STTP Report</Link>
                        </div>
                       
                  </div>
                </div>
            </div>  

            <div className="col-xl-6 col-lg-10">
                <div className="tl-single-blog tl-14-blog">
                  <div className="tl-single-blog-txt tl-14-blog-txt">
                        <h4 className="achievements-title">Star Air Sponsored one week STTP on topic of Recent Trends & Developments in Aviation Maintenance from 13th to 17th February, 2023</h4>
                        <div className="tl-header-actions d-flex mt-25">
                            <Link className="tl-def-btn bg-[#f26122] text-white" href="https://manage-api.sguk.ac.in/api/assets/6750272a4b17e19d8f361acf" target="_blank">STTP Report From 13th to 17th February, 2023</Link>
                        </div>
                  </div>
                </div>
            </div>  
        </div>
    </div>
    </div>
    </div>
</section>
  )
}

export default AerospaceDeptSTTP