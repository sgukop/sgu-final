
import AboutSection19 from '@/component/about/AboutSection19'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import JobProgrammes3 from '@/component/programmes/JobProgrammes3'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const CreditSyatemPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Pharmacy and Pharmacist' style=''/>
        <AboutSection19/>
        <JobProgrammes3/>
    </Layout5>
  )
}

export default CreditSyatemPage;