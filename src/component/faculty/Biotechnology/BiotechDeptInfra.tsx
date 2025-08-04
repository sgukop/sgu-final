'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const BiotechDeptInfra = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Academic Infrastructure</h2>
        <div className="row">
          <MenuList dept="Biotechnology" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                   <div className="tl-event-details-key-content tl-event-details-area">
                    <p className="dark-mode-white-color">Department of Biotechnology is equipped with state-of-the-art laboratories and cutting-edge facilities, fostering excellence in research, innovation, and hands-on learning. Our advanced infrastructure supports interdisciplinary studies in microbiology, molecular biology, biochemistry, pathology, and tissue culture, enabling breakthroughs in molecular biology, diagnostics, and therapeutics.<br/><br/>
Our Microbiology Lab is designed for research in culturing microbes, (Probiotics and other beneficial microbes) as well as the prevalence of antimicrobial resistance in them. The Molecular Biology Lab provides facilities like PAGE, PCR, molecular cloning methods etc. The Biochemistry Lab is equipped for advanced protein analysis, enzyme kinetics and various techniques essential for drug discovery like TLC, HPLC spectrophotometry, etc. Our Pathology Lab integrates modern diagnostic tools for studying disease mechanisms, histopathology, and clinical applications. The tissue culture lab supports fundamental research in plant and animal cell culture.
With a research-driven curriculum and state-of-the-art laboratory facilities, the department nurtures future leaders in medical biotechnology, empowering students and researchers to contribute to scientific advancements and global healthcare solutions.
</p>
                          
                        </div>
                  </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default BiotechDeptInfra
