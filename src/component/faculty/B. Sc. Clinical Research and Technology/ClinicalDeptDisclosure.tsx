import Link from 'next/link'
import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const PharmacyDeptDisclosure = () => {
  return (
    <section className="tl-12-subjects approved-section-spacing">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Mandatory Disclosure</h2>
            <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Approvals</h2></div>
            <div className="tl-12-subjects-row">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="approved-subj-title" style={{backgroundColor:"rgb(182, 198, 233)"}}>
                            <Link href="https://manage-api.sguk.ac.in/api/assets/675173134b17e19d8f361eab" rel="noopener noreferrer" target="_blank"><h5 className="text-center">PCI Approval Letter 19-20</h5></Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className='approved-subj-title' style={{backgroundColor:"rgb(241, 185, 161)"}}>
                            <Link href="https://manage-api.sguk.ac.in/api/assets/675173374b17e19d8f361eb0" rel="noopener noreferrer" className="" target="_blank"><h5 className="text-center">PCI Approval Letter 20-21</h5></Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="approved-subj-title" style={{backgroundColor:"rgb(182, 198, 233)"}}>
                            <Link href="https://manage-api.sguk.ac.in/api/assets/675173564b17e19d8f361eb5" rel="noopener noreferrer" className="" target="_blank"><h5 className="text-center">PCI Approval Letter 21-22</h5></Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="approved-subj-title" style={{backgroundColor:"rgb(241, 185, 161)"}}>
                            <Link href="https://manage-api.sguk.ac.in/api/assets/675172e64b17e19d8f361ea6" rel="noopener noreferrer" target="_blank"><h5 className="text-center">PCI Approved Letter 22-23</h5></Link>
                        </div>
                    </div>
                   
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="approved-subj-title" style={{backgroundColor:"rgb(182, 198, 233)"}}>
                            <Link href="https://manage-api.sguk.ac.in/api/assets/675173814b17e19d8f361eba" rel="noopener noreferrer" target="_blank"><h5 className="text-center">PCI Approved Letter 23-24</h5></Link>
                        </div>
                    </div>

                   {/* <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="approved-subj-title" style={{backgroundColor:"rgb(241, 185, 161)"}}>
                            <Link href="https://manage-api.sguk.ac.in/api/assets/675173934b17e19d8f361ebf" rel="noopener noreferrer" target="_blank"><h5 className="text-center">MSBTE Equivalence Certificate</h5></Link>
                        </div>
                    </div>  */}
                     <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="approved-subj-title" style={{backgroundColor:"rgb(241, 185, 161)"}}>
                            <Link href="https://manage-api.sguk.ac.in/api/assets/67d3dd164f56d3a0bcfb9be0" rel="noopener noreferrer" target="_blank"><h5 className="text-center">Updated MSBTE approval file</h5></Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="approved-subj-title" style={{backgroundColor:"rgb(182, 198, 233)"}}>
                            <Link href="https://manage-api.sguk.ac.in/api/assets/67d3dd0b4f56d3a0bcfb9bdb" rel="noopener noreferrer" target="_blank"><h5 className="text-center">2024-25 PCI Approval Final</h5></Link>
                        </div>
                    </div>

                   
                </div>
            </div>

            <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Regulatory Authorities</h2></div>
            <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li><a href="https://www.pci.nic.in/" className="tl-def-btn-2" target="_blank"> Pharmacy Council of India (PCI) <i className="fa-regular fa-arrow-right"></i></a></li>

                                <li><a href="https://www.mspcindia.org/" className="tl-def-btn-2" target="_blank">Maharashtra State Pharmacy Council (MSPC)<i className="fa-regular fa-arrow-right"></i></a></li>

                                <li><a href="https://msbte.ac.in/" className="tl-def-btn-2" target="_blank">Maharashtra State Board of Technical Education (MSBTE)<i className="fa-regular fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default PharmacyDeptDisclosure