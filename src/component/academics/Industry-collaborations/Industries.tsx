'use client'
import React, { useState } from 'react';

// Define a type for pricing packages
type PricingPackage = {
  title: string;
  subTitle: string;
  features: { id: number; feature: string; className?: string }[];
};

// Define an array of pricing packages
const pricingPackages: PricingPackage[] = [
  {
    title: 'Collaborations with Professional Bodies',
    subTitle: '',
   
    features: [
      {
        id: 0,
        feature: 'American Concrete Institute (ACI)',
      },
      {
        id: 1,
        feature: 'National Remote Sensing Centre (NRSC)',
      },
      {
        id: 2,
        feature: 'CSI',
      },
      {
        id: 3,
        feature: 'Indian Society for Technical Education (ISTE)',
      },
      {
        id: 4,
        feature: 'Indian Geotech Society (IGS)',
      },
      {
        id: 5,
        feature: 'IUCEE',
      },
      {
        id: 6,
        feature: 'IARA',
      },
      {
        id: 7,
        feature: 'ISDSI',
      },
      
    ],
  },
  {
    title: 'Collaborations with Premier Institutions',
    subTitle:"",
    features: [
      {
        id: 0,
        feature: 'Harvard Business School Publishing House',
      },
      {
        id: 1,
        feature: 'CDAC',
      },
      {
        id: 2,
        feature: 'IIT Kharagpur',
      },
      {
        id: 3,
        feature: 'IIT Bombay',
      },
      {
        id: 4,
        feature: 'COEP, Pune',
       },
       {
        id: 5,
        feature: 'Indian Institute of Tropical Meteorology (IITM), Pune',
       },
       {
        id: 6,
        feature: 'Institute of Management Technology (IMT), Ghaziabad',
       },
       {
        id: 7,
        feature: 'KLE Technology',
       },
       {
        id: 8,
        feature: 'Hon. Shri. Annasaheb Dange Arts, Commerce & Science College, Hatkanangale',
       },
       {
        id: 9,
        feature: 'Heartfulness Institute',
       },
    ],
  },
  {
    title: 'Collaborations with Industry',
    subTitle:"",
    features: [
      {
        id: 0,
        feature: 'Tata Technologies',
      },
      {
        id: 1,
        feature: 'Infosys',
      },
      {
        id: 2,
        feature: 'Kirloskar Oil Engines Ltd.',
      },
      {
        id: 3,
        feature: 'PARI',
      },
      {
        id: 4,
        feature: 'Star Air',
      },
      {
        id: 5,
        feature: 'VOLVO',
      },
      {
        id: 6,
        feature: 'Eicher',
      },
      {
        id: 7,
        feature: 'Global Talent Track Private Limited',
      },
    ],
  },
];

const Industries: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const handleChoosePackage = (index: number) => {
    setSelectedPackage(index);
  };

  return (
    <section className="tl-8-pricing tl-3-section-spacing mt-100">
      <div className="container">
      <div className="row justify-content-center g-4">
          {pricingPackages.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`tl-8-single-pricing flex-flex-col h-full ${
                  selectedPackage === index ? 'tl-8-single-pricing-selected' : ''
                }`}
              >
                <div className="tl-8-single-pricing-heading">
                  {item.title === 'Starter Plan' && (
                    <span className="tl-8-single-pricing-tag">Popular Plan</span>
                  )}
                  <h5 className="tl-8-single-pricing-title text-[#4f70b6]">{item.title}</h5>
                  <h6 className="tl-8-single-pricing-sub-title">{item.subTitle}</h6>
                 </div>

                <ul className="tl-8-single-pricing-features">
                  {item.features.map((feature) => (
                    <li key={feature.id} className={feature.className}>{feature.feature}</li>
                  ))}
                </ul>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;


