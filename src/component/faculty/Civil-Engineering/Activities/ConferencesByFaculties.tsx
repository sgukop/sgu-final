import Link from 'next/link'
import React from 'react'

const ConferencesByFaculties = () => {
  return (
    <div className="tl-event-details-left " style={{padding:'5px'}}>
      <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px"}}>
        <div className="col-md-12 col-12"> 
          <ul className="tl-event-details-key-content-list phd-container">
             <li>Patil. S.R. attended International Conference on Composite Materials and Structures (ICCMS 2017 ), Conference in Hyderabad, on 27th - 29th December 2017</li>
              <li>Lole A.A. attended 4th International Conference on Advancement in Engineering, Applied Science and Management (ICAEASM-2017) at Centre for Development of Advanced Computing (C-DAC), Juhu, Mumbai, Maharashtra, India on 8th October 2017.</li>
              <li>Kore. S. B. attended 4th International Conference on Advancement in Engineering, Applied Science and Management (ICAEASM-2017) at Centre for Development of Advanced Computing (C-DAC), Juhu, Mumbai, Maharashtra, India on 8th October 2017.</li>
              <li>Shiyekar S.M. attended 3rd International Conference on Mechanics of Composites, MECHCOMP 2017 at University of Bologna (Italy) on 4-7th July 2017</li>
          </ul>
      </div>
  </div>
</div>
  )
}

export default ConferencesByFaculties