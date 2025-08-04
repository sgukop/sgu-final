import RepublicDay2018 from '@/component/photo-gallery/National-Festivals/Republic-Day-2018/RepublicDay2018'
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
const RepublicDay2018Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Republic Day Celebration' style=''/>
        <RepublicDay2018 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default RepublicDay2018Page