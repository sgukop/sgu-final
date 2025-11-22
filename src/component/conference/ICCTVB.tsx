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

const ICCTVB2025 = () => {
  
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems :  NavItem[] = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'tracks', label: 'Tracks', icon: Target },
    { id: 'dates', label: 'Important Dates', icon: Calendar },
    { id: 'registration', label: 'Registration', icon: Users },
    { id: 'keynote speaker', label: 'Keynote Speaker', icon: Users },
    { id: 'Technical Program Committee', label: 'Technical Program Committee', icon: Users },
    { id: 'committee', label: 'Committee', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const tracks : Track[] = [
    {
      title: "Next Generation Networks & Semiconductor Technologies",
      topics: ["5G Technology and Beyond", "Advanced VLSI Design", "Semiconductor Technology as VLSI", "Green Electronics"]
    },
    {
      title: "Intelligent Computing",
      topics: ["Artificial Intelligence and Machine Learning", "Deep Learning", "Computer Vision", "Expert Systems", "Explainable and Ethical AI"]
    },
    {
      title: "Data Science & Cyber-Security",
      topics: ["Big Data Analytics", "Cyber Security", "Cloud Computing", "Block chain Technology"]
    },
    {
      title: "Robotics, Automation & Drone Technology",
      topics: ["Robotics and Automation", "Internet of Things (IoT) and IIOT", "Automated Machine Learning"]
    }
  ];

  const importantDates : DateInfo[] = [
    { event: "Paper Submission Deadline", date: "15th November 2025", icon: FileText },
    { event: "Notification of Acceptance", date: "20th November 2025", icon: Mail },
    { event: "Camera-Ready Submission", date: "25th November 2025", icon: FileText },
    { event: "Registration Deadline", date: "1st December 2025", icon: Users },
    { event: "Conference Dates", date: "19th & 20th December 2025", icon: Calendar }
  ];

  const registrationFees : FeeInfo[] = [
    { category: "Student UG/PG/Research scholar", fee: "INR 2,000/-", icon: BookOpen },
    { category: "Faculty", fee: "INR 3,000/-", icon: Users },
    { category: "International Authors", fee: "INR 5,000/- Or $60", icon: Globe },
    { category: "Industry Participants", fee: "INR 4,000/-", icon: Award }
  ];

  const objectives : string[] = [
    "Dissemination of high-quality research that supports technological growth and national development",
    "Provide a platform to showcase research excellence and advanced technological infrastructure",
    "Strengthen industry-academia collaboration to forge new commercial partnerships",
    "Facilitate interdisciplinary and international research collaborations",
    "Increase visibility of emerging technologies supporting Viksit Bharat vision"
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
                Convergence of Technologies
              </span><br />
              for Viksit Bharat
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">ICCTVB 2025</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span className="text-lg">December 19-20, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-lg">Sanjay Ghodawat University, Kolhapur</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('registration')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Register Now
              </button>
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
                The International Conference on Convergence of Technologies for Viksit Bharat (ICCTVB - 2025) 
                serves as a vibrant platform for researchers, academicians, industry professionals, and policymakers 
                to exchange ideas and explore the latest advancements in cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The conference focuses on bringing together innovations across diverse fields such as communication 
                systems, advanced computing, data-driven technologies, intelligent systems, automation, and emerging 
                engineering solutions that align with the vision of a developed India.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conference Objectives</h3>
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
                <p>Established as a State Private University in 2017, SGU offers diverse programs in Technology, Management, Commerce, Science, Liberal Arts, Architecture, Pharmacy, and Computer Sciences.</p>
                <p>The university features a state-of-the-art 165-acre campus with world-class facilities including the Tata Technology Centre, Mechatronics Lab, BOSCH Collaboration Centre, and Centre for Space and Atmospheric Science.</p>
                
                <div className="mt-6 space-y-2">
                  <h4 className="font-semibold text-gray-900">Recent Achievements:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• ARIIA 2021 "Promising" band recognition</li>
                    <li>• 4th Rank (All India) - Top Emerging Engineering Institute</li>
                    <li>• Top Emerging Private University of India - Times B-School Survey 2020</li>
                  </ul>
                </div>
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

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Scope Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Natural Language Processing (NLP)", "Quantum Computing", "Biomedical Image Processing",
                "Multimedia Signal Processing", "Augmented/Virtual Reality", "Computational Linguistics",
                "Internet of Things (IoT)", "Blockchain Technology", "Explainable AI"
              ].map((area, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
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
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p>All papers must be written in English and be original unpublished work</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p>5-page limit (excluding references) - additional pages incur INR 500 fee</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p>Use provided templates for proper formatting compliance</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p>Submission opens August 2025 at www.sguk.ac.in/icctvb2025</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p>Selected papers recommended for Scopus-indexed journals subject to respective journal's peer review and editorial process. Jorrnals publication processing charges applicable for selective papers .</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p>Journal publication processing charges at actuals</p>
                </div>
              </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Registration Guidelines </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p>Authors whose papers have been accepted are requested to complete the final registration process by filling out the form below and uploading the payment proof.</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Final Registration form </h4>
                  <p className="text-blue-200"><a href="#" rel="noopener noreferrer" target="_blank" className="table-link">Click Here</a> </p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Click below to Pay Registration Fee </h4>
                  <p className="text-blue-200"><a href="https://forms.easebuzz.in/register/SanjayGhodawatUniversity_Fees/Convergence_of_Technologies_for_Viksit_Bharat" rel="noopener noreferrer" target="_blank" className="table-link">Pay Here</a> </p>
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

            {/* Patrons */}
            <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patrons</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Mr. Shrenik S. Ghodawat", title: "Secretary, SGU" },
                  { name: "Mr. Vinayak V. Bhosale", title: "Trustee, SGU" },
                  { name: "Dr. Udhav Bhosale", title: "Vice Chancellor, SGU" },
                  { name: "Dr. Vivek M. Kayande", title: "Registrar, SGU" },
                  { name: "Dr. Vivek V. Kulkarni", title: "Dean of Academics, SGU" }
                ].map((patron, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-semibold text-blue-700">{patron.name}</p>
                    <p className="text-sm text-gray-600">{patron.title}</p>
                  </div>
                ))}
              </div>
             </div>
             </div>
             

            </div>

            {/* Convener */}
            
            <div className="space-y-4"></div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Convener</h3>
              <div className="space-y-2">
                <p className="font-semibold text-blue-700">Dr. Raja Krishnamoorthi</p>
                <p className="text-gray-600">Contact: 7708395107</p>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-blue-700">Dr. Mahadik Shamala R</p>
                <p className="text-gray-600"> Contact:  9422417847, 8806482647</p>
              </div>
              </div>


              

            {/* Co-Convener */}
            <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Co-Convener</h3>
              <div className="space-y-3">
                {[
                  { name: "Mrs. Swati Anil Patil", phone: "9175382126" },
                  { name: "Mr. Sameer Iqubal Tamboli", phone: "9960933977" },
                  { name: "Mr. Amrish Ashokrao Patil", phone: "9970221308" },
                   { name: "Mr.  Gurunath G. Machhale", phone: "9673747386" },
                 
  
                ].map((coConveyor, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-semibold text-blue-700">{coConveyor.name}</p>
                    <p className="text-gray-600">{coConveyor.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizing Committee */}
            <div className="bg-white rounded-xl shadow-lg p-6 col-span-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organizing Committee</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Dr. Mahesh P. Gaikwad", title: "Head, Department of AIML, SGU" },
                  { name: "Dr. Deepika V. Patil", title: "Head, Department of CSE, SGU" },
                  { name: "Dr. Swapnil Hirikude", title: "Head, Department of ECE, SGU" },
                  { name: "Dr. Chetan Arage", title: "Head, Department of Computer Applications, SGU" }
                ].map((member, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-semibold text-blue-700">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internatioal Advisory Committee*/}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Internatioal Advisory Committee</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Dr. Lung Jieh Yang", title: "Professor,Taiwan" },
                  { name: "Dr. P. Sanjeevikumar", title: "Professor, University of South Eastern Norway" },
                  { name: "Dr. Devid Jenkins", title: "Professor, University of Plymouth, London" },
                  { name: "Dr. Kumar Yelamarthi", title: "Professor & Dean, University of Tennessee, USA" },
                  { name: "Dr. Sudeb Dasgupta", title: "Professor, IIT, Roorkee" },
                  { name: "Dr. C. Periyasamy", title: "Asso. Professor, NITC" },
                  { name: "Dr. Deepali R. Vora", title: "Professor, CIOT, Pune" },
                  { name: "Dr. Ameya Naik", title: "Professor, SSOE" },
                  { name: "Dr. Sudeep Thepade", title: "Pro-Vice-Chancellor,Pimpri Chinchwad University, Pune & Professor, Pimpri Chinchwad College of Engineering, SPPU, Pune" },
                  { name: "Dr. Shraddha Phansalkar", title: "Head, Computer Science and Engineering, MIT, ADT Pune Blockchain certified professional,AI Researcher" },
                ].map((member, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-semibold text-blue-700">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* National Advisory Committee*/}
                    <div className="bg-white rounded-xl shadow-lg p-6 col-span-full mt-10">
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">National Advisory Committee</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { name: "Dr. Sonali D. Patil", title: "Professor & Head, Dept. of Computer Engg., PCCOE Pune" },
                        { name: "Dr. K. Rajeswari", title: "Dean Academics, Professor, Dept. of Computer Engg., PCCOE Pune" },
                        { name: "Dr. D.G. Bhalke", title: "Professor & Head, Dept. of Electronics & Telecomm., DIT Pune" },
                        { name: "Dr. C. Periyasamy", title: "Associate Professor, Dept. of ECE, NIT Calicut" },
                        { name: "Dr. U. Srinivasulu Reddy", title: "Associate Professor, NIT Tiruchirappalli" },
                        { name: "KM Bhurchandi", title: "Professor, Dept. of Electronics and Communication, VNIT Nagpur" },
                        { name: "Rajkumar Soundrapandiyan", title: "School of Computer Science and Engg., VIT Vellore" },
                        { name: "Dr. Deepali R. Vora", title: "Professor & Deputy Director (Academics), SIT Pune" },
                        { name: "Dr. Ameya Naik", title: "Professor, K J Somaiya, School of Engineering" },
                        { name: "Dr. Kavita Sonawane", title: "Professor & HOD, Dept. of Comp Engg., SFIT Mumbai" },
                        { name: "Dr. Sheetal Rathi", title: "Professor & Dean Academics, Thakur College of Engineering, Mumbai" },
                        { name: "Dr. Bharati Singh", title: "Professor & HoD, K J Somaiya School of Engineering" },
                        { name: "Dr. Amol C. Adamuthe", title: "Professor & Head, Dept. of IT, RIT Islampur" },
                        { name: "Dr. Sandeep U. Mane", title: "Professor, RIT Islampur" },
                        { name: "Dr. Urmila Patil", title: "Professor, D.Y. Patil Institute of Technology, Pune" },
                        { name: "Dr. Mahesh S. Kumbhar", title: "Associate Professor, Dept. of E&TC, RIT Islampur" },
                        { name: "Dr. B. F. Momin", title: "Professor and Former Head, Dept. of Computer Science and Engineering Walchand College of Engineering, Sangli." },
                        { name: "Dr. B. G. Patil", title: "Professor, Dept. of Electronics Engg., Walchand College of Engineering, Sangli" },
                        { name: "Dr. Prakash J. Kulkarni", title: "Associate Professor, RIT Islampur" },
                      ].map((member, index) => (
                        <div key={index} className="space-y-2">
                          <p className="font-semibold text-blue-700">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>

            
            
            
          </div>
          
          
      
  </section>
  {/* keynote speaker */}
      <section id="keynote speaker" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keynote Speaker</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Patrons */}
            <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Dr. David Jenkins", title: "University of Plymouth, London" },
                  { name: "Dr. Sanjeevikumar Padmanaban", title: "University of Southeastern, Norway" },
                  { name: "Dr. Lung Jieh Wang", title: "Taiwan" },
                  { name: "Dr. Sudeb Dasgupta", title: "IIT Roorkee" },
                  { name: "Dr. Dr. Deepali R Vora", title: "Symbiosis Institute of Technology, Pune" }
                ].map((patron, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-semibold text-blue-700">{patron.name}</p>
                    <p className="text-sm text-gray-600">{patron.title}</p>
                  </div>
                ))}
              </div>
             </div>

            </div>

          </div>
  </section>
  {/* keynote speaker */}
      <section id="Technical Program Committee" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Program Committee</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Patrons */}
            <div className="bg-white rounded-xl shadow-lg p-6 col-span-full lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Mr. Rahul Patil", title: "VP, Bentley Systems" },
                  { name: "Mr. Prakash Somaiya", title: "Senior Director, Centelin, Australia" },
                  { name: "Mr. Kedar Potnis", title: "Founder and Partner, Mobifilla Software India LLP" },
                  { name: "Mr. Amol Kalugade", title: "Founder and CEO, Saffron Edge" },
                  { name: "Mr. Sundeep Saproo", title: "VP, JP Morgan" },
                  { name: "Dr. Ruturaj Patil", title: "Director, Zensar Technologies" }
                ].map((patron, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-semibold text-blue-700">{patron.name}</p>
                    <p className="text-sm text-gray-600">{patron.title}</p>
                  </div>
                ))}
              </div>
             </div>

            </div>

          </div>
  </section>


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
                      <a href="http://www.sguk.ac.in/icctvb2025" className="text-blue-600 hover:text-blue-800">
                       www.sguk.ac.in/icctvb2025
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:icctvb25@sguk.ac.in" className="text-blue-600 hover:text-blue-800">
                        icctvb25@sguk.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Contact Person</p>
                      <p className="text-gray-600">Dr. Mahadik Shamala R</p>
                      <p className="text-blue-600">9422417847</p>
                     <p className="text-gray-600">Mr. Machhale Gurunath G.</p>
                      <p className="text-blue-600">9673747386</p>
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

            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Paper Submission</h4>
                  <p className="text-blue-200">Your Paper should be submitted via email to icctvb25@sguk.ac.in</p>
                </div>

                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Registration</h4>
                  <p className="text-blue-200">Last Date for registration is 1st Dec 2025 </p>
                </div>

                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">SCI/Scopus-indexed journals</h4>
                  <p className="text-blue-200">Scopus-indexed Taylor & Francis journals</p>
                </div>

                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Submission Deadline</h4>
                  <p className="text-blue-200">November 15, 2025</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-2">Download Paper Template</h4>
                  <p className="text-blue-200"><a href="https://manage-api.sguk.ac.in/api/assets/68c26818a38d33e79780a6c0" rel="noopener noreferrer" target="_blank" className="table-link">Sample Research Paper Template</a> </p>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  );
};

export default ICCTVB2025;