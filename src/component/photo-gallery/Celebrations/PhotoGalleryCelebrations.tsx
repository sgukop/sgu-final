import Link from 'next/link'
import React from 'react'

const PhotoGalleryCelebrations = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Photo Gallery - Celebrations</h2>
                <div className="row gy-4 gy-sm-5 tl-1-blogs-row">
                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/photo-gallery/celebrations/60th-birthday-celebration/3.jpeg" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-60-birthday">60th Birthday Celebration of Mr. Sanjayji Ghodawat</Link></h4>
                                    <Link href="/photo-gallery-60-birthday" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>
                        <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/photo-gallery/celebrations/59th-birthday-celebration/1.jpg" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-59-birthday">59th Birthday Celebration of Mr. Sanjayji Ghodawat</Link></h4>
                                    <Link href="/photo-gallery-59-birthday" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                        
                        
                    </div> 
                    
                </div>
             
    </section>
  )
}

export default PhotoGalleryCelebrations