import Academicyear2324 from '@/component/admissions/Fee-Structure/Academic-Year-2324/Academicyear2324'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const Academicyear2324Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Academic Year 2024-25' style=''/>
        <Academicyear2324/>
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default Academicyear2324Page