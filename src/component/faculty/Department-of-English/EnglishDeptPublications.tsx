import Link from "next/link";
import React from "react";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const EnglishDeptPublications = () => {
   return(
    <div className="tl-event-details-container pt-100 pb-100" >
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Publications</h2>
        <div className="row">
          <MenuList dept="English" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
               
                    <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">Research Publications - International Journals</h3>
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <ul className="tl-event-details-key-content-list phd-container">
                                   <li>Dr. Sunanda Mahesh Shinde (September 2018) Analysis of Language Learning Strategies Used by English for Specific Purposes Students. Language in India. UGC approved Journal.</li>
                                   <li>Patil Sunanda and Tripti Karekatti. (2012). Correlation between level of communication apprehension and development of communication skills in engineering students. English for Specific Purposes World, ISSN 1682-3257, Issue 36, vol. 12</li>
                                   <li>Patil Sunanda and Tripti Karekatti. (2012). A study of language learning strategies used by engineering students. English for Specific Purposes World, ISSN 1682-3257, Issue 35, vol. 12</li>
                                   <li>Patil Sunanda and Tripti Karekatti. (2014). English language needs of engineering students and their syllabus: a comparative study of two universities in Maharashtra. English for Specific Purposes World, ISSN 1682-3257, Issue 44, vol. 15.</li>
                                   <li>Patil Sunanda and Tripti Karekatti. (March, 2015). The Use of communication strategies in oral communicative situations by engineering students Language in India www.languageinindia.com ISSN 1930-2940 Vol. 15:3.</li>
                                   <li>Patil Sunanda and Tripti Karekatti (July, 2015). The effect of anxiety on the use of oral communication strategies by engineering students in the Indian context. Journal of English Language Teaching. Golden Jubilee Issue, LVII/3</li>
                                   <li>Patil Sunanda and Tripti Karekatti. (July, 2015). The Use of communication strategies in written communicative situations by engineering students. Asian Journal of English Studies, Vol. 4, Issue 3</li>
                                   <li>Shinde Mahesh & Patil Sunanda. (2015). Teachers' Dilemma on Using 'Chalk and Board' or 'Projector and Screen': Which is Effective? Language in India. Vol, 15 (10).</li>
                                   <li>Patil- Shinde Sunanda and Shinde, Mahesh (2016). Training in Essential Communicative situations to Engineering Students. English for Specific Purposes World, ISSN 1682-3257, Issue 49, vol. 17</li>
                                   <li>Shinde Sunanda (2017). Does Anxiety Affect Written Communication? A study of Engineering Students in Indian Context. ELT@I (English Language Teachers' Association of India) Journal of English Language Teaching. Volume LIX number 6</li>
                                </ul>
                        </div>
                    </div>

                    <div className="tl-event-details-left mt-50">    
                        <h3 className="tl-event-details-area-title">Research Publications - National Journals</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Patil Sunanda. (2008). Experimentation with techniques in Manjula Padmanabhan's Harvest. Journal of Humanities, Shivaji University, Kolhapur</li>
                            </ul>
                        </div>
                    </div>

                    <div className="tl-event-details-left mt-50">    
                        <h3 className="tl-event-details-area-title">Papers Presentation - International Seminars / Conferences</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Dr.Surekha Gurupad Mandi Agonies of Farmers in Neelima Kota's Widows of Vidarbha International conference on Plight of Indian Farmers: Issues and Challenges organized by Kamala College, Kolhapur on 16th Feb.2019</li>
                                <li>Mrs.Kavita U.Khade Religion - Education Relationship as projected in LiteratureInternational conference on Reflection of Education in Literature Rajashri Shahu Arts and Commerce College , Rukadi on 28th Feb.2019.</li>
                                <li>Mrs.Shubhada Sachin Yadav The Role of Education and Literature in imparting Ethics in Society. International conference on Reflection of Education in Literature organized by Rajashri Shahu Arts and Commerce College , Rukadi on 28th Feb.2019.</li>
                                <li>Mrs.Shubhada Sachin Yadav Agonies of Farmers in Neelima Kota's Widows of Vidarbha International conference on Plight of Indian Farmers: Issues and Challenges organized by Kamala College, Kolhapur on 16th Feb.2019</li>
                                <li>Dr. Mrs. Sunanda M. Shinde presented a paper entitled "Comparing Engineering Students' English Needs and Syllabus of Two Universities in Maharashtra", at International Seminar on Applied Linguistics, held at Acharya Nagarjuna University Guntur,(A.P.) 2010</li>
                            </ul>
                        </div>
                    </div>

                    <div className="tl-event-details-left mt-50">    
                        <h3 className="tl-event-details-area-title">Papers Presentation - National Seminars / Conferences</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <ul className="tl-event-details-key-content-list phd-container">
                                <li>Mrs.Kavita U.Khade Women Power Redefined National conference on Women Empowerment and Sustainable Development organized by Shikshanmaharshi Dr.Bapuji Salunkhe College, Miraj on 18th Feb.2019.</li>
                                <li>Mrs.Shubhada Sachin Yadav Women Power Redefined. National conference on Women Empowerment and Sustainable Development organized by Shikshanmaharshi Dr.Bapuji Salunkhe College,Miraj on 18th Feb.2019.</li>
                                <li>Dr. Mrs. Sunanda M. Shinde presented a paper entitled "Exploring a Flipped Learning Approach in Teaching English Grammar to Engineering Students" at One Day Multidisciplinary National Conference On Research Methodology, Use of ICT in Teaching Learning and Research, and Environmental Consciousness, held at K. N. Bhise Arts and Commerce College Kurduwadi, 2018</li>
                                <li>Dr. Mrs. Sunanda M. Shinde presented a paper entitled "ESP: A prominent paradigm of shift in the pendulum of ELT/ELL" at UGC sponsored national conference on Changing Paradigms of English Language Teaching and Learning in the 21st Century, held at Acharya Jawdekar College of Education Mouni Vidyapeeth Gargoti, 2016</li>
                                <li>Dr. Mrs. Sunanda M. Shinde presented a paper entitled "Manjula Padmanabhan's Harvest: A Colonial Play", at a Two Day National Level Seminar on Post Independence Indian English Literature, held at Arts, Science& Commerce college Ramanandnagar, Sangli, 2009</li>
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

export default EnglishDeptPublications