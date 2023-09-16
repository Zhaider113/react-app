
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch, faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Nav, Form, Image, Navbar, Dropdown, Container, ListGroup, InputGroup,  NavDropdown, Button, Card  } from '@themesberg/react-bootstrap';

import NOTIFICATIONS_DATA from "../data/notifications";
import Profile3 from "../assets/img/team/avatar-1.png";

import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../routes";
import cogoToast from 'cogo-toast';

const TopNavbar = (props) => {
  const history = useHistory();
  // Parse the JSON string to get the user object
  const user = JSON.parse(localStorage.getItem('user'));
  // check user instance availble 
  if(!user) {
    cogoToast.error("User does't login!",{
      position: 'top-right',
      hideAfter: 3,
    });
    history.push("/sign-in")
  }
  // logout user 
  const logOut = () =>{
    localStorage.removeItem('user');
    cogoToast.success("Logout Successfully!",{
      position: 'top-right',
      hideAfter: 3,
    });
    history.push("/sign-in")
  }
  
  const navigateDashboard = ()=>{
    if(user.role === "buyer"){
      history.push("/client-dashboard")
    }else{
      history.push("/freelancer-dashboard")
    }
  }
  

  // Seach input data 
  const [searchText, setSearch] = useState();


  // Search item from serach input
  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      history.push("/job")
    }
  }
  // Notification 
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };

  const Notification = (props) => {
    const { link, sender, image, time, message, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item action href={link} className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="col-auto">
            <Image src={image} className="user-avatar xl-avatar rounded-circle" />
          </Col>
          <Col className="ps-0 ms--2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{sender}</h4>
              </div>
              <div className="text-end">
                <small className={readClassName}>{time}</small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">{message}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  const [status, setStatus] = useState('');
  const updateStatus = (value, index) => {
    const clone = [status];
    clone[index] = value;
    setStatus(clone);
    console.log(clone, index);
  }

  // switch user toggler button
  let userMode = user.role ==='buyer' ? true : false;
  const [isChecked, setIsChecked] = useState(userMode);
  const handleStatus = () => {
    try {
        setIsChecked(!isChecked);
        let data = {role: isChecked===true ? 'freelancer' : 'buyer'};
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
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
                if(data.user.role==="buyer"){
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
        cogoToast.error(error.message,{
            position: 'top-right',
            hideAfter: 3,
        });
    }
}
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <div className="d-flex justify-content-between w-100">

            <Navbar.Brand  as={Link} to={user && user.role==='buyer'? Routes.ClientDashboard.path : Routes.FreelancerDashboard.path} className="brand-gradient-text" >ChainWork</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {/* menu list and item  */}
              <Nav className="me-auto align-items-center">
                <NavDropdown title="Find Work" onClick={navigateDashboard} onMouseEnter={e => updateStatus(true, 1)}
                  onMouseLeave={e => updateStatus(false, 1)}
                  show={status[1]}>
                  <NavDropdown.Item href={user && user.role==="buyer"? "#/talent":"#/freelancer-dashboard"} onClick={e => updateStatus(false, 1)}>Find {user && user.role==='buyer'? "Talent": "Job"}</NavDropdown.Item>
                  <NavDropdown.Item href={user && user.role==="buyer"? "#/client-proposal":"#/proposal"} onClick={e => updateStatus(false, 1)}>Proposal</NavDropdown.Item>
                  <NavDropdown.Item href="#/client-profile" onClick={e => updateStatus(false, 1)}>Profile</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="My Jobs" onMouseEnter={e => updateStatus(true, 2)}
                  onMouseLeave={e => updateStatus(false, 2)}
                  show={status[2]}>
                  <NavDropdown.Item href="#/project/project-analytics" onClick={e => updateStatus(false, 2)}>Project Tracker</NavDropdown.Item>
                  <NavDropdown.Item href="#/contracts" onClick={e => updateStatus(false, 2)}>Contracts</NavDropdown.Item>
                  {/* <NavDropdown.Item href="#/contracts" onClick={e => updateStatus(false, 2)}>Connection</NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link as={Link} to={Routes.Chat.path}>Messages</Nav.Link>
              </Nav>
              {/* search, user profile, notification  */}
              <Nav className="align-items-center">
              <div className="d-flex align-items-center custome-search">
                <Form className="navbar-search">
                  <Form.Group id="topbarSearch">
                    <InputGroup className="input-group-merge search-bar dashboard-search">
                      <InputGroup.Text style={{ border: "1.5px solid #919DA9" }}><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                      <Form.Control type="text" placeholder="Search Project" value={searchText}  onChange={(e)=>{setSearch(e.target.value)}} onKeyDown={handleKeyPress}/>
                    </InputGroup>
                  </Form.Group>
                </Form>
                {user && user.role==="buyer" &&(
                  <Button type="submit" as={Link} to={Routes.PostJob.path} className="m-1 proposal-submitBtn mt-1 ">Post Job</Button>
                )}

              </div>
                <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
                  <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications">
                    <div className="flex-shrink-0 chat-user-img align-self-center me-3 ms-0 online">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 23 22" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.2092 15.1518C20.7097 14.7247 20.4222 14.1004 20.4222 13.4433V8.02551C20.4222 3.58563 16.3975 0 11.4285 0C6.45949 0 2.4348 3.58563 2.4348 8.02551V13.4433C2.43484 14.1004 2.14731 14.7247 1.64785 15.1518C-0.049714 16.6692 1.1532 19.2545 3.55901 19.2545H7.83103C8.37609 20.7723 9.8155 21.7847 11.4285 21.7847C13.0415 21.7847 14.4809 20.7723 15.026 19.2545H19.298C21.7038 19.2545 22.9067 16.6692 21.2092 15.1518ZM11.4283 20.0974C10.7591 20.0949 10.1286 19.7838 9.71948 19.2544H13.0921C12.696 19.7754 12.0828 20.0861 11.4283 20.0974ZM19.3082 17.5683C19.7169 17.6053 20.1061 17.3862 20.2863 17.0176C20.3738 16.7955 20.2941 16.5425 20.0952 16.4106C19.2481 15.6551 18.7584 14.578 18.7461 13.4432V8.02539C18.7461 4.52969 15.4634 1.68591 11.4387 1.68591C7.41403 1.68591 4.13132 4.52969 4.13132 8.02539V13.4432C4.11899 14.578 3.62929 15.6551 2.78226 16.4106C2.57914 16.5391 2.49455 16.7929 2.5799 17.0176C2.76011 17.3862 3.14925 17.6053 3.55797 17.5683H19.3082Z" fill="#0B1C3F"/>
                      </svg>
                      {areNotificationsRead ? null : <span className={`user-status user-status-danger`} style={{left: '9px', top: '0px', width: '13px', height: '13px'}}></span>}
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0" style={{left: "-190%"}}>
                    <ListGroup className="list-group-flush">
                      <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                        Notifications
                      </Nav.Link>

                      {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}

                      <Dropdown.Item as={Link} to={Routes.Notification.path} className="text-center text-primary fw-bold py-3">
                        View all
                      </Dropdown.Item>
                    </ListGroup>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={Nav.Item} className=" user-profile-nav">
                  <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                    <div className="media d-flex align-items-center">
                      <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2" style={{right: "20px !important"}}>
                    <Col xs={12} sm={12} md={12} lg={12} className="text-center p-0 pt-2 mb-2 align-items-center">
                        <Image src={Profile3} alt="Neil Portrait" className="user-avatar mx-auto xl-avatar rounded-circle" />
                        <Card.Title className="font-16">{user? user.username: ''}</Card.Title>
                        <Card.Subtitle className="fw-normal">{user?user && user.role: ''}</Card.Subtitle>
                        <div className="d-flex align-items-center bg-primary radius31 mt-3" style={{width: "75%", margin: "auto" }}>
                            <Button onClick={handleStatus} className={`${isChecked?"role-btn":"role-btn-active"}`} disabled={user.role ==='buyer'?false:true}>Freelancer</Button>
                            <Button onClick={handleStatus} className={`${isChecked?"role-btn-active":"role-btn"}`} disabled={user.role ==='buyer'?true:false}>Client</Button>
                        </div>
                    </Col>
                    <Dropdown.Item as={Link} to={Routes.ClientProfile.path}>
                      <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to={Routes.PersonalDetail.path}>
                      <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item onClick={logOut}>
                      <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>

            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>

  );
};

export default TopNavbar