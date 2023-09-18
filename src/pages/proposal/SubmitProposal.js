
import React, {useEffect, useState, useCallback} from "react";
import { Col, Row, Card, Button, Form, Badge } from '@themesberg/react-bootstrap';
import { StarReviewComponent } from "../../components/Widgets";
import { Routes } from "../../routes";
<<<<<<< HEAD
import { Link, useHistory, useParams } from "react-router-dom";
=======
import { Link, useHistory } from "react-router-dom";
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
import {useDropzone} from 'react-dropzone';

import cogoToast from 'cogo-toast';

const SubmitProposal = () => {
  const history = useHistory();
  const { id } = useParams();
  // let job = JSON.parse(localStorage.getItem('job'));
  const user = JSON.parse(localStorage.getItem('user'));
  const durationArr = [
    {value: 'Select a duration', label: 'Select a duration'},
    {value: 'More than 6 Months', label: 'More than 6 Months'},
    {value: '3 to 6 months', label: '3 to 6 months'},
    {value: '1 to 3 months', label: '1 to 3 months'},
    {value: 'less than 1 month', label: 'less than 1 month'},
]

  const [jobs, setJobs] = useState([])
  const [jobSkill, setSkill] = useState([])
  const [jobPosted, setJobPosted] = useState([])
  const [jobCountry, setCountry] = useState()

  const regex = /(<([^>]+)>)/ig;
  const removeTags =(text)=>{
    if(text !== undefined && text !== ''){
      return text.replace(regex, '');
    }
  } 

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://16.171.150.73/api/v1/getSingleJob/${id}`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        let data = JSON.parse(result);
<<<<<<< HEAD
        if(data.success){
=======
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
          setJobs(data.job);
          setSkill(data.job.skills);
          setJobPosted(data.job.postedBy.postedJobs) 
          setCountry(data.job.postedBy.country) 
<<<<<<< HEAD
        }else{
          cogoToast.error(data.message,{
            position: 'top-right',
            hideAfter: 3,
          });
          history.push('/job');
        }
=======
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
      })
      .catch(error => {
        cogoToast.error(error.message,{
          position: 'top-right',
          hideAfter: 3,
        });
        history.push('/job');
      });
  }, [history, id])



  // submit proposal
  const [bidPrice, setBidPrice] = useState("")
  const [deductionPrice, setDeductionPrice] = useState(30)
  const [totalPriceAfterFee, setTotalPrice] = useState("")
  const [additionalInfo, setDetail] = useState("");
  const [duration, setDuration] = useState("");
  const [document, setDocument] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    // You can perform actions with the acceptedFiles here, e.g., prepare for upload
    const file = acceptedFiles[0];
    var formdata = new FormData();
    formdata.append("documents", file, "[PROXY]");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    setSubmitting(true);
    fetch("http://16.171.150.73/api/v1/UploadDocument", requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result);
        if(data.success && data.data.length > 0) {
          data.data.forEach(dataItem => {
            setDocument({
              "public_id": dataItem.publicId,
              "url": dataItem.url,
            });
          })
          setSubmitting(false);
        }
        else{
          cogoToast.error("File Can't uploaded..!",{
            position: 'top-right',
            hideAfter: 3,
          });
          setSubmitting(false);
        }
      })
      .catch(error => {
          cogoToast.error(error.message,{
            position: 'top-right',
            hideAfter: 3,
          });
          setSubmitting(false);
      });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, 
    accept: {
      // 'image/png': ['.png'],
      'text/pdf': ['.pdf'],
      'text/doc': ['.doc', '.docx'],
    } });


  const calculatePrice = (price)=>{
    setBidPrice(price);
    setDeductionPrice(30);
    setTotalPrice(price-deductionPrice)
  }

  const submitProposal = ()=>{
    try {
      if(bidPrice === undefined || bidPrice === ''){
        console.log('Please enter a bid price for this proposal!');
      }
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "jobId": id,
        "bidder": user._id,
        "bidPrice": bidPrice,
        "deductionPrice": deductionPrice,
        "totalPriceAfterFee": totalPriceAfterFee,
        "additionalInfo": additionalInfo,
        "duration": duration,
        "projectPdf": document
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      console.log(raw, requestOptions);
      fetch("http://16.171.150.73/api/v1/submitProposal", requestOptions)
        .then(response => response.text())
        .then((result) => {
          let data = JSON.parse(result);
          if(data.success) {
              cogoToast.success(data.message,{
                position: 'top-right',
                hideAfter: 3,
              });
              history.push("/proposal")
            }
            else{
              cogoToast.error(data.message,{
                position: 'top-right',
                hideAfter: 3,
              });
            }
        })
        .catch(error => {
          cogoToast.error(error.message,{
            position: 'top-right',
            hideAfter: 3,
          });
        });
    } catch (error) {
      cogoToast.error(error.message,{
        position: 'top-right',
        hideAfter: 3,
      });
    }
  }


  return (
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={8} className="mb-4 offset-2">
        <h1 className="proposal-submit-heading">Submit a Proposal</h1>
          <Card border="light" className="shadow-sm">
            <Card.Body>
              <Row>
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Row>
                    <Col xs={12} sm={12} xl={12} >
                      <h6 className="job-like-title submit-project-heading2">{jobs.title}</h6>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                    <Col xs={4} sm={3} md={2} xl={2}>
                      <h6 className="mb-0 fund-subheading">Job Type</h6>
                      <p className="fund-subheading text-danger mt-1">
                        {jobs.type}
                      </p>
                    </Col>
                    <Col  xs={4} sm={3} md={2} xl={2}>
                      <h6 className="mb-0 fund-subheading">Location</h6>
                      <p className="fund-subheading mt-2">
                        {/* <Image src={enFlag} alt="en Flag" /> */}
                        {jobCountry === 'Add Country'?'Not Shown': jobCountry}
                      </p>
                    </Col>
                    <Col  xs={4} sm={3} md={3} xl={3}>
                      <h6 className="mb-0 fund-subheading">Client Final Price</h6>
                      <p className="fund-subheading mt-2">
                        <span className="price-text-danger">${jobs.budget} </span> <small className="text-gry">( Fixed )</small>
                      </p>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading sub-heading">Overview</h4>
                      <hr className="red-line"/>
                    <Col xs={12} sm={12} md={12} className="mt-3">
                      <p className="proposal-detail">{removeTags(jobs.description)}</p>
                    </Col>
                  </Row>
                  {/* <hr /> */}
                  <Row className="d-flex mt-4">
                      <h4 className="mb-0 project-count-heading sub-heading">Skills and expertise</h4>
                      <hr className="red-line  border-bottom"/>
                      {/* {jobSkill  && ( */}
<<<<<<< HEAD
                        <Col xs={12} sm={12} md={12} className="mt-3">
=======
                        <Col xs={12} sm={12} md={12} >
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                          {jobSkill.map((item, i) => (
                          <Badge className="me-1 bg-light-red">{item}</Badge>
                        ))}
                        </Col>
                      {/* )} */}
                  </Row>
                  {/* <hr /> */}
                  {/* Activity */}
                  {/* <Row className="d-flex mt-4">
                      <h4 className="mb-0 project-count-heading sub-heading">Activity on this job</h4>
                      <hr className="red-line  border-bottom"/>
                    <Col xs={12} sm={12} md={12} >
                      <p className="review-text-gry">Proposals: &nbsp;
                        <OverlayTrigger
                          key="example"
                          overlay={<Tooltip id="top" className="m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Tooltip>}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM8.914 11.276C8.83 11.836 9.306 12.298 9.872 12.298H10.342C10.4755 12.298 10.6041 12.2471 10.7014 12.1557C10.7987 12.0643 10.8576 11.9393 10.866 11.806C10.923 11.28 11.149 10.82 11.542 10.427L12.172 9.807C12.664 9.312 13.008 8.863 13.205 8.46C13.402 8.051 13.5 7.618 13.5 7.161C13.5 6.156 13.197 5.379 12.591 4.831C11.985 4.277 11.133 4 10.035 4C8.947 4 8.088 4.29 7.455 4.871C7.08031 5.21854 6.80635 5.66076 6.662 6.151C6.478 6.755 7.022 7.282 7.652 7.282C8.186 7.282 8.585 6.847 8.956 6.442C9.008 6.385 9.059 6.328 9.11 6.274C9.344 6.027 9.652 5.904 10.035 5.904C10.843 5.904 11.247 6.358 11.247 7.266C11.247 7.567 11.169 7.855 11.014 8.129C10.859 8.398 10.545 8.75 10.074 9.185C9.608 9.615 9.287 10.054 9.11 10.5C9.023 10.721 8.958 10.98 8.914 11.276ZM8.971 13.887C8.738 14.118 8.621 14.414 8.621 14.774C8.621 15.129 8.735 15.422 8.963 15.654C9.196 15.884 9.502 16 9.88 16C10.258 16 10.56 15.884 10.789 15.653C11.022 15.422 11.139 15.129 11.139 14.774C11.139 14.414 11.019 14.118 10.781 13.887C10.548 13.65 10.247 13.532 9.88 13.532C9.512 13.532 9.21 13.65 8.971 13.887Z" fill="black"/>
                          </svg>
                        </OverlayTrigger>
                        <span  className="review-text"> &nbsp;
                          5 to 10
                        </span>  
                      </p>
                      <p className="review-text-gry">
                      Invites <span className="review-text">sent: 0</span> 
                      </p>
                    </Col>
                  </Row> */}
                  {/* About Client */}
                  <Row className="d-flex mt-4">
                      <h4 className="mb-0 project-count-heading sub-heading">About The Client</h4>
                      <hr className="red-line  border-bottom"/>
                    <Col xs={12} sm={12} md={12} className="mt-3">
                      <StarReviewComponent />
                      <p className="review-text">
                        United States <span  className="review-text-gry">Tampa</span>  
                      </p>
                      <p className="review-text">
                        {jobPosted.length} Jobs Posted  <span className="review-text-gry">80% Hire Rate, 1 Job Open</span> 
                      </p>
                      <p className="review-text">
                        $ 200M+ Total Spent   <span className="review-text-gry"> 372 Hires, 55 Active</span> 
                      </p>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-4">
                    <Card border="light">
                      <Card.Body>
                        <Form>
                          <Row className="d-flex mt-3">
                            <Col xs={8} sm={8} md={8} className="mt-3">
                              <strong>
                                <h6 className="mb-0 get-paid-heading">Bid</h6>
                              </strong>
                            <h6 className="mb-0 fund-subheading">Total amount the client will see on your proposal</h6>
                            </Col>
                            <Col xs={4} sm={4} md={4} className="mt-3">
                              <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="10$" value={bidPrice} className=" project-count-subheading proposal-inputs" onChange={(e)=>calculatePrice(e.target.value)} />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row className="d-flex mt-3">
                            <Col xs={8} sm={8} md={8} className="mt-3">
                              <strong>
                                <h6 className="mb-0 get-paid-heading">{deductionPrice}% Service Fee</h6>
                              </strong>
                            {/* <h6 className="mb-0 fund-subheading">Total amount the client will see on your proposal</h6> */}
                            </Col>
                            <Col xs={4} sm={4} md={4} className="mt-3">
                              <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="8$ " value={deductionPrice} className=" project-count-subheading proposal-inputs" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row className="d-flex mt-3">
                            <Col xs={8} sm={8} md={8} className="mt-3">
                              <strong>
                                <h6 className="mb-0 get-paid-heading">Total You’ll Receive</h6>
                              </strong>
                            <h6 className="mb-0 fund-subheading">The estimated amount you'll receive after service fees</h6>
                            </Col>
                            <Col xs={4} sm={4} md={4} className="mt-3">
                              <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="2$ " value={totalPriceAfterFee} className=" project-count-subheading proposal-inputs"/>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row className="d-flex mt-3">
                            <Col xs={12} sm={12} md={12} className="mt-3">
                              <strong>
                                <h6 className="mb-0 get-paid-heading">How long will this project take? </h6>
                              </strong>
                            </Col>
                            <Col xs={4} sm={4} md={4} className="mt-3">
                              <Form.Group id="duration">
                                <Form.Select value={duration} onChange={(e)=>setDuration(e.target.value)}>
                                    {durationArr.map((item, i) => (
                                        <option value={item.value} key={i}>
                                            {item.label}
                                        </option>
                                    ))}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row className="d-flex mt-3">
                            <Col xs={12} sm={12} md={12} className="mt-3">
                            <strong>
                                <h6 className="mb-3 get-paid-heading">Cover Letter</h6>
                              </strong>
                              <textarea name="" id="" className="cover-text" rows="10" placeholder="Write Summery of Proposal!" onChange={(text)=>{setDetail(text.target.value)}} value={additionalInfo} />
                            </Col>
                          </Row>
                          <Row className="d-flex mt-3">
                            <Col xs={12} sm={12} md={12} className="mt-3">
                            <strong>
                                <h6 className="mb-3 get-paid-heading">Attachment</h6>
                              </strong>
                              <section className="container">
                                <div {...getRootProps({className: 'dropzone submit-proposal-img'})}>
                                  <input {...getInputProps()} />
                                  <p className="mt-4 text-center proposal-post-date font-encode ">Drag or <span className="text-light-blue">upload</span> project file</p>
                                </div>
                              </section>
                            </Col>
                          </Row>
                          <Row>
                        </Row>
                        </Form>
                      </Card.Body>
                    </Card>
                    <Col xs={12} sm={12} lg={12} md={12} className="mt-3">
                            {/* <p className="review-text">
                            12 Connects Required <span  className="review-text-gry">/ Available Connects 93</span>  
                            </p> */}
                            <Button disabled={isSubmitting} onClick={submitProposal} className="m-1 proposal-submitBtn upwork-btn-apply">{isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}Send</Button>
                            <Button as={Link} to={Routes.JobFind.path} className=" m-1 proposal-cancelBtn">Cancel</Button>
                          </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SubmitProposal;