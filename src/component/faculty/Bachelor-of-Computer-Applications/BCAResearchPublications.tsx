"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function BCAResearchPublications() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Research & Publications</h2></div>
            </div>
            <div className="row">
                <MenuList dept="Bachelor of Computer Applications" subMenu={NavLinks} />
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
                    <th><p className="text-[#4f70b6]">Sr. No</p></th>
                    <th><p className="text-[#4f70b6]">Year</p></th>
                    <th><p className="text-[#4f70b6]">Name of the Faculty</p></th>
                    <th><p className="text-[#4f70b6]">Name of the Paper Published</p></th>
                    <th><p className="text-[#4f70b6]">Name of the Peer <br/> Reviewed Journal Published</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>2022-2023</p></td>
                  <td><p>Chetan S. Arage</p></td>
                  <td><p>Smart Contract Using Blockchain For Safely Managing The Pharmaceutical Industry Record</p></td>
                  <td><p>Journal of Pharmaceutical Negative Results(Scopus Indexed)</p></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>2022-2023</p></td>
                  <td><p>Usha B. Bubane</p></td>
                  <td><p>Utkal Historical Research Journal </p></td>
                  <td><p>UGC Care Approved, Peer Reviewed and Referred Journal</p></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>2022-2023</p></td>
                  <td><p>Vidya S. Bhosale</p></td>
                  <td><p>Safeguarding Academic credentials with Blockchain in Education</p></td>
                  <td><p>Journal of Indian School of Political Economy</p></td>
                </tr>
                <tr>
                  <td><p>4</p></td>
                  <td><p>2022 - 2023</p></td>
                  <td><p>Vidya S. Bhosale</p></td>
                  <td><p>Blockchain for Student information System: need of Technological Adoption</p></td>
                  <td><p>Scopus indexed journal</p></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>2022 - 2023</p></td>
                  <td><p>Vidya S. Bhosale</p></td>
                  <td><p>Comparing Work-Life Balance and Job Satisfaction among Nurses in Government and Private Hospitals in Chennai</p></td>
                  <td><p>Scopus indexed journal Pacific Business Review (International)</p></td>
                </tr>

                <tr>
                  <td><p>6</p></td>
                  <td><p>2022 - 2023</p></td>
                  <td><p>Swati A. Patil</p></td>
                  <td><p>Swoc Analysis of E-learning Technology in COVID-19 Epidemic</p></td>
                  <td><p>Journal of Maharaja Sayajirao University of Baroda</p></td>
                </tr>

                <tr>
                  <td><p>7</p></td>
                  <td><p>2022 - 2023</p></td>
                  <td><p>Asavari A. Patil</p></td>
                  <td><p>Use of Artificial Intelligence in Education</p></td>
                  <td><p>Sey Bold Publications</p></td>
                </tr>

                <tr>
                  <td><p>8</p></td>
                  <td><p>2022 - 2023</p></td>
                  <td><p>Priyanka V. Patil</p></td>
                  <td><p>Artificial Intelligence: Developments, Issues, and applications</p></td>
                  <td><p>Journal of NorthEasternUniversity</p></td>
                </tr>

                <tr>
                  <td><p>9</p></td>
                  <td><p>2023-2024</p></td>
                  <td><p>Chetan S. Arage</p></td>
                  <td><p>Fake News Detection using hybrid BiLSTM-TCN model with attention mechanism</p></td>
                  <td><p>IEEE Explore</p></td>
                </tr>

                <tr>
                  <td><p>10</p></td>
                  <td><p>2023 - 2024</p></td>
                  <td><p>Swati A. Patil, Jyoti A. Chavan</p></td>
                  <td><p>Blended Learning: Todays Need for Education</p></td>
                  <td><p>Journal of Oriental Research Madras</p></td>
                </tr>

                <tr>
                  <td><p>11</p></td>
                  <td><p>2023 - 2024</p></td>
                  <td><p>Prashant G. Mithari</p></td>
                  <td><p>Digital Solutions for Green Horizons: Computer Technology in Environmental Sustainability</p></td>
                  <td><p>Globalization:  Exploring Its Concepts And Debates Exploring Its Concepts And Debates </p></td>
                </tr>

                <tr>
                  <td><p>12</p></td>
                  <td><p>2023 - 2024</p></td>
                  <td><p>Prashant G. Mithari</p></td>
                  <td><p>Harnessing Information Technology in Learning: Exploring Emerging Trends and Innovative Approaches</p></td>
                  <td><p>Journal of digital learning and distance education</p></td>
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

export default BCAResearchPublications;
