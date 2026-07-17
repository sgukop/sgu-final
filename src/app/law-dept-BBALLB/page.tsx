import LawDeptBBALLB from '@/component/faculty/School-of-Legal-Studies/LawDeptBBALLB';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Leading BBA LLB college in Kolhapur | SGU',
    description: 'Study at the Best BBA LLB College in Kolhapur at SGU with integrated business management and legal education, industry-oriented learning, expert faculty and practical exposure.',
  }
const LawDeptBBALLBPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Programs Under Law Department' style=''/>
        <LawDeptBBALLB />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default LawDeptBBALLBPage