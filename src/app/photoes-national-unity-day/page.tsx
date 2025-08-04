import NationalUnityDay2018 from '@/component/photo-gallery/National-Festivals/National-Unity-Day/NationalUnityDay2018'
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
const NationalUnityDay2018Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='National Unity Day Celebration' style=''/>
        <NationalUnityDay2018 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default NationalUnityDay2018Page