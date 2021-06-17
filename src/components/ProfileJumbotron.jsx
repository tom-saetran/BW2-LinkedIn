import React, { Component } from "react";
import { Button, Row, Col, DropdownButton, Dropdown, ButtonGroup, Spinner, Form, Modal, Card, ButtonToolbar } from "react-bootstrap";
import { withRouter } from "react-router";

class ProfileJumbotron extends React.Component {
    state = {
        showProfileModal: false,
        user: ""
    };
    componentDidMount() {
        this.setState({ user: this.props.user });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.props.user._id !== prevProps.user._id) {
            console.log("I am not here");
            this.setState({ user: this.props.user });
        }
        /* if (prevState.showProfileModal !== this.state.closeModal) {
        } */
    }

    render() {
        return (
            <>
                <Col style={{ overflow: "hidden" }} className="section-outer px-0">
                    <Col md={12} className="banner-parent">
                        <img className="img-fluid" src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg" alt="banner"></img>
                        {this.state.user && <img className="img-overlay center-profile-image img-fluid rounded-circle" src={this.state.user.image || ""} alt="Headshot"></img>}
                        <div className="d-flex justify-content-center align-items-center img-overlay2 overlay-2-bg" id="profile-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                data-supported-dps="16x16"
                                fill="currentColor"
                                className="mercado-match"
                                width="16"
                                height="16"
                                focusable="false"
                            >
                                <path d="M10 9a2 2 0 11-2-2 2 2 0 012 2zm5-2.5V14H1V6.5A2.5 2.5 0 013.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0115 6.5zM11 9a3 3 0 10-3 3 3 3 0 003-3z"></path>
                            </svg>
                        </div>
                    </Col>
                    {this.state.user ? (
                        <Col className=" section-inner">
                            <Row>
                                <Col className="d-flex mb-3 justify-content-end" onClick={() => this.setState({ showProfileModal: true })}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        data-supported-dps="24x24"
                                        fill="currentColor"
                                        className="mercado-match"
                                        width="24"
                                        height="24"
                                        focusable="false"
                                    >
                                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                    </svg>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pl-5" md={8}>
                                    <h5>
                                        {this.state.user.name} {this.state.user.surname}
                                    </h5>
                                    <p>{this.state.user.bio}</p>
                                    <div className="d-flex">
                                        <span>{this.state.user.area}</span>
                                        <span className="mx-2">·</span>
                                        <span>{this.state.user.title}</span>
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
                                {this.state.user && (
                                    <Col md={4}>
                                        {this.props.exp &&
                                            this.props.exp.slice(0, 2).map((experience) => (
                                                <div key={experience._id} className="d-flex">
                                                    <img className="small-logo" src={experience.image ? experience.image : "https://via.placeholder.com/200x200?text=EXP"} alt="company-logo"></img>
                                                    <span className="ms-2 text-truncate">{experience.company}</span>
                                                </div>
                                            ))}
                                    </Col>
                                )}
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <div
                                        style={{
                                            position: "relative",
                                            borderRadius: "10px",
                                            padding: "12px 30px 12px 12px",
                                            border: "2px dashed rgb(220,230,241)"
                                        }}
                                        className=" my-2"
                                    >
                                        <h6 href="www.google.com">Show recruiters you are open to work - you control who sees this.</h6>
                                        <a style={{ textDecoration: "none" }} href="/">
                                            Get Started
                                        </a>
                                        <svg
                                            style={{ position: "absolute", top: "10%", right: "2%" }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            data-supported-dps="16x16"
                                            fill="currentColor"
                                            className="mercado-match"
                                            width="16"
                                            height="16"
                                            focusable="false"
                                        >
                                            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                        </svg>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div
                                        style={{
                                            position: "relative",
                                            borderRadius: "10px",
                                            padding: "12px 30px 12px 12px",
                                            border: "2px dashed rgb(220,230,241)"
                                        }}
                                        className="my-2"
                                    >
                                        <h6 href="www.google.com">Show recruiters you are open to work - you control who sees this.</h6>
                                        <a style={{ textDecoration: "none" }} href="/">
                                            Get Started
                                        </a>
                                        <svg
                                            style={{ position: "absolute", top: "10%", right: "2%" }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            data-supported-dps="16x16"
                                            fill="currentColor"
                                            className="mercado-match"
                                            width="16"
                                            height="16"
                                            focusable="false"
                                        >
                                            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                        </svg>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    ) : (
                        <div className="p-5 text-center">
                            <Spinner variant="secondary" animation="border" />
                        </div>
                    )}
                </Col>
                <EditProfile
                    user={this.props.user}
                    update={async () => this.setState({ user: await this.props.crud.profile.get(this.state.user._id) })}
                    crud={this.props.crud}
                    closeModal={() => this.setState({ showProfileModal: false })}
                    showModal={this.state.showProfileModal}
                />
            </>
        );
    }
}

export default withRouter(ProfileJumbotron);

export class EditProfile extends Component {
    state = {
        user: null,
        showModal: false,
        profileImage: null,
        sending: false,
        validated: false
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.showModal !== prevProps.showModal /* || (this.props.showModal !== prevProps.showModal && prevProps.user) */)
            this.setState({ user: this.props.user, showModal: this.state.showModal });
    }

    handleProfileChange(e) {
        this.setState({ user: { ...this.state.user, [e.target.id]: e.target.value } });
    }

    handleProfileImage(e) {
        const files = e.target.files[0];
        this.setState({ profileImage: files });
    }

    /*   async handleProfileSubmit() {
        let values = Object.values(this.state.user);

        let response = this.props.crud.profile.put(this.state.user._id, this.state.user);
        if (response) console.log("Data posted");
        else alert("Data not posted");
    } */

    handleSubmit = async (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            await this.handleSend();
            this.props.closeModal();
            this.props.update();
            this.reset();
        }
        /*  setValidated(true); */
    };

    reset = () => {
        this.setState({ profileImage: null });
    };

    handleSend = async () => {
        if (!this.state.sending) {
            this.setState({ sending: true });
            const result = await this.props.crud.profile.put(this.state.user._id, this.state.user);
            if (result && this.state.profileImage) {
                let formData = new FormData();
                formData.append("image", this.state.profileImage);
                await this.props.crud.profile.upload(this.state.user._id, formData);
            }
            this.setState({ sending: false });
        }
    };

    render() {
        const user = this.state.user;

        return user ? (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Form noValidate validated={this.state.validated} onSubmit={(e) => this.handleSubmit(e)}>
                    <Card.Header className="text-center text-dim py-2 bg-white">Edit </Card.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Text className="pl-1 text-dim">Name</Form.Text>
                            <Form.Control
                                id={"name"}
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={user.name}
                                onChange={(e) => this.handleProfileChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="pl-1 text-dim">Surname</Form.Text>
                            <Form.Control
                                id={"surname"}
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={user.surname}
                                onChange={(e) => this.handleProfileChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="pl-1 text-dim">Username</Form.Text>
                            <Form.Control
                                id={"username"}
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={user.title}
                                onChange={(e) => this.handleProfileChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="pl-1 text-dim">Title</Form.Text>
                            <Form.Control
                                id={"title"}
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={user.title}
                                onChange={(e) => this.handleProfileChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="pl-1 text-dim">Bio</Form.Text>
                            <Form.Control
                                id={"bio"}
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={user.bio}
                                onChange={(e) => this.handleProfileChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="pl-1 text-dim">Email</Form.Text>
                            <Form.Control
                                id={"email"}
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={user.email}
                                onChange={(e) => this.handleProfileChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="pl-1 text-dim">Area</Form.Text>
                            <Form.Control
                                id={"area"}
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={user.area}
                                onChange={(e) => this.handleProfileChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="image" onChange={(e) => this.handleProfileImage(e)} files={this.state.blogPostCover} label="Profile Image" />
                        </Form.Group>
                    </Modal.Body>
                    <div className="d-flex justify-content-end pb-3 pr-3">
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button className="card-border rounded text-dim no-active-outline" variant="white" type="submit">
                                    Send
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Form>
            </Modal>
        ) : (
            <></>
        );
    }
}
