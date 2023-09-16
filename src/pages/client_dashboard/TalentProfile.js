
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Image, Badge } from '@themesberg/react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { Routes } from "../../routes";

const TalentProfile = () => {
    const history = useHistory();
    let freelancerId = JSON.parse(localStorage.getItem('freelancerId'));

    const [talents, setTalents] = useState([])
    const [talentSkills, setSkills] = useState([])
    const regex = /(<([^>]+)>)/ig;
    const removeTags =(text)=>{
        if(text !== undefined && text !== ''){
        return text.replace(regex, '');
        }
    } 

    useEffect(() => {
        // fetchTalents
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch(`http://16.171.150.73/api/v1/UserProfile/${freelancerId.id}`, requestOptions)
          .then(response => response.text())
          .then((result) =>{
            let data = JSON.parse(result);
            setTalents(data.data);
            setSkills(data.data.skills);
          })
          .catch(error => {
            console.log(error, "Error")
            history.push('/talent');
          });
      }, [history, freelancerId.id])

  return (
    <>
        <Row className="mt-4 p-4">

            <Col xs={12} xl={10} className="mb-4 offset-1 mt-1">
                <Row className="m-3">
                    <Card border="light" className="shadow-sm ">
                        <Card.Body>
                        <Row>
                            <Col xs={10} sm={10} xl={10} >
                            <Row>
                                <Col xs={1} sm={1} xl={1} >
                                <div className="media d-flex align-items-center">
                                    <Image src={talents.profilImage} className="user-avatar md-avatar rounded-circle" />
                                </div>
                                </Col>
                                <Col xs={11} sm={11} xl={11} >
                                <h6 className="job-title mt-1 mb-1 mx-1">{talents.username}</h6>
                                <p className="profile-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />{talents.country}</p>
                                </Col>
                            </Row>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <h4 className="mb-0 project-count-heading heading20">Overview</h4>
                            <hr className="red-line  border-bottom"/>
                            <Col xs={12} sm={12} xl={12} className="mb-2 mt-3">
                                <p className="proposal-post-date">
                                    {removeTags(talents.bio)}
                                </p>
                            </Col>
                        {/* </Row>
                        <Row className="mt-2"> */}
                            {/* <Col xs={2} sm={2} xl={2} className="border-right">
                                <h3 className="talent-rate">${talents.hourlyRate?talents.hourlyRate:0}</h3>
                                <p className="type-rate">HOURLY RATE</p>
                            </Col> */}
                            <Col xs={2} sm={2} xl={2} className="border-right">
                                <h3 className="talent-rate">${talents.totalEarned?talents.totalEarned:0}</h3>
                                <p className="type-rate">TOTAL EARNED</p>
                            </Col>
                            <Col xs={2} sm={2} xl={2}>
                                <h3 className="talent-rate">6/10</h3>
                                <p className="type-rate">Ratings</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <h4 className="mb-0 project-count-heading heading20">Verification</h4>
                            <hr className="red-line  border-bottom"/>
                            <Col xs={12} xl={12} md={12} className="mt-3">
                                <p className="fund-subheading font-600 line-height-1">Phone Number:  </p>
                                <p className="fund-subheading font-600 line-height-1">Email: <span className="text-dark-gry">Verified</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M11.6071 0H1.39286C0.623594 0 0 0.623594 0 1.39286V11.6071C0 12.3764 0.623594 13 1.39286 13H11.6071C12.3764 13 13 12.3764 13 11.6071V1.39286C13 0.623594 12.3764 0 11.6071 0ZM11.6071 11.6071H1.39286V1.39286H11.6071V11.6071ZM10.5664 4.59283L5.55828 9.5608C5.42175 9.69623 5.20128 9.69536 5.06585 9.55883L2.43158 6.90323C2.29615 6.7667 2.29702 6.54623 2.43358 6.41077L3.09284 5.75682C3.22937 5.6214 3.44985 5.62227 3.58527 5.75883L5.32031 7.50793L9.42204 3.43917C9.55857 3.30374 9.77905 3.30461 9.91447 3.44114L10.5684 4.10037C10.7038 4.23693 10.703 4.4574 10.5664 4.59283Z" fill="#1680FB"/>
                                    </svg>
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <h4 className="mb-0 project-count-heading heading20">Languages</h4>
                            <hr className="red-line  border-bottom"/>
                            <Col xs={12} xl={12} md={12} className="mt-3">
                                <p className="fund-subheading font-600 line-height-1">English: <span className="text-dark-gry">Fluent</span></p>
                                <p className="fund-subheading font-600 line-height-1">Urdu: <span className="text-dark-gry">Native</span></p>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <h4 className="mb-0 project-count-heading heading20">Skills</h4>
                            <hr className="red-line  border-bottom"/>
                            <Col xs={12} sm={12} xl={9} className="mt-3">
                                {(talentSkills.length > 0)? (
                                    <Row>
                                        <Col xs={12} sm={12} xl={12}>
                                            {talentSkills.map((item, i) => (
                                                <Badge className="me-1 mb-3 bg-light-red">{item}</Badge>
                                            ))}
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row>
                                        <Col xs={12} sm={12} xl={12}>
                                            <p className="proposal-post-date line-height-1">
                                                No Skill Found
                                            </p>
                                        </Col>
                                    </Row>
                                )}
                            </Col>
                        </Row>
                        <Row className="d-flex mt-3">
                            <Col md={12} className="mt-3">
                                <Button className="m-1 proposal-cancelBtn"><FontAwesomeIcon icon={faComment} className="me-1 "/>Message</Button>
                                <Button as={Link} to={Routes.HireFreelancer.path}  className="m-1 proposal-submitBtn">Hire</Button>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </Row>
    </>
  );
};

export default TalentProfile;