import Link from 'next/link'
import React from 'react'

const SponsoredProject = () => {
  return (
    <div className="tl-event-details-left " style={{padding:'5px'}}>
        <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px"}}>
            <div className="col-md-12 col-12"> 
                <ul className="tl-event-details-key-content-list phd-container">
                    <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675134b94b17e19d8f361bd9">Received R & D project from The Institution of Engineers (India) under a grant-in-aid scheme for the PG project titled <strong>"Automatic and Smart Toilets using IoT and Image Processing for Smart Cities"</strong> for the period December 2019 to June 2020 (Project ID: PG2020009). <i className="fa-regular fa-arrow-right-long"></i></Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SponsoredProject