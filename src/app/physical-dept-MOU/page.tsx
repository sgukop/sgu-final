import PhysicalDeptMOU from '@/component/faculty/School-of-Physical-Sciences/PhysicalDeptMOU';
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
const PhysicalDeptMOUPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='MoU' style=''/>
        <PhysicalDeptMOU />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default PhysicalDeptMOUPage