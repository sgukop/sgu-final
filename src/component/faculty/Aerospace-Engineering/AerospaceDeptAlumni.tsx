"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function AerospaceDeptAlumni() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-100">Alumni</h2></div>
            </div>
            <div className="row">
                <MenuList dept="" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Alumni 2020_24</h2>
        </div>
        <div className="row gx-0 tl-blog-details-row mt-10">
          <div className="col-lg-12">
            

            <Table bordered responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                  <th><p className="text-[#4f70b6]">Company Name</p></th>
                  <th><p className="text-[#4f70b6]">Photo</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>MS. ANKITA PATIL</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/capgemini-logo.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2023-2024/alumni-1.png"/></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>MR.JARTARGHAR ANUPAM AMARNATH</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/safran.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2023-2024/alumni-2.png"/></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>MS. AISHWARYA JANVEKAR</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/capgemini-logo.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2023-2024/alumni-3.png"/></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>MS. PRADNYA SURVE</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/hitech.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2023-2024/alumni-4.png"/></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>MS. NAMRATA SHINDE</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/hitech.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2023-2024/alumni-5.png"/></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>MR. RISHAB JHA</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/hitech.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2023-2024/alumni-6.png"/></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>


        <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Alumni 2019_23</h2>
        </div>
        <div className="row gx-0 tl-blog-details-row mt-10">
          <div className="col-lg-12">
            

            <Table bordered responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                  <th><p className="text-[#4f70b6]">Company Name</p></th>
                  <th><p className="text-[#4f70b6]">Photo</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>MR. ARGAE VYANKTESH VIDYADHAR</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/boeing.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2019-2023/alumni-1.png"/></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>MR. AMOL CHAMKERI SHRIKANT </p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/indigo.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2019-2023/alumni-2.png"/></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>MR. GURUDAS PRADIP WALAVE</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/gridpro.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2019-2023/alumni-3.png"/></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>MR. YASH AMOL JADHAV</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/starair.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2019-2023/alumni-4.png"/></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>MR. UTKARSH NIVRUTTI MANGORE</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/starair.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2019-2023/alumni-5.png"/></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>


        <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Alumni 2018_22</h2>
        </div>
        <div className="row gx-0 tl-blog-details-row mt-10">
          <div className="col-lg-12">
            

            <Table bordered responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                  <th><p className="text-[#4f70b6]">Company Name</p></th>
                  <th><p className="text-[#4f70b6]">Photo</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>MR. SHLOK SURENDRA PATIL</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/indigo.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2018-2022/alumni-1.png"/></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>MR. TEJAS MANIK MASAL</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/hitech.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2018-2022/alumni-2.png"/></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>MS. ANUSHKA MADAN SHINDE</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/hitech.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2018-2022/alumni-3.png"/></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>MS. DEVIKA SHINDE</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/atlascopco.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2018-2022/alumni-4.png"/></td>
                </tr>

                <tr>
                  <td><p>5</p></td>
                  <td><p>MR. ARJUN RAJ</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/capgemini-logo.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2018-2022/alumni-5.png"/></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Alumni 2017_21</h2>
        </div>
        <div className="row gx-0 tl-blog-details-row mt-10">
          <div className="col-lg-12">
            

            <Table bordered responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Name</p></th>
                  <th><p className="text-[#4f70b6]">Company Name</p></th>
                  <th><p className="text-[#4f70b6]">Photo</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>MS. VAISHANVI HIREKODI</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/boeing.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2017-2021/alumni-1.png"/></td>
                </tr>

                <tr>
                  <td><p>2</p></td>
                  <td><p>MR. VINAYAK MENDULE</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/alten.png"/></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/2017-2021/alumni-2.png"/></td>
                </tr>

                <tr>
                  <td><p>3</p></td>
                  <td><p>MR. NIKHILRAJE BHARAT KURLE</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/accenture.png"/></td>
                  <td></td>
                </tr>

                <tr>
                  <td><p>4</p></td>
                  <td><p>MR. VINAYAK KALUNGADA</p></td>
                  <td><img src="assets/images/aerospace-engineering-dept/alumni/company-logo/safran.png"/></td>
                  <td></td>
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

export default AerospaceDeptAlumni;
