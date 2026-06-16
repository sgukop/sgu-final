import NIRFRanking2026 from '@/component/NIRF-ranking/NIRF-2026/NIRFRanking2026'
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
const NIRFRanking2026Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='NIRF' style=''/>
        <NIRFRanking2026 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default NIRFRanking2026Page