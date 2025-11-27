import BirthdayCelebration60 from '@/component/photo-gallery/Celebrations/60-Birthday-Celebration/BirthdayCelebration60'
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
const BirthdayCelebration60Page = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Birthday Celebration of Hon. President' style=''/>
        <BirthdayCelebration60 />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default BirthdayCelebration60Page