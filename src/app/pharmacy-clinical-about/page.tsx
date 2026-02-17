import ClinicalDeptAbout from '@/component/faculty/B. Sc. Clinical Research and Technology/ClinicalDeptAbout';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'B.Sc. Clinical Research & Technology | SGU University',
  description: 'Learn about the B.Sc. Clinical Research & Technology program at Sanjay Ghodawat University including curriculum, facilities, and career opportunities.',
}

const ClinicalDeptAboutPage = () => {
  return (
    <Layout5>
      <BreadcrumbSection 
        title='About B.Sc. Clinical Research & Technology' 
        style='' 
      />
      
      <ClinicalDeptAbout />

    </Layout5>
  )
}

export default ClinicalDeptAboutPage
