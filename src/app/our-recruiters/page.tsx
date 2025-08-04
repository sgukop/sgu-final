import OurRecruiters from '@/component/training-and-placement/Recruiters/OurRecruiters';
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
const OurRecruitersPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Our Recruiters' style=''/>
        <OurRecruiters margin='mt-0' />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default OurRecruitersPage