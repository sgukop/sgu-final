import 'bootstrap/dist/css/bootstrap.min.css';
// Import other CSS files
import '../../public/assets/css/all.min.css';
import '../../public/assets/css/sharp-regular.min.css';
import '../../public/assets/css/sharp-solid.min.css';
import '../../public/assets/css/icofont.min.css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import "flag-icons/css/flag-icons.min.css";
import '../../public/assets/css/style.css';
import '../../styles/globals.css';

import { ToastContainer } from 'react-toastify';
import { TalimProvider } from '@/context/TalimContext';
import ThemeBtnSection from '@/component/theme-btn/ThemeBtnSection';
import SidebarSection from '@/component/sidebar/SidebarSection';
import BootstrapClient from '@/component/admissions/Program-offred-and-intake/School-engineering/BoostrapClient';
import ScrollTop from '@/component/scroll-to-top/ScrollTop';
import { Metadata } from 'next';
// import { ThemeProvider } from '@/component/MaterialComponent';

export const metadata: Metadata = {
    title: "SGU University",
    description: "Developed by Enark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <TalimProvider>
                {/* <ThemeProvider> */}
                    <body>
                        <ScrollTop />
                        <ThemeBtnSection />
                        <SidebarSection />
                        {children}
                        <BootstrapClient />
                        <ToastContainer />
                    </body>
                {/* </ThemeProvider> */}
            </TalimProvider>
        </html>
    );
}
