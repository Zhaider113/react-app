
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Image, Badge, Table, Form, InputGroup } from '@themesberg/react-bootstrap';
import { faMapMarkerAlt, faPencilAlt, faPlusCircle, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileAlertNotice } from "../../components/Widgets";
import cogoToast from 'cogo-toast';
import Select from 'react-select';


const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    const countryArr = [
        {value: 'Select Country', label: 'Select Country'},
        {value: 'United State', label: 'United State'},
        {value: 'UK', label: 'UK'},
        {value: 'Pakistan', label: 'Pakistan'},
    ]
    


    // Name of user 
    const [username, setName] = useState(user.username)
    const [isEditName, setIsEditName] = useState(true);
    const updateName = ()=>{
        try {
            if(username === ''){
                cogoToast.error("User Name Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });
            }else{
                let data = {username: username};
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
                        setIsEditName(!isEditName);
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

    // profile image change 
    const [profileImg, setImage] = useState(user.profilImage);
    const updateImage = (file)=>{
        try {
            let data = {profilImage: file[0].url, companyImage: file[0].url};
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        
             var requestOptions = {
             method: 'POST',
             headers: myHeaders,
             body: JSON.stringify(data),
             redirect: 'follow'
             };
             console.log(requestOptions)

            fetch(`http://16.171.150.73/api/v1/UpdateProfile/${user._id}`, requestOptions)
            .then(response => response.text())
            .then((result) => {
                let data = JSON.parse(result);
                if(data.success){
                    setImage(data.user.profilImage)
                    localStorage.setItem('user', JSON.stringify(data.user));
                    cogoToast.success(data.message,{
                        position: 'top-right',
                        hideAfter: 3,
                    });
                    setIsBio(!isBio);
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

    const handleChange = async(e) => {
        try {
            if (e.target.files.length) {
                var formdata = new FormData();
                formdata.append("avatars", e.target.files[0]);
        
                var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
                };
        
                fetch("http://16.171.150.73/api/v1/UploadImage", requestOptions)
                .then(response => response.text())
                .then(result => {
                    let data = JSON.parse(result);
                    if(data.success) {
                        updateImage(data.data)
                    }else{
                        return false;
                    }
                })
                .catch(error => {
                    cogoToast.error(error.message,{
                        position: 'top-right',
                        hideAfter: 3,
                    });
                });
             }
        } catch (error) {
            cogoToast.error(error.message,{
                position: 'top-right',
                hideAfter: 3,
            });
        }
      };

    
    // About user 
    const [userbio, setBio] = useState(user.bio)
    const [isBio, setIsBio] = useState(true);

    const updateBio = ()=>{
        try {
            if(userbio === ''){
                cogoToast.error("User Bio Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });
            }else{
                let data = {bio: userbio};
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
                        setIsBio(!isBio);
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

      // company info 
    
    const [isDisabled, setIsDisabled] = useState(true);
    const [companyName, setCompanyName] = useState(user.companyname);
    const [freelancerTitle, setFreelancerTitle] = useState('');
    const [ownerName, setOwnerName] = useState(user.ownerName);
    const [phonenumber, setphoneNo] = useState(user.phoneNumber);
    const [country, setCountry] = useState(user.country);

    const editCompanyInfo = () => {
        try {
            if(isDisabled){
                setIsDisabled(!isDisabled);
                console.log(isDisabled, "false");
            }else{
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
    
                let info = {companyname: companyName, ownerName: ownerName, country: country, phoneNumber: phonenumber, freelancerTitle: freelancerTitle}
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
                        setIsDisabled(!isDisabled);
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
    };

    // Skill update function 
    const options = [
        { value: 'HTML', label: 'HTML' },
        { value: 'Designing', label: 'Designing' },
        { value: 'Java', label: 'Java' },
        { value: 'JavaScript', label: 'JavaScript' }
      ]
    const userSkill = [];
    user.skills.forEach(skill => {
      userSkill.push({value: skill, label: skill});  
    })
    const [isSkill, setIsSkill] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState(userSkill);
    const handleSelect = (data) => {
        console.log(data)
        setSelectedOptions(data);
    }

    const skillUpdate = () =>{
        try {
            console.log(selectedOptions)
            if(selectedOptions === undefined || selectedOptions.length < 1){
                cogoToast.error("Select Atleast 1 Skill.!",{
                    position: 'top-right',
                    hideAfter: 3,
                });
            }
            else{
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                let skillArr =[];
                selectedOptions.forEach((item)=>{
                    skillArr.push(item.label);
                })
                let info = {skills: skillArr}
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
                        setIsSkill(!isSkill);
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

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(`http://16.171.150.73/api/v1/UserProfile/${user._id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                let data = JSON.parse(result);
                setFreelancerTitle(data.data.freelancerTitle)
            })
            .catch(error => console.log('error', error));
    }, [user._id])

  return (
    <>
      <Row className="mt-4 p-3">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} md={8} className="mb-4">
                <Row>
                    <Col xs={12} xl={7} md={7} className="d-xl-flex align-items-center">
                        {/* <div className="d-xl-flex align-items-center"> */}
                            <div className="user-avatar ms-4" style={{width: 'width: 2.5rem'}}>
                                <div>
                                    <label htmlFor="upload-button">
                                        {profileImg && (
                                        <Image src={profileImg} alt="Profile Image" className="user-avatar mx-auto xl-avatar rounded-circle" />
                                        )}
                                    <FontAwesomeIcon className="upload-button edit-icon edit-icon-align" icon={faPencilAlt} style={{ left: '50px',top: '-80px'}}/>
                                    </label>
                                    <input
                                        type="file"
                                        id="upload-button"
                                        style={{ display: "none" }}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="file-field">
                                <div className="d-flex justify-content-xl-center ms-xl-3">
                                    <div className="d-flex">
                                        <div className={"d-md-block text-start mx-2"} >
                                            <h6 className="job-title mb-0 mx-1" style={{display:isEditName?'block':'none'}}>{username}</h6>
                                            <FontAwesomeIcon className="edit-icon edit-icon-align" icon={faPencilAlt} style={{display:isEditName?'block':'none'}} onClick={()=> setIsEditName(!isEditName)}/>
                                            <input type="text" value={username} className="profile-name" onChange={(e)=>{setName(e.target.value)}} style={{display:isEditName?'none':'block'}}/>
                                            <div className="save-div save-div-align" style={{display:isEditName?'none':'block'}}>
                                                <FontAwesomeIcon icon={faSave} onClick={updateName}/>sdsadsdsa
                                            </div>
                                            <div className="fw-normal mb-1">
                                                <p className="profile-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />{user.country}</p>
                                            </div>
                                            <div className="profile-location text-dark small">
                                                <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" className="me-3">
                                                    <path d="M12.4583 1.44444H10.1111V0.541667C10.1111 0.241493 9.86962 0 9.56944 0H3.43056C3.13038 0 2.88889 0.241493 2.88889 0.541667V1.44444H0.541667C0.241493 1.44444 0 1.68594 0 1.98611V3.25C0 4.05573 0.507812 4.88403 1.39705 5.52274C2.10799 6.03507 2.9724 6.36007 3.87969 6.46389C4.58837 7.63976 5.41667 8.125 5.41667 8.125V9.75H4.33333C3.53663 9.75 2.88889 10.2172 2.88889 11.0139V11.2847C2.88889 11.4337 3.01076 11.5556 3.15972 11.5556H9.84028C9.98924 11.5556 10.1111 11.4337 10.1111 11.2847V11.0139C10.1111 10.2172 9.46337 9.75 8.66667 9.75H7.58333V8.125C7.58333 8.125 8.41163 7.63976 9.12031 6.46389C10.0299 6.36007 10.8943 6.03507 11.603 5.52274C12.4899 4.88403 13 4.05573 13 3.25V1.98611C13 1.68594 12.7585 1.44444 12.4583 1.44444ZM2.24115 4.35139C1.69045 3.95417 1.44444 3.51181 1.44444 3.25V2.88889H2.8934C2.91597 3.62465 3.02431 4.27014 3.18229 4.83437C2.84149 4.71701 2.52326 4.55451 2.24115 4.35139ZM11.5556 3.25C11.5556 3.61337 11.1561 4.06476 10.7589 4.35139C10.4767 4.55451 10.1562 4.71701 9.81545 4.83437C9.97344 4.27014 10.0818 3.62465 10.1043 2.88889H11.5556V3.25Z" fill="#E88B00"/>
                                                    </svg>
                                                    85% Jobs Success</p>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </Col>
                {/* </Row>
                <Row> */}
                    {/* about user  */}
                    <Col xs={12} xl={12} sm={12} md={12} className="mb-2">
                        <Card border="light" className="shadow-sm mb-4">
                            <Card.Body>
                                {/* About Compnay or counrty info */}
                                <Row>
                                    <h4 className="mb-0 project-count-heading heading20">{user.role === 'buyer'?'Company': 'Personal'} Detail</h4>
                                    <hr className="red-line  border-bottom"/>
                                    <div className="border-gry"></div>
                                    <Col xs={12} sm={12} xl={12} className="mt-3">
                                        <Row style={{display:isDisabled?'':'none'}}>
                                            <Col xs={6} sm={6} xl={6} >
                                                <Table>
                                                    <tbody>
                                                    {(user.role === 'buyer')? (
                                                        <tr>
                                                            <td className="border-0 review-text">Company Name </td>
                                                            <td className="border-0 fw-bold">
                                                                <input type="text" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}} className="review-text no-border bg-white" disabled={isDisabled} />
                                                            </td>
                                                        </tr>
                                                         ): ''}
                                                         {(user.role === 'buyer')? (
                                                        <tr>
                                                            <td className="border-0 review-text">Owner</td>
                                                            <td className="border-0 fw-bold ">
                                                                <input type="text" value={ownerName} onChange={(e)=>{setOwnerName(e.target.value)}} className="review-text no-border bg-white" disabled={isDisabled}/>
                                                            </td>
                                                        </tr>
                                                         ):''}
                                                         {(user.role === 'freelancer')? (
                                                        <tr>
                                                            <td className="border-0 review-text">Profile Title</td>
                                                            <td className="border-0 fw-bold ">
                                                                <input type="text" value={freelancerTitle} onChange={(e)=>{setFreelancerTitle(e.target.value)}} className="review-text no-border bg-white" disabled={isDisabled}/>
                                                            </td>
                                                        </tr>
                                                         ):''}
                                                        <tr>
                                                            <td className="border-0 review-text">Phone</td>
                                                            <td className="border-0 fw-bold">
                                                                <input type="text" value={phonenumber} onChange={(e)=>{setphoneNo(e.target.value)}} className="review-text no-border bg-white" disabled={isDisabled}/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="border-0 review-text">Country</td>
                                                            <td className="border-0 fw-bold">
                                                                <input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}} className="review-text no-border bg-white" disabled={isDisabled}/>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col xs={1} sm={1} xl={1} className="offset-5">
                                                <FontAwesomeIcon icon={faPencilAlt} className="edit-icon me-3 " style={{display:!isDisabled?'none':'block'}} onClick={()=> setIsDisabled(!isDisabled)}/>
                                            </Col>
                                        </Row>
                                        <Row style={{display:isDisabled?'none':'block'}}>
                                            <Col xs={12} sm={12} xl={12} className="mb-3">
                                            {(user.role === 'buyer')? (
                                                <Form.Group id="companyName">
                                                    <Form.Label>Company Name</Form.Label>
                                                    <Form.Control required type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder="Compnay Name" />
                                                </Form.Group>
                                            ):''}
                                                 {(user.role === 'buyer')? (
                                                <Form.Group id="ownerName">
                                                    <Form.Label>Owner Name</Form.Label>
                                                    <Form.Control required type="text" value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} placeholder="Owner Name" />
                                                </Form.Group>
                                                 ):''}
                                                 {(user.role === 'freelancer')? (
                                                <Form.Group id="freelancerTitle">
                                                    <Form.Label>Profile Title</Form.Label>
                                                    <Form.Control required type="text" value={freelancerTitle} onChange={(e)=>setFreelancerTitle(e.target.value)} placeholder="Profile Title" />
                                                </Form.Group>
                                                 ):''}
                                                <Form.Group id="phoneno">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control required type="text" value={phonenumber} onChange={(e)=>setphoneNo(e.target.value)} placeholder="Phone Number" />
                                                </Form.Group>
                                                <Form.Group id="companyName">
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
                                            <Col xs={4} sm={4} xl={4} className="mt-3 offset-8">
                                                <Button type="submit" className="m-1 personal-tab-update" onClick={editCompanyInfo}>Update</Button>
                                                <Button className=" m-1 personal-tab-cancelBtn" onClick={()=> setIsDisabled(!isDisabled)}>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                {/* Overview  */}
<<<<<<< HEAD
                                <Row className="mt-3">
=======
                                <Row>
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                                    <h4 className="mb-0 project-count-heading heading20">Overview</h4>
                                    <hr className="red-line  border-bottom"/>
                                    <div className="border-gry"></div>
                                    <Col xs={12} sm={12} xl={12} className="mt-3">
                                        <Row>
                                            <Col xs={11} sm={11} xl={11} style={{display:isBio?'block':'none'}}>
                                            <p className="job-detail font-15 font-w-400 font-encode">
                                                {userbio}
                                            </p>
                                            </Col>
                                            <Col xs={11} sm={11} xl={11} style={{display:isBio?'none':'block'}}>
                                                <Form.Control as="textarea" rows="" value={userbio} disabled={isBio} className="border-light user-bio" onChange={(e)=>{setBio(e.target.value)}}/>
                                            </Col>
                                            <Col xs={1} sm={1} xl={1}>
                                                <FontAwesomeIcon icon={faPencilAlt} className="edit-icon me-3 " style={{display:isBio?'block':'none'}} onClick={()=> setIsBio(!isBio)}/>
                                                <FontAwesomeIcon icon={faSave} className="edit-icon me-3 " style={{display:isBio?'none':'block'}} onClick={updateBio}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                {/* Skills  */}
                                <Row>
                                    <h4 className="mb-0 mt-2 project-count-heading heading20">Skills</h4>
                                    <hr className="red-line  border-bottom"/>
                                    <div className="border-gry"></div>
                                    <Col xs={12} sm={12} md={12} className="mt-3" >
                                            {(user.skills.length > 0)? (
                                            <Row style={{display: isSkill?'': 'none'}}>
                                                <Col xs={11} sm={11} xl={11}>
                                                    {user.skills.map((item, i) => (
                                                        <Badge className="me-1 mb-3 bg-light-red">{item}</Badge>
                                                    ))}
                                                </Col>
                                                <Col xs={1} sm={1} xl={1}>
                                                    <FontAwesomeIcon icon={faPencilAlt} className="edit-icon me-3 " style={{display:!isSkill?'none':'block'}} onClick={()=> setIsSkill(!isSkill)}/>
                                                </Col>
                                            </Row>
                                            ) : (
                                                <Row style={{display: isSkill?'': 'none'}}>
                                                    <Col xs={11} sm={11} xl={11}>
                                                        <p className="proposal-post-date line-height-1">
                                                            No Skill Found
                                                        </p>
                                                    </Col>
                                                    <Col xs={1} sm={1} xl={1}>
                                                        <FontAwesomeIcon icon={faPlusCircle} className="edit-icon me-3 " style={{display:!isSkill?'none':'block'}} onClick={()=> setIsSkill(!isSkill)}/>
                                                    </Col>
                                                </Row>
                                            )}
                                            {/* <Col xs={1} sm={1} xl={1}>
                                                <FontAwesomeIcon icon={faPencilAlt} className="edit-icon me-3 " style={{display:!isSkill?'none':'block'}} onClick={()=> setIsSkill(!isSkill)}/>
                                            </Col>
                                        </Row> */}
                                        <Row style={{display: isSkill?'none': 'block'}}>
                                            <Col xs={12} sm={12} xl={12}>
                                                <Form.Label>Skill</Form.Label>
                                                <InputGroup className="input-group-merge">
                                                    {/* <Form.Control type="text" placeholder="Developers, 1 Week, 2500$" className=" project-count-subheading border-40" /> */}
                                                    <Select
                                                        defaultValue={[0]}
                                                        placeholder="Web Development, Java"
                                                        isMulti
                                                        options={options}
                                                        className="basic-multi-select form-control project-count-subheading border-40 input-border-40-focus"
                                                        value={selectedOptions}
                                                        onChange={handleSelect}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col xs={4} sm={4} xl={4} className="mt-3 offset-8">
                                                <Button type="submit" className="m-1 personal-tab-update" onClick={skillUpdate}>Update</Button>
                                                <Button className=" m-1 personal-tab-cancelBtn" onClick={()=> setIsSkill(!isSkill)}>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* work History */}
                    {/* <Col xs={12} xl={12} md={11} className="mb-2 mt-3 p-4">
                        <h4 className="mb-0 project-count-heading heading20">Work History and Feedback</h4>
                        <hr className="red-line  border-bottom"/>
                    <Tab.Container defaultActiveKey="completed">
                        <Row>
                        <Col lg={12}>
                            <Nav fill variant="pills" className="nav-tabs">
                            <Nav.Item className="btn-no-flex">
                                <Nav.Link eventKey="completed" className="mb-sm-3 mb-md-0 project-track-btn">
                                    Completed
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="btn-no-flex">
                                <Nav.Link eventKey="in_progress" className="mb-sm-3 mb-md-0 project-track-btn">
                                    In Progress
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                            <Tab.Pane eventKey="completed" className="py-4">
                                <Col xs={12}  className="mb-4 mt-4">
                                    <h6 className="job-title mt-2">Full-Stack Developer needed for a social networking web application using SwiftUI and Firebase</h6>
                                    <div className="text-muted small">
                                        <p className="proposal-post-date line-height-1 font-w-400 text-dark-gry">
                                            Jul 14, 2023 - Aug 1, 2023
                                        </p>
                                        <p className="proposal-post-date line-height-1">
                                            No feedback given
                                        </p>
                                        <p className="proposal-post-date line-height-1 font-w-400 text-dark-gry">
                                            $200.00
                                        </p>
                                    </div>
                                </Col>
                            </Tab.Pane>
                            <Tab.Pane eventKey="in_progress" className="py-4">
                            <Col xs={12}  className="mb-4 mt-4">
                                    <h6 className="job-title mt-2">Full-Stack Developer needed for a social networking web application using SwiftUI and Firebase</h6>
                                    <div className="text-muted small">
                                        <p className="proposal-post-date line-height-1 font-w-400 text-dark-gry">
                                            Jul 14, 2023 - Aug 1, 2023
                                        </p>
                                        <p className="proposal-post-date line-height-1">
                                            No feedback given
                                        </p>
                                        <p className="proposal-post-date line-height-1 font-w-400 text-dark-gry">
                                            $200.00
                                        </p>
                                    </div>
                                </Col>
                            </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        </Row>
                    </Tab.Container>
                    </Col> */}
                </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <Card border="light" className="shadow-sm">
                    <Card.Body>
                      <ProfileAlertNotice />
                      <Col xs={12} xl={12} md={12}>
                        <h5 className="project-count-heading font-encode">Hours per week</h5>
                        <p className="fund-subheading text-dark-gry line-height-1">More than 30 hrs/week</p>
                        <p className="fund-subheading text-dark-gry line-height-1">Response Time 24 Hours </p>
                      </Col>
                      <Col xs={12} xl={12} md={12} className="mt-5">
                        <h5 className="project-count-heading font-encode">Verification</h5>
<<<<<<< HEAD
                        <p className="fund-subheading line-height-1">Phone Number: </p>
                        <p className="fund-subheading line-height-1">Email: <span className="text-dark-gry">Verified</span>
=======
                        <p className="fund-subheading font-600 line-height-1">Phone Number: </p>
                        <p className="fund-subheading font-600 line-height-1">Email: <span className="text-dark-gry">Verified</span>
>>>>>>> 87384ac33a120095178b2538ecca0558f774d7f0
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M11.6071 0H1.39286C0.623594 0 0 0.623594 0 1.39286V11.6071C0 12.3764 0.623594 13 1.39286 13H11.6071C12.3764 13 13 12.3764 13 11.6071V1.39286C13 0.623594 12.3764 0 11.6071 0ZM11.6071 11.6071H1.39286V1.39286H11.6071V11.6071ZM10.5664 4.59283L5.55828 9.5608C5.42175 9.69623 5.20128 9.69536 5.06585 9.55883L2.43158 6.90323C2.29615 6.7667 2.29702 6.54623 2.43358 6.41077L3.09284 5.75682C3.22937 5.6214 3.44985 5.62227 3.58527 5.75883L5.32031 7.50793L9.42204 3.43917C9.55857 3.30374 9.77905 3.30461 9.91447 3.44114L10.5684 4.10037C10.7038 4.23693 10.703 4.4574 10.5664 4.59283Z" fill="#1680FB"/>
                            </svg>
                        </p>
                      </Col>
                      <Col xs={12} xl={12} md={12} className="mt-5">
                        <h5 className="project-count-heading font-encode">Languages</h5>
                        <p className="fund-subheading line-height-1">English <span className="text-dark-gry">Fluent</span></p>
                        <p className="fund-subheading line-height-1">Urdu <span className="text-dark-gry">Native</span></p>
                      </Col>

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
export default Profile;
