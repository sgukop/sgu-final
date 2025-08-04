import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const ManagementDeptStudentActivities = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
       
        <div className="container-fluid">
            <div className="tl-14-section-heading">
                <h2 className="tl-9-section-title mb-50">Events, Activities & Achievements</h2>
            </div>
            <div className="row">
                <MenuList dept="School of Management" subMenu={NavLinks} />
            <div
                data-spy="scroll"
                className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
                data-target="#menu-navbar"
                data-offset="0"
            >

        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Upcoming Events</h2></div>

            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                           <ul className="tl-event-details-key-content-list phd-container">
                                   <li>International Conference <p className="text-[#4f70b6]"><strong>Topic - Sustainable business practices in the age of digital transformation: A step towards Vikasit Bharat @ 2047</strong></p></li>
                                   <li>Visit of FoCM Students to NSE, Mumbai.</li>
                                   <li>Visit to JNPT Mumbai.</li>
                                   <li>Shark Hunt - 2.0</li>
                                   <li>Inspired (15 April 2025)</li>
                                   <li>Alumni Meet - 12 April 2025</li>
                                  
                            </ul>
                        </div>
                  </div>
            </div>

            <div className="tl-14-section-heading">
                <h2 className="tl-9-section-title mb-50 mt-50">Activities</h2>
            </div>

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Malaysia immersion program 2024</h2></div>
               <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/immersion-program-png.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                      <p className="text-justify">A group of 26 students from Sanjay Gowdawat University recently completed a successful study tour to Singapore and Malaysia focusing on business research. During the tour, students visited UCSI University in Malaysia, Where they received up-to-date, technical information on business research and a certificate course on data analytics. Additionally, they visited Bursa Malaysia, the Malaysia Stock exchange, where an educational session covered Stock exchange operations, financial products and securities. In Singapore, the group explored Marina South Pier where they gained in-depth knowledge about international Maritime import and export processes. The tour also includes visits to several notable locations, allowing students to experience the culture and lifestyle of the region. This global immersion program was coordinated by Professor Pooja Khopkar from the Management department. </p>
                    </div>
                </div>

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">UdhyogExpo 2025—Kolhapur's</h2></div>
               <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/UdyogExpo 2025.jpg" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                       <a href="https://manage-api.sguk.ac.in/api/assets/67dbb7154f56d3a0bcfba1cc" target="_blank" rel="noopener noreferrer" className="tl-7-def-btn mt-4">View Report</a>
                    </div>
                </div>

            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">ADWITIYA 2024</h2></div>
               <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/adwitiya-2024.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color"><strong>ADWITYA 2024</strong> was an all-encompassing, multidisciplinary student competition aimed at fostering excellence in intellect, creativity, and physical endurance. It served as a platform where participants could challenge themselves across a range of activities designed to test their cognitive abilities, teamwork, artistic expression, and physical stamina.</p>
                        <a href="https://manage-api.sguk.ac.in/api/assets/6773b8964f56d3a0bcfb3f41" target="_blank" rel="noopener noreferrer" className="tl-7-def-btn mt-4">View Report</a>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Biz Bazaar</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/biz-bazaar.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">The Star BizBazaar event was held on October 17th and 18th, 2024 at the food court on the campus of Sanjay Ghodawat University (SGU). This innovative initiative was organized by the Faculty of Commerce and Management and mainly sponsored by GS Tea, Chakote Bakers, Nandani and Girish Sales, Kolhapur at SGU to provide students with a platform to explore entrepreneurial opportunities and gain practical experience in diverse business activities. The total sponsorship for the event was approx 1,50,000/-. By combining business activities with cultural performances, the event created an engaging and well rounded experience for all participants.</p>
                        <a href="https://manage-api.sguk.ac.in/api/assets/67d3ec654f56d3a0bcfb9c23" target="_blank" rel="noopener noreferrer" className="tl-7-def-btn mt-4">View Report</a>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Global Immersion Program: Dubai Visit Report</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/dubai-visit.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">As part of Sanjay Ghodawat University's Global Immersion Program, 18 students travelled to Dubai from October 29 to November 4, 2023. This program aimed to provide students with international exposure, enhance their understanding of global business practices, and offer hands-on learning experiences. The program included a certification course on "Data Analytics" and visits to various significant places in Dubai. The global immersion program was coordinated by Professor Sagar Kurane from the MBA Department.</p>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">ANANTKALA 2024</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/anantkala- 2024.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color"><strong>Anant Kala 2024,</strong> a grand celebration of the Ganpati festival, was successfully conducted on 5th September 2024. The event brought together people from different walks of life to celebrate the spirit of unity, devotion, and creativity through various cultural and religious activities centered around Lord Ganesha.</p>
                        <a href="https://manage-api.sguk.ac.in/api/assets/6773b90c4f56d3a0bcfb3f46" target="_blank" rel="noopener noreferrer" className="tl-7-def-btn mt-4">View Report</a>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Shark Hunt - Business Plan Competition</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/shark-hunt.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">On 19th March 2024, Sanjay Ghodawat University organized an exciting event titled "Shark Hunt - Business Plan Competition" in the MBA Auditorium. This competition provided a platform for undergraduate and postgraduate students to showcase their entrepreneurial skills and innovative business ideas. The event was a resounding success, with 21 teams from various colleges participating and competing for the top prizes.The competition attracted 21 teams from different colleges, all eager to present their unique business plans to a panel of esteemed judges. Each team had the opportunity to pitch their ideas, which were evaluated based on innovation, feasibility, market potential, and overall presentation.</p>
                        <a href="https://manage-api.sguk.ac.in/api/assets/6773b9364f56d3a0bcfb3f50" target="_blank" rel="noopener noreferrer" className="tl-7-def-btn mt-4">View Report</a>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">CPBFI Course Conducted by Bajaj Finserv</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/bajaj-finserv.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">The Certificate Programme in Banking, Finance, and Insurance (CPBFI) was organized by Bajaj Finserv for second-year MBA students from July 8th to July 24th , 2024. The Certificate Programme in Banking, Finance & Insurance (CPBFI) commenced with a well-structured curriculum aimed at providing in-depth knowledge and practical skills in the fields of banking, finance, and insurance. The programme was divided into distinct modules, each focusing on a specific area and conducted by expert instructor.</p>
                        <a href="https://manage-api.sguk.ac.in/api/assets/6773b9244f56d3a0bcfb3f4b" target="_blank" rel="noopener noreferrer" className="tl-7-def-btn mt-4">View Report</a>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">BRAND BASKET -2024</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">Brand Basket is a one-stop solution for all your branding needs, offering a curated selection of services to help businesses grow, engage, and succeed. From brand strategy and creative design to digital marketing and beyond, Brand Basket is dedicated to building strong, impactful brands that stand out in today's competitive market.
                        </p>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Discovering Business Mastery at Warana Dairy (Industrial Visit)</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/warana-dairy.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">On September 20 th , 2024, the management students of Sanjay Ghodawat University (SGU) embarked on an industrial visit to Warana Dairy a cooperative society Manufacturer of milk products in Kolhapur, Maharashtra. Shree Warana Sahakary Dudh Utpadack Prakriva Sangh Ltd. Kolhapur, this visit offered students a chance to witness real-world business operations firsthand. Warana dairy was established in the year 1968, by Late Shri. Tatyasaheb Kore with the financial assistance provided by shareholders and State Government. The objective of establishing this dairy was to improve the milk producer's economical, social and educational leave and to provide the employment.</p>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Guest Lecture on "Awareness on Financial Literacy and Career Opportunities in the Financial Industry"</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/awarness.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">On 30th April 2024, Sanjay Ghodawat University had the privilege of hosting a guest lecture by Mr. Suhas Rajput, a distinguished financial expert, on the topic "Awareness on Financial Literacy and Career Opportunities in the Financial Industry." The event saw enthusiastic participation from both undergraduate and postgraduate students, eager to gain insights into the financial sector.</p>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Personal Selling Activity Conducted by MBA Students at SGU's School of Management</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/personal-selling-activity.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">This report provides an overview of a personal selling activity conducted by MBA students at the School of Management, SGU. The exercise was designed to give students hands-on experience in personal selling, enhance their understanding of sales techniques, and develop their interpersonal and negotiation skills.</p>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">"Bharat Ki Jhalak" Organized by BBA Students at SGU's School of Management</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/bharat-ki-jalak.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">On March 14, 2024, the BBA students of SGU's School of Management organized an event titled "Bharat Ki Jhalak" to celebrate and showcase the rich cultural heritage of India. The event aimed to provide students and faculty with an immersive experience of India's diverse traditions, cuisines, and artistic expressions.</p>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Discovering Business Mastery at Salgar Amrutatulya- (Industrial visit)</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/amrutatulya.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">On August 2, 2024, the management students of Sanjay Ghodawat University (SGU) embarked on an industrial visit to Salgar Amrutatulya, a medium-scale manufacturer of tea, coffee, and masala packets in Kolhapur, Maharashtra. Located in the Gur market on Chandran Menon Road, Shahu Market yard, this visit offered students a chance to witness real-world business operations firsthand. Salgar Amrutatulya, founded by Dadu Salgar, has grown from humble beginnings to become a respected name in the local beverage and spice market. The company is known for its quality products that cater to regional tastes, offering a range of tea blends, coffee mixes, and spice packets. What distinguishes Salgar Amrutatulya is its successful balance of traditional flavors with modern manufacturing techniques.</p>
                    </div>
                </div>

                <div className="tl-11-section-heading"><h2 className="tl-11-section-title">“Hingmire Group (Trust, Quality, Group)” (Industrial Visit)</h2></div>
                <div className="tl-8-course mb-30">
                    <div className="tl-8-course-img">
                        <img src="assets/images/management-dept/new-activity/hingmire.png" alt="Student Activity Image"/>
                    </div>
                    <div className="tl-8-course-txt">
                        <p className="dark-mode-white-color">On 4th October, 2024, the management students of Sanjay Ghodawat University (SGU) embarked on an industrial visit to M/s. Hingmire Trading Company , traders of raisins in Tasgaon, Maharashtra, this visit offered students a chance to witness real-world business operations firsthand. M/s. Hingmire Trading Company was the firm founded by Revan Kaka & Maharudra Nana Hingmire in 1987 . Now it's running successfully in hands of their third generation. We source these Raisins from the renowned vendors of industry, who process these at par with the hygiene standards followed in food industry, maintaining their nutritive value.The visit was designed to give students insight into various aspects of business operations, from production and quality control to marketing and distribution, aligning theoretical knowledge with practical applications.</p>
                    </div>
                </div>

                <div className="tl-11-section-heading mt-50"><h2 className="tl-11-section-title">Sports</h2></div>
                <div className="row g-3 g-lg-4 justify-content-center">
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport1.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                      
                    </div>
                  </div>
               
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport2.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                      
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport7.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                </div>

                  <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport8.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                  </div> 

                   <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport9.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                  </div>  

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport11.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                </div>   

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport12.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport13.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-10 col-xxs-12">
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <figure><img src="assets/images/commerce-dept/activities/sports/sport14.jpeg" alt="Academic Infrastructure Image" /></figure>
                        </div>
                </div>
                </div>
               </div>  

                <div className="tl-14-section-heading">
                    <h2 className="tl-9-section-title mb-50 mt-50">Achievements</h2>
                </div>


                <div className="row gx-0 tl-blog-details-row">
          <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Faculty Achievements</h2></div>
              <div className="col-lg-12">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                       <h3 className="tl-event-details-area-title">2023-24</h3>
                              <p className="dark-mode-white-color"><strong>Mrs. Anjali N. Malu</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Awarded Rotary Nari Shakti Puraskar 2024 (District Level).</li>
                                  </ul>

                            <h3 className="tl-event-details-area-title mt-8">2022-23</h3>
                              <p className="dark-mode-white-color"><strong>Dr. Petare Purushottam Arvind</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Achieved A+ grade in the UGC-approved Short-Term Professional Development Programme (National Level).</li>
                                  </ul>
                            
                            <h3 className="tl-event-details-area-title mt-8">2021-22</h3>
                                <p className="dark-mode-white-color"><strong>Dr. Giri Yogeshwari L.</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Awarded Nari Shakti Puraskar 2021 (National Level).</li>
                                    <li>Awarded Global Women Inspiration Award 2022 (National Level).</li>
                                </ul>
                           
                        </div>
                    </div>
              </div>
          </div>

          <div className="row gx-0 tl-blog-details-row mt-50">
          <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Student Achievements</h2></div>

              <div className="col-lg-12">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title">2024-25</h3>
                                <p className="dark-mode-white-color"><strong>Chintamani Telang</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Power Lifting</li>
                                    <li>Secured 3rd Rank in Asia RAW Power lifting championship (Jr.) </li>
                                  </ul>
                           
                               
                          </div>
                    </div>
              </div>

          <div className="col-lg-12 mt-50">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title">2023-24</h3>
                                <p className="dark-mode-white-color"><strong>Ms. Smriti Mandhana</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Vice Captain of the Indian Women's Cricket Team.</li>
                                    <li>Won Gold Medal at the Asian Games (International Level).</li>
                                  </ul>
                           
                                <p className="dark-mode-white-color mt-4"><strong>Mr. Rifaat Magdum and Mr. Sidhhant Yadrave</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Winners in the Admanic Event (National Level).</li>
                                  </ul>
                          </div>
                    </div>
              </div>

              <div className="col-lg-12 mt-50">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title">2022-23</h3>
                                <p className="dark-mode-white-color"><strong>Mr. Kanhaiya Phalle</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Certified in Fundamentals of Digital Marketing through Google Digital Unlock (Certificate Achievement).</li>
                                  </ul>
                           
                                <p className="dark-mode-white-color mt-4"><strong>Mr. Shubham Sharma</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Awarded Mr. YIN at the YIN Kala Mahotsav (District Level).</li>
                                  </ul>
                           
                                <p className="dark-mode-white-color mt-4"><strong>Mr. Suchit S. Patil</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Won Bronze in Aquatics at an Inter-University Competition (University Level).</li>
                                  </ul>

                                <p className="dark-mode-white-color mt-4"><strong>Suraj S. Dundle, Tushar B. Bhoir, and Santosh Thakur</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Winners in Kabaddi at an Inter-University Competition (University Level).</li>
                                  </ul>

                                <p className="dark-mode-white-color mt-4"><strong>Ms. Akshata Nair</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Winner of a Poster Competition at an Inter-University Competition (University Level).</li>
                                  </ul>

                                <p className="dark-mode-white-color mt-4"><strong>Mr. Mustafa Mansuri</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                      <li>Winner in Football at KJ Somaiya Matches and Panhala Tournaments (University Level).</li>
                                  </ul>

                                  <p className="dark-mode-white-color mt-4"><strong>Ms. Vedika Narote</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                      <li>Winner of the Inspiring Quotes Competition at an Inter-University Competition (University Level).</li>
                                  </ul>

                                  <p className="dark-mode-white-color mt-4"><strong>Ms. Rajkuwar Ingale</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                      <li>Winner at Maharashtra Rifle Matches (State Level).</li>
                                  </ul>

                                  <p className="dark-mode-white-color mt-4"><strong>Mr. Amartya Yevluje</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                      <li>Winner in Video Making at an Inter-University Competition (University Level).</li>
                                  </ul>

                                  <p className="dark-mode-white-color mt-4"><strong>BBA Team</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                      <li>Winners in Cricket at an Inter-University Competition (University Level).</li>
                                  </ul>
                        </div>
                    </div>
              </div> 

              <div className="col-lg-12 mt-50">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title">2021-22</h3>
                                <p className="dark-mode-white-color"><strong>Mr. Mustafa Mansuri</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Secured 3rd rank in Football at Panhala Tournaments (District Level).</li>
                                    <li>Secured 3rd rank in Football at KJ Somaiya Tournaments (State Level).</li>
                                </ul>
                           
                                <p className="dark-mode-white-color mt-4"><strong>Mr. Kedar Parve</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Secured 3rd rank in Football at Annual Sports organized by SGU (University Level).</li>
                                  </ul>
                           
                                <p className="dark-mode-white-color mt-4"><strong>Ms. Rajkuwar Ingale</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Won Bronze in Shooting at National Shooting Tournaments (National Level).</li>
                                  </ul>

                                <p className="dark-mode-white-color mt-4"><strong>Ms. Harshada Mohite</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Secured 1st rank in Archery at National Archery Tournaments (National Level).</li>
                                  </ul>

                                <p className="dark-mode-white-color mt-4"><strong>Mr. Abdul Mukit Tebhala</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Certified in Fundamentals of Digital Marketing through Google Digital Unlock (Certificate Achievement).</li>
                                  </ul>

                                <p className="dark-mode-white-color mt-4"><strong>Mr. Amartya Yevluje</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Secured 1st rank in Video Making at an Intercollegiate Competition (District Level).</li>
                                  </ul>
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

export default ManagementDeptStudentActivities