import React from 'react'
import ContactForm2 from '../form/ContactForm2'

const ContactSection2 = () => {
  return (
    <section className="tl-8-contact tl-3-section-spacing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="tl-3-consult-img">
                        <h2 className="tl-8-section-title">Get In Touch With Us</h2>
                       
                        
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4401.734396445252!2d74.3826016900257!3d16.74328798113293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1511256219757" width="100%" height="100%" style={{maxWidth:"740px"}}></iframe>
                    </div>
                </div>

                <div className="col-lg-6 col-9 col-xxs-12">
                    <ContactForm2/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection2