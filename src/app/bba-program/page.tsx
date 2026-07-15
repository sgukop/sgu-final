import BBAProgram from '@/component/faculty/School-of-Management/Programs/BBAProgram';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Best BBA college in Kolhapur with Placements | SGU',
    description: 'Looking for the best BBA colleges in Kolhapur with placements? At SGU, gain industry-focused learning, internship opportunities, and strong career support.',
  }
const BBAProgramPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='BBA' style=''/>
        <BBAProgram />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default BBAProgramPage