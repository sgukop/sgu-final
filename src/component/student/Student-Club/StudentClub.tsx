import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const StudentClub = () => {
  return (
    <section className="tl-1-blogs pt-100 pb-100">
        <div className="container">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Student Club</h2>
            <p className="dark-mode-white-color"><a href="#" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Registration link for SGU Student Clubs 2023-24 <i className="fa-regular fa-arrow-right"></i></a></p>
            <p className="dark-mode-white-color mb-50"><a href="https://docs.google.com/forms/d/e/1FAIpQLSd85tGMRU1BWa8rcxCofd9AopxTs4im_Sr_KStfJR5TAikMpg/viewform" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Registration link for Co-Curricular Courses (UCC) 2023-24 <i className="fa-regular fa-arrow-right"></i></a></p>
                <div className="row gy-4 gy-sm-5 tl-1-blogs-row">
               
                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/student/club/kc.jpeg" alt="Knowledge Club Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/student-knowledge-club">Knowledge Club</Link></h4>
                                    <Link href="/student-knowledge-club" className="tl-1-blog-btn mt-0">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/student/club/yc.jpeg" alt="Yoga And Meditation Club Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/student-yoga-club">Yoga And Meditation Club</Link></h4>
                                    <Link href="/student-yoga-club" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/student/club/ad.jpeg" alt="Adventure Club Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/student-adventure-club">Adventure Club</Link></h4>
                                    <Link href="/student-adventure-club" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>  

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/student/club/bc.jpeg" alt="Business Club Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/student-business-club">Business Club</Link></h4>
                                    <Link href="/student-business-club" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/student/club/gamerealm-club.jpg" alt="GameRealm Club Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/student-game-realm-club">GameRealm Club</Link></h4>
                                    <Link href="/student-game-realm-club" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>  

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/student/club/tc.jpg" alt="Entertainment Club Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/student-entertainment-club">Entertainment Club</Link></h4>
                                    <Link href="/student-entertainment-club" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/student/club/fine-arts-club.jpg" alt="Fine Arts Club Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/student-finearts-club">Fine Arts Club</Link></h4>
                                    <Link href="/student-finearts-club" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>  

                    <div className="col-lg-4">
                        <div className="tl-1-blog">
                            <img src="assets/images/student/club/design-club1.jpg" alt="Design Club Image" className="tl-1-blog-img-new"/>
                                <div className="tl-1-blog-txt">
                                    <h4 className="tl-1-blog-title"><Link href="/student-design-club">Design Club</Link></h4>
                                    <Link href="/student-design-club" className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                        </div>
                    </div>  
                </div>
            </div>
    </section>
  )
}

export default StudentClub