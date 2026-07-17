import AboutUniversity from '@/component/about/AboutUniversity/AboutUniversity'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Top University in Kolhapur for UG & PG Courses | SGU',
    description: 'Explore career-oriented UG, PG, Diploma and PhD programs with world-class infrastructure, scholarships, and placement support. Apply Now !!',
  }
const AboutUniversityPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='About University' style=''/>
        <AboutUniversity/>
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default AboutUniversityPage