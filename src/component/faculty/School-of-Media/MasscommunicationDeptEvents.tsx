import React from "react";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const MasscommunicationDeptEvents = () => {

  const inaugurationEvent = [
    {
      imgSrc: "assets/images/mass-communication-dept/events/inauguration1.jpg",
    },
    {
        imgSrc: "assets/images/mass-communication-dept/events/inauguration2.jpg",
    },
    {
        imgSrc: "assets/images/mass-communication-dept/events/inauguration3.jpg",
    },
];

const LatestEvents = [
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-event/01.jpg",
  },
  
  {
      imgSrc: "assets/images/mass-communication-dept/events/new-event/03.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-event/06.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-event/07.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-event/08.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-event/09.jpg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-event/10.jpg",
  },

  {
    imgSrc: "assets/images/mass-communication-dept/events/new-events1/image1.jpeg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-events1/image2.jpeg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-events1/image3.jpeg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-events1/image4.jpeg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-events1/image5.jpeg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-events1/image6.jpeg",
  },
  {
    imgSrc: "assets/images/mass-communication-dept/events/new-events1/image7.jpeg",
  },
];

const journalismEvent = [
    {
      imgSrc: "assets/images/mass-communication-dept/events/event-SoJ1.jpg",
    },
    {
        imgSrc: "assets/images/mass-communication-dept/events/event-SoJ2.jpg",
    },
];

const filmFestival = [
    {
      imgSrc: "assets/images/mass-communication-dept/events/bioscope1.jpg",
    },
    {
        imgSrc: "assets/images/mass-communication-dept/events/bioscope2.jpg",
    },
];
return (
   <>

  <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Latest Events</h2></div>
          <div className="row tl-7-classes-row">
            
            {LatestEvents.map((Item, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Item.imgSrc} alt="Latest Events Images" />
                </div>
                
              </div>
            </div>
            ))}
        </div>

          <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Events</h2></div>
          <div className="row tl-7-classes-row">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>Inauguration of Multimedia Lab by Marathi Film Stars Sachin Pilgoankar, Abinay Berde and Hemal Ingale</li>
            </ul>
            {inaugurationEvent.map((Item, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Item.imgSrc} alt="Inauguration Images" />
                </div>
                
              </div>
            </div>
            ))}
        </div>

      {/*   <div className="row tl-7-classes-row mt-50">
           <ul className="tl-event-details-key-content-list phd-container">
                <li>Streak of Journalism event was organized by the Department of Multimedia and Mass communication on 27 February 2019</li>
            </ul>
            {journalismEvent.map((Item, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Item.imgSrc} alt="Inauguration Images" />
                </div>
                
              </div>
            </div>
            ))}
        </div>

        <div className="row tl-7-classes-row mt-50">
            <ul className="tl-event-details-key-content-list phd-container">
                <li>Bioscope (Film Festival) was conducted by Department of Multimedia and Mass communication on 26 February 2019</li>
            </ul>
            {filmFestival.map((Item, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Item.imgSrc} alt="Inauguration Images" />
                </div>
                
              </div>
            </div>
            ))}
        </div>  */}
    </> 
  );
};

export default MasscommunicationDeptEvents;
