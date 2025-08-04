import SciStar2018 from '@/component/photo-gallery/Academic/Sci-Star-2018/SciStar2018'
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
const SciStar2018Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title="Sci-STAR 2018 (A State Level Science Competition)" style=''/>
        <SciStar2018 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default SciStar2018Page