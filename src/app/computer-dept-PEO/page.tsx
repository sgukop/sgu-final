import ComputerDeptPEO from '@/component/faculty/Computer-Science-Engineering/ComputerDeptPEO/ComputerDeptPEO';
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
const ComputerDeptPEOPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='PEOs / PSOs / POs' style=''/>
        <ComputerDeptPEO />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ComputerDeptPEOPage