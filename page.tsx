import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import SguVideo from '@/component/video-section/SguVideo';
import NewHeaderSection from '@/component/header/NewHeaderSection';
import NewBanner from '@/component/banner/NewBanner';
import NewAboutUs from '@/component/about/About-us/NewAboutUs';
import NewSchoolsSection from '@/component/schools/NewSchoolsSection';
import NewRecruitersSection from '@/component/our-recruiters/NewRecruitersSection';
import NewFooter from '@/component/footer/NewFooter';

const Home10 = () => {
  return (
    <>
      <Head>
        <title>Top University in Kolhapur for UG & PG Courses | SGU</title>
        <meta name="description" content="Explore career-oriented UG, PG, Diploma and PhD programs with world-class infrastructure, scholarships, and placement support. Apply Now !!" />
        <meta name="google-site-verification" content="GxwsG06HAefi2nLkir4k_hQ7JpXzX1qf7bhtGnhWCEk" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet" />
      </Head>

      

      {/* Main Page Layout */}
      <div className='home-10 font-sans'>
        <NewHeaderSection />
        <NewBanner />
        <NewAboutUs />
        <NewSchoolsSection />
        <NewRecruitersSection />
        <SguVideo />
        <NewFooter />
      </div>   
    </>
  );
};

export default Home10;