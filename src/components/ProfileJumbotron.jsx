import React from "react"
import { Container, Button, Row, Col, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap"

class ProfileJumbotron extends React.Component {
    render() {
        return (

            <>

                <Col className="section-outer px-0">

                    <Col md={12} className="banner-parent">

                        <img className="img-fluid" src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg" alt="banner">

                        </img>
                        <img className="img-overlay img-fluid rounded-circle" src="https://i.pinimg.com/originals/3d/99/a7/3d99a7e6cb285c7f7cf5e87131e45c92.jpg" alt="profilePic"></img>
                        <div  className="d-flex justify-content-center align-items-center img-overlay2 overlay-2-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M10 9a2 2 0 11-2-2 2 2 0 012 2zm5-2.5V14H1V6.5A2.5 2.5 0 013.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0115 6.5zM11 9a3 3 0 10-3 3 3 3 0 003-3z"></path>
                        </svg>
                        </div>
                    </Col>
                    {/* <Row style={{position: "relative", top: "-45px"}}>
               <Col md={{span: 2, offset: 1}}>
     
               </Col>
               </Row> */}


                    <Col className=" section-inner">

                        <Row>
                        <Col className="d-flex mb-3 justify-content-end">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                            </svg>
                        </Col>
                        </Row>
                        <Row>
                            <Col className="pl-5" md={8}>
                                <h5>Kaiwan Kadir</h5>
                                <p>
                                    Finance Manager at Ministry of Housing, Communities and Local Government
                                </p>

                                <div className="d-flex">
                                    <span>London, England, United Kingdom</span>
                                    <span className="ms-2">.</span>
                                    <span className="ms-2"><a href="www.google.com">Contact info</a></span>
                                </div>

                                <div className="d-flex mt-2">
                                    <DropdownButton className="button-border" size="sm" variant="primary" as={ButtonGroup} title="Open to" id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton className="ms-2 button-border" as={ButtonGroup} variant="outline-dark" title="Add profile section" id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                    </DropdownButton>
                                    <Button style={{borderRadius: "25px"}} className="ms-2" variant="outline-dark">More ...</Button>
                                    {/* #0a66c2 background color from linnked in */}
                                </div>

                            </Col>
                            <Col  md={4}>
                                <div className="d-flex" >

                                    <img className="small-logo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHMzEZdUDzWLw/company-logo_100_100/0/1607610827235?e=1628726400&v=beta&t=2DyogaeKHlEJ4FJcFv2DpjEkXpRJ325JlCvt6KMJI_E">
                                    </img>
                                    <span className="ms-2 text-truncate">
                                        Ministry of Housing Communities and local government
                            </span>
                                </div>
                                <div className="mt-2 d-flex" >

                                    <img className="small-logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1628726400&v=beta&t=MJ7aXvNHbhY_WijBVVZztYsa9YUDftiM3CU5ObSMYtk">
                                    </img>
                                    <p className="ms-2 text-truncate" >
                                        Harvard University
                            </p >
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col className="show-recruiters" >
                        <Row>

                            <Col md={6}>
                                <div style={{ borderRadius: "10px", padding: "8px", border: "2px dashed rgb(220,230,241)" }} className="my-2 mx-2 "><a href="www.google.com">Show recruiters you are open to work - you control who sees this.</a></div>

                            </Col>
                            <Col md={6}>
                                <div style={{ borderRadius: "10px", padding: "8px", border: "2px dashed rgb(220,230,241)" }} className="my-2 mx-2 "><a href="www.google.com">Show recruiters you are open to work - you control who sees this.</a></div>
                            </Col>
                        </Row>
                    </Col>
                </Col>


            </>
        )
    }
}

export default ProfileJumbotron
