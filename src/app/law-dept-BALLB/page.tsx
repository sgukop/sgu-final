import LawDeptBALLB from '@/component/faculty/School-of-Legal-Studies/LawDeptBALLB';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Best BBA LLB college in Kolhapur | SGU',
    description: 'Start your legal career with best BBA LLB colleges in Kolhapur. SGU offers hands-on learning, industry exposure, and the skills needed for legal success',
  }
const LawDeptBALLBPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Programs Under Law Department' style=''/>
        <LawDeptBALLB />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default LawDeptBALLBPage