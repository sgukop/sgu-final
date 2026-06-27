import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const ComputerDeptNewEvents = () => {
  const workshopfullstack = [
      {
        imgSrc: "assets/images/computer-science-engineering/activities/workshop-fullstack/image1.png",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/workshop-fullstack/image2.png",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/workshop-fullstack/image3.png",
      },
  ]
  const workshopDevops = [
      {
        imgSrc: "assets/images/computer-science-engineering/activities/workshop-devops/1.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/workshop-devops/2.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/workshop-devops/3.jpeg",
      },
  ]

  const newparentmeet = [
    {
      imgSrc: "assets/images/computer-science-engineering/activities/new-parent-meet/1.jpg",
    },
    {
      imgSrc: "assets/images/computer-science-engineering/activities/new-parent-meet/2.jpg",
    },
    {
      imgSrc: "assets/images/computer-science-engineering/activities/new-parent-meet/3.jpg",
    },
    {
      imgSrc: "assets/images/computer-science-engineering/activities/new-parent-meet/4.jpg",
    },
    {
      imgSrc: "assets/images/computer-science-engineering/activities/new-parent-meet/5.jpg",
    },
    
]
  const technophilia = [
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno1.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno2.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno3.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno4.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno5.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno6.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno7.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno8.jpeg",
      },
      {
        imgSrc: "assets/images/computer-science-engineering/activities/technophilia/techno9.jpeg",
      },
  ]
  
    const asces = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/acses/image1.jpeg",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image2.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image3.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image4.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image5.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image6.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image7.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image8.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image9.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image10.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image11.jpeg",
          },
          {
            imgSrc: "assets/images/computer-science-engineering/activities/acses/image12.jpeg",
          },
    ]

    const orientation = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/orientation/1.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/orientation/2.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/orientation/3.png",
          },
        
          {
            imgSrc: "assets/images/computer-science-engineering/activities/orientation/4.png",
          },
        
          {
            imgSrc: "assets/images/computer-science-engineering/activities/orientation/5.png",
          },
    ]
    const techofill = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/techo-fill/image1.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/techo-fill/image2.png",
        },
    ]

    const hackathon = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/hackathon/image1.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/hackathon/image2.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/hackathon/image3.png",
        },
       
       
    ]

      

    const parentmeet = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/parent-meet/image1.jpeg",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/parent-meet/image2.jpeg",
        },
        
    ]

    const algochamp = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/algochamp/image1.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/algochamp/image2.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/algochamp/image3.png",
        },
    ]

    const industrialvisit = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/industrial-visit/image1.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/industrial-visit/image2.png",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/industrial-visit/image3.png",
        },
    ]
    const Seminars = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/Seminars/1.jpeg",
        },
        {
          imgSrc: "assets/images/computer-science-engineering/activities/Seminars/2.jpeg",
        },
       
        
    ]

    const sports = [
        {
          imgSrc: "assets/images/computer-science-engineering/activities/sports/image1.jpeg",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/sports/image2.jpeg",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/sports/image3.jpeg",
        },
        
        {
            imgSrc: "assets/images/computer-science-engineering/activities/sports/image5.jpeg",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/sports/image6.jpeg",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/sports/image7.jpeg",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/sports/image8.jpeg",
        },
        {
            imgSrc: "assets/images/computer-science-engineering/activities/sports/image9.jpeg",
        },
    ]
  return (
    <>
        <div className="tl-11-section-heading mt-50">
                <h2 className="tl-11-section-title">Events</h2>
            </div>



    
         <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title">Technophilia 3.0</h2>
        </div>
        <div className="row tl-7-classes-row">
         {technophilia.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">One Day Workshop On Full Stack Development under CSI</h2>
        </div>
        <div className="row tl-7-classes-row">
         {workshopfullstack.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

        



        <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">ASCES</h2>
        </div>
        <div className="row tl-7-classes-row">
         {asces.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">1st Year Orientation</h2>
        </div>
        <div className="row tl-7-classes-row">
         {orientation.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div> 

        <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">Technophilia Event</h2>
        </div>
        <div className="row tl-7-classes-row">
         {techofill.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>  

         <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">Hackathon (SIH) Internal </h2>
        </div>
        <div className="row tl-7-classes-row">
         {hackathon.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
          </div>  

         

        <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">Parent Meet 2024-2025</h2>
        </div>
        <div className="row tl-7-classes-row">
         {parentmeet.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div> 

        <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">Inauguration of Algochamp</h2>
        </div>
        <div className="row tl-7-classes-row">
         {algochamp.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div> 
           <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">Seminars and Workshops</h2>
        </div>
        <div className="row tl-7-classes-row">
         {Seminars.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>     

        <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">Student & Faculty Achievements</h2>
        </div>

        <div className="row g-xl-4 g-3">
                <div className="col-xl-12 col-lg-12">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">Students From Second Year B.Tech Computer Science and Engineering Mr. Sai Chigare , Mr.Roshan Chimne and Mr. Shubham Gawade  had participated in NATIONAL LEVEL TECHNICAL EVENT TECHNOTSAV-2024 organized by D.Y.Patil College of Engineering and Technology Kolhapur and secured FIRST PRIZE in APP Architect.
                        </h4>
                        </div>
                    </div>
                </div>
        
                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/computer-science-engineering/activities/student-faculty-achievements/achievements1.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/computer-science-engineering/activities/student-faculty-achievements/achievements2.png" alt="Activity Image"/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/computer-science-engineering/activities/student-faculty-achievements/achievements3.jpg" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">S.Y B.tech and T. y B.tech Student got First prize  in Shark Hunt 2.0 Event which is organized by Commerce and Management Department  of SGU
                        </h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-10">
                    <div className="tl-8-course flex flex-col rounded-[20px] h-full">
                        <div className="tl-8-course-img self-center">
                            <img src="assets/images/computer-science-engineering/activities/student-faculty-achievements/achievements4.jpg" alt="Activity Image"/>
                        </div>
                        <div className="tl-8-course-txt">
                            <h4 className="achievements-title">T. Y B.tech Student runner up in Hackthon  National Level Event which is organized by IBM
                        </h4>
                        </div>
                    </div>
                </div>

            </div>
       
        <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">Industrial Visit</h2>
        </div>

       <div className="row tl-7-classes-row">
         {industrialvisit.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div> 

         <div className="tl-11-section-heading mt-50">
            <h2 className="tl-11-section-title">Sports</h2>
        </div>

       <div className="row tl-7-classes-row">
         {sports.map((activityItems1, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={activityItems1.imgSrc} alt="Activities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>  
    </>        
  )
}

export default ComputerDeptNewEvents