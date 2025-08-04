import React from 'react'
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const ElectronicsNewsletter = () => {
  return (
    <div className="pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Newsletter/Technical</h2>
        <div className="row">
                    <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
                        <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
            <div className="row">
               
                <div className="tl-event-details-area">
                    <div className="col-lg-12">
                        <div className="tl-blog-details-tags-new flex-wrap">
                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.indiasmartgrid.org/newsletter.php">
                            <strong>indiasmartgrid</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://spectrum.ieee.org/"><strong>spectrum.ieee</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.brighthubengineering.com/content/newsletter/"><strong>brighthubengineering</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.mtu.edu/ece/department/alumni/newsletter/"><strong>Spring Link 1</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://martingranger.co.uk/domain-names/ols/products/wireincouk"><strong>wirein</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.electrical4u.com/electrical-engineering-articles/"><strong>electrical4u</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.electronicsforu.com/"><strong>electronicsforu</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.eetimes.com/"><strong>eetimes</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.ieindia.org/webui/IEI-Publication.aspx"><strong>ieindia News letter</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.ee.columbia.edu/ee-newsletter"><strong>ee.columbia</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.electricalindia.in/"><strong>electricalindia</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.electricalmirror.net/"><strong>Spring Link 2</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.electricity-today.com/"><strong>electricity-today</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.eprmagazine.com/"><strong>eprmagazine</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.eeweb.com/magazines/"><strong>eeweb</strong></a>

                            <a rel="noopener noreferrer" className="dark-mode-white-color tl-blog-details-tag-new" target="_blank" href="https://www.eai.in/"><strong>eai</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>    
    )
}

export default ElectronicsNewsletter