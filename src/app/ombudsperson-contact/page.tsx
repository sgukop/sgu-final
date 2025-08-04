import OmbudspersonContact from '@/component/contactus/Ombudsperson-Contact/OmbudspersonContact'
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
const OmbudspersonContactPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Ombudsperson' style=''/>
        <OmbudspersonContact />
         {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default OmbudspersonContactPage