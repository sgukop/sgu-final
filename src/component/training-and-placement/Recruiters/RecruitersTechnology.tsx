"use client";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


    const recruiterstechnologyData:string[] = [
       "/assets/images/training-and-placement/recruiters/technology/recruiter1.png",
       "/assets/images/training-and-placement/recruiters/technology/recruiter2.png",
       "/assets/images/training-and-placement/recruiters/technology/recruiter3.png",
       "/assets/images/training-and-placement/recruiters/technology/recruiter4.png",
       "/assets/images/training-and-placement/recruiters/technology/recruiter5.png",
        "/assets/images/training-and-placement/recruiters/technology/engg01.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg02.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg03.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg04.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg05.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg06.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg07.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg08.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg09.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg10.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg11.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg12.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg13.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg16.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg17.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg18.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg19.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg20.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg21.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg22.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg23.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg24.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg25.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg26.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg27.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg28.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg29.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg30.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg31.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg32.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg33.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg34.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg35.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg36.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg37.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg38.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg39.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg40.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg41.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg42.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg43.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg44.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg45.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg46.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg47.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg48.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg49.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg50.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg51.jpg",
        "/assets/images/training-and-placement/recruiters/technology/engg52.jpg",
    ];

     const chunkArray = <T,>(array: T[], size: number): T[][] => {
        const result: T[][] = [];
        for (let i = 0; i < array.length; i += size) {
          result.push(array.slice(i, i + size));
        }
        return result;
      };

const RecruitersTechnology:React.FC = () => {
     // const [slidesPerPage, setSlidesPerPage] = useState(1);
      const [testimonialChunks, setTestimonialChunks] = useState<any>([]);
    
      const updateSlidesPerPage = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1699) {
          // setSlidesPerPage(3);
          setTestimonialChunks(chunkArray(recruiterstechnologyData, 3));
        } else if (screenWidth >= 1400) {
          // setSlidesPerPage(2);
          setTestimonialChunks(chunkArray(recruiterstechnologyData, 2));
        } else {
          // setSlidesPerPage(1);
          setTestimonialChunks(chunkArray(recruiterstechnologyData, 2));
        }
      };
     useEffect(() => {
        updateSlidesPerPage();
        window.addEventListener("resize", updateSlidesPerPage);
        return () => window.removeEventListener("resize", updateSlidesPerPage);
      }, []);
  return (
   <section className="w-full flex flex-col justify-center items-center">
         {/* Carousel */}
         <div className="relative w-full md:w-[90%] pb-16">
           <Carousel
             showArrows={true}
             showThumbs={false}
             autoPlay={true}
             emulateTouch={true}
             className="rounded-xl"
             renderArrowPrev={(onClickHandler, _, label) =>
             (
               <button
                 className="!absolute top-[62%] !left-4 -translate-y-2/4 cursor-pointer arrow-responsive"
                 type="button"
                 onClick={onClickHandler}
                 title={label}
                 style={{
                   position: "absolute",
                   zIndex: 2,
                   left: 15,
                   top: "50%",
                   transform: "translateY(-50%)",
                 }}
               >
                 <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-[#ffd300] flex justify-center items-center sm:ml-6">
                   <div className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#455883] flex justify-center items-center">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       height="40px"
                       viewBox="0 -960 960 960"
                       width="40px"
                       fill="#fff"
                     >
                       <path d="M640-198 200-478l440-280v560Z" />
                     </svg>
                   </div>
                 </div>
               </button>
             )
             }
             renderArrowNext={(onClickHandler, _, label) => (
                 <button
                   className="!absolute top-2/4 !right-4 -translate-y-2/4 cursor-pointer arrow-responsive"
                   type="button"
                   onClick={onClickHandler}
                   title={label}
                   style={{
                     position: "absolute",
                     zIndex: 2,
                     right: 15,
                     top: "50%",
                     transform: "translateY(-50%)",
                   }}
                 >
                   <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-[#ffd300] flex justify-center items-center sm:mr-6">
                     <div className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#455883] flex justify-center items-center">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         height="40px"
                         viewBox="0 -960 960 960"
                         width="40px"
                         fill="#ffff"
                       >
                         <path d="M320-202v-560l440 280-440 280Z" />
                       </svg>
                     </div>
                   </div>
                 </button>
               )
             }
           >
             {testimonialChunks.map((chunk: any[], index: React.Key | null | undefined) => (
               <div className="flex justify-around gap-4 sm:px-48" key={index}>
                 {chunk.map((logo, logoIndex) => (
                   <img
                     key={logoIndex}
                     src={logo}
                     alt={`Company Logo ${logoIndex + 1}`}
                     className="max-w-[200px] h-[150px]"
                     style={{border:"1px solid #f26122", padding:"10px"}}
                   />
                 ))}
               </div>
             ))}
           </Carousel>
         </div>
   
        
       </section>
  )
}

export default RecruitersTechnology