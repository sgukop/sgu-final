import MBAProgram from '@/component/faculty/School-of-Management/Programs/MBAProgram';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'MBA college in Kolhapur for Career Growth | SGU',
    description: 'Discover MBA colleges in Kolhapur with SGU, offering modern management education, internships, leadership development, and placement opportunities',
  }
const MBAProgramPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='MBA' style=''/>
        <MBAProgram />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default MBAProgramPage