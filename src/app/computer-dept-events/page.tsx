import ComputerDeptEvents from '@/component/faculty/Computer-Science-Engineering/ComputerDeptEvents';
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
const ComputerDeptEventsPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Upcoming Events' style=''/>
        <ComputerDeptEvents />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ComputerDeptEventsPage