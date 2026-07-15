import LawDeptAbout from '@/component/faculty/School-of-Legal-Studies/LawDeptAbout';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Top BA LLB college in Kolhapur for careers | SGU',
    description: 'Build a successful legal career with top BA LLB colleges in Kolhapur. SGU offers practical learning, courtroom exposure, and expert guidance for aspiring lawyers.',
  }
const LawDeptAboutPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='About Department' style=''/>
        <LawDeptAbout />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default LawDeptAboutPage