'use client';

import React, { useState, useEffect } from 'react';

interface IconProps {
  className?: string;
}
// Types
interface NavItem {
  id: string;
  label: string;
  icon: React.FC<IconProps>;
}

interface Track {
  title: string;
  topics: string[];
}

interface DateInfo {
  event: string;
  date: string;
  icon: React.FC<IconProps>;
}

interface FeeInfo {
  category: string;
  fee: string;
  icon: React.FC<IconProps>;
}


// Custom icon components to replace lucide-react
const Calendar : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const MapPin : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Users : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const Award : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
  </svg>
);

const FileText : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);

const Mail : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Phone : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Clock : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const BookOpen : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const Lightbulb : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 21h6"/>
    <path d="M12 17c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1z"/>
    <path d="M12 11.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

const Globe : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const Target : React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const ICSBP = () => {
  
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems :  NavItem[] = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'tracks', label: 'Tracks', icon: Target },
    { id: 'dates', label: 'Important Dates', icon: Calendar },
    { id: 'registration', label: 'Registration', icon: Users },
    { id: 'keynote speaker', label: 'Keynote Speaker', icon: Users },
    { id: 'committee', label: 'Committee', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const tracks : Track[] = [
    {
    title: "Track 1: Marketing",
    topics: [
      "Sustainability and Marketing",
      "Customer Experience, Engagement and Relationship Management",
      "Social and Public Service Marketing",
      "Marketing Analytics, Business Intelligence and Automation",
      "Social and Digital Media Marketing",
      "Green Marketing and Consumerism",
      "Disruptive Marketing and Sustainability",
      "E-Commerce and Marketing Management",
      "Consumer Behaviour and Marketing Innovations",
      "Role of Mascots in Marketing Communication",
      "Rural Consumers and Digital Marketing Strategies",
      "Retail and Distribution Management for Shoppers’ Experience",
    ],
  },
  {
    title: "Track 2: Human Resource and Organizational Behaviour (HR and OB)",
    topics: [
      "Employee Engagement and Retention in Digital Age",
      "Recruitment Trends and Talent Management",
      "Leadership and Change Management",
      "Sustainable Green HRM Practices and Work Resilience",
      "Diversity and Inclusion at Workplace",
      "Organizational Learning for Managing Disruption",
      "Agile, Adaptive and Alert Organizations",
      "Employee Well-being and Work-life Balance",
      "HR-Analytics for Sustainable Business",
      "Spirituality and Religious Practices in Sustainable Work Culture",
      "Artificial Intelligence and HR",
      "Sustainable Talent Management and Acquisition",
    ],
  },
  {
    title: "Track 3: Sustainable IT, Operations and Supply Chain Management",
    topics: [
      "Technology for Sustainability",
      "Sustainability Metrics and Dash boarding",
      "Energy-efficient Software Development",
      "Data Science and Machine Learning",
      "Robotics and Artificial Intelligence",
      "Sustainable Product Design and Green Manufacturing",
      "Smart Cities and Sustainable Infrastructure",
      "Sustainable Operation and Supply Chain Management",
      "Circular Economy and Operations",
      "Reverse Logistics and Network Optimization",
      "Behavioural Operation Management",
      "New Product and Service Management",
    ],
  },
  {
    title: "Track 4: Fintech - Sustainable Finance and Accounting",
    topics: [
      "Sustainable Micro –Finance and Rural Development",
      "Social and human rights dimensions of sustainable finance",
      "Sustainable / Green Finance and Investment",
      "Risk Management in a Changing Climate",
      "Innovative Economic Strategies for Financial Inclusion",
      "Sustainability Budgeting and Forecasting",
      "Sustainable Financial Performance and Accounting Practices",
      "Fintech Innovation, Engineering and Analytics",
      "Crypto Currency",
      "Digital Banking Practices and E-wallet",
      "Value Chain Financing for Sustainability",
    ],
  },
  {
    title: "Track 5: Other Interdisciplinary Areas",
    topics: [
      "Sustainable Development Goals and Role of Technology",
      "Climate Change and Environmental Sustainability",
      "Entrepreneurship and Innovation for Sustainable Rural and Urban Development",
      "Sustainability through Education and Capacity Building",
      "Science and Pharmaceutical Science for Sustainable Development",
      "Behavioral Economics and Sustainability",
      "Digital Transformation and New Social Perspectives",
      "Ethical Business Practices and Corporate Social Responsibility",
      "Clean Technologies and Renewable Energy",
      "Waste Management and Resource Recovery",
    ],
  },
];

  const importantDates : DateInfo[] = [
  { event: "Abstract Submission Deadline", date: "20th November 2025", icon: FileText },
  { event: "Abstract Acceptance", date: "5th November 2025", icon: Mail },
  { event: "Early Bird Registration", date: "20th November 2025", icon: Users },
  { event: "Submission of full length Paper", date: "10th December 2025", icon: FileText },
   { event: "Last Date of Registration", date: "15th December 2025", icon: Users },
  { event: "Conference Dates", date: "8th & 9th January 2026", icon: Calendar },
  ];

  const registrationFees : FeeInfo[] = [
    {
    category: "UG / PG Student*",
    fee: "Early Bird (Before 20th Nov): INR 1000 / USD 30 | Late (After 20th Nov): INR 1500 / USD 35",
    icon: BookOpen,
  },
  {
    category: "Research Scholar*",
    fee: "Early Bird (Before 20th Nov): INR 1500 / USD 40 | Late (After 20thNov): INR 2000 / USD 45",
    icon: FileText,
  },
  {
    category: "Faculty*",
    fee: "Early Bird (Before 20th Nov): INR 3000 / USD 50 | Late (After 20thNov): INR 3500 / USD 55",
    icon: Users,
  },
  {
    category: "Corporate / Industry",
    fee: "Early Bird (Before 20th Nov): INR 5000 / USD 60 | Late (After 20thNov): INR 5500 / USD 65",
    icon: Award,
  },
  ];

  const objectives : string[] = [
    "Pharmacy, Health and allied sciences",
    "Applied Nanomaterials:Molecular design to Functional Systems",
    "Life sciences an Interdisciplinary Pathway",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId : string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
  <div className="min-h-screen bg-gray-50">
  {/* Tabbed Navigation with Orange Background */}
  <section className="w-full bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex overflow-x-auto md:justify-center space-x-2 md:space-x-6 py-2 scrollbar-hide">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-white text-gray-900 shadow-md'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  </section>




            {/* Hero Section */}
            <section id="home" className="pt-16 bg-[#212529] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                    International Conference on<br />
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      SUSTAINABLE BUSINESS PRACTICES IN THE AGE OF DIGITAL TRANSFORMATION: A STEP TOWARDS VIKSIT BHARAT@2047
                    </span><br />
                    (ICSBP-2026)
                  </h1>
                  
                                      
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-6 h-6 text-orange-300" />
                      <span className="text-lg">8th & 9th,Jan 2026 (Thursday & friday)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-6 h-6 text-orange-300" />
                      <span className="text-lg">Sanjay Ghodawat University Kolhapur</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* Register Button - opens Google Form */}
                  <a
                    href="https://forms.gle/7s4jE6igj3Pxm2JH9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
                  >
                    Register Now
                  </a>

                  {/* Learn More Button - scrolls to 'about' section */}
                  <button
                    onClick={() => scrollToSection('about')}
                    className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 text-white"
                  >
                    Learn More
                  </button>
                </div>
                </div>
              </div>
            </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Conference</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  International Conference focused on the theme “Sustainable Business Practices in the Age of Digital
                  Transformation: A Step towards Viksit Bharat@2047” organized by Faculty of Commerce and
                  Management, Sanjay Ghodawat University, Kolhapur. This two days International Conference is a forum
                  where the top industry experts and educationists from across the country & overseas will assemble to discuss
                  and deliberate how to make higher education system compatible with sustainable business practices and also
                  to share their experiences, knowledge and research contribution on how institutes/universities strategize for
                  structural changes in terms of curricula, research, industry interface, leadership, faculty quality, etc. in higher
                  education to align with requirements of digital transformation for sustainable economic and social
                  development of India align with the vision of Vikasit Bharat 2047. India has various well-known universities
                  and institutions brimming with the large, potential pool of talent, which can be leveraged to deal with
                  challenges posed by theme of Vikasit Bharat - 2047. In this conference, we are expecting participation of
                  Directors, Principals, Deans, Associate Deans, Heads of Departments, and Professors, Faculty members,
                  research scholars from various institutes, universities and industry leaders along with 100+ papers in presence
                  of International & National delegates as session chairs, speakers and participant. This conference will provide
                  an opportunity to academicians, doctoral students, and practitioners to share and exchange ideas in the area
                  of sustainable business practices with integration of digital technology and how emerging technologies
                  contribute to sustainable development in various industries. Given the new normal, the participants will have
                  the opportunity to present their research / paper virtually & physically
              </p>
     
              
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About Sanjay Ghodawat University</h3>
              <div className="space-y-4 text-gray-600">
                    <p>Sanjay Ghodawat University was established as a State Private University in the year 2017. Previously it was
                    Sanjay Ghodawat Insitutes formed in the year 2009 by the Chairman of SG Group, Sanjay Ghodawat. The
                    Institute had received NAAC A grade and also its programs were accredited by NBA and after this the natural
                    progression was the evolvement of Sanjay Ghodawat University.The University was formed to accomodate
                    more students and give them a variety of choices for their career path. The University offers UG, PG and
                    PhD programs in Technology, Management, Commerce, Science, Liberal Arts, Architecture, Pharmacy and
                    Computer Applications. The USP of the University is its curriculum in tandem with the requirements of the
                    Industry plus choice based credit system that allows students to choose major as well minor in the subjects
                    of their choice. It encourages multi - disciplinary approach that helps students’ creativity and productivity.
                    The University also offers hand on experience with establishment of Tata Technology Centre, Mechatronics
                    Lab Car, BOSCH Collaboration Centre, Centre of Space and Atmospheric Science etc. The University
                    campus is a state of art facility provided to students to help them study in a pristine environment. The 165
                    acres campus is replete with facilities like spacious classrooms, smart classrooms, well equipped labs, food
                    court, amphitheatre, stadium with flood lights, swimming pool, horse riding, tennis court etc. The School
                    of Commerce and Management, SGU was recognized as Top Emerging B School by Times B School
                    Survey 2020. School of Technology, SGU Ranked 4th in Top Emerging Engineering Institutes of the Nation,
                    9th in Placement Category and 2nd in Research Capabilities by Times Ranking 2020.</p>
                
              </div>
            </div>
          </div>
        </div>
                        
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Tracks</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{track.title}</h3>
                <div className="space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          </div>
      </section>

      {/* Important Dates */}
      <section id="dates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.event}</h3>
                </div>
                <p className="text-lg font-bold text-blue-700">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
{/* Registration */}
<section id="registration" className="py-20 bg-white text-black">
  <div className="bg-white rounded-xl p-8">
    <div className="text-center mb-16">
          
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration Details</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {registrationFees.map((item, index) => (
        <div 
          key={index} 
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <item.icon className="w-5 h-5 text-gray-800" />
            </div>
            <h3 className="font-semibold text-gray-800">{item.category}</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{item.fee}</p>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Paper Submission Guidelines</h3>
      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        {/* Left column */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
            <p>All papers must be written in English.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
            <p>All papers must be original unpublished work.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
            <p>Each author listed on the paper must be listed in the paper management system.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
            <p>We highly recommend the usage of the provided templates to generate your paper.</p>
          </div>
        </div>
        
        {/* Right column */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
            <p>
              Each submission will be reviewed for compliance of margins, headers,
              footers, page numbers, and size specifications. Papers which are
              non-compliant may not be included in the proceeding.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
            <p>Paper must follow a 5-page limit as per the official template.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
            <p>Papers which are non-compliant may not be included in the proceeding.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  
                  <div className="flex justify-center gap-6 mt-6">
  <a
    href="https://forms.gle/7s4jE6igj3Pxm2JH9"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
  >
    Register Now
  </a>
  <a
  href="https://edu.easebuzz.in/sign-up/SanjayGhodawatUniversity_Fees/Age_Digital_Transformation/?inst_name=SanjayGhodawatUniversity_Fees&form_name=Age_Digital_Transformation&jsonData=1"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
>
  Payment Link
</a>

</div>

</section>


      {/* Committee */}
      <section id="committee" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Organizing Committee</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Chief Patron */}
      <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-1">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Chief Patron</h3>
        <div className="space-y-2">
          <p className="font-semibold text-blue-700">Mr. Sanjay D. Ghodawat</p>
          <p className="text-gray-600">Honorable President, SGU</p>
        </div>
      </div>
    </div>

    {/* Patrons */}
    <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-2 mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Patrons</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { name: "Mr. Shrenik Ghodawat", title: "Secretary, SGU" },
          { name: "Mr. Vinayak V. Bhosale", title: "Trustee, SGU" },
          { name: "Dr. Udhav Bhosale", title: "Vice Chancellor, SGU" },
        ].map((patron, index) => (
          <div key={index} className="space-y-1">
            <p className="font-semibold text-blue-700">{patron.name}</p>
            <p className="text-sm text-gray-600">{patron.title}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Convener */}
    <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-2 mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Convener</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { name: "Dr. Vilas Balgaonkar", title: "Head, Department of Management" },
        ].map((convener, index) => (
          <div key={index} className="space-y-1">
            <p className="font-semibold text-blue-700">{convener.name}</p>
            <p className="text-sm text-gray-600">{convener.title}</p>
          </div>
        ))}
      </div>
    </div>

    {/* National Advisory Committee */}
    <div className="bg-white rounded-xl shadow-lg p-6 col-span-full mt-10">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        National Advisory Committee
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: "Dr. Joe Thomas", title: "Director – Learning, AICHM, Melbourne" },
          { name: "Mr. Murlidharan Subramanian", title: "Head Global Sales & Director – Smart City Parking, UK" },
          { name: "Dr. Bhanu Chowdhary", title: "Professor, Emeritus Texas, A&M University Texas, US" },
          { name: "Dr. Ramesh Jare", title: "Director – TISS" },
          { name: "Mr. Yogesh Kore", title: "Managing Director – Home Revise" },
          { name: "Dr. Kranti Raymane", title: "Director, Community, Health & Research Aga Khan Health Services, India & UNICEF" },
          { name: "Dr. Ranit Kishore", title: "Director – MGM University" },
          { name: "Prof. Pratapsingh Chauhan", title: "Vice Chancellor – Shri Govind Guru University, Godhara" },
          { name: "Dr. Sagar Jambholkar", title: "NDA – Civilian Gazetted Officer, Ministry of Defense" },
        ].map((member, index) => (
          <div key={index} className="space-y-2">
            <p className="font-semibold text-blue-700">{member.name}</p>
            {member.title && (
              <p className="text-sm text-gray-600">{member.title}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


  
  
  {/* keynote speaker */}
      

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Website</p>
                      <a href="https://www.sguk.ac.in/icsbp2026" className="text-blue-600 hover:text-blue-800">
                       www.sguk.ac.in/icsbp2026
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:icsbp2026@sguk.ac.in" className="text-blue-600 hover:text-blue-800">
                        icsbp2026@sguk.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Contact Person</p>
                      
                      
                      <p className="text-gray-600"> Dr. Ganesh Jagtap</p>
                      <p className="text-blue-600">9822837699</p>

                      
                     
                  </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Venue</p>
                      <p className="text-gray-600">Sanjay Ghodawat University</p>
                      <p className="text-gray-600">Atigre, Kolhapur, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Paper Submission</h4>
                  <p className="text-blue-600 hover:text-blue-800">Opens July 2025</p>
                </div>

                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Registration</h4>
                  <p className="text-blue-200"><a href="https://forms.gle/7s4jE6igj3Pxm2JH9" rel="noopener noreferrer" target="_blank" className="table-link">Click here to register</a> </p>
                </div>
                
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Payment Link</h4>
                  <p className="text-blue-200"><a href="https://edu.easebuzz.in/sign-up/SanjayGhodawatUniversity_Fees/Age_Digital_Transformation/?inst_name=SanjayGhodawatUniversity_Fees&form_name=Age_Digital_Transformation&jsonData=1" rel="noopener noreferrer" target="_blank" className="table-link">Pay Here</a> </p>
                </div>

                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Publication</h4>
                  <p className="text-blue-600 hover:text-blue-800">Scopus-indexed Taylor & Francis journals</p>
                </div>

                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Submission Deadline</h4>
                  <p className="text-blue-600 hover:text-blue-800">15th December 2025</p>
                </div>
                
              </div>
            </div>
            </div>
            <div className=" from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Media Partner</h3>
              
              <div className="space-y-4">
                <div className="tl-1-course-img-new">
                  <img src="/assets/images/ICSBP-2026.jpg" alt="Conference Logo"/>
                  
                  </div>
                             
              </div>
            </div>
          </div>
        
        
      </section>

      </div>
  );
};

export default ICSBP;