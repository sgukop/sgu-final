
import AboutSection20 from '@/component/about/AboutSection20'
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
        <BreadcrumbSection title='School of Computer Science and Applications' style=''/>
        <AboutSection20/>
        <JobProgrammes3/>
    </Layout5>
  )
}

export default CreditSyatemPage;

// SCHOOL OF COMPUTER SCIENCE AND APPLICATIONS