'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../../Reusable-components/MenuList';
import { Table } from 'react-bootstrap';

const FSTDeptActivities = () => {
   return (
    <section className="tl-14-blogs tl-3-section-spacing" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Events, Activities & Achievements</h2>
        <div className="row">
          <MenuList dept="Allied Health Sciences" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
           
            <div className="tl-11-section-heading">
                <h2 className="tl-11-section-title">Events</h2>
            </div>
            


                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">World Food Day Celebration at Sanjay Ghodawat University, Kolhapur</h2></div>
                <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">16th October 2024, Kolhapur - Sanjay Ghodawat University hosted an engaging World Food Day celebration that brought together students and faculty to highlight the importance of Food Science and Technology. The event, held in the Seminar Hall of the Pharmacy Building, was inaugurated by Dr. V. V. Kayande, Registrar, and felicitated by Dr. A. D. Sawant, Director of the School. The program kicked off with a fun and informative skit by students, which creatively showcased how Food Science and Technology differs from Hotel Management and Cooking, while emphasizing its scientific approach to food production. Poster presentations on topics like food safety, packaging, and nutrition sparked vibrant discussions among the attendees.
                            Ten interactive counters were set up, offering live demonstrations, valuable insights, and even samples of innovative food products from areas like Processing, Packaging, and Bakery & Confectionery Technology. The celebration was a huge success, leaving students inspired and more aware of the exciting opportunities within the field of Food Science and Technology.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/allied-health-sciences/FST/events/event1.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                

               <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/allied-health-sciences/FST/events/event2.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>   

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/allied-health-sciences/FST/events/event3.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">SCI-STAR INGREDIENT HUNTING & FOOD STALLS</h2></div>
                <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">Kolhapur, February 2025 - The Sci-Star Ingredient Hunting & Food Stalls event at Sanjay Ghodawat University was a delightful blend of Food Science, creativity, and fun. Hosted by the Department of Food Science and Technology, the event gave participants a chance to discover unique, locally sourced ingredients with great potential for innovative cooking.
                            The food stalls, manned by talented university students, were a true highlight, offering a wide range of mouthwatering as well as nutritious dishes from regional favorites to creative fusion recipes and desserts. The event also gave visitors a behind-the-scenes look at the science that goes into food preparation, sustainability, and nutrition.
                            Faculties of Food Science and Technology namely Ms. Tejaswini Ashish Vhaskoti (Assistant Professor), Ms. Vishakha Deshpande, Mrs. Manasi Patil and Mr. Kapil Ubarhande shared, “We wanted to inspire students to explore the endless possibilities of food science and think outside the box when it comes to ingredients and product development techniques. It was wonderful to see the creativity and excitement from everyone involved.”</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/allied-health-sciences/FST/events/event4.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

               {/* <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/allied-health-sciences/FST/events/event2.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>   */}

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/allied-health-sciences/FST/events/event5.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>


                <div className="tl-11-section-heading mt-50">
                <h2 className="tl-11-section-title">Activities</h2>
            </div>
            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">GUEST LECTURES 1</h2></div>
                <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The Department of Food Science and Technology, Sanjay Ghodawat University, Kolhapur, is organizing a session on the Scope of Food Science and Technology by Dr. I. S. Udachan, Assistant Professor, on 23rd March 2023 (11:00 AM - 1:00 PM). The session covered career opportunities, emerging trends, industry advancements, and regulatory aspects like FSSAI and FDA, along with higher education and research prospects. It was beneficial for B.Sc. and M.Sc. Food Science and Technology students, aspiring food technologists, and entrepreneurs looking to explore the field's vast potential.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/allied-health-sciences/FST/guest-lecture/guest-lecture1.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/allied-health-sciences/FST/guest-lecture/guest-lecture2.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">GUEST LECTURES 2</h2></div>
                <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The Department of Food Science and Technology, Sanjay Ghodawat University, Kolhapur, conducted a session on Current Trends in Food Processing on 16th October 2023 with Mr. Thipeswami Papareddy, Head - QA & Sustainability, Ghodawat Consumer. He discussed advancements in food processing, sustainability, and quality assurance, highlighting key industry trends. The session enriched B.Sc. and M.Sc. Food Science and Technology students with insights into modern techniques and industry expectations, preparing them for future careers.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/allied-health-sciences/FST/guest-lecture/guest-lecture3.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

               <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/allied-health-sciences/FST/guest-lecture/guest-lecture4.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">INDUSTRIAL VISIT</h2></div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">EXPLORING THE FOOD INDUSTRY: STUDY TOUR TO GOA AND AJRA</h2></div>
                <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>TY FST Students Explore Food Industry on Study Tour to Goa & Ajra</strong><br/><br/>
                            Goa & Ajra, 4th October 2024 - Twenty-four students of Third Year B.Sc. Food Science and Technology along with two faculty members namely Ms. Tejaswini Vhaskoti (Assistant Professor) and Mr. Kapil Ubarhande (Assistant Professor) from the Department of Food Science and Technology, School of Allied Health Sciences, Sanjay Ghodawat University, Kolhapur, embarked on an exciting study tour, gaining real-world insights into large-scale food production.
                            The journey took them to four major industries, each offering a unique learning experience. At Paul John Distillery in Goa, students got an up-close look at whisky production, from malting and fermentation to distillation and aging. Their visit to Nestlé Pvt. Ltd. provided a fascinating glimpse into chocolate processing, where they observed key techniques like conching, tempering, molding, and packaging. The tour continued with an exploration of brewing and flavored beer innovations at a beer production plant. Finally, at the cashew processing plant in Ajra, students saw automation in action, witnessing the shelling, roasting, grading, and packaging of cashew nuts. This immersive experience brought classroom learning to life, offering students a deeper appreciation of food processing technologies and valuable exposure to career opportunities in the food industry.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                            <img src="assets/images/allied-health-sciences/FST/industrial-visit/visit1.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

               <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img">
                        <img src="assets/images/allied-health-sciences/FST/industrial-visit/visit2.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
                </div>

               {/*  <div className="col-lg-12">
                   <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>The world food day celebration was organized on 16/10/2024.The aim was to raise awareness about significance of food science and technology various career opportunities in the field and role of global food challenge. The theme of the event was <strong>"RIGHT TO FOODS FOR A BETTER LIFE AND A BETTER FUTURE"</strong>. Every year world food day is celebrated since foundation of course.</li>
                                   <li><strong>FOOD CARNIVAL</strong> 2022 was organized on 25/11/2022.The aim was to make students aware about marketing strategies to sell the products.</li>
                                   <li><strong>Tours</strong><br/>
                                        On 4th October 2024 students of third year B.Sc Food Science and Technology went on a study tour to Goa and Ajra. They visited four industries-Paul John Distillery, Nestle Pvt. Ltd.a beer production plant, and a cashew processing plant.
                                        The study tour provided detailed and practical understanding of food production processing in various industries. Every semester industrial visits are organised and planned for students in various industries such Warana dairy, Star Rice mill, Ghodawat industries, Hindustan foods etc.
                                    </li>
                            </ul>
                        </div>
                  </div>
                </div>   */}
           

            <div className="row tl-event-details-row g-0 mt-50">
                <div className="tl-11-section-heading">
                    <h2 className="tl-11-section-title">Achievements</h2>
                </div>
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <Table striped bordered hover responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                    <th><p className="text-[#4f70b6]">Name of the student</p></th>
                                    <th><p className="text-[#4f70b6]">Name of the competition</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Shourya Kakodkar</p></td>
                                    <td><p>Winner of Quiz Competition at SNDTWU, Mumbai </p></td>
                                </tr>
                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Mahek R. Jewrani</p></td>
                                    <td><p>Winner of Healthy Recpe making competition in Eat Right Millet Mela, Y. C. College, Satara (13th April 2023)</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Harshwardhan Patil <br/> Vishvajit Digraje</p></td>
                                    <td><p>Winner of Quiz Competition in Eat Right Millet Mela Y. C. College, Satara (13th April 2023)</p></td>
                                </tr>
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Kritika G. Shetty <br/> Vardhani M. Patil <br/> Mahek R. Jewrani</p></td>
                                    <td><p>Poshan maah 20 celebration 24(27th september)</p></td>
                                </tr>

                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Shourya Kakodkar</p></td>
                                    <td><p>Quiz Competition at S.N.D.T University</p></td>
                                </tr>

                                <tr>
                                    <td><p>6</p></td>
                                    <td><p>Mahek R. Jewrani</p></td>
                                    <td><p>Healthy Recpe making compitation in Eat Right Millet Mela(13th april 2023)</p></td>
                                </tr>

                                <tr>
                                    <td><p>7</p></td>
                                    <td><p>Harshwardhan Patil <br/> Vishvajit Digraje</p></td>
                                    <td><p>Quiz Competition in Eat Right Millet Mela(13th april 2023)</p></td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default FSTDeptActivities
