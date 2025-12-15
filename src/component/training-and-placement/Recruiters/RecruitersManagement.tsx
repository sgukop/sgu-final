"use client";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const recruitersManagementData:string[] = [
       "/assets/images/training-and-placement/recruiters/commerce-management/mba43.png",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba44.png",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba1.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba2.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba3.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba4.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba5.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba6.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba7.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba8.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba9.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba10.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba11.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba12.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba13.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba14.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba15.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba16.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba17.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba18.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba19.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba20.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba22.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba23.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba24.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba25.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba26.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba27.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba29.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba30.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba31.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba32.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba33.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba34.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba35.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba36.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba37.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba38.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba39.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba40.jpg",
       "/assets/images/training-and-placement/recruiters/commerce-management/mba41.jpg",
    ];

    const chunkArray = <T,>(array: T[], size: number): T[][] => {
        const result: T[][] = [];
        for (let i = 0; i < array.length; i += size) {
          result.push(array.slice(i, i + size));
        }
        return result;
      };


const RecruitersManagement = () => {
    // const [slidesPerPage, setSlidesPerPage] = useState(1);
          const [testimonialChunks, setTestimonialChunks] = useState<any>([]);
        
          const updateSlidesPerPage = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1400) {
              setTestimonialChunks(chunkArray(recruitersManagementData, 5));
            } else if (screenWidth >= 1024) {
              setTestimonialChunks(chunkArray(recruitersManagementData, 4));
            } else if (screenWidth >= 640) {
              setTestimonialChunks(chunkArray(recruitersManagementData, 3));
            } else {
              setTestimonialChunks(chunkArray(recruitersManagementData, 2));
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

export default RecruitersManagement