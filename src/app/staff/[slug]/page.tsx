// app/staff/[slug]/page.tsx
import { teacherList } from '@/data/Data';
import Layout5 from '@/component/layout/Layout5';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'SGU University',
  description: 'Developed by Enark',
};

export async function generateStaticParams() {
  return teacherList.map(teacher => ({
    slug: teacher.slug,
  }));
}

// Define the type for the teacher with optional bio and pdf
interface Teacher {
  id: number;
  slug: string;
  name: string;
  position: string;
  imgSrc: string;
  bio?: string;
  pdf?: string;
}

// Define the type for the component props
interface StaffProfileProps {
  params: {
    slug: string;
  };
}

const StaffProfile: React.FC<StaffProfileProps> = ({ params }) => {
  const { slug } = params;
  const teacher: Teacher | undefined = teacherList.find(teacher => teacher.slug === slug);

  if (!teacher) {
    return <p>Teacher not found</p>;
  }

  // Handle possible undefined bio
  const bioWithLineBreaks = teacher.bio ? teacher.bio.replace(/\n/g, '<br/>') : 'No bio available';

  return (
    <Layout5>
      <BreadcrumbSection title="Chairman's Message" style='' />
      <div className="tl-staff-profile pt-120 pb-50">
        <div className="container">
          <div className="tl-7-section-heading">
            <h2 className="tl-6-section-title">Chairman's Message</h2>
          </div>
          <div className="tl-staff-profile-top mb-30">
            <img src={teacher.imgSrc} height={350} alt={teacher.bio} />
            <div className="tl-staff-profile-txt">
              <div className="tl-staff-profile-intro">
                <div>
                  <h4 className="tl-staff-profile-name">{teacher.name}</h4>
                  <h6 className="tl-staff-profile-role">{teacher.position}</h6>
                </div>
                <ul className="tl-3-footer-socials tl-staff-profile-socials">
                  <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
              </div>
              <p className="tl-staff-profile-bio" dangerouslySetInnerHTML={{ __html: bioWithLineBreaks }}></p>
              {teacher.pdf && (
                <div>
                  <a
                    rel="noopener noreferrer"
                    href={`/assets/docs/management-profile/${teacher.pdf}`}
                    target="_blank"
                    className="tl-def-btn"
                    style={{ borderRadius: '30px' }}
                  >
                    Short Profile
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  );
};

export default StaffProfile;
