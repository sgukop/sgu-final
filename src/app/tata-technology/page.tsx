
import AboutSection13 from '@/component/about/AboutSection13'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
// import SchoolIntake from '@/component/programmes/SchoolIntake'
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
        <BreadcrumbSection title='Technology Competency Center' style=''/>
        <AboutSection13/>
        {/* <SchoolIntake/> */}
    </Layout5>
  )
}

export default CreditSyatemPage;