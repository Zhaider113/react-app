
import React, { useState } from "react";
import { Col, Row, Card, Image, InputGroup, Form, Dropdown, Button } from '@themesberg/react-bootstrap';
import Profile3 from "../../assets/img/team/avatar-1.png";
import { UsersWidget } from "../../components/Widgets";
import ScrollToBottom from "react-scroll-to-bottom";
import Messagess from "./Message";//erro on this line
import Message from "./messages";
import { faFileAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    setMessages(['hi brother', 'Hello world', 'Your new message', 'hi brother', 'Hello world', 'Your new message', 'hi brother', 'Hello world', 'Your new message', 'hi brother', 'Hello world', 'Your new message','hi brother', 'Hello world', 'Your new message','hi brother', 'Hello world', 'Your new message','hi brother', 'Hello world', 'Your new message','hi brother', 'Hello world', 'Your new message','hi brother', 'Hello world', 'Your new message','hi brother', 'Hello world', 'Your new message','hi brother', 'Hello world', 'Your new message'])
  }, [])
  return (
    <>
      <Row className="mt-4 p-3 chat-div">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                    <UsersWidget />
                </Col>
              </Row>
            </Col>
            <Col xs={12} xl={8} md={8} className="mb-4 chatContainer">
              <Row className="user-chat-header">
                <Card border="light" className="shadow-sm modal-content">
                  <div className="p-2 p-lg-2 user-chat-topbar">
                    <div className="align-items-center row">
                      <div className="col-8 col-sm-4">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 d-block d-lg-none me-2">
                            <a className="user-chat-remove text-muted font-size-24 p-2" href="/dashboard">
                              <i className="bx bx-chevron-left align-middle"></i>
                            </a>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 chat-user-img align-self-center me-3 ms-0 online">
                                <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                                <span className={`user-status user-status-success`}></span>
                              </div>
                              <div className="flex-grow-1 overflow-hidden">
                                <h6 className="text-truncate chat-user-name mb-0 font-size-18">
                                  <a className="user-profile-show text-reset" href="/dashboard">Marguerite Campbell</a>
                                </h6>
                                <p className="text-truncate text-muted mb-0"><small>Online</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-sm-8">
                        <ul className="list-inline user-chat-nav text-end mb-0">
                          <li className="list-inline-item">
                            <div className="dropdown">
                              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M8.91016 14.3401C12.2239 14.3401 14.9102 11.6538 14.9102 8.34009C14.9102 5.02638 12.2239 2.34009 8.91016 2.34009C5.59645 2.34009 2.91016 5.02638 2.91016 8.34009C2.91016 11.6538 5.59645 14.3401 8.91016 14.3401Z" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.41 15.8401L13.1475 12.5776" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg dropdown-menu">
                                <div className="search-box p-2">
                                <InputGroup>
                                  <Form.Control autoFocus type="text" placeholder="Search ......" className="input-field"/>
                                </InputGroup>
                                  {/* <InputGroup placeholder="Search.." type="text" className="form-control form-control"> */}
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            {/* <FontAwesomeIcon icon={faInfoCircle} className="nav-btn me-1" aria-haspopup="true" aria-expanded="false"/> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                              <path d="M9.58008 16.5901C13.7222 16.5901 17.0801 13.2322 17.0801 9.09009C17.0801 4.94795 13.7222 1.59009 9.58008 1.59009C5.43794 1.59009 2.08008 4.94795 2.08008 9.09009C2.08008 13.2322 5.43794 16.5901 9.58008 16.5901Z" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M9.58008 12.0901V9.09009" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M9.58008 6.09009H9.58758" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </li>
                          <li className="list-inline-item">
                            <div className="dropdown">
                              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M9.5 9.84009C9.91421 9.84009 10.25 9.5043 10.25 9.09009C10.25 8.67587 9.91421 8.34009 9.5 8.34009C9.08579 8.34009 8.75 8.67587 8.75 9.09009C8.75 9.5043 9.08579 9.84009 9.5 9.84009Z" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 4.59009C9.91421 4.59009 10.25 4.2543 10.25 3.84009C10.25 3.42587 9.91421 3.09009 9.5 3.09009C9.08579 3.09009 8.75 3.42587 8.75 3.84009C8.75 4.2543 9.08579 4.59009 9.5 4.59009Z" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 15.0901C9.91421 15.0901 10.25 14.7543 10.25 14.3401C10.25 13.9259 9.91421 13.5901 9.5 13.5901C9.08579 13.5901 8.75 13.9259 8.75 14.3401C8.75 14.7543 9.08579 15.0901 9.5 15.0901Z" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu-end dropdown-menu">
                                <button type="button" to="#" tabindex="0" role="menuitem" className="d-flex justify-content-between align-items-center d-lg-none user-profile-show dropdown-item">
                                  View Profile <i className="bx bx-user text-muted"></i>
                                </button>
                                <button type="button" to="#" tabindex="0" role="menuitem" className="d-flex justify-content-between align-items-center d-lg-none dropdown-item">
                                  Audio <i className="bx bxs-phone-call text-muted"></i>
                                </button>
                                <button type="button" to="#" tabindex="0" role="menuitem" className="d-flex justify-content-between align-items-center d-lg-none dropdown-item">
                                  Video <i className="bx bx-video text-muted"></i>
                                </button>
                                <button type="button" to="#" tabindex="0" role="menuitem" className="d-flex justify-content-between align-items-center dropdown-item">
                                  Archive <i className="bx bx-archive text-muted"></i>
                                </button>
                                <button type="button" to="#" tabindex="0" role="menuitem" className="d-flex justify-content-between align-items-center dropdown-item">
                                  Muted <i className="bx bx-microphone-off text-muted"></i>
                                </button>
                                <button type="button" to="#" tabindex="0" role="menuitem" className="d-flex justify-content-between align-items-center dropdown-item">
                                  Delete <i className="bx bx-trash text-muted"></i>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </Row>
              <ScrollToBottom className='user-chat-box'
                behavior={'smooth'} 
                buttonBackgroundColor={'red'}
                iconType={'arrow-up'}
                style= {{fontSize: '24px'}}
              >
                {/* <ScrollToBottom> */}
                  {messages.map((message, i) =>
                    <Message messages={message} classes={i%2===0?'incoming':'outgoing'} item={i%2} />
                  )}
                {/* </ScrollToBottom> */}
              </ScrollToBottom>
              <Row className="user-chat-input pt-2">
                <Card border="ligth" className="shadow-sm">
                  <Row className="mt-2">
                    <Col xs={11} xl={11} md={11} className="pe-0">
                      <div className="d-flex align-items-center">
                        <Dropdown>
                          <Dropdown.Toggle className="text-dark bg-light-pink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M12 5V19" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M5 12H19" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                            <Dropdown.Item>
                              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Document
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Form.Group className="mx-2 w-100">
                          <InputGroup className="input-group-merge">
                              <Form.Control type="text" placeholder="Type your message..." className=" project-count-subheading chat-search" />
                          </InputGroup>
                          
                        </Form.Group>
                      </div>
                    </Col>
                    <Col xs={1} xl={1} md={1} className="ps-0">
                      <div className="d-flex align-items-center m-top">
                        <Button className="bg-light-blue"> 
                          <FontAwesomeIcon icon={faPaperPlane} className="" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Chat;