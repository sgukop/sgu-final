import React, { useEffect, useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CountUp from "react-countup";

const events = [
    {
        image: "/assets/images/home/event-1.jpg",
        title: "Birthday Celebration of Hon. President",
        description: "54th Birthday Celebration of Hon. President Mr. Sanjayji Ghodawat in the presenc...",
        slug : "/photo-gallery-54-birthday"
    },
    {
        image: "assets/images/latest-news/event1-blog.jpg",
        title: "1st Convocation Ceremony - 2020",
        description: "Congratulations..!! Sanjay Ghodawat University became first University in India...",
        slug : "#"
    },
    {
        image: "assets/images/latest-news/ebent2-blog.jpg",
        title: "2nd Convocation Ceremony - 2021",
        description: "Chairman Sanjay ji Ghodawat is voted as the Influential Educator of the Year 2023...",
        slug : "#"
    },
    {
        image: "assets/images/latest-news/event3-blog.jpg",
        title: "3rd Convocation Ceremony - 2022",
        description: "Sancheti, Chairman Sanjay ji Ghodawat were felicitated at the 35th Pune Festival",
        slug : "#"
    },
    {
        image: "assets/images/latest-news/tata2-blog.jpg",
        title: "Inauguration of Technology Competency Center",
        description: "Inauguration of Technology Competency Center with TATA Technology...",
        slug : "/photo-gallery-tata-technology"
    },
    {
        image: "assets/images/latest-news/scistar2-blog.jpg",
        title: "Sci-STAR 2018 (A State Level Science Competition)",
        description: "Congratulations Chairman Sanjay ji Ghodawat receives Singhania Lifetime...",
        slug : "/photo-gallery-sci-star-2018"
    },
    {
        image: "assets/images/latest-news/event7.jfif",
        title: "Reinventing India Event",
        description: "Padma Vibhushan Hon. Raghunath Mashelkar former Director General of CSIR...",
        slug : "/photo-gallery-reinventing-india"
    },
    {
        image: "assets/images/latest-news/event9-blog.jpg",
        title: "Asian Tennis Volleyball Championship",
        description: "SGU Global Articulation and partnership programs",
        slug : "https://manage-api.sguk.ac.in/api/assets/6756afeb9173bf9f471abdcb"
    },
    {
        image: "assets/images/latest-news/event5-blog.jpg",
        title: "A Story of Grit and Determination",
        description: "Sanjay Ghodawat Group (SGG) has grown significantly under its Founder...",
        slug : "https://manage-api.sguk.ac.in/api/assets/675d61099173bf9f471accaa"
    },
];

const NewAboutUs = () => {
    // const [slidesPerPage, setSlidesPerPage] = useState(1);
    const [testimonialChunks, setTestimonialChunks] = useState<any>([]);

    const updateSlidesPerPage = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1699) {
            // setSlidesPerPage(3);
            setTestimonialChunks(chunkArray(events, 3));
        } else if (screenWidth >= 1400) {
            // setSlidesPerPage(2);
            setTestimonialChunks(chunkArray(events, 2));
        } else {
            // setSlidesPerPage(1);
            setTestimonialChunks(chunkArray(events, 1));
        }
    };

    useEffect(() => {
        updateSlidesPerPage();
        window.addEventListener("resize", updateSlidesPerPage);
        return () => window.removeEventListener("resize", updateSlidesPerPage);
    }, []);

    return (
        <>
            <section className=" w-full pt-16 bg-white responsive-section">
                <div className="relative w-full h-[760px] responsive-shape-height">
                    {/* Background Image */}
                    <div
                        className="inset-0 bg-contain bg-no-repeat h-full background-shapee"
                    // style={{ backgroundImage: 'url(/assets/images/home/background-shape-2.png)' }}
                    ></div>

                    {/* Overlay Text */}
                    <div className="absolute responsive-widthhh inset-0 flex justify-start items-center p-10 2xl:pl-20 lg:w-[58%] xl:w-[60%] 2xl:w-[55%]">
                        <div className="text-left text-white px-9 shape-paddding">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl text-[#ffcb04] font-bold">Explore Excellence at Sanjay Ghodawat University</h1>
                            <p className="mt-6 text-xl 2xl:text-3xl tracking-wide"> The Sanjay Ghodawat University stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life. The USP of the University is its research based curriculum and academically oriented teaching staff. The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process. </p>
                            <div className='about-shape-button'>
                                <a href="/about-university" target="_blank" className="mt-8 px-6 py-3 xl:py-4 bg-[#ffcb04] text-[#ed1c24] text-2xl xl:text-4xl font-bold tracking-wide uppercase rounded-tl-[40px] rounded-br-[40px] transition ease-in-out hover:-translate-y-3 hover:scale-105 duration-300">Learn More </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full'>
                <div className='relative w-full pb-10'>
                    <div
                        className="inset-0 bg-cover bg-no-repeat w-full h-full z-0 bg-[linear-gradient(to_bottom,_rgb(237_224_224_/_0%)_0%,_rgba(0,_0,_0,_0)_80%,_rgb(255_255_255_/_100%)_100%),url('/assets/images/home/campus-image.jpg')]"
                    >
                    <div className=' flex justify-center items-center pt-16'>
                            <h2 className='bg-[#4f70b6] w-fit py-4 rounded-tl-[40px] rounded-br-[40px] px-8 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white capitalize tracking-wide'>
                                Academic Excellence and Industry Integration
                            </h2>
                        </div>

                        <div className='minimum-height-responsive mt-16'>
                            <div className=' w-full flex items-stretch justify-center gap-4 flex-wrap gap-y-5' style={{zIndex:"999"}}>
                                <div className='bg-[rgba(254,214,23,0.9)] w-[340px] px-4 md:px-6 2xl:px-8 py-20 rounded-tr-[150px] transform transition duration-500 hover:scale-105'>
                                    <a href="/collaborations" target="_self" className='text-3xl xl:text-4xl font-bold text-[#231f20]'>
                                        Collaborations
                                    </a>
                                    <p className='text-[#231f20] text-2xl xl:text-3xl mt-3 font-medium'>
                                        SGU has collaborations with Foreign Universities, Industries .....
                                    </p>
                                </div>
                                <div className='bg-[rgba(254,214,24,0.9)] w-[340px] px-4 md:px-6 2xl:px-8 py-20 rounded-tr-[150px] transform transition duration-500 hover:scale-105'>
                                    <a href="/credit-system" target="_self" className='text-3xl xl:text-4xl font-bold text-[#231f20]'>
                                        Credit Based Evaluation (CBE) System
                                    </a>
                                    <p className='text-[#231f20] text-2xl xl:text-3xl mt-3 font-medium'>
                                        Student have the flexibility to pursue.
                                    </p>
                                </div>
                                <div className='bg-[rgba(254,214,24,0.9)] w-[340px] px-4 md:px-6 2xl:px-8 py-20 rounded-tr-[150px] transform transition duration-500 hover:scale-105'>
                                    <a href="/job-programmes" target="_self" className='text-3xl xl:text-4xl font-bold text-[#231f20]'>
                                        Job Oriented Programmes
                                    </a>
                                    <p className='text-[#231f20] text-2xl xl:text-3xl mt-3 font-medium'>
                                        Industry Oriented Programmes for job opportunities.
                                    </p>
                                </div>
                                <div className='bg-[rgba(254,214,24,0.9)] w-[340px] px-4 md:px-6 2xl:px-8 py-20 rounded-tr-[150px] transform transition duration-500 hover:scale-105'>
                                    <a href="/outcome-system" target="_self" className='text-3xl xl:text-4xl font-bold text-[#231f20]'>
                                        Outcome Based Education (OBE) System
                                    </a>
                                    <p className='text-[#231f20] text-2xl xl:text-3xl mt-3 font-medium'>
                                        Best Practices in Teaching - Learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='w-screen h-full relative background-image-home-1'>
                    <img src='assets/images/about-campus/campus15.jpg' className='w-screen h-full' alt='Campus Life' />
                    <div className='absolute right-4 md:right-8 lg:right-10 top-12 bg-[#4f70b6] text-white py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white capitalize tracking-wide'>
                            Academic Excellence and Industry Integration
                        </h2>
                    </div>

                    <div className=' max-h-[1000px]'>
                        <div className='absolute top-[200px] w-full flex items-stretch justify-center gap-4 flex-wrap gap-y-5'>
                            <div className='bg-[rgba(254,214,23,0.9)] w-[340px] px-4 md:px-6 2xl:px-8 py-20 rounded-tr-[150px]'>
                                <h3 className='text-3xl font-bold text-[#231f20]'>
                                    Collaborations
                                </h3>
                                <p className='text-[#231f20] text-2xl mt-2 font-medium'>
                                    SGU has collaborations with Foreign Universities, Industries .....
                                </p>
                            </div>
                            <div className='bg-[rgba(254,214,24,0.9)] w-[340px] px-4 md:px-6 2xl:px-8 py-20 rounded-tr-[150px]'>
                                <h3 className='text-3xl font-bold text-[#231f20]'>
                                    Credit Based Evaluation (CBE) System
                                </h3>
                                <p className='text-[#231f20] text-2xl mt-2 font-medium'>
                                    Student have the flexibility to pursue.
                                </p>
                            </div>
                            <div className='bg-[rgba(254,214,24,0.9)] w-[340px] px-4 md:px-6 2xl:px-8 py-20 rounded-tr-[150px]'>
                                <h3 className='text-3xl font-bold text-[#231f20]'>
                                    Job Oriented Programmes
                                </h3>
                                <p className='text-[#231f20] text-2xl mt-2 font-medium'>
                                    Industry Oriented Programmes for job opportunities.
                                </p>
                            </div>
                            <div className='bg-[rgba(254,214,24,0.9)] w-[340px] px-4 md:px-6 2xl:px-8 py-20 rounded-tr-[150px]'>
                                <h3 className='text-3xl font-bold text-[#231f20]'>
                                    Outcome Based Education (OBE) System
                                </h3>
                                <p className='text-[#231f20] text-2xl mt-2 font-medium'>
                                    Best Practices in Teaching - Learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            <section className='w-full h-full flex flex-col gap-y-4 lg:flex-row items-center justify-between gap-x-4 -mt-48'>
                <div className='w-full lg:w-[50%] h-full z-30'>
                    <div className='w-full z-30 md:h-[800px]'>
                        <img src='/assets/images/home/sgu-university.jpg' className='w-full h-full rounded-tr-[300px] border-[18px] border-white ' alt='SGU University' />
                    </div>
                </div>
                <div className='w-full lg:w-[50%] h-full z-30 px-4 sm:px-8 md:px-10 lg:px-0'>
                    <h2 className='py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-white capitalize tracking-wide mb-6 whitespace-nowrap'>
                        About SGU, Kolhapur
                    </h2>

                    <p className='text-[#231f20] text-[20px] leading-[28px] sm:text-[26px] sm:leading-[40px] md:text-[text-24px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px] font-medium mb-8 lg:leading-[34px] xl:leading-[36px] 2xl:leading-[40px] tracking-wide text-justify sm:mr-10 right-marginn'>
                        The Sanjay Ghodawat University stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life. The USP of the University is its research based curriculum and academically oriented teaching staff. The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process.
                    </p>

                    <a href="/about-university" target="_blank" className='uppercase px-6 py-3.5 text-3xl xl:text-4xl tracking-wide rounded-tl-[40px] rounded-br-[40px] bg-[#4f70b6] hover:text-[#ffcb04] text-[#ffffff] transition ease-in-out hover:-translate-y-3 hover:scale-105 duration-300'>
                        Read More
                    </a>
                </div>
            </section>

            <section className='max-w-screen mt-10 flex funfact-responsive-home'>
                <div className='bg-[#ef4123] flex flex-col justify-center items-center gap-y-2 py-10 px-2 lg:px-4 2xl:px-6 individual-funfact'>
                    <h2 className='text-white tracking-wide font-extrabold text-[40px] lg:text-[60px] 2xl:text-[85px]'><CountUp duration={10} end={4} />k+</h2>
                    <span className='bg-[#ffd300] px-8 py-2.5 font-bold text-lg lg:text-xl 2xl:text-3xl rounded-[100px] text-[#231f20] capitalize'>Students</span>
                </div>
                <div className='bg-[#f26522] flex flex-col justify-center items-center gap-y-2 py-8 px-2 lg:px-4 2xl:px-6 individual-funfact'>
                    <h2 className='text-white tracking-wide font-extrabold text-[40px] lg:text-[60px] 2xl:text-[85px]'><CountUp duration={10} end={500} />+</h2>
                    <span className='bg-[#ffd300] px-8 py-2.5 font-bold text-lg lg:text-xl 2xl:text-3xl rounded-[100px] text-[#231f20] capitalize'>Personnel</span>
                </div>
                <div className='bg-[#ee871d] flex flex-col justify-center items-center gap-y-2 py-8 px-2 lg:px-4 2xl:px-6 individual-funfact'>
                    <h2 className='text-white tracking-wide font-extrabold text-[40px] lg:text-[60px] 2xl:text-[85px]'><CountUp duration={10} end={100} />+</h2>
                    <span className='bg-[#ffd300] px-8 py-2.5 font-bold text-lg lg:text-xl 2xl:text-3xl rounded-[100px] text-[#231f20] capitalize whitespace-nowrap'>Industry Collaborations</span>
                </div>
                <div className='bg-[#f99d1c] flex flex-col justify-center items-center gap-y-2 py-8 px-2 lg:px-4 2xl:px-6 individual-funfact'>
                    <h2 className='text-white tracking-wide font-extrabold text-[40px] lg:text-[60px] 2xl:text-[85px]'><CountUp duration={10} end={15} />k+</h2>
                    <span className='bg-[#ffd300] px-8 py-2.5 font-bold text-lg lg:text-xl 2xl:text-3xl rounded-[100px] text-[#231f20] capitalize'>Alumni&apos;s</span>
                </div>
            </section>

            <section className='w-full h-full relative'>
                <div className='w-full bg-[#286f83] h-[400px] relative flex justify-center items-start pt-20'>
                    <div className='sm:w-[80%] rounded-xl border-t-4 border-l-4 border-r-4 border-[#7ea8b4] '>
                        <div className='relative flex justify-center items-center h-full'>
                            <div className='absolute left-auto -top-10 w-fit py-4 rounded-tl-[40px] rounded-br-[40px] px-8 bg-white z-10'>
                                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#286f83] capitalize tracking-wide z-30'>
                                    Latest News / Event / Announcements
                                </h2>
                            </div>
                            <div className='w-full flex flex-wrap justify-center gap-3 px-1 z-40 latest-news-responsive'>
                                {/* {events.map((event, index) => (
                                    <div key={index} className='w-[380px] bg-[#286f83] rounded-bl-[90px] pb-14 h-fit'>
                                        <div className='w-full'>
                                            <img src={event.image} className='rounded-full w-full h-[350px] border-transparent-border' alt='Events' />
                                        </div>
                                        <div className='pt-3 flex flex-col justify-center px-3 sm:px-4 2xl:px-8'>
                                            <a href="/photo-gallery-54-birthday" target="_blank" className='text-2xl text-[#ffd300] font-semibold uppercase tracking-wide w-full mb-2'>
                                                {event.title}
                                            </a>
                                            <p className='text-white text-xl'>
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                ))} */}

                                <div className="relative w-full pb-16 -mx-40">
                                    <Carousel
                                        showArrows={true}
                                        showThumbs={false}
                                        autoPlay={true}
                                        // dynamicHeight={true}
                                        emulateTouch={true}
                                        className="rounded-xl"
                                        renderArrowPrev={(onClickHandler, _, label) =>
                                        (
                                            <button
                                                className="!absolute top-[62%] !left-0 -translate-y-2/4 cursor-pointer arrow-responsive"
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
                                                <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-white flex justify-center items-center">
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
                                        renderArrowNext={(onClickHandler, _, label) =>
                                        (
                                            <button
                                                className="!absolute top-2/4 !right-0 -translate-y-2/4 cursor-pointer arrow-responsive"
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
                                                <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-white flex justify-center items-center">
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
                                            <div className="flex justify-center gap-4 lg:px-40 overflow-y-hidden pt-4 -mt-24" key={index}>
                                                {chunk.map((event, index) => (
                                                    <div key={index} className='w-[380px] bg-[#286f83] rounded-bl-[90px] py-20 h-fit'>
                                                        <div className='w-full image-border'>
                                                            <img src={event.image} className='rounded-full w-[400px] h-[350px] z-30' alt='Events' />
                                                        </div>
                                                        <div className='pt-3 flex flex-col justify-center px-3 sm:px-4 2xl:px-8 z-40 text-left'>
                                                            <a href={event.slug} target="_blank" className='text-2xl text-[#ffd300] font-semibold uppercase tracking-wide w-full mb-2 hover:text-[#F26122]'>
                                                                {event.title}
                                                            </a>
                                                            <p className='text-white text-xl'>
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-[400px] bg-[#ffd300] w-full h-[300px] news-yellow-background'>
                        {/* <div className='w-full h-full relative'>
                            <div className='absolute left-[10%] text-white top-1/2'>
                                Left Arrow
                            </div>
                        </div> */}
                    </div>
                    <div className='bg-white w-full white-background-news'>

                    </div>
                </div >
            </section >

        </>
    )
}

export default NewAboutUs

// Helper function for chunking
const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};
