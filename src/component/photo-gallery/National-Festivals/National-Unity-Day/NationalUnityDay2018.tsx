import React from "react";

const NationalUnityDay2018 = () => {
  const nationalunityday1 = [
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/national-unity-day-2018/NSS-1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/national-unity-day-2018/NSS-2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/national-unity-day-2018/NSS-3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/national-unity-day-2018/NSS-4.jpg",
    },
 ]

 const nationalunityday2 = [
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/national-unity-day-2018/NSS-6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/national-unity-day-2018/NSS-5.jpg",
    },
]

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">National Unity Day Celebration</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">NSS Department of Sanjay Ghodawat University, Kolhapur celebrated Rashtriya Ekta Diwas on 31st October, 2018 and paid tribute to Vallabhbhai Patel, who was instrumental in keeping India united and one of the founding leaders of Republic of India. On this occasion, the students took Rashtriya Ekta Diwas Pledge and undertook 'Run for Unity'.</h6>
          {nationalunityday1.map((Items, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Items.imgSrc} alt="National Unity Day Photoes" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row tl-7-classes-row mt-50">
        <h6 className="tl-8-feature-title">Department of Commerce and Management, Sanjay Ghodawat University, Kolhapur celebrated Rashtriya Ekta Diwas on 31st October, 2018 by conducting poster presentation on the theme of Patriotism and National Unity. The winners were given the prizes in the present of Honorable Vice Chancellor Dr. V.V. Raikar, Dr. B.M. Hirdekar , Registrar, SGU and Dr. Abid Salati, HOD Commerce & Management.</h6>
          {nationalunityday2.map((Items1, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={Items1.imgSrc} alt="National Unity Day Photoes" />
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default NationalUnityDay2018;
