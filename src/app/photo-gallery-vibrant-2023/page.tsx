import Vibrant2023 from '@/component/photo-gallery/Events/Vibrant-2023/Vibrant2023'
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
const Vibrant2023Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Vibrant 2023' style=''/>
        <Vibrant2023 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default Vibrant2023Page