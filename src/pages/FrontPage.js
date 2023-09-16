import React from "react";
import { Col, Row, Image, Button, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/rebot.png";

const FrontPage = () => {
  return (
    <>
      <section className="section-header overflow-hidden bg-image text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder logo-text">CHAINWORK</h1>
              <h2 className="frrelancer-heading">Find Freelancer</h2>
              <Col className="col-6 offset-3 text-center detail-div">
                <p className="detail-text">Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.</p>
              </Col>
              <div className="d-flex align-items-center justify-content-center">
                <Button  as={Link} to={Routes.Signup.path}  className="join-now me-3">
                  Join Now
                </Button>
              </div>
              <div className="d-flex justify-content-center flex-column">
                <div className="text-center">
                    <Image src={ThemesbergLogoIcon} className="img-fluid" alt="Themesberg Logo" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FrontPage;
