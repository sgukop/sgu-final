'use client'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const DesignDeptActivities = () => {
    const activities1 = [
        {
            imgSrc: "assets/images/design-dept/activities/latest-activities/1.png",
        },
        {
            imgSrc: "assets/images/design-dept/activities/latest-activities/2.png",
        },
    ];

    const activities2 = [
        {
            imgSrc: "assets/images/design-dept/activities/latest-activities/3.png",
        },
        {
            imgSrc: "assets/images/design-dept/activities/latest-activities/5.1.png",
        },
    ];

return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container-fluid">
            <div className="tl-14-section-heading"><h2 className="tl-9-section-title mb-50">Activities & Achievements</h2></div>
            <div className="row">
            <MenuList dept="Design" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Value Addition: “One-Day Visit to New Palace and Town Hall”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">On 30th August 2024, the School of Design at Sanjay Ghodawat University organized a one-day offline educational visit to the New Palace and Town Hall, attended by 26 undergraduate design students and 2 faculty members. The visit aimed to enhance students' understanding of architectural heritage, design principles, and the cultural significance of public spaces through observation and analysis. The itinerary included guided tours of the New Palace, focusing on its intricate architectural details and heritage value, and the Town Hall, emphasizing its functional design and community-centric layout. Students engaged in sketching, note-taking, and discussions on architectural styles and urban planning. The visit concluded with a debrief session where students reflected on their observations, gaining insights into real-world applications of design principles, historical craftsmanship, and public space evolution. The initiative was well-received, fostering analytical skills and enthusiasm among participants, with gratitude extended to the management of both venues and university administration for their support.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/1.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/2.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Value Addition: “One-Day Visit to Khidrapur”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The School of Design at Sanjay Ghodawat University organized a one-day educational visit to Khidrapur on October 4, 2024, as part of its experiential learning initiatives. Twenty-six design students, accompanied by two faculty members, explored the renowned Kopeshwar Temple, an architectural marvel of ancient India. The visit aimed to provide insights into traditional architectural styles, design principles, and cultural heritage. Activities included on-site discussions about symmetry, proportion, and natural light in design, as well as live sketching of intricate carvings and motifs, enhancing students' observation skills and creativity. This hands-on experience bridged historical contexts with modern design practices, inspiring participants to incorporate cultural heritage into contemporary projects. The visit successfully fostered critical thinking and deepened students' appreciation of traditional craftsmanship, aligning with the institution's mission to integrate theoretical knowledge with practical applications.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/3.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/4.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Value addition Activity: “Ganpati Idol Making Workshop”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The School of Design at Sanjay Ghodawat University organized a one-day offline Ganpati Idol Making Workshop on August 24, 2024, to promote eco-friendly practices and celebrate cultural traditions. Over 200 students and faculty members enthusiastically participated, guided by skilled artisans and design faculty in crafting Ganpati idols using biodegradable natural clay. The workshop highlighted the importance of sustainable celebrations while fostering creativity and cultural awareness. Participants created unique idols showcasing diverse artistic styles, and the event received overwhelmingly positive feedback for blending sustainability, creativity, and cultural learning. The workshop exemplified the university's commitment to environmental consciousness and cultural enrichment.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/5.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/6.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/7.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Professional Activity: “TypeShayar”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The School of Design, Sanjay Ghodawat University, proudly participated in the TypeShayar event on 19th October 2024, organized by Vikram Koushik, a design consultant and professor at Srishti University, Bangalore. This online, day-long celebration of typography featured esteemed speakers such as Troy Leinster, Salomi Desai, Peter Biľak, Chandan Mahimkar, Chaityanya Gokhale, Rohit Keluskar, Devan Das, and James Edmondson, who shared insights on topics ranging from typography basics and typeface anatomy to advanced techniques and future trends. The event provided students with a deeper understanding of typography, exposure to global perspectives, and inspiration for their academic and creative pursuits. We extend our gratitude to Mr. Vikram Koushik and the guest speakers for this enriching experience, which left a lasting impression and fostered a greater appreciation for typography among participants.</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Professional Activity: “Tailor's Expo”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The School of Design, Sanjay Ghodawat University, participated in the Tailor's Expo 2024 held in Sangli from September 21-23, showcasing student work such as garment prototypes, textile innovations, and fashion illustrations, while also conducting live demonstrations on design tools and tailoring techniques. Over 30 students actively engaged with industry professionals, receiving constructive feedback and fostering connections for collaborations, internships, and projects. The event provided valuable insights into contemporary tailoring practices and market trends, earning the university recognition for its innovative approach and strengthening its commitment to industry-relevant education. This participation was a significant milestone, inspiring students and paving the way for future opportunities in the tailoring and design industry.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/8.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/9.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Extra-Curricular Activity- “Ganrang Competition”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The School of Design at Sanjay Ghodawat University organized the Ganrang Competition, an interdisciplinary art event, on 4th September 2024, celebrating creativity inspired by Lord Ganesha. With 85 participants and 72 exhibited artworks spanning paintings, sculptures, digital art, and craftwork, the competition highlighted the university's rich talent pool. The event featured an inauguration ceremony led by the Dean, an exhibition in the campus atrium, cultural performances by the Performing Arts Club, and an awards ceremony judged by esteemed professionals. This vibrant celebration fostered creativity, cultural pride, and community engagement, leaving a lasting impact on participants and attendees while reinforcing the role of art in holistic education. The School of Design extends gratitude to all contributors for making this event a resounding success.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/10.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/11.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/12.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/13.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/14.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Extra-Curricular Activity- “Ganpati Idol Making For SGU Ganesh Chaturthi”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">At Sanjay Ghodawat University, the B.Design students showcased their creativity and craftsmanship during the Ganesh Festival by crafting a beautiful Ganpati idol and intricate decorations. The idol was made from Bombay clay, a traditional material known for its smooth texture and sculpting qualities, and was painted with vibrant acrylic colors, bringing it to life with rich details. For the decoration, the students used gelatin paper and tinted papers, creating a stunning visual appeal that added a unique touch to the festive atmosphere. This event not only highlighted their artistic talents but also demonstrated their commitment to blending traditional art forms with modern techniques.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/15.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/16.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/17.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/18.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Expert Session: “Future of Design”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="tl-8-course">
                <div className="col-xl-6 col-lg-10">
                    
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/19.png" alt="Activity Image"/>
                        </div>
                   
                </div>
                <div className="col-xl-6 col-lg-12">
                   
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The School of Design at Sanjay Ghodawat University hosted an expert session on 15th October 2024 for first-year B.Des students, featuring Mr. Nachiket Thakur, a renowned designer, as the guest speaker. Focused on the topic "Future of Design," the session highlighted key aspects such as globalization, emerging trends like AI, sustainability, interdisciplinary collaboration, and the importance of a user-centric approach in design. Through an engaging presentation enriched with real-world examples and practical advice, Mr. Thakur inspired students to embrace innovation, lifelong learning, and environmentally conscious practices. The interactive Q&A further deepened students' understanding, making the session a resounding success and reinforcing the university's commitment to bridging academics with industry insights.</h4>
                        </div>
                 
                </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Expert Session: “Design Thinking” </h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">On September 30, 2024, the School of Design at Sanjay Ghodawat University organized an expert session for first-year Bachelor of Design (B.Des) students, introducing them to the concept of "Design Thinking." The session, led by Mr. Hirdekar, a distinguished design professional, aimed to provide students with a foundational understanding of the design thinking process, emphasizing empathy, creativity, and user-centered innovation. The presentation covered the five key stages of design thinking: Empathize, Define, Ideate, Prototype, and Test, using case studies and real-world examples to illustrate their application. Mr. Hirdekar also conducted an interactive group activity, encouraging students to identify problems and brainstorm solutions. The session concluded with an engaging Q&A and a vote of thanks, leaving the students inspired to apply creative problem-solving techniques in their future design endeavors.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/20.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/21.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Co-curricular Activity: “Kalanubhav - A Design Exhibition”</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">On September 30, 2024, the School of Design at Sanjay Ghodawat University organized an expert session for first-year Bachelor of Design (B.Des) students, introducing them to the concept of "Design Thinking." The session, led by Mr. Hirdekar, a distinguished design professional, aimed to provide students with a foundational understanding of the design thinking process, emphasizing empathy, creativity, and user-centered innovation. The presentation covered the five key stages of design thinking: Empathize, Define, Ideate, Prototype, and Test, using case studies and real-world examples to illustrate their application. Mr. Hirdekar also conducted an interactive group activity, encouraging students to identify problems and brainstorm solutions. The session concluded with an engaging Q&A and a vote of thanks, leaving the students inspired to apply creative problem-solving techniques in their future design endeavors.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/22.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/23.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/design-dept/activities/latest-activities/24.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

          {/*    <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Workshops Conducted</h2></div>
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px]">
                        <div className="tl-8-course-img">
                            <img src="assets/images/design-dept/activities/Outreach activity.jpg" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><Link href="https://manage-api.sguk.ac.in/api/assets/67517c7a4b17e19d8f361f40" target="_blank">Report - Act of donation and a visit to Gurukul <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                <div className="tl-8-course flex flex-col rounded-[20px]">
                    <div className="tl-8-course-img">
                        <img src="assets/images/design-dept/activities/Brainstorming session.png" alt="Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <h4 className="achievements-title"><Link href="https://manage-api.sguk.ac.in/api/assets/67517cd34b17e19d8f361f45" target="_blank">Report - Brainstorming session on alternative solutions <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                    </div>
                </div>
                </div>
                </div>
              <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around mt-10">
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Educational tour to Aundh <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div> 
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Expert session on product design industry <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Heritage Site Visit <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div> 

                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Heritage Walk - Town Hall <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Industrial visit with Samartha Foodtech <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Interaction with Mrs. Gauri Naik - Fashion Designer <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Interview with Artisans and use of shadu clay <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Lecture on Sustainability in Design <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Live sketching at Kanherimatt <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Powder Shading Technique <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="tl-single-blog tl-14-blog">
                            <div className="tl-single-blog-txt tl-14-blog-txt">
                                <h4 className="achievements-title"><Link href="#" target="_blank">Report - Sculpture making by skilled artisans <i className="fa-regular fa-arrow-right-long"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                </div>   */}
            </div>
        </div>
    </div>
</section>
  )
}

export default DesignDeptActivities