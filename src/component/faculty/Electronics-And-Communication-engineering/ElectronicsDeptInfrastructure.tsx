"use client"
import React from 'react'
import { Tab, Nav, Table } from "react-bootstrap";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ElectronicsDeptInfrastructure = () => {
  return (
    <div className="schools-section pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Laboratories</h2>
            <div className="row">
              <MenuList dept="Mechanical Engineering" subMenu={NavLinks} />
                <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0"
                >
                    <div className="row">
                    <div className="col-lg-12">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <Table striped responsive className="governing-table">
                  <thead>
                      <tr>
                        <th><p className="text-[#4f70b6]">Sr. No.</p></th>
                        <th><p className="text-[#4f70b6]">Lab. Name</p></th>
                        <th><p className="text-[#4f70b6]">Area  Sq.Mt.</p></th>
                       {/*  <th><p className="text-[#4f70b6]">Investment Rs.</p></th>  */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td><p>1</p></td>
                          <td><p>Linear integrated circuit Lab/ELE Lab</p></td>
                          <td><p>130.48</p></td>
                          {/* <td><p>5,43,219/-</p></td>  */}
                      </tr>
                      <tr>
                          <td><p>2</p></td>
                          <td><p>Analog circuit design Lab I/ PG Research Lab II</p></td>
                          <td><p>70.00</p></td>
                        {/*   <td><p>8,06,031/-</p></td>  */}
                      </tr>
                      <tr>
                          <td><p>3</p></td>
                          <td><p>Microprocessor Lab/ Digital Design Lab</p></td>
                          <td><p>104.08</p></td>
                          {/* <td><p>3,91,323/-</p></td>  */}
                      </tr>
                      <tr>
                          <td><p>4</p></td>
                          <td><p>Programming Technique Lab/DSP Lab/MATLAB</p></td>
                          <td><p>89.30</p></td>
                         {/*  <td><p>11,92,000/-</p></td>  */}
                      </tr>
                      <tr>
                          <td><p>5</p></td>
                          <td><p>Circuit Simulation Lab/Microcontroller Lab/Embedded Systems Lab</p></td>
                          <td><p>89.30</p></td>
                          {/* <td><p>20,77,020/-</p></td>  */}
                      </tr>

                      <tr>
                          <td><p>6</p></td>
                          <td><p>Optical fiber communication Lab/Audio Video Engg./Power Electronics</p></td>
                          <td><p>123.32</p></td>
                          {/* <td><p>8,73,393/-</p></td>  */}
                      </tr>

                      <tr>
                          <td><p>7</p></td>
                          <td><p>VLSI  Lab</p></td>
                          <td><p>123.32</p></td>
                         {/* <td><p>10,60,020/-</p></td>  */}
                      </tr>
                      <tr>
                          <td><p>8</p></td>
                          <td><p>Electronics Communication System Lab (Analog/Digital/Antennas & Wave propagation/Microwave Engineering)</p></td>
                          <td><p>130.48</p></td>
                         {/*  <td><p>14,46,502/-</p></td>  */}
                      </tr>

                      <tr>
                          <td><p>9</p></td>
                          <td><p>Electrical Science Lab</p></td>
                          <td><p>172.00 </p></td>
                         {/*  <td><p>1,31,296/-</p></td>  */}
                      </tr>
                      <tr>
                          <td><p>10</p></td>
                          <td><p>VLSI Design & ES</p></td>
                          <td><p>151.12</p></td>
                        {/*   <td><p>18,69,828/-</p></td>  */}
                      </tr>
                      <tr>
                          <td><p>11</p></td>
                          <td><p>Mechatronics Lab Car</p></td>
                          <td><p>170.00</p></td>
                         {/*  <td><p>1,20,00,000/-</p></td>  */}
                      </tr>
                     
                      <tr>
                          <td></td>
                          <td><strong>Total</strong></td>
                          <td><p><strong>1353.56</strong></p></td>
                         {/*  <td><p><strong>2,23,90,632/-</strong></p></td>  */}
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

export default ElectronicsDeptInfrastructure