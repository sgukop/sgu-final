import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
const AerospaceDeptPublications = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Publications</h2>
            <div className="row tl-event-details-row g-0">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
                <div className="col-lg-12">
               
                     <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Staff and Students Publications</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>S.Sulthan S. Saranya, K. Balaji “Investigation into Active and Passive Methods to Enhance Aerofoil Aerodynamic Performance” International Journal of Aeronautical and Space Sciences 2025/2/1</li>
                                    <li>S Sulthan, K Balaji, Vardhman S Chavaj, Gaikwad Pranoti Vijaykumar “Characterization Study of Natural Fibers and Glass Fibers an Experimental Approach” International Conference on Futuristic Advancements in Materials, Manufacturing and Thermal Sciences ,Springer Nature Singapore 3-14 2024/1/19</li>
                                    <li>Muzeer.S, Natesan, Sushma "Studies on Mechanical properties of Carbon  epoxy composites by hand layup process", material science. php,Volume 12 Issue 2 |June, 2024</li>
                                    <li>Muzeer.S, Umar Patil, Rakesh. "Design and Analysis Aerospike Blunt Body at Hypersonic Speed", IRJAEM, Vol. 2 No. 04 (2024): Issue 04</li>
                                    <li>Muzeer S, Yogesh Kamble,Rajat Soni, Vedant Purushottam Shimpi, "Wear Analysis of Al6061 Hybrid Metal Matrix B4C/Zro2 /Sic Composites", nanotechnology perceptions, ISSN 1660-6795, Vol. 20, S10 (2024)  Aug 18, 2024</li>
                                    <li>Mr.Balaji K ,Mr Babu V, Mr.S.Sulthan Design and Development of Multipurpose Agriculture Drone Using Lightweight Materials- SAE International Journal of Aerospace, 2022 doi:10.4271/01-16-02-0012</li>
                                    <li>Mr.S.Sulthan ,Mr.Balaji K ,Mr Babu V, Mr Akhil C.K Composite Fuselage Proposal-Part 1: Static and Modal FEA In SAE Technical Paper, DOI: https://doi.org/10.4271/2024-01-6000</li>
                                    <li>K Balaji, Shubham Sanjay Kolhe, SV Khandal Structural Analysis of Wing Fuselage Lug Attachment International Journal of Aeronautical and Space Sciences.2023/5/20</li>
                                    <li>Sanjeevkumar Khandal K. Balaji, Mayuri R. Gore Investigation on the Aerodynamic Performance of Different Aerofoils Using Vortex Generators SAE International Journal of Aerospace 2023.</li>
                                    <li>K Balaji, Apoorva Yadav Design and Optimization of Winglet Shapes for Cambered Aerofoil International Journal of Aeronautical and Space Sciences 2023/4</li>
                                    <li>K Balaji, G Jims John Wessley Studies on the enhancement of aerodynamic performance in aerofoils using co-flow jet a comprehensive review Aerospace Systems 2023/3</li>
                                    <li>K Balaji, G Jims John Wessley, SV Khandal, Mayuri Gore Enhancement of Aerodynamic Efficiency of a Formula Car by Incorporating a Passive Device in the Front Wing Recent Trends in Design, Materials and Manufacturing Selected Proceedings of ICRADMM 2020, 2022/4/29</li>
                                    <li>K Balaji, G Jims John Wessley, SV Khandal Structural and Thermal Analyses of Gas Turbine Blades with Internal Cooling System Under Steady-State Conditions Recent Trends in Design, Materials and Manufacturing Selected Proceedings of ICRADMM 2020, 2022/4/29</li>
                                    <li>Aishwarya Katkar, K Balaji, SV Khandal Numerical Studies on Fixed Wing Aircraft Aerodynamic Performance using Injection Suction Mechanism International Journal of Vehicle Structures & Systems (IJVSS) ,2022/9/1</li>
                                    <li>K Balaji, V Babu, S Sulthan Design and Development of Multipurpose Agriculture Drone Using Lightweight Materials SAE International Journal of Aerospace 2022/12/30</li>
                                    <li>K Balaji, G Jims John Wessley Enhancement of aerodynamic efficiency of aerofoil using improved blowing and suction system Advances in Science and Technology. Research Journal, 2021</li>
                                    <li>Nilesh Desai, AM Nagaraj, Nilesh Sabnis Analysis of thermo-physical properties of SAE20W40 engine oil by the addition of SiO2 nanoparticles Journal Materials Today Proceedings,2021</li>
                                    <li>Sonali Dilip Bankar, Pravin N Kulkarni, Vivek V Kulkarni, Nandkumar K Patil Tension-tension fatigue life estimation of CFRP composites by modal testing Materials Today Proceedings 2021</li>
                                    <li>Nagesh SB, NR Banapurmath, Chandrashekhar TK, SV Khandal Biodiesels powered in-cylinder common rail direct injection (CRDi) Assisted Homogeneous Charge Compression Ignition (HCCI) engine International Journal of Sustainable Engineering 2021</li>
                                    <li>Balaji Karuppiah, Jims John Wessley Study on the Influence of Mass Flow Rate over a National Advisory Committee for Aeronautics 6321 Airfoil Using Improved Blowing and Suction System for Effective Boundary Layer SAE International Journal of Aerospace 2021/8/6</li>
                                    <li>Pankaj B Gavali, Appasaheb N Pandav, Sujit S Patil, Nilesh V Sabnis OEE Improvement of VMC Machine by Implementing Lean Manufacturing for Brake Adapter Ring New Arch-International Journal of Contemporary Architecture 2021/10/6</li>
                                    <li>K Balaji, G Jims John Wessley Experimental investigations on the performance of a modified co-flow jet aerofoil IJST, 2020</li>
                                    <li>Dhanesh Dhanawade, Nilesh Vijay Sabnis, Pankaj Gavali Tool Changer Selection for the Robot to Attach and Detach the End of Arm Tooling Proceedings of International Conference on Intelligent Manufacturing and Automation,ICIMA 2020</li>
                                    <li>Sagar Anil Patil, Vishwajeet Anil Subhedar, S.V. Khandal, Balaji. K, S. Saranya. "Review on Application of Drones in Agriculture". International conference on Recent Developments in Engineering Management Sciences and Technology (ICRDET'19), Chennai (Tamilnadu) on 16th March 2019. (Under Process)</li>
                                    <li>Vaishnavi Shivkumar Hirekodi, Jyoti Mahantesh Mangasuli, S.V. Khandal,Balaji. K. Journal Details - ISBN:978-95-87901-02-05, Title of Article - Effect of Fuel Injection Timing, Injection Pressure and Combustion Chamber Shapes on the Performance of Diesel Engine Run on Biodiesel</li>
                                    <li>S.V.Khandal, Balaji.K, V.V.Kulkarni, N.S.Desai, Aishwarya Mukund Katkar,Shubham Rajaram Mali. Journal Details - Under Process. Title of Article - Effect of preheating the cotton seed Biodiesel on the performance of diesel engine</li>
                                </ul>
                        </div>
                    </div> 
                </div>
              
                <div className="col-lg-12 mt-50">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">Patent Published</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Muzeer S granted a patent on topic of Thermal Spray Gun for Nanoparticle Coating Design no : 417775-001</li>
                                    <li>Sulthan S published a patent “ANALYSIS OF FULL COMPOSITE FUSELAGE FOR ENHANCED AIRCRAFT PERFORMANCE AND DURABILITY” IN Patent 202421042235A</li>
                                    <li>Mr.S.Sulthan published a patent FABRICATION OF LOW-COST IRRIGATION / PESTICIDE DRONE Application Number:202321047863 by the patent office government of India</li>
                                    <li>Dr.S. Mujeer granted a patent Instrument for metal nanoparticle generations by the patent office government of India</li>
                                    <li>Ms. Shrawani Vishwanath Mali, Ms Ishika Rahul Jadav and Ms Pradnya Prakash Surve published a patent Design and development of optimum susction system (oss) to control boundary layer over an aircraft wing by the patent office government of India.</li>
                                    <li>Ms.Pranoti Vijayakumar Gaikwad and Mr.Vardhaman Shashir Chavaj published a patent Aerodynamic performance improvement of aircraft wing using blowing sucton pipe vent (BSPV) System by the patent office government of India.</li>
                                    <li>Dr.S. Mujeer granted a patent Hybrid IC engine The patent office government of India.</li>
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

export default AerospaceDeptPublications