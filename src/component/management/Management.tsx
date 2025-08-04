import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const Management = () => {
  return (
    <section className="tl-6-editorials pt-100 pb-100">
    <div className="container">
        <h2 className="tl-6-section-title">Management</h2>

        <div className="row gx-3 gx-lg-4 g-3 justify-content-center">
         
             <div className="col-md-3 col-6 col-xxs-12">
                <div className="tl-3-single-staff tl-8-single-expert tl-6-editorial">
                    <div className="tl-3-single-staff-img tl-8-single-expert-img">
                      <img src="assets/images/management/team1.jpg" alt="Management Image" />
                    </div>

                    <div className="tl-3-single-staff-txt tl-8-single-expert-txt">
                        <h5 className="tl-8-single-expert-name"><Link href="/president" target="_blank">Mr. Sanjay Ghodawat</Link></h5>
                        <span className="tl-8-single-expert-role">President</span>
                    </div>
                </div>
            </div>   
            <div className="col-md-3 col-6 col-xxs-12">
                <div className="tl-3-single-staff tl-8-single-expert tl-6-editorial">
                    <div className="tl-3-single-staff-img tl-8-single-expert-img">
                    <img src="assets/images/management/team2.jpg" alt="Management Image" />
                    </div>

                    <div className="tl-3-single-staff-txt tl-8-single-expert-txt">
                        <h5 className="tl-8-single-expert-name"><Link href="/secretary" target="_blank">Mr. Shrenik Ghodawat</Link></h5>
                        <span className="tl-8-single-expert-role">Secretary</span>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-6 col-xxs-12">
                <div className="tl-3-single-staff tl-8-single-expert tl-6-editorial">
                    <div className="tl-3-single-staff-img tl-8-single-expert-img">
                    <img src="assets/images/management/team3.jpg" alt="Management Image" />
                    </div>

                    <div className="tl-3-single-staff-txt tl-8-single-expert-txt">
                        <h5 className="tl-8-single-expert-name"><Link href="/trustee" target="_blank">Mr. Vinayak V Bhosale</Link></h5>
                        <span className="tl-8-single-expert-role">Trustee</span>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-6 col-xxs-12">
                <div className="tl-3-single-staff tl-8-single-expert tl-6-editorial">
                    <div className="tl-3-single-staff-img tl-8-single-expert-img">
                    <img src="assets/images/management/team4.jpg" alt="Management Image" />
                    </div>

                    <div className="tl-3-single-staff-txt tl-8-single-expert-txt">
                        <h5 className="tl-8-single-expert-name"><Link href="/vice-chancellor" target="_blank">Dr. Udhav Bhosle</Link></h5>
                        <span className="tl-8-single-expert-role">Vice Chancellor</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
  )
}

export default Management