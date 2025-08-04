// import Academicyear2425 from '@/component/admissions/Fee-Structure/Academic-Year-2425/Academicyear2425'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import JobProgrammes from '@/component/programmes/JobProgrammes'
// import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
// import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const JobProgrammesPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Job Oriented Programmes' style=''/>
        {/* <Academicyear2425/> */}
        <JobProgrammes/>
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default JobProgrammesPage