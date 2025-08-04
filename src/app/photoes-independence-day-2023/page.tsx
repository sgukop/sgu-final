import IndependenceDay2023 from '@/component/photo-gallery/National-Festivals/Independence-Day-2023/IndependenceDay2023'
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
const IndependenceDay2023Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Independence Day 2023' style=''/>
        <IndependenceDay2023 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default IndependenceDay2023Page