// import AboutUniversity from '@/component/about/AboutUniversity/AboutUniversity'
import AdmissionSection from '@/component/admissions/AdmissionSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ContactSection2 from '@/component/contact/ContactSection2'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }

const AdmissionOpenPage = () => {
    return (
        <Layout5>
            <BreadcrumbSection title='Admission Open' style=''/>
            {/* <AdmissionSection style={paddingTop:'60px', marginBottom:'60px', marginTop:'20px'}/> */}
            <AdmissionSection style=''/>
            {/* <ContactSection2/> */}
           {/* <PricingSection/>
            <CtaSection4 style='tl-8-cta-inner'/> */}
        </Layout5>
      )
}

export default AdmissionOpenPage;

// padding='' margin=''