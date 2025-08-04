import React from "react";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
const ElectricalDeptResearch = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Research & Publications</h2>
        <div className="row">
          <MenuList dept="Electrical & Electronics Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
              
                    <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">Journal Publication</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Priyanka N. Mane and Rajin M. Linus 'Optimizing EV Fast Charging Infrastructure: Integrating High-Gain Interleaved Converter with Advanced MPPT,' in Smart science, Taylor and Francis, 2024 Impact Factor: 2.4 (SCI Journal) DOI: <a href="https://doi.org/10.1080/23080477.2024.2423965" className="tl-def-btn-2">https://doi.org/10.1080/23080477.2024.2423965 <i className="fa-regular fa-arrow-right"></i></a></li>
                                    <li>Nilam S. Patil and Rajin M. Linus, 'Optimal Synergetic Control using Chaotic Dragon Fly Based MPPT with Cascaded ANFIS Method for Ultra-Fast Electric Vehicle Charging by Hybrid Renewable Energy System,' in Electrical Engineering, Springer, Vol., 2024. Impact Factor: 1.8 (SCI Journal) DOI: <a href="https://doi.org/10.1007/s00202-024-02447-z" className="tl-def-btn-2"> https://doi.org/10.1007/s00202-024-02447-z <i className="fa-regular fa-arrow-right"></i></a></li>
                                    <li>Neeta Kulkarni, Rajin M. Linus and Nilesh Bhaskarrao Bahadure,'A Small Wide Band Inverted L-Shaped Flexible Antenna for Sub-6 GHz 5G Applications,' in AEUE - International Journal of Electronics and Communications, Vol. 159, 2023. (SCI Journal),  DOI:<a href="https://doi.org/10.1016/j.aeue.2022.154479" className="tl-def-btn-2"> https://doi.org/10.1016/j.aeue.2022.154479<i className="fa-regular fa-arrow-right"></i></a></li>
                                </ul>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">Conference Publication</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Pranali P Nikam, Rajin M. Linus and Nilam S Patil 'Analysis of Different Charging Modes in Electric Vehicle (EV) Application,' 14th International Conference on Computing, Communication and Networking Technologies (14ICCCNT2023) 2023, 06th - 08th July 2023, IIT Delhi, India. (Scopus)</li>
                                   <li>Milind Shinde and Rajin M. Linus 'Improved Performance of Punching Machine Using Servo Motor Feeder Mechanism,' 14th International Conference on Computing, Communication and Networking Technologies (14ICCCNT2023) 2023, 06th - 08th July 2023, IIT Delhi, India. (Scopus) </li>
                                   <li>Priyanka N. Mane and Rajin M. Linus 'Power Quality issues in Solar Powered Fast Charging Station for Electric Vehicle: Comprehensive Review Mitigation Measures,' 8th International IEEE Conference for Convergence in Technology (8th I2CT 2023), 07th - 9th April 2023, Hotel Vivanta Pune (TAJ), Hinjawadi, Maharashtra, India. (Scopus) </li>
                                   <li>Nilam S. Patil and Rajin M. Linus 'Ultra Charging Challenges in Grid Connected Charging Station - A Review,' Springer 4th International Conference on Advanced Technologies for Societal Applications (Techno Societal-2022), 09th - 10th December 2022, SVERI College of Engineering, Pandharpur, India. (Scopus) </li>
                                   <li>Mahadev Gaikwad and Rajin M. Linus 'Cost Effective Contemporary Developments in Trickle Impregnation Technology' 5th International Conference on Recent Advances in Engineering and Technical Paper and Model Contest (TECHNOVATION 2022), 23rd - 24th December 2022, Poornima College of Engineering, Rajasthan, India.(Scopus)</li>
                                   <li>Rajin M. Linus , Shital Pandurang Londhe and Ajit N Shinde 'Implementation of Ackermanns Geometric Electronic Differential Model in PMSM Based Electric Vehicle,' IEEE Conference on Information and Communication Technology (IEEE CICT2022), 18th - 20th November 2022, IIITM Gwalior, India. (Scopus) </li>
                                   <li>O. Dange, N. Patil, S. Gadgune and Rajin M. Linus 'Speed Control of BLDC Motor using Integral Sliding Mode Controller,' Third International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT), 5th - 6th January 2023, Bhilai, India (Scopus) </li>
                                   <li>Neeta Kulkarni, Rajin M. Linus and Nilesh Bhaskarrao Bahadure, 'Flexible MIMO antennas for wireless communication (5G Technology),' Springer 4th International Conference on Advanced Technologies for Societal Applications (Techno Societal-2022), 09th - 10th December 2022, SVERI College of Engineering, Pandharpur, India.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                       <h3 className="tl-event-details-area-title">Patent Details</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Rajin M. Linus, Improved Maximum Power Point Tracking Using Linear Relationship between Optimum Speed and Wind Velocity to Government of India Patent (Published) Application Number: 202321055704 (on 29/9/2023) </li>
                                <li>K. Balaji, Rajin M. Linus, Improved Lift Coefficient of Aerofoil Using Convergent Nozzle to Government of India Patent (Published) Application Number: 202121031754 . (on 03/05/2024)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
   )
}

export default ElectricalDeptResearch