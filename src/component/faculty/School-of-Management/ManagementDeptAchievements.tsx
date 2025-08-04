import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const ManagementDeptAchievements = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">Achievements & Recognitions</h2></div>
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
          <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Faculty Achievements</h2></div>
              <div className="col-lg-12">
                <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                            <h3 className="tl-event-details-area-title">2021-22</h3>
                                <p className="dark-mode-white-color"><strong>Dr. Giri Yogeshwari L.</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Awarded Nari Shakti Puraskar 2021 (National Level).</li>
                                    <li>Awarded Global Women Inspiration Award 2022 (National Level).</li>
                                </ul>
                            <h3 className="tl-event-details-area-title mt-8">2022-23</h3>
                              <p className="dark-mode-white-color"><strong>Dr. Petare Purushottam Arvind</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Achieved A+ grade in the UGC-approved Short-Term Professional Development Programme (National Level).</li>
                                  </ul>
                            <h3 className="tl-event-details-area-title mt-8">2023-24</h3>
                              <p className="dark-mode-white-color"><strong>Mrs. Anjali N. Malu</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Awarded Rotary Nari Shakti Puraskar 2024 (District Level).</li>
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
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ManagementDeptAchievements