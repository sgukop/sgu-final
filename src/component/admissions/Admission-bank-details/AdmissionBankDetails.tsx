'use client'
import React from 'react'
import BankDetails from './BankDetails'

const AdmissionBankDetails = () => {
    return (
        <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/admission-bank-banner/campus-image9.jpg" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">Admission Fee Bank Details</h2>
                            <p className="dark-mode-white-color">Kindly pay Admission Fee by one of the following method</p>
                            <p className="dark-mode-white-color"><strong>1. By Online Payment Gateway (Recommanded)</strong> -- <a rel="noopener noreferrer" target="_blank" className="tl-def-btn-2" href="#">Click Here for Instructions & Payment Procedure</a> <br/>
                             (Note : Payment Gateway is benificial to keep track of your payment)
                                <br/>OR</p>
                            <p className="dark-mode-white-color"><strong>2. By RTGS / NEFT or Demand Draft (DD) to following Bank details</strong> -- <a rel="noopener noreferrer" target="_blank" className="tl-def-btn-2" href="#">Click Here to download Payment Transfer Intimation Letter </a><br/>
                            (**Note : After completing transaction please fill the Payment Transfer Intimation Letter and e-mail the scanned copy to ravi.patil@sginstitute.in.)</p>
                               
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'80px'}}>
                    <BankDetails/>
                </div> 
            </div>
        </section>
    )
}

export default AdmissionBankDetails
