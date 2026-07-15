import DesignDeptProgrammes from '@/component/faculty/School-of-Design/Programmes/DesignDeptProgrammes';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Top Fashion Designing college in Kolhapur | SGU',
    description: 'Explore the best fashion designing colleges in Kolhapur. Learn about courses, careers, practical training, and how SGU prepares future fashion professionals.',
  }
const DesignDeptProgrammesPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='About Program' style=''/>
        <DesignDeptProgrammes />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default DesignDeptProgrammesPage