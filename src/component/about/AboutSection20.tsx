'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'

const AboutSection20 = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-120" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/tl-14/computer-science1.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">About Department</h2>
                            <p className="tl-14-about-descr">
                            	
Computer Science and Engineering Department is established with an aim of building creative IT professionals to acquire core knowledge and skills required by IT industry or research institutes to meet global challenges. The courses are taught by the experienced, qualified faculty, industry experts and the global researchers. The laboratories are well equipped with advanced software, high configuration computer systems for technical training and research work. Knowledge sharing sessions are conducted by experts and alumni to keep up with the rapidly evolving technology on regular basis. <br/> <br/>

<span style={{fontWeight:'bold'}}> Head of Department <br/>
Dr. Chetan Arage   </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'80px'}}>
                    </div> 
            </div>
        </section>
    )
}

export default AboutSection20;
