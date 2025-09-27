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
    { imgSrc: "assets/images/AIDS/activities&achievements/KPT08362.JPG" },
  ]

  const ideathon = [
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00267.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00326.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00337.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00362.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00672.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00680.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00684.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00688.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00692.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00695.JPG" },
    { imgSrc: "assets/images/AIDS/activities&achievements/USD00704.JPG" },
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

          </div>
        </div>
      </div>
    </section>
  )
}

export default AIDSDeptActivities
