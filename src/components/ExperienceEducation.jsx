import React from "react"
import { Row, Col, Modal, Button, Form } from "react-bootstrap"

class ExperienceEducation extends React.Component {

    state = {
        modalShow: false

    }

    handleShow = () => {
        console.log("hellow")
        this.setState({ modalShow: !this.state.modalShow })

    }


    render() {

        return (
            <>
                <Col className="mt-4 mb-4 section-outer section-inner">
                    <div className="d-flex mb-2 justify-content-between">
                        <h6>Experience</h6>
                        <svg onClick={this.handleShow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                        </svg>
                    </div>
                    <div className="d-flex mb-3 justify-content-between">
                        <div className="d-flex justify-content-between">
                            <img className="medium-logo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHMzEZdUDzWLw/company-logo_100_100/0/1607610827235?e=1628726400&v=beta&t=2DyogaeKHlEJ4FJcFv2DpjEkXpRJ325JlCvt6KMJI_E"></img>
                            <div className="ms-3">
                                <h6>Finance Manager</h6>
                                <p>Ministry of Housing, Communities and Local Government</p>
                                <span>Jan 2020 – Present . 1 yr 5 mos</span>

                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                            </svg>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="d-flex mb-2 justify-content-between">
                        <h6>Education</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                        </svg>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img className="medium-logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1628726400&v=beta&t=MJ7aXvNHbhY_WijBVVZztYsa9YUDftiM3CU5ObSMYtk"></img>
                            <div className="ms-3">
                                <h6>Harvard University</h6>
                                <p>CS50: Introduction to Computer Science, Computer Science</p>
                                <span>2021 - 2021 </span>

                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                            </svg>
                        </div>
                    </div>

                </Col>

                {this.state.modalShow && <UpdateExperienceModal show={this.state.modalShow} hide={() => { this.setState({ modalShow: false }) }} />}


            </>
        )
    }
}

class UpdateExperienceModal extends React.Component {


    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.hide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title *</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Retail Sales Manager"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Company *</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Microsoft" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Ex: London, United Kingdom" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text-area"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="month"/>
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hide} >
                        Close
                     </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>)
    }
}

export default ExperienceEducation