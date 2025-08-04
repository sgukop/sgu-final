'use client'
import React from 'react'
import NavSection from '../navigation/NavSection';
import Link from 'next/link';
import { useTalimContext } from '@/context/TalimContext';
interface HeaderProps {
    style: string;
    logo: string;
}
const HeaderSection5:React.FC<HeaderProps> = ({style, logo}) => {
    const {isHeaderFixed,handleSidebarOpen} = useTalimContext()
  return (
    <div className={`tl-8-header ${style}`}>
    <div className="tl-8-top-header">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <ul className="tl-8-top-header-contacts">
                        <li><a href="tel:12356877787"><i className="fa-solid fa-phone"></i> 1800 31300 1566 </a></li>
                        <li><a href="mailto:info@xyz-text.com"><i className="fa-solid fa-envelope"></i>registrar@sanjayghodawatuniversity.ac.in</a></li>
                        <li><i className="fa-solid fa-location-dot"></i>Atigre - 416 118,Kolhapur</li>
                    </ul>
                </div>

                <div className="col-lg-4">
                    <ul className="tl-8-top-header-socials">
                    <li><a href="https://twitter.com/SGUniversityKop" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="https://www.facebook.com/SGUniversityKolhapur" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dia-Km9XXP4" target="_blank"><i className="fa-brands fa-square-youtube"></i></a></li>
                                        <li><a href="https://www.sanjayghodawatuniversity.ac.in/sgu-exam" target="_blank"><i className="fa-brands fa-square-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className={`tl-8-bottom-header ${isHeaderFixed ? 'sticky':''}`}>
        <div className="container">
            <div className="row g-0 align-items-center">
                <div className="col-xl-2 col-lg-2">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-6">
                            <div className="logo">
                                <Link href="/">
                                    <img src={logo} alt="Logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="d-lg-none d-flex justify-content-end col-6">
                            <button 
                            className="tl-hamburger navbar-toggler"
                            onClick={handleSidebarOpen}
                            >
                                <i className="icofont-navigation-menu"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="tl-nav-menu">
                        <NavSection ulPosition='justify-content-center' liStyle=''/>
                    </div>
                </div>

                <div className="col-2 d-lg-block d-none">
                    <div className="tl-header-actions d-flex justify-content-end">
                        <Link href="/register" className="tl-def-btn">Register Now!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HeaderSection5