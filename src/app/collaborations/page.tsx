
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CourseMainSection from '@/component/course/CourseMainSection'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const CollaborationsPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Collaborations' style=''/>
        <CourseMainSection/>
    </Layout5>
  )
}

export default CollaborationsPage;