import EightConvocation from '@/component/photo-gallery/Academic/eightconvocation/eightconvocation'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SGU University',
  description: 'Developed by Enark',
}

const EightConvocationPage = () => {
  return (
    <Layout5>
      <BreadcrumbSection
        title="8th Convocation Ceremony 2026-2027"
        style=""
      />
      <EightConvocation />
    </Layout5>
  )
}

export default EightConvocationPage