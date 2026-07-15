import ChemicalDeptAbout from '@/component/faculty/School-of-Chemical-Sciences/ChemicalDeptAbout';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Best BSc Chemistry college in Kolhapur | SGU',
    description: 'Looking for the best BSc Chemistry colleges in Kolhapur? At SGU, explore modern labs, expert faculty, research opportunities, and career-focused learning.',
  }
const ChemicalDeptAboutPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='About Chemistry Department' style=''/>
        <ChemicalDeptAbout />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ChemicalDeptAboutPage