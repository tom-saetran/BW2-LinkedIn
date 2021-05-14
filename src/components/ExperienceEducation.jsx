import React from "react"
import { Col, Modal, Button, Form } from "react-bootstrap"
import { withRouter } from "react-router-dom"

// kai token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhOGQxZGRmY2NjNTAwMTVhNmJiY2QiLCJpYXQiOjE2MjA3NDE0MDYsImV4cCI6MTYyMTk1MTAwNn0.QNqO9fHDHOKv1VoPJfJInf1UQF10jMz6AZtfBnSi8Os
// 609a8d1ddfccc50015a6bbcd

class ExperienceEducation extends React.Component {
    state = {
        addModalShow: false,
        updateModalshow: false,
        experiences: null
    }

    handleShow = () => {
        this.setState({ addModalShow: !this.state.addModalShow })
    }
    handleUpdateShow = () => {
        this.setState({ updateModalShow: !this.state.updateModalShow })
    }

    render() {
        return (
            <>
                <Col className="mt-4 mb-4 section-outer section-inner">
                    <div className="d-flex mb-2 justify-content-between">
                        <h6>Experience</h6>
                        <svg onClick={this.handleShow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                        </svg>
                    </div>

                    {this.props.exp !== null &&
                        this.props.exp.length > 0 &&
                        this.props.exp.map((experience, index) => {
                            return (
                                <div key={"experience" + index} className="d-flex mb-3 justify-content-between">
                                    <div className="d-flex justify-content-between">
                                        <img className="medium-logo" src={experience.image ? experience.image : "https://via.placeholder.com/200x200?text=Profile+Picture"} alt="" />
                                        <div className="ms-3">
                                            <h6>{experience.role + " at " + experience.company}</h6>
                                            <p className="mb-1">{experience.description}</p>
                                            {new Date(experience.startDate).toLocaleString("default", { month: "long" }) + " " + new Date(experience.startDate).getFullYear()}
                                            {experience.stopDate ? new Date(experience.startDate).getFullYear() : " - Current"}
                                        </div>
                                    </div>
                                    <div>
                                        <svg onClick={this.handleUpdateShow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                        </svg>
                                    </div>
                                </div>
                            )
                        })}

                    <hr></hr>

                    <div className="d-flex mb-2 justify-content-between">
                        <h6>Education</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                        </svg>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img className="medium-logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1628726400&v=beta&t=MJ7aXvNHbhY_WijBVVZztYsa9YUDftiM3CU5ObSMYtk" alt="" />
                            <div className="ms-3">
                                <h6>Harvard University</h6>
                                <p>CS50: Introduction to Computer Science, Computer Science</p>
                                <span>2021 - 2021 </span>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                            </svg>
                        </div>
                    </div>
                </Col>

                {this.state.addModalShow && (
                    <AddExperienceModal
                        show={this.state.addModalShow}
                        post={this.props.crud.experiences.post}
                        id={async () => {
                            await this.props.exp[0]._id
                        }}
                        hide={() => {
                            this.setState({ addModalShow: false })
                        }}
                    />
                )}
                {this.state.updateModalShow && (
                    <UpdateExperienceModal
                        show={this.state.updateModalShow}
                        put={this.props.crud.experiences.put}
                        id={async () => {
                            await this.props.exp[0]._id
                        }}
                        hide={() => {
                            this.setState({ updateModalShow: false })
                        }}
                    />
                )}
            </>
        )
    }
}

class AddExperienceModal extends React.Component {
    state = {
        role: "CTO",
        company: "Strive School",
        startDate: "2019-06-16",
        endDate: "2019-06-16", //could be null
        description: "Doing stuff here and there",
        area: "Berlin"
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title *</Form.Label>
                            <Form.Control value={this.state.role} onChange={e => this.setState({ role: e.target.value })} type="text" placeholder="Ex: Retail Sales Manager" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Company *</Form.Label>
                            <Form.Control value={this.state.company} onChange={e => this.setState({ company: e.target.value })} type="text" placeholder="Ex: Microsoft" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control value={this.state.area} onChange={e => this.setState({ area: e.target.value })} type="text" placeholder="Ex: London, United Kingdom" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={this.state.description} onChange={e => this.setState({ description: e.target.value })} type="text-area" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" />
                            <Form.Text>If you still work here leave date blank</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={async () => this.props.post(await this.props.id, this.state)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

class UpdateExperienceModal extends React.Component {
    state = {
        role: "CTO",
        company: "Strive School",
        startDate: "2019-06-16",
        endDate: "2019-06-16", //could be null
        description: "Doing stuff here and there",
        area: "Berlin"
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Update experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title *</Form.Label>
                            <Form.Control value={this.state.role} onChange={e => this.setState({ role: e.target.value })} type="text" placeholder="Ex: Retail Sales Manager" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Company *</Form.Label>
                            <Form.Control value={this.state.company} onChange={e => this.setState({ company: e.target.value })} type="text" placeholder="Ex: Microsoft" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control value={this.state.area} onChange={e => this.setState({ area: e.target.value })} type="text" placeholder="Ex: London, United Kingdom" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={this.state.description} onChange={e => this.setState({ description: e.target.value })} type="text-area" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" />
                            <Form.Text>If you still work here leave date blank</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={async () => this.props.put(await this.props.id, await this.state)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default withRouter(ExperienceEducation)
