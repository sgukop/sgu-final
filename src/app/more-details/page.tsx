// import AboutUniversity from '@/component/about/AboutUniversity/AboutUniversity'
import AlumniTestimonialSlider from '@/component/slider/AlumniTestimonialSlider'
import SoftwareSlider from '@/component/slider/SoftwareSlider'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }

const MoreDetailsPage = () => {
    return (
        <Layout5>
            <BreadcrumbSection title='More About Us' style=''/>
            <SoftwareSlider/>
            {/* <AdmissionSection style='tl-4-admission-inner'/> */}
            <AlumniTestimonialSlider/>
           {/* <PricingSection/>
            <CtaSection4 style='tl-8-cta-inner'/> */}
        </Layout5>
      )
}

export default MoreDetailsPage;