
import AboutSection16 from '@/component/about/AboutSection16'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
// import SchoolIntake from '@/component/programmes/SchoolIntake'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const SchoolDesignPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='School of Commerce & Management' style=''/>
        <AboutSection16/>
        {/* <SchoolIntake/> */}
    </Layout5>
  )
}

export default SchoolDesignPage;