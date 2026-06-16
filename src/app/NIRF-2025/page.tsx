import NIRFRanking2025 from '@/component/NIRF-ranking/NIRF-2025/NIRFRanking2025'
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
const NIRFRanking2025Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='NIRF' style=''/>
        <NIRFRanking2025 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default NIRFRanking2025Page