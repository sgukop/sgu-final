'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const BiotechDeptPublications = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Research & Publications</h2>
        <div className="row">
          <MenuList dept="Biotechnology" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                    <p className="dark-mode-white-color">The School of Biotechnology is committed to advancing knowledge and innovation through interdisciplinary research that addresses global challenges Biotechnology. <br/> Our research focuses on cutting-edge areas such as medical biotechnology, bioprocess engineering and biopharmaceuticals. <br/>
                    Through a culture of curiosity and innovation, we aim to contribute to scientific breakthroughs that improve lives and promote a sustainable future.</p>
                </div>
                  </div>
            </div>

            <div className="row mt-50">
                <div className="col-lg-12">
               
                     <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Faculty Publications:</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Sanket Ghule, Akshay Chavan, <strong>Ajay Nalawade</strong> and Mangesh Vedpathak (2024) Exploring the Genetic Mechanisms of Drought Resistance in Crop Plants, Journal of Emerging Sciences and Applied Technologies, 1(1): 12-24.</li>
                                    <li>Mangesh Vedpathak, Akshay Chavan, <strong>Ajay Nalawade</strong> and Sanket Ghule (2024) The Role of Mycorrhizal Fungi in Plant Growth and Soil Health: Implications for Sustainable Agriculture Journal of Emerging Sciences and Applied Technologies, 1(1): 25-31.</li>
                                    <li><strong>Ajay S. Nalawade</strong> and Pradeep A. Sangappagol (2024) Book Chapter: Ethnobotanical Survey of Medicinal Plants in Chikodi, Belagavi, Karnataka, Traditional Medicinal Plants vol 9. Pp 17-31.</li>
                                    <li><strong>Ajay S. Nalawade</strong> and Pradeep A. Sangappagol (2024) Book Chapter: Ethnobotanical Survey of Medicinal Plants in Chikodi, Belagavi, Karnataka, Traditional Medicinal Plants vol 9. Pp 17-31.</li>
                                    <li><strong>Monika Yadav</strong>, Shivani Rawat, Shashank Gupta, Chapter 12 - Ribosome binding antibacterial agents, Editor(s): Munishwar Nath Gupta, Punit Kaur, Priyanka Sharma, In Foundations and Frontiers in Enzymology, Bacterial Enzymes as Targets for Drug Discovery, Academic Press, 2025, Pages 267-297, ISBN 9780443222221, https://doi.org/10.1016/B978-0-443-22222-1.00014-3.</li>
                                </ul>
                        </div>
                    </div> 
                </div>
              
               
                </div>

                <div className="row mt-50">
                <div className="col-lg-12">
               
                     <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Patents</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Dr. Vedpathak Mangesh Mohan, Mr. Sanket Ramchandra Ghule, <strong>Dr. Ajay Sarjerao Nalawade</strong>, Rupesh Anita Andhare, Dr. Indra Jeet Chaudhary, Dr. Kishor Subhash Shinde (2024) <strong>Marine Bacterial Enzyme Extractor,</strong> Patent of design 436775-001, Government of India, The Patent Office 08/11/2024.</li>

                                    <li>Dr Vedpathak Mangesh Mohan, Dr. Seema Vilas Khadatare, Dr Pankaj Kumar, <strong>Dr. Ajay Sarjerao Nalawade,</strong> Dr. Virbhadra Dande (2024) <strong>Plant Energy Harvesting Device,</strong> Patent of design 441893-001, Government of India, The Patent Office 24/12/2024.</li>

                                  
                                  
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

export default BiotechDeptPublications
