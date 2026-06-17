import Link from 'next/link'
import React from 'react'

const NationalFestivals = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Photo Gallery - National Festivals</h2>
                <div className="row gy-4 gy-sm-5 tl-1-blogs-row">
                    <div className="col-lg-4">
                        <div className="tl-1-blog flex flex-col justify-center h-full">
                            <img src="assets/images/photo-gallery/national-festivals/republic-day-2025/10.JPG" alt="National Festivals Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photoes-republic-day-2025">26 January Republic day 2025</Link></h4>
                                    <Link href="/photoes-republic-day-2025" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    
                </div>
             </div>
    </section>
  )
}

export default NationalFestivals