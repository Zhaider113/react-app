import React, { useState } from "react";
import {Card, Col, Row, Nav, Tab, Button, Form, InputGroup, Image } from '@themesberg/react-bootstrap';
import paymentPic from "../../assets/img/payoneer.png";
import americanExpress from "../../assets/img/american-express.png";
import bitcoin from "../../assets/img/bitcoin.png";
import cogoToast from 'cogo-toast';

const Setting = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  // Personal Info related data 
  const [userName, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNo] = useState(user.phoneNumber);
  const [country, setCountry] = useState(user.country);
  const countryArr = [
    {value: 'Select Country', label: 'Select Country'},
    {value: 'United State', label: 'United State'},
    {value: 'UK', label: 'UK'},
    {value: 'Pakistan', label: 'Pakistan'},
  ]

  const updatePersonalInfo = ()=>{
    try {
      let error = false;
      if(userName === ''){
        cogoToast.error("Username Required..!",{
          position: 'top-right',
          hideAfter: 3,
        });
        error = true;
      }
      if(phoneNumber === ''){
        cogoToast.error("Phone No Required..!",{
          position: 'top-right',
          hideAfter: 3,
        });
        error = true;
      }
      if(country === ''){
        cogoToast.error("Select Country Required..!",{
          position: 'top-right',
          hideAfter: 3,
        });
        error = true;
      }
      if(!error){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        let info = {username: userName, phonenumber: phoneNumber, country: country}
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(info),
          redirect: 'follow'
        };
  
        fetch(`http://16.171.150.73/api/v1/UpdateProfile/${user._id}`, requestOptions)
        .then(response => response.text())
        .then((result) => {
            let data = JSON.parse(result);
            if(data.success){
                localStorage.setItem('user', JSON.stringify(data.user));
                cogoToast.success(data.message,{
                    position: 'top-right',
                    hideAfter: 3,
                });
            }
            else{
                cogoToast.error(data.message,{
                    position: 'top-right',
                    hideAfter: 3,
                });
            }
            
        })
      }
    } catch (error) {
      cogoToast.error(error.message,{
        position: 'top-right',
        hideAfter: 3,
    });
    }
  }

  return (
    <>
    
      <Tab.Container defaultActiveKey="personal">
        <Row  className="mt-4 p-3">
          <Col lg={3} md={4} sm={4} xs={4}>
            <Card border="light" className="shadow-sm profile-detail-nav">
                <Nav fill variant="pills" className="flex-column vertical-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="personal" className="mb-sm-3 mb-md-3 personal-detail">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z" fill="none" stroke-width="2.5" stroke-linejoin="round"/>
                        <path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" fill="none" stroke-width="2.5"/>
                      </svg>
                      Personal details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="payment" className="mb-sm-3 mb-md-3 personal-detail">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.75 14.5C15.5511 14.5 15.3603 14.579 15.2197 14.7197C15.079 14.8603 15 15.0511 15 15.25C15 15.4489 15.079 15.6397 15.2197 15.7803C15.3603 15.921 15.5511 16 15.75 16H18.25C18.4489 16 18.6397 15.921 18.7803 15.7803C18.921 15.6397 19 15.4489 19 15.25C19 15.0511 18.921 14.8603 18.7803 14.7197C18.6397 14.579 18.4489 14.5 18.25 14.5H15.75ZM2 8.25C2 7.38805 2.34241 6.5614 2.9519 5.9519C3.5614 5.34241 4.38805 5 5.25 5H18.75C19.1768 5 19.5994 5.08406 19.9937 5.24739C20.388 5.41072 20.7463 5.65011 21.0481 5.9519C21.3499 6.25369 21.5893 6.61197 21.7526 7.00628C21.9159 7.40059 22 7.8232 22 8.25V15.75C22 16.1768 21.9159 16.5994 21.7526 16.9937C21.5893 17.388 21.3499 17.7463 21.0481 18.0481C20.7463 18.3499 20.388 18.5893 19.9937 18.7526C19.5994 18.9159 19.1768 19 18.75 19H5.25C4.38805 19 3.5614 18.6576 2.9519 18.0481C2.34241 17.4386 2 16.612 2 15.75V8.25ZM20.5 9.5V8.25C20.5 7.78587 20.3156 7.34075 19.9874 7.01256C19.6592 6.68437 19.2141 6.5 18.75 6.5H5.25C4.78587 6.5 4.34075 6.68437 4.01256 7.01256C3.68437 7.34075 3.5 7.78587 3.5 8.25V9.5H20.5ZM3.5 11V15.75C3.5 16.716 4.284 17.5 5.25 17.5H18.75C19.2141 17.5 19.6592 17.3156 19.9874 16.9874C20.3156 16.6592 20.5 16.2141 20.5 15.75V11H3.5Z" fill="none"/>
                      </svg>
                      Payment information
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="safety" className="mb-sm-3 mb-md-3 personal-detail">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_14_6019)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.702 2.19512C12.2494 2.02545 11.7506 2.02545 11.298 2.19512L4.298 4.82012C3.91669 4.96305 3.5881 5.21898 3.35615 5.55368C3.1242 5.88838 2.99995 6.2859 3 6.69312V12.0561C2.99996 13.7275 3.46537 15.366 4.34407 16.7878C5.22277 18.2096 6.48004 19.3586 7.975 20.1061L11.329 21.7831C11.5373 21.8873 11.7671 21.9416 12 21.9416C12.2329 21.9416 12.4627 21.8873 12.671 21.7831L16.025 20.1061C17.52 19.3586 18.7772 18.2096 19.6559 16.7878C20.5346 15.366 21 13.7275 21 12.0561V6.69312C21.0001 6.2859 20.8758 5.88838 20.6438 5.55368C20.4119 5.21898 20.0833 4.96305 19.702 4.82012L12.702 2.19512ZM11 4.44312L5 6.69312V12.0561C5.00023 13.356 5.36239 14.6301 6.04592 15.7358C6.72944 16.8414 7.70732 17.7349 8.87 18.3161L11 19.3831V4.44312ZM13 19.3831L15.13 18.3171C16.2928 17.7358 17.2708 16.8422 17.9543 15.7363C18.6379 14.6305 19 13.3562 19 12.0561V6.69312L13 4.44312V19.3831Z" fill="none"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_14_6019">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      Safety
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="parameter" className="mb-sm-3 mb-md-3 personal-detail">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.8999 12.66C19.7396 12.4775 19.6512 12.2429 19.6512 12C19.6512 11.7571 19.7396 11.5225 19.8999 11.34L21.1799 9.90002C21.3209 9.74269 21.4085 9.54472 21.4301 9.33452C21.4516 9.12433 21.4061 8.9127 21.2999 8.73002L19.2999 5.27002C19.1948 5.08754 19.0348 4.94289 18.8426 4.8567C18.6505 4.77051 18.4361 4.74718 18.2299 4.79002L16.3499 5.17002C16.1107 5.21945 15.8616 5.17961 15.6498 5.05802C15.4379 4.93643 15.2779 4.7415 15.1999 4.51002L14.5899 2.68002C14.5228 2.4814 14.395 2.30888 14.2245 2.18686C14.0541 2.06484 13.8495 1.99948 13.6399 2.00002H9.6399C9.42183 1.98864 9.20603 2.04894 9.02546 2.17173C8.84489 2.29452 8.70948 2.47304 8.6399 2.68002L8.0799 4.51002C8.0019 4.7415 7.84187 4.93643 7.63001 5.05802C7.41815 5.17961 7.16911 5.21945 6.9299 5.17002L4.9999 4.79002C4.80445 4.7624 4.6052 4.79324 4.42724 4.87866C4.24929 4.96407 4.1006 5.10025 3.9999 5.27002L1.9999 8.73002C1.89106 8.91067 1.84212 9.1211 1.86008 9.33124C1.87804 9.54138 1.96198 9.74046 2.0999 9.90002L3.3699 11.34C3.53022 11.5225 3.61863 11.7571 3.61863 12C3.61863 12.2429 3.53022 12.4775 3.3699 12.66L2.0999 14.1C1.96198 14.2596 1.87804 14.4587 1.86008 14.6688C1.84212 14.8789 1.89106 15.0894 1.9999 15.27L3.9999 18.73C4.10499 18.9125 4.26502 19.0571 4.45715 19.1433C4.64928 19.2295 4.86372 19.2529 5.0699 19.21L6.9499 18.83C7.18911 18.7806 7.43815 18.8204 7.65001 18.942C7.86187 19.0636 8.0219 19.2585 8.0999 19.49L8.7099 21.32C8.77948 21.527 8.91489 21.7055 9.09546 21.8283C9.27603 21.9511 9.49183 22.0114 9.7099 22H13.7099C13.9195 22.0006 14.1241 21.9352 14.2945 21.8132C14.465 21.6912 14.5928 21.5186 14.6599 21.32L15.2699 19.49C15.3479 19.2585 15.5079 19.0636 15.7198 18.942C15.9316 18.8204 16.1807 18.7806 16.4199 18.83L18.2999 19.21C18.5061 19.2529 18.7205 19.2295 18.9126 19.1433C19.1048 19.0571 19.2648 18.9125 19.3699 18.73L21.3699 15.27C21.4761 15.0873 21.5216 14.8757 21.5001 14.6655C21.4785 14.4553 21.3909 14.2573 21.2499 14.1L19.8999 12.66ZM18.4099 14L19.2099 14.9L17.9299 17.12L16.7499 16.88C16.0297 16.7328 15.2805 16.8551 14.6445 17.2238C14.0085 17.5925 13.53 18.1819 13.2999 18.88L12.9199 20H10.3599L9.9999 18.86C9.76975 18.1619 9.29128 17.5725 8.6553 17.2038C8.01932 16.8351 7.27012 16.7128 6.5499 16.86L5.3699 17.1L4.0699 14.89L4.8699 13.99C5.36185 13.44 5.63383 12.7279 5.63383 11.99C5.63383 11.2521 5.36185 10.54 4.8699 9.99002L4.0699 9.09002L5.3499 6.89002L6.5299 7.13002C7.25012 7.27724 7.99932 7.1549 8.6353 6.78622C9.27128 6.41753 9.74975 5.82818 9.9799 5.13002L10.3599 4.00002H12.9199L13.2999 5.14002C13.53 5.83818 14.0085 6.42753 14.6445 6.79622C15.2805 7.1649 16.0297 7.28724 16.7499 7.14002L17.9299 6.90002L19.2099 9.12002L18.4099 10.02C17.9235 10.5688 17.6549 11.2767 17.6549 12.01C17.6549 12.7433 17.9235 13.4513 18.4099 14ZM11.6399 8.00002C10.8488 8.00002 10.0754 8.23461 9.41761 8.67414C8.75982 9.11366 8.24713 9.73838 7.94438 10.4693C7.64163 11.2002 7.56241 12.0045 7.71675 12.7804C7.8711 13.5563 8.25206 14.269 8.81147 14.8284C9.37088 15.3879 10.0836 15.7688 10.8595 15.9232C11.6355 16.0775 12.4397 15.9983 13.1706 15.6955C13.9015 15.3928 14.5262 14.8801 14.9658 14.2223C15.4053 13.5645 15.6399 12.7911 15.6399 12C15.6399 10.9392 15.2185 9.92174 14.4683 9.17159C13.7182 8.42144 12.7008 8.00002 11.6399 8.00002ZM11.6399 14C11.2443 14 10.8577 13.8827 10.5288 13.663C10.1999 13.4432 9.94351 13.1308 9.79214 12.7654C9.64076 12.3999 9.60116 11.9978 9.67833 11.6098C9.7555 11.2219 9.94598 10.8655 10.2257 10.5858C10.5054 10.3061 10.8618 10.1156 11.2497 10.0384C11.6377 9.96128 12.0398 10.0009 12.4053 10.1523C12.7707 10.3036 13.0831 10.56 13.3028 10.8889C13.5226 11.2178 13.6399 11.6045 13.6399 12C13.6399 12.5304 13.4292 13.0392 13.0541 13.4142C12.679 13.7893 12.1703 14 11.6399 14Z" fill="none"/>
                      </svg>
                        Parameter
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="taxes" className="mb-sm-3 mb-md-3 personal-detail">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 7.5V21H16.5V7.5H3ZM2.25 6H17.25C17.4489 6 17.6397 6.07902 17.7803 6.21967C17.921 6.36032 18 6.55109 18 6.75V21.75C18 21.9489 17.921 22.1397 17.7803 22.2803C17.6397 22.421 17.4489 22.5 17.25 22.5H2.25C2.05109 22.5 1.86032 22.421 1.71967 22.2803C1.57902 22.1397 1.5 21.9489 1.5 21.75V6.75C1.5 6.55109 1.57902 6.36032 1.71967 6.21967C1.86032 6.07902 2.05109 6 2.25 6ZM22.5 2.25V18.75C22.5 18.9489 22.421 19.1397 22.2803 19.2803C22.1397 19.421 21.9489 19.5 21.75 19.5H19.5V18H21V3H9V4.5H7.5V2.25C7.5 2.05109 7.57902 1.86032 7.71967 1.71967C7.86032 1.57902 8.05109 1.5 8.25 1.5H21.75C21.9489 1.5 22.1397 1.57902 22.2803 1.71967C22.421 1.86032 22.5 2.05109 22.5 2.25ZM6 15.75H13.5V17.25H6V15.75ZM6 11.25H13.5V12.75H6V11.25Z" fill="none"/>
                      </svg>
                      Taxes
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="get-paid" className="mb-sm-3 mb-md-3 personal-detail">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 15V19.5H21V9H18V7.5H21.5385C21.873 7.5 21.9945 7.5345 22.116 7.6005C22.2374 7.66417 22.3367 7.76298 22.401 7.884C22.4655 8.0055 22.5 8.127 22.5 8.4615V20.0385C22.5 20.373 22.4655 20.4945 22.3995 20.616C22.3358 20.7374 22.237 20.8367 22.116 20.901C21.9945 20.9655 21.873 21 21.5385 21H5.4615C5.127 21 5.0055 20.9655 4.884 20.8995C4.76264 20.8358 4.66331 20.737 4.599 20.616C4.536 20.4945 4.5 20.373 4.5 20.04V15H6Z" fill="none"/>
                        <path d="M18 4.5H3V15H18V4.5ZM19.5 3.9615V15.5385C19.5 15.873 19.4655 15.9945 19.3995 16.116C19.3358 16.2374 19.237 16.3367 19.116 16.401C18.9945 16.4655 18.873 16.5 18.5385 16.5H2.4615C2.127 16.5 2.0055 16.4655 1.884 16.3995C1.76264 16.3358 1.66331 16.237 1.599 16.116C1.536 15.9945 1.5 15.873 1.5 15.54V3.9615C1.5 3.627 1.5345 3.5055 1.6005 3.384C1.66417 3.26264 1.76298 3.16331 1.884 3.099C2.0055 3.036 2.127 3 2.46 3H18.537C18.8715 3 18.993 3.0345 19.1145 3.1005C19.2359 3.16417 19.3352 3.26298 19.3995 3.384C19.464 3.5055 19.4985 3.627 19.4985 3.9615H19.5Z" fill="none"/>
                        <path d="M10.5 13.5C9.50544 13.5 8.55161 13.1049 7.84835 12.4017C7.14509 11.6984 6.75 10.7446 6.75 9.75C6.75 8.75544 7.14509 7.80161 7.84835 7.09835C8.55161 6.39509 9.50544 6 10.5 6C11.4946 6 12.4484 6.39509 13.1517 7.09835C13.8549 7.80161 14.25 8.75544 14.25 9.75C14.25 10.7446 13.8549 11.6984 13.1517 12.4017C12.4484 13.1049 11.4946 13.5 10.5 13.5ZM10.5 12C11.0967 12 11.669 11.7629 12.091 11.341C12.5129 10.919 12.75 10.3467 12.75 9.75C12.75 9.15326 12.5129 8.58097 12.091 8.15901C11.669 7.73705 11.0967 7.5 10.5 7.5C9.90326 7.5 9.33097 7.73705 8.90901 8.15901C8.48705 8.58097 8.25 9.15326 8.25 9.75C8.25 10.3467 8.48705 10.919 8.90901 11.341C9.33097 11.7629 9.90326 12 10.5 12Z" fill="none"/>
                      </svg>
                      Get Paid
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
            </Card>
          </Col>
          <Col lg={9} md={8} sm={8} xs={8}>
            <Tab.Content>
              <Tab.Pane eventKey="personal">
                <Form className="personal-tab-form">
                  <h5 className="mb-4 personal-tab-heading">Account</h5>
                  <p className="personal-tab-subheading">Edit your personal details</p>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group id="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control required type="text" placeholder="Anna Adome" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="emal">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="annaadome1@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} disabled/>
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="phone">
                        <Form.Label>Phone</Form.Label>
                          <InputGroup>
                            <Form.Control required type="number" placeholder="+1 348 9038791" value={phoneNumber} onChange={(e)=>{setPhoneNo(e.target.value)}} />
                          </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                  <h5 className="mb-4 personal-tab-heading">Location</h5>
                  <p className="personal-tab-subheading">Edit your Location details</p>
                  <Row className="align-items-center">
                    <Col md={12} className="mb-3">
                      <Form.Group id="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Select value={country} onChange={(e)=>setCountry(e.target.value)}>
                          {countryArr.map((item, i) => (
                            <option value={item.value} key={i}>
                                {item.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm={12} className="mb-3">
                      <Form.Group id="street">
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control type="text" placeholder="969 Leverton Cove Road" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} className="mb-3">
                      <Form.Group id="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Springfield" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} className="mb-3">
                      <Form.Group id="state">
                        <Form.Label>State/Province</Form.Label>
                        <Form.Control type="text" placeholder="Massachusetts" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={7}  className="mt-3 pull-right">
                      <Button className=" m-1 personal-tab-cancelBtn">Cancel</Button>
                      <Button type="submit" className="m-1 personal-tab-update" onClick={updatePersonalInfo}>Update</Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="payment">
                <Form className="personal-tab-form">
                  <h5 className="mb-4 personal-tab-heading">Payment Details</h5>
                  <p className="personal-tab-subheading">Edit your personal details</p>
                  <Row>
                    <Col md={2} className="mb-3">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="84" height="27" viewBox="0 0 84 27" fill="none">
                        <path d="M77.5077 1.05737H72.2841C70.7048 1.05737 69.49 1.54329 68.7612 3.12253L58.7998 25.8393H65.8456C65.8456 25.8393 67.0604 22.8023 67.3034 22.0734C68.0323 22.0734 74.9566 22.0734 75.9285 22.0734C76.1714 22.9238 76.7788 25.7178 76.7788 25.7178H83.0958L77.5077 1.05737ZM69.2471 16.9712C69.8545 15.5135 71.9196 10.0469 71.9196 10.0469C71.9196 10.1684 72.527 8.58913 72.77 7.73877L73.2559 9.9254C73.2559 9.9254 74.5922 15.8779 74.8351 17.0927H69.2471V16.9712Z" fill="#3362AB"/>
                        <path d="M59.2821 17.7003C59.2821 22.8025 54.6659 26.2039 47.4985 26.2039C44.4615 26.2039 41.546 25.5965 39.9668 24.8676L40.9386 19.2795L41.789 19.644C43.9756 20.6158 45.4334 20.9803 48.1059 20.9803C50.0496 20.9803 52.1148 20.2514 52.1148 18.5507C52.1148 17.4573 51.2644 16.7285 48.5919 15.5137C46.0408 14.2989 42.6394 12.3552 42.6394 8.83227C42.6394 3.97307 47.3771 0.693115 54.0585 0.693115C56.6095 0.693115 58.7962 1.17903 60.1325 1.78643L59.1606 7.13155L58.6747 6.64563C57.4599 6.15971 55.8807 5.67379 53.5725 5.67379C51.0215 5.79527 49.8067 6.88859 49.8067 7.86043C49.8067 8.95375 51.2644 9.80411 53.5725 10.8974C57.4599 12.7196 59.2821 14.7848 59.2821 17.7003Z" fill="#3362AB"/>
                        <path d="M0 1.30086L0.12148 0.814941H10.5687C12.0265 0.814941 13.1198 1.30086 13.4843 2.8801L15.7924 13.8133C13.4843 7.98225 8.13915 3.24454 0 1.30086Z" fill="#F9B50B"/>
                        <path d="M30.4888 1.05752L19.92 25.7179H12.7527L6.67871 5.06635C11.052 7.86039 14.6964 12.2337 16.0327 15.2707L16.7615 17.8217L23.3215 0.936035H30.4888V1.05752Z" fill="#3362AB"/>
                        <path d="M33.284 0.936035H39.9654L35.7136 25.7179H29.0322L33.284 0.936035Z" fill="#3362AB"/>
                      </svg>
                    </Col>
                    <Col md={2} className="mb-3">
                      <Image src={americanExpress}  className="img-fluid" alt="payment method logo" />
                    </Col>
                    <Col md={2} className="mb-3">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="49" height="31" viewBox="0 0 49 31" fill="none">
                        <path d="M30.728 3.99798L17.9287 4.04199L18.3166 27.4742L31.1158 27.4302L30.728 3.99798Z" fill="#FF5F00"/>
                        <path d="M18.7712 15.8066C18.692 11.0407 20.827 6.806 24.171 4.05916C21.6469 2.07844 18.4824 0.887363 15.0521 0.899112C6.92542 0.926945 0.461466 7.62176 0.598517 15.8689C0.735568 24.116 7.42128 30.7658 15.5479 30.7379C18.9783 30.7262 22.1028 29.5136 24.5608 27.5158C21.1266 24.8336 18.8504 20.5726 18.7712 15.8066Z" fill="#EB001B"/>
                        <path d="M48.4499 15.6046C48.587 23.8517 42.123 30.5465 33.9964 30.5744C30.566 30.5861 27.4015 29.3951 24.8774 27.4143C28.2623 24.6674 30.3564 20.4328 30.2772 15.6669C30.198 10.9009 27.9226 6.68132 24.4876 3.9577C26.9456 1.95992 30.0702 0.7473 33.5005 0.735552C41.6272 0.707719 48.3136 7.39894 48.4499 15.6046Z" fill="#F79E1B"/>
                      </svg>
                    </Col>
                    <Col md={2} className="mb-3">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="101" height="28" viewBox="0 0 101 28" fill="none">
                        <path d="M17.5852 1.98293C16.3354 1.12375 14.7045 0.693115 12.6926 0.693115H4.90337C4.28658 0.693115 3.94583 1.00158 3.8811 1.61792L0.716963 21.48C0.684078 21.6751 0.732885 21.8535 0.862938 22.0157C0.992248 22.1782 1.15489 22.259 1.34967 22.259H5.04949C5.69842 22.259 6.0551 21.9513 6.12057 21.3342L6.99672 15.9794C7.02871 15.7199 7.14285 15.5089 7.33763 15.3464C7.53226 15.1842 7.7757 15.0781 8.0678 15.0296C8.3599 14.9814 8.63533 14.957 8.89544 14.957C9.1548 14.957 9.46297 14.9735 9.82054 15.0058C10.1772 15.0381 10.4046 15.054 10.5021 15.054C13.293 15.054 15.4837 14.2676 17.0742 12.693C18.664 11.1192 19.4598 8.93689 19.4598 6.14507C19.4598 4.23029 18.8344 2.843 17.5852 1.98248V1.98293ZM13.5692 7.94691C13.4064 9.08301 12.985 9.82911 12.3035 10.1862C11.6218 10.5438 10.6482 10.7218 9.38262 10.7218L7.776 10.7703L8.60379 5.56117C8.66837 5.20449 8.87922 5.02593 9.2365 5.02593H10.1617C11.4593 5.02593 12.4011 5.21297 12.9853 5.58557C13.5692 5.95907 13.764 6.74638 13.5692 7.94691Z" fill="#003087"/>
                        <path d="M99.7881 0.693115H96.1861C95.8281 0.693115 95.6174 0.87168 95.5531 1.22895L92.3887 21.4809L92.3398 21.5782C92.3398 21.7413 92.4047 21.8947 92.5349 22.0408C92.6639 22.1867 92.827 22.2597 93.0215 22.2597H96.235C96.8506 22.2597 97.1915 21.952 97.2575 21.3349L100.422 1.42373V1.37537C100.421 0.920783 100.21 0.693712 99.7881 0.693712V0.693115Z" fill="#009CDE"/>
                        <path d="M56.2664 8.53161C56.2664 8.36971 56.2012 8.21526 56.0722 8.06958C55.942 7.92361 55.7959 7.8501 55.634 7.8501H51.8855C51.5278 7.8501 51.2357 8.01318 51.0089 8.33683L45.8487 15.9315L43.7067 8.62923C43.5436 8.11035 43.1871 7.8501 42.6358 7.8501H38.984C38.8213 7.8501 38.6754 7.92331 38.5463 8.06958C38.4161 8.21526 38.3516 8.37001 38.3516 8.53161C38.3516 8.59694 38.6681 9.55403 39.3008 11.4039C39.9335 13.2544 40.615 15.2505 41.3453 17.3926C42.0757 19.5343 42.4567 20.6709 42.4893 20.7996C39.8278 24.4351 38.4977 26.3823 38.4977 26.6416C38.4977 27.0639 38.7082 27.2746 39.1305 27.2746H42.879C43.2359 27.2746 43.5278 27.1127 43.7555 26.788L56.1697 8.87222C56.2341 8.80794 56.2664 8.69485 56.2664 8.53146V8.53161Z" fill="#003087"/>
                        <path d="M91.1669 7.85028H87.4669C87.0121 7.85028 86.7372 8.38597 86.6398 9.4572C85.7949 8.15934 84.2543 7.50952 82.0144 7.50952C79.6778 7.50952 77.6897 8.38597 76.0511 10.1386C74.4119 11.8912 73.5928 13.9527 73.5928 16.3216C73.5928 18.2369 74.1526 19.7621 75.272 20.8976C76.3917 22.0343 77.8925 22.6015 79.7756 22.6015C80.7166 22.6015 81.674 22.4065 82.6476 22.0173C83.6212 21.6279 84.3832 21.1089 84.936 20.4595C84.936 20.4921 84.9028 20.6376 84.8387 20.8972C84.7731 21.1573 84.7411 21.3526 84.7411 21.4813C84.7411 22.0013 84.9515 22.2602 85.3741 22.2602H88.7334C89.3493 22.2602 89.7067 21.9525 89.8037 21.3354L91.8 8.62911C91.832 8.43418 91.7835 8.25606 91.6539 8.09357C91.5234 7.93167 91.3615 7.85028 91.1669 7.85028ZM84.814 17.4412C83.9863 18.2526 82.9882 18.6581 81.82 18.6581C80.8784 18.6581 80.1163 18.3989 79.5319 17.8793C78.9474 17.3612 78.6553 16.647 78.6553 15.7373C78.6553 14.5373 79.0611 13.5222 79.8728 12.6947C80.683 11.8671 81.6901 11.4534 82.8909 11.4534C83.7989 11.4534 84.5536 11.7211 85.1546 12.2563C85.7544 12.792 86.0556 13.5304 86.0556 14.4719C86.0553 15.6401 85.6415 16.6302 84.814 17.4412Z" fill="#009CDE"/>
                        <path d="M35.8666 7.85028H32.1667C31.7116 7.85028 31.4364 8.38597 31.3389 9.4572C30.4626 8.15934 28.9209 7.50952 26.714 7.50952C24.3772 7.50952 22.3891 8.38597 20.7503 10.1386C19.1111 11.8912 18.292 13.9527 18.292 16.3216C18.292 18.2369 18.8519 19.7621 19.9717 20.8976C21.0914 22.0343 22.5921 22.6015 24.4747 22.6015C25.383 22.6015 26.3247 22.4065 27.2982 22.0173C28.2718 21.6279 29.0508 21.1089 29.635 20.4595C29.5048 20.8486 29.4402 21.1895 29.4402 21.4813C29.4402 22.0013 29.651 22.2602 30.073 22.2602H33.4321C34.0483 22.2602 34.4057 21.9525 34.5032 21.3354L36.499 8.62911C36.531 8.43418 36.4825 8.25606 36.3531 8.09357C36.2232 7.93167 36.0611 7.85028 35.8666 7.85028ZM29.5136 17.4653C28.6858 18.2614 27.6711 18.6581 26.471 18.6581C25.5292 18.6581 24.7747 18.3989 24.2071 17.8793C23.6389 17.3612 23.3551 16.647 23.3551 15.7373C23.3551 14.5373 23.7606 13.5222 24.5723 12.6947C25.3831 11.8671 26.3893 11.4532 27.5906 11.4532C28.4989 11.4532 29.2535 11.7211 29.8545 12.2563C30.4544 12.792 30.755 13.5304 30.755 14.4719C30.7549 15.6727 30.3412 16.671 29.5136 17.4653Z" fill="#003087"/>
                        <path d="M72.8862 1.98293C71.6366 1.12375 70.0062 0.693115 67.9938 0.693115H60.2531C59.6039 0.693115 59.2466 1.00158 59.1822 1.61792L56.0177 21.48C55.9849 21.6751 56.0337 21.8535 56.1639 22.0157C56.2926 22.1782 56.4557 22.259 56.6504 22.259H60.6422C61.0316 22.259 61.2911 22.0483 61.4213 21.6263L62.2976 15.9794C62.3299 15.7199 62.4435 15.5089 62.6385 15.3464C62.8333 15.1842 63.0765 15.0781 63.3689 15.0296C63.6607 14.9814 63.9361 14.957 64.1963 14.957C64.4559 14.957 64.7639 14.9735 65.1211 15.0058C65.478 15.0381 65.7059 15.054 65.8027 15.054C68.5942 15.054 70.7844 14.2676 72.3749 12.693C73.9653 11.1192 74.7604 8.93689 74.7604 6.14507C74.7605 4.23029 74.1354 2.84286 72.8862 1.98248V1.98293ZM67.8965 9.9913C67.1824 10.478 66.1111 10.7213 64.6835 10.7213L63.1254 10.7701L63.9531 5.56087C64.0173 5.20434 64.2283 5.02548 64.5858 5.02548H65.4618C66.1759 5.02548 66.7437 5.05807 67.1663 5.1228C67.5874 5.18798 67.9938 5.39049 68.3832 5.7311C68.7729 6.07201 68.9674 6.56722 68.9674 7.216C68.9674 8.57962 68.61 9.50413 67.8965 9.9913Z" fill="#009CDE"/>
                      </svg>
                    </Col>
                    <Col md={2} className="mb-3">
                      <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="71" height="31" viewBox="0 0 71 31" fill="none">
                        <path d="M58.6777 30.373C61.9117 30.373 63.4338 29.1075 64.7633 25.2715L70.5878 8.51721H67.2155L63.3097 21.4794H63.2412L59.3354 8.53477H55.8675L61.4866 24.4815L61.1856 25.4515C60.973 26.8399 59.7576 27.8303 58.3896 27.7279C58.1285 27.7279 57.6221 27.7001 57.4167 27.6723V30.3057C57.8347 30.3643 58.2569 30.3921 58.6777 30.3906V30.373ZM47.4395 21.9827C45.6706 21.9827 44.548 21.1049 44.548 19.7765C44.548 18.3998 45.6307 17.5981 47.7006 17.4708L51.3867 17.2323V18.47C51.3054 20.5095 49.6264 22.0968 47.6378 22.0134C47.5708 22.0105 47.5051 22.0047 47.4395 21.9988V21.9827ZM46.5494 24.5825C48.5565 24.6381 50.4338 23.5657 51.4424 21.7852H51.5108V24.4186H54.5807V13.5119C54.5807 10.3489 52.1143 8.31093 48.3168 8.31093C44.7947 8.31093 42.1899 10.3767 42.0943 13.2164H45.0829C45.4395 11.7724 46.7776 10.82 48.2213 10.9809C50.2498 10.9809 51.3867 11.9509 51.3867 13.7358V14.9442L47.2498 15.1973C43.3982 15.4358 41.3154 17.0524 41.3154 19.8643C41.3126 22.7157 43.4638 24.5986 46.5479 24.5986L46.5494 24.5825ZM28.7591 5.36883H32.5822C35.461 5.36883 37.1057 6.94302 37.1057 9.71249C37.1057 12.482 35.461 14.0693 32.5694 14.0693H28.7591V5.36883ZM25.4424 2.50134V24.4142H28.7591V16.9441H33.3511C37.0915 17.1504 40.2855 14.2083 40.4866 10.3723C40.498 10.1543 40.4995 9.93779 40.4909 9.7198C40.6678 5.92623 37.8133 2.7047 34.1143 2.52182C33.8961 2.51158 33.6792 2.51304 33.461 2.52328L25.4424 2.50134ZM14.4339 6.59044C12.5281 6.47779 10.8975 7.70086 9.99311 7.70086C9.08869 7.70086 7.69069 6.64749 6.18285 6.67675C4.1857 6.72942 2.36545 7.86325 1.39969 9.6569C-0.655942 13.2837 0.864742 18.6529 2.8519 21.6038C3.82479 23.0668 4.9917 24.6688 6.52522 24.6117C7.97742 24.5561 8.55374 23.6418 10.3084 23.6418C12.063 23.6418 12.5837 24.6117 14.1186 24.5825C15.7078 24.5547 16.7092 23.1195 17.685 21.6565C18.3725 20.6207 18.9075 19.4868 19.2741 18.2915C17.4011 17.4518 16.1871 15.5601 16.1771 13.4636C16.2056 11.6144 17.15 9.90853 18.685 8.93856C17.7064 7.51359 16.1357 6.63872 14.4367 6.57727L14.4339 6.59044ZM13.2442 4.65488C12.4096 5.73312 11.1329 6.35197 9.79054 6.3271C9.70495 4.98406 10.15 3.66296 11.0245 2.65934C11.8947 1.62354 13.1215 0.973961 14.4482 0.84668C14.5423 2.22776 14.1101 3.59128 13.2413 4.65049" fill="black"/>
                      </svg>
                    </Col>
                    <Col md={2} className="mb-3">
                    <Image src={bitcoin}  className="img-fluid" alt="payment method logo" />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col sm={12} className="mb-3">
                      <Form.Group id="card-name">
                        <Form.Label>Name on card</Form.Label>
                        <Form.Control className="payment-input" required type="text" placeholder="e.g. Maria Lost" />
                      </Form.Group>
                    </Col>
                    <Col sm={12} className="mb-3">
                      <Form.Group id="card-no">
                        <Form.Label>Card number</Form.Label>
                        <Form.Control  className="payment-input" required type="password" placeholder="**** **** **** ****" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} className="mb-3">
                      <Form.Group id="card-valid">
                        <Form.Label>Valid Until</Form.Label>
                        <Form.Control className="payment-input"  required type="number" placeholder="MM/YY" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} className="mb-3">
                      <Form.Group id="card-cvc">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control  className="payment-input" required type="password" placeholder="***" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} className="mt-3 offset-8">
                      <Button className=" m-1 personal-tab-cancelBtn">Cancel</Button>
                      <Button type="submit" className="m-1 personal-tab-update">Update</Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="safety">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis odit illum. Eos nobis maiores vel sint dolor nesciunt eaque quasi! Exercitationem delectus quibusdam velit in, dolore ex mollitia perferendis.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="parameter">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quam magni, in, suscipit ullam ea odit libero nemo accusantium ab, sapiente eligendi corporis. Praesentium magnam quisquam inventore iusto et facilis.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="taxes">
                <Form className="personal-tab-form">
                  <h5 className="mb-2 personal-tab-heading">Tax information</h5>
                  <p className="withdrwa-subheading">This information is required in order to confirm if you are a U.S. or non-U.S. taxpayer and whether or not Upwork is required to withhold taxes from your earnings. Add your tax information now to avoid delays in getting paid.</p>
                  <Row>
                    <Col md={12} className="mb-3 mt-4">
                      <h6 className="mb-2 get-paid-heading">Tax residence</h6>
                      <p className="personal-tab-subheading withdrwa-subheading">Your tax residence information is part of the Upwork W-9 or W-8 form process. This address will be displayed on invoices.</p>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col md={12} className="mb-3">
                      <Form.Group id="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Select defaultValue="1">
                          <option value="0">Select Country</option>
                          <option value="1">United State</option>
                          <option value="2">UK</option>
                          <option value="3">UAE</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm={12} className="mb-3">
                      <Form.Group id="street">
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control required type="text" placeholder="969 Leverton Cove Road" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} className="mb-3">
                      <Form.Group id="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control required type="text" placeholder="Springfield" />
                      </Form.Group>
                    </Col>
                    <Col sm={6} className="mb-3">
                      <Form.Group id="state">
                        <Form.Label>State/Province</Form.Label>
                        <Form.Control required type="text" placeholder="Massachusetts" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md={12} className="mb-3 mt-4">
                      <h6 className="mb-2 get-paid-heading">Taxpayer identification</h6>
                      <p className="personal-tab-subheading withdrwa-subheading">Your taxpayer identification information will be included as an Upwork W-9 or W-8 series substitute form.</p>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="fullName">
                        <Form.Label>Legal name of taxpayer</Form.Label>
                        <Form.Control required type="text" placeholder="Anna Adome" />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="tax-classification">
                        <Form.Label>Federal tax classification</Form.Label>
                        <Form.Select defaultValue="1">
                          <option value="1">Individual</option>
                          <option value="2">Comapny</option>
                          <option value="3">UAE</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="taxpayer">
                        <Form.Label>Legal name of taxpayer</Form.Label>
                        <Form.Control required type="text" placeholder="Anna Adome" />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="tax-number">
                        <Form.Label>Tax identification number submitted</Form.Label>
                          <InputGroup>
                            <Form.Control required type="number" placeholder="123456789012345" />
                          </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} className="mt-3 offset-8">
                      <Button className=" m-1 personal-tab-cancelBtn">Cancel</Button>
                      <Button type="submit" className="m-1 personal-tab-update">Update</Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="get-paid">
                <Form className="personal-tab-form">
                  <h5 className="mb-4 personal-tab-heading">Get paid</h5>
                  <p className="personal-tab-subheading">Make Withdrawal</p>
                  <Row>
                    <Col md={9} className="mb-3 mt-4">
                      <h6 className="mb-2 get-paid-heading">Available funds</h6>
                      <p className="fund-subheading">Your available balance is <span className="paid-price">$98.00</span> </p>
                    </Col>
                    <Col md={3} className="mb-3">
                      <Button className="paid-btn m-1">Get Paid Now</Button>
                    </Col>
                  </Row>
                    <hr />
                  <Row>
                    <Col md={12} className="mb-3 mt-4">
                      <h6 className="mb-3 get-paid-heading">Withdrawal schedule</h6>
                    </Col>
                    <Col md={12} className="mb-3">
                      <h6 className="mb-2 get-paid-heading withdrwa-heading-2">Preferred withdrawal method</h6>
                      <p className="withdrwa-subheading">Payoneer Payment Card (a21b3310)</p>
                      <h6 className="mb-2 get-paid-heading  withdrwa-heading-2">Preferred withdrawal schedule</h6>
                      <p className="withdrwa-subheading">Earnings will be released upon your request.</p>
                      <fieldset className="schedule-option">
                        <Form.Check
                          type="radio"
                          defaultValue="quarterly"
                          label="Quarterly (Sep 25, 2023)"
                          name="exampleRadios"
                          id="quarterly"
                          htmlFor="quarterly"
                          />

                        <Form.Check
                          defaultChecked
                          type="radio"
                          defaultValue="monthly"
                          label="Monthly (last Wednesday of each month)"
                          name="exampleRadios"
                          id="monthly"
                          htmlFor="monthly"
                          />
                          <Form.Check
                          type="radio"
                          defaultValue="twice-month"
                          label="Twice per month (1st and 3rd Wednesday of each month)"
                          name="exampleRadios"
                          id="twice-month"
                          htmlFor="twice-month"
                          />
                          <Form.Check
                          type="radio"
                          defaultValue="weekly"
                          label="Weekly (every Wednesday)"
                          name="exampleRadios"
                          id="weekly"
                          htmlFor="weekly"
                          />
                      </fieldset>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md={12} className="mb-3 mt-4">
                      <h6 className="mb-2 get-paid-heading">Minimum withdrawal amount</h6>
                      <p className="personal-tab-subheading withdrwa-subheading">On your withdrawal schedule, we’ll only withdraw your payment if your balance is larger than this amount. This may help reduce fees.</p>
                      <Form.Group id="schedule-list" className="schedule-list">
                        <Form.Select defaultValue="5">
                          <option value="1">$20.00</option>
                          <option value="2">$40.00</option>
                          <option value="3">$60.00</option>
                          <option value="4">$80.00</option>
                          <option value="5">$100.00 or more</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md={12} className="mb-3 mt-4">
                      <h6 className="mb-4 get-paid-heading">Withdrawal methods</h6>
                    </Col>
                    <Col md={2} className="mb-3">
                      <Image src={paymentPic}  className="img-fluid" alt="payment method logo" />
                    </Col>
                    <Col md={9} className="mb-3">
                      <p className="personal-tab-subheading withdrwa-subheading">Payoneer Payment Card - a21b3310</p>
                    </Col>
                    <Col md={1} className="mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M16.7361 33.4722C7.50399 33.4722 0 25.9682 0 16.7361C0 7.50399 7.50399 0 16.7361 0C25.9682 0 33.4722 7.50399 33.4722 16.7361C33.4722 25.9682 25.9682 33.4722 16.7361 33.4722ZM16.7361 2.33527C8.79618 2.33527 2.33527 8.79618 2.33527 16.7361C2.33527 24.676 8.79618 31.1369 16.7361 31.1369C24.676 31.1369 31.1369 24.676 31.1369 16.7361C31.1369 8.79618 24.676 2.33527 16.7361 2.33527Z" fill="#09162D"/>
                        <path d="M16.7356 18.2929C15.8637 18.2929 15.1787 17.5923 15.1787 16.736C15.1787 15.8798 15.8793 15.1792 16.7356 15.1792C17.5918 15.1792 18.2924 15.8798 18.2924 16.736C18.2924 17.5923 17.6074 18.2929 16.7356 18.2929Z" fill="#09162D"/>
                        <path d="M22.9631 18.2929C22.0913 18.2929 21.4062 17.5923 21.4062 16.736C21.4062 15.8798 22.1068 15.1792 22.9631 15.1792C23.8194 15.1792 24.5199 15.8798 24.5199 16.736C24.5199 17.5923 23.8349 18.2929 22.9631 18.2929Z" fill="#09162D"/>
                        <path d="M10.508 18.2929C9.63618 18.2929 8.95117 17.5923 8.95117 16.736C8.95117 15.8798 9.65175 15.1792 10.508 15.1792C11.3643 15.1792 12.0649 15.8798 12.0649 16.736C12.0649 17.5923 11.3798 18.2929 10.508 18.2929Z" fill="#09162D"/>
                      </svg>
                      {/* <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                          <span className="icon icon-sm">
                            <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="text-danger">
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown> */}
                    </Col>
                    <Col md={12} className="mb-3">
                      <Button type="submit" className="m-1 personal-tab-update">Add Method</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} className="mt-3 offset-8">
                      <Button className=" m-1 personal-tab-cancelBtn">Cancel</Button>
                      <Button type="submit" className="m-1 personal-tab-update">Update</Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      
    </>
  );
};

export default Setting;