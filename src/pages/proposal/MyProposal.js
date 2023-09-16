
import React, { useEffect, useState } from "react";
import { Col, Row, Card } from '@themesberg/react-bootstrap';

import { ListWidget, ProjectTrackerCounts } from "../../components/Widgets";

const MyProposal = () => {
  // console.log("usr", user)
  
  
  const user = JSON.parse(localStorage.getItem('user'));
  
  // get all freelancer proposals
  const [proposal, setProposal] = useState([]);
  const getAllProposals = ()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://16.171.150.73/api/v1/getAllProposals/${user._id}`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        console.log(result);
        let data = JSON.parse(result);
        console.log(data);
        setProposal(data.proposals);

      })
      .catch(error => console.log('error', error));
  }

  // get all freelancer offers
  const [offer, setOffer] = useState([]);
  const getAllOffers = ()=>{
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    fetch(`http://16.171.150.73/api/v1/myAllOffers/${user._id}`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        console.log(result);
        let data = JSON.parse(result);
        console.log(data);
        setOffer(data.offers);

      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
      getAllProposals();
      getAllOffers();
  })
  return (
    <>
      <Row className="mt-4 p-3">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">My proposals</h1>
                  <p className="project-subheading">Only you can see this</p>
                </Col>
                {/* Offers  */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="h2 job-like-title">Offers ({offer.length})</h6>
                        </Col>
                      </Row>
                      {(offer.length > 0) ? (
                        <Row className="d-flex align-items-center border-bottom border-light mt-3">
                          {offer.map(offers => (
                            <ListWidget createdAt={offers.createdAt} postedAt={offers.deadline} heading={offers.details} itemId={offers._id} detailLink={'/offer/:id'} linkTitle={'View Offer'} />
                          ))}
                        </Row>
                        ):(
                          <Col xs={12} sm={12} xl={12} className="mb-4">
                              <p className="proposal-post-date line-height-1">
                                  No Job Found
                              </p>
                          </Col>
                        )}
                    </Card.Body>
                  </Card>
                </Col>
                {/* Submitted proposals  */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="h2 job-like-title">Submitted Proposals ({proposal.length})</h6>
                        </Col>
                      </Row>
                      {(proposal.length > 0) ? (
                        <Row className="d-flex align-items-center border-bottom border-light mt-3">
                          {proposal.map(proposal => (
                            <ListWidget createdAt={proposal.job.createdAt} postedAt={proposal.submittedAt} heading={proposal.job.title} itemId={proposal._id} detailLink={'/proposal-detail/:id'} linkTitle={'View Proposal'} />
                          ))}
                        </Row>
                        ):(
                          <Col xs={12} sm={12} xl={12} className="mb-4">
                              <p className="proposal-post-date line-height-1">
                                  No Job Found
                              </p>
                          </Col>
                        )}
                    </Card.Body>
                  </Card>
                </Col>
                {/* Active proposal */}
                {/* <Col xs={12} xl={12} md={12} className="mb-2 mt-2">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="h2 job-like-title">Active proposal (1)</h6>
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
                          <Card.Link as={Link} to={Routes.ProposalDetail.path} className="proposal-submit">
                            View Proposal
                          </Card.Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col> */}
                {/* Submitted proposals  */}
                {/* <Col xs={12} xl={12} md={12} className="mb-2 mt-2">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="h2 job-like-title">Submitted proposals (17)</h6>
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
                          <Card.Link as={Link} to={Routes.ProposalDetail.path} className="proposal-submit">
                            View Proposal
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
                          <Card.Link as={Link} to={Routes.ProposalDetail.path} className="proposal-submit">
                            View Proposal
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
                          <Card.Link as={Link} to={Routes.ProposalDetail.path} className="proposal-submit">
                            View Proposal
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
                          <Card.Link as={Link} to={Routes.ProposalDetail.path} className="proposal-submit">
                            View Proposal
                          </Card.Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col> */}
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

export default MyProposal;