import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ElectronicsDeptGoals = () => {
  return (
    <section className="tl-fees-section p-100">
      <div className="container-fluid">
      <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Goals</h2></div>
            </div>
        <div className="row">
            <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
                <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
                  <div className="row tl-event-details-row g-4">
                      <div className="col-lg-6">
                          <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                            <h3 className="tl-event-details-area-title text-white">Short Term Goals</h3>
                            <ul className="course-subjects">
                                <li>To modernize all the laboratories.</li>
		                            <li>To encourage the students to take up industry specific projects</li>
                                <li>To use modern techniques in teaching and learning process</li>
                                <li>To widen the knowledge base and deepen understanding of the latest trends and developments in the field of Electrical Engineering through various faculty development programs</li>
                                <li>To establish IEEE, IEI (India) student chapters</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                            <h3 className="tl-event-details-area-title text-white">Long Term Goals</h3>
                              <ul className="course-subjects">
                                  <li>To undertake research and development works in leading technologies</li>
		                              <li>To create and retain the brand value of the faculty in specific areas</li>
                                  <li>To increase number of doctorates in the department</li>
                                  <li>To establish research laboratory Associated with Industries</li>
                              </ul>
                      </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default ElectronicsDeptGoals;
