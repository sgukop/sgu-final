
import AboutSection17 from '@/component/about/AboutSection17'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import JobProgrammes2 from '@/component/programmes/JobProgrammes2'
import SchoolIntake from '@/component/programmes/SchoolIntake'
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
        <BreadcrumbSection title='School of Science' style=''/>
        <AboutSection17/>
        <JobProgrammes2/>
    </Layout5>
  )
}

export default CreditSyatemPage;