import React from 'react';
import FaqAccordion from './FaqAccordion';
import { faqList } from "@/data/Data";

const Faq = () => {
  return (
    <div className="tl-8-faq pt-100 pb-100">
      <div className="container">
        <div className="row g-0 align-items-center justify-content-between">
           <div className="col-xl-12 col-lg-12">
            <h2 className="tl-8-section-title text-center">
                    FAQ's
            </h2>
            <FaqAccordion array={faqList}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq