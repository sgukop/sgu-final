'use client'
import React from "react";
import { Nav, Tab } from "react-bootstrap";

const SguVideo = () => {
  return (
    <section className="w-full h-full tl-7-categories tl-7-section-spacing pb-0 pt-16 relative">
      <div className="tl-7-categories-row w-100 flex justify-center items-center flex-col-reverse lg:flex-row">
        <Tab.Container defaultActiveKey="tl-7-cat-1-tab">
          <Tab.Content className="tab-content w-full lg:w-[54%]" id="myTabContent" style={{zIndex:'99'}}>
            <Tab.Pane eventKey="tl-7-cat-1-tab">
              <iframe className="rounded-tl-[40px] rounded-br-[40px]" width="100%" height="740" src="https://www.youtube.com/embed/v4G_a-R0Q48" title="The Blueprint of Success  Mr. Sanjay Ghodawat   TEDxWCE Sangli" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Tab.Pane>
            <Tab.Pane eventKey="tl-7-cat-2-tab">
              <iframe className="rounded-tl-[40px] rounded-br-[40px]" width="100%" height="740" src="https://www.youtube.com/embed/nZw7F0WmiEQ" title="SGUniversity Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Tab.Pane>
            <Tab.Pane eventKey="tl-7-cat-3-tab">
              <iframe className="rounded-tl-[40px] rounded-br-[40px]" width="100%" height="740" src="https://www.youtube.com/embed/Yl0qiKudiRk" title="Invitation for 5th Convocation Ceremony" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Tab.Pane>
            <Tab.Pane eventKey="tl-7-cat-4-tab">
              <iframe className="rounded-tl-[40px] rounded-br-[40px]" width="100%" height="740" src="https://www.youtube.com/embed/RfUSqU5Efhg" title="Chairman Sanjay Ghodawat Birthday Massage for Student" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Tab.Pane>
          </Tab.Content>
          <Nav variant="tabs" className="nav nav-tabs w-full lg:w-[46%] bg-transparent" id="myTab" role="tablist" style={{zIndex:'99', flexDirection:'column'}}>

            <div className="w-full bg-[#2e3867] flex justify-start pl-10 items-center py-2">
              <h2 className='text-center w-fit py-3 px-10 bg-[#f26122] text-white font-bold text-[50px] mb-5 rounded-tl-[40px] rounded-br-[40px]'>
                SGU Videos
              </h2>
            </div> <br/>
            <div>
            <Nav.Item>
              <Nav.Link eventKey="tl-7-cat-1-tab" className="bg-none" style={{ padding: '25px 45px 25px 45px' }}>
                <div className="tl-7-cate-title text-3xl 2xl:text-4xl font-medium w-full lg:w-fit">The Blueprint of Success  <p className="font-bold text-3xl 2xl:text-4xl mt-1.5">Mr. Sanjay Ghodawat</p> <span className="pt-1.5">TEDxWCE Sangli</span></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tl-7-cat-2-tab" className="" style={{ padding: '25px 45px 25px 45px', backgroundColor: 'white' }}>
                <div className="tl-7-cate-title text-3xl 2xl:text-4xl font-bold w-full lg:w-fit">Sanjay Ghodawat <p className="font-medium text-3xl 2xl:text-4xl mt-1.5"> University Video </p></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tl-7-cat-3-tab" className="" style={{ padding: '25px 45px 25px 45px', backgroundColor: 'white' }}>
                <div className="tl-7-cate-title text-3xl 2xl:text-4xl font-bold w-full lg:w-fit">SGU LIVE <p className="font-medium text-3xl 2xl:text-4xl mt-1.5"> 6th Convocation Ceremony </p></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tl-7-cat-4-tab" className="bg-none" style={{ padding: '25px 45px 25px 45px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
                <div className="tl-7-cate-title text-3xl 2xl:text-4xl font-bold w-full lg:w-fit">Chairman Sanjay Ghodawat <p className="font-medium text-3xl 2xl:text-4xl mt-1.5"> Birthday Massage for Student </p></div>
              </Nav.Link>
            </Nav.Item>
            </div>
          </Nav>
        </Tab.Container>
      </div>

      <div
        className="w-full -pt-32 relative h-[750px] z-10"
        style={{
          backgroundImage: "url('/assets/images/home/footer-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop:'-100px'
        }}>

        <div className="absolute inset-0 bg-white opacity-50"></div>

      </div>
    </section>
  );
};

export default SguVideo;

