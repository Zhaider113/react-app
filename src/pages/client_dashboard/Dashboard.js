
import React, {useEffect, useState} from "react";
import { Col, Row, Card } from '@themesberg/react-bootstrap';

import { ProfileCardWidget, JobWidget, AlertNotice, ProjectList, CurrentCalender } from "../../components/Widgets";

import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import Profile2 from "../../assets/img/team/profile-picture-2.jpg";
import Profile3 from "../../assets/img/team/profile-picture-4.jpg";


const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [jobs, setJobs] = useState([])

  // const fetchJobData = () => {
    
  // }

  useEffect(() => {
    // fetchJobData()
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch(`http://16.171.150.73/api/v1/UserJobs/${user._id}`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        console.log(result);
        let data = JSON.parse(result);
        console.log(data);
        setJobs(data.job);
      })
      .catch(error => console.log('error', error));
  }, [user._id])
  return (
    <>
      <Row className="mt-4 p-3">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col className="d-block mb-4 mb-md-0">
                  <h1 className="h2 job-like-title">Hire The Best</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={4} xl={4} md={4} className="mb-4">
                  <ProfileCardWidget name="Maria Graciela M." jobType="AI Developer" star="5.0" jobs="53" image={Profile1}/>
                </Col>
                <Col xs={4} xl={4} md={4} className="mb-4">
                  <ProfileCardWidget name="Alexander S." jobType="AI Developer" star="5.0" jobs="53" image={Profile2}/>
                </Col>
                <Col xs={4} xl={4} md={4} className="mb-4">
                  <ProfileCardWidget name="Elena S." jobType="AI Developer" star="5.0" jobs="53" image={Profile3}/>
                </Col>
              </Row>
              <Row>
                <Col className="d-block mb-4 mb-md-0">
                  <h1 className="h2 job-like-title">Jobs you posted</h1>
                </Col>
              </Row>
              <Row>
                {(jobs.length > 0) ? (
                    <Col xs={12} sm={12} xl={12} className="mb-4">
                      {jobs.map(job => (
                        <JobWidget title={job.title} type={job.type} budget={job.budget} createdAt={job.createdAt} description={job.description} skills={job.skills} />
                      ))}
                    </Col>
                  ): (
                    <Col xs={12} sm={12} xl={12} className="mb-4">
                        <p className="proposal-post-date line-height-1">
                            No Job Found
                        </p>
                    </Col>
                  )
                }
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <Card border="light" className="shadow-sm">
                    <Card.Body>
                      <AlertNotice />
                      <h2 className="calender-title">December 19</h2>
                      <CurrentCalender />
                      <h2 className="upcoming-project-title">Upcoming Blockchain Projects</h2>
                      <ProjectList />
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

export default Dashboard;