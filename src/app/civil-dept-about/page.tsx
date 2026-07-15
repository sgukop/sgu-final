import CivilDeptAbout from '@/component/faculty/Civil-Engineering/CivilDeptAbout';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Best Civil Engineering College in Kolhapur  | SGU',
    description: 'Looking for civil engineering colleges in Kolhapur? Learn about admissions, curriculum, placements, and how SGU prepares students for rewarding engineering careers.',
  }
const CivilDeptAboutPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Civil Engineering Department' style=''/>
        <CivilDeptAbout/>
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default CivilDeptAboutPage