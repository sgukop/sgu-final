import PharmacyDeptPrograms from '@/component/faculty/School-of-Pharmaceutical-Sciences/PharmacyDeptPrograms';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Best B.Pharmacy college in Kolhapur | SGU',
    description: 'Explore best B Pharmacy colleges in Kolhapur. Gain practical skills, clinical exposure, and industry-ready education to build a successful pharmacy career at SGU.',
  }
const PharmacyDeptProgramsPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Programs Under Pharmacy' style=''/>
        <PharmacyDeptPrograms />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default PharmacyDeptProgramsPage