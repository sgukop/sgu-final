import Link from 'next/link'
import React from 'react'

const ProgramsConducted = () => {
  return (
    <div className="tl-event-details-left " style={{padding:'20px'}}>
        <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px' }}>
            <div className="col-md-12 col-12"> 
                <ul className="tl-event-details-key-content-list phd-container">
                     <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675809859173bf9f471ac0d7">One day workshop for students on Introduction to Scilab in January and February 2020. <i className="fa-regular fa-arrow-right-long"></i></Link></li>

                     <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675809af9173bf9f471ac0dc">A state level workshop for B.Sc.-III year students on Introduction to Scilab on 29th January 2019 <i className="fa-regular fa-arrow-right-long"></i></Link></li>

                     <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675809d29173bf9f471ac0e1">A state level Science competition "Sci-STAR 2018" for B.Sc. students on 9th February <i className="fa-regular fa-arrow-right-long"></i></Link></li>  

                     <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/6758092a9173bf9f471ac0d2">A state level workshop for B.Sc.-III year students on Introduction to Scilab on 1st Feb 2018. <i className="fa-regular fa-arrow-right-long"></i></Link></li>

                     <li><Link rel="noopener noreferrer" className="dark-mode-white-color" target="_blank" href="https://manage-api.sguk.ac.in/api/assets/675809fc9173bf9f471ac0e6">A state level workshop for B.Sc.-III year students on Introduction to Scilab on 27th Jan 2018. <i className="fa-regular fa-arrow-right-long"></i></Link></li>     
                </ul>
          </div>
        </div>
    </div>
  )
}

export default ProgramsConducted