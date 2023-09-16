
import React from "react";
import { Col, Row, Card } from '@themesberg/react-bootstrap';

import { ProjectTrackerCounts } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link } from "react-router-dom";

const Contract = () => {
  return (
    <>
      <Row className="mt-4 p-3">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Contracts</h1>
                  <p className="project-subheading">Only you can see this</p>
                </Col>
                {/* Ongoing Projects  */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="proposal-post-title">Ongoing</h6>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center border-bottom border-light mt-3">
                        <Col xs={3} sm={3} md={3}>
                          <h6 className="mb-0 proposal-post-date">Initiated Aug 4, 2023</h6>
                          <p className=" proposal-post-date proposal-post-ago">
                            3 days ago
                          </p>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                          <p className="proposal-post-date">
                            Looking for small development team for my app idea
                          </p>
                        </Col>
                        <Col xs={3} sm={3} md={3}>
                          <Card.Link as={Link} to={Routes.SubmitProject.path} className="proposal-submit">
                            Submit Project
                          </Card.Link>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center border-bottom border-light mt-3">
                        <Col xs={3} sm={3} md={3}>
                          <h6 className="mb-0 proposal-post-date">Initiated Aug 4, 2023</h6>
                          <p className=" proposal-post-date proposal-post-ago">
                            3 days ago
                          </p>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                          <p className="proposal-post-date">
                            Looking for small development team for my app idea
                          </p>
                        </Col>
                        <Col xs={3} sm={3} md={3}>
                          <Card.Link href="#" className="proposal-submit">
                            Submit Project
                          </Card.Link>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center border-bottom border-light mt-3">
                        <Col xs={3} sm={3} md={3}>
                          <h6 className="mb-0 proposal-post-date">Initiated Aug 4, 2023</h6>
                          <p className=" proposal-post-date proposal-post-ago">
                            3 days ago
                          </p>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                          <p className="proposal-post-date">
                            Looking for small development team for my app idea
                          </p>
                        </Col>
                        <Col xs={3} sm={3} md={3}>
                          <Card.Link href="#" className="proposal-submit">
                            Submit Project
                          </Card.Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Submited */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-2">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="proposal-post-title">Submitted</h6>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center border-bottom border-light mt-3">
                        <Col xs={3} sm={3} md={3}>
                          <h6 className="mb-0 proposal-post-date">Initiated Aug 4, 2023</h6>
                          <p className=" proposal-post-date proposal-post-ago">
                            3 days ago
                          </p>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                          <p className="proposal-post-date">
                            Looking for small development team for my app idea
                          </p>
                        </Col>
                        <Col xs={3} sm={3} md={3}>
                          <Card.Link as={Link} to={Routes.Offer.path}  className="proposal-submit">
                            Review or Re Submit
                          </Card.Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Responsive */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-2">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="proposal-post-title">Responsive</h6>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center border-bottom border-light mt-3">
                        <Col xs={3} sm={3} md={3}>
                          <h6 className="mb-0 proposal-post-date">Initiated Aug 4, 2023</h6>
                          <p className=" proposal-post-date proposal-post-ago">
                            3 days ago
                          </p>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                          <p className="proposal-post-date">
                            Looking for small development team for my app idea
                          </p>
                        </Col>
                        <Col xs={3} sm={3} md={3}>
                          <Card.Link as={Link} to={Routes.Chat.path} href="#" className="proposal-submit">
                            Send Message
                          </Card.Link>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center border-bottom border-light mt-3">
                        <Col xs={3} sm={3} md={3}>
                          <h6 className="mb-0 proposal-post-date">Initiated Aug 4, 2023</h6>
                          <p className=" proposal-post-date proposal-post-ago">
                            3 days ago
                          </p>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                          <p className="proposal-post-date">
                            Looking for small development team for my app idea
                          </p>
                        </Col>
                        <Col xs={3} sm={3} md={3}>
                          <Card.Link as={Link} to={Routes.Chat.path} href="#" className="proposal-submit">
                            Send Message
                          </Card.Link>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center border-bottom border-light mt-3">
                        <Col xs={3} sm={3} md={3}>
                          <h6 className="mb-0 proposal-post-date">Initiated Aug 4, 2023</h6>
                          <p className=" proposal-post-date proposal-post-ago">
                            3 days ago
                          </p>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                          <p className="proposal-post-date">
                            Looking for small development team for my app idea
                          </p>
                        </Col>
                        <Col xs={3} sm={3} md={3}>
                          <Card.Link as={Link} to={Routes.Chat.path} href="#" className="proposal-submit">
                            Send Message
                          </Card.Link>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center border-bottom border-light mt-3">
                        <Col xs={3} sm={3} md={3}>
                          <h6 className="mb-0 proposal-post-date">Initiated Aug 4, 2023</h6>
                          <p className=" proposal-post-date proposal-post-ago">
                            3 days ago
                          </p>
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                          <p className="proposal-post-date">
                            Looking for small development team for my app idea
                          </p>
                        </Col>
                        <Col xs={3} sm={3} md={3}>
                          <Card.Link as={Link} to={Routes.Chat.path} href="#" className="proposal-submit">
                            Send Message
                          </Card.Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
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

export default Contract;