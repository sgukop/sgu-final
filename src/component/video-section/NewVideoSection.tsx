import React from 'react'
import { Nav, Tab } from "react-bootstrap";

const NewVideoSection = () => {
    return (
        <section className="tl-7-categories tl-7-section-spacing">
            <div className="container">
                <div className="tl-7-section-heading tl-7-categories-heading">
                    <h2 className="tl-2-section-title text-center">
                        SGU <span className="last-word"> Videos</span>
                    </h2>
                </div>

                <div className="tl-7-categories-row pt-20">
                    <Tab.Container defaultActiveKey="tl-7-cat-1-tab">
                        <Nav variant="tabs" className="nav nav-tabs" id="myTab" role="tablist">
                            <Nav.Item>
                                <Nav.Link eventKey="tl-7-cat-1-tab">
                                    <span className="tl-7-cate-title">The Blueprint of Success Mr. Sanjay Ghodawat TEDxWCE Sangli</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tl-7-cat-2-tab">
                                    <span className="tl-7-cate-title">Sanjay Ghodawat University Video</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tl-7-cat-3-tab">
                                    <span className="tl-7-cate-title">SGU LIVE 6th Convocation Ceremony</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tl-7-cat-4-tab">
                                    <span className="tl-7-cate-title">Chairman Sanjay Ghodawat Birthday Massage for Student</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content" id="myTabContent">
                            <Tab.Pane eventKey="tl-7-cat-1-tab">
                                <iframe width="600" height="500" src="https://www.youtube.com/embed/v4G_a-R0Q48" title="The Blueprint of Success  Mr. Sanjay Ghodawat   TEDxWCE Sangli" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tl-7-cat-2-tab">
                                <iframe width="600" height="500" src="https://www.youtube.com/embed/wKRok_xGZEg" title="SGUniversity Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tl-7-cat-3-tab">
                                <iframe width="600" height="500" src="https://www.youtube.com/watch?v=Yl0qiKudiRk" title="Invitation for 5th Convocation Ceremony" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tl-7-cat-4-tab">
                                <iframe width="600" height="500" src="https://www.youtube.com/embed/yGhURLZxdFs" title="Chairman Sanjay Ghodawat Birthday Massage for Student" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </section>
    )
}

export default NewVideoSection