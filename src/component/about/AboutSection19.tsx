'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'

const AboutSection19 = () => {
    const { openVideoModal } = useTalimContext();
    return (
        <section className="tl-14-about pt-120" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/about-all-dept-images/pharmacy-pharmacist.jpg" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">About Pharmacy and Pharmacist</h2>
                            <p className="tl-14-about-descr">
                            It is a versatile, dynamic , growing and increasingly diverse profession. It is an age old profession which has transformed into a hub for "Global Healthcare" and evolved as a multidisciplinary and multifaceted field in recent times. The increasing rate of advance pharmaceutical industry, the health sector has thrown away opportunities for pharmacy professionals. <br/>

It is the science and technique of preparing, dispensing and review of drugs and providing additional clinical services. It is a health profession that links health sciences and pharmaceutical sciences and aims to ensure the safe effective and affordable use of drugs. <br/>

Pharmacist is also known as Chemists or Druggists .They are health professionals who practice in pharmacy, the field of health sciences focusing on safe and effective medicine use. Pharmacists undergo university-level education to understand the biochemical mechanisms and action of drugs, drug uses, therapeutic roles, side effects, potential drug interactions and monitoring parameters.
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

export default AboutSection19;
