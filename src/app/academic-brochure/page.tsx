import AcademicBrochure from '@/component/academic-brochure/AcademicBrochure';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection';
import Layout5 from '@/component/layout/Layout5';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SGU University',
  description: 'Developed by Enark',
};

export default function AcademicBrochurePage() {
  return (
    <Layout5>
      <BreadcrumbSection title="Academic Brochure" style="" />
      <AcademicBrochure />
    </Layout5>
  );
}