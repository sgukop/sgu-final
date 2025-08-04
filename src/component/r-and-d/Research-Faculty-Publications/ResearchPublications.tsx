import React from 'react'
import PublicationsHighlights from './PublicationsHighlights'
import InternationalJournal from './InternationalJournal'
import Publications1719 from './Publications1719'
import Publications1819 from './Publications1819'
import Publications1718 from './Publications1718'

const ResearchPublications = () => {
  return (
    <section className="tl-14-blogs pt-100 pb-100" data-bg-color="#F3F1F1" style={{backgroundColor:"#F3F1F1"}}>
      <h2 className="tl-9-section-title mb-50">Research & Development Cell</h2>

            <PublicationsHighlights/>
            <Publications1719/>
            <Publications1819/>
            <Publications1718/>
            <InternationalJournal/>

    </section>
  )
}

export default ResearchPublications