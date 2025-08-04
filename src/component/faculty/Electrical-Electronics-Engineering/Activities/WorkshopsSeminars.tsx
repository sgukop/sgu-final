import Link from 'next/link'
import React from 'react'

const WorkShopsSeminars = () => {
  return (
    <div className="tl-event-details-left " style={{padding:'5px'}}>
        <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px"}}>
            <div className="col-md-12 col-12"> 
                <ul className="tl-event-details-key-content-list phd-container">
                    <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_self" href="#">Seminar conducted on <strong>“CAREER IN CYBER SECURITY” </strong>at Sanjay Ghodawat University, Kolhapur on 1st August 2019. <i className="fa-regular fa-arrow-right-long"></i></Link></li>
                    <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_self" href="#">Seminar conducted on <strong>"PROJECT IDEA AND DEVELOPMENT"</strong> at Sanjay Ghodawat University, Kolhapur on 23rd July 2019. <i className="fa-regular fa-arrow-right-long"></i></Link></li>
                    <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_self" href="#">Two Days workshop on <strong>"Micro Projects on laboratory during effective student learning Techniques"</strong> at Sanjay Ghodawat University, Kolhapur on 11 to 12 January 2019.  <i className="fa-regular fa-arrow-right-long"></i></Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WorkShopsSeminars