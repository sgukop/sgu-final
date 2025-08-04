
import AboutSection12 from '@/component/about/AboutSection12'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const OutcomeSystemPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Outcome Based Education (OBE) System' style=''/>
        <AboutSection12/>
    </Layout5>
  )
}

export default OutcomeSystemPage;