import React from 'react'
import AboutTestimonialSlider from '../slider/AboutTestimonialSlider'

const TestimonialSection2 = () => {
  return (
    <section className="tl-testimonial tl-2-testimonial pt-120 pb-120" style={{ marginBottom:'50px'}}>
        <div className="container">
            <div className="tl-2-section-heading">
                <h2 className="tl-2-section-title">Trusted by over 40,000+ Students Have To Say</h2>
            </div>
            <AboutTestimonialSlider 
                pageStyle='tl-2' 
                singleCardStyle='tl-single-testimony tl-2-testimony'
                navStyle='tl'
            />
        </div>
    </section>
  )
}

export default TestimonialSection2