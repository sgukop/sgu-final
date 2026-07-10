import AIMLDeptAlumni from '@/component/faculty/Artificial-Intelligence-Machine-Learning/AIMLDeptAlumni';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
}

const AIMLDeptAlumniPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title="Alumni" style=''/>
        <AIMLDeptAlumni />
    </Layout5>
  )
}

export default AIMLDeptAlumniPage;