
import AboutSection14 from '@/component/about/AboutSection14'
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
        <BreadcrumbSection title='School Of Technology' style=''/>
        <AboutSection14/>
    </Layout5>
  )
}

export default CreditSyatemPage;