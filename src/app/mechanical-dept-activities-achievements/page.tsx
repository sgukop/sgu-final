import ActivitiesAndAchievements from '@/component/faculty/Mechanical-Engineering/ActivitiesAndAchievements';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection4 from '@/component/cta/CtaSection4'
import Layout5 from '@/component/layout/Layout5'
import PricingSection from '@/component/pricing/PricingSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'SGU University',
    description: 'Developed by Enark',
  }
const ActivitiesAndAchievementsPage = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Activities And Achievements' style=''/>
        <ActivitiesAndAchievements />
        
       {/* <PricingSection/>
        <CtaSection4 style='tl-8-cta-inner'/> */}
    </Layout5>
  )
}

export default ActivitiesAndAchievementsPage