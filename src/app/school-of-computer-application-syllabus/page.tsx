import SchoolOfComputerApplication from '@/component/academics/Curriculum-Structure/Syllabus-Menus/SchoolOfComputerApplication';
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
const SchoolOfComputerApplicationPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='School Of Computer Application' style=''/>
        <SchoolOfComputerApplication sectionStyle="tl-13-categories pt-100 pb-100" pageStyle='tl-13'/>
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default SchoolOfComputerApplicationPage