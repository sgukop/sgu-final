"use client";
import React from 'react';
import { useTalimContext } from "@/context/TalimContext";
import NavLink from '../navigation/NavLink';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const NewHeaderSection = () => {
   const { handleSidebarOpen } = useTalimContext();

  
    return (
        <>
        <div className="w-full">
            <img
                        src="assets/images/new-logo/sgu-main-logo.jpg"
                        alt="Logo"
                        className="h-full object-contain w-full"
            />
        </div>
        <div className='w-full relative z-50'>
            <div className='w-full py-2 bg-[#212f64] flex justify-center items-center sm:flex-wrap gap-2 lg:flex-nowrap md:flex-wrap top-navbar'> 
              <div className='items-center text-[#fff] font-semibold text-[12px] lg:text-[12px] lg:justify-start 2xl:text-lg pl-4 2xl:justify-start flex sm:justify-center pl-2 md:justify-center pl-2'>
                <ul className='gap-4 2xl:gap-4 items-center flex'>
                    <li className='hover:text-[#f26122]'><NavLink href="/internationalization-SGU">Internationalization @SGU</NavLink></li>
                    <span className='h-full w-[4px] bg-[#f26122] text-[#f26122]'>.</span>
                    <li className='hover:text-[#f26122]'><NavLink href="/antiragging">Anti-Ragging</NavLink></li>
                    <span className='h-full w-[4px] bg-[#f26122] text-[#f26122]'>.</span>
                    <li className='hover:text-[#f26122]'><NavLink href="/careers">Careers</NavLink></li>
                    <span className='h-full w-[4px] bg-[#f26122] text-[#f26122]'>.</span>
                </ul>
               
              </div>
            
    
              
              <div className='items-center text-[#fff] font-semibold text-[12px] lg:text-[12px] lg:justify-end 2xl:text-lg pr-4 flex sm:justify-center pl-2 md:justify-center pl-2'>
                <ul className='gap-4 2xl:gap-4 items-center flex'>
                    <li className='whitespace-nowrap hover:text-[#f26122]'><NavLink href="/public-disclosure">Public Disclosure</NavLink></li>
                    <span className='h-full w-[4px] bg-[#f26122] text-[#f26122]'>.</span>
                    <li className='whitespace-nowrap hover:text-[#f26122]'><a href="https://manage-api.sguk.ac.in/api/assets/675187f44b17e19d8f361f97" target="_blank">Mandatory Disclosure</a></li>
                    <span className='h-full w-[4px] bg-[#f26122] text-[#f26122]'>.</span>
                    <li className='whitespace-nowrap hover:text-[#f26122]'><NavLink href="/photo-gallery">Photo Gallery</NavLink></li>
                    <span className='h-full w-[4px] bg-[#f26122] text-[#f26122]'>.</span>
                    <li className='whitespace-nowrap hover:text-[#f26122]'><a href="https://sgu.edulip.in/UI/indexSGU.php" target="_blank">Staff Login</a></li>
                     <span className='h-full w-[4px] bg-[#f26122] text-[#f26122]'>.</span>
                    <li className='hover:text-[#f26122]'><NavLink href="/Media">Media</NavLink></li>
                    

                </ul>
              </div>
              
            </div>
            

             
            <div className='w-full bg-[#f26122] items-center justify-center text-white font-semibold 2xl:text-lg xl:px-8 hidden xl:flex px-2'>
                <ul className='gap-3 2xl:gap-4 items-center lg:grid-cols-5 flex'>
                    <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64]'><a href="/">Home</a></li>
                    <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] dropdown relative cursor-pointer py-4'>
                      About Us
                      <ul className="dropdown-menu absolute hidden mt-6 py-2 text-left rounded-none border-t-4 border-[#f4b826] 2xl:text-xl">
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/about-group">Sanjay Ghodawat Group</NavLink></li>
                                <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826]">Sanjay Ghodawat Trust (Sponsoring Body)  <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/about-trust">About Trust</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/board-of-directors">Trust Board of Directors</NavLink></li>
                                    </ul>
                                </li>

                                <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] justify-between flex">Sanjay Ghodawat University <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/about-university">Sanjay Ghodawat University</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/president">President</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/secretary">Secretary</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/trustee">Trustee</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/vice-chancellor">Vice Chancellor</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/officers-of-university">Officers of University</NavLink></li>
                                    </ul>
                                </li>

                                <li className="dropdown1 relative py-[3px] px-4"><a  className="font-normal text-[15px] hover:text-[#f4b826] justify-between flex">Statutory Authorities <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/governing-body">Governing Body</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/board-of-management">Board of Management</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/academic-council">Academic Council</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/board-of-university">Board of University Teaching and Research</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/board-of-examination">Board of Examination and Evaluation</NavLink></li>
                                    </ul>
                                </li>

                                <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] justify-between flex">Statutory Bodies <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/board-of-research">Board of Research</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/board-of-deans">Board of Deans</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/board-of-student">Board of Student Development</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/sports-physical-culture">Board of Sports & Physical Education</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/board-of-national">Board of National & International Linkages</NavLink></li>
                                    </ul>
                                </li>

                                <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] justify-between flex">Committee <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="/finance-committee">Finance Committee</NavLink></li>
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="/anti-ragging">Anti Ragging Committee</NavLink></li> 
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="/grievance-cell">Grievance Readressal Cell</NavLink></li> 
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="/IQAC-committee">Internal Quality Assurance Cell</NavLink></li> 
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="/equal-opportunity-cell">Equal Opportunity Cell</NavLink></li> 
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="/womens-committee">Womens Empowerment Centre Committee</NavLink></li>
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="/internal-complaint">Internal Complaint</NavLink></li>
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="/student-grievance-committee">Student Grievance Redressal Committee (SGRC)</NavLink></li>
                                        <li className="font-normal text-[15px] py-[3px] hover:text-[#f4b826] px-4"><NavLink href="#">Anti-Discrimination Cell</NavLink></li>
                                    </ul>
                                </li>

                              <li className="py-[3px] font-normal text-[15px] hover:text-[#f4b826] px-4"><NavLink href="/affiliations">Statutory Authority Recognition & Approvals</NavLink></li>
                              <li className="py-[3px] font-normal text-[15px] hover:text-[#f4b826] px-4"><NavLink href="/awards">Awards and Accolades</NavLink></li>
                            </ul>
                      </li>

                   
                    

                      <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] dropdown relative cursor-pointer py-4'>
                        Academics
                        <ul className="dropdown-menu absolute hidden mt-6 py-2 text-left rounded-none border-t-4 border-[#f4b826]">
                          <h6 className="subfaculty-menu" style={{marginLeft:"16px"}}>Faculty</h6>
                            <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">Faculty of Science & Technology <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">School of Engineering & Technology <i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/aerospace-engineering-about">Aerospace Engineering</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/mechanical-dept-about" >Mechanical Engineering</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/civil-dept-about">Civil Engineering</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/electrical-dept-about" >Electrical and Electronics <br/> Engineering</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/electronics-dept-about" >Electronics and Communication <br/>Engineering</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/computer-science-dept-about">Computer Science & Engineering</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/AI-ML-dept-about" >Artificial Intelligence and <br/> Machine Learning(AI&ML)</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/AI-DS-dept-about" >Artificial Intelligence and <br/> Data Science(AIDS)</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/NIAT-AIML-Data-Science-dept-about" >NIAT Corporate(AI/Ml, Data Science)</NavLink></li>
                                            </ul>
                                        </li>

                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">School of Computer Applications <i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                            {/*   <h6 className="subfaculty-menu">Department of Computer <br/> Applications</h6>  */}
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/BCA-dept-about">Department of Computer Applications</NavLink></li>
                                                 {/*  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/MCA-dept-about">Master of Computer Application <br/> (MCA)</NavLink></li>  */}
                                            </ul>
                                        </li>

                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">School of Physical & Chemical Sciences <i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/physical-dept-about" >Department of Physics</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/chemical-dept-about" >Department of Chemistry</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/mathematics-dept-about" >Department of Mathematics</NavLink></li>
                                            </ul>
                                        </li>

                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">School of Life Sciences <i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                                    <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/FST-dept-about">B.Sc.<br/> (Food Science & Technology)</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/MLT-dept-about">B.Sc.<br/> (Medical Laboratory Technology)</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/biotech-dept-about" >B.Sc.<br/> (Biotechnology)</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/biotech-dept-about" >B.Sc.<br/> (Biotechnology)</NavLink></li>
                                            </ul>
                                        </li>

                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">School of Pharmaceutical Sciences <i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/pharmacy-dept-about" >Department of Pharmacy</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                            </li>

                            <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">Faculty of Commerce & Management <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826] flex justify-between">
                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826]">School of Commerce & Management <i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/commerce-dept-about" >Department of Commerce</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/management-dept-about" >Department of Management</NavLink></li>
                                            </ul>
                                        </li>
                                  </ul>
                            </li>

                            <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">Faculty of Humanities and Social Sciences <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">School of Social Science <i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                            <h6 className="subfaculty-menu">Department of Social Sciences</h6>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/english-dept-about" >Department of English</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/geography-dept-about" >Department of Geography</NavLink></li>
                                            </ul>
                                        </li>

                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">School of Legal Studies(Law) <i className="fa-regular fa-angle-right mt-1"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                            <h6 className="subfaculty-menu">Department of Law (Legal Studies)</h6>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/law-dept-about">B.A.L.L.B.</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/law-dept-about">B.B.A.L.L.B</NavLink></li>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/law-dept-about">L.L.B</NavLink></li>
                                            </ul>
                                        </li>
                                  </ul>
                            </li>

                            <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">Faculty of Interdisciplinary Studies <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li  className="dropdown2 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] flex justify-between">School of Media <i className="fa-regular fa-angle-right"></i></a>
                                            <ul className="dropdown-menu2 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                            <h6 className="subfaculty-menu">Department of Media</h6>
                                                  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/masscommunication-dept-about">B.A-Journalism & Mass Communication</NavLink></li>
                                            </ul>
                                        </li>

                                        <li  className="relative py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/design-dept-about" >School of Design</NavLink></li>
                                  </ul>
                            </li>
                            <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/academic-calendar">Academic Calendar</NavLink></li>

                            <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] justify-between flex">Swayam/MOOCs <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="/swayam-advisory-committee">Swayam Advisory committee</NavLink></li>
                                        <li className="px-4 font-normal text-[15px] py-[3px] hover:text-[#f4b826]"><NavLink href="https://manage-api.sguk.ac.in/api/assets/6746d2a40566aa1186e16aa5">Credit Transfer Policy</NavLink></li>
                                    </ul>
                            </li>

                            <li className="py-[3px] px-4"><a href="https://manage-api.sguk.ac.in/api/assets/6746d3a30566aa1186e16ab2" className="font-normal text-[15px] hover:text-[#f4b826]" target="_blank">Open/ Generic Electives</a></li>

                            <li className="dropdown1 relative py-[3px] px-4"><a className="font-normal text-[15px] hover:text-[#f4b826] justify-between flex">SGU Finishing School <i className="fa-regular fa-angle-right"></i></a>
                                    <ul className="dropdown-menu1 hidden absolute left-[100%] bg-white top-[10px] py-2 border-t-4 border-[#f4b826]">
                                        <li className="px-4"><a href="https://manage-api.sguk.ac.in/api/assets/675181544b17e19d8f361f72" className="font-normal text-[15px] py-[3px] hover:text-[#f4b826]" target="_blank">SGU Finishing School</a></li>
                                        <li className="px-4"><a href="https://manage-api.sguk.ac.in/api/assets/675181674b17e19d8f361f77" className="font-normal text-[15px] py-[3px] hover:text-[#f4b826]" target="_blank">SGU Finishing School Enterprenuers and Higher studies</a></li>
                                    </ul>
                            </li>

                            <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/library-about">Knowledge Research Center</NavLink></li>
                            <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/phd-program">PG & Ph.D. Section</NavLink></li>
                        </ul>
                      </li>

                      <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] dropdown relative cursor-pointer py-4'>
                      Admissions
                        <ul className="dropdown-menu absolute hidden mt-6 py-2 text-left rounded-none border-t-4 border-[#f4b826]">
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/programs-university">Programs</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/admission-open">Admission Enquiry</NavLink></li>
                                
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/contact-admission">Contact For Admission</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/Fee-Structure">Fees Structure</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/eligibility-criteria">Eligibility-criteria</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/scholarships">Scholarships</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/document-required">Document Required</NavLink></li>
                                <li className="py-[3px] px-4"><a href="https://manage-api.sguk.ac.in/api/assets/693bbdbd475c25da4f1219ce" className="font-normal text-[15px] hover:text-[#f4b826]" target="_blank">SGU Brochure</a></li>
                                

                                </ul>
                      </li>
                   

                    <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] dropdown relative cursor-pointer py-4'>
                        Life &#64;SGU
                        <ul className="dropdown-menu absolute hidden mt-6 py-2 text-left rounded-none border-t-4 border-[#f4b826]">
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/about-campus">Campus Pulse @SGU</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/facilities">Academic Facilities</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/campus-images">Computational Facilities</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/SGU-sports">Sports @SGU</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/recreational-facilities">Recreational Facilities</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/residential-facilities">Residential Facilities</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/transport-facilities">Transport</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/medical-facilities">Medical Aid Facilities</NavLink></li>
                        </ul>
                      </li>
                </ul>
              {/*  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-40 flex items-center justify-center xl:w-[140px] 2xl:w-[160px]">
                    <a href="/"><img
                        src="assets/images/home/logo/SGU-original-logo.png"
                        alt="Logo"
                        className="h-full object-contain ml-2"
                    /></a>
                </div>   */}
                <ul className='gap-3 2xl:gap-6 items-center lg:grid-cols-5 flex'>
                   <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] dropdown relative cursor-pointer py-4'>
                      R&amp;D
                        <ul className="dropdown-menu absolute hidden mt-6 py-2 text-left rounded-none border-t-4 border-[#f4b826]">
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/research-structure">Research & Development Cell</NavLink></li>
                               {/*  <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="#">Research Promotion Policy</NavLink></li>  */}
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/research-patents">Patents & Innovations Cell</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/research-facilities">Centre of Excellence and Research Facilities</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/research-product-development">Product Development Center</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/research-booklet">Research Booklet,Policies & Templates</NavLink></li>
                        </ul>
                    </li>

                    <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] dropdown relative cursor-pointer py-4'>
                      Examination
                        <ul className="dropdown-menu absolute hidden mt-6 py-2 text-left rounded-none border-t-4 border-[#f4b826]">
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/examination-timetable">Time Table</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/examination-result">Results</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/examination-notice">Notice</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/examination-revaluation">Revaluation/Re Verification/Photocopy</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/examination-convocation">Convocation</NavLink></li>
                        </ul>
                      </li>

                      <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] dropdown relative cursor-pointer py-4'>
                        Training &amp; Placement
                        <ul className="dropdown-menu absolute hidden mt-6 py-2 text-left rounded-none border-t-4 border-[#f4b826]">
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/training-placement-about">About Training & Placement</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/training-and-placement-team">Our Team</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/our-recruiters">Our Recruiters</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/training-placement-statistical-analysis" >Statistics</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/sgu-photo-gallery">Photo Gallery</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/Media">Media Coverage</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/training-placement-softskills-syllabus" >Aptitude & Soft Skill Syllabus</NavLink></li>
                        </ul>
                      </li>

                       <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] dropdown relative cursor-pointer py-4'>
                        Events
                        <ul className="dropdown-menu absolute hidden mt-6 py-2 text-left rounded-none border-t-4 border-[#f4b826]">
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/icctvb2025">International Conference ICCTVB 2025</NavLink></li>
                                <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/icsshfe2026">International Conference ICSHFSE 2026</NavLink></li>
                               <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/icsbp2026">International Conference ICSBP 2026</NavLink></li>
                               <li className="py-[3px] px-4 font-normal text-[15px] hover:text-[#f4b826]"><NavLink href="/scistar2026">Sci-STAR 2026</NavLink></li>
                                                                                               
                        </ul>
                      </li>

                    <li className='whitespace-nowrap 2xl:text-xl hover:text-[#212f64] py-4'><NavLink href="/contact-us">Contact Us</NavLink></li>
                </ul>
            </div>

               {/* <div className="marquee-wrapper">
      <div className="marquee-track">
       <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/new.gif" alt="Logo 1" />Achievements of SWAYAM - NPTEL SGU Local Chapter Jan-May 2025
        </a>
       <a href="https://example2.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/new.gif" alt="Logo 2" />
        </a>
        <a href="https://example3.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/new.gif" alt="Logo 3" />
        </a>
        {/* Duplicate for seamless loop */}
        {/*<a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/new.gif" alt="Logo 1" />
        </a>
        <a href="https://example2.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/new.gif" alt="Logo 2" />
        </a>
        <a href="https://example3.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/new.gif" alt="Logo 3" />
        </a>  
      </div>
</div>*/}

    <Marquee speed={100} gradient={false} pauseOnHover className="flex m-2">

      <sup><img src="assets/images/new-icon-image.gif"/></sup>
      <a href="https://www.sguk.ac.in/careers" target="_blank" className="text-[#800000] text-bold hover:text-[#212f64] mr-6"> Current Openings 2026</a>
      
      <sup><img src="assets/images/new-icon-image.gif"/></sup>
      <a href="https://manage-api.sguk.ac.in/api/assets/69578ac6c03a7929c6c93c73" target="_blank" className="text-[#800000] text-bold hover:text-[#212f64] mr-6"> SGU Student Selected as Top 10 Finalist in National Innovation Challenge Powered by Google Gemini</a>
      
      {/*<sup><img src="assets/images/new-icon-image.gif"/></sup>
      <a href="https://manage-api.sguk.ac.in/api/assets/693a85c55fea6e5500e4d8cb" target="_blank" className="text-[#800000] text-bold hover:text-[#212f64] mr-6"> West-Zone Tennis Championship 2026 • Sanjay Ghodawat University • Men's & Women's Tennis Tournament • 7th- 11th January 2026</a>
      <sup><img src="assets/images/new-icon-image.gif"/></sup>
        <a href="https://www.sguk.ac.in/phd-program" target="_blank" className="text-[#800000] text-bold hover:text-[#212f64] mr-6">PhD Admissions Advertisement Academic Year 2025-2026</a>*/}
        
        <sup><img src="assets/images/new-icon-image.gif"/></sup>
        <a href="https://manage-api.sguk.ac.in/api/assets/6867a31fb513ac737c09b117" target="_blank" className="text-[#800000] text-bold hover:text-[#212f64] mr-6">Achievements of SWAYAM - NPTEL SGU Local Chapter Jan-May 2025 </a>

        <sup><img src="assets/images/new-icon-image.gif" /></sup>
        <a href="https://www.sguk.ac.in/our-recruiters" target="_blank" className="text-[#800000] text-bold hover:text-[#212f64]">Training and Placement Details in Academics Year  2025-26 </a>

        <sup><img src="assets/images/new-icon-image.gif"/></sup>
        <a href="https://manage-api.sguk.ac.in/api/assets/68e617dfa28d22ca95ef782c" target="_blank" className="text-[#800000] text-bold hover:text-[#212f64] mr-6">Admission Cut off date for the academic year 2025-26. </a>
        
        
        <sup><img src="assets/images/new-icon-image.gif"/></sup>
        <a href="https://www.sguk.ac.in/scistar2026" target="_blank" className="text-[#800000] text-bold hover:text-[#212f64] mr-6">Sanjay Ghodawat University is pleased to announce Sci-STAR 2026 (Inspiring Innovations), a multidisciplinary science event scheduled on 18th Feb 2026.</a>
        
        

    </Marquee>
           
            <div className="w-full bg-[#f26122]">
              <div className="hamburgerrrrr">
                <button
                  className="tl-hamburger navbar-toggler"
                  onClick={handleSidebarOpen}
                >
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
          </div>
         </div>
         </>
    )
}

export default NewHeaderSection
