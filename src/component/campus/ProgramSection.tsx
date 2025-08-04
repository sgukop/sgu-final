import { courseList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const ProgramSection = () => {
  return (
    <section className="tl-4-programs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container">
            <h2 className="tl-4-section-title">SGU  <span className="last-word">Videos</span></h2>

            <div className="row g-3 tl-4-programs-row">
                {courseList.slice(1,4).map((item,index) => (
                 <div className="col-lg-4 col-md-6 " key={item.id}>
                    <div className="tl-4-program relativeeeee">
                        <div className="tl-4-program-heading absoluteeee">
                            {/* <img src={`assets/images/tl-4/program-${index + 1}.png`} alt="Icon"/> */}
              
                            <div className="tl-4-program-heading-txt">
                                {/* <h4 className="tl-4-program-title">{item.programTitle}</h4> */}
                                <h6 className="tl-4-program-sub-title">{item.title}</h6>
                            </div>
                        </div>
                        <iframe
  width="412"
  height="300"
  src={item.youtubeUrl}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default ProgramSection