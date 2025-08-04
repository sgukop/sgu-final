import PhysicalChemical from '@/component/admissions/Program-offred-and-intake/Physical-Chemical/PhysicalChemical'
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
const PhysicalChemicalPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='School of Physical and Chemical Sciences' style=''/>
        <PhysicalChemical/>
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default PhysicalChemicalPage