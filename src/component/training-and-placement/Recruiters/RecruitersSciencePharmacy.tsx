"use client";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


    const recruitersPharmacyData:string[] = [
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos18.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos1.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos2.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos3.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos4.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos5.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos6.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos7.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos8.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos9.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos10.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos11.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos12.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos13.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos14.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos15.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos16.png",
        "/assets/images/training-and-placement/recruiters/science-pharmacy/sos17.png",
    ];

    const chunkArray = <T,>(array: T[], size: number): T[][] => {
        const result: T[][] = [];
        for (let i = 0; i < array.length; i += size) {
          result.push(array.slice(i, i + size));
        }
        return result;
      };


const RecruitersSciencePharmacy = () => {
     // const [slidesPerPage, setSlidesPerPage] = useState(1);
          const [testimonialChunks, setTestimonialChunks] = useState<any>([]);
        
         
          const updateSlidesPerPage = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1400) {
              setTestimonialChunks(chunkArray(recruitersPharmacyData, 5)); // ✅ 5 images
            } else if (screenWidth >= 1024) {
              setTestimonialChunks(chunkArray(recruitersPharmacyData, 4));
            } else if (screenWidth >= 640) {
              setTestimonialChunks(chunkArray(recruitersPharmacyData, 3));
            } else {
              setTestimonialChunks(chunkArray(recruitersPharmacyData, 2));
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
                         className="min-w-[200px] h-[150px]"
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

export default RecruitersSciencePharmacy