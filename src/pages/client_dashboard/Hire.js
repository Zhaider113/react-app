

<<<<<<< HEAD
import React, {useCallback, useEffect, useState} from "react";
import { Col, Row, Card, Button, Form, Modal } from '@themesberg/react-bootstrap';
import { useHistory, useParams} from "react-router-dom";
import cogoToast from 'cogo-toast';
import moment from "moment-timezone";
=======
import React, {useEffect, useState} from "react";
import { Col, Row, Card, Button, Form, Modal } from '@themesberg/react-bootstrap';
import { useHistory} from "react-router-dom";
import cogoToast from 'cogo-toast';
// import moment from "moment-timezone";
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0

const user = JSON.parse(localStorage.getItem('user'));

const estimateTimeArr = [
<<<<<<< HEAD
    {value: '', label: 'Select a duration'},
=======
    {value: 'Select a duration', label: 'Select a duration'},
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
    {value: 'More than 6 Months', label: 'More than 6 Months'},
    {value: '3 to 6 months', label: '3 to 6 months'},
    {value: '1 to 3 months', label: '1 to 3 months'},
    {value: 'less than 1 month', label: 'less than 1 month'},
]

const HireFreelancer = () => {
<<<<<<< HEAD
    const { jobId, freelancerId } = useParams();
=======
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
    const history = useHistory();
    const [price, setPrice] = useState("");
    const [detail, setDetail] = useState("");
    const [estimateTime, setEstimateTime] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);
<<<<<<< HEAD
=======
    let job = JSON.parse(localStorage.getItem('jobId'));
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
    const [jobs, setJobs] = useState([])
    const regex = /(<([^>]+)>)/ig;
    const removeTags =(text)=>{
      if(text !== undefined && text !== ''){
          return text.replace(regex, '');
        }
    } 

    const [showDefault, setShowDefault] = useState(false);
    const [nameOnCard, setNameOnCard] = useState('');
    const [numberOnCard, setNumberOnCard] = useState('');
    const [ExpDateOnCard, setExpDateOnCard] = useState('');
    const [cvcOnCard, setCVCOnCard] = useState('');
<<<<<<< HEAD
    const handleClose = () => setShowDefault(true);
    const [loading, setLoading] = useState(false);
    const [pay, setPaid] = useState(false);
    const handleLoadingClose = () => setLoading(true);


    const checkFreelancer = useCallback(() => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://16.171.150.73/api/v1/UserProfile/${freelancerId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          let data = JSON.parse(result);
          if(data.success) {
            console.log("Freelancer Found Success")
          }else{
            cogoToast.error("Someting went's wrong...!",{
              position: 'top-right',
              hideAfter: 3,
            });
            history.push("/client-proposal");
          }
        })
        .catch(error => {
          cogoToast.error("Someting went's wrong...!",{
            position: 'top-right',
            hideAfter: 3,
          });
          history.push("/client-proposal");
        });
    },[history, freelancerId])
