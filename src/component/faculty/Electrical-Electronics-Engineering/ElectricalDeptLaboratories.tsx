import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const ElectricalDeptLaboratories = () => {
  return (
    <>
    <section className="tl-9-blogs pt-100 pb-100">
        <div className="container-fluid">
            <div className="tl-9-section-heading">
                <div className="row gy-4 align-items-center">
                    <div className="col-md-12">
                        <h2 className="tl-9-section-title mb-50">Laboratories</h2>
                    </div>
                </div>
            </div>

        <div className="row">
          <MenuList
            dept="Electrical & Electronics Engineering"
            subMenu={NavLinks}
          />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-11-section-heading">
                <h2 className="tl-11-section-title">Academic Infrastructure</h2>
            </div>

            <div className="row g-3 g-lg-4 justify-content-center">
                <div className="tl-event-details-left mt-30">
                    <div className="tl-event-details-key-content tl-event-details-area">
                        <ul className="tl-event-details-key-content-list">
                            <li>Core and Specialized Laboratories </li>
                            <li>Power Electronics Laboratory </li>
                            <li>Electric Vehicle Laboratory </li>
                            <li>Renewable Energy Laboratory </li>
                            <li>Battery and Energy Storage Laboratory </li>
                            <li>Workshop</li>
                            <li>MATLAB/ Simulink - Software</li>
                            <li>Ansys</li>
                            <li>AutoCAD</li>
                            <li>Workstation with high processing Power</li>
                            <li>Collaborative Learning Spaces </li>
                            <li>Field Training and Industrial Visit </li>
                            <li>Experienced Teaching Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
         
            <div className="tl-11-section-heading mt-50">
                <h2 className="tl-11-section-title">Mechatronics Lab Car</h2>
            </div>
            <div className="row g-3 g-lg-4 justify-content-center">
                <div className="tl-event-details-left mt-30">
                    <div className="tl-event-details-key-content tl-event-details-area">
                    <p className="dark-mode-white-color">Lab Car is essentially a car simulated environment where all Electrical, Electronic and Mechanical hardware is put in loop and different driving, environmental, functional conditions can be simulated to check correctness of the design intent.</p>
                        <ul className="tl-event-details-key-content-list">
                            <li>State of the art car Lab, one of its kind in India</li>
                            <li>Useful for students of Electronics, Electrical, Mechanical and Computer Science Engineering</li>
                            <li>Working Model of Electrical and Electronics systems of Passenger car and Light Commercial Vehicle</li>
                            <li>Working Model Electrical Vehicle</li>
                            <li>Contributes to Electrical Vehicle Design and Prototyping as a Thrust Area of SGU.</li>
                        </ul>
                    </div>
                </div>
               <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-1.jpg" alt="Laboratories Image"/></figure>
                        </div>
                       
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-2.jpg" alt="Laboratories Image"/></figure>
                        </div>
                       
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-4.jpg" alt="Laboratories Image"/></figure>
                        </div>
                      
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-5.jpg" alt="Laboratories Image"/></figure>
                        </div>
                       
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-6.jpg" alt="Laboratories Image"/></figure>
                        </div>
                       
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-7.jpg" alt="Laboratories Image"/></figure>
                        </div>
                       
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-8.jpg" alt="Laboratories Image"/></figure>
                        </div>
                       
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-9.jpg" alt="Laboratories Image"/></figure>
                        </div>
                       
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-10.jpg" alt="Laboratories Image"/></figure>
                        </div>
                        
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-11.jpg" alt="Laboratories Image"/></figure>
                        </div>
                       
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-12.jpg" alt="Laboratories Image"/></figure>
                        </div>
                      
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/electrical-electronics-engineering/laboratories/Car-13.jpg" alt="Laboratories Image"/></figure>
                        </div>
                      
                    </div>
                  </div>
            </div>   
           
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title mt-50">Laboratories Cost</h2></div>

            <div className="row justify-content-center gy-4">
            <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                       <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title">VLSI Lab</h3>
                            <p className="tl-9-program-descr">This lab is equipped with Spartan III VLSI kits with FPGA XC3S450 (23), DELL OPTIPLEX 380 Computers. Each Computer is equipped with Xilinx Logic Pro 13.1 licenced edition for 25 users.</p>
                            <p className="dark-mode-white-color"><strong>Lab cost : </strong>10,60,020 Rs</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                       <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title">Digital Design & Microprocessor Lab</h3>
                            <p className="tl-9-program-descr">This lab is equipped with 8085 Kits (24), 8255 Kits (10), ISDN Trainer(1), DELL OPTIPLEX 380/360 Computers (10), Digital Storage Oscilloscope (1).</p>
                            <p className="dark-mode-white-color" style={{marginBottom:"40px"}}><strong>Lab cost : </strong>9,00,144 Rs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                       <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title">Programming Technique Lab</h3>
                            <p className="tl-9-program-descr">This lab is equipped with 25 systems of DELL OPTIPLEX 380. This lab has MATLAB 2011a Software on all PC's.</p>
                            <p className="dark-mode-white-color" style={{marginBottom:"40px"}}><strong>Lab cost  : </strong>11,92,000 Rs</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                       <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title">Linear Circuits & Linear Integrated Circuits Lab</h3>
                            <p className="tl-9-program-descr">This lab is equipped with Digital Storage Oscilloscope (2), Cathode Ray Oscilloscope (6), and Power Supply (12).</p>
                            <p className="dark-mode-white-color" style={{marginBottom:"40px"}}><strong>Lab cost : </strong>4,66,862 Rs</p>
                        </div>
                    </div>
                </div>
               
               
                
                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                       <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title">Analog Communication & Digital Communication lab</h3>
                            <p className="tl-9-program-descr">This lab is equipped with Analog Communication kits (14), Digital Communication kits (14), Antennas Trainer (2), Microwave Test benches (2), Spectrum Analyzer Rigol 3GHz.</p>
                            <p className="dark-mode-white-color"><strong>Lab cost  : </strong>14,46,499 Rs</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                       <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title">Analog Electronics Circuit & Design Lab</h3>
                            <p className="tl-9-program-descr">This lab is equipped with Analog IC Tester (1), Cathode Ray Oscilloscope (12), Function Generator (8), Digital Storage Oscilloscope (2), Power Supply (2)</p>
                            <p className="dark-mode-white-color"><strong>Lab cost : </strong>5,43,543 Rs</p>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                       <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title">Microcontroller & Embedded System Lab</h3>
                            <p className="tl-9-program-descr">This lab is equipped with 25 systems of DELL OPTIPLEX 380. Each PC has Proteus Simulation Software for 25 users, ARES PCB Software for 10 users, Keil UVision 4 Demo Software and MPLAB 8.56 Open Source Software, Microcontroller kits (25), ARM Kits (21) and Digital Storage Oscilloscope.</p>
                            <p className="dark-mode-white-color"><strong>Lab cost : </strong>21,23,741 Rs</p>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                       <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title">Optical Communication and Networks & Power Electronics lab</h3>
                            <p className="tl-9-program-descr">This lab is equipped with Optical Fiber Communication Kits (06), Audio & Video Engg Kits, Power electronics kits (12), Programmable Logic Controller trainer, Digital Storage Oscilloscope (4).</p>
                            <p className="dark-mode-white-color" style={{marginBottom:"90px"}}><strong>Lab cost : </strong>7,38,683 Rs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
</>
  )
}

export default ElectricalDeptLaboratories