import FSTDeptAbout from '@/component/faculty/School-of-Allied-Health-Sciences/FST-FoodScience/FSTDeptAbout'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Food science & Technology college in Kolhapur | SGU',
    description: 'Start your journey with leading food science & technology colleges in Kolhapur. Learn food processing, quality control, and innovation through hands-on training at SGU.',
  }
const FSTDeptAboutPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='B.Sc (Food Science & Technology)' style=''/>
        <FSTDeptAbout />
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default FSTDeptAboutPage