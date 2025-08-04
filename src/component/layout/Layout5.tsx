import React from 'react'
import HeaderSection8 from '../header/HeaderSection8';
import FooterSection7 from '../footer/FooterSection7';
import NewHeaderSection from '../header/NewHeaderSection';
import NewFooter from '../footer/NewFooter';

interface LayoutProps {
    children: any;
}
const Layout5:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
     {/* <div>
     <HeaderSection8  style='tl-10-header'
        darkLogo="/assets/images/sguu-logoo.png" 
        lightLogo="/assets/images/sgulogo-white.jpg"
        headerStyle=''
        btnStyle='tl-def-btn'
        loginBtn={true}/>
      {children}
      <FooterSection7 style='' logo='/assets/images/logos/sgulogo.jpg' descStyle='tl-footer-descr' socialStyle='tl-footer-socials'/>
    </div>   */}

    <div>
     <NewHeaderSection/>
      {children}
      <NewFooter/>
    </div>

    </>
  )
}

export default Layout5