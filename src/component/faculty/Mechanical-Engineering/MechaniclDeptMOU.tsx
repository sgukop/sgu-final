import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
const MechanicalDeptMOU = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Industry University Interaction</h2>
        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-3">
                <div className="col-lg-6">
                   <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">MOUs With Various Industries / Organizations</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Bemco Hydraulics Limited, Belgaum</li>
                                    <li>Jsons Laboratories</li>
                                    <li>Afeco Heating Systems</li>
                                    <li>Sanmati Group of Industries</li>
                                    <li>Techno Craft Engineering</li>
                                    <li>Laghu Udyog Bharati, Kolhapur Chapter</li>
                                    <li>Tata Technologies Limited, Pune</li>
                                    <li>Kirloskar Oil Engines Ltd. Kagal, Kolhapur</li>
                                    <li>Pari, (Precision Automation & Robotics India Ltd.), Satara</li>
                                    <li>National Chemical Laboratory (Ncl), Pune</li>
                                    <li>Eduvance Pvt. Ltd., Mumbai</li>
                                    <li>Ats Infotech Pvt. Ltd., New Delhi</li>
                                    <li>Retailer Association Of India, Andhari, Mumbai.</li>
                                    <li>D. D. Spares & Services, Kolhapur</li>
                                    <li>Technocraft Engineering, Ichalkaranji</li>
                                    <li>Calibre Concrete Solutions, Kolhapur</li>
                                    <li>Ghodawat Food International Pvt.Ltd. Jaysingpur</li>
                                    <li>Ghodawat Industries Pvt.Ltd, Jaysingpur</li>
                                    <li>Ghodawat Consumer Products LLP, Chipri</li>
                                    <li>Excelus Star Foodbev Pvt. Ltd., Chipri</li>
                                    <li>Ghodawat Energy Pvt. Ltd., Jaysingpur</li>
                                    <li>Ghodawat Enterprises, Jaysingpur</li>
                                    <li>Ghodawat Agro Pvt. Ltd., Jaysingpur</li>
                                </ul>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-6">
                  <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title text-[#4f70b6]">MOUs With Various Industries / Organizations</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Topaz Investments Pvt.Ltd., Jaysingpur</li>
                                <li>Star Flexi-Pack Industries, Jaysingpur</li>
                                <li>Shreya Exports , Chipri</li>
                                <li>Sdg Finance And Investments Pvt. Ltd., Jaysingpur</li>
                                <li>Ghodawat Packers, Jaysingpur</li>
                                <li>Ghodawat Textile Private Ltd., Chipri</li>
                                <li>M.D. Properties Pvt. Ltd., Jaysingpur</li>
                                <li>Star Marbles, Jaysingpur</li>
                                <li>Star Infosystems Pvt. Ltd., Jaysingpur</li>
                                <li>Crecyclebin, Kolhapur</li>
                                <li>Ag Electro Services, Karad</li>
                                <li>Laxmi Agro Energy Pvt. Ltd, Kolhapur</li>
                                <li>Uni Auto Parts, Kolhapur</li>
                                <li>Global Talent Track Private Limited, Pune</li>
                                <li>Star Air</li>
                                <li>Menon And Menon Ltd., Kolhapur</li>
                                <li>Cad System, Pune</li>
                                <li>Custom Soft, Pune</li>
                                <li>Ross Equipments Pvt. Ltd., Pune</li>
                                <li>Quest Globle, Belgavi</li>
                                <li>Auto line, Hatkanangale</li>
                                <li>Samarth Udyog Technology Forum, Pune</li>
                                <li>India First Robotics Innovation & Research Ltd, Pune</li>
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

export default MechanicalDeptMOU