import React from "react";

const SocialGathering2023 = () => {
  const gatheringphotoes = [
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/16.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/25.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/26.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/27.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/28.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/29.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/30.jpg",
    },
  /*  {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/31.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/32.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/33.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/34.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/35.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/36.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/37.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/38.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/39.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/40.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/41.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/42.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/43.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/44.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/45.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/46.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/47.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/48.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/49.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/50.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/51.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/52.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/53.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/54.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/55.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/56.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/57.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/58.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/59.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/60.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/61.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/62.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/63.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/64.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/65.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/66.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/67.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/68.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/69.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/70.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/71.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/72.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/73.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/74.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/75.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/76.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/77.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/78.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/79.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/80.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/81.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/82.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/83.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/84.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/85.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/86.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/87.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/88.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/89.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/90.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/91.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/92.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/93.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/94.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/95.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/96.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/97.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/98.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/99.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/100.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/101.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/102.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/103.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/104.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/105.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/106.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/107.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/108.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/109.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/110.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/111.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/112.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/113.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/114.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/115.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/116.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/117.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/118.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/119.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/120.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/121.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/122.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/123.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/124.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/125.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/126.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/127.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/128.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/129.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/130.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/131.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/132.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/133.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/134.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/135.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/136.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/137.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/138.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/139.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/140.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/141.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/142.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/143.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/144.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/145.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/146.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/147.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/148.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/149.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/150.jpg",
    }, */
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/151.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/152.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/153.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/154.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/155.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/156.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/image.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/158.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/159.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/160.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/161.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/162.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/163.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/164.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/165.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/166.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/167.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/168.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/169.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/170.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2023/171.jpg",
    },
];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">UMANG - Annual Social Gathering 2023</h2>
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">UMANG - Annual Social Gathering 2023 had been organised on 28th February and 1st March 2023</h6>
          {gatheringphotoes.map((Items, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Items.imgSrc} alt="Social Gathering 2023 photoes" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default SocialGathering2023;
