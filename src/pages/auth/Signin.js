
import React, {useState} from "react";
import { Col, Row, Form, Card, Button, Image, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { Routes } from "../../routes";
import SkyDiv from "../../components/SkyDiv";
import googlePlus from "../../assets/img/auth/google.png";
import cogoToast from 'cogo-toast';

const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = async ()=>{
    try {
      if (username === "") {
        console.log("Please enter your username");
      }
      if (email === "") {
        console.log("Please enter your email");
      }
      if (password === "" ) {
        console.log("Please enter Password!");
      }
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let data = {username, email, password};

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
      };

      fetch("http://16.171.150.73/api/v1/LoginBuyer", requestOptions)
      .then(response => response.text())
      .then(async result => {
        let data = JSON.parse(result);
        if(data.success) {
            cogoToast.success(data.message,{
              position: 'top-right',
              hideAfter: 3,
            });
            localStorage.setItem('user', JSON.stringify(data.user));
            if(data.user.role === 'buyer'){
              history.push("/client-dashboard")
            }else{
              history.push("/freelancer-dashboard")
            }
          }
          else{
            cogoToast.error(data.message,{
              position: 'top-right',
              hideAfter: 3,
            });
          }
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main>
      <section className="section-header overflow-hidden bg-image text-white">
        <Container>
          <Row className="justify-content-center form-bg-image" >
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              {/* image area with welcome text */}
              <SkyDiv />
              {/* sign-up form  */}
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded-right border-light p-4 p-lg-5 h-100 w-100 fmxw-500">
                <Form className="mt-4">
                  <Form.Group id="username" className="mb-4">
                    <Form.Label className="upcoming-project-title">User Name</Form.Label>
                    <InputGroup>
                      <Form.Control autoFocus required type="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="User Name" className="input-field"/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label className="upcoming-project-title">Email address</Form.Label>
                    <InputGroup>
                      <Form.Control autoFocus required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" className="input-field"/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label className="upcoming-project-title">Your Password</Form.Label>
                    <InputGroup>
                      <Form.Control required type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="input-field"/>
                    </InputGroup>
                  </Form.Group>
                  <p className="text-center text-sign">Or, sign in with your email</p>

                  <Button variant="outline-light" type="button" className="w-100 google-signIn">
                    <Image src={googlePlus} className="img-fluid" alt="Themesberg Logo" />
                    {/* <FontAwesomeIcon icon={faGooglePlusG} />   */}
                    <p>
                      Sign in with Google
                    </p>
                  </Button>
                  <p className=" mb-4 mt-4 ">
                    <Card.Link className="sign-link">
                      Forgot your password?
                    </Card.Link>
                  </p>
                  <Button onClick={signIn} variant="info" className="w-100 create-account">
                    Log In
                  </Button>
                </Form>

                <p className="mb-4 mt-4 already-text">
                  Don't have an account? &nbsp;
                  <Card.Link as={Link} to={Routes.Signup.path} className="sign-link">
                    Sign up
                  </Card.Link>
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Signin;
