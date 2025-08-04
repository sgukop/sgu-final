import React from 'react'
interface Props {
    style: string;
}
const CtaSection4:React.FC<Props> = ({style}) => {
  return (
    <div className={`tl-8-cta ${style}`}>
        <div className="tl-7-cta-bg container">
            <div className="row align-items-center justify-content-between">
                <div className="col-xxl-9">
                    <h2 className="tl-7-cta-title">SANJAY GHODAWAT UNIVERSITY TIES UP WITH <span className="last-word">TATA TECHNOLOGIES</span> TO SET UP A CENTRE OF EXCELLENCE.</h2>
                </div>
                {/* <div className="col-xxl-4 col-md-9">
                    <p className="tl-7-cta-descr">Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis.</p>
                </div> */}

                <div className="col-md-3 text-start text-md-end">
                <a className="tl-def-btn" href="/tata-technology" target="_blank">Details</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CtaSection4