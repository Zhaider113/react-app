
import React from "react";
import { Col, Row, Card, Form, Nav, Tab, Button } from '@themesberg/react-bootstrap';

import { ProjectTrackerCounts, ProposalGraph, ProjectGraph } from "../../components/Widgets";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";

const ProjectAnalytic = () => {
  return (
    <>
      <Row className="mt-4 p-3">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={8} md={8} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Project Tracker</h1>
                  <p className="project-subheading">Only you can see this</p>
                </Col>
                <Col  xs={12} xl={4} md={4} className="d-block mb-4 mb-md-0">
                    <Form.Group id="Sort">
                        <Form.Select defaultValue="1" className="custome-select">
                            <option value="0">Sort</option>
                            <option value="1">Last 7 Days</option>
                            <option value="2">Last 15 Days</option>
                            <option value="3">Last 30 Days</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {/* graph area */}
                <Col xs={12} xl={12} md={12} className="mb-4 mt-4">
                  <Tab.Container defaultActiveKey="analytics">
                    <Row>
                      <Col lg={12}>
                        <Nav fill variant="pills" className="nav-tabs">
                          <Nav.Item className="project-btn-no-flex">
                            <Nav.Link eventKey="analytics" className="mb-sm-3 mb-md-0 project-track-btn">
                              Analytics
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item className="project-btn-no-flex">
                            <Nav.Link eventKey="project_history" className="mb-sm-3 mb-md-0 project-track-btn">
                              Project History
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item className="project-btn-no-flex">
                            <Nav.Link eventKey="ongoing_projects" className="mb-sm-3 mb-md-0 project-track-btn">
                              Ongoing projects
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="analytics" className="py-4">
                            <Col xs={12} className="mb-4 mt-4">
                              <ProposalGraph />
                            </Col>
                            <Col xs={12} className="mb-4 mt-4">
                              <ProjectGraph />
                            </Col>
                          </Tab.Pane>
                          <Tab.Pane eventKey="project_history" className="py-4">
                            <Col xs={12} className="mb-4 mt-4">
                              <Card border="light" className="completed-card shadow-sm mb-4">
                                <Card.Body className="card-description">
                                  <Row>
                                  <Col xs={9} xl={9} md={9} className="project-description bg-white">
                                    <h6 className="job-title mt-2">I'm looking someone who have GP console</h6>
                                    <div className="text-muted small">
                                      <p className="posted">
                                        Fixed-price
                                        <span className="type-date">
                                        - Entry level - Est.
                                        </span> 
                                        <span className="budget"> 
                                          Budget: $100 
                                        </span>
                                        <span className="type-date">
                                        - Posted 22 minutes ago
                                        </span>
                                      </p>
                                    </div>
                                    <p className="job-detail">
                                      We are looking for an experience Android developer assist us in publishing an Android Application. The ideal candidate should have a play console account and experience in Android sdk,Kotlin, java, flutter and mobile app development. The project duration is anticipated to be less than one month. To apply for this job, please submit a proposal outlining your experience and how you can assist us with publishing the Android Application. Please include some links to past completed projects that showcase your skil5 in Android app development. We look forward to hearing from you and reviewing your proposal. Note:some of the content in this job post may have been auto-generated using advanced AI. 
                                      <Card.Link className="read-more">
                                        More...
                                      </Card.Link>
                                    </p>
                                  </Col>
                                  <Col xs={3} xl={3} md={3} className="text-center">
                                    <h6 className="job-like-title text-white pt-6">Completed</h6>
                                    <p className=" job-like-title text-white project-date">at 08.19.2022</p>
                                  </Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                              <Card border="light" className="canceled-card shadow-sm mb-4">
                                <Card.Body className="card-description">
                                  <Row>
                                  <Col xs={9} xl={9} md={9} className="project-description bg-white">
                                    <h6 className="job-title mt-2">I'm looking someone who have GP console</h6>
                                    <div className="text-muted small">
                                      <p className="posted">
                                        Fixed-price
                                        <span className="type-date">
                                        - Entry level - Est.
                                        </span> 
                                        <span className="budget"> 
                                          Budget: $100 
                                        </span>
                                        <span className="type-date">
                                        - Posted 22 minutes ago
                                        </span>
                                      </p>
                                    </div>
                                    <p className="job-detail">
                                      We are looking for an experience Android developer assist us in publishing an Android Application. The ideal candidate should have a play console account and experience in Android sdk,Kotlin, java, flutter and mobile app development. The project duration is anticipated to be less than one month. To apply for this job, please submit a proposal outlining your experience and how you can assist us with publishing the Android Application. Please include some links to past completed projects that showcase your skil5 in Android app development. We look forward to hearing from you and reviewing your proposal. Note:some of the content in this job post may have been auto-generated using advanced AI. 
                                      <Card.Link className="read-more">
                                        More...
                                      </Card.Link>
                                    </p>
                                  </Col>
                                  <Col xs={3} xl={3} md={3} className="text-center">
                                    <h6 className="job-like-title text-white pt-6">Canceled</h6>
                                    <p className=" job-like-title text-white project-date">at 08.19.2022</p>
                                  </Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                              <Card border="light" className="ongoing-card shadow-sm mb-4">
                                <Card.Body className="card-description">
                                  <Row>
                                  <Col xs={9} xl={9} md={9} className="project-description bg-white">
                                    <h6 className="job-title mt-2">I'm looking someone who have GP console</h6>
                                    <div className="text-muted small">
                                      <p className="posted">
                                        Fixed-price
                                        <span className="type-date">
                                        - Entry level - Est.
                                        </span> 
                                        <span className="budget"> 
                                          Budget: $100 
                                        </span>
                                        <span className="type-date">
                                        - Posted 22 minutes ago
                                        </span>
                                      </p>
                                    </div>
                                    <p className="job-detail">
                                      We are looking for an experience Android developer assist us in publishing an Android Application. The ideal candidate should have a play console account and experience in Android sdk,Kotlin, java, flutter and mobile app development. The project duration is anticipated to be less than one month. To apply for this job, please submit a proposal outlining your experience and how you can assist us with publishing the Android Application. Please include some links to past completed projects that showcase your skil5 in Android app development. We look forward to hearing from you and reviewing your proposal. Note:some of the content in this job post may have been auto-generated using advanced AI. 
                                      <Card.Link className="read-more">
                                        More...
                                      </Card.Link>
                                    </p>
                                  </Col>
                                  <Col xs={3} xl={3} md={3} className="text-center">
                                    <h6 className="job-like-title text-white pt-6">Ongoing</h6>
                                  </Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ongoing_projects" className="py-4">
                            <Col>
                              <Card border="light" className="shadow-sm mb-4">
                                <Card.Body>
                                  <Row>
                                  <Col xs={8} sm={8} xl={8} >
                                    <h6 className="job-title">I'm looking someone who have GP console</h6>
                                    <div className="text-muted small  mt-2">
                                      <p className="posted">
                                        Fixed-price
                                        <span className="type-date">
                                        - Entry level - Est.
                                        </span> 
                                        <span className="budget"> 
                                          Budget: $100 
                                        </span>
                                        <span className="type-date">
                                        - Posted 22 minutes ago
                                        </span>
                                      </p>
                                    </div>
                                    <p className="job-detail">
                                    We are looking for an experience Android developer assist us in publishing an Android Application. The ideal candidate should have a play console account and experience in Android sdk,Kotlin, java, flutter and mobile app development. The project duration is anticipated to be less than one month. To apply for this job, please submit a proposal outlining your experience and how you can assist us with publishing the Android Application. Please include some links to past completed projects that showcase your skil5 in Android app development. We look forward to hearing from you and reviewing your proposal. Note:some of the content in this job post may have been auto-generated using advanced AI. 
                                    <Card.Link className="read-more">
                                      More...
                                    </Card.Link>
                                    </p>
                                  </Col>
                                  <Col xs={4} sm={4} xl={4} className="mt-2">
                                    <Button as={Link} to={Routes.SubmitProject.path} className="m-1 personal-tab-update deliver-project-btn">Deliver Project</Button>
                                    <p className="job-detail">Make sure deliver the project on time...</p>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                            </Col>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Col>
              </Row>
            </Col>
            {/* Right side bar */}
            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <Card border="light" className="shadow-sm">
                    <Card.Body>
                      <ProjectTrackerCounts />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProjectAnalytic;