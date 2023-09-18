
import React, {useEffect, useState} from "react";
import { Col, Row, Card, Button, Badge, Image } from '@themesberg/react-bootstrap';
import { ProjectTrackerCounts } from "../../components/Widgets";
<<<<<<< HEAD
import {  generatePath, useHistory, useParams } from "react-router-dom";
import { faComment, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cogoToast from 'cogo-toast';


const ProposalDetail = () => {
  const history = useHistory();
  // let proposal = JSON.parse(localStorage.getItem('proposal'));
  let {id} = useParams();
=======

import {  useHistory } from "react-router-dom";
import { faComment, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProposalDetail = () => {
  const history = useHistory();
  let proposal = JSON.parse(localStorage.getItem('proposal'));
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
  // const user = JSON.parse(localStorage.getItem('user'));

  const [proposalData, setProposal] = useState([])
  const [jobData, setJob] = useState([])
  const regex = /(<([^>]+)>)/ig;
  const removeTags =(text)=>{
      if(text !== undefined && text !== ''){
          return text.replace(regex, '');
        }
    } 
    
    const [freelancerDetail, setFreelancer] = useState([]);
    const [freelancerSkill, setSkill] = useState([])

<<<<<<< HEAD
  const getFreelancer = (frelancerId)=>{
=======
  const getFreelancer = (id)=>{
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
<<<<<<< HEAD
      fetch(`http://16.171.150.73/api/v1/UserProfile/${frelancerId}`, requestOptions)
=======
      fetch(`http://16.171.150.73/api/v1/UserProfile/${id}`, requestOptions)
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            setFreelancer(data.data)
            setSkill(data.data.skills)
        })
        .catch(error => console.log('error', error));
  }

  const HireFreelancer = (jobId, freelancerId) =>{
    if(jobId && freelancerId){
<<<<<<< HEAD
        history.push(generatePath('/hire/:jobId/:freelancerId', { jobId: jobId, freelancerId: freelancerId }));
      // localStorage.removeItem('freelancerId');
      // localStorage.setItem('freelancerId', JSON.stringify({"id":freelancerId}));
      // localStorage.removeItem('jobId');
      // localStorage.setItem('jobId', JSON.stringify({"id":jobId}));
      // history.push('/hire');
=======
      localStorage.removeItem('freelancerId');
      localStorage.setItem('freelancerId', JSON.stringify({"id":freelancerId}));
      localStorage.removeItem('jobId');
      localStorage.setItem('jobId', JSON.stringify({"id":jobId}));
      history.push('/hire');
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
    }
  }
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
<<<<<<< HEAD
    fetch(`http://16.171.150.73/api/v1/getSingleProposal/${id}`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        let data = JSON.parse(result);
        if(data.success){
          setProposal(data.proposal);
          setJob(data.proposal.job);
          getFreelancer(data.proposal.bidder);
        }else{
          cogoToast.error("Proposal Not Found...!",{
            position: 'top-right',
            hideAfter: 3,
          });
          history.push("/client-proposal")
        }
      })
      .catch(error => {
        cogoToast.error(error.message,{
          position: 'top-right',
          hideAfter: 3,
        });
        history.push('/client-proposal');
      });
  }, [history, id]);
=======
    fetch(`http://16.171.150.73/api/v1/getSingleProposal/${proposal.id}`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        let data = JSON.parse(result);
        console.log(data)
        setProposal(data.proposal);
        setJob(data.proposal.job);
        getFreelancer(data.proposal.bidder);
      })
      .catch(error => {
        console.log(error, "Error")
        history.push('/proposal');
      });
  }, [history, proposal.id]);
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
  return (
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Proposal details</h1>
                  {/* <p className="project-subheading">Only you can see this</p> */}
                </Col>
                {/* Submit from  */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Row>
                    <Col xs={12} sm={12} xl={12} >
                      <h6 className="job-like-title submit-project-heading2">{jobData.title}</h6>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                    <Col xs={4} sm={3} md={2} xl={2}>
                      <h6 className="mb-0 fund-subheading">Job Type</h6>
                      <p className="fund-subheading text-danger mt-1">
                        {jobData.type}
                      </p>
                    </Col>
                    {/* <Col  xs={4} sm={3} md={2} xl={2}>
                      <h6 className="mb-0 fund-subheading">Location</h6>
                      <p className="fund-subheading mt-2">
                        {jobCountry === 'Add Country'?'Not Shown': jobCountry}
                      </p>
                    </Col> */}
                    <Col  xs={4} sm={3} md={3} xl={3}>
                      <h6 className="mb-0 fund-subheading">Final Price</h6>
                      <p className="fund-subheading mt-2">
                        <span className="price-text-danger">${jobData.budget} </span> ( FIXED )
                      </p>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">You'll Receive</h4>
                      <hr className="red-line  border-bottom"/>
<<<<<<< HEAD
                    <Col xs={12} sm={12} md={12} className="mt-3">
=======
                    <Col xs={12} sm={12} md={12} >
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                      <p className="withdrwa-subheading">The estimated payment, after service fees.</p>
                      <p className="withdrwa-subheading text-light-blue">${proposalData.totalPriceAfterFee}</p>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">Cover Letter</h4>
                      <hr className="red-line"/>
<<<<<<< HEAD
                    <Col xs={12} sm={12} md={12}  className="mt-3">
=======
                    <Col xs={12} sm={12} md={12} >
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                      <p className="proposal-detail">{removeTags(proposalData.additionalInfo)}</p>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">About Freelancer</h4>
                      <hr className="red-line  border-bottom"/>
<<<<<<< HEAD
                    <Col xs={12} sm={12} md={12}  className="mt-3">
=======
                    <Col xs={12} sm={12} md={12} >
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                      {/* <StarReviewComponent /> */}
                      <Row>
                        <Col xs={1} sm={1} md={1} >
                            <Image src={freelancerDetail.profilImage} className="user-avatar md-avatar rounded-circle" />
                        </Col>
                        <Col xs={9} sm={9} md={9} >
                            <p className="review-text">
                                {freelancerDetail.username}  
                            </p>
                            <p  className="review-text-gry"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />{freelancerDetail.country} </p> 
                        </Col>
                      </Row>
                      {/* <p className="review-text">
                        {jobPosted.length} Jobs Posted  <span className="review-text-gry">80% Hire Rate, 1 Job Open</span> 
                      </p>
                      <p className="review-text">
                        $ 200M+ Total Spent   <span className="review-text-gry"> 372 Hires, 55 Active</span> 
                      </p> */}
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">Skills Required </h4>
                      <hr className="red-line  border-bottom"/>
<<<<<<< HEAD
                      <Col xs={12} sm={12} md={12}  className="mt-3">
=======
                      <Col xs={12} sm={12} md={12} >
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                        {freelancerSkill.map((item, i) => (
                          <Badge className="me-1 bg-light-red">{item}</Badge>
                        ))}
                      </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                    <Col md={12} className="mt-3">
                      <Button className="m-1 proposal-cancelBtn"><FontAwesomeIcon icon={faComment} className="me-1 "/>Message</Button>
                      <Button onClick={()=>HireFreelancer(jobData._id, freelancerDetail._id)} className=" m-1 proposal-submitBtn">Hire</Button>
                    </Col>
                  </Row>
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

export default ProposalDetail;