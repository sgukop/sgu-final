import BCADeptAbout from '@/component/faculty/Bachelor-of-Computer-Applications/BCADeptAbout';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Best BCA And MCA College in Kolhapur for IT Students | SGU',
    description: 'Looking for the best BCA and MCA colleges in Kolhapur? At SGU, gain practical coding skills, industry exposure, expert mentorship, and strong placement support.',
  }
const BCADeptAboutPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Department of Computer Applications' style=''/>
        <BCADeptAbout />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default BCADeptAboutPage