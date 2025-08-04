// AllCourseSection3.tsx

import { useTalimContext } from '@/context/TalimContext';
import Link from 'next/link';
import React from 'react';

const AllCourseSection3 = () => {
    const { displayedCourses3 } = useTalimContext();

    return (
        <section className="tl-inner-courses pb-60 pt-130">
            <div className="container">
                <div className="tl-2-section-heading d-flex justify-content-center" style={{ width: '100%' }}>
                    <h3 className="tl-2-section-title" style={{ fontSize: '44px' }}>Our Global Connections - Foreign University Collaborations</h3>
                </div>
                <div className="row g-4">
                    {displayedCourses3.map((item) => (
                        <div className="col-12" key={item.id}>
                            <div className="tl-8-course">
                                <div className="tl-8-course-img">
                                    <img src={item.imgSrc} alt="Course Image" />
                                </div>
                                <div className="tl-8-course-txt">
                                    <h3 className="tl-8-course-title">
                                        <Link href={`/course/${item.slug}`}>{item.title}</Link>
                                    </h3>
                                    <p className="tl-8-course-descr">{item.desc}</p>
                                    <div className="tl-8-course-parts tl-8-course-part-txt">
                                        <p dangerouslySetInnerHTML={{ __html: item.details ? item.details.replace(/\n/g, '<br/>') : '' }} />
                                    </div>
                                    {/* <Link href="#" className="tl-def-btn">Read More</Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AllCourseSection3;
