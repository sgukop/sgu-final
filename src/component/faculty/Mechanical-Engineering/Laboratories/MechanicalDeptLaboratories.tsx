'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import EquipmentsPG from './EquipmentsPG';
import EquipmentsUG from './EquipmentsUG';
import LaboratoriesCosting from './LaboratoriesCosting';
import NavLinks from '../Navlinks';
import MenuList from '../../Reusable-components/MenuList';

const MechanicalDeptLaboratories = () => {
  return (
    <div className="pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Laboratories Cost</h2>
            <div className="row">
              <MenuList dept="" subMenu={NavLinks} />
              <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row">
      <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">Laboratories Costing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="curriculum-tab">Major Equipments (UG)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="instructor-tab">Major Equipments (PG)</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
          <LaboratoriesCosting/>
        </Tab.Pane>

        <Tab.Pane eventKey="curriculum-tab">
         <EquipmentsUG/>
        </Tab.Pane>

        <Tab.Pane eventKey="instructor-tab">
         <EquipmentsPG/>
        </Tab.Pane>
    </Tab.Content>
    </Tab.Container>
    </div>
    </div>
    </div>
    </div>
    </div>
     
 
  )
}

export default MechanicalDeptLaboratories