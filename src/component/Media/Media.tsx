
import React from 'react'

const Media = () => {

  const mediaData = [
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sgu-news/6.jpeg",
      date: "24 NOV 2026",
      title: "",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sgu-news/5.jpeg",
      date: "02 FEB 2026",
      title: "International Conference on Sustainable Rural Development",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sgu-news/3.jpeg",
      date: "10 JAN 2026",
      title: "AIU WEST ZONE TENNIS TOURNAMENT",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sgu-news/1.jpeg",
      date: "12 December 2024",
      title: "Success of Ghodawat International School Boarding Students.",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sgu-news/2.jpg",
      date: "20 November 2025",
      title: "Sanjay Ghodawat Foundation's Free Meal Service for Army Recruits.",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/training-and-placement/media-coverage/161A.jpeg",
      date: "31-03-22",
      title: "25 students of Sanjay Ghodawat in Tata Consultancy",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/training-and-placement/media-coverage/160A.jpeg",
      date: "Events Coverage",
      title: "",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/training-and-placement/media-coverage/60A.jpeg",
      date: "Events Coverage",
      title: "",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/training-and-placement/media-coverage/07-05-2022.jpg",
      date: "07 May 2022",
      title: "",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/training-and-placement/media-coverage/31-03-22_A.jpg",
      date: "31 March 2022",
      title: "",
    },
    {
      image: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/training-and-placement/media-coverage/31-03-22_2.jpg",
      date: "31 March 2022",
      title: "",
    },
  ]

  return (
    <section className="tl-1-teachers pt-100 pb-100">

      <div className="container">

        {/* SECTION HEADING */}
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
          New & Media @ SGU
        </h2>

        <div className="row">

          <div className="col-md-12">

            <div className="tl-event-details-left">

              <div className="tl-event-details-key-content tl-event-details-area rounded-lg mb-8 shadow-[2px_2px_0_3px_rgba(242,97,34,0.8)]">

                <h3 className="tl-event-details-area-title mb-10 text-[#4f70b6]">
                  New & Media
                </h3>

                {/* MEDIA CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                  {mediaData.map((item, index) => (

                    <div
                      key={index}
                      className="w-full h-full"
                    >

                      <div className="tl-1-course-new bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        {/* IMAGE */}
                        <div className="w-full h-[260px] overflow-hidden bg-gray-100 flex-shrink-0">

                          <img
                            src={item.image}
                            alt={item.title || "SGU News and Media"}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />

                        </div>

                        {/* CONTENT */}
                        <div className="tl-1-course-txt text-center p-4 flex flex-col justify-center flex-grow min-h-[130px]">

                          <p className="text-sm text-gray-600 mb-3">
                            {item.date}
                          </p>

                          <h4 className="tl-1-course-title-new text-base font-semibold leading-relaxed">
                            {item.title}
                          </h4>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>
                {/* MEDIA CARDS END */}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Media
