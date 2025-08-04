import Link from 'next/link'
import React from 'react'

const IndustrialVisits = () => {
  return (
    <div className="tl-event-details-left " style={{padding:'5px'}}>
      <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px"}}>
        <div className="col-md-12 col-12"> 
          <ul className="tl-event-details-key-content-list phd-container">
              <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675808f69173bf9f471ac0cd"> Educational Tour to BITS Pilani Campus Goa and S.R.M. Mahavidhyalaya, Kudal for UG and PG Mathematics Students. <i className="fa-regular fa-arrow-right-long"></i></Link></li>
          </ul>
      </div>
  </div>
</div>
  )
}

export default IndustrialVisits