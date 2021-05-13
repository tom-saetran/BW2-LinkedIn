import React from "react"
import { Col, Modal, Button, Form, FormControl } from "react-bootstrap"

class AddPost extends React.Component {
    state = {
        postShow: false
    }

    handleShow = () => {
        this.setState({ postShow: !this.state.postShow })
    }

    render() {
        return (
            <Col xs={12} className="py-3 px-3 section-outer">
                <div className="d-flex align-items-center">
                    <img alt="" className="me-2" style={{ borderRadius: "50%", width: "48px", height: "48px" }} src="https://www.dailymoss.com/wp-content/uploads/2019/08/funny-profile-pic59.jpg"></img>
                    <Form className="flex-grow-1" inline>
                        <FormControl style={{ width: "100%", height: "48px", borderRadius: "35px" }} type="text" onClick={this.handleShow} placeholder="Start a post" className="flex-grow-1 mr-sm-2" />
                    </Form>
                </div>
                <div className="mt-3 d-flex justify-content-around">
                    <div className="d-flex align-items-center">
                        <svg style={{ color: "#70b5f9" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                        </svg>
                        <span className="ms-1 text-muted">Photo</span>
                    </div>

                    <div className="d-flex align-items-center">
                        <svg style={{ color: "#7fc15e" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                        </svg>
                        <span className="ms-1 text-muted">Video</span>
                    </div>

                    <div className="d-flex align-items-center">
                        <svg style={{ color: "#e7a33e" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                        </svg>
                        <span className="ms-1 text-muted ">Event</span>
                    </div>

                    <div className="d-flex align-items-center">
                        <svg style={{ color: "#f5987e" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                        </svg>
                        <span className="ms-1 text-muted">Write Article</span>
                    </div>
                </div>
                {this.state.postShow && <AddExperienceModal show={this.state.postShow} hide={() => this.setState({ postShow: false })} />}
            </Col>
        )
    }
}

export default AddPost

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
                    <Modal.Title>Create a post</Modal.Title>
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
                    <Button variant="primary" onClick={async () => this.props.post(await this.props.id, await this.state)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
