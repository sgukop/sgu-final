import CommerceDeptProgramsNew from '@/component/faculty/School-of-Commerce/CommerceDeptProgramsNew';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Best B.Com and M.Com colleges in Kolhapur for Career | SGU',
    description: 'Planning to join best B.Com and M.Com colleges in Kolhapur? SGU provides industry-oriented commerce education, internships, and the skills needed for successful careers.',
  }
const CommerceDeptProgramsNewPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title="Programs Under Department of Commerce" style=''/>
        <CommerceDeptProgramsNew />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default CommerceDeptProgramsNewPage