import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AIDSDeptActivities = () => {
  // Example arrays for activities
  const orientation = [
    { imgSrc: "assets/images/AIDS/activities&achievements/KPT07999.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/KPT08003.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/KPT08164.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/KPT08195.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/KPT08230.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/KPT08359.JPG" },
    
  ]

  const ideathon = [
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00267.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00326.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00337.JPG" },
    
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00680.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00684.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00688.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00692.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00695.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00704.JPG" },
  ]
const eSports  = [
    { imgSrc: "assets/images/AIDS/activities&achievements/1.jpg" },
    { imgSrc: "assets/images/AIDS/activities&achievements/2.jpg" },
    { imgSrc: "assets/images/AIDS/activities&achievements/4.jpg" },
    { imgSrc: "assets/images/AIDS/activities&achievements/6.jpg" },
    
  ]
  const Inauguration   = [
    { imgSrc: "assets/images/AIDS/activities&achievements/7.jpg" },
    { imgSrc: "assets/images/AIDS/activities&achievements/9.jpg" },
    { imgSrc: "assets/images/AIDS/activities&achievements/8.jpg" },
    { imgSrc: "assets/images/AIDS/activities&achievements/10.jpg" },
    
  ]
   const podcast   = [
    { imgSrc: "assets/images/AIDS/activities&achievements/11.jpg" },
    { imgSrc: "assets/images/AIDS/activities&achievements/12.jpg" },
    { imgSrc: "assets/images/AIDS/activities&achievements/13.jpg" },
    
    
  ]
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
            <div className="row tl-7-classes-row">
              {orientation.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12" key={index}>
               <div className="tl-9-blog border-2 border-blue-500 rounded-lg p-2 shadow-sm">
                <div className="tl-9-event-img">
                 <figure>
                 <img src={item.imgSrc} alt="Activities & Achievements" />
             </figure>
             </div>
            </div>

                </div>
              ))}
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
            <div className="row tl-7-classes-row">
              {ideathon.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12" key={index}>
               <div className="tl-9-blog border-2 border-blue-500 rounded-lg p-2 shadow-sm">
                <div className="tl-9-event-img">
               <figure>
                 <img src={item.imgSrc} alt="Activities & Achievements" />
              </figure>
             </div>
             </div>

                </div>
              ))}
            </div>
             {/* eSports  */}
            
            <div className="tl-11-section-heading">
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
            <div className="row tl-7-classes-row">
              {eSports .map((item, index) => (
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12" key={index}>
               <div className="tl-9-blog border-2 border-blue-500 rounded-lg p-2 shadow-sm">
                <div className="tl-9-event-img">
                 <figure>
                 <img src={item.imgSrc} alt="Activities & Achievements" />
             </figure>
             </div>
            </div>

                </div>
              ))}
            </div>
              {/* Inauguration */}
            
            <div className="tl-11-section-heading">
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
            <div className="row tl-7-classes-row">
              {Inauguration.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12" key={index}>
               <div className="tl-9-blog border-2 border-blue-500 rounded-lg p-2 shadow-sm">
                <div className="tl-9-event-img">
                 <figure>
                 <img src={item.imgSrc} alt="Activities & Achievements" />
             </figure>
             </div>
            </div>

                </div>
              ))}
            </div>
              {/* podcast */}
            
            <div className="tl-11-section-heading">
              <h2 className="tl-11-section-title">Podcast Session with Mr. Tarun Chaudhary </h2>
            </div>
            <div className="row g-xl-4 g-3">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">The university successfully organized an insightful podcast session featuring Mr. Tarun
Chaudhary, a Software Engineer at Google, who shared his journey, experiences, and
valuable guidance with students.The session aimed to provide students with real-world
exposure to career paths in technology and inspire them to pursue excellence in the field of
software engineering. 
                        </h4>
                        </div>
                    </div>
                </div>
                </div>
            <div className="row tl-7-classes-row">
              {podcast .map((item, index) => (
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12" key={index}>
               <div className="tl-9-blog border-2 border-blue-500 rounded-lg p-2 shadow-sm">
                <div className="tl-9-event-img">
                 <figure>
                 <img src={item.imgSrc} alt="Activities & Achievements" />
             </figure>
             </div>
            </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AIDSDeptActivities
