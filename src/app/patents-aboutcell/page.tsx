import PatentsAboutCell from '@/component/r-and-d/Research-patents/PatentsAboutCell';
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
const PatentsAboutCellPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='About Cell' style=''/>
        <PatentsAboutCell />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default PatentsAboutCellPage