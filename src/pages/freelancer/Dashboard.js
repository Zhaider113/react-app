
import React, {useEffect, useState} from "react";
import { Col, Row, Card } from '@themesberg/react-bootstrap';

import { WelcomeWidget, AlertNotice, ProjectList, CurrentCalender, FindJobWidget } from "../../components/Widgets";

const Dashbaord = () => {
  const [jobs, setJobs] = useState([])

  const fetchJobData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://16.171.150.73/api/v1/getAllJobs`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        console.log(result);
        let data = JSON.parse(result);
        console.log(data);
        setJobs(data.jobs);

      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    fetchJobData()
  }, [])
  return (
    <>
      <Row className="mt-4 p-3">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <WelcomeWidget />
                </Col>
                <Col className="d-block mb-4 mb-md-0">
                  <h1 className="h2 job-like-title">Jobs you might like {jobs.length}</h1>
                </Col>
                {(jobs.length > 0) ? (
                  <Col xs={12} sm={12} xl={12} className="mb-4">
                    {jobs.map(job => (
                      <FindJobWidget jobId={job._id} title={job.title} type={job.type} budget={job.budget} createdAt={job.createdAt} description={job.description} skills={job.skills} />
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

export default Dashbaord;