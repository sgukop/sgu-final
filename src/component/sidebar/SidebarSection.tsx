'use client'
import React from 'react';
import { useTalimContext } from '@/context/TalimContext';
import { Tab, Nav } from "react-bootstrap";
import MobileNavSection from '../navigation/MobileNavSection';
import Link from 'next/link';

const SidebarSection = () => {
  const { isSidebarOpen, handleSidebarClose } = useTalimContext();

  return (
    <>
      <div className={`kidba-menu-sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="kidba-menu-sidebar-inner">
          <div className="sidebar__close">
            <a
              role='button'
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              onClick={handleSidebarClose}
            >
              <span><i className="icofont-brand-nexus"></i></span>
              <span>close</span>
            </a>
          </div>
          <Tab.Container id="nav-tab" defaultActiveKey="nav-menu">
            <div className="kidba-menu-sidebar-top mb-10">
                <Nav>
                  <Nav.Item className='mobile-nav-item'>
                    <Nav.Link eventKey="nav-menu">Menu</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='mobile-nav-item'>
                    <Nav.Link eventKey="nav-info">Info</Nav.Link>
                  </Nav.Item>
                </Nav>
            </div>
            <div className="kidba-menu-sidebar-bottom">
              <div className="logo mb-10 d-flex justify-content-center">
                <Link href="/">
                  <img src="assets/images/home/logo/SGU-original-logo.png" width={90} alt="logo" />
                </Link>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="nav-menu">
                  <div className="mobile-menu mean-container">
                    <div className='mean-bar'>
                      <MobileNavSection />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="nav-info">
                  <div className="kidba-sidebar-info-content-331">
                    <ul>
                      <li><i className="icofont-clock-time"></i> 9:30am - 6:30pm, Mon - Sun</li>
                      <li>
                        <a href="tel:http://80012345676587"><i className="icofont-phone"></i> 1800 31300 1566</a>
                      </li>
                      <li><i className="icofont-google-map"></i> Sanjay Ghodawat University,Atigre 416 118,Kolhapur</li>
                    </ul>
                  </div>
                  <div className="kidba-sidebar-info-social-331">
                   
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
      <div className={`offwrap ${isSidebarOpen ? 'open' : ''}`} onClick={handleSidebarClose}></div>
    </>
  );
};

export default SidebarSection;
