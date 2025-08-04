import Link from 'next/link'
import React from 'react'

const CelebritiesSGU = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Photo Gallery - Celebrities</h2>
                <div className="row gy-4 gy-sm-5 tl-1-blogs-row">
                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/photo-gallery/celebrities@sgu/cover-photoes/prasad-ok.jfif" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-58-birthday">Marathi Film Actors Visit</Link></h4>
                                    <Link href="/photo-gallery-58-birthday" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/photo-gallery/celebrities@sgu/cover-photoes/sara-ali-khan.jpg" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-54-birthday">Bollywood Megastar Sara Ali Khan Visit</Link></h4>
                                    <Link href="/photo-gallery-54-birthday" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/photo-gallery/celebrities@sgu/cover-photoes/tiger-shroff.jpg" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-53-birthday">Bollywood Actor Tiger Shroff Visit</Link></h4>
                                    <Link href="/photo-gallery-53-birthday" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 
                </div>
             </div>
    </section>
  )
}

export default CelebritiesSGU