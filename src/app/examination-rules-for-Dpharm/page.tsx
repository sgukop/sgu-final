import ExamRulesForDpharm from '@/component/examination/Examination-Rule-DPharm/ExamRulesForDpharm';
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
const ExamRulesForDpharmPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Examination Rule D. Pharm' style=''/>
        <ExamRulesForDpharm />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ExamRulesForDpharmPage