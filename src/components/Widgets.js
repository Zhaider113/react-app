
import React,  { useState }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Image, Button, ListGroup, Badge, Alert, Modal, Pagination, Form, InputGroup  } from '@themesberg/react-bootstrap';
import {useDropzone} from 'react-dropzone';

import teamMembers from "../data/teamMembers";
import { Link, generatePath, useHistory } from "react-router-dom";
import { Routes } from "../routes";
import newMembers from "../data/newMembers";
import moment from "moment";
  


/* *************Home page Widgets ***********/

// home page welcome message
export const WelcomeWidget = () => {
  return (
    <Card border="light" className="shadow-sm welcome-msg">
      <Card.Body className="bg-cup">
        <Row>
        <Col xs={8} sm={8} xl={8} >  
          <h5>Good Morning Chain Worker</h5>
          <p>Track your progress in blockchain industry.You'll get a lot of other perks too! grow your network and market your skills.</p>
        </Col>
        </Row>
        <Button variant="primary" size="sm" as={Link} to={Routes.JobFind.path}>Find Project!</Button>
      </Card.Body>
    </Card>
  );
};

// home page job listing wedget
export const JobWidget = (props) => {
  const {title, budget, createdAt, description, skills, type} =  props;
  const regex = /(<([^>]+)>)/ig;
  const removeTags =(text)=>{
    if(text !== undefined && text !== ''){
      return text.replace(regex, '');
    }
  } 
  return (
    <Card border="light" className="shadow-sm mt-3">
      <Card.Body>
        <Row>
          <Col xs={12} sm={12} xl={12} >
            <h6 className="job-title">{title}</h6>
            <div className="text-muted small  mt-2">
              <p className="posted">
                <span className="pe-1"> 
                  {type}
                </span>
                {/* <span className="type-date">
                - Entry level - Est.
                </span>  */}
                <span className="budget"> 
                  Budget: ${budget} 
                </span>
                <span className="type-date">
                - Posted {moment(new Date(createdAt)).fromNow()}
                </span>
              </p>
            </div>
          </Col>
          {/* <Col xs={2} sm={2} xl={2} >
            <Card.Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#363636"/>
                <path d="M13.6347 5.37997C12.0732 3.23093 8.99979 4.49871 8.99979 6.68089C8.99979 4.49834 5.92604 3.23019 4.36414 5.37961C2.75033 7.60117 4.34132 11.4936 8.99979 13.7295C13.6579 11.4936 15.2492 7.60117 13.6347 5.37997Z" fill="white"/>
              </svg>
            </Card.Link>
          </Col> */}
        </Row>
        <Row>
          <Col xs={12} sm={12} xl={12}>
            <p className="job-detail">
              {removeTags(description)}
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} xl={12}>
            {skills.map((item, i) => (
              <Button variant="light" className="m-1 tech-btn">{item}</Button>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// home page job listing wedget
export const FreelancerJobWidget = (props) => {
  const {title, budget, createdAt, description, skills} =  props;
  const regex = /(<([^>]+)>)/ig;
  const removeTags =(text)=>{
    if(text !== undefined && text !== ''){
      return text.replace(regex, '');
    }
  } 
  return (
    <Card border="light" className="shadow-sm ">
      <Card.Body>
        <Row>
          <Col xs={10} sm={10} xl={10} >
            <h6 className="job-title">{title}</h6>
            <div className="text-muted small  mt-2">
              <p className="posted">
                Fixed-price
                <span className="type-date">
                - Entry level - Est.
                </span> 
                <span className="budget"> 
                  Budget: ${budget} 
                </span>
                <span className="type-date">
                - Posted {moment(new Date(createdAt)).fromNow()}
                </span>
              </p>
            </div>
          </Col>
          <Col xs={2} sm={2} xl={2} >
            <Card.Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#363636"/>
                <path d="M13.6347 5.37997C12.0732 3.23093 8.99979 4.49871 8.99979 6.68089C8.99979 4.49834 5.92604 3.23019 4.36414 5.37961C2.75033 7.60117 4.34132 11.4936 8.99979 13.7295C13.6579 11.4936 15.2492 7.60117 13.6347 5.37997Z" fill="white"/>
              </svg>
            </Card.Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} xl={12}>
            <p className="job-detail">
              {removeTags(description)}
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} xl={12}>
            {skills.map((item, i) => (
              <Button variant="light" className="m-1 tech-btn">{item}</Button>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// home page alert show progress report right sidebar
export const AlertNotice = () => {
  return (
    <>
      <Row className="mb-5">
        <Alert className="daily-progress-box text-center">
            <h3 className="progress-count">82%</h3>
            <h5 className="progress-heading">Your Daily Progress</h5>
            <p className="progress-detail">20% Increase from Last Week</p>
        </Alert>
        <Alert className="rq-progress-box text-center">
            <h3 className="progress-count">02</h3>
            <h5 className="progress-heading">Reflection Questions for Blockchain</h5>
            <p className="progress-detail">15% Increase from Last Month</p>
        </Alert>
        <Alert className="faq-progress-box text-center">
            <h3 className="progress-count">05</h3>
            <h5 className="progress-heading">FAQ for blockchain Freelancer</h5>
            <p className="progress-detail">5% Increase from Last Week</p>
        </Alert>
      </Row>
    </>
  );
};

// home page Calender widget
export const CurrentCalender = () =>{
  return (    
    <>
      <Row className="mt-3 mb-5">
        <Badge className="me-1 calender-date">
          <p className="cal-day">MON</p>
          <p className="cal-date">16</p>     
        </Badge>
        <Badge className="me-1 calender-date">
          <p className="cal-day">TUE</p>
          <p className="cal-date">17</p>     
        </Badge>
        <Badge className="me-1 calender-date">
          <p className="cal-day">WED</p>
          <p className="cal-date">18</p>     
        </Badge>
        <Badge className="me-1 calender-date today-date">
          <p className="cal-day">THU</p>
          <p className="cal-date">19</p>     
        </Badge>
        <Badge className="me-1 calender-date">
          <p className="cal-day">FRI</p>
          <p className="cal-date">20</p>     
        </Badge>
        <Badge className="me-1 calender-date">
          <p className="cal-day">SAT</p>
          <p className="cal-date">21</p>     
        </Badge>
        <Badge className="me-1 calender-date">
          <p className="cal-day">SUN</p>
          <p className="cal-date">22</p>     
        </Badge>
      </Row>
    </>
  )
}

// home page job listing widget
export const ProjectList = (props) => {
  return (
    <ListGroup.Item className="mt-3">
      <Row className="align-items-center ">
        <Col className="col-auto">
          <Badge className="me-1 upcoming-project-end-date">20</Badge>
        </Col>
        <Col className="ps-0 ms--2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="h6 mb-0 text-small upcoming-project-title">Blockchain Workshop</h4>
            </div>
            <div className="text-end">
              <small className="upcoming-project-time">04:00 PM</small>
            </div>
          </div>
          <p className="font-small mt-1 mb-0 upcoming-project-client">8 of 12 sessions, Mr.Nakamoto</p>
        </Col>
      </Row>
      <Row className="align-items-center mt-3">
        <Col className="col-auto">
          <Badge className="me-1 upcoming-project-end-date">20</Badge>
        </Col>
        <Col className="ps-0 ms--2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="h6 mb-0 text-small upcoming-project-title">Blockchain Workshop</h4>
            </div>
            <div className="text-end">
              <small className="upcoming-project-time">04:00 PM</small>
            </div>
          </div>
          <p className="font-small mt-1 mb-0 upcoming-project-client">8 of 12 sessions, Mr.Nakamoto</p>
        </Col>
      </Row>
      <Row className="align-items-center mt-3">
        <Col className="col-auto">
          <Badge className="me-1 upcoming-project-end-date">20</Badge>
        </Col>
        <Col className="ps-0 ms--2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="h6 mb-0 text-small upcoming-project-title">Blockchain Workshop</h4>
            </div>
            <div className="text-end">
              <small className="upcoming-project-time">04:00 PM</small>
            </div>
          </div>
          <p className="font-small mt-1 mb-0 upcoming-project-client">8 of 12 sessions, Mr.Nakamoto</p>
        </Col>
      </Row>
      <Row className="align-items-center mt-3">
        <Col className="col-auto">
          <Badge className="me-1 upcoming-project-end-date">20</Badge>
        </Col>
        <Col className="ps-0 ms--2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="h6 mb-0 text-small upcoming-project-title">Blockchain Workshop</h4>
            </div>
            <div className="text-end">
              <small className="upcoming-project-time">04:00 PM</small>
            </div>
          </div>
          <p className="font-small mt-1 mb-0 upcoming-project-client">8 of 12 sessions, Mr.Nakamoto</p>
        </Col>
      </Row>
      <Row className="align-items-center mt-3">
        <Col className="col-auto">
          <Badge className="me-1 upcoming-project-end-date">20</Badge>
        </Col>
        <Col className="ps-0 ms--2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="h6 mb-0 text-small upcoming-project-title">Blockchain Workshop</h4>
            </div>
            <div className="text-end">
              <small className="upcoming-project-time">04:00 PM</small>
            </div>
          </div>
          <p className="font-small mt-1 mb-0 upcoming-project-client">8 of 12 sessions, Mr.Nakamoto</p>
        </Col>
      </Row>
      <Row className="align-item-center mt-3">
        <Card.Link as={Link} to={Routes.JobFind.path} className="text-info text-center fw-bold">
            View All
        </Card.Link>
      </Row>
    </ListGroup.Item>
  );
};

/* *************Project Tracker page Widgets ***********/
// Project Right side counter
export const ProjectTrackerCounts = () => {
  return (
    <>
      <Row className="mb-5">
        <Alert className="daily-progress-box text-center">
            <h3 className="progress-count">98%</h3>
            <h5 className="progress-heading">Job Success score</h5>
            <p className="progress-detail">20% Increase from Last Week</p>
        </Alert>
        <Alert className="rq-progress-box text-center">
            <h3 className="progress-count">$ 1200.00</h3>
            <h5 className="progress-heading">12-month earnings</h5>
            <p className="progress-detail">15% Increase from Last Month</p>
        </Alert>
        <Alert className="faq-progress-box text-center">
            <h3 className="progress-count">100%</h3>
            <h5 className="progress-heading">Long-term clients</h5>
            <p className="progress-detail">5% Increase from Last Week</p>
        </Alert>
      </Row>
      <Row>
        <Col xs={10} xl={10} md={10}>
            <h2 className="progress-heading">Clients who would recommend you</h2>
        </Col>
        <Col xs={2} xl={2} md={2}>
            <h2 className="progress-heading project-count-no">12</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={9} xl={9} md={9}>
            <h2 className="progress-heading">Top Rated eligible weeks</h2>
        </Col>
        <Col xs={3} xl={3} md={3}>
            <h2 className="progress-heading  project-count-no">14 of 16</h2>
        </Col>
      </Row>
      {/* My Badge */}
      {/* <Row>
        <Col xs={12} xl={12} md={12} className="mt-4 text-center">
            <h2 className="progress-heading project-badge-title">My Badges</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="148" height="199" viewBox="0 0 148 199" fill="none">
              <path d="M0 13C0 5.8203 5.8203 0 13 0H135C142.18 0 148 5.8203 148 13V141.133C148 145.43 145.877 149.449 142.328 151.871L81.3279 193.499C76.9082 196.515 71.0918 196.515 66.6721 193.499L5.67212 151.871C2.12307 149.449 0 145.43 0 141.133V13Z" fill="#09162D"/>
              <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0 131.612L148 25.1499V141.133C148 145.43 145.877 149.449 142.328 151.871L81.3279 193.499C76.9082 196.516 71.0918 196.516 66.6721 193.499L5.67212 151.871C2.12307 149.449 0 145.43 0 141.133V131.612Z" fill="#959595"/>
              <text x="50%" y="20%" dominant-baseline="middle" text-anchor="middle" class="svg-text">TOP RATED</text>
            </svg>
        </Col>
      </Row> */}
    </>
  );
};

// Project Tracker graph
export const ProposalGraph = () => {
  // var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  // const options = {
  //   axisX: {
	// 		labelMaxWidth: 70,
	// 		labelWrap: false,   // change it to false
	// 		interval: 1,
	// 		labelFormatter: function ( e ) {
  //       var ret;
  //       switch(e.value){
  //         case 0:
  //           ret = "Hired 8";
  //           break;
  //         case 1:
  //           ret = "Interviewed 13";
  //           break;
  //         case 2:
  //           ret = "Viewed 18";
  //           break;
  //         case 3:
  //           ret = "Send 141";
  //           break;
  //         default:
  //           ret = '';
  //       }
  //             return ret; 
  //     }
	// 	},
  //   axisY: {
  //     labelWrap: false,
  //     labelFormatter: function(){
  //       return " ";
  //     },
  //     gridThickness: 0,
  //   tickLength: 0,
  //   // lineThickness: 0,
  //     stripLines: [
  //       {
  //         value: 0,
  //         showOnTop: true,
  //         color: "gray",
  //         thickness: 2,
  //       }
  //     ]
  //   },
  //     data: [
  //     {
  //       type: "stackedBar",
  //       color: "#5500FF",
  //       borderRadius: 10,
  //        dataPoints: [
  //         {  y: 60 },
  //         {  y: 70},
  //         {  y: 80 },
  //         {  y: 90 }

  //       ]
  //     },
  //       {
  //       type: "stackedBar",
  //       color: "#F47514",
  //       borderRadius: 10,
  //        dataPoints: [
  //       {  y: 40 },
  //       {  y: 50},
  //       {  y: 60 },
  //       {  y: 70 }

  //       ]
  //     },

  //     ]
  // }
  return (
    <Card border="light" className="shadow-sm project-border">
      <Card.Body>
        <Row>
          <Col xs={8} sm={8} xl={8} >
            <h6 className="job-like-title">Proposals</h6>
            {/* <CanvasJSChart options = {options}/> */}
          </Col>
          <Col xs={4} sm={4} xl={4} >
            <h6 className="project-count-heading">141 Total Proposals </h6>
            <p className="project-count-subheading">In the last 7 days</p>
            {/* <p className="project-count-subheading">
              <Button size="sm" className="proposal-btn o-btn"></Button>
              Organic proposal
            </p>
            <p className="project-count-subheading">
              <Button size="sm" className="proposal-btn b-btn"></Button>
              Boosted proposal
            </p> */}
            <p className="project-count-subheading">37 Connects spent on boosting proposals</p>
            <p className="project-count-subheading">Increase your odds of getting hired by boosting your next proposal.</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Project Graph 
export const ProjectGraph = () => {
  // var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  // const options = {
  //   axisX: {
	// 		labelMaxWidth: 70,
	// 		labelWrap: false,   // change it to false
	// 		interval: 1,
	// 		labelFormatter: function ( e ) {
  //       var ret;
  //       switch(e.value){
  //         case 0:
  //           ret = "Completed 6";
  //           break;
  //         case 1:
  //           ret = "Canceled 2";
  //           break;
  //         case 2:
  //           ret = "Total 8";
  //           break;
  //         default:
  //           ret = '';
  //       }
  //             return ret; 
  //     }
	// 	},
  //   axisY: {
  //     labelWrap: false,
  //     labelFormatter: function(){
  //       return " ";
  //     },
  //     gridThickness: 0,
  //   tickLength: 0,
  //   // lineThickness: 0,
  //     stripLines: [
  //       {
  //         value: 0,
  //         showOnTop: true,
  //         color: "gray",
  //         thickness: 2,
  //       }
  //     ]
  //   },
  //     data: [
  //     {
  //       type: "stackedBar",
  //       color: "#695EEF",
  //       borderRadius: 10,
  //        dataPoints: [
  //         {  y: 80 },
  //         {  y: 60},
  //         {  y: 90 },

  //       ]
  //     },
  //     ]
  // }
  return (
    <Card border="light" className="shadow-sm ">
      <Card.Body>
        <Row>
          <Col xs={8} sm={8} xl={8} >
            <h6 className="job-like-title">Projects</h6>
            {/* <CanvasJSChart options = {options}/> */}
          </Col>
          <Col xs={4} sm={4} xl={4} >
            <h6 className="project-count-heading">8 Total Projects </h6>
            <p className="project-count-subheading">In the last 7 days</p>
            
            <p className="project-count-subheading">37 Connects spent on boosting proposals</p>
            <p className="project-count-subheading">Increase your odds of getting hired by boosting your next proposal.</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Find Job List 
export const ProposalWidget = (props) => {
  const {proposalId, jobTitle, submittedAt, jobCreatedAt} =  props;
  const history = useHistory();

  const ViewProposal = (id)=>{
    if(id){
      localStorage.removeItem('proposal');
      localStorage.setItem('proposal', JSON.stringify({"id":id}));
      history.push('/proposal-detail');
    }
  }
  return (
    <>
      <Col xs={3} sm={3} md={3}>
        <h6 className="mb-0 proposal-post-date">{moment(new Date(submittedAt)).format('MMMM Do YYYY')}</h6>
        <p className=" proposal-post-date proposal-post-ago">
          {moment(new Date(jobCreatedAt)).fromNow()}
        </p>
      </Col>
      <Col xs={6} sm={6} md={6}>
        <p className="proposal-post-date">
          {jobTitle}
        </p>
      </Col>
      <Col xs={3} sm={3} md={3}>
        <Card.Link onClick={()=>{ViewProposal(proposalId)}} className="proposal-submit font-500">
          View Proposal
        </Card.Link>
      </Col>
    </>
  );
};

// Find Offers List 
export const ListWidget = (props) => {
  const {createdAt, postedAt, heading, itemId, detailLink, linkTitle} =  props;
  const history = useHistory();

  const ViewOffer = (id, url)=>{
    if(id){
        history.push(generatePath(url, { id }));
    }
  }
  return (
    <>
      <Col xs={3} sm={3} md={3}>
        <h6 className="mb-0 proposal-post-date">{moment(createdAt).format('MMMM Do YYYY')}</h6>
        <p className=" proposal-post-date proposal-post-ago">
          {moment(new Date(postedAt)).fromNow()}
        </p>
      </Col>
      <Col xs={6} sm={6} md={6}>
        <p className="proposal-post-date">
          {heading}
        </p>
      </Col>
      <Col xs={3} sm={3} md={3}>
        <Card.Link onClick={()=>{ViewOffer(itemId, detailLink)}}  className="proposal-submit font-500">
          {linkTitle}
        </Card.Link>
      </Col>
    </>
  );
};

// Image Dropbox 
export const ImageDrop = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <section className="container">
        <aside>
          <ul>{files}</ul>
        </aside>
        <div {...getRootProps({className: 'dropzone submit-proposal-img'})}>
          <input {...getInputProps()} />
          <p className="mt-4 text-center proposal-post-date font-encode ">Drag or <span className="text-light-blue">upload</span> project file</p>
        </div>
      </section>
    </>
  )
};

// Star Review Component
export const StarReviewComponent = () => {
  let star = 4;
  let review = 12;
  const ratingArr = Array.from({length:5}, (elem, index) =>{
    let number = index + 0.5;
    return(
        <span key={index} className="me-2"> 
            { star >= index+1 ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M7.18282 0.566009L5.30039 4.7731L1.08871 5.44993C0.333435 5.57067 0.0307471 6.59703 0.578468 7.18488L3.62552 10.4578L2.90484 15.0811C2.77511 15.9168 3.57363 16.5428 4.24243 16.152L8.01017 13.969L11.7779 16.152C12.4467 16.5396 13.2452 15.9168 13.1155 15.0811L12.3948 10.4578L15.4419 7.18488C15.9896 6.59703 15.6869 5.57067 14.9316 5.44993L10.7199 4.7731L8.83752 0.566009C8.50024 -0.183896 7.52299 -0.193429 7.18282 0.566009Z" fill="#ECAC07"/>
              </svg>) : star >= number ? ( <faStarHalfAlt clasName="icon" />) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M7.04903 0.566009L5.1666 4.7731L0.954923 5.44993C0.199646 5.57067 -0.103042 6.59703 0.444678 7.18488L3.49173 10.4578L2.77105 15.0811C2.64133 15.9168 3.43984 16.5428 4.10864 16.152L7.87638 13.969L11.6441 16.152C12.3129 16.5396 13.1114 15.9168 12.9817 15.0811L12.261 10.4578L15.3081 7.18488C15.8558 6.59703 15.5531 5.57067 14.7978 5.44993L10.5862 4.7731L8.70373 0.566009C8.36645 -0.183896 7.3892 -0.193429 7.04903 0.566009Z" fill="#CBCBCB"/>
              </svg>
              )}
        </span>
    );
  })
  return (
      <>
          <Row>
              <p className="review-text">
                  { ratingArr }
                  5 of {review} Review
              </p>
          </Row>
      </>
  );
};

// Add new Input for link 
export const AddLinkInput = () =>{
  const [inputList, setInputList] = useState([{ link: "" }]);
 
  // handle input change
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = value;
  //   setInputList(list);
  // };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { link: "" }]);
  };
 
  return (
    <div className="App">
      <h5>Add Links</h5>
      <Row>
        <Col xs={10} sm={10} xl={10} md={10}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Past link here" className=" project-count-subheading" />
          </Form.Group>
        </Col>
        <Col xs={2} sm={2} xl={2} md={2}>
            <Button type="button" onClick={handleAddClick} className="m-1 proposal-submitBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M15.6247 6.61047H10.2162V1.2019C10.2162 0.538227 9.67795 0 9.01428 0H7.81237C7.1487 0 6.61047 0.538227 6.61047 1.2019V6.61047H1.2019C0.538227 6.61047 0 7.1487 0 7.81237V9.01428C0 9.67795 0.538227 10.2162 1.2019 10.2162H6.61047V15.6247C6.61047 16.2884 7.1487 16.8267 7.81237 16.8267H9.01428C9.67795 16.8267 10.2162 16.2884 10.2162 15.6247V10.2162H15.6247C16.2884 10.2162 16.8267 9.67795 16.8267 9.01428V7.81237C16.8267 7.1487 16.2884 6.61047 15.6247 6.61047Z" fill="white"/>
              </svg>
            </Button>
        </Col>
      </Row>
      {inputList.map((x, i) => {
        return (
          <li>
            <Row>
              <Col xs={8} sm={8} md={8} className="mt-3">
                {x.link}
              </Col>
              <Col xs={4} sm={4} md={4} className="mt-3">
                {inputList.length !== 1 && <FontAwesomeIcon icon={faTrashAlt} className="me-1 " onClick={() => handleRemoveClick(i)} />}
              </Col>
            </Row>
          </li>
        );
      })}
    </div>
  );
}

// User Profile Alert 
export const ProfileAlertNotice = () => {
  return (
    <>
      <Row className="mb-5">
        <Alert className="daily-progress-box text-center">
            <h3 className="progress-count">$45.00</h3>
            <h5 className="progress-heading">Hourly Rate</h5>
            <p className="progress-detail">20% Increase from Last Week</p>
        </Alert>
        <Alert className="rq-progress-box text-center">
            <h3 className="progress-count">$200k+</h3>
            <h5 className="progress-heading">Total Earned</h5>
            <p className="progress-detail">15% Increase from Last Month</p>
        </Alert>
        <Alert className="faq-progress-box text-center">
            <h3 className="progress-count">70</h3>
            <h5 className="progress-heading">Jobs success</h5>
            <p className="progress-detail">5% Increase from Last Week</p>
        </Alert>
        <Alert className="hour-work-box text-center">
            <h3 className="progress-count">5,270</h3>
            <h5 className="progress-heading">Hours Worked</h5>
            <p className="progress-detail">5% Increase from Last Week</p>
        </Alert>
      </Row>
    </>
  );
};

// Find Job List 
export const FindJobWidget = (props) => {
  const {jobId, title, budget, createdAt, description, skills, type} =  props;
  const regex = /(<([^>]+)>)/ig;
  const removeTags =(text)=>{
    if(text !== undefined && text !== ''){
      return text.replace(regex, '');
    }
  } 
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const [jobid, setJobId] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [jobType, setJobType] = useState();
  const [jobPrice, setJobPrice] = useState();
  const [jobDetail, setJobDetail] = useState();
  const [jobSkills, setJobSkills] = useState([]);
  const [jobCountry, setJobCountry] = useState([]);

  const viewDetail = (id)=>{

        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch(`http://16.171.150.73/api/v1/getSingleJob/${id}`, requestOptions)
          .then(response => response.text())
          .then((result) =>{
            let data = JSON.parse(result);
            console.log(data);
            setJobId(data.job._id);
            setJobTitle(data.job.title);
            setJobType(data.job.type);
            setJobPrice(data.job.budget);
            setJobDetail(data.job.description);
            setJobSkills(data.job.skills);
            setJobCountry(data.job.postedBy.country);
            setShowDefault(true)
          })
          .catch(error => console.log('error', error));
  }

  const history = useHistory();

  const SubmitProposal = (id)=>{
    if(id){
      history.push(generatePath('/submit-proposal/:id', { id }));
    }
  }

  return (
    <>
      <Card.Link className="read-more" onClick={()=> viewDetail(jobId)}>
        <Card border="light" className="shadow-sm mt-3">
          <Card.Body>
            <Row>
              <Col xs={12} sm={12} xl={12} >
                <h6 className="job-title">{title}</h6>
                <div className="text-muted small  mt-2">
                  <p className="posted">
                    <span className="pe-1"> 
                      {type}
                    </span>
                    {/* <span className="type-date">
                    - Entry level - Est.
                    </span>  */}
                    <span className="budget"> 
                      Budget: ${budget} 
                    </span>
                    <span className="type-date">
                    - Posted {moment(new Date(createdAt)).fromNow()}
                    </span>
                  </p>
                </div>
              </Col>
              {/* <Col xs={1} sm={1} xl={1} >
                <Card.Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#363636"/>
                    <path d="M13.6347 5.37997C12.0732 3.23093 8.99979 4.49871 8.99979 6.68089C8.99979 4.49834 5.92604 3.23019 4.36414 5.37961C2.75033 7.60117 4.34132 11.4936 8.99979 13.7295C13.6579 11.4936 15.2492 7.60117 13.6347 5.37997Z" fill="white"/>
                  </svg>
                </Card.Link>
              </Col> */}
            </Row>
            <Row>
              <Col xs={12} sm={12} xl={12}>
                <p className="job-detail">
                  {removeTags(description).substring(0,300)}...
                  <Card.Link className="read-more" onClick={()=> viewDetail(jobId)}>
                    View More
                </Card.Link>
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={9} xl={9}>
                {skills.map((item, i) => (
                  <Button variant="light" className="m-1 tech-btn">{item}</Button>
                ))}
              </Col>
              {/* <Col xs={12} sm={3} xl={3} >
                <Button className="m-1 proposal-submitBtn font-9" onClick={()=> viewDetail(jobId)} >View Detailes</Button>
              </Col> */}
            </Row>
          </Card.Body>
        </Card>
      </Card.Link>
      {/* Popup model  */}
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <Modal.Body>
          <Col xs={12} xl={12} md={12} className="mt-4">
            <Row>
              <Col xs={12} sm={12} xl={12} >
                <h6 className="job-like-title submit-project-heading2">{jobTitle}</h6>
              </Col>
            </Row>
            <Row className="d-flex mt-3">
              <Col xs={4} sm={3} md={2} xl={2}>
                <h6 className="mb-0 fund-subheading">Job Type</h6>
                <p className="fund-subheading text-danger mt-1">
                  {jobType}
                </p>
              </Col>
              <Col  xs={4} sm={3} md={2} xl={2}>
                <h6 className="mb-0 fund-subheading">Location</h6>
                <p className="fund-subheading mt-2">
                {jobCountry === 'Add Country'?'Not Shown': jobCountry}
                </p>
              </Col>
              <Col  xs={4} sm={3} md={3} xl={3}>
                <h6 className="mb-0 fund-subheading">Client Final Price</h6>
                <p className="fund-subheading mt-2">
                  <span className="price-text-danger">{jobPrice} </span> <small>( Fixed )</small>
                </p>
              </Col>
            </Row>
            <Row className="d-flex mt-3">
                <h4 className="mb-0 project-count-heading heading20">Overview</h4>
                <hr className="red-line"/>
              <Col xs={12} sm={12} md={12} >
                <p className="proposal-detail">{removeTags(jobDetail)}</p>
              </Col>
            </Row>
            <Row className="d-flex mt-3">
                <h4 className="mb-0 project-count-heading heading20">Skills Required</h4>
                <hr className="red-line  border-bottom"/>
                {(jobSkills.length > 0) && (
                <Col xs={12} sm={12} xl={10}>
                  {jobSkills.map((item, i) => (
                    <Badge className="me-1 mt-3 bg-light-red">{item}</Badge>
                  ))}
                </Col>
                )}
            </Row>
            <Row className="d-flex mt-3 text-center">
              <Col xs={12} sm={12} xl={12} >
                <Button className="m-1 proposal-submitBtn  upwork-btn-apply"  onClick={()=>SubmitProposal(jobid)}>Apply Now</Button>
              </Col>
            </Row>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
};

// Job Pagination 
export const JobPagination = () => {
  const [activeItem, setActiveItem] = React.useState(2);
  const totalPages = 5;
  const withIcons = false; 
  const disablePrev = false ;

  const onPrevItem = () => {
    const prevActiveItem = activeItem === 1 ? activeItem : activeItem - 1;
    setActiveItem(prevActiveItem);
  };

  const onNextItem = (totalPages) => {
    const nextActiveItem = activeItem === totalPages ? activeItem : activeItem + 1;
    setActiveItem(nextActiveItem);
  };

  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    const isItemActive = activeItem === number;

    const handlePaginationChange = () => {
      setActiveItem(number);
    };

    items.push(
      <Pagination.Item active={isItemActive} key={number} onClick={handlePaginationChange} className="job-pagination">
        {number}
      </Pagination.Item>
    );
  };
  return (
    <>
      <Pagination  className="mt-3 justify-content-center">
      <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}  className="job-pagination">
        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : "Previous"}
      </Pagination.Prev>
      {items}
      <Pagination.Next onClick={() => onNextItem(totalPages)} className="job-pagination">
        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : "Next"}
      </Pagination.Next>
    </Pagination>
    </>
  );
};


// Chat Screen User List
export const UsersWidget = () => {
  const TeamMember = (props) => {
    const { name, statusKey, image } = props;
    const status = {
      online: { color: "success", label: "Online" },
      inMeeting: { color: "warning", label: "In a meeting" },
      offline: { color: "danger", label: "Offline" }
    };

    const statusColor = status[statusKey] ? status[statusKey].color : 'danger';

    return (
      <ListGroup.Item className="px-0">
        {/* <Row className="align-items-center">
          <Col className="col-auto">
            <a href="#top" className="user-avatar">
              <Image src={image} className="rounded-circle" />
            </a>
          </Col>
          <Col className="ms--2">
            <h4 className="h6 mb-0">
              <a href="#!">{name}</a>
            </h4>
            <span className={`text-${statusColor}`}>● </span>
            <small>{statusLabel}</small>
          </Col>
          <Col className="col-auto">
            {messageCount !== '' && <Button variant={`${btnColor}`} size="sm"> {messageCount} </Button>}
          </Col>
        </Row> */}
        <Row>
          <div className="flex-grow-1 overflow-hidden">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 chat-user-img align-self-center me-3 ms-0 online">
                <Image src={image} className="user-avatar md-avatar rounded-circle" />
                <span className={`user-status user-status-${statusColor}`}></span>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <h6 className="text-truncate chat-user-name mb-0 font-size-18">
                  <p className="user-profile-show text-reset" >{name}</p>
                </h6>
              </div>
            </div>
          </div>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="d-flex justify-content-between no-bottom-boder">
        <h5 className="mb-0">Chat</h5>
      </Card.Header>
      <Card.Body>
      <Form.Group className="mb-3">
          <InputGroup className="input-group-merge">
              <Form.Control type="text" placeholder="Search Here ......" className=" project-count-subheading chat-search" />
          </InputGroup>
      </Form.Group>
        <ListGroup className="list-group-flush list my--3">
          <Col xs={12} sm={12} md={12} lg={12} className="mt-3">
            <h6 className="user-list-title">Direct Messages</h6>
            {teamMembers.map(tm => <TeamMember key={`team-member-${tm.id}`} {...tm} />)}
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="mt-4">
            <h6 className="user-list-title">New Contacts</h6>
            {newMembers.map(tm => <TeamMember key={`team-member-${tm.id}`} {...tm} />)}
          </Col>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

// client profile Widget 
export const ProfileCardWidget = (props) => {
  const { name, jobType, star, jobs, image } = props;
  return (
    <Card border="light" className="text-center p-0 mb-4 mt-2">
      <Card.Body className="pb-5">
        <Card.Img src={image} alt="Neil Portrait" className="user-avatar lg-avatar rounded-circle mx-auto mb-4" />
        <Card.Title className="project-count-heading font-15 ">{name}</Card.Title>
        <Card.Subtitle className="job-detail">{jobType}</Card.Subtitle>
        <Card.Subtitle className="job-detail mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M4.37056 0.347861L3.17543 2.93348L0.501488 3.34944C0.0219713 3.42365 -0.170201 4.05443 0.17754 4.41572L2.11208 6.42719L1.65452 9.26863C1.57216 9.78224 2.07913 10.167 2.50374 9.92675L4.89583 8.58512L7.28793 9.92675C7.71254 10.165 8.2195 9.78224 8.13715 9.26863L7.67959 6.42719L9.61413 4.41572C9.96187 4.05443 9.7697 3.42365 9.29018 3.34944L6.61624 2.93348L5.42111 0.347861C5.20697 -0.11302 4.58653 -0.118878 4.37056 0.347861Z" fill="#1680FB"/>
          </svg>{star} | ({jobs} jobs)
        </Card.Subtitle>
        <Row className="mt-3">
          <Col xs={6} xl={6} md={6}>
            <Button size="sm" className=" expertiesbtn">Mathematics</Button>
          </Col>
          <Col xs={6} xl={6} md={6}>
            <Button size="sm" className="expertiesbtn btn btn-primary">Python</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// client Link input
// Add new Input for link 
export const ClientLinkInput = () =>{
  const [inputList, setInputList] = useState([{ link: "" }]);
 
  // handle input change
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = value;
  //   setInputList(list);
  // };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { link: "" }]);
  };
 
  return (
    <>
      <Row>
          <Form.Label>Add Link</Form.Label>
        <Col xs={10} sm={10} xl={10} md={10}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Past link here" className=" project-count-subheading" />
          </Form.Group>
        </Col>
        <Col xs={2} sm={2} xl={2} md={2}>
            <Button type="button" onClick={handleAddClick} className="m-1 proposal-submitBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M15.6247 6.61047H10.2162V1.2019C10.2162 0.538227 9.67795 0 9.01428 0H7.81237C7.1487 0 6.61047 0.538227 6.61047 1.2019V6.61047H1.2019C0.538227 6.61047 0 7.1487 0 7.81237V9.01428C0 9.67795 0.538227 10.2162 1.2019 10.2162H6.61047V15.6247C6.61047 16.2884 7.1487 16.8267 7.81237 16.8267H9.01428C9.67795 16.8267 10.2162 16.2884 10.2162 15.6247V10.2162H15.6247C16.2884 10.2162 16.8267 9.67795 16.8267 9.01428V7.81237C16.8267 7.1487 16.2884 6.61047 15.6247 6.61047Z" fill="white"/>
              </svg>
            </Button>
        </Col>
        <p className="limit-drop-img">Add Reference links if any</p>
      </Row>
      {inputList.map((x, i) => {
        return (
          <li>
            <Row>
              <Col xs={8} sm={8} md={8} className="mt-3">
                {x.link}
              </Col>
              <Col xs={4} sm={4} md={4} className="mt-3">
                {inputList.length !== 1 && <FontAwesomeIcon icon={faTrashAlt} className="me-1 " onClick={() => handleRemoveClick(i)} />}
              </Col>
            </Row>
          </li>
        );
      })}
    </>
  );
}

// Find Job List 
export const FindTalentWidget = (props) => {
  let {id, name, speciality, skills, hourlyRate, profilImage, bio, totalEarned} = props;
  const history = useHistory();

  const regex = /(<([^>]+)>)/ig;
  const removeTags =(text)=>{
    if(text !== undefined && text !== ''){
      return text.replace(regex, '');
    }
  } 
  const viewProfile = (id)=>{
    if(id){
      localStorage.removeItem('freelancerId');
      localStorage.setItem('freelancerId', JSON.stringify({"id":id}));
      history.push('/view-freelancer');
    }
  }

  return (
    <>
      <Card.Link className="read-more" onClick={()=> viewProfile(id)}>
        <Card border="light" className="shadow-sm ">
          <Card.Body>
            <Row>
              <Col xs={10} sm={10} xl={10} >
                <Row>
                  <Col xs={1} sm={1} xl={1} >
                    <div className="media d-flex align-items-center">
                      <Image src={profilImage} className="user-avatar md-avatar rounded-circle" />
                    </div>
                  </Col>
                  <Col xs={11} sm={11} xl={11} >
                    <h6 className="job-title mt-1 mb-1 mx-1">{name}</h6>
                    <p className="user-list-title small mx-1">{speciality}</p>
                  </Col>
                </Row>
              </Col>
              {/* <Col xs={2} sm={2} xl={2} >
                <Card.Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#363636"/>
                    <path d="M13.6347 5.37997C12.0732 3.23093 8.99979 4.49871 8.99979 6.68089C8.99979 4.49834 5.92604 3.23019 4.36414 5.37961C2.75033 7.60117 4.34132 11.4936 8.99979 13.7295C13.6579 11.4936 15.2492 7.60117 13.6347 5.37997Z" fill="white"/>
                  </svg>
                </Card.Link>
              </Col> */}
            </Row>
            <Row>
              <Col xs={7} sm={7} xl={7}>
                <p className="proposal-post-date">
                  {bio?removeTags(bio).substring(0, 100):'About Freelancer Empty'}
                </p>
              </Col>
              <Col xs={5} sm={5} xl={5}>
                <Row>
                  <Col xs={4} sm={4} xl={4} className="border-right">
                    <h3 className="talent-rate">${hourlyRate?hourlyRate:0}</h3>
                    <p className="type-rate">HOURLY RATE</p>
                  </Col>
                  <Col xs={4} sm={4} xl={4} className="border-right">
                    <h3 className="talent-rate">${totalEarned?totalEarned:0}</h3>
                    <p className="type-rate">TOTAL EARNED</p>
                  </Col>
                  <Col xs={4} sm={4} xl={4}>
                    <h3 className="talent-rate">6/10</h3>
                    <p className="type-rate">Ratings</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} xl={12}>
                {skills.map((item, i) => (
                  <Button variant="light" className="m-1 tech-btn">{item}</Button>
                ))}
              </Col>
              {/* <Col xs={12} sm={2} xl={3} >
                <Button onClick={()=>viewProfile(id)} className="proposal-submitBtn font-9 line-height-10">View Detailes</Button>
              </Col> */}
            </Row>
          </Card.Body>
        </Card>
      </Card.Link>
    </>
  );
};

export const ClientJobs = (props) =>{
  const {title, estimateTime, description} =  props;
  const regex = /(<([^>]+)>)/ig;
  const removeTags =(text)=>{
    return text.replace(regex, '');
  } 
  return (
    <>
      <Row className="d-flex align-items-center border-bottom border-light mt-3">
        <Col xs={3} sm={3} md={3}>
          <h6 className="mb-0 proposal-post-date">{title}</h6>
          <p className=" proposal-post-date proposal-post-ago">
            {estimateTime}
          </p>
        </Col>
        <Col xs={6} sm={6} md={6}>
          <p className="proposal-post-date">
            {removeTags(description)}
          </p>
        </Col>
        <Col xs={3} sm={3} md={3}>
          <Card.Link as={Link} to={Routes.SubmitProject.path} className="proposal-submit">
            View Activates 
          </Card.Link>
        </Col>
      </Row>
    </>
  )
}

export const ClientProposal = (props) => {
  let {title, proposalData} = props;
  const history = useHistory();
  const ViewProposal = (id)=>{
    if(id){
      history.push(generatePath('/view-proposal/:id', { id }));
    } 
  }
  return (
    <>
    {proposalData.map(proposal=>(
      <Row>
        <Col xs={3} sm={3} md={3}>
          <h6 className="mb-0 proposal-post-date">{proposal.bidderDetails.username}</h6>
          <p className=" proposal-post-date proposal-post-ago">
            3 days ago
          </p>
        </Col>
        <Col xs={6} sm={6} md={6}>
          <p className="proposal-post-date">
            {title}
          </p>
        </Col>
        <Col xs={3} sm={3} md={3}>
          <Card.Link onClick={()=>{ViewProposal(proposal.id)}} className="proposal-submit font-500">
            View Proposal
          </Card.Link>
        </Col>
      </Row>
    ))}
    </>
  )
}