import NIRFRanking2024 from '@/component/NIRF-ranking/NIRF-2024/NIRFRanking2024'
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
const NIRFRanking2024Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='NIRF' style=''/>
        <NIRFRanking2024 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default NIRFRanking2024Page