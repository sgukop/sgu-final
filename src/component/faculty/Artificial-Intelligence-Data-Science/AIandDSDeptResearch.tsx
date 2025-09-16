"use client";
import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";


const AIandDSDeptResearch = () => {
  return (
    <section className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Research & Publications</h2>
            <div className="row">
                <MenuList dept="Artificial Intelligence and Machine Learning" subMenu={NavLinks} />
                    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
                        <div className="row gx-0 tl-blog-details-row">
                            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Research papers published in the Journals By AIDS Department</h2></div>
                                <div className="col-lg-12">
                                  {/*  <Table bordered responsive className="governing-table">
                                        <thead>
                                            <tr>
                                                <th><p className="text-[#4f70b6]">Sr.No.</p></th>
                                                <th><p className="text-[#4f70b6]">Year</p></th>
                                                <th><p className="text-[#4f70b6]">Title of paper</p></th>
                                                <th><p className="text-[#4f70b6]">Author/s</p></th>
                                                <th><p className="text-[#4f70b6]">Journal</p></th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><p>1</p></td>
                                                <td><p>2019</p></td>
                                                <td><p>Survey on Different Data Mining Techniques for Prediction</p></td>
                                                <td><p>Pooja Akulwar, Sujata Pardeshi, Arvind Kamble</p></td>
                                                <td><p>2nd Intl. Conf. on I-SMAC, 2018. <br/> Paper Added to IEEE XPORE, 2019</p></td>
                                               
                                            </tr>

                                            <tr>
                                                <td><p>2</p></td>
                                                <td><p>2020</p></td>
                                                <td><p>An Empirical Research on the Use of Machine Learning Algorithm for Medical Image Classification
                                                </p></td>
                                                <td><p>Gaikwad Mahesh Parasharam <br/> Dr. Harsh Lohiya</p></td>
                                                <td><p>JOURNAL OF CRITICAL REVIEWS</p></td>
                                               
                                            </tr>

                                            <tr>
                                                <td><p>3</p></td>
                                                <td><p>2020</p></td>
                                                <td><p>A Survey Paper on Smart Vehicles, Journal of Internet of Things and Information Technology</p></td>
                                                <td><p>Sahil Inamdar, Ajit Shete, Akshay Ghatage, <br/> Jaydeep Gholap, Ashitosh Atnurkar, Sujata Pardeshi</p></td>
                                                <td><p>Journal of Internet of Things and Information Technology</p></td>
                                               
                                            </tr>

                                            <tr>
                                                <td><p>4</p></td>
                                                <td><p>2020</p></td>
                                                <td><p>Smart Vehicles, International Journal of Research in Engineering</p></td>
                                                <td><p>Ajit Shete, Akshay Ghatage, Sahil Inamdar, <br/> Ashitosh Atnurkar, Jaydeep Gholap, Sujata Pardeshi</p></td>
                                                <td><p>Journal of Research in Engineering, Science and Management</p></td>
                                                
                                            </tr>

                                            <tr>
                                                <td><p>5</p></td>
                                                <td><p>2020</p></td>
                                                <td><p>Digital Bus Pass Generation System Using Android Application</p></td>
                                                <td><p>Ms. S. A. Pardeshi, Suraj Dinde, Akash Gaikwad, <br/> Aditi Kole, Supriya Patil, Sadaf Mujawar</p></td>
                                                <td><p>JASC: Journal of Applied Science and Computations</p></td>
                                               
                                            </tr>

                                            <tr>
                                                <td><p>6</p></td>
                                                <td><p>2021</p></td>
                                                <td><p>An Evaluation of Outlier Detection Using Machine Learning in Medicine”</p></td>
                                                <td><p>Dr. Harsh Lohiya  <br/> Gaikwad Mahesh Parasharam </p></td>
                                                <td><p>Journal Mathematical Statistician and Engineering Applications</p></td>
                                               
                                            </tr>

                                            <tr>
                                                <td><p>7</p></td>
                                                <td><p>2021</p></td>
                                                <td><p>Tumor Diagnosis using Gray Level Co occurrence Matrix and Artificial Neural Network 
                                                </p></td>
                                                <td><p>M. P. Gaikwad <br/>R. B. Dhumale</p></td>
                                                <td><p>International Journal of Advanced Science and Technology</p></td>
                                               
                                            </tr>

                                            <tr>
                                                <td><p>8</p></td>
                                                <td><p>2021</p></td>
                                                <td><p>The Digital Eye Android Application For Assisting Visually Impaired</p></td>
                                                <td><p>Manasi Powar, Shivani Patil, Shwetali Nikam, <br/> Komal Kurundwade, Sujata.A.Pardeshi</p></td>
                                                <td><p>International Research Journal of Engineering and Technology (IRJET)</p></td>
                                               
                                            </tr>

                                            <tr>
                                                <td><p>9</p></td>
                                                <td><p>2021</p></td>
                                                <td><p>Use Of Artificial Intelligence in Education</p></td>
                                                <td><p>Shweta G. Shete1, Asavari A. Patil2, Varsha K. Kasote3, <br/> Vinayak I. Pujari4</p></td>
                                                <td><p>SEYBOLD</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>10</p></td>
                                                <td><p>2021</p></td>
                                                <td><p>Artificial Intelligence : Development, Issues and Applications</p></td>
                                                <td><p>Shweta Girish Shete1 ,Rupali Babaso Dhansare2 ,Priyanka Vijay Patil3</p></td>
                                                <td><p>JOURNAL OF NORTHEASTERN UNIVERSITY</p></td>
                                               
                                            </tr>

                                            <tr>
                                                <td><p>11</p></td>
                                                <td><p>2022</p></td>
                                                <td><p>Student learning time analysis during COVID-19 using linear programming - Simplex method</p></td>
                                                <td><p>Sujata Pardeshi, Sushopti Gawade, Palivela Hemant</p></td>
                                                <td><p>Social Sciences & Humanities Open, Elsevier</p></td>
                                                
                                            </tr>

                                            <tr>
                                                <td><p>12</p></td>
                                                <td><p>2022</p></td>
                                                <td><p>Feed Forward Neural Network based Brain Tumor Diagnosis in Magnetic Resonance Images 
                                                </p></td>
                                                <td><p>M. P. Gaikwad, <br/> R. B. Dhumale, N. R. Dhumale , <br/> P. B. Mane , A. M. Umbrajkaar and A. N. Sarwade
                                                </p></td>
                                                <td><p>International Journal of Electrical and Electronics Research (IJEER)
                                                </p></td>
                                            </tr>

                                            <tr>
                                                <td><p>13</p></td>
                                                <td><p>2022</p></td>
                                                <td><p>Outlier Identification Based on Machine Learning for Medical Equipment</p></td>
                                                <td><p>Dr. Harsh Lohiya ,Gaikwad Mahesh Parasharam</p></td>
                                                <td><p> journal Mathematical Statistician and Engineering Applications</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>14</p></td>
                                                <td><p>2022</p></td>
                                                <td><p>Student Learning Time Analysis during COVID'19 Using Linear Programming</p></td>
                                                <td><p>Sujata Pardeshi, Sushopti Gawade, Palivela Hemant</p></td>
                                                <td><p>Journal of Scientific Research of The Banaras Hindu University</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>15</p></td>
                                                <td><p>2023</p></td>
                                                <td><p>A Review Paper on Machine Education Methods and Its Applications</p></td>
                                                <td><p>Mrs. Shweta G. Shete1, Mrs.Radhika M. Mane2</p></td>
                                                <td><p>National Conference on Emerging trends in Engineering & Technology</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>16</p></td>
                                                <td><p>2023</p></td>
                                                <td><p>Feed Forward Neural Network based Brain Tumor Diagnosis in Magnetic Resonance Images 
                                                </p></td>
                                                <td><p>M. P. Gaikwad, R. B. Dhumale, N. R. Dhumale , P. B. Mane , A. M. Umbrajkaar and A. N. Sarwade
                                                </p></td>
                                                <td><p>International Journal of Electrical and Electronics Research (IJEER)
                                                </p></td>
                                            </tr>

                                            <tr>
                                                <td><p>17</p></td>
                                                <td><p>2023</p></td>
                                                <td><p>Outlier Identification Based on Machine Learning for Medical Equipment</p></td>
                                                <td><p>Dr. Harsh Lohiya ,Gaikwad Mahesh Parasharam </p></td>
                                                <td><p> journal Mathematical Statistician and Engineering Applications</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>18</p></td>
                                                <td><p>2023</p></td>
                                                <td><p>A Review Paper on the Use of AI in the Recruitment Process</p></td>
                                                <td><p>Mrs. Shweta Shete1, Mrs. Priyanka Koshti2</p></td>
                                                <td><p>IJARCCE</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>19</p></td>
                                                <td><p>2023</p></td>
                                                <td><p>Ontology as an Open World Assumptions and Its Futuristic</p></td>
                                                <td><p>Sujata Pardeshi, Suresh Kumar Billakurthi, Sushopti Gawade</p></td>
                                                <td><p>12th International Conference on Advanced Computing (ICoAC), IEEE Xplore</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>20</p></td>
                                                <td><p>2024</p></td>
                                                <td><p>The Impact of AI-Powered Personalization on Academic Performance in</p></td>
                                                <td><p>Mrs. Shweta Shete1, Mrs. Priyanka Koshti2</p></td>
                                                <td><p>IEEE Conference</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>21</p></td>
                                                <td><p>2024</p></td>
                                                <td><p>Increase the Productivity of Internet Marketing by Using Unsupervised Machine Learning</p></td>
                                                <td><p>"Kousar Ghalwade, Dr. Mahesh Gaikwad"</p></td>
                                                <td><p>International Journal of Innovative  Research in Sci.,Engg and Technology </p></td>
                                            </tr>

                                            <tr>
                                                <td><p>22</p></td>
                                                <td><p>2024</p></td>
                                                <td><p>Extraction of Popular Product Attributes by Using Unsupervised Machine Learning”.</p></td>
                                                <td><p>Kousar Ghalwade, Dr. Mahesh Gaikwad</p></td>
                                                <td><p>International Journal of Innovative Research in computer and communication engineering</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>23</p></td>
                                                <td><p>2024</p></td>
                                                <td><p>“Vision Model Application Using Gemini Pro” in  with ISSN</p></td>
                                                <td><p>Mahesh P. Gaikwad,  Mr. Amrish A. Patil, Ruturaj D. Patil</p></td>
                                                <td><p>International Journal of Engineering Research and Technology</p></td>
                                            </tr>

                                            <tr>
                                                <td><p>24</p></td>
                                                <td><p>2024</p></td>
                                                <td><p>Strategic Insights and Innovations in Prefabricated Component Obsolescence Mitigation: A Focus on SVM-Based Models”</p></td>
                                                <td><p>"R. B. Dhumale, M. P. Gaikwad, S. S. Nikam, Sandipann P Narote, Mahendra H. Sonawane, P. B. Mane"</p></td>
                                                <td><p>International Journal of INTELLIGENT SYSTEMS AND APPLICATIONS IN ENGINEERING </p></td>
                                            </tr>

                                            <tr>
                                                <td><p>25</p></td>
                                                <td><p>2024</p></td>
                                                <td><p>Comprehensive Review of Population Based Metaheuristic Algorithms & Ontology Integration</p></td>
                                                <td><p>Sujata Pardeshi, Suresh Kumar Billakurthi, Sushopti Gawade</p></td>
                                                <td><p>IEEE Conference at Vellore. 22-23 February 2024, India. IEEE Xplore.</p></td>
                                            </tr>
                                        </tbody>
                                    </Table>*/}
                                </div>
                            </div>
                        </div>
                </div>
         </div>
    </section>
  );
};

export default AIandDSDeptResearch;
