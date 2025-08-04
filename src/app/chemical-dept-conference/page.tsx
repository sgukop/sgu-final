import ChemicalDeptConference from '@/component/faculty/School-of-Chemical-Sciences/ChemicalDeptConference/Conference';
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
const ChemicalDeptConferencePage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Conference / Guest lecture / Invited talk / Workshop / FDP attended' style=''/>
        <ChemicalDeptConference />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ChemicalDeptConferencePage