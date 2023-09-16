
import React, {useCallback, useState} from "react";
import { Col, Row, Card, Button, Form, InputGroup } from '@themesberg/react-bootstrap';
import { useHistory} from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import cogoToast from 'cogo-toast';
import {useDropzone} from 'react-dropzone';
import Select from 'react-select';

const user = JSON.parse(localStorage.getItem('user'));

const options = [
    { value: 'development', label: 'Web Develoment' },
    { value: 'designing', label: 'Designing' },
    { value: 'java', label: 'Java' },
    { value: 'block-chain', label: 'Block Chain' }
  ]
const categoryArr = [
    {value: 'Select Category', label: 'Select Category'},
    {value: 'Development', label: 'Development'},
    {value: 'UI/UX', label: 'UI/UX'},
    {value: 'Block Chain', label: 'Block Chain'},
]

const priceTypeArr = [
    {value: 'Select Price Type', label: 'Select Price Type'},
    {value: 'Fixed', label: 'Fixed'},
    // {value: 'Hourly', label: 'Hourly'},
]
const estimateTimeArr = [
    {value: 'Select a duration', label: 'Select a duration'},
    {value: 'More than 6 Months', label: 'More than 6 Months'},
    {value: '3 to 6 months', label: '3 to 6 months'},
    {value: '1 to 3 months', label: '1 to 3 months'},
    {value: 'less than 1 month', label: 'less than 1 month'},
]

