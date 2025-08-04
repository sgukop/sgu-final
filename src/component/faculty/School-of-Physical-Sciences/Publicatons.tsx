"use client"
import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";

const Publications = () => {
  return (
    <div className="accordion" id="publications">
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
         
          aria-controls="collapseOne"
        >
          2023-24
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#publications"
      >
        <div className="accordion-body mt-30">
        <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <Table bordered responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                    <th><p className="text-[#4f70b6]">Title of paper</p></th>
                                    <th><p className="text-[#4f70b6]">Author</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Study of boundary layer characteristics during the landfalling of a Nisarga cyclone</p></td>
                                    <td><p>Rani P. Pawar , Dada P. Nade , <br/> Omkar M. Patil , Sambhaji M. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Comparative study of supercapacitive behaviour of vanadium oxide
                                    nanoflakes deposited hydrothermally on stainless steel mesh</p></td>
                                    <td><p>Aditi D Yadav, Rutuja B Patil, <br/> Rutuja Gurav & Sarita P Patil </p></td>
                                </tr>
                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Hydrothermally grown netlike interconnected nanofakes and microfowers of vanadium oxide for supercapacitive applications</p></td>
                                    <td><p>Aditi D. Yadav,Rutuja B. Patil, <br/> Rutuja Gurav, Sanket Mali, <br/> Sambhaji Pawar, Sarita P. Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Effect of hydrothermal temperature variation on electrochemical performance of manganese oxide thin films for supercapacitor application</p></td>
                                    <td><p>R B Patil, A D Yadav, <br/> R Gurav, A S Patil, <br/> S S Mali, S M Pawar and S P Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Gold Sensitized In2O3 nanocubes for ppb level NO2 gas sensing</p></td>
                                    <td><p>S.P. Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>6</p></td>
                                    <td><p>Designing polyaniline films with tailored thermal, optical, and
                                    hydrophobic properties via gold nanoparticle integration</p></td>
                                    <td><p>Satish A. Mahadik</p></td>
                                </tr>
                                <tr>
                                    <td><p>7</p></td>
                                    <td><p>Enhancing photoelectrochemical performance through surface engineering of CdSe and Al-doped CdSe nanoparticles on ZnO/FTO photoanodes</p></td>
                                    <td><p>Satish A. Mahadik</p></td>
                                </tr>
                            </tbody>
                       </Table>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          2022-23
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#publications"
      >
        <div className="accordion-body mt-30">
        <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <Table bordered responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                    <th><p className="text-[#4f70b6]">Title of paper</p></th>
                                    <th><p className="text-[#4f70b6]">Author</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>A brief review of equatorial plasmabubbles</p></td>
                                    <td><p>Akshay S. Patil, Dada P. Nade, Rani P. Pawar, Sambhaji M. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>1D iron cobaltite electrode forefficient electrochemical wateroxidation</p></td>
                                    <td><p>Sambhaji M. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Hybridized heterostructure of CoS and MoS2 nanoparticles for highly- efficient and robust bifunctional water electrolysis</p></td>
                                    <td><p>Sambhaji M. Pawar,</p></td>
                                </tr>
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Surface properties of chlorophyll-sensitized TiO2 nanorods for dye-sensitized solar cells applications.</p></td>
                                    <td><p>Satish A. Mahadik</p></td>
                                </tr>
                            </tbody>
                       </Table>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
      </div>
    </div>
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
           2021-22
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#publications"
      >
        <div className="accordion-body mt-30">
        <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <Table bordered responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                    <th><p className="text-[#4f70b6]">Title of paper</p></th>
                                    <th><p className="text-[#4f70b6]">Author</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Structural, morphological, and optical studies of hydrothermallysynthesized Nb-added TiO2 for DSSC application</p></td>
                                    <td><p>Rani P. Pawar </p></td>
                                </tr>
                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Influence of Tin DopedTiO2 Nanorods on Dye Sensitized Solar Cells</p></td>
                                    <td><p>Rani P. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Eu3+ Doped Lithium Silicaborate Glasses for LED Application</p></td>
                                    <td><p>P. P. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Nickel Cobaltite: A Positive Electrode Material for Hybrid Supercapacitors</p></td>
                                    <td><p>Mr. Shivraj M. Mahadik, Dr. Sarita Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Porous In2O3 thick films as a low temperature NO2 gas detector</p></td>
                                    <td><p>Dr. Sarita Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>6</p></td>
                                    <td><p>Chemically Synthesized Hierarchical Flower like ZnO Microstructures</p></td>
                                    <td><p>Dr. Sarita Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>7</p></td>
                                    <td><p>Experimental and Theoretical Insights into Transition-Metal (Mo, Fe) Codoping in a Bifunctional Nickel Phosphide Microsphere Catalyst for Enhanced Overall Water Splitting</p></td>
                                    <td><p>S. M. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>8</p></td>
                                    <td><p>In Situ Fabrication of Nickel-Iron Oxalate Catalysts for Electrochemical Water Oxidation at High Current Densities</p></td>
                                    <td><p>Sambhaji Pawar</p></td>
                                </tr>
                            </tbody>
                       </Table>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          2020-21
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#publications"
      >
        <div className="accordion-body mt-30">
        <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <Table bordered responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                    <th><p className="text-[#4f70b6]">Title of paper</p></th>
                                    <th><p className="text-[#4f70b6]">Author</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Intra-annual variations of regional total column ozone, aerosol optical depth, and water vapor fromgrounbased,satellite-based and model-based observations</p></td>
                                    <td><p>Dada P. Nadea, Swapnil S. Potdara, Rani P. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Synthesis and Characterizations of 3D TiO2 Nanoflowers Thin Film: Hydrothermal Method</p></td>
                                    <td><p>Rani P. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Influence of Tin Doped TiO2 Nanorods on Dye Sensitized SolarCells</p></td>
                                    <td><p>Rani P. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Influence of light absorption in theinteraction of asymmetric elegantHermite-cosh-Gaussian laser beams with collisionless magnetized plas</p></td>
                                    <td><p>B. D. Vhanmore</p></td>
                                </tr>
                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Synthesis of CuO thin film sensorsby spray pyrolysis method for NO2 gas detection</p></td>
                                    <td><p>Sambhaji Khot , Satish Phalake , Shivraj Mahadik , Mahendr Baragale , Sandhya Jagadale 
                                    Vishal Burungale,Sarita Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>6</p></td>
                                    <td><p>Characterization and Gas Sensing Properties of Spin Coated WO3 Thin Films</p></td>
                                    <td><p>Sarita P. Patil</p></td>
                                </tr>
                            </tbody>
                       </Table>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
           2019-20 
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#publications"
      >
        <div className="accordion-body mt-30">
        <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <Table bordered responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                    <th><p className="text-[#4f70b6]">Title of paper</p></th>
                                    <th><p className="text-[#4f70b6]">Author</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>The long-term trend analysis of rainfall data from 1901 to 2015 for Maharashtra and Goa region from India</p></td>
                                    <td><p>Swapnil S. Potdar, Shreyas Kulkarni, Priyanka Patil, Rani P. Pawar, V.V. Jakhalekar, Dada P. Nade</p></td>
                                </tr>
                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Total Column Ozone, Precipitable Water Content and Aerosol Optical Thickness Over Atigre Village, a Tropical Station: First Observations</p></td>
                                    <td><p>D. P. Nade, S. S. Potdar, R. P. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Synthesis of rutileTiO2 nanostructures by single step hydrothermal route and its characterization</p></td>
                                    <td><p>R. P. Pawar, D. P. Nade</p></td>
                                </tr>
                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Highly stable CdS quantum dotsembedded in glasses and itsapplication for inhibition ofbacterial colonies</p></td>
                                    <td><p>P.P. Pawar</p></td>
                                </tr>
                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Fabrication of nanogranular TiO2 thin films by SILAR technique: Application for NO2 gassensor</p></td>
                                    <td><p>Sarita P. Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>6</p></td>
                                    <td><p>Chemically Synthesized Hierarchical Flower like ZnO Microstructures</p></td>
                                    <td><p>Sarita P. Patil</p></td>
                                </tr>
                                <tr>
                                    <td><p>7</p></td>
                                    <td><p>Gas sensing performance ofhydrothermally synthesized indiumoxide microbricks</p></td>
                                    <td><p>Sarita Patil, Sandhya Jagadale</p></td>
                                </tr>
                            </tbody>
                       </Table>
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

export default Publications