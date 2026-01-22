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

const ICSSHFE = () => {
  
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
    title: "Track 1: Pharmacy, Health and allied sciences",
    topics: [
      "Novel Drug Delivery Systems",
      "Synthesis of Drugs",
      "AI in Drug discovery",
      "Ionic liquids and DES in Pharma",
      "Pharmacovigilance",
      "Clinical Research",
      "AI for Sustainable Healthcare",
    ],
  },
  {
    title: "Track 2: Applied Nanomaterials: Molecular design to Functional Systems",
    topics: [
      "Nanomaterials for Green Energy",
      "Carbon Capture, Utilization and Storage (CCUS)",
      "Catalysis",
      "Functional coating",
    ],
  },
  {
    title: "Track 3: Life sciences an Interdisciplinary Pathway",
    topics: [
      "Genomics and Proteomics",
      "Biologics",
      "Synthetic biology",
      "Towards Greener plates: Sustainable Food Technologies",
      "Disease Diagnosis",
    ],
  },
];

  const importantDates : DateInfo[] = [
  { event: "Abstract Submission Deadline", date: "30th December 2025", icon: FileText },
  { event: "Abstract Acceptance", date: "5th Jan 2026", icon: Mail },
  { event: "Submission of Manuscript", date: "23rd Jan 2026", icon: FileText },
  { event: "Acceptance of Manuscript *", date: "15th Feb 2026", icon: Mail },
  { event: "Payment of Registration Fees", date: "30th December 2025", icon: Users },
  { event: "Conference Dates", date: "23rd & 24th January 2026", icon: Calendar },
  ];

  const registrationFees : FeeInfo[] = [
    { category: "Student UG/PG", fee: "INR 1200/-", icon: BookOpen },
  { category: "Research Scholar", fee: "INR 2000/-", icon: FileText },
  { category: "Academician", fee: "INR 2500/-", icon: Users },
  { category: "Industry", fee: "INR 4000/-", icon: Award },
  { category: "Foreign Delegates", fee: "55 USD", icon: Globe },
   { category: "18% GST ", fee: "18% GST will be applicable on registration amount", icon: Globe },
   { category: "first come first serve ", fee: "Limited accommodation is available on campus. It will be given on ‘first come first serve’ basis", icon: Globe },
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
<section className="w-full bg-[#F26122] shadow-md border-b border-orange-300 sticky top-0 z-50">
  <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex overflow-x-auto md:justify-center space-x-2 md:space-x-6 py-2 scrollbar-hide">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
            activeSection === item.id
              ? 'bg-white text-[#F26122] shadow-md'
              : 'bg-[#f5804a] text-white hover:bg-white/20'
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
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              International Conference on<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sustainable Health Care, Food Science and Energy-2026
              </span><br />
              (ICSHFE-2026)
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200"> ICSHFE-2026</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span className="text-lg">January 23-24, 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-lg">Sanjay Ghodawat University, Kolhapur</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
                    href="https://forms.gle/DLB73NFgn9nq6z39A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
                  >
                    Register Now
                  </a>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200"
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
                  The International Conference on Sustainable Health Care, Food Science and Energy-2026 (ICSHFE-2026) is research fest scheduled to be held on 23rd and –24th January 2026. This conference aims to bring together leading researchers, academicians, industry experts, and policy-makers to exchange knowledge, foster innovation, and explore collaborative opportunities in the intersecting domains of health care, food science, and sustainable energy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In an era marked by rapid technological advancement and growing environmental concerns, ICSHFE-2026 serves as a timely platform to discuss sustainable solutions for global challenges. The conference emphasizes interdisciplinary dialogue and cutting-edge research that promotes human well-being while ensuring ecological balance and resource efficiency.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    The core themes of the conference span a diverse range of critical and emerging areas, including innovations and advancements in early detection and diagnostic technologies, artificial Intelligence in Data Analysis – Leveraging AI for improved decision-making, pattern recognition, and personalized medicine, research and development in therapeutic biological products, designing and constructing new biological parts and systems for practical applications, understanding genetic and protein-level mechanisms to enhance healthcare outcomes, sustainable practices and innovations for healthier and eco-friendly food systems
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      ICSHFE-2026 promises a stimulating environment that encourages knowledge sharing, networking, and the advancement of sustainable and impactful research. Participants can look forward to keynote lectures, panel discussions, oral and poster presentations, and opportunities to engage with thought leaders from around the world
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conference Subthemes:</h3>
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About Sanjay Ghodawat University</h3>
              <div className="space-y-4 text-gray-600">
                <p>Sanjay Ghodawat University was established as a State Private University in the year 2017. Previously it was Sanjay Ghodawat Institutes formed in the year 2009 by the Chairman Hon. Sanjay Ghodawat. The Institute had received NAAC A grade and also its programs were accredited by NBA and after this the natural progression was the evolvement of Sanjay Ghodawat University.</p>
                <p>The University was formed to accommodate more students and give them a variety of choices for their career path. The University offers Diploma, UG, PG and PhD programs in Technology, Management, Commerce, Science, Liberal Arts, Architecture, Pharmacy and Computer Sciences.</p>
                <p>The USP of the University is its curriculum in tandem with the requirements of the industry plus choice-based credit system that allows students to choose major as well minor in the subjects of their choice. It encourages multi-disciplinary approach that helps students' creativity and productivity. The University also offers hand on experience with establishment of Tata Technology Centre, Mechatronics Lab Car, BOSCH Collaboration Centre, Centre of Space and Atmospheric Science etc.</p>
                <p>The University campus is a state of art facility provided to students to help them study in a pristine environment. The 165 acres campus is replete with facilities like spacious classrooms, smart classrooms, well equipped labs, food court, amphi-theatre, stadium with flood lights, swimming pool, horse riding, tennis court etc.</p>
                <p>SGU is Recognized in the band "PROMISSING" under the category "University & Deemed to be University (Private / Self-Financed) (Technical)" in Atal Ranking Institutions on Innovation Achievement (ARIIA) 2021. Certificate SGU Awarded All India 4th Rank for Top Emerging Engineering Institute by Times Engineering Survey-2021. SGU Awarded All India 5th Rank for Emerging Engineering Institute: Placement by Times Engineering Survey-2021. SGU Awarded All India 2nd Rank for Emerging Engineering Institute: Research Capability by Times Engineering Survey-2021. SGU Awarded for Top Emerging Private University of India by Times B-School Survey-2020. SGU Awarded for Best Emerging Private University of Maharashtra by Navbharat times at Nagpur.</p>
              </div>
            </div>
          </div>
        </div>
                        <div className="bg-white rounded-lg shadow p-6 col-span-full mt-6 max-w-3xl mx-auto">
                        <h3 className="text-base font-semibold text-gray-900 mb-6">Expected Outcomes</h3>
                        <ul className="list-disc pl-4 space-y-3 text-sm text-gray-700 leading-tight">
                        <li>
                          Promote joint projects between healthcare, food science, and energy researchers — 
                          like developing nutrient-rich foods with reduced carbon footprints or hospital systems powered by renewable energy.
                        </li>
                        <li>
                          Establish regional and global consortiums where experts convene to address overlapping challenges —
                          malnutrition, climate change, and energy poverty — and design coordinated action plans.
                        </li>
                        <li>
                          Promote interdisciplinary coursework at universities, blending health, environmental science, and sustainable engineering 
                          to prepare the next generation of eco-conscious professionals.
                        </li>
                        <li>
                          Collaborate with local communities to trial sustainable models — like decentralized renewable energy for rural clinics 
                          or school lunch programs using indigenous crops with minimal inputs.
                        </li>
                        <li>
                          Develop actionable tasks for organizations that want to adopt sustainable health and food systems, 
                          backed by evidence shared at the conference.
                        </li>
                      </ul>
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
      <section id="registration" className="py-20 bg-image from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Registration Details</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {registrationFees.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{item.category}</h3>
                </div>
                <p className="text-2xl font-bold text-blue-400">{item.fee}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Paper Submission Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left column */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p>All papers must be written in English.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p>All papers must be original unpublished work.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p>Each author listed on the paper must be listed in the paper management system.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p>We highly recommend the usage of the provided templates to generate your paper.</p>
              </div>
            </div>

            
            

            {/* Right column */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>
                  Each submission will be reviewed for compliance of margins, headers,
                  footers, page numbers, and size specifications. Papers which are
                  non-compliant may not be included in the proceeding.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>Paper must follow a 5-page limit as per the official template.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>Papers which are non-compliant may not be included in the proceeding.</p>
              </div>
            </div>
            </div>
          </div>
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
                <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Patrons</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
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
             

            </div>
            
            {/* Convener */}
                <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-10">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Convener</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: "Dr. Anand D. Sawant", phone: "9028466507" },
                        { name: "Dr. Sambhaji Pawar", phone: "9665572111" },
                        { name: "Dr. Vidyarani Khot ", phone: "9325264000" },
                        ].map((convener, index) => (
                        <div key={index} className="space-y-2">
                          <p className="font-semibold text-blue-700">{convener.name}</p>
                          <p className="text-gray-600">Contact: {convener.phone}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                
            {/* Organizing Committee */}
            <div className="bg-white rounded-xl shadow-lg p-6 col-span-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organizing Committee</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Dr. Vivek Kayande" },
                  { name: "Dr. Vivek Kulkarni" },
                  { name: "Dr. Raja Krishnamoorthi" },
                  { name: "Dr. Subhash Kumbhar" },
                  { name: "Dr. Pallavi Bhange" },
                  { name: "Dr. Tejaswini Vhaskoti" },
                  { name: "Dr. Prajkta Shete" },
                  { name: "Dr. Ajay Nalawade" },
                  { name: "Dr. Satish Mahadik" },
                  { name: "Ms. Vishakha Deshpande" },
                  { name: "Ms. Manasi Patil" },
                  { name: "Dr. Sneha Payal" },
                  { name: "Dr. Yuvraj Jagtap" },
                  { name: "Mr. Suraj Gabale" },
                  { name: "Ms. Ashwini Chakote" },
                  { name: "Mr. Sourabh Bhosale" },
                  { name: "Mr. Prafull Patil" },
                  { name: "Mr. Suraj Patil" },
                  { name: "Mr. Chaitali Shinde" },
                  { name: "Dr. Sunetra Deshmukh" },
                  { name: "Dr. Sonali Suryanshi" },
                  { name: "Mr. Sangram Salvi" }
                ].map((member, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-semibold text-blue-700">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* National Advisory Committee*/}
                          <div className="bg-white rounded-xl shadow-lg p-6 col-span-full mt-10">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">International & National Advisory Committee</h3>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                              { name: "Dr. Rajendra Kadam", title: "US Pfizer, Denver, USA" },
                              { name: "Dr. John Dsouza", title: "Bombay College of Pharmacy, Mumbai" },
                              { name: "Dr. Manojkumar Shukla", title: "Vice President, Gold Lake Life Science, Pune" },
                              { name: "Dr. Swapnil Mohile", title: "Sr. Manager, Global Business Management, Novosis, USA" },
                              { name: "Prof. J. H. Kim", title: "CHONNAM National University, South Korea" },
                              { name: "Prof. P. S. Patil", title: "Pro VC, Shivaji University, Kolhapur" },
                              { name: "Prof. J. P. Jadhav", title: "Dean, FST & HOD, Biotechnology, SUK" },
                              { name: "Prof. V. B. Patil", title: "Solapur University, Solapur" },
                              { name: "Prof. C. S. Gopinath", title: "IIT Kerala / Retd. Deputy Director, NCL Pune" },
                              { name: "Dr. Ramesh Laxminarayan Gardas", title: "IITM Chennai" },
                              { name: "Anand Mishra", title: "Vice President, QMS & ESG, GCL" },
                              { name: "Prof. G. D. Yadav", title: "Former VC, ICT Mumbai" },
                              { name: "Prof. M. M. Salunkhe", title: "Former VC, Central University of Rajasthan" },
                              { name: "Dr. D. Srinivasa Reddy", title: "Director, CSIR-IICT, Hyderabad" },
                              { name: "Prof. Gajanan B. Zore", title: "Dept. of Biotechnology, Central University of Rajasthan" },
                              { name: "Prof. Deepak Dubal", title: "Queensland University of Technology, Australia" },
                              { name: "Prof. B. L. V. Prasad", title: "Director, Centre for Nano & Soft Matter Sciences, Arkavathi" },
                              { name: "Dhawal Chobisa", title: "Team Lead, Complex Formulation R&D, Dr. Reddy’s Laboratories, Hyderabad" },
                              { name: "Sanjay Boldhane", title: "Educational Trainer, Ex-AVP, Micro Labs Limited, Bangalore" },
                              { name: "Prof. Rupesh S. Devan", title: "IIT Indore" },
                              { name: "Bharat Kale", title: "MIT Pune" },
                              { name: "P. P. Wadgaonkar", title: "Former Scientist, NCL Pune" },
                              { name: "Dr. Prabodh Halde", title: "Marico India Limited" },
                              { name: "Prof. Uday S. Annapure", title: "ICT Mumbai" },
                              { name: "Prof. C. D. Lokhande", title: "D. Y. Patil University, Kolhapur" },
                              { name: "Mr. Sanjeev Tungatkar", title: "Chairman & Managing Director, Ceraflux" },
                              { name: "Dr. Sachin Mundade", title: "Vice President, R&D, Micro Labs, Bengaluru" },
                              { name: "Dr. Giridhar Parvatam", title: "Director, CSIR-CFTRI, Mysuru" },
                              { name: "Prof. N. R. Jadhav", title: "Dean, KVVS KIP, Karad" }

                            ].map((member, index) => (
                              <div key={index} className="space-y-2">
                                <p className="font-semibold text-blue-700">{member.name}</p>
                                <p className="text-sm text-gray-600">{member.title}</p>
                              </div>
                            ))}
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
                      <a href="http://www.sguk.ac.in/icsshfe2026" className="text-blue-600 hover:text-blue-800">
                       www.sguk.ac.in/icsshfe2026
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:icctvb25@sgu.ac.in" className="text-blue-600 hover:text-blue-800">
                        icshfe2026@sguk.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Contact Person</p>
                      
                      
                      <p className="text-gray-600">Mrs. Mitali Bora</p>
                      <p className="text-blue-600">7972817415</p>

                      <p className="text-gray-600">Dr. Tejaswini Vhaskoti</p>
                      <p className="text-blue-600">9403672449</p>

                      <p className="text-gray-600">Mrs. Chaitali Shinde</p>
                      <p className="text-blue-600">9970071451</p>

                      <p className="text-gray-600">Mr. Sangram Salve</p>
                      <p className="text-blue-600">7387478287</p>
                     
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
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">ICSHFE 2026 Brochure</p>
                      <a href="https://manage-api.sguk.ac.in/api/assets/693ba9ad5fea6e5500e4db3f" className="text-blue-600 hover:text-blue-800">
                        Brochure
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* ================= MEDIA PARTNER SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg">
            
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">
              Media Partner
            </h3>

            <div className="flex justify-center">
              <a
                href="https://ciree.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src="/assets/images/ICSSHFR-2026.jpeg"
                  alt="Conference in India"
                  className="rounded-xl shadow-lg max-w-sm w-full 
                             transition-transform duration-300 
                             group-hover:scale-105"
                />
              </a>
            </div>

          </div>
        </div>
      </section>
      
            </div>

            
          </div>
        </div>
        
      </section>

      </div>
  );
};

export default ICSSHFE;