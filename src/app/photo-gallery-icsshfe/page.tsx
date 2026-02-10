import Icsshfe from '@/component/photo-gallery/Academic/icsshfe/icsshfe'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'ICSBP Photo Gallery | SGU University',
  description:
    'International Conference on Sustainable Business Practices Photo Gallery - Developed by Enark',
}

const IcsshfePage = () => {
  return (
    <Layout5>
      <BreadcrumbSection title="Photo Gallery - Academic" style="" />

      {/* Component must be capitalized */}
      <Icsshfe />
    </Layout5>
  )
}

export default IcsshfePage
