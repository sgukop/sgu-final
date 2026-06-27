import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AIDSDeptActivities = () => {
  return (
    <section 
      className="tl-14-blogs tl-3-section-spacing border-2 border-blue-500 rounded-lg shadow-md" 
      data-bg-color="#F3F1F1"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Activities & Achievements</h2>
        <div className="row">
          <MenuList dept="Artificial Intelligence and Machine Learning" subMenu={NavLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            {/* Orientation */}
            <div className="tl-11-section-heading">
              <h2 className="tl-11-section-title">Orientation Day</h2>
            </div>
            <div className="row g-xl-4 g-3">
              <div className="col-xl-12 col-lg-12">
                <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                  <div className="tl-8-course-txt">
                    <h4 className="achievements-title">Orientation Day was conducted to welcome new students and their parents into the university community. The program aimed to familiarize them with the institution’s culture, rules, and opportunities, while also giving them a memorable first experience on campus. 
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Ideathon */}
            <div className="tl-11-section-heading mt-50">
              <h2 className="tl-11-section-title">Ideathon</h2>
            </div>
            <div className="row g-xl-4 g-3">
              <div className="col-xl-12 col-lg-12">
                <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                  <div className="tl-8-course-txt">
                    <h4 className="achievements-title">Ideathon 2025 was organized on Engineer's Day to encourage innovation, creativity, and problem-solving among students by providing a platform to present and refine their unique ideas. The event aimed to identify promising solutions that could contribute to real-world challenges and offer mentorship support to enhance their feasibility and impact. 
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* eSports */}
            <div className="tl-11-section-heading mt-50">
              <h2 className="tl-11-section-title">eSports</h2>
            </div>
            <div className="row g-xl-4 g-3">
              <div className="col-xl-12 col-lg-12">
                <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                  <div className="tl-8-course-txt">
                    <h4 className="achievements-title">We organized an exciting eSports Tournament featuring games like Chess, BGMI, Free Fire, and Valorant. Students showcased their strategic skills, quick reflexes, and teamwork, making the competition thrilling and highly engaging. The event celebrated gaming talent and enthusiasm, leaving everyone entertained and motivated.
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Inauguration */}
            <div className="tl-11-section-heading mt-50">
              <h2 className="tl-11-section-title">Inauguration Ceremony of the Student Association and Clubs</h2>
            </div>
            <div className="row g-xl-4 g-3">
              <div className="col-xl-12 col-lg-12">
                <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                  <div className="tl-8-course-txt">
                    <h4 className="achievements-title"> The Department of Artificial Intelligence & Data Science organized the Inauguration Ceremony of the Student Association and Clubs on 11th October 2025 at A Block. The event marked a significant milestone in promoting student leadership, innovation, and community engagement within the department.The ceremony aimed to formally introduce and felicitate the newly elected student representatives and club heads who will lead various councils and clubs for the academic year 2025-26. 
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* podcast */}
            <div className="tl-11-section-heading mt-50">
              <h2 className="tl-11-section-title">Podcast Session with Mr. Tarun Chaudhary </h2>
            </div>
            <div className="row g-xl-4 g-3">
              <div className="col-xl-12 col-lg-12">
                <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                  <div className="tl-8-course-txt">
                    <h4 className="achievements-title">The university successfully organized an insightful podcast session featuring Mr. Tarun Chaudhary, a Software Engineer at Google, who shared his journey, experiences, and valuable guidance with students.The session aimed to provide students with real-world exposure to career paths in technology and inspire them to pursue excellence in the field of software engineering. 
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Podcast Patil */}
            <div className="tl-11-section-heading mt-50">
              <h2 className="tl-11-section-title">
                Podcast Session with Mr. Atharva Patil
              </h2>
            </div>
            <div className="row g-xl-4 g-3">
              <div className="col-xl-12 col-lg-12">
                <div className="tl-8-course flex flex-col rounded-[20px] h-full p-4 shadow-md">
                  <div className="tl-8-course-txt space-y-3">
                    <h4 className="achievements-title font-semibold">
                      Introduction
                    </h4>
                    <p>
                      The university successfully organized an insightful podcast session 
                      featuring Mr. Atharva Patil, a Software Engineer at Google. 
                      He shared his journey, experiences, and valuable guidance with students.
                    </p>

                    <h4 className="achievements-title font-semibold">
                      Objective
                    </h4>
                    <p>
                      The session aimed to provide students with real-world exposure to 
                      career paths in technology and inspire them to pursue excellence 
                      in the field of software engineering.
                    </p>

                    <h4 className="achievements-title font-semibold">
                      Key Highlights
                    </h4>
                    <ul className="list-disc pl-5">
                      <li>Insights into software engineering careers</li>
                      <li>Real-world industry experience at Google</li>
                      <li>Guidance on skill development and consistency</li>
                      <li>Motivation for students to aim high</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Podcast Kamath */}
            <div className="tl-11-section-heading mt-50">
              <h2 className="tl-11-section-title">
                Podcast Session with Ms. Priyanka Kamath
              </h2>
            </div>
            <div className="row g-xl-4 g-3">
              <div className="col-xl-12 col-lg-12">
                <div className="tl-8-course flex flex-col rounded-[20px] h-full p-4 shadow-md">
                  <div className="tl-8-course-txt space-y-4">
                    <div>
                      <h4 className="achievements-title font-semibold">Introduction</h4>
                      <p>
                        The institution organized an insightful podcast session featuring 
                        Ms. Priyanka Kamath, an internationally recognized tech founder and 
                        CEO of 100 GIGA | Powered by Fem-Agents. She is known for her work 
                        in Artificial Intelligence, Web3, and building inclusive tech ecosystems, 
                        especially empowering young women in emerging technologies. The session 
                        aimed to provide students with exposure to real-world industry trends, 
                        particularly in AI and future technologies.
                      </p>
                    </div>

                    <div>
                      <h4 className="achievements-title font-semibold">Podcast Interaction</h4>
                      <p>
                        The podcast began with an engaging introduction to Ms. Kamath’s journey, 
                        followed by discussions on key topics:
                      </p>
                      <ul className="list-disc pl-5">
                        <li>The evolution of Artificial Intelligence and its real-world applications</li>
                        <li>The growing gap between industry and academia</li>
                        <li>Opportunities in emerging domains like GenAI, AI Agents, and SaaS</li>
                      </ul>
                      <p>
                        She emphasized the importance of practical learning, building projects, 
                        and staying adaptable in a rapidly changing tech landscape. The session 
                        also included an interactive Q&A segment where students actively 
                        participated and asked insightful questions about careers, startups, 
                        and skill development.
                      </p>
                    </div>

                    <div>
                      <h4 className="achievements-title font-semibold">Presence of Dignitaries</h4>
                      <p>
                        The session was conducted in the presence of faculty members and 
                        academic coordinators, who played a key role in organizing and 
                        facilitating the interaction. Their support ensured the smooth 
                        execution of the podcast and active student participation.
                      </p>
                    </div>

                    <div>
                      <h4 className="achievements-title font-semibold">
                        Student Engagement and Takeaways
                      </h4>
                      <ul className="list-disc pl-5">
                        <li>Importance of building real-world skills alongside academic knowledge</li>
                        <li>Understanding the future scope of AI and its impact on careers</li>
                        <li>Need for continuous learning and adaptability</li>
                        <li>Encouragement to explore innovation and entrepreneurship</li>
                      </ul>
                      <p>
                        Students gained clarity on how to align their academic journey 
                        with industry requirements.
                      </p>
                    </div>

                    <div>
                      <h4 className="achievements-title font-semibold">Closing Note</h4>
                      <p>
                        The session concluded with a vote of thanks to Ms. Priyanka Kamath 
                        for sharing her valuable insights and experiences. Her journey and 
                        perspectives served as strong motivation for students to pursue 
                        careers in emerging technologies.
                      </p>
                    </div>

                    <div>
                      <h4 className="achievements-title font-semibold">Conclusion</h4>
                      <p>
                        The podcast session was highly informative and inspiring. It successfully 
                        bridged the gap between academic learning and industry expectations. 
                        Such sessions play a crucial role in preparing students for future 
                        challenges and opportunities in the tech-driven world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Teachers’ Day */}
            <div className="tl-11-section-heading mt-50">
              <h2 className="tl-11-section-title">Teachers’ Day Celebration</h2>
            </div>
            <div className="row g-xl-4 g-3">
              <div className="col-xl-12 col-lg-12">
                <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                  <div className="tl-8-course-txt">
                    <h4 className="achievements-title"> The Teachers’ Day Celebration was held on 05-09-2025 in the classrooms to honor and appreciate the invaluable contributions of instructors. Organized by the Program Operations and Success Coach team, the event aimed to express gratitude and strengthen student–teacher bonds. Highlights included a fun prank activity and a joint cake-cutting ceremony that created a joyful and inclusive atmosphere. The Vice Chancellor and Registrar Sir graced the occasion and delivered inspiring and motivational addresses. Overall, the celebration was memorable, fostering mutual respect, appreciation, and a sense of belonging among students and instructors. 
                    </h4>
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

export default AIDSDeptActivities