const PostJob = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(categoryArr[0].value);
    const [price, setPrice] = useState("");
    const [priceType, setPriceType] = useState("");
    const [selectedOptions, setSelectedOptions] = useState();
    const [specialty, setSpecialty] = useState("");
    const [estimateTime, setEstimateTime] = useState("");
    const [detail, setDetail] = useState("");
    const [document, setDocument] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);
    
    const history = useHistory();

    // Function triggered on selection
    const handleSelect = (data) => {
        setSelectedOptions(data);
    }


      const onDrop = useCallback(async (acceptedFiles) => {
        // You can perform actions with the acceptedFiles here, e.g., prepare for upload
        const file = acceptedFiles[0];
        var formdata = new FormData();
        formdata.append("documents", file, "[PROXY]");
        
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        setSubmitting(true);
        fetch("http://16.171.150.73/api/v1/UploadDocument", requestOptions)
          .then(response => response.text())
          .then(result => {
            let data = JSON.parse(result);
            if(data.success && data.data.length > 0) {
              data.data.forEach(dataItem => {
                setDocument({
                  "public_id": dataItem.publicId,
                  "url": dataItem.url,
                });
              })
              setSubmitting(false);
            }
            else{
              cogoToast.error("File Can't uploaded..!",{
                position: 'top-right',
                hideAfter: 3,
              });
              setSubmitting(false);
            }
          })
          .catch(error => {
              cogoToast.error(error.message,{
                position: 'top-right',
                hideAfter: 3,
              });
              setSubmitting(false);
          });
      }, []);
    
      const { getRootProps, getInputProps } = useDropzone({ onDrop, 
        accept: {
          // 'image/png': ['.png'],
          'text/pdf': ['.pdf'],
          'text/doc': ['.doc', '.docx'],
        } });

    const postJob = ()=>{
        try {
            let errorMsg = false;
            console.log(document);
            if(title === ""){
                cogoToast.error("Project Title Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                }); 
                errorMsg = true;   
            }
            if(category === ''){
                cogoToast.error("Select Category!",{
                    position: 'top-right',
                    hideAfter: 3,
                }); 
                errorMsg = true;   
            }
            if(price === ''){
                cogoToast.error("Project Budget Require!",{
                    position: 'top-right',
                    hideAfter: 3,
                });   
                errorMsg = true;    
            }
            if(priceType === ''){
                cogoToast.error("Project Budget Require!",{
                    position: 'top-right',
                    hideAfter: 3,
                }); 
                errorMsg = true;      
            }
            if(selectedOptions === undefined || selectedOptions.length < 1){
                cogoToast.error("Select atleast one skill!",{
                    position: 'top-right',
                    hideAfter: 3,
                });  
                errorMsg = true;     
            }
            if(specialty === ''){
                cogoToast.error("Specialty is Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });  
                errorMsg = true;     
            }
            if(estimateTime === undefined && estimateTime === ''){
                cogoToast.error("Estimate Time Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });  
                errorMsg = true;     
            }
            if(document === ''){
                cogoToast.error("Select Document!",{
                    position: 'top-right',
                    hideAfter: 3,
                });  
                errorMsg = true;     
            }
            if(detail === undefined && detail === ''){
                cogoToast.error("Project Detail Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });   
                errorMsg = true;    
            }
            if(!errorMsg){
                let skill = [];
                selectedOptions.forEach((item)=>{
                    skill.push(item.label);
                });
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
    
                let jobDetail = {title: title, category: category, budget: price, detail: detail, skills: skill, projectPdf: document, specialty: specialty, estimateTime: estimateTime, description: detail, postedBy: user._id, type: priceType};
                
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify(jobDetail),
                    redirect: 'follow'
                };
                console.log(user, "user", user._id)
                
                fetch(`http://16.171.150.73/api/v1/PostJob/${user._id}`, requestOptions)
                    .then(response => response.text())
                    .then((result) => {
                        let data = JSON.parse(result);
                        if(data.success) {
                            cogoToast.success(data.message,{
                              position: 'top-right',
                              hideAfter: 3,
                            });
                            history.push("/client-dashboard")
                          }
                          else{
                            cogoToast.error(data.message,{
                              position: 'top-right',
                              hideAfter: 3,
                            });
                          }
                    })
            }else{
                errorMsg = false;   
            }
            

        } catch (error) {
            cogoToast.error(error.message===`Cannot read properties of undefined (reading 'forEach')`?'Select atleast one skill! ':error.message,{
                position: 'top-right',
                hideAfter: 3,
              });
        }
    }

  return (
    
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={8} className="mb-4 offset-2">
        <h1 className="job-like-title submit-project-heading2">Add New Project</h1>
          <Card border="light" className="shadow-sm">
            <Card.Body>
                <Row>
                    <Col md={12} className="mb-3">
                        <Form.Group id="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control className="proposal-inputs" required type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="React Native Developer" />
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Select className="proposal-inputs" value={category} onChange={(e)=>setCategory(e.target.value)}>
                                {categoryArr.map((item, i) => (
                                    <option value={item.value} key={i}>
                                        {item.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control className="proposal-inputs" required type="number" placeholder="100" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="price">
                        <Form.Label>Price Type</Form.Label>
                        <Form.Select className="proposal-inputs" value={priceType} onChange={(e)=>setPriceType(e.target.value)}>
                            {priceTypeArr.map((item, i) => (
                                <option value={item.value} key={i}>
                                    {item.label}
                                </option>
                            ))}
                        </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group>
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
                                <p className="limit-drop-img">Enter skills for needed for project</p>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="specialty">
                            <Form.Label>Specialty</Form.Label>
                            <Form.Control className="proposal-inputs" required type="text" value={specialty} onChange={(e)=>setSpecialty(e.target.value)} placeholder="React Native" />
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="estimateTime">
                            <Form.Label>Estimate Time</Form.Label>
                            <Form.Select className="proposal-inputs" value={estimateTime} onChange={(e)=>setEstimateTime(e.target.value)}>
                                {estimateTimeArr.map((item, i) => (
                                    <option value={item.value} key={i}>
                                        {item.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="document">
                            <Form.Label>Add Document</Form.Label>
                            <section className="container">
                                <div {...getRootProps({className: 'dropzone submit-proposal-img'})}>
                                  <input {...getInputProps()} />
                                  <p className="mt-4 text-center proposal-post-date font-encode ">Drag or <span className="text-light-blue">upload</span> project file</p>
                                </div>
                              </section>
                            {/* <Form.Control required type="file"  onChange={selectFile} /> */}
                            <p className="limit-drop-img">Size of the Document should be Below 2MB</p>
                        </Form.Group>
                    </Col>
                    {/* <Col md={12} className="mb-3">
                        <ClientLinkInput />
                    </Col> */}
                    <Col xs={12} sm={12} md={12} className="mt-3">
                        {/* <Form.Group id="document"></Form.Group> */}
                        <Form.Label>Write Description of Projects</Form.Label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data=""
                            placeholder="Write Description of Projects"
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setDetail(data);
                            } }
                        />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-3 offset-8">
                      <Button disabled={isSubmitting} onClick={postJob} className="m-1 personal-tab-update">{isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}Submit Project</Button>
                    </Col>
                </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PostJob;