
import AboutSection11 from '@/component/about/AboutSection11'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
// import CourseMainSection3 from '@/component/course/CourseMainSection3'
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
        <BreadcrumbSection title='Credit Based Evaluation (CBE) System' style=''/>
        <AboutSection11/>
    </Layout5>
  )
}

export default CreditSyatemPage;