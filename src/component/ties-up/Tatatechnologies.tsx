import Link from 'next/link'
import React from 'react'

const Tatatechnologies = () => {
  return (
    <section className="tl-2-cta bg-defaults pt-120 pb-130">
        <div className="container">
            {/* <h2 className="tl-2-section-title">SANJAY GHODAWAT UNIVERSITY TIES UP WITH TATA TECHNOLOGIES TO SET UP A CENTRE OF EXCELLENCE</h2> */}
            {/*<h2 className="tl-7-cta-title">SANJAY GHODAWAT UNIVERSITY TIES UP WITH <span className="">TATA TECHNOLOGIES</span> TO SET UP A CENTRE OF EXCELLENCE.</h2>  */}
            <h2 className="tl-7-cta-title">SANJAY GHODAWAT UNIVERSITY</h2>
            <Link className="tl-def-btn mt-4" href="/tata-technology" target="_self">Details</Link>
        </div>
    </section>
  )
}

export default Tatatechnologies
