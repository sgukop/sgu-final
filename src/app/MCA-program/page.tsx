import MCAProgram from '@/component/faculty/Bachelor-of-Computer-Applications/programmes/MCAProgram';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Leading MCA College in Kolhapur | Build Your IT Career at SGU',
    description: ' Upgrade your technical expertise at SGU, the Best MCA College in Kolhapur with advanced computing, AI, software development and industry-oriented learning.',
  }
const MCAProgramPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='School Of Computer Science And Applications' style=''/>
        <MCAProgram />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default MCAProgramPage