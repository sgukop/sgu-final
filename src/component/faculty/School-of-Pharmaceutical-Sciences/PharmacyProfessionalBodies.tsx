import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import Link from 'next/link'

const PharmacyProfessionalBodies = () => {
  return (
    <section className="tl-1-about pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Guest Lecture</h2>
            <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <p>This activity is generally planned for all the students of the school and it is conducted throughout the academic year. Interest is called to deliver guest lecture through google form sharing to renown persons from Pharma industry and Pharmacy colleges all over the country.  From this list the shortlisted renown persons are called once to deliver a guest lecture to diploma, degree and PG students of the school depending on the relevance of the topic and its applicability. Approximately 12 guest lectures are conducted per semester for B. Pharm and M. Pharm program, while 24 guest lectures are conducted for D. Pharm program over the period of an academic year. Topic of the guest lecture is generally expertise area of the speaker and suitable students are fixed to attend these lectures mostly in offline mode. </p>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-12 col-xxs-12 mt-20">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/67dd151f4f56d3a0bcfba550" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Details of Guest Lectures 24-25 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
                 <div className="col-lg-6 col-md-12 col-12 col-xxs-12 mt-20">
                        <Link href="https://manage-api.sguk.ac.in/api/assets/6a0d85e612260ec08e7c837e" className="tl-3-single-program-new" target="_blank">
                          <h5 className="tl-3-single-program-title-new">Details of Guest Lectures 25-26 <i className="fa-regular fa-arrow-right-long"></i></h5>
                        </Link>
                    </div>
            </div>


          
        </div>
    </div>
    </div>
</section>
  )
}

export default PharmacyProfessionalBodies