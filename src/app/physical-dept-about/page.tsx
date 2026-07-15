import PhysicalDeptAbout from '@/component/faculty/School-of-Physical-Sciences/PhysicalDeptAbout';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Best B.Sc. Physics college in Kolhapur | SGU',
    description: ' Looking for the best BSc Physics colleges in Kolhapur? At SGU, explore expert faculty, modern labs, research opportunities, and career-focused learning.',
  }
const PhysicalDeptAboutPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Physics Department' style=''/>
        <PhysicalDeptAbout />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default PhysicalDeptAboutPage