import { categoriesData } from '@/data/Data'
import Link from 'next/link';
import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const computerDeptPublications = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container-fluid">
        <h2 className={`${pageStyle}-section-title text-center py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50`}>Research & Publications</h2>
        <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
          {/*  <div className={`row ${pageStyle}-categories-row`}>
        
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67514c1b4b17e19d8f361d10" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title">Publications for AY 2023-24. <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67514bf44b17e19d8f361d0b" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title">Publications for AY 2022-23. <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxs-12">
                <div className="publications-content">
                    <Link href="https://manage-api.sguk.ac.in/api/assets/67514ba44b17e19d8f361d06" target="_blank">
                        <h5 className="tl-3-single-program-title publication-title">Publications for AY 2021-22. <i className="fa-regular fa-arrow-right-long"></i></h5>
                    </Link>
                </div>
            </div>
        </div>  */}

        <div className="row">
                <div className="col-lg-12">
               
                     <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Research & Publications</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    
                                    <li>Manisha S. Otari, Deepika Patil, Mithun B. Patil, "Modular Federated Cross-Domain Recommendation (MFCDR) System with a Projected Attention Network," Journal of Computational and Cognitive Engineering, 2026.</li>

                                    <li>Ambika Gadkari, Sujata Pardeshi, "A Comprehensive Review of a Cutting-Edge Machine Learning Technique for Enhancing Phishing Website Detection," Industrial Engineering Journal, ISSN: 0970-2555, Vol. 54, Issue 4, No. 1, April 2025.</li>

                                    <li>Ambika Gadkari, Sujata Pardeshi, "A Cutting-Edge Machine Learning Technique for Enhancing Phishing Website Detection," presented at the 11th National Conference on Emerging Trends in Engineering and Technology (NCETET 2025), ISBN: 978-93-48354-45-9.</li>

                                    <li>Srushti Patil, Naresh Kamble, "Secure Federated Deep Learning for MRI-Based Brain Tumor Classification," Indian Institution of Industrial Engineering Journal, 2025.</li>

                                    <li>Srushti Patil, Naresh Kamble, "A Review Paper on Federated Learning for Image Classification of Brain Tumor Detection," Indian Institution of Industrial Engineering Journal, 2025.</li>

                                    <li>Ketki Kuudale, Sujata Pardeshi, "A Review on Stress Detection in IT Professionals Using ML & NLP: A Multimodal Approach," Industrial Engineering Journal, ISSN: 0970-2555, Vol. 54, Issue 4, No. 1, April 2025.</li>

                                    <li>Ketki Kuudale, Sujata Pardeshi, "Stress Detection in IT Professionals Using ML and NLP: A Multimodal Approach," presented at the 11th National Conference on Emerging Trends in Engineering and Technology (NCETET 2025), ISBN: 978-93-48354-45-9.</li>

                                    <li>S. Pardeshi, "Artificial Intelligence managing human life," International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), 2024.</li>

                                    <li>Machhale, G., Kadam, S., & Patki, V. (2024). Integration of AI-based chatbot in tech interview prep app. In Proceedings of the 2024 2nd World Conference on Communication & Computing (WCONF).</li>

                                    <li>S. I. Tamboli and C. S. Arage, "AI and Blockchain Integration for Preserving Privacy in Cloud Databases," The Indian Journal of Technical Education, 2024.</li>

                                    <li>D. Patil, T. C. Thanuja, and B. C. Melinamath, "RiCSO-Based RiDeep LSTM: Rider Competitive Swarm Optimizer Enabled Rider Deep LSTM," International Journal of Information and Decision Sciences, 2024.</li>

                                    <li>M. S. Otari, D. Patil, and M. B. Patil, "Revolutionizing Emotion-Driven Sentiment Analysis Using Federated Learning on Edge Devices for Superior Privacy and Performance," Nanotechnology Perception, 2024.</li>

                                    <li>S. I. Tamboli and C. S. Arage, "Enhancement of Privacy Preservation and Security in Cloud Databases Using Blockchain Technology," 2023 IEEE Engineering Informatics, 2023.</li>

                                    <li>	G. Machhale, B. Purushothama, and C. Modi, "Enhancing Data Security and Privacy Through Blockchain and Machine Learning," 2024 MIT Art, Design and Technology School of Computing International Conference (MITADTSoCiCon), 2023.</li>

                                    <li>S. Shirke, R. Sonkamble, G. Machhale, and S. Makubhai, "Identification of a Person Using a Different Database," European Chemical Bulletin, 2023.</li>

                                    <li>D. Patil, T. C. Thanuja, and B. C. Melinamath, "Design and Development of Political Rider Competitive Swarm Optimized Enabled Deep Learning Model for Air Quality Detection," International Journal of Intelligent Systems, 2023.</li>

                                    <li>D. Patil, A. Patil, A. More, and S. S. Patil, "Collaborative Filtering Recommendation System Using Deep Neural Networks," International Journal of Innovation Research in Computer and Communication Engineering, 2023.</li>

                                    <li>N. Jamadar and D. Patil, "Collaborative Filtering Recommendation System Using Deep Neural Networks," International Journal of Innovation Research in Computer and Communication Engineering, 2023.</li>

                                    <li>N. Jamadar and D. Patil, "Deep Learning Approach with Multiple Models for Collaborative Filtering Recommendation System," International Journal of Innovation Research in Computer and Communication Engineering, 2023.</li>

                                    <li>S. Shirke, R. Sonkamble, S. Tambe, and G. Machhale, "An Examination of Recent Techniques for Iris and Retinal Identification in High as well as Low Resolution Pictures," European Chemical Bulletin, 2023.</li>

                                    <li>D. Patil, T. C. Thanuja, and B. C. Melinamath, "Novel Competitive Swarm Political Rider Optimizer Based NARX for Air Pollution Prediction," Journal of Data Acquisition and Processing, 2022.</li>

                                    <li>S. More, "Optimal Multipath Routing for Video Transmission in VANETs," Wireless Personal Communication (WPC), Springer, 2021.</li>

                                    <li>S. Patil, "Productive Irrigation Management System for Agriculture Using Machine Learning," Springer Nature, 2021.</li>

                                    <li>S. Patil, "Research Paper on Conceptual Study of Machine Learning for Agriculture Development," Journal of Xi'an Shiyou University, 2021.</li>

                                    <li>P. Khot, "Cellular Automata-Based Optimized Routing for Secure Data Transmission in Wireless Sensor Networks," Journal of Experimental & Theoretical Artificial Intelligence, Taylor & Francis, 2021.</li>

                                    <li>P. Khot, "Particle-Water Wave Optimization for Secure Routing in Wireless Sensor Network Using Cluster Head Selection," Springer Journal, 2021.</li>

                                    <li>G. Machhale, "Privacy Preserved E-Voting System Using Blockchain," Elsevier, 2021.</li>

                                    <li>G. Machhale, "Corona Virus Disease (Novel COVID-19) Detection in Chest X-Ray Images Using CNN Model," Mantech Publications, 2021.</li>

                                    <li>A. Chougule, "Recognizing Fresh and Rotten Fruits Using Deep Learning Techniques," Springer, 2021.</li>

                                    <li>S. More, "Prepaid Energy Meter System," International Research Journal of Engineering and Technology (IRJET), 2020.</li>

                                    <li>S. Patil, "Program Recommendation System for Students and Coder Through View History and Feedback Systems," IEEE Xplore, 2020.</li>

                                    <li>P. Khot, "Cellular Automata Based Secured Data Transmission Technique in Wireless Sensor Networks," International Journal of Engineering Innovations and Technology for Emerging Enterprises (IJEITEE), 2020.</li>

                                  
                                </ul>
                        </div>
                    </div> 
                </div>
              
                <div className="col-lg-12 mt-50">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Patent Publication</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Deepika D Patil granted a patent on Adaptive Political Rider Enabled Rider Deep LSTM for Sulphur Dioxide patent no 202241064972 A.</li>
                            </ul>
                        </div> 
                    </div>
                </div>

                <div className="col-lg-12 mt-50">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Book Publication</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Rahul Ganpatrao Sonkamble, Swati Shirke-Deshmukh, Gurunath Gagan Machhale, Sonali Patil, Shraddha Phansalkar, Sudeep Thepade, Faheem Ahmad Reegu, Abdoh Jabbari published book on topic  “Machine Learning-Based Allocation of Resources in Blockchain Network for Optimum Efficiency(Open AI and Computational Intelligence for Society 5.0)” published in IGI Global Scientific Publishing,2024.</li>
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

export default computerDeptPublications