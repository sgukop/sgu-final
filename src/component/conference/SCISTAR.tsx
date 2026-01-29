"use client";

import React from "react";

const SciStar2026FullPage = () => {
  const events = [
    { 
      id: 1, 
      title: "Online Science Quiz", 
      coordinator: "Mr. Vimalkumar Dige", 
      img: "/assets/images/scistar2026/quiz.png", 
      doc: "1.Quiz Competation Rules & Regulations.pdf", 
      contact: "9091913133",
      rules: "35 MCQs | 20 Minutes | Round II Offline on 07/02/2026"
    },
    { 
      id: 2, 
      title: "Poster Presentation", 
      coordinator: "Dr. Satish A Mahadik", 
      img: "/assets/images/scistar2026/poster.png", 
      doc: "2.Poster Presentation.pdf", 
      contact: "9822946226",
      rules: "Themes: AI, Sustainability, Social Issues | Visual & Q&A judging"
    },
    { 
      id: 3, 
      title: "Scientific Model Competition", 
      coordinator: "Ms. Ashwini Chakote", 
      img: "/assets/images/scistar2026/model.png", 
      doc: "3.Scientific Model Competition.pdf",
      rules: "Max size 60x60x60 cm | Working models preferred | Eco-friendly materials"
    },
    { 
      id: 4, 
      title: "Scientific Reel Presentation", 
      coordinator: "Ms. Manasi Patil", 
      img: "/assets/images/scistar2026/reel.png", 
      doc: "4. Scientific Reel Presentation (REEL-STAR).pdf", 
      email: "manasi.patil@fs.sguk.ac.in",
      rules: "30-60 Seconds | 9:16 Ratio | Format: MP4"
    },
    { 
      id: 5, 
      title: "Scientific Meme Creation", 
      coordinator: "Ms. Shivani Samarth", 
      img: "/assets/images/scistar2026/meme.png", 
      doc: "5. Scientific Meme Creation Contest.pdf", 
      email: "shivani.samarth@py.sguk.ac.in",
      rules: "Original work only | Science/Tech humor | Under 5MB"
    },
    { 
      id: 6, 
      title: "Scientific Short Film", 
      coordinator: "Mr. Siddhappa Balikar", 
      img: "/assets/images/scistar2026/shortfilm.png", 
      doc: "6. Scientific Short Film Making Competition_Rules & Terms.pdf",
      rules: "3-5 Minutes | HD MP4 | Deadline: 31st Jan 2026"
    },
    { 
      id: 7, 
      title: "Water Rocket Challenge", 
      coordinator: "Dr. Sulthan S.", 
      img: "/assets/images/scistar2026/waterrocket.png", 
      doc: "7. Water Rocket Design & Launch Challenge.pdf",
      rules: "Max 3 members | 0.5L to 2L bottles | Straight distance measurement"
    },
    { 
      id: 8, 
      title: "Ingredient Hunting (Blindfold)", 
      coordinator: "Dr. Tejaswini Vhaskoti", 
      img: "/assets/images/scistar2026/blindfold.png", 
      doc: "8. Blindfold - Ingredient hunt..pdf",
      rules: "60 Second limit | Identify by touch & smell | Single player per turn"
    },
    { 
      id: 9, 
      title: "Food Stall Participation", 
      coordinator: "Ms. Vishakha Deshpande", 
      img: "/assets/images/scistar2026/food.png", 
      fee: "₹700", 
      doc: "9. Food Stall.pdf",
      rules: "Vegetarian only | Max 2 staff | Must bring own utensils/gas"
    },
    { 
      id: 10, 
      title: "Health Check-up Camp", 
      coordinator: "Mr. Suraj Gabale", 
      img: "/assets/images/scistar2026/health.png", 
      doc: "10. Health Checkup Camp for Participants.pdf",
      rules: "7th Feb, 11am-3pm | Height, Weight, BMI, Blood Group, Pulse"
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      {/* Hero Section */}
      <header className="bg-white text-blue-900 border-b py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-black mb-4 tracking-tighter uppercase">Sci-STAR 2026</h1>
          <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-2xl opacity-90 font-light italic mb-10 text-blue-100">
            "(Inspiring Innovations)"
          </p>
          {/* Contact Section */}
      <section id="contact" className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Assistance & Queries</h2>
        <p className="mb-4 text-gray-700">
          📢 Registrations are now open for Sci-STAR 2026 Interested students are requested to fill out the registration form using the link below.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-3 font-semibold">Name & Designation</th>
                <th className="border p-3 font-semibold">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Dr. Prajakta Shete <span className="text-sm font-normal text-gray-500">(Coordinator)</span></td>
                <td className="border p-3">
                  <a href="tel:8830222561" className="text-blue-600 hover:underline">8830222561</a>
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Mr. Sangram Salve <span className="text-sm font-normal text-gray-500">(Sub‑Coordinator)</span></td>
                <td className="border p-3">
                  <a href="tel:7387478287" className="text-blue-600 hover:underline">7387478287</a>
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Dr. Ajay Nalawade <span className="text-sm font-normal text-gray-500">(Sub‑Coordinator)</span></td>
                <td className="border p-3">
                  <a href="tel:9518709419" className="text-blue-600 hover:underline">9518709419</a>
                </td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border p-3 font-semibold text-blue-800">📧 Official Email</td>
                <td className="border p-3">
                  <a href="mailto:scistar2026@sguk.ac.in" className="text-blue-600 font-semibold hover:underline">scistar2026@sguk.ac.in</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://forms.gle/AAFLVvvNDJxnAL4P9" 
              target="_blank" 
              className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl"
            >
              Register Now (Google Form)
            </a>
            <a 
              href="https://chat.whatsapp.com/Bb9ZEh7b7Au1MzxRQYuTuF" 
              target="_blank" 
              className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:scale-105 shadow-xl"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">

      {/* Committees */}
      <section id="committees">
        <h2 className="text-2xl font-semibold mb-4">Committees</h2>
        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Committee</th>
                <th className="border p-2">Chairperson</th>
                <th className="border p-2">Coordinating Team</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">Promotion & Marketing</td>
                <td className="border p-2">Dr. Prajakta Shete</td>
                <td className="border p-2">Dr. Anand Sawant, Mr. Sangram Salve, Dr. Ajay Nalawade, Ms. Vishakha Deshpande, Mr. Vimalkumar Dige</td>
              </tr>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2">Reception & Registration</td>
                <td className="border p-2">Dr. Ajay Nalawade</td>
                <td className="border p-2">Dr. Sonali Suryawanshi, Dr. Satish Mahadik, Dr. Yuvraj Jagtap, Mr. Sailab Momin, Mrs. Sangita Sankpal, Mr. Birappa Dudhal</td>
              </tr>
              <tr>
                <td className="border p-2">3</td>
                <td className="border p-2">Program Committee</td>
                <td className="border p-2">Dr. Vidyarani Khot</td>
                <td className="border p-2">Dr. Pallavi Bhange, Mr. Dhananjay Kinikar, Mr. Prafull Patil</td>
              </tr>
              <tr>
                <td className="border p-2">4</td>
                <td className="border p-2">Competitions Committee</td>
                <td className="border p-2">Dr. Sunetra Deshmukh</td>
                <td className="border p-2">Dr. Tejaswini Vhaskoti, Mr. Suraj Gabale, Mr. Vimalkumar Dige, Ms. Riya Tari, Ms. Simran Jamadar, Mr. Sourabh Patil, Ms. Mitali Bora, Dr. Sarika Patil, Ms. Ashwini Chakote, Ms. Vishakha Deshpande, Ms. Shivani Samarth, Mrs. Pranoti Patil, Mr. Avadhut Athanikar, Ms. Pooja Swami, Mrs. Manasi Patil, Ms. Priyadarshini Patil</td>
              </tr>
              <tr>
                <td className="border p-2">5</td>
                <td className="border p-2">Food Committee</td>
                <td className="border p-2">Dr. Sambhaji Pawar</td>
                <td className="border p-2">Ms. Nagina Mulla, Mrs. Sampada Patil, Mr. Suraj Patil</td>
              </tr>
              <tr>
                <td className="border p-2">6</td>
                <td className="border p-2">Discipline Committee</td>
                <td className="border p-2">Dr. Jiwan Lavande</td>
                <td className="border p-2">Ms. Sonali Sawant, Ms. Ashweta Kudale, Mr. Avadhut Athanikar, Ms. Gayatri Sawant</td>
              </tr>
              <tr>
                <td className="border p-2">7</td>
                <td className="border p-2">Transportation</td>
                <td className="border p-2">Dr. Subhash Kumbhar</td>
                <td className="border p-2">Mr. Sourabh Bhosale, Mr. Jaypal Lohar, Mrs. Sangita Kumbhar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Basic Event Info */}
      <section id="overview">
        <h2 className="text-2xl font-semibold mb-4">Event Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <tbody>
              <tr><td className="border p-3 font-semibold">Event</td><td className="border p-3">Sci‑STAR 2026</td></tr>
              <tr><td className="border p-3 font-semibold">Tentative Date</td><td className="border p-3">07th  February 2026</td></tr>
              <tr><td className="border p-3 font-semibold">Target Students</td><td className="border p-3">11th–12th (Science) & UG (All)</td></tr>
              <tr><td className="border p-3 font-semibold">Theme</td><td className="border p-3">Science And Technology for Sustainable Future</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Events & Coordinators */}
          <section id="events" className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800 flex items-center gap-2">
            <span className="bg-blue-600 w-2 h-8 rounded-full"></span>
            Event‑wise Coordinators
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 text-left text-sm font-bold text-slate-600">Sr. No.</th>
                  <th className="p-4 text-left text-sm font-bold text-slate-600">Event</th>
                  <th className="p-4 text-left text-sm font-bold text-slate-600">Coordinator</th>
                  <th className="p-4 text-left text-sm font-bold text-slate-600">Contact Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [1, "Quiz Competition (Science)", "Mr. Vimalkumar Dige", "9091913133"],
                  [2, "Poster Presentation", "Dr. Satish Mahadik", "9822946226"],
                  [3, "Scientific Model Competition", "Ms. Ashwini Chakote", "8446363848"],
                  [4, "Scientific Reel Star", "Mrs. Manasi Patil", "9309544954"],
                  [5, "Scientific Memes", "Ms. Shivani Samarth", "9860268550"],
                  [6, "Scientific Short Films", "Dr. Sneha Paymal", "9359482323"],
                  [7, "Water Rocket Challenge", "Mr. Mari Prabhu", "9994288036"],
                  [8, "Ingredient Hunting", "Dr. Tejaswini Vhaskoti", "9403672449"],
                  [9, "Free Health Check‑up Camp", "Mr. Suraj Gabale", "9970191188"],
                  [10, "Food Stall (Testing new food products)", "Ms. Vishakha Deshpande", "9970151311"],
                  [11, "Campus & Department Visit", "Mr. Abhijeet Latkar", "9822255410"],
                ].map((e) => (
                  <tr key={e[0]} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 text-sm text-slate-500 font-medium">{e[0]}</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">{e[1]}</td>
                    <td className="p-4 text-sm text-slate-700">{e[2]}</td>
                    <td className="p-4 text-sm">
                      <a 
                        href={`tel:${e[3]}`} 
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        {e[3]}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Resource Section */}
        <section id="guidelines">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Official Guidelines</h2>
              <p className="text-slate-500">Download rulebooks and participation details</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <a 
                key={event.id}
                href={`/assets/files/${event.doc}`} 
                className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="bg-red-50 text-red-600 p-2 rounded-lg mr-3 font-bold text-xs group-hover:bg-red-600 group-hover:text-white transition-colors">PDF</div>
                <span className="text-sm font-semibold text-slate-700 truncate">{event.title}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Competition Cards Grid */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-16">Explore the Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b">
                  <img 
                    src={event.img} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { 
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = `https://via.placeholder.com/800x500?text=${encodeURIComponent(event.title)}`; 
                    }}
                  />
                  {event.fee && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Entry Fee: {event.fee}
                    </div>
                  )}
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-bold text-2xl mb-4 text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="mb-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-400"></div>
                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Technical Rules</p>
                    <p className="text-sm text-indigo-900 font-medium italic">"{event.rules}"</p>
                  </div>

                  <div className="space-y-3 text-sm mt-auto border-t pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Coordinator</span>
                      <span className="font-bold text-slate-800">{event.coordinator}</span>
                    </div>
                    
                    {event.contact && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Call Support</span>
                        <a href={`tel:${event.contact}`} className="text-blue-600 font-bold hover:underline">{event.contact}</a>
                      </div>
                    )}

                    {event.email && (
                      <div className="pt-2">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Submissions</span>
                        <a href={`mailto:${event.email}`} className="text-indigo-600 font-medium block truncate hover:underline">{event.email}</a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
      </main>

      <footer className="bg-slate-950 text-slate-500 py-16 text-center border-t border-slate-900">
        <div className="container mx-auto px-4">
          <p className="font-bold text-slate-300 mb-2">Sanjay Ghodawat University, Kolhapur</p>
          <p className="text-sm max-w-md mx-auto mb-6">Empowering minds through scientific exploration and sustainable innovation.</p>
          <div className="flex justify-center gap-6 text-xs uppercase tracking-widest mb-8">
            <span className="bg-slate-800 px-3 py-1 rounded">31st Jan 2026</span>
            <span className="bg-slate-800 px-3 py-1 rounded">07th Feb 2026</span>
          </div>
          <p className="text-[10px] opacity-40">© 2026 Sci-STAR Organizing Committee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SciStar2026FullPage;
