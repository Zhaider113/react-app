
import React, { useEffect, useState } from "react";
import { Col, Row, Card } from '@themesberg/react-bootstrap';

import { ClientProposal, ProjectTrackerCounts } from "../../components/Widgets";

const Proposal =  () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [proposals, setProposal] = useState([])
  const [totalProposals, setTotalProposal] = useState("")

  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch(`http://16.171.150.73/api/v1/getAllMyProposals/${user._id}`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        console.log(result);
        let data = JSON.parse(result);
        console.log(data);
        setProposal(data.jobProposals);
        let tottalProposal = 0;
        data.jobProposals.forEach(element => {
          if(element.proposals?.length > 0){
              tottalProposal = tottalProposal + element.proposals.length
          }
        });
        setTotalProposal(tottalProposal);
      })
      .catch(error => console.log('error', error));
  }, [user._id]);
  return (
    <>
      <Row className="mt-4 p-3">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Proposals</h1>
                  {/* <p className="project-subheading">That you Posted On Blockchain </p> */}
                </Col>
                
                {/* Active Jobs  */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
<<<<<<< HEAD
                      <h6 className="h2 job-like-title">Active Proposal ({totalProposals})</h6>
=======
                      <h6 className="proposal-post-title">Active Proposal ({totalProposals})</h6>
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                      {(proposals.length > 0) ? (
                        <Row className="d-flex align-items-center border-bottom border-light mt-3">
                          {proposals.map(proposal => (
                              <ClientProposal title={proposal.jobDetails.title} proposalData={proposal.proposals}/>
                          ))}
                        </Row>
                      ):(
                        <Col>
                            <p className="proposal-post-date line-height-1">
                                No Jobs Found
                            </p>
                        </Col>
                      )}
                      {/* <Row className="d-flex align-items-center border-bottom border-light mt-3">
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
                            View Activates 
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
                          <Card.Link as={Link} to={Routes.SubmitProject.path} className="proposal-submit">
                            View Activates 
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
                          <Card.Link as={Link} to={Routes.SubmitProject.path} className="proposal-submit">
                            View Activates 
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
                          <Card.Link as={Link} to={Routes.SubmitProject.path} className="proposal-submit">
                            View Activates 
                          </Card.Link>
                        </Col>
                      </Row> */}
                    </Card.Body>
                  </Card>
                </Col>
                {/* Completed Jobs */}
                {/* <Col xs={12} xl={12} md={12} className="mb-2 mt-2">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="h2 job-like-title">Completed Jobs (3)</h6>
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
                            Completed 
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
                          <Card.Link as={Link} to={Routes.SubmitProject.path} className="proposal-submit">
                            View Activates 
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
                            View Activates 
                          </Card.Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col> */}
                {/* Expired Jobs  */}
                {/* <Col xs={12} xl={12} md={12} className="mb-2 mt-2">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="h2 job-like-title">Expired Jobs (1)</h6>
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
                          <Card.Link className="proposal-submit text-danger">
                            Expired
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

export default Proposal;