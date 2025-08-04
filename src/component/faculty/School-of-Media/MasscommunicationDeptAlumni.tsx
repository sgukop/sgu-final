"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function MassCommunicationDeptAlumni() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Alumni</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Mass Communication" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Year</p></th>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p><strong>2019-2022</strong></p></td>
                  <td><p>HEBBALKAR SANJANA AJAY</p></td>
                </tr>
                <tr>
                  <td><p>2</p></td>
                  <td><p></p></td>
                  <td><p>GHARGE PRATIKSHA BHANUDAS</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p></p></td>
                  <td><p>SHIRPURE ROHINI RAJESHWAR</p></td>
                </tr>
                <tr>
                  <td><p>4</p></td>
                  <td><p></p></td>
                  <td><p>NAYAK AVANTIKA ANI</p></td>
                </tr>
                <tr>
                  <td><p>5</p></td>
                  <td><p><strong>2020-2023</strong></p></td>
                  <td><p>JAIN ANUPREKSHA AVINASH</p></td>
                </tr>
                <tr>
                  <td><p>6</p></td>
                  <td><p></p></td>
                  <td><p>PATIL NIKITA DATTATRAYA</p></td>
                </tr>
                <tr>
                  <td><p>7</p></td>
                  <td><p></p></td>
                  <td><p>KAKADE DIVYA DEEPAK</p></td>
                </tr>
                <tr>
                  <td><p>8</p></td>
                  <td><p></p></td>
                  <td><p>MALI SHIVAM SUNIL</p></td>
                </tr>
                <tr>
                  <td><p>9</p></td>
                  <td><p></p></td>
                  <td><p>PATIL SAKSHI BHIMSEN</p></td>
                </tr>
                <tr>
                  <td><p>10</p></td>
                  <td><p><strong>2021-2024</strong></p></td>
                  <td><p>BHANUSE PRAJAKTA C.</p></td>
                </tr>
                <tr>
                  <td><p>11</p></td>
                  <td><p></p></td>
                  <td><p>DESAI KARANSING D.</p></td>
                </tr>
                <tr>
                  <td><p>12</p></td>
                  <td><p></p></td>
                  <td><p>SHETE SIYAA N.</p></td>
                </tr>
                <tr>
                  <td><p>13</p></td>
                  <td><p></p></td>
                  <td><p>DESAI YASHOLEKHA K</p></td>
                </tr>
                <tr>
                  <td><p>14</p></td>
                  <td><p></p></td>
                  <td><p>PUSALKAR PRESHITA M.</p></td>
                </tr>
                <tr>
                  <td><p>15</p></td>
                  <td><p></p></td>
                  <td><p>RANE SAKSHI R.</p></td>
                </tr>
                <tr>
                  <td><p>16</p></td>
                  <td><p></p></td>
                  <td><p>KOLEKAR SARTHAK S.</p></td>
                </tr>

               
               </tbody>
            </Table>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default MassCommunicationDeptAlumni;
