
import AboutSection18 from '@/component/about/AboutSection18'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
// import SchoolIntake from '@/component/programmes/SchoolIntake'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const SchoolLiberalArt = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='School of Liberal Arts' style=''/>
        <AboutSection18/>
    </Layout5>
  )
}

export default SchoolLiberalArt;