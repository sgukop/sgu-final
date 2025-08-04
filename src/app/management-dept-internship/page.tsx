import ManagementDeptInternship from '@/component/faculty/School-of-Management/ManagementDeptInternship';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import { managementAlumniList } from '@/data/Data';
import React from 'react'

export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const ManagementDeptInternshipPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title="Internship and Placement Details" style=''/>
        <ManagementDeptInternship margin='mt-0' />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ManagementDeptInternshipPage