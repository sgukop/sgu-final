'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../../Reusable-components/MenuList';

const MLTDeptActivities = () => {
  return (
    <section
      className="tl-14-about pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Activities & Achievements</h2>

        <div className="row">
          <MenuList dept="Allied Health Sciences" subMenu={NavLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
              <div className="col-lg-12">
                <div className="tl-event-details-key-content tl-event-details-area">

                  <ul className="tl-event-details-key-content-list phd-container">
                    <li>A guest lecture “Good Laboratory Practices” was held …</li>
                    <li>Students visited Miraj Medical College …</li>
                    <li>A 'Kidney Function Test' camp was arranged …</li>
                    <li>Learn Fest 2025 Workshop …</li>
                  </ul>
                   </div>
              </div>

                  {/* ---------- IMAGES GRID ---------- */}
                  <div className="row g-3 g-lg-4">

                    {/* CARD 1 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/activities/1.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Alumni Meet, MLT Department</h3>
                      </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/activities/2.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Health Harmony Camp</h3>
                      </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/activities/3.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Guest lecture by Mr. Akshep Sutar on 'Introduction to Clinical Pathology</h3>
                      </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/activities/4.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Visit to Acharya Shree Tulasi blood bank,Jaysingpur</h3>
                      </div>
                    </div>

                    {/* CARD 5 */}
                    <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                      <div className="tl-9-blog flex flex-col h-full">
                        <div className="tl-9-event-img">
                          <a>
                            <figure>
                              <img src="assets/images/allied-health-sciences/MLT/activities/5.jpg" alt="Events Image" />
                            </figure>
                          </a>
                        </div>
                        <h3 className="tl-6-latest-article-title mt-10">Parents-Teacher Meet</h3>
                      </div>
                    </div>

                  </div>
                  {/* ---------- END IMAGES GRID ---------- */}

                </div>
              </div>
            </div>
          </div>
        

      
    </section>
  );
};

export default MLTDeptActivities;
