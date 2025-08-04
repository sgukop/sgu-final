import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ElectronicsDeptAchievements = () => {
   return(
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Events, Activities And Achievements</h2>
        <div className="row">
          <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
             <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <h3 className="tl-event-details-area-title">Upcoming Events</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Finishing School in VLSI and Embedded systems</li>
                                    <li>Program Verticals in Collaboration with Industry</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>

           {/* <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">Activities & Achievements</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Successfully Organized International IEEE Conference ICEI 2023 in Collaboration with Swinburne University and IEEE Australia</li>
                                    <li>Successfully completed Electric Vehicle workshop building two Electric Vehicles.</li>
                                    <li>Maximum Enrollment and Successful completion of NPTEL-Swayam Courses</li>
                                    <li>Sports achievement in Interzonal Tournaments</li>
                                    <li>Successful Alumni Employees/Entrepreneurs</li>
                                    <li>Students Enrolled for best universities abroad for M.S Programs. </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>  */}
            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Activities & Achievements</h2></div>
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">EESA Ignites the Academic Year with a Grand Orientation Program!</h2></div>

            <div className="row g-xl-4 g-3">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">EESA launched the academic year with an engaging Orientation Program on October 11, 2024, fostering innovation, leadership, and community spirit through interactive sessions and cultural events.
                        </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity1.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">ECE Department Empowers Students with Industry-Relevant Skills Through Workshops and Expert Lectures</h2></div>

            <div className="row g-xl-4 g-3">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The EV Saksham Workshop 2024 provided 58 B.Tech students with hands-on experience in EV design, development, and testing, fostering innovation and industry-ready skills.
                        </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity2.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity3.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>
            </div>

          

            <div className="row g-xl-4 g-3 mt-30">
               <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity4.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">In August 2024, the ECE Department, through EESA, hosted an expert lecture by Shri Gajanan C Kulkarni, CEO of Zillion Group, Pune, on career prospects in semiconductor technology, IoT, automation, and more, guiding students toward industry success.</h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity5.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">On October 8, 2024, Mr. Ganesh Bhoi from Morya Industries conducted a hands-on PCB workshop for SY and TY students, focusing on design and manufacturing using Proteus software.</h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity6.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Exploring the Frontiers of Space: ECE Students ISRO Visit</strong> <br/>
                            On September 19, 2024, final-year ECE students visited ISRO Bengaluru for an industrial tour, gaining insights into satellite systems, space exploration, and mission management, guided by ISRO experts.</h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity8.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Celebrating Excellence: Mrs. Jyoti Vimal Madanrao Waykule Receives Research Excellence Award at Dipganga Bhagirathi State-Level Awards 2024</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity7.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Ms. Swapnali Kore Secures Prestigious IIT Internship with NPTEL Digital Electronics Course Exam Success</strong></h4>
                        </div>
                    </div>
                </div>

                

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity9.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Mrs. Jyoti Vimal Madanrao Waykule Honored as Judge at State-Level Dance Talent Showcase 2025 in Miraj, Sangli (26-27 January 2025)</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity10.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Ms. Kore was honored with a "Sanman Patra" for her poem "Tuich Tuzhi," celebrating self-empowerment and resilience, published in the "Vyaktitva Vikas Diwali Ank 2024." </strong></h4>
                        </div>
                    </div>
                </div>  
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity15.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Anjali Mali, an ECE student, achieved finalist status at Sthithpradnya, Runner-Up at INFOSTAV 2K24, 3rd at SCI-STAR 24-25, and earned certifications in cybersecurity and professional ethics.</strong></h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity20.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Sakshi Santosh Adhegavkar Reflects on Her First Year Journey in Electronics and Communication Engineering at SGU</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity11.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Ms. Kore authored "Digital Techniques" (2024), an extensive textbook on digital electronics, covering logic gates to complex digital circuits and systems.</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity12.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Ms. Kore authored "Microprocessor Programming" (2025), a comprehensive textbook on microprocessor systems, architecture, and assembly language.</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity14.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Anand Bhupal Kumbhar's Powerful Performance at Pracharya Shivajirao Kumbhar Smruti Natyavachan Competition in Islampur on 26th January 2025</strong></h4>
                        </div>
                    </div>
                </div>

               

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity16.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Chaitali Pravin Jagtap Shines at All India Inter University Mallakhamb Tournament 2023-24 in Jaipur</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity17.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Chaitali Pravin Jagtap Shines at All India Inter University Mallakhamb Tournament 2023-24 in Jaipur</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity18.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Pruthvi Jadhav: Innovator and Leader at SGU, Founder of EngiiGenius and Vice President of EESA</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/electronics-communication-engineering/activities/new-activities/activity19.png" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title"><strong>Pruthvi Jadhav's Impact: Judge at State-level Tech Innovation Fest and Workshop Leader at SVERI Engineering College</strong></h4>
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

export default ElectronicsDeptAchievements