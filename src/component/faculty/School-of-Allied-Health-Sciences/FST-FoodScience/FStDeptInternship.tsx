'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../../Reusable-components/MenuList';
import { Table } from 'react-bootstrap';

const FSTDeptInternship = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Internship & Placements</h2>
        <div className="row">
          <MenuList dept="Allied Health Sciences" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
           <div className="row tl-event-details-row g-0">
                <div className="tl-11-section-heading">
                    <h2 className="tl-11-section-title">Internship</h2>
                </div>
                <h3 className="tl-event-details-area-title">Internship Count Third Year B.Sc. Food Science and Technology 2024 (92%)</h3>
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                      {/* <Table striped bordered hover responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                    <th><p className="text-[#4f70b6]">Name of the student</p></th>
                                    <th><p className="text-[#4f70b6]">Name of the industry</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Mr .Pritesh Sikandar Sonule</p></td>
                                    <td><p>Gokul Dairy</p></td>
                                </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Ms. Divya Kulkarani <br/>Ms. Tanvi Nalawade <br/> Ms. Shivani Hajare <br/>Ms. Mahek Jevrani <br/>Ms. Kritika Shetty</p></td>
                                    <td><p>Yalgud dairy</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Mr. Vishwajeet digraje <br/>Mr. Parth powar <br/>Mr. Shivjeet ghorpade <br/>Mr. Shubham shikare
                                    </p></td>
                                    <td><p>Madhu Sagar</p></td>
                                </tr>

                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Mr. Samir Bepari <br/> Mr. Shivjeet Ghorpade</p></td>
                                    <td><p>Sphurti</p></td>
                                </tr>
                            </tbody>
                        </Table>   */}

                        <Table bordered responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]">Sr.No</p></th>
                                    <th><p className="text-[#4f70b6]">Name of the student</p></th>
                                    <th><p className="text-[#4f70b6]">Name of the industry</p></th>
                                    <th><p className="text-[#4f70b6]">Tenure of Internship in days</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>1</p></td>
                                    <td><p>Ms. Kritika Shetty </p></td>
                                    <td rowSpan={2}><p>Sula Wines, Nashik.</p></td>
                                    <td rowSpan={2}><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>2</p></td>
                                    <td><p>Ms. Vardhani Patil</p></td>
                                </tr>

                                <tr>
                                    <td><p>3</p></td>
                                    <td><p>Ms. Mahek Jewrani</p></td>
                                    <td rowSpan={2}><p>Madhu Sagar</p></td>
                                    <td rowSpan={2}><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>4</p></td>
                                    <td><p>Ms. Shourya Kakodkar</p></td>
                                </tr>

                                <tr>
                                    <td><p>5</p></td>
                                    <td><p>Ms. Shivani Hajare</p></td>
                                    <td rowSpan={6}><p>Warna Industry, Shree Warna Sahakari Dudh Utpadak Prakriya Sangh, Ltd. <br/> Tatyasaheb Kore Nagar Tal. Panhala, Dist. Kolhapur.</p></td>
                                    <td rowSpan={6}><p>45</p></td>
                                </tr>

                                <tr>
                                    <td><p>6</p></td>
                                    <td><p>Ms. Riddhi Patil</p></td>
                                </tr>

                                <tr>
                                    <td><p>7</p></td>
                                    <td><p>Ms. Aishwarya Ingale</p></td>
                                </tr>

                                <tr>
                                    <td><p>8</p></td>
                                    <td><p>Ms. Divya Kulkarni</p></td>
                                </tr>

                                <tr>
                                    <td><p>9</p></td>
                                    <td><p>Ms. Tanvi Nalawade</p></td>
                                </tr>

                                <tr>
                                    <td><p>10</p></td>
                                    <td><p>Ms. Amruta Palase</p></td>
                                </tr>

                                <tr>
                                    <td><p>11</p></td>
                                    <td><p>Mr. Vishwajit Digraje</p></td>
                                    <td rowSpan={2}><p>Gokul Milk, Kolhapur</p></td>
                                    <td rowSpan={2}><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>12</p></td>
                                    <td><p>Mr. Shubham Shikare</p></td>
                                </tr>

                                <tr>
                                    <td><p>13</p></td>
                                    <td><p>Ms. Meghali Nikkam</p></td>
                                    <td><p>Rajarambapu Dudh Sangh, Islampur</p></td>
                                    <td><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>14</p></td>
                                    <td><p>Mr. Umar Mujawar</p></td>
                                    <td><p>Hindusthan Foods, Gokul Shirgaon, Kolhapur</p></td>
                                    <td><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>15</p></td>
                                    <td><p>Mr. Sameer Bepari</p></td>
                                    <td rowSpan={3}><p>Ghodawat Beverage Industry, Chipri.</p></td>
                                    <td rowSpan={3}><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>16</p></td>
                                    <td><p>Mr. Vijayraj Dhisale</p></td>
                                </tr>

                                <tr>
                                    <td><p>17</p></td>
                                    <td><p>Mr. Pritesh Sonule</p></td>
                                </tr>

                                <tr>
                                    <td><p>18</p></td>
                                    <td><p>Mr. Parth Pawar</p></td>
                                    <td><p>Koyna Dairy, Karad.</p></td>
                                    <td><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>19</p></td>
                                    <td><p>Ms. Shruti Kumbhar</p></td>
                                    <td><p>Old Mumbai Ice-Cream Factory</p></td>
                                    <td><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>20</p></td>
                                    <td><p>Ms. Heetal Oswal</p></td>
                                    <td><p>Sphurti Dairy Industry, Gokul Shirgaon, Kolhapur</p></td>
                                    <td><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>21</p></td>
                                    <td><p>Ms. Rutuja Narawade</p></td>
                                    <td><p>Kedarling Bakery, Kolhapur. </p></td>
                                    <td><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>22</p></td>
                                    <td><p>Mr. Shivjeet Ghorpade</p></td>
                                    <td><p>Badhai Bakery, Herle</p></td>
                                    <td><p>30</p></td>
                                </tr>

                                <tr>
                                    <td><p>23</p></td>
                                    <td><p>Mr. Harshwardhan Patil</p></td>
                                    <td><p>Badhai Bakery, Herle</p></td>
                                    <td><p>30</p></td>
                                </tr>

                                
                            </tbody>
                        </Table>

                        </div>
                  </div>
                </div>
            </div>

            <div className="row tl-event-details-row g-0 mt-50">
            <div className="tl-11-section-heading">
                <h2 className="tl-11-section-title">Placement Absorption</h2>
            </div>
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <p className="dark-mode-white-color">Department is communicating with different food industries like Ghodawat Group, Chakote, Yalgud, Warana, Gokul, Sphurti, Mapro, Malas etc for the placement of students of final year and we are looking forward for their future endeaour.</p>
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

export default FSTDeptInternship
