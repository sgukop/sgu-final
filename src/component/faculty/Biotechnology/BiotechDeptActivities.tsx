'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const BiotechDeptActivities = () => {
   return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Events, Activities & Achievements</h2>
        <div className="row">
          <MenuList dept="Biotechnology" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-11-section-heading">
	              <h2 className="tl-11-section-title">Upcoming Events</h2>
            </div>
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                        <ul className="tl-event-details-key-content-list phd-container">
                                <li>Hands on workshop on biotechnology tools</li>
                                <li>Guest lecture series</li>
                                <li>Biotechnology forums</li>
                            </ul>
                        </div>
                  </div>
            </div>

            <div className="tl-11-section-heading mt-50">
	              <h2 className="tl-11-section-title">Activities & Achievements</h2>
            </div>
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                    <p className="dark-mode-white-color mb-4">At the Department of Biotechnology, we are committed to creating a vibrant academic environment that fosters learning, innovation, and industry collaboration. Our planned activities and early achievements reflect our dedication to shaping the next generation of Biotechnology leaders.</p>
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>Hands-on Learning Opportunities</li>
                                   <li>Guest Lectures and Seminars</li>
                                   <li>Biotechnology Competitions</li>
                                   <li>Student Research Publication</li>
                                   <li>Networking and Career Development</li>
                            </ul>
                        </div>
                  </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Guest lecture on "Good Laboratory Practices” at the School of Allied Health Sciences</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/biotechnology/activities/1.png" alt="Activity Image" style={{width:"auto"}}/>
                    </div>
                    
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color" style={{textAlign:"justify"}}>On Wednesday, September 4th, 2024, the School of Allied Health Sciences organized a guest lecture on "Good Laboratory Practices” by senior microbiologist Mr. Santosh M. Lokhande. The seminar took place in Sanjay Ghodawat University's MBA building auditorium. The seminar was attended by eight faculty members and 95 students from the School of Allied Health Sciences. Mr. Santosh provided students studying Biotechnology, food science Technology, and Medical Laboratory Technology with comprehensive information regarding GLP standards. Ms. Mahek Jewarani welcomed the audience and the esteemed guests. Dr. Ajay Nalawade presented the guest with a bouquet as a token of appreciation. The guest was introduced by Dr. Monika Yadav. Ms. Riddhi Patil gave a vote of thanks to conclude the session.</p>
                    </div>
                </div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Visit to Lead Botanical Garden, Department of Botany and Biotechnology, Shivaji University, Kolhapur</h2></div>

             {/*   <div className="tl-8-course mb-30">
                     <div className="tl-8-course-img">
                        <img src="assets/images/biotechnology/activities/4.png" alt="Activity Image"/>
                    </div>
                    
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color" style={{textAlign:"justify"}}>On Friday, September 27th, 2024, the Department of Biotechnology, School of Allied Health Sciences organized a visit to Lead Botanical Garden, Department of Botany and Biotechnology, Shivaji University, Kolhapur as a part of the curriculum under the subject Plant Science. The main objective of the visit was to let students understand the plant diversity, instrumentation facility and ongoing research in the two departments of Shivaji University. The visit was coordinated by Dr. Ajay Nalawade and Dr. Monika Yadav.</p>
                    </div>
                </div>   */}

                <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">On Friday, September 27th, 2024, the Department of Biotechnology, School of Allied Health Sciences organized a visit to Lead Botanical Garden, Department of Botany and Biotechnology, Shivaji University, Kolhapur as a part of the curriculum under the subject Plant Science. The main objective of the visit was to let students understand the plant diversity, instrumentation facility and ongoing research in the two departments of Shivaji University. The visit was coordinated by Dr. Ajay Nalawade and Dr. Monika Yadav.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/biotechnology/activities/3.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/biotechnology/activities/4.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>


                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Participation in Poster Compitition on World Food Day</h2></div>
                <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The F. Y. B. Sc. Biotechnology students proudly secured 3rd position in a poster presentation competition held on World Food Day organized by Department of Food Science and Technology on October 16th 2024. Their presentation focused on Genetically Modified (GM) Foods, emphasizing their role in enhancing food security, improving crop resilience, and addressing global hunger challenges. The students effectively highlighted the scientific advancements in GM technology, along with its benefits and concerns, earning praise for their creativity, research depth, and presentation skills. This achievement reflects their dedication to promoting awareness about sustainable food solutions through Biotechnology.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/biotechnology/activities/5.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/biotechnology/activities/6.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>


            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Learn Fest 2025 at the School of Allied Health Sciences, Sanjay Ghodawat University</h2></div>
                <div className="row g-xl-4 g-3">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">School of Allied Health Sciences organized “Learn Fest-2025”. A five-day program from 27th to 31st, January 2025 was aimed to provide hands-on training in Microbiology and prepare students for various fundamental things and career opportunities in Biotechnology, Food Science and Medical Laboratory Technology. The event's first three days were dedicated to hands-on training in Microbiology conducted by Dr. Mrudula Bhendigiri and Dr. Ajay Nalawade. On the fourth day, Dr. Uttam Jadhav delivered a guest lecture on 'Career Readiness: Preparing for Success'. Students gained insights into various career options and practical tips on creating effective resumes and preparing for job interviews. The final day featured a guest lecture on 'Fundamental Techniques in Life Sciences' by Mr. Mahaveer Kanchgauda which was focused on Emerging trends, 3D Food Printing, Bioinformatics, the Central Paradigm of Medicine and Basic business ideas, resources, and careers. Learn Fest 2025 promises to be an enriching experience, fostering collaboration, innovation, and professional development among the students of the School of Allied Health Sciences.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/biotechnology/activities/7.png" alt="Activity Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title">3 Days of Hands-on Training in Microbiology by Dr. Mrudula Bhendigiri</h3>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/biotechnology/activities/8.png" alt="Activity Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title">Guest lecture on 'Career Readiness: Preparing for Success' by Dr. Uttam Jadhav</h3>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/biotechnology/activities/9.png" alt="Activity Image"/>
                        </div>
                        <h3 className="tl-6-latest-article-title">Guest lecture on 'Fundamental Techniques in Life Sciences' by Mr. Mahaveer Kanchgauda</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default BiotechDeptActivities
