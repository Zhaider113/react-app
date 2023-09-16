
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Form, InputGroup, Button, OverlayTrigger, Tooltip } from '@themesberg/react-bootstrap';

import { FindTalentWidget } from "../../components/Widgets";


const categoryArr = [
    {value: '', label: 'Select Category'},
    {value: '', label: 'All'},
    {value: 'Development', label: 'Development'},
    {value: 'UI/UX', label: 'UI/UX'},
    {value: 'Block Chain', label: 'Block Chain'},
]

const countryArr = [
    {value: '', label: 'Select Country'},
    {value: 'United State', label: 'United State'},
    {value: 'UK', label: 'UK'},
    {value: 'Pakistan', label: 'Pakistan'},
]

const FindTalent = () => {
    const [talents, setTalents] = useState([])
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");

    const resetFilter = () => {
        setCategory("");
        setCountry("");
    }

    useEffect(() => {
        // fetchTalents
        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };
        
        fetch(`http://16.171.150.73/api/v1/getAllFreelancers`, requestOptions)
          .then(response => response.text())
          .then((result) =>{
            let data = JSON.parse(result);
            setTalents(data.freelancers);
          })
          .catch(error => console.log('error', error));
      }, [])

  return (
    <>
      {/* <Row> */}
        <Col xs={12} xl={12} className="mb-4 mt-1">
          <Row>
            {/* Filter area */}
            <Col xs={12} xl={4} className="mt-5 pe-0 ">
              <Row>
                <Col xs={12} className="mb-4">
                  <Card className="no-border p-1">
                    <Card.Body>
                    <Row>
                            <Col xs={10} xl={10} md={10} sm={10}>
                                <h2 className="filter-title">Filter By</h2>
                            </Col>
                            <Col xs={2} xl={2} md={2} sm={2}>
                            {(category !== '' || country !== '') ? (
                                <OverlayTrigger
                                    overlay={<Tooltip id="top" className="m-0">Reset All Filter</Tooltip>}
                                    
                                    >
                                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" className="overlay-trigger" onClick={resetFilter}>
                                        <path d="M22.5,9A7.4522,7.4522,0,0,0,16,12.792V8H14v8h8V14H17.6167A5.4941,5.4941,0,1,1,22.5,22H22v2h.5a7.5,7.5,0,0,0,0-15Z"/>
                                        <path d="M26,6H4V9.171l7.4142,7.4143L12,17.171V26h4V24h2v2a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V18L2.5858,10.5853A2,2,0,0,1,2,9.171V6A2,2,0,0,1,4,4H26Z"/>
                                        <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
                                    </svg>
                                </OverlayTrigger>
                            ):''}
                            </Col>
                        </Row>
                        <hr />
                        
                        <Col xs={12} xl={12} md={12} sm={12}>
                            {/* category selection  */}
                            <Form.Group className="mb-3">
                                <Form.Label className="get-paid-heading font-inter">Category</Form.Label>
                                <InputGroup className="input-group-merge">
                                    {/* <Form.Control type="text" placeholder="Developers, 1 Week, 2500$" className=" project-count-subheading line-height-30 line-height-30 border-40" /> */}
                                    <Form.Select className=" project-count-subheading line-height-30 line-height-30 border-40 input-border-40-focus " value={category} onChange={(e)=>setCategory(e.target.value)}>
                                        {categoryArr.map((item, i) => (
                                            <option value={item.value} key={i}>
                                                {item.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                            {/* Country selection  */}
                            <Form.Group className="mb-3">
                                <Form.Label className="get-paid-heading font-inter">Country</Form.Label>
                                <InputGroup className="input-group-merge">
                                    {/* <Form.Control type="text" placeholder="Developers, 1 Week, 2500$" className=" project-count-subheading line-height-30 line-height-30 border-40" /> */}
                                    <Form.Select className=" project-count-subheading line-height-30 line-height-30 border-40 input-border-40-focus " value={country} onChange={(e)=>setCountry(e.target.value)}>
                                        {countryArr.map((item, i) => (
                                            <option value={item.value} key={i}>
                                                {item.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="get-paid-heading font-inter">Popular filters</Form.Label>
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Budget Project" id="budget_project" htmlFor="Budget Project" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Expertise Required" id="expertise_required" htmlFor="Expertise Required" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Find BlockChain based Freelance Projects" id="blockChain_projects" htmlFor="Find BlockChain based Freelance Projects" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Blockchain based Platform" id="blockchain_platform" htmlFor="Blockchain based Platform" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="get-paid-heading font-inter">Budget Range</Form.Label>
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Less than $50" id="50" htmlFor="Less than $50" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="$50 to $100" id="50_to_100" htmlFor="$50 to $100" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="$100 to $150" id="100_to_150" htmlFor="$100 to $150" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="$150 and more" id="150" htmlFor="$150 and more" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="get-paid-heading font-inter">Client rating</Form.Label>
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Any" id="any" htmlFor="Any" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Excellent" id="excellent" htmlFor="Excellent" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Very good" id="very_good" htmlFor="Very good" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Good" id="good" htmlFor="Good" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                    <Form.Label className="get-paid-heading font-inter">Project Level</Form.Label>
                                <Form.Group className="mb-3">
                                    <Button variant="light" className=" tech-btn font-12 bg-white">1 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light" className=" tech-btn font-12 bg-white">2 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light" className=" tech-btn font-12 bg-white">3 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light" className=" tech-btn font-12 bg-white">4 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light" className=" tech-btn font-12 bg-white">5 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            {/* Search item list  */}
            <Col xs={12} xl={8} className="mb-4 mt-1">
              <Row className="m-3">
                <Col xs={12} xl={9} md={9} className="d-block mb-4 mb-md-0">
                    <h6 className="get-paid-heading font-inter">{talents.length} search result for Talents</h6>
                    {/* <h1 className="h2 job-like-title">Talents In United States</h1> */}
                    <p className="personal-tab-subheading">Find Talent Working In Your Country</p>
                </Col>
                <Col  xs={12} xl={3} md={3} className="d-block mb-4 mb-md-0">
                    <Form.Group id="Sort">
                        <Form.Select defaultValue="0" className="custome-select">
                            <option value="0">Sort By</option>
                            <option value="1">Last 7 Days</option>
                            <option value="2">Last 15 Days</option>
                            <option value="3">Last 30 Days</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {(talents.length > 0) ? (
                    <Row>
                        {talents.map(talent => (
                            <Col xs={12} className="mb-4 mt-2">
                                <FindTalentWidget name={talent.username} speciality={talent.freelancerTitle}  skills={talent.skills} hourlyRate={talent.hourlyRate} profilImage={talent.profilImage} bio={talent.bio} totalEarned={talent.totalEarned} id={talent._id}/>
                            </Col>
                        ))}
                    </Row>
                ): (
                    <Col xs={12} sm={12} xl={12} className="mb-4">
                        <p className="proposal-post-date line-height-1">
                            No Talents Found
                        </p>
                    </Col>
                )}
                {/* <Col xs={12} className="mb-4">
                  <FindTalentWidget />
                </Col>
                <Col xs={12} className="mb-4">
                  <FindTalentWidget />
                </Col>
                <Col xs={12} className="mb-4">
                  <FindTalentWidget />
                </Col>
                <Col xs={12} className="mb-4">
                  <FindTalentWidget />
                </Col> */}
                {/* <Col xs={12} className="mb-4">
                  <JobPagination />
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Col>
      {/* </Row> */}
    </>
  );
};

export default FindTalent;