import React from "react";

const Facilities = () => {
  const laboratoriesData = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/laboratories/lab1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/laboratories/lab2.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/laboratories/lab3.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/laboratories/lab4.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/laboratories/lab5.jpg",
    },
 ];
 const hostel = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/hostel/hostel1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/hostel/hostel2.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/hostel/hostel3.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/hostel/hostel4.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/hostel/hostel5.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/hostel/hostel6.jpg",
    },
 ]
 const cafeteria = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/cafeteria/foodcourt1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/cafeteria/foodcourt2.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/cafeteria/foodcourt3.jpg",
    },
 ]

 const sports = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sports/sport1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sports/sport2.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sports/sport3.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sports/sport4.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sports/sport5.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sports/sport6.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sports/sport7.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/sports/sport8.jpg",
    },
 ]

 const transportation = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/transportation/Bus1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/transportation/Bus2.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/transportation/Bus3.jpg",
    },
 ]
 const gymnasium = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/gymnasium/Gym1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/gymnasium/Gym2.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/gymnasium/Gym3.jpg",
    },
]

const supermarket = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/supermarket/SuperMarket1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/supermarket/SuperMarket2.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/supermarket/SuperMarket3.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/supermarket/SuperMarket4.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/supermarket/SuperMarket5.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/supermarket/SuperMarket6.jpg",
    },
]

const staffquarters = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/staffquarters/StaffQuarters1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/staffquarters/StaffQuarters2.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/staffquarters/StaffQuarters3.jpg",
    },
]

const bankatm  = [
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/bank-atm/Bank1.jpg",
    },
    {
        imgSrc: "https://sgukopbucket.s3.ap-south-1.amazonaws.com/images/bank-atm/Bank2.jpg",
    },
    
]
return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Facilities</h2>

        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Laboratories</h2>
        </div>
         <div className="row tl-7-classes-row">
        {laboratoriesData.map((labItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={labItem.imgSrc} alt="Laboratories Images"/>
                </div>
                
              </div>
            </div>
          ))}
        </div>  
   <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Hostel</h2>
        </div>
       {/*  <a href="https://www.sanjayghodawatuniversity.ac.in/hostel.php" target="_blank" className="tl-def-btn-2 mb-4" >(Click Here For Information) <i className="fa-regular fa-arrow-right"></i></a>  */}
        <div className="row tl-7-classes-row">
       
          {hostel.map((hostelItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={hostelItem.imgSrc} alt="Hostel Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

      
        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Cafeteria</h2>
        </div>
         <div className="row tl-7-classes-row">
       
          {cafeteria.map((cafeteriaItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={cafeteriaItem.imgSrc} alt="Cafeteria Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

       
        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Sports</h2>
        </div>
         <div className="row tl-7-classes-row">
       
          {sports.map((sportsItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={sportsItem.imgSrc} alt="Sports Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

       
        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Transportation</h2>
        </div>
         <div className="row tl-7-classes-row">
       
          {transportation.map((transportationItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={transportationItem.imgSrc} alt="Transportation Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

       
        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Gymnasium</h2>
        </div>
         <div className="row tl-7-classes-row">
       
          {gymnasium.map((gymnasiumItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={gymnasiumItem.imgSrc} alt="Gymnasium Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

     
        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Super Market</h2>
        </div>
         <div className="row tl-7-classes-row">
       
          {supermarket.map((supermarketItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={supermarketItem.imgSrc} alt="Super Market Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

       
        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Staff Quarters</h2>
        </div>
         <div className="row tl-7-classes-row">
       
          {staffquarters.map((staffquarterstItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={staffquarterstItem.imgSrc} alt="Staff Quarters Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

       
        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Bank / ATM</h2>
        </div>
         <div className="row tl-7-classes-row">
       
          {bankatm.map((bankatmItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={bankatmItem.imgSrc} alt="Bank / ATM Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
