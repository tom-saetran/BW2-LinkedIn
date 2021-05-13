import React from "react"
import { Button, Row, Col, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap"
import { withRouter } from "react-router"

class ProfileJumbotron extends React.Component {
    state = {
        data: null
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        const id = this.props.match.params.id || (this.props.me && this.props.me._id)
        if (id && !this.state.data) this.setState({ data: await this.props.crud.user.get(id) })
    }

    render() {
        return (
            <>
                <Col className="mt-4 section-outer px-0">
                    <Col md={12} className="banner-parent">
                        <img className="img-fluid" src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg" alt="banner"></img>
                        <img className="img-overlay img-fluid rounded-circle" src="https://i.pinimg.com/originals/3d/99/a7/3d99a7e6cb285c7f7cf5e87131e45c92.jpg" alt="profilePic"></img>
                        <div className="d-flex justify-content-center align-items-center img-overlay2 overlay-2-bg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                <path d="M10 9a2 2 0 11-2-2 2 2 0 012 2zm5-2.5V14H1V6.5A2.5 2.5 0 013.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0115 6.5zM11 9a3 3 0 10-3 3 3 3 0 003-3z"></path>
                            </svg>
                        </div>
                    </Col>

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
                                <p>Finance Manager at Ministry of Housing, Communities and Local Government</p>

                                <div className="d-flex">
                                    <span>London, England, United Kingdom</span>
                                    <span className="ms-2">·</span>
                                    <span className="ms-2">
                                        <a href="www.google.com">Contact info</a>
                                    </span>
                                </div>

                                <div className="">
                                    <DropdownButton className="my-2 btn-1 button-border" size="sm" variant="primary" as={ButtonGroup} title="Open to" id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1">Finding a new job</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Hiring</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton className="my-2 ms-2 button-border" size="sm" as={ButtonGroup} variant="outline-dark" title="Add profile section" id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                    </DropdownButton>
                                    <Button style={{ borderRadius: "25px", padding: "4px 16px" }} size="sm" className="ms-2 my-2" variant="outline-dark">
                                        More ...
                                    </Button>
                                    {/* #0a66c2 background color from linnked in */}
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="d-flex">
                                    <img className="small-logo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHMzEZdUDzWLw/company-logo_100_100/0/1607610827235?e=1628726400&v=beta&t=2DyogaeKHlEJ4FJcFv2DpjEkXpRJ325JlCvt6KMJI_E" alt="company-logo"></img>
                                    <span className="ms-2 text-truncate">Ministry of Housing Communities and local government</span>
                                </div>
                                <div className="mt-2 d-flex">
                                    <img className="small-logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1628726400&v=beta&t=MJ7aXvNHbhY_WijBVVZztYsa9YUDftiM3CU5ObSMYtk" alt=""></img>
                                    <p className="ms-2 text-truncate">Harvard University</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div style={{ position: "relative", borderRadius: "10px", padding: "12px 30px 12px 12px", border: "2px dashed rgb(220,230,241)" }} className=" my-2">
                                    <a href="www.google.com">Show recruiters you are open to work - you control who sees this.</a>
                                    <h6>Get Started</h6>
                                    <svg style={{ position: "absolute", top: "10%", right: "2%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                    </svg>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div style={{ position: "relative", borderRadius: "10px", padding: "12px 30px 12px 12px", border: "2px dashed rgb(220,230,241)" }} className="my-2">
                                    <a href="www.google.com">Show recruiters you are open to work - you control who sees this.</a>
                                    <h6>Get Started</h6>
                                    <svg style={{ position: "absolute", top: "10%", right: "2%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                    </svg>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </>
        )
    }
}

export default withRouter(ProfileJumbotron)
