import Link from 'next/link'
import React from 'react'

const ComputerDeptNewEvents = () => {
  return (
    <>
      <div className="tl-11-section-heading mt-50"></div>

      <div className="tl-11-section-heading mt-50">
        <h2 className="tl-11-section-title text-3xl font-bold tracking-wide text-gray-900">Special Guests & Celebrities</h2>
      </div>

      <div className="row g-xl-4 g-3">

        {/* Helper Function Template */}
        {[
          { img: "41.jpeg", name: "Marathi and Hindi filem Actress Nana Patekar", role: "" },
          { img: "42.jpeg", name: "Marathi and Hindi filem Actress nana Patekar", role: "" },
          { img: "40.jpeg", name: "", role: "Actress" },
         
          { img: "2.jpg", name: "", role: "" },
          { img: "3.jpg", name: "Salman Khan", role: "Actor" },
          { img: "25.jpg", name: "Ajay Devgan", role: "Actor" },
          { img: "4.jpg", name: "Sara Ali Khan", role: "Actress" },

          { img: "6.jpg", name: "Sara Ali Khan", role: "Actress" },
          { img: "7.jpg", name: "", role: "" },
          { img: "5.jpg", name: "", role: "" },
       
          { img: "8.jpg", name: "", role: "" },
           { img: "10.jpg", name: "", role: "" },
          { img: "9.jpg", name: "", role: "" },
          
           { img: "11.jpg", name: "", role: "" },
          
          { img: "12.jpg", name: "Arjun Kapoor", role: "Actor" },
          { img: "13.jpg", name: "Arjun Kapoor", role: "Actor" },
          { img: "14.jpg", name: "Arjun Kapoor", role: "Actor" },
          { img: "15.jpg", name: "Aamir Khan", role: "Actor" },
          { img: "16.jpg", name: "Kapil Dev", role: "Former Indian Captain" },
          { img: "17.jpg", name: "Sonali Sinha", role: "Actress" },
          { img: "18.jpg", name: "Navjot Singh Sidhu", role: "Indian Cricketer" },
          { img: "19.jpg", name: "Navjot Singh Sidhu", role: "Indian Cricketer" },
          { img: "22.jpg", name: "", role: "" },
          { img: "23.jpg", name: "", role: "" },
           { img: "26.jpg", name: "", role: "" },
          { img: "27.jpg", name: "", role: "" },
          { img: "28.jpg", name: "Saif Ali Khan", role: "Actor" },
          { img: "29.jpg", name: "Saif Ali Khan", role: "Actor" },
          { img: "30.jpg", name: " Prasad Oak", role: "Marathi film actors" },
          { img: "24.jpg", name: "", role: "" },
          
          { img: "33.jpg", name: "", role: "" },
          { img: "34.jpg", name: "", role: "" },
          { img: "35.jpg", name: "", role: "" },
          { img: "36.jpg", name: "", role: "" },
          { img: "37.jpg", name: "", role: "" },
          { img: "38.jpg", name: "", role: "" },
           { img: "1.jpg", name: "Prajakta Mali", role: "Actress" },
           { img: "41.jpg", name: "", role: "" },       
           { img: "42.jpg", name: "", role: "" },
           { img: "43.jpg", name: "", role: "" },
           { img: "44.jpg", name: "", role: "" },
           { img: "45.jpg", name: "", role: "" },
           { img: "46.jpg", name: "", role: "" },
           { img: "47.jpg", name: "", role: "" },
           { img: "48.jpg", name: "", role: "" }
        ].map((item, idx) => (
          <div className="col-xl-6 col-lg-10" key={idx}>
            <div className="tl-8-course flex flex-col rounded-[20px] h-full shadow-sm p-2 hover:shadow-lg transition duration-300 bg-white">
              <div className="tl-8-course-img self-center">
                <img
                  src={`assets/images/photo-gallery/celebrities@sgu/${item.img}`}
                  alt="Celebrity Image"
                  className="rounded-xl shadow-md"
                />
              </div>

              {item.name && (
                <h4 className="achievements-title text-xl font-semibold text-gray-900 mt-3 tracking-wide text-center">
                  {item.name}
                  {item.role && (
                    <span className="block text-sm font-normal text-gray-600">{item.role}</span>
                  )}
                </h4>
              )}
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default ComputerDeptNewEvents
