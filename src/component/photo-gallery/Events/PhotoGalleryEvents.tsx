import Link from 'next/link'
import React from 'react'

const PhotoGalleryEvents = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Photo Gallery - Events</h2>
                <div className="row gy-4 gy-sm-5 tl-1-blogs-row">
                    <div className="col-lg-4">
                        <div className="tl-1-blog flex flex-col justify-center h-full">
                            <img src="assets/images/photo-gallery/events/swinburne-university-visit/Swinburne2.jpeg" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-swinburne-university">Swinburne University Visit</Link></h4>
                                    <Link href="/photo-gallery-swinburne-university" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="tl-1-blog flex flex-col justify-center h-full">
                            <img src="assets/images/photo-gallery/events/cover-photoes/img-2.jfif" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-reinventing-india">Reinventing India 2018</Link></h4>
                                    <Link href="/photo-gallery-reinventing-india" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tl-1-blog flex flex-col justify-center h-full">
                            <img src="assets/images/photo-gallery/events/school-of-architecture-inauguration/25.jpg" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/school-of-architecture-inauguration">School of Architecture Inauguration</Link></h4>
                                    <Link href="/school-of-architecture-inauguration" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="tl-1-blog flex flex-col justify-center h-full">
                            <img src="assets/images/photo-gallery/events/vibrant-2023/1.jpg" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-vibrant-2023">Vibrant 2023</Link></h4>
                                    <Link href="/photo-gallery-vibrant-2023" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tl-1-blog flex flex-col justify-center h-full">
                            <img src="assets/images/photo-gallery/events/cover-photoes/3.jpg" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photo-gallery-vibrant-2018">Vibrant 2018</Link></h4>
                                    <Link href="/photo-gallery-vibrant-2018" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="tl-1-blog flex flex-col justify-center h-full">
                            <img src="assets/images/photo-gallery/events/cover-photoes/5.jfif" alt="Photo Gallery Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/photoes-orientation-program">Orientation Programme</Link></h4>
                                    <Link href="/photoes-orientation-program" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>
                </div>
             </div>
    </section>
  )
}

export default PhotoGalleryEvents