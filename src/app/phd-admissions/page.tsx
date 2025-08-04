import PhdAdmissions from '@/component/admissions/Phd-admissions/PhdAdmissions'
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
const PhdAdmissionsPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Ph.D Admissions' style=''/>
        <PhdAdmissions sectionStyle="tl-13-categories pt-100 pb-100" pageStyle='tl-13'/>
    </Layout5>
  )
}

export default PhdAdmissionsPage