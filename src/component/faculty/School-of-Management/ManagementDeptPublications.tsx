"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

function ManagementDeptPublications() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Research & Publications</h2></div>
            </div>
            <div className="row">
                <MenuList dept="School of Management" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row gx-0 tl-blog-details-row">
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Patent Awarded/Publications</h2></div>
          <div className="col-lg-12">
            

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p className="text-[#4f70b6]">Sr.No</p></th>
                  <th><p className="text-[#4f70b6]">Year</p></th>
                  <th><p className="text-[#4f70b6]">Name of the Patent published/awarded</p></th>
                  <th><p className="text-[#4f70b6]">Name of Inventor</p></th>
                  <th><p className="text-[#4f70b6]">Patent Number</p></th>
                  <th><p className="text-[#4f70b6]">Domestic/ International</p></th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                        <td><p>1</p></td>
                        <td><p>2025-2026</p></td>
                        <td><p>GRAPHENE OXIDE NANO-SYNTHESIS MACHINE Patent No. 441959-001</p></td>
                        <td><p>Dr. Vilas Balgaonkar</p></td>
                        <td><p>441959-001</p></td>
                        <td><p>Individual</p></td>
                    </tr>

                      <tr>
                        <td><p>2</p></td>
                        <td><p>2025-2026</p></td>
                        <td><p>IOT-DRIVEN WORKFORCE MANAGEMENT SYSTEM FOR REMOTE MONITORING Copyright No. L -161835/2025</p></td>
                        <td><p>Dr. Vilas Balgaonkar</p></td>
                        <td><p>161835/2025</p></td>
                        <td><p>Individual</p></td>
                    </tr>

                    <tr>
                        <td><p>3</p></td>
                        <td><p>2025-2026</p></td>
                        <td><p>IOT-DRIVEN SMART AGRICULTURE SYSTEM FOR RURAL FARMERS Copyright No. L -161833/2025</p></td>
                        <td><p>Dr. Vilas Balgaonkar</p></td>
                        <td><p>161833/2025</p></td>
                        <td><p>Individual</p></td>
                    </tr>
                    <tr>
                        <td><p>4</p></td>
                        <td><p>2019-2020</p></td>
                        <td><p>A Novel System for Digital Marketing using Artifical Intelligence and blockchain <br/> Patent No 2021103495 (Australian Government)</p></td>
                        <td><p>Rohit Landage </p></td>
                        <td><p>2021103495</p></td>
                        <td><p>International </p></td>
                    </tr>

                    <tr>
                        <td><p>5</p></td>
                        <td><p>2019-2020</p></td>
                        <td><p>Impact of the goods and services Tax (GST) on <br/> india's Fast Moving consumer Goods sector Patet Number- 202221026570</p></td>
                        <td><p>Rohit Landage </p></td> 
                        <td><p>202221000000</p></td>
                        <td><p>International</p></td>
                    </tr>
                </tbody>
            </Table>
          </div>
        </div>

        <div className="row tl-event-details-row g-0 mt-50">
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Publications</h2></div>

        <div className="col-lg-12">
                  <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">2025-26</h3>
                            <ul className="tl-event-details-key-content-list phd-container">
                                  <li>Shinde M. (2024). The impact of social media on the mental health and skill development of postgraduate management students. Sansodhak, 10, [ISSN 2394-5990]. UGC CARE Listed.</li>
                                  <li>Shinde M. (2024). Impact of lifestyle changes on the mental health of women working as CHB faculties at senior colleges in Kolhapur District. Sansodhak, 10, [ISSN 2394-5990]. UGC CARE Listed.</li>
                                  <li>Balgaonkar V., Jagtap G., Pendse V., Jadhav D., & Shinde M. (2024). Sustainable marketing strategies in biomedical packaging - A comprehensive study. African Journal of Biomedical Research, 27(4s), 3168-3173. Scopus. Retrieved from &nbsp; 
                                  <a href="https://africanjournalofbiomedicalresearch.com/index.php/AJBR" target="_blank" className="table-link">https://africanjournalofbiomedicalresearch.com/index.php/AJBR <i className="fa-regular fa-arrow-right"></i></a></li>
                                  <li>Khopkar P. (2024). The impact of social media on the mental health and skill development of postgraduate management students. Sansodhak, 10, [ISSN 2394-5990]. UGC CARE Listed.</li>
                            </ul>
                        </div>
                    </div>
        </div>

        <div className="col-lg-12">
                  <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">2021-22</h3>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Janrao S. C. (2021). Opportunities and challenges for the agricultural market in India: An overview.</li>
                                <li>Chopade M. (2021). Cephalopods: The power of medical use. Unpublished.</li>
                                <li>Landge R. (2021). Post-COVID challenges in education, industry, and digital economy.</li>
                                <li>Landge R. (2021). A study on purchase behavior towards health insurance during the COVID-19 pandemic with reference to Kolhapur city.</li>
                                <li>Joshi M. & Nille. N. (2021). Trends in organizational behavior. Archers & Elevators Publications House, (Pages unknown). ISBN 978-93-90996-59-9.</li>
                                <li>Joshi M. & Nille. N. (2021). A study of customer satisfaction towards internet banking with special reference to Jaisinghpur City, Kolhapur. Unpublished.</li>
                                <li>Khan G. & Dikit S. S. (2021). Impact of microfinance on the empowerment of women with reference to social and economic development in India. International Journal of Multidisciplinary Educational Research, 11(16). ISSN 2277-7881.</li>
                                <li>Deshpande R. & Kayande V. (2021). The challenges and opportunities for online education in India. UGC CARE Group 1 Journal, (Pages unknown). ISSN 0378-4568.</li>
                                <li>Dikit S. S. (2021). Artificial intelligence: A competitive advantage for the manufacturing process. International Journal of Multidisciplinary Educational Research, 12(14). ISSN 2277-7881.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                  <div className="tl-event-details-left">
                      <div className="tl-event-details-key-content">
                        <h3 className="tl-event-details-area-title">2020-21</h3>
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Giri Y. L. (2020). Employee outlook on effectiveness of performance appraisal systems.</li>
                                <li>Aljapukar A., & Ingawale S. (2020). Soft skills acquisition awareness and its perceived importance among graduate students in selected professional courses: An analytical study.</li>
                                <li>Salati A. & Shinde S. (2020). Impetus for skill development: Key to human resource development.</li>
                                <li>Joshi M. M. & Nille N. (2020). Internet of Things (IoT): Can it change the business?</li>
                                <li>Janrao S. C. & Kamble A. (2020). Market potential analysis: A case study of Mapro Foods Pvt. Ltd. in Pune City.</li>
                                <li>Petare P. & Pratapsing M. (2020). A review on a study of internet utilization and its impact on academic activities of faculty members.</li>
                                <li>Patil A. & Gramopadhye V. (2020). A study of women SHGs and their socio-economic impact in and around Kolhapur city.</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-lg-12">
                    <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title">2019-2020</h3>
                                <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Hedda P., Bhutra E., Janwar A. & Ladha A. (2019). A study of impact analysis of social media on business practices. International Journal for Research in Engineering Application and Management (IJREAM), (Issue unknown), 255.</li>
                                    <li>Kotech S. (2019). Bahubali: A milestone of Indian cinemas - Digital marketing case study.</li>
                                    <li>Shinde S. (2019). Bollywood's global strides: An overview.</li>
                                    <li>Deshpande S. (2019). Green marketing in the Indian context: The present & the future.</li>
                                    <li>Patil A. & Shinde S. (2019). Potential growth of agro-tourism using online traveling platforms.</li>
                                    <li>Deshpande S. (2019). Application of Gann cycles: A test on the Indian stock market. International Journal for Research in Engineering Application and Management (IJREAM).</li>
                                    <li>Aljapukar A. & Ingawale S. (2019). A study of consumer perception over sustainable business development.</li>
                                    <li>Giri Y. L. & Aljapukar A. (2019). A study of organizational citizenship behaviour and impact on job satisfaction in selected manufacturing firms in Kolhapur.</li>
                                    <li>Giri Y. L., Shinde S. S., & Giri V. V. (2019). Cultural differences and the role of international human resource management for sustainable growth of multinational companies: A critical review.</li>
                                    <li>Kamble A. (2019). A study of employee satisfaction on labor welfare facilities: A case of Yashwant Processor Cooperative Ltd., Ichalkaranji. International Journal for Research in Engineering Application and Management (IJREAM), 6, ISSN 2322-0899.</li>
                                    <li>Salati A., Nille N. & Joshi M. (2019). Neuromarketing: Luring rural customers.</li>
                                    <li>Petare P. & Tamhane K. N. (2019). A study on online shopping behavior through mobile applications in Kolhapur city. International Journal for Research in Engineering Application and Management (IJREAM), 69.
                                    </li>
                                    <li>Petare. P. (2019). Reinforcement of small-scale industries in Western Maharashtra: A step towards sustainable development.</li>
                                    <li>Giri Y. L. & Petare. P. (2019). An analytical and comparative study on valuation of shares of selected banks from the banking industry.</li>
                                    <li>Pendnekar G. (2019). Skill qualification: Change or illusion?</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ManagementDeptPublications;
