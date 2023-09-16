
import React from "react";
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import { ImageDrop, ProjectTrackerCounts } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link } from "react-router-dom";

const SubmitProject = () => {
  return (
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Contracts</h1>
                  <p className="project-subheading">Only you can see this</p>
                </Col>
                {/* Submit from  */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Form>
                    <Row>
                      <Col xs={12} sm={12} xl={12} >
                        <h6 className="job-like-title submit-project-heading2">3D Renders and Amazon Product Store images/Video</h6>
                      </Col>
                    </Row>
                    <Row className="d-flex mt-3">
                      <Col  xs={4} sm={3} md={3} xl={3}>
                        <h6 className="mb-0 fund-subheading">Client Final Price</h6>
                        <p className="fund-subheading mt-2">
                          <span className="price-text-danger">$19.00 </span> ( FIXED )
                        </p>
                      </Col>
                    </Row>
                    <Row className="d-flex mt-3">
                        <h6 className="mb-0 heading18">Your Payment will Be released Once The Work is Approved!</h6>
                      <Col xs={9} sm={9} md={9} className="mt-3">
                        <Form.Group className="mb-3">
                          <Form.Label className="heading18 message-lable">Message To  Clint Name</Form.Label>
                          <Form.Control as="textarea" rows="6" placeholder="Let Them Know About The work You Are Submitting" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="heading18 message-lable">Attachments (Optional)</Form.Label>
                          <ImageDrop />
                        </Form.Group>
                        <p className="text-center limit-drop-img">Size of the document should be below 100MB</p>
                      </Col>
                    </Row>
                    <Row>
                    <Col md={4} className="mt-3">
                      <Button as={Link} to={Routes.Contract.path} className=" m-1 proposal-cancelBtn">Cancel</Button>
                      <Button type="submit" as={Link} to={Routes.ProposalDetail.path} className="m-1 proposal-submitBtn">Submit</Button>
                    </Col>
                  </Row>
                  </Form>
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

export default SubmitProject;