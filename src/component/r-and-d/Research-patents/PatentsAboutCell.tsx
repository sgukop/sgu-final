import React from 'react'

const PatentsAboutCell = () => {
  return (
   <section className="tl-8-about tl-3-section-spacing">
    <div className="container">
    <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Patents & Innovations Cell</h2>
        <div className="row g-0 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/r&d/patents/about-cell.png" alt="About Cell Image" className="tl-8-about-main-img rounded-full border-[10px] p-4 border-[#4f70b6]"/>
                </div>
            </div>

            <div className="col-xl-5 col-lg-6">
                <div className="tl-8-about-txt yellow-clr-hover">
               
                    <h6 className="tl-8-feature-title text-[#4f70b6] text-lg">About Cell</h6>
                    <div className="tl-8-features">
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr">SGU has formed an IPR cell to bring awareness of IP among stake holders. Its primary aim is to identify and check feasibility of generating IP from student's projects, research work and innovation cell. For IP's with potential commercialization value, the cell will provide financial assistance and help in filling and maintaining IP.</p>
                        </div>

                        <div className="tl-8-feature">
                            <h6 className="tl-8-feature-title text-[#4f70b6] text-lg">Objectives</h6>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>To promote academic freedom and safeguard creation of intellectual property at the University;</li>
                                <li>To provide a comprehensive single window reference system for all intellectual property rights issues relating to intellectual property generated at the University;</li>
                                <li>To safeguard the interest of creator of intellectual property and provide fair distribution of returns accruing from the commercialization of IPR;</li>
                                <li>To help in introducing prudent IP management practices within the University to promote an IPR culture;</li>
                                <li>To preserve the academic freedom to publish the research results and to make them aware that if they do decide on public release, the patent system cannot be brought into play thereafter;</li>

                                <li>To ensure that once they decide to explore the prospects of commercialization of IP, they must disclose it to the University, while continuing to keep the information confidential until patent applications are being processed;</li>
                                <li>To ensure the release of University's rights relating to an IP, back to the researcher where University decides not to pursue the opportunity for commercialization.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}

export default PatentsAboutCell