=======
    const handleClose = () => setShowDefault(false);
    
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0

    useEffect(() => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
<<<<<<< HEAD
      if(jobId !== null){
        fetch(`http://16.171.150.73/api/v1/getSingleJob/${jobId}`, requestOptions)
        .then(response => response.text())
        .then((result) =>{
          let data = JSON.parse(result);
          if(data.success) {
            setJobs(data.job);
            checkFreelancer();
          }else{
            cogoToast.error(data.message,{
              position: 'top-right',
              hideAfter: 3,
            });
            history.push('/client-proposal');  
          }
        })
        .catch(error => {
          cogoToast.error(error.message,{
            position: 'top-right',
            hideAfter: 3,
          });
          history.push('/client-proposal');
        });
      }else{
        cogoToast.error("Someting went's wrong...!",{
=======
      if(job !== null){
        fetch(`http://16.171.150.73/api/v1/getSingleJob/${job.id}`, requestOptions)
        .then(response => response.text())
        .then((result) =>{
          let data = JSON.parse(result);
            setJobs(data.job);
        })
        .catch(error => {
          history.push('/job');
        });
      }else{
        cogoToast.error("Proposal to hire!",{
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
          position: 'top-right',
          hideAfter: 3,
        });
        history.push("/client-proposal");
      }
<<<<<<< HEAD
    }, [history, jobId, checkFreelancer, freelancerId])

    // show payment model
    const showPayment = () =>{
      let errorMsg = false;
      if(price === ''){
        cogoToast.error("Project Budget Require!",{
          position: 'top-right',
          hideAfter: 3,
        });   
        errorMsg = true;    
      }
      if(estimateTime === ""){
        console.log(estimateTime, "detail")
          cogoToast.error("Estimate Time Required!",{
              position: 'top-right',
              hideAfter: 3,
          });  
          errorMsg = true;     
      }
      if(detail === ''){
          cogoToast.error("Project Detail Required!",{
              position: 'top-right',
              hideAfter: 3,
          });   
          errorMsg = true;    
      }
      if(!errorMsg){
        if(pay){
          setSubmitting(true);
          setLoading(true);
        }else{
          setSubmitting(true);
          setShowDefault(true)
        }
      }
      
    }

    // payment api
    const payNow = ()=>{
        try {
            let errorMsg = false;
            if(nameOnCard === ''){
                cogoToast.error("Card Name Require!",{
=======
    }, [history, job])

    const showPayment = () =>{
      let errorMsg = false;
            if(price === ''){
                cogoToast.error("Project Budget Require!",{
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                    position: 'top-right',
                    hideAfter: 3,
                });   
                errorMsg = true;    
            }
<<<<<<< HEAD
            if(numberOnCard === ""){
                cogoToast.error("Card Number Required!",{
=======
            if(estimateTime === undefined && estimateTime === ''){
                cogoToast.error("Estimate Time Required!",{
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                    position: 'top-right',
                    hideAfter: 3,
                });  
                errorMsg = true;     
            }
<<<<<<< HEAD
            if(ExpDateOnCard === ''){
                cogoToast.error("Exp Date Required!",{
=======
            if(detail === undefined && detail === ''){
                cogoToast.error("Project Detail Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });   
                errorMsg = true;    
            }
            if(!errorMsg){
              setShowDefault(true)
            }
    }

    const hireFreelancer = ()=>{
        try {
            let errorMsg = false;
            if(price === ''){
                cogoToast.error("Project Budget Require!",{
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                    position: 'top-right',
                    hideAfter: 3,
                });   
                errorMsg = true;    
            }
<<<<<<< HEAD
            if(cvcOnCard === ''){
                cogoToast.error("CVC Required!",{
=======
            if(estimateTime === undefined && estimateTime === ''){
                cogoToast.error("Estimate Time Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });  
                errorMsg = true;     
            }
            if(detail === undefined && detail === ''){
                cogoToast.error("Project Detail Required!",{
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                    position: 'top-right',
                    hideAfter: 3,
                });   
                errorMsg = true;    
            }
            if(!errorMsg){
<<<<<<< HEAD
              if(pay){
                setLoading(true);
              }else{
                let exp_month = moment(ExpDateOnCard).format('MM');
                let exp_year = moment(ExpDateOnCard).format('YY');
                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");
  
                  let paymentData = {total_amount: price, card_number: '4242424242424242', exp_month: exp_month, exp_year: exp_year,cvv: cvcOnCard, user_id:user._id
                  };
  
                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify(paymentData),
                    redirect: 'follow'
                  };
  
                  fetch("http://16.171.150.73/api/v1/stripe_payment", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                      let data = JSON.parse(result);
                      
                      if(data.success) {
                          cogoToast.success(data.message,{
                            position: 'top-right',
                            hideAfter: 3,
                          });
                          setPaid(true);
                          setShowDefault(false)
                          setLoading(true);
                          sendOffer();
                        }
                        else{
                          cogoToast.error(data.error,{
                            position: 'top-right',
                            hideAfter: 3,
                          });
                        }
                    })
                    .catch(error => console.log('error', error));
              }
=======
               
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
    
                // let jobDetail = {budget: price, detail: detail, estimateTime: estimateTime};
                
                // var requestOptions = {
                //     method: 'POST',
                //     headers: myHeaders,
                //     body: JSON.stringify(jobDetail),
                //     redirect: 'follow'
                // };
                console.log(user, "user", user._id)
                setSubmitting(true);
                cogoToast.success("Your Offer Has Been Sent To Freelancer Successfully..!",{
                  position: 'top-right',
                  hideAfter: 3,
                });
                history.push('/contracts')
                // fetch(`http://16.171.150.73/api/v1//${user._id}`, requestOptions)
                //     .then(response => response.text())
                //     .then((result) => {
                //         let data = JSON.parse(result);
                //         if(data.success) {
                //             cogoToast.success(data.message,{
                //               position: 'top-right',
                //               hideAfter: 3,
                //             });
                //             history.push("/contracts")
                //           }
                //           else{
                //             cogoToast.error(data.message,{
                //               position: 'top-right',
                //               hideAfter: 3,
                //             });
                //           }
                //     })
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
            }else{
                errorMsg = false;   
            }
            

        } catch (error) {
<<<<<<< HEAD
          cogoToast.error(error.message,{
              position: 'top-right',
              hideAfter: 3,
            });
        }
    }

    // submit offer to freelancer api 
    const sendOffer = () =>{
      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "jobId": jobId,
          "freelancerId": freelancerId,
          "offerDetails": detail,
          "offerAmount": price,
          "deadline": "2023-12-31T23:59:59.999Z"
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://16.171.150.73/api/v1/sendOfferToFreelancer", requestOptions)
          .then(response => response.text())
          .then(result => {
            let data = JSON.parse(result);
            if(data.success){
              setLoading(false)
              cogoToast.success("Your Offer Has Been Sent To Freelancer Successfully..!",{
                  position: 'top-right',
                  hideAfter: 3,
              });
              history.push('/contracts')
            }else{
              setLoading(false);
              cogoToast.error(data.message,{
                position: 'top-right',
                hideAfter: 3,
              });
            }
          })
          .catch(error => console.log('error', error));
      } catch (error) {
        cogoToast.error(error.message,{
          position: 'top-right',
          hideAfter: 3,
        });
      }
=======
            cogoToast.error(error.message,{
                position: 'top-right',
                hideAfter: 3,
              });
        }
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
    }

    const chackNumber = (value, field)=>{
      if(/^-?\d*$/.test(value)){
        field==='card'?setNumberOnCard(value):setCVCOnCard(value);
      }
    }

    // let month = moment(value).format('MM/yyyy');
    
  return (
    
    <>
<<<<<<< HEAD
        <Row className="mt-4 p-4">

          <Col xs={12} xl={8} className="mb-4 offset-2">
          <h1 className="job-like-title submit-project-heading2">Hire Freelancer for {jobs.title}</h1>
            <Card border="light" className="shadow-sm">
              <Card.Body>
                  <Row>
                      <h4 className="mb-0 project-count-heading heading20">Job Detail</h4>
                      <hr className="red-line"/>
                      <Col xs={12} sm={12} md={12} className="mb-3" >
                        <p className="proposal-detail">
                          {removeTags(jobs.description)}
                        </p>
                      </Col>
                      <Col md={12} className="mb-3">
                          <Form.Group id="price">
                              <Form.Label>Project Budget (USD)</Form.Label>
                              <Form.Control className="proposal-inputs" required type="number" placeholder="100" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                          </Form.Group>
                      </Col>
                      <Col md={12} className="mb-3">
                          <Form.Group id="estimateTime">
                              <Form.Label>Duration</Form.Label>
                              <Form.Select className="proposal-inputs" value={estimateTime} onChange={(e)=>setEstimateTime(e.target.value)}>
                                  {estimateTimeArr.map((item, i) => (
                                      <option value={item.value} key={i}>
                                          {item.label}
                                      </option>
                                  ))}
                              </Form.Select>
                          </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={12} className="mt-3">
                        <strong>
                          <h6 className="mb-3 get-paid-heading">Description</h6>
                        </strong>
                        <Form.Control as="textarea" rows="5" value={detail} className="border-light user-bio" onChange={(e)=>{setDetail(e.target.value)}}/>
                      </Col>
                      <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-3 offset-8">
                        <Button disabled={isSubmitting} onClick={showPayment} className="m-1 personal-tab-update">{isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}Make Offer</Button>
                      </Col>
                  </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose} className="paymentModel" >
        <Modal.Body>
          <Col xs={12} xl={12} md={12} className="mt-4">
=======
      <Row className="mt-4 p-4">

        <Col xs={12} xl={8} className="mb-4 offset-2">
        <h1 className="job-like-title submit-project-heading2">Hire Freelancer for {jobs.title}</h1>
          <Card border="light" className="shadow-sm">
            <Card.Body>
                <Row>
                    <h4 className="mb-0 project-count-heading heading20">Job Detail</h4>
                    <hr className="red-line"/>
                    <Col xs={12} sm={12} md={12} className="mb-3" >
                      <p className="proposal-detail">
                        {removeTags(jobs.description)}
                      </p>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="price">
                            <Form.Label>Project Budget (USD)</Form.Label>
                            <Form.Control className="proposal-inputs" required type="number" placeholder="100" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="estimateTime">
                            <Form.Label>Duration</Form.Label>
                            <Form.Select className="proposal-inputs" value={estimateTime} onChange={(e)=>setEstimateTime(e.target.value)}>
                                {estimateTimeArr.map((item, i) => (
                                    <option value={item.value} key={i}>
                                        {item.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    {/* <Col md={12} className="mb-3">
                        <ClientLinkInput />
                    </Col> */}
                    <Col xs={12} sm={12} md={12} className="mt-3">
                    <strong>
                                <h6 className="mb-3 get-paid-heading">Description</h6>
                              </strong>
                              <textarea name="" id="" className="cover-text" rows="10" placeholder="Write Summery of Proposal!" onChange={(text)=>{setDetail(text.target.value)}} value={detail} />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-3 offset-8">
                      <Button disabled={isSubmitting} onClick={showPayment} className="m-1 personal-tab-update">{isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}Make Offer</Button>
                    </Col>
                </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Payment Popup model  */}
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose} className="paymentModel">
        <Modal.Body>
          <Col xs={12} xl={12} md={12} className="mt-4">
            {/* <Row>
              <Col xs={12} sm={12} xl={12} >
                <h6 className="job-like-title submit-project-heading2">Payment Card Information</h6>
              </Col>
            </Row> */}
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
            <Row className="d-flex mt-3">
              <Col xs={12} sm={12} xl={12} className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="268.825" height="170.244" viewBox="0 0 268.825 170.244">
                  <g id="Group_1000003459" data-name="Group 1000003459" transform="translate(0 0)">
                    <path id="Path_10264" data-name="Path 10264" d="M822.074,605.334l.728-.014a168.721,168.721,0,0,0-2.583-24.113c-3.146-17.054-8.377-28.254-15.549-33.289l-.418.6C821,560.275,822.065,604.884,822.074,605.334Z" transform="translate(-599.496 -435.333)" fill="#2f2e41"/>
                    <path id="Path_10265" data-name="Path 10265" d="M814.889,661.453l.728-.014c-.016-.806-.47-19.794-7.946-25.042l-.418.6C814.426,642.028,814.885,661.259,814.889,661.453Z" transform="translate(-601.405 -491.626)" fill="#2f2e41"/>
                    <circle id="Ellipse_483" data-name="Ellipse 483" cx="3.638" cy="3.638" r="3.638" transform="translate(196.98 105.97)" fill="#1fc600"/>
                    <circle id="Ellipse_484" data-name="Ellipse 484" cx="3.638" cy="3.638" r="3.638" transform="translate(198.781 137.254)" fill="#1fc600"/>
                    <path id="Path_10266" data-name="Path 10266" d="M832.632,542.541a16.159,16.159,0,0,0,1.1,8.272A14.726,14.726,0,0,0,836.206,535,16.158,16.158,0,0,0,832.632,542.541Z" transform="translate(-617.452 -427.115)" fill="#2f2e41"/>
                    <path id="Path_10267" data-name="Path 10267" d="M788.32,575.755a16.158,16.158,0,0,0,8.337.36,14.726,14.726,0,0,0-15.14-5.193A16.157,16.157,0,0,0,788.32,575.755Z" transform="translate(-585.031 -449.724)" fill="#2f2e41"/>
                    <path id="Path_10268" data-name="Path 10268" d="M791.508,654.584a11.326,11.326,0,0,0,5.844.252,10.322,10.322,0,0,0-10.612-3.64A11.326,11.326,0,0,0,791.508,654.584Z" transform="translate(-588.354 -500.847)" fill="#2f2e41"/>
                    <path id="Path_10269" data-name="Path 10269" d="M488.077,346.668l-23.453-12.2s-7.876-8.673-12.822-12.591-6.469-1.04-6.469-1.04l-2.079,3.465,5.025,6.989,13.573,11.494,24.252,9.5a3.846,3.846,0,1,0,1.973-5.621Z" transform="translate(-369.817 -290.212)" fill="#ffb8b8"/>
                    <path id="Path_10270" data-name="Path 10270" d="M364.665,347.961l-1.389-8.495-3.921-.98s-3.112-.958-3.839,5.309-.163,17.97-.163,17.97l-7.96,25.207a3.854,3.854,0,1,0,5.37,2.579l10.432-23.866Z" transform="translate(-307.409 -302.053)" fill="#ffb8b8"/>
                    <path id="Path_10271" data-name="Path 10271" d="M246.543,419.3h5.13l2.441-19.789h-7.572Z" transform="translate(-156.858 -254.184)" fill="#ffb8b8"/>
                    <path id="Path_10272" data-name="Path 10272" d="M484.324,687.732h10.1a6.439,6.439,0,0,1,6.439,6.438v.21H484.324Z" transform="translate(-395.947 -524.287)" fill="#2f2e41"/>
                    <path id="Path_10273" data-name="Path 10273" d="M92.715,419.3h5.131l2.441-19.789H92.714Z" transform="translate(-58.988 -254.184)" fill="#ffb8b8"/>
                    <path id="Path_10274" data-name="Path 10274" d="M330.495,687.732h10.1a6.439,6.439,0,0,1,6.439,6.438v.21H330.5Z" transform="translate(-298.077 -524.287)" fill="#2f2e41"/>
                    <path id="Path_10275" data-name="Path 10275" d="M349.119,316.026l-8.51,7.264,6.984,22.1,1.576,4.935s-9.622,8.871-15.575,33.653S317.9,441.689,317.9,441.689l20.557,5.885,16.725-56.059,19.672,43.98,2.271,13.008,17.507-5.162-4.13-32.624-20.648-56.472L372,339.276a16.552,16.552,0,0,0-2.375-15.383l-1.755-7.433-6.287-1.549Z" transform="translate(-290.064 -287.088)" fill="#2f2e41"/>
                    <path id="Path_10276" data-name="Path 10276" d="M399.221,263.412H376.214a1.787,1.787,0,0,1-1.785-1.785v-9.917a13.288,13.288,0,1,1,26.577,0v9.917A1.787,1.787,0,0,1,399.221,263.412Z" transform="translate(-326.029 -238.423)" fill="#2f2e41"/>
                    <circle id="Ellipse_485" data-name="Ellipse 485" cx="9.743" cy="9.743" r="9.743" transform="translate(51.197 18.893) rotate(-61.337)" fill="#ffb8b8"/>
                    <path id="Path_10277" data-name="Path 10277" d="M415.892,258.946H401.824l-.144-2.02-.721,2.02h-2.166l-.286-4-1.43,4h-4.191v-.2A10.524,10.524,0,0,1,403.4,248.236h1.983a10.524,10.524,0,0,1,10.512,10.512Z" transform="translate(-337.771 -244.667)" fill="#2f2e41"/>
                    <path id="Path_10278" data-name="Path 10278" d="M398.572,279.205a1.828,1.828,0,0,1-.316-.028l-10.3-1.818V260.335h11.34l-.281.327c-3.906,4.555-.963,11.942,1.138,15.94a1.759,1.759,0,0,1-.14,1.867A1.778,1.778,0,0,1,398.572,279.205Z" transform="translate(-334.634 -252.364)" fill="#2f2e41"/>
                    <path id="Path_10279" data-name="Path 10279" d="M445.488,450.517l-90.281,31.92A8.936,8.936,0,0,1,343.816,477l-15.509-43.865a8.937,8.937,0,0,1,5.44-11.392l90.281-31.92a8.937,8.937,0,0,1,11.392,5.44l15.509,43.865A8.937,8.937,0,0,1,445.488,450.517Z" transform="translate(-296.36 -334.422)" fill="#fff"/>
                    <path id="Path_10280" data-name="Path 10280" d="M479.482,526.253l.082.232a8.525,8.525,0,0,1-5.2,10.878l-90.732,32.079a8.524,8.524,0,0,1-10.877-5.195l-.082-.232Z" transform="translate(-324.913 -421.55)" fill="#f2f2f2"/>
                    <path id="Path_10281" data-name="Path 10281" d="M359.089,497.4c-5.984,3.938-13.654.974-16.336-3.342l.428-.243C348.275,490.641,355.841,492.41,359.089,497.4Z" transform="translate(-305.875 -399.899)" fill="#1fc600"/>
                    <path id="Path_10282" data-name="Path 10282" d="M576.688,498.4a4.9,4.9,0,0,1-3.92-.071c-2.569-1.277-3.775-5.062-4.743-8.1-.282-.885-.548-1.721-.819-2.4l0-.01a5.447,5.447,0,0,1,3.3-6.916l12.143-4.293a4.894,4.894,0,0,1,3.916.07c2.569,1.275,3.775,5.059,4.745,8.1.283.887.55,1.724.822,2.408a5.45,5.45,0,0,1-3.3,6.927Zm-8.978-10.772c.277.7.546,1.542.83,2.434.938,2.944,2.1,6.608,4.469,7.783a4.324,4.324,0,0,0,3.5.045l12.14-4.292a4.906,4.906,0,0,0,2.974-6.228c-.275-.691-.545-1.537-.831-2.433-.939-2.943-2.107-6.606-4.47-7.779a4.321,4.321,0,0,0-3.5-.045L570.683,481.4A4.9,4.9,0,0,0,567.71,487.624Z" transform="translate(-448.483 -389.722)" fill="#3f3d56"/>
                    <path id="Path_10283" data-name="Path 10283" d="M355.557,498.3a12.6,12.6,0,0,1-14.251-4.646l-.149-.239.667-.379c5.171-3.221,12.926-1.475,16.273,3.668l.147.225-.225.148a11.355,11.355,0,0,1-2.462,1.223Zm-13.639-4.7a11.765,11.765,0,0,0,7.12,4.532,11.277,11.277,0,0,0,8.454-1.364c-3.274-4.736-10.528-6.307-15.386-3.275Z" transform="translate(-304.86 -399.385)" fill="#3f3d56"/>
                    <path id="Path_10284" data-name="Path 10284" d="M378.117,569.78a4.49,4.49,0,0,1-4.566-.758,5.616,5.616,0,0,1-1.837-5.191,4.506,4.506,0,0,1,3.164-3.493l16.18-5.721a4.514,4.514,0,0,1,4.653.732,5.616,5.616,0,0,1,1.835,5.191,4.525,4.525,0,0,1-3.165,3.488l-16.18,5.721Zm-3.138-8.905a3.976,3.976,0,0,0-2.734,3.057,5.06,5.06,0,0,0,1.655,4.677,3.98,3.98,0,0,0,4.117.632l16.188-5.723a3.986,3.986,0,0,0,2.81-3.079,5.059,5.059,0,0,0-1.653-4.677,4,4,0,0,0-4.12-.636l-16.189,5.724-.074.026Z" transform="translate(-324.249 -439.376)" fill="#3f3d56"/>
                    <path id="Path_10285" data-name="Path 10285" d="M582.033,497.092l-5.1,1.8a1.353,1.353,0,0,1-.9-2.55l5.1-1.8a1.353,1.353,0,0,1,.9,2.55Z" transform="translate(-453.72 -401.324)" fill="#1fc600"/>
                    <path id="Path_10286" data-name="Path 10286" d="M586,508.31l-5.1,1.8a1.352,1.352,0,1,1-.9-2.55l5.1-1.8a1.352,1.352,0,1,1,.9,2.55Z" transform="translate(-456.244 -408.461)" fill="#1fc600"/>
                    <path id="Path_10287" data-name="Path 10287" d="M589.965,519.527l-5.1,1.8a1.353,1.353,0,0,1-.9-2.55l5.1-1.8a1.353,1.353,0,0,1,.9,2.55Z" transform="translate(-458.767 -415.598)" fill="#1fc600"/>
                    <path id="Path_10288" data-name="Path 10288" d="M606.571,488.417l-5.1,1.8a1.353,1.353,0,0,1-.9-2.55l5.1-1.8a1.352,1.352,0,1,1,.9,2.55Z" transform="translate(-469.332 -395.805)" fill="#1fc600"/>
                    <path id="Path_10289" data-name="Path 10289" d="M610.537,499.634l-5.1,1.8a1.353,1.353,0,1,1-.9-2.55l5.1-1.8a1.352,1.352,0,1,1,.9,2.55Z" transform="translate(-471.855 -402.941)" fill="#1fc600"/>
                    <path id="Path_10290" data-name="Path 10290" d="M614.5,510.851l-5.1,1.8a1.353,1.353,0,0,1-.9-2.55l5.1-1.8a1.353,1.353,0,0,1,.9,2.55Z" transform="translate(-474.379 -410.078)" fill="#1fc600"/>
                    <rect id="Rectangle_17870" data-name="Rectangle 17870" width="113.286" height="0.541" transform="matrix(0.943, -0.333, 0.333, 0.943, 35.63, 108.15)" fill="#3f3d56"/>
                    <path id="Path_10291" data-name="Path 10291" d="M445.488,450.517l-90.281,31.92A8.936,8.936,0,0,1,343.816,477l-15.509-43.865a8.937,8.937,0,0,1,5.44-11.392l90.281-31.92a8.937,8.937,0,0,1,11.392,5.44l15.509,43.865A8.937,8.937,0,0,1,445.488,450.517Zm-111.56-28.267a8.4,8.4,0,0,0-5.111,10.7l15.509,43.865a8.4,8.4,0,0,0,10.7,5.111l90.281-31.92a8.4,8.4,0,0,0,5.111-10.7L434.91,395.441a8.4,8.4,0,0,0-10.7-5.111Z" transform="translate(-296.36 -334.422)" fill="#3f3d56"/>
                    <path id="Path_10292" data-name="Path 10292" d="M509.837,705.151H241.74a.364.364,0,0,1,0-.728h268.1a.364.364,0,1,1,0,.728Z" transform="translate(-241.376 -534.907)" fill="#cbcbcb"/>
                  </g>
                </svg>
              </Col>
            </Row>
            <Row className="d-flex mt-3">
              <Col xs={12} sm={12} md={12} xl={12} className="mb-3">
                <Form.Group id="name_on_card">
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control className="proposal-inputs" required type="text" placeholder="Maria" value={nameOnCard} onChange={(e)=>setNameOnCard(e.target.value)}/>
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} xl={12} className="mb-3">
                <Form.Group id="card_number">
                    <Form.Label>Card Number</Form.Label>
<<<<<<< HEAD
                    <Form.Control className="proposal-inputs" maxLength="19" required type="password" placeholder="**** **** **** ****" value={numberOnCard} onChange={(e)=>chackNumber(e.target.value, 'card')}/>
=======
                    <Form.Control className="proposal-inputs" maxlength="19" required type="password" placeholder="**** **** **** ****" value={numberOnCard} onChange={(e)=>chackNumber(e.target.value, 'card')}/>
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                    
                </Form.Group>
              </Col>
              <Col xs={7} sm={7} md={7} xl={7} className="mb-3">
                <Form.Group id="exp_date">
                    <Form.Label>Expiry date</Form.Label>
                    <Form.Control className="proposal-inputs" required type="month" placeholder="09/2023" value={ExpDateOnCard} onChange={(e)=>setExpDateOnCard(e.target.value)}/>

                </Form.Group>
              </Col>
              <Col xs={5} sm={5} md={5} xl={5} className="mb-3">
                <Form.Group id="cvc">
                    <Form.Label>CVV</Form.Label>
<<<<<<< HEAD
                    <Form.Control className="proposal-inputs" required type="text" minLength={0} maxLength="3" placeholder="000" value={cvcOnCard} onChange={(e)=>chackNumber(e.target.value, 'cvc')}/>
=======
                    <Form.Control className="proposal-inputs" required type="text" minLength={0} maxlength="3" placeholder="000" value={cvcOnCard} onChange={(e)=>chackNumber(e.target.value, 'cvc')}/>
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                </Form.Group>
              </Col>
            </Row>
            <Row className="d-flex mt-3 text-center">
              <Col xs={12} sm={12} xl={12} >
<<<<<<< HEAD
                <Button className="m-1 proposal-submitBtn  upwork-btn-apply" onClick={payNow}>Apply Now</Button>
=======
                <Button className="m-1 proposal-submitBtn  upwork-btn-apply" onClick={hireFreelancer}>Apply Now</Button>
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
              </Col>
            </Row>
          </Col>
        </Modal.Body>
<<<<<<< HEAD
        </Modal>

        <Modal as={Modal.Dialog} centered show={loading} onHide={handleLoadingClose}  className="loaderModel">
        {/* <Modal.Body> */}
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        {/* </Modal.Body> */}
        </Modal>
=======
      </Modal>
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
    </>
  );
};

export default HireFreelancer;