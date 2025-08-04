"use client";
import SguVideo from '@/component/video-section/SguVideo';
import React from 'react'
import Head from 'next/head';
import NewHeaderSection from '@/component/header/NewHeaderSection';
import NewBanner from '@/component/banner/NewBanner';
import NewAboutUs from '@/component/about/About-us/NewAboutUs';
import NewSchoolsSection from '@/component/schools/NewSchoolsSection';
import NewRecruitersSection from '@/component/our-recruiters/NewRecruitersSection';
import NewFooter from '@/component/footer/NewFooter';

//export const metadata: Metadata = {
//title: "SGU University",
//description: "Developed by Enark",
//};  
const Home10 = () => {
  // const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet" />
      </Head>


   {/* <div className='home-10'>

        <HeaderSection8
          style='tl-10-header'
          darkLogo="assets/images/sguu-logoo.png"
          lightLogo="assets/images/sgulogo-white.jpg"
          headerStyle=''
          btnStyle='tl-def-btn'
          loginBtn={true}
        />
        <BannerSection />
        <AboutSection />
        <CourseSection2 />
        <Tatatechnologies />
        <WhySGU />
        <CourseSlider />
        <SchoolsSlider />
        <CampusSection style="tl-4-campus" textBg='' />
        <FacultySlider22 />
        <TestimonialSection2 />
        <AboutSection6 padding='pt-120' margin='mt-0' />
         <SguVideo />   
        <FooterSection7 style='' logo='assets/images/logos/sgulogo.jpg' descStyle='tl-footer-descr' socialStyle='tl-footer-socials' />
        <VideoModal />
       

      </div>     */}  

       <div className='home-10 font-sans'>
        <NewHeaderSection/>
        <NewBanner/>
        <NewAboutUs/>
        <NewSchoolsSection/>
        <NewRecruitersSection/>
        <SguVideo/>
        <NewFooter/>
      </div>   

    </>
  )
}

export default Home10