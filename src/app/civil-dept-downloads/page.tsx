import CivilDeptDownloads from '@/component/faculty/Civil-Engineering/CivilDeptDownloads';
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
const CivilDeptDownloadsPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Downloads' style=''/>
        <CivilDeptDownloads/>
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default CivilDeptDownloadsPage