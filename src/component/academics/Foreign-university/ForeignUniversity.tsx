import React from 'react';
import { courseList } from '@/data/Data'; // Make sure this path is correct

const ForeignUniversity = () => {
  return (
    <section className="tl-inner-courses pb-60 pt-130 bg-coffee">
      <div className="container">
        <div className="tl-2-section-heading d-flex justify-content-center" style={{ width: '100%' }}>
          <h3 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Our Global Connections - Foreign University Collaborations</h3>
        </div>
        <div className="row g-3 g-xl-4">
          {courseList.slice(31, 40).map((item, index) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <div className="tl-1-course" style={index < 3 ? { minHeight: '585px' } : { minHeight: '470px' }}>
                <div className="tl-1-course-img">
                  <img src={item.imgSrc} alt="Course Image" />
                  <span className="tl-1-course-price">{item.desc}</span>
                </div>
                <div className="tl-1-course-txt">
                  <h4 className="tl-1-course-title" style={{ fontSize: '20px', marginBottom: '18px' }}>{item.title}</h4>
                  <div className="tl-8-course-parts tl-8-course-part-txt" style={{ fontSize: '18px', fontWeight: '500', marginBottom: '0px' }}>
                    <p style={{ marginBottom: '0px' }} dangerouslySetInnerHTML={{ __html: item.details ? item.details.replace(/\n/g, '<br/>') : '' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForeignUniversity;
