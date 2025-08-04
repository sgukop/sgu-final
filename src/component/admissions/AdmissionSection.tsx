import React from 'react'
import AdmissionForm from '../form/AdmissionForm';
interface Props {
    style: string;
}
const AdmissionSection:React.FC<Props> = ({style}) => {
  return (
    <section className={`pt-50  mb-60 ${style}`}>
        <div className="container">
          <div className="tl-4-innovs-heading">
              <h2 className="tl-9-section-title mb-50">Online Admission Enquiry</h2>
                  <p className="tl-4-innovs-heading-txt" style={{marginTop:'20px', paddingTop:'20px', fontSize:'18px',color:"black"}}>
                        Dear Candidate, <br/> <br/>


                      Kindly fill up all the information in below online form and submit the form. You do not have to pay any fees for the application form. You will receive an acknowledgement of submission on your email ID AND/OR text message on your Mobile. Keep in touch with our Admissions Cell or you may contact on our 90110 39800 or 90110 22567 for any queries.
                  </p>
                  <ul className="tl-event-details-key-content-list phd-container gap-1">
                        <li className="dark-mode-white-color text-[#4f70b6]" style={{fontWeight:'700'}}>Scholarships Available for Meritorious Students</li>
                  </ul>
          </div>
          <div className="d-lg-flex justify-content-center">
              <div className="col-lg-12 col-12 ">
                    <AdmissionForm style=''/>
              </div>
              {/*  <div className="col-lg-6 col-12 tl-5-consult-img" style={{marginTop:'60px'}}> 
                    <img src="assets/images/admission-open/admission-open-image1.jpg" alt="Students"/>
               </div>  */}
            </div>
        </div>
    </section>
  )
}

export default AdmissionSection