
import React from "react";
import { Col, Row, Card, Button, Form, Alert } from '@themesberg/react-bootstrap';
import { ProjectTrackerCounts } from "../../components/Widgets";
const Notification = () => {
  const [hiddenAlerts, setHiddenAlerts] = React.useState([]);

  const onClose = (alertId) => {
    const hiddenAlertsUpdated = [...hiddenAlerts, alertId];
    setHiddenAlerts(hiddenAlertsUpdated);
  };

  const shouldShowAlert = (alertId) => (
    hiddenAlerts.indexOf(alertId) === -1
  );
  return (
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Notifications</h1>
                </Col>
                {/* Submit from  */}
                <Form className="personal-tab-form">
                  <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                    <Row className="d-flex mt-3">
                        <h1 className="mb-0 h2 job-like-title">Most Recent</h1>
                        <hr className="red-line"/>
                      <Col xs={12} sm={12} md={12} className="mt-3">
                        <Alert
                          variant="light"
                          show={shouldShowAlert("pay")}
                          onClose={() => onClose("pay")}>

                          <div className="d-flex justify-content-between">
                            <div>
                              <p className="get-paid-heading">You requested payment of $178.00 from Blockchain via Payoneer MasterCard.</p>
                              <p className="fund-subheading">2:07 PM</p>
                            </div>

                            <Button variant="close" size="sm" onClick={() => onClose("pay")} className="cross-btn">
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M11.0195 0C4.93212 0 0 4.93212 0 11.0195C0 17.1069 4.93212 22.039 11.0195 22.039C17.1069 22.039 22.039 17.1069 22.039 11.0195C22.039 4.93212 17.1069 0 11.0195 0ZM11.0195 19.9062C6.10961 19.9062 2.13281 15.9294 2.13281 11.0195C2.13281 6.10961 6.10961 2.13281 11.0195 2.13281C15.9294 2.13281 19.9062 6.10961 19.9062 11.0195C19.9062 15.9294 15.9294 19.9062 11.0195 19.9062ZM15.5429 8.25575L12.7791 11.0195L15.5429 13.7833C15.7517 13.9921 15.7517 14.3298 15.5429 14.5387L14.5387 15.5429C14.3298 15.7517 13.9921 15.7517 13.7833 15.5429L11.0195 12.7791L8.25575 15.5429C8.04691 15.7517 7.70922 15.7517 7.50038 15.5429L6.49618 14.5387C6.28735 14.3298 6.28735 13.9921 6.49618 13.7833L9.25995 11.0195L6.49618 8.25575C6.28735 8.04691 6.28735 7.70922 6.49618 7.50038L7.50038 6.49618C7.70922 6.28735 8.04691 6.28735 8.25575 6.49618L11.0195 9.25995L13.7833 6.49618C13.9921 6.28735 14.3298 6.28735 14.5387 6.49618L15.5429 7.50038C15.7517 7.70922 15.7517 8.04691 15.5429 8.25575Z" fill="black"/>
                              </svg>
                            </Button>
                          </div>
                        </Alert>
                        <Alert
                          variant="light"
                          show={shouldShowAlert("swiftUI")}
                          onClose={() => onClose("swiftUI")}>

                          <div className="d-flex justify-content-between">
                            <div>
                              <p className="get-paid-heading">Your proposal for SwiftUI App was viewed.</p>
                              <p className="fund-subheading">2:07 PM</p>
                            </div>

                            <Button variant="close" size="sm" onClick={() => onClose("swiftUI")} className="cross-btn">
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M11.0195 0C4.93212 0 0 4.93212 0 11.0195C0 17.1069 4.93212 22.039 11.0195 22.039C17.1069 22.039 22.039 17.1069 22.039 11.0195C22.039 4.93212 17.1069 0 11.0195 0ZM11.0195 19.9062C6.10961 19.9062 2.13281 15.9294 2.13281 11.0195C2.13281 6.10961 6.10961 2.13281 11.0195 2.13281C15.9294 2.13281 19.9062 6.10961 19.9062 11.0195C19.9062 15.9294 15.9294 19.9062 11.0195 19.9062ZM15.5429 8.25575L12.7791 11.0195L15.5429 13.7833C15.7517 13.9921 15.7517 14.3298 15.5429 14.5387L14.5387 15.5429C14.3298 15.7517 13.9921 15.7517 13.7833 15.5429L11.0195 12.7791L8.25575 15.5429C8.04691 15.7517 7.70922 15.7517 7.50038 15.5429L6.49618 14.5387C6.28735 14.3298 6.28735 13.9921 6.49618 13.7833L9.25995 11.0195L6.49618 8.25575C6.28735 8.04691 6.28735 7.70922 6.49618 7.50038L7.50038 6.49618C7.70922 6.28735 8.04691 6.28735 8.25575 6.49618L11.0195 9.25995L13.7833 6.49618C13.9921 6.28735 14.3298 6.28735 14.5387 6.49618L15.5429 7.50038C15.7517 7.70922 15.7517 8.04691 15.5429 8.25575Z" fill="black"/>
                              </svg>
                            </Button>
                          </div>
                        </Alert>
                        <Alert
                          variant="light"
                          show={shouldShowAlert("card")}
                          onClose={() => onClose("card")}>

                          <div className="d-flex justify-content-between">
                            <div>
                              <p className="get-paid-heading">You requested payment of $178.00 from Upwork via Payoneer MasterCard.</p>
                              <p className="fund-subheading">2:07 PM</p>
                            </div>

                            <Button variant="close" size="sm" onClick={() => onClose("card")} className="cross-btn">
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M11.0195 0C4.93212 0 0 4.93212 0 11.0195C0 17.1069 4.93212 22.039 11.0195 22.039C17.1069 22.039 22.039 17.1069 22.039 11.0195C22.039 4.93212 17.1069 0 11.0195 0ZM11.0195 19.9062C6.10961 19.9062 2.13281 15.9294 2.13281 11.0195C2.13281 6.10961 6.10961 2.13281 11.0195 2.13281C15.9294 2.13281 19.9062 6.10961 19.9062 11.0195C19.9062 15.9294 15.9294 19.9062 11.0195 19.9062ZM15.5429 8.25575L12.7791 11.0195L15.5429 13.7833C15.7517 13.9921 15.7517 14.3298 15.5429 14.5387L14.5387 15.5429C14.3298 15.7517 13.9921 15.7517 13.7833 15.5429L11.0195 12.7791L8.25575 15.5429C8.04691 15.7517 7.70922 15.7517 7.50038 15.5429L6.49618 14.5387C6.28735 14.3298 6.28735 13.9921 6.49618 13.7833L9.25995 11.0195L6.49618 8.25575C6.28735 8.04691 6.28735 7.70922 6.49618 7.50038L7.50038 6.49618C7.70922 6.28735 8.04691 6.28735 8.25575 6.49618L11.0195 9.25995L13.7833 6.49618C13.9921 6.28735 14.3298 6.28735 14.5387 6.49618L15.5429 7.50038C15.7517 7.70922 15.7517 8.04691 15.5429 8.25575Z" fill="black"/>
                              </svg>
                            </Button>
                          </div>
                        </Alert>
                      </Col>
                    </Row>
                  </Col>
                </Form>
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

export default Notification;