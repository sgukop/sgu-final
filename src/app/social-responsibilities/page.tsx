import SocialResponsibilities from '@/component/about/Social-responsibilities/SocialResponsibilities';
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
const SocialResponsibilitiesPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Social Responsibilities' style=''/>
        <SocialResponsibilities/>
    </Layout5>
  )
}

export default SocialResponsibilitiesPage