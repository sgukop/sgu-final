import ComputerDeptAlumni from '@/component/faculty/Computer-Science-Engineering/ComputerDeptAlumni';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
import { computerAlumniList } from '@/data/Data';

export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const ComputerDeptAlumniPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Alumni' style=''/>
        <ComputerDeptAlumni style='tl-9-testimonial' 
        array={computerAlumniList}
        />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ComputerDeptAlumniPage