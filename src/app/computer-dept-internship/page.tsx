import ComputerDeptInternship from '@/component/faculty/Computer-Science-Engineering/ComputerDeptInternship';
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
const ComputerDeptInternshipPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Internship' style=''/>
        <ComputerDeptInternship sectionStyle="tl-3-programs-pills tl-14-categories pt-100 pb-100" pageStyle='tl-14' categoryStyle='tl-14-category' />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ComputerDeptInternshipPage