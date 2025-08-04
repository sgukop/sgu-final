import React from "react";

const DesignEventsGarba = () => {

  const garbaimages = [
    {
        imgSrc: "assets/images/design-dept/events/1.jpeg",
    },
    {
        imgSrc: "assets/images/design-dept/events/2.jpeg",
    },
    {
        imgSrc: "assets/images/design-dept/events/3.jpeg",
    },
    {
        imgSrc: "assets/images/design-dept/events/4.jpeg",
    },
    {
        imgSrc: "assets/images/design-dept/events/5.1.jpg",
    },
    {
        imgSrc: "assets/images/design-dept/events/6.jpeg",
    },
];
return (
    <section className="tl-4-innovs tl-3-section-spacing">
      <div className="container">
        <div className="tl-4-innovs-heading mb-50">
          <h2 className="tl-9-section-title mb-50">Events</h2>
        </div>

        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mb-50">Events</h2>
        </div>
        <div className="row tl-7-classes-row">
            {garbaimages.map((eventsItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={eventsItem.imgSrc} alt="Events Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default DesignEventsGarba;
