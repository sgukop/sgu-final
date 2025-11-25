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
                        Dear Applicants, <br/> <br/>


                      Kindly fill up the information in below registration form & submit. You will receive an login credentials with username & password on your registered mail id. For any queries contact us - 7028811190 , 7028811192 Kindly refer below steps for completion of application form
                  </p>
                  <ul className="tl-event-details-key-content-list phd-container gap-1">
                        <li className="dark-mode-white-color text-[#4f70b6]" style={{fontWeight:'700'}}>Scholarships Available for Meritorious Students</li>
                  </ul>
          </div>
              <div className="d-lg-flex justify-content-center">
              <div className="col-lg-12 col-12 d-flex justify-content-center">
                <div id="ee-form-1" style={{ maxWidth: "600px", width: "100%" }}></div>
              </div>
              
            </div>

          <script src="https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/sanjayghodawatuniversity/ee-form-widget/form-1/widget.js"></script>
        </div>
        
    </section>
  )
}

export default AdmissionSection