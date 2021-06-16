import React from "react"
import { Col, Modal, Button, Form, Card, ButtonToolbar, ButtonGroup, OverlayTrigger, Popover, InputGroup, Spinner } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"
import { withRouter } from "react-router-dom"
import uniqid from "uniqid"

class ExperienceEducation extends React.Component {
    state = {
        experiences: null
    }

    componentDidMount = async () => {
        this.setState({ experiences: await this.props.crud.experiences.getAll(this.props.match.params.id) })
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        if (_previousProps.match.params.id !== this.props.match.params.id)
            this.setState({ experiences: await this.props.crud.experiences.getAll(this.props.match.params.id) })
    }

    onUpdate = async () => {
        this.setState({ experiences: await this.props.crud.experiences.getAll(this.props.match.params.id) })
    }

    render() {
        return (
            <>
                <Col className="mt-4 mb-4 section-outer section-inner">
                    <div className="d-flex mb-2 justify-content-between">
                        <h6>Experience</h6>
                        <span title="Add New Experience" className="cursor-pointer">
                            <AddExperienceModal onUpdate={this.onUpdate} user={this.props.user} crud={this.props.crud} />
                        </span>
                    </div>

                    {this.state.experiences !== null &&
                        this.state.experiences.length > 0 &&
                        this.state.experiences.map((experience, index) => {
                            return (
                                <div key={"experience" + index} className="mb-3">
                                    <div className="d-flex">
                                        <img
                                            className="medium-logo mt-2 mr-2"
                                            src={experience.image ? experience.image : "https://via.placeholder.com/200x200?text=Experience"}
                                            alt=""
                                        />
                                        <div>
                                            <div>{experience.role + " at " + experience.company}</div>
                                            <p className="mb-1">{experience.description}</p>
                                            {new Date(experience.startDate).toLocaleString("default", { month: "long" }) +
                                                " " +
                                                new Date(experience.startDate).getFullYear()}
                                            {experience.endDate
                                                ? " - " +
                                                  new Date(experience.endDate).toLocaleString("default", { month: "long" }) +
                                                  " " +
                                                  new Date(experience.endDate).getFullYear()
                                                : " - Current"}
                                        </div>
                                        <div className="ml-auto">
                                            <span title="Edit this experience" className="cursor-pointer">
                                                <UpdateExperienceModal
                                                    onUpdate={this.onUpdate}
                                                    user={this.props.user}
                                                    crud={this.props.crud}
                                                    experience={experience}
                                                />
                                            </span>
                                            <span title="Remove this experience" className="cursor-pointer">
                                                <RemoveExperienceModal
                                                    onUpdate={this.onUpdate}
                                                    user={this.props.user}
                                                    crud={this.props.crud}
                                                    experience={experience}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    {/*
                    <hr />

                    <div className="d-flex mb-2 justify-content-between">
                        <h6>Education</h6>
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
                            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                        </svg>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img
                                className="medium-logo"
                                src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1628726400&v=beta&t=MJ7aXvNHbhY_WijBVVZztYsa9YUDftiM3CU5ObSMYtk"
                                alt=""
                            />
                            <div className="ms-3">
                                <h6>Harvard University</h6>
                                <p>CS50: Introduction to Computer Science, Computer Science</p>
                                <span>2021 - 2021 </span>
                            </div>
                        </div>
                        <div>
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
                        </div>
                    </div>*/}
                </Col>
            </>
        )
    }
}

const AddExperienceModal = props => {
    const [show, setShow] = React.useState(false)

    const [role, setRole] = React.useState("")
    const [company, setCompany] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [area, setArea] = React.useState("")
    const [startDate, setStartDate] = React.useState("")
    const [endDate, setEndDate] = React.useState("")

    const [validated, setValidated] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const [image, stageImage] = React.useState("")

    const inputRef = React.useRef(null)
    const selectImage = () => inputRef.current.click()
    const setImage = event => {
        event.preventDefault()
        event.stopPropagation()

        const image = event.target.files[0]
        stageImage(image)
    }

    const handleClose = () => setShow(false)

    const handleSubmit = async e => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            e.preventDefault()
            await handleSend()
            setShow(false)
            props.onUpdate()
            reset()
        }
        setValidated(true)
    }

    const reset = () => {
        setRole("")
        setCompany("")
        setDescription("")
        setArea("")
        setStartDate("")
        setEndDate("")
        stageImage(undefined)
    }

    const handleSend = async () => {
        const data = {
            role,
            company,
            description,
            area,
            startDate,
            endDate,
            user: props.user._id,
            username: props.user.username
        }

        if (!sending) {
            setSending(true)
            const result = await props.crud.experiences.post(props.user._id, data)
            if (result && image) {
                let formData = new FormData()
                formData.append("image", image)
                await props.crud.experiences.upload(props.user._id, formData, result._id)
            }
            setSending(false)
        }
    }

    return (
        <>
            <Button variant="white" onClick={() => setShow(true)}>
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
                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                </svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                    <Card.Header className="text-center text-dim py-2 bg-white">Add New</Card.Header>
                    <Modal.Body>
                        <Form.Group controlId="formRole">
                            <Form.Text className="pl-1 text-dim">Role</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={role}
                                onChange={e => setRole(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCompany">
                            <Form.Text className="pl-1 text-dim">Company</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Text className="pl-1 text-dim">Description</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                as="textarea"
                                rows={3}
                                required
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formArea">
                            <Form.Text className="pl-1 text-dim">Area</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={area}
                                onChange={e => setArea(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formStartDate">
                            <Form.Text className="pl-1 text-dim">Start Date</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="date"
                                required
                                value={startDate}
                                onChange={e => setStartDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEndDate">
                            <Form.Text className="pl-1 text-dim">End Date (if applicable)</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="date"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <div className="d-flex justify-content-between pb-3 pr-3">
                        <div>{image && <div className="pt-2 pl-3">Selected: {image.name}</div>}</div>
                        <ButtonToolbar>
                            <ButtonGroup className="mr-2 card-border rounded">
                                <Button className="pb-2 text-dim card-border-right no-active-outline" variant="white" onClick={selectImage}>
                                    <Icon.Image fill="dimgrey" />
                                    <input onChange={setImage.bind(this)} type="file" id="file" ref={inputRef} style={{ display: "none" }} />
                                </Button>
                                <EmojiPopOver />
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button className="card-border rounded text-dim no-active-outline" variant="white" type="submit">
                                    {sending ? <Spinner className="spinner" animation="border" /> : "Send"}
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

const UpdateExperienceModal = props => {
    const [show, setShow] = React.useState(false)

    const [role, setRole] = React.useState(props.experience.role)
    const [company, setCompany] = React.useState(props.experience.company)
    const [description, setDescription] = React.useState(props.experience.description)
    const [area, setArea] = React.useState(props.experience.area)
    const [startDate, setStartDate] = React.useState(new Date(props.experience.startDate).toISOString().substring(0, 10))
    const [endDate, setEndDate] = React.useState(props.experience.endDate ? new Date(props.experience.endDate).toISOString().substring(0, 10) : "")

    const [validated, setValidated] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const [image, stageImage] = React.useState("")

    React.useEffect(() => {
        setRole(props.experience.role)
    }, [props.experience.role])

    React.useEffect(() => {
        setCompany(props.experience.company)
    }, [props.experience.company])

    React.useEffect(() => {
        setDescription(props.experience.description)
    }, [props.experience.description])

    React.useEffect(() => {
        setArea(props.experience.area)
    }, [props.experience.area])

    React.useEffect(() => {
        setStartDate(props.experience.startDate ? new Date(props.experience.startDate).toISOString().substring(0, 10) : undefined)
    }, [props.experience.startDate])

    React.useEffect(() => {
        setEndDate(props.experience.endDate ? new Date(props.experience.endDate).toISOString().substring(0, 10) : undefined)
    }, [props.experience.endDate])

    const inputRef = React.useRef(null)
    const selectImage = () => inputRef.current.click()
    const setImage = event => {
        event.preventDefault()
        event.stopPropagation()

        const image = event.target.files[0]
        stageImage(image)
    }

    const handleClose = () => setShow(false)
    const handleSubmit = async e => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            e.preventDefault()
            await handleSend()
            setShow(false)
            props.onUpdate()
            reset()
        }
        setValidated(true)
    }

    const reset = () => {
        stageImage(undefined)
    }

    const handleSend = async () => {
        const data = {
            role,
            company,
            description,
            area,
            startDate,
            endDate,
            image: props.experience.image,
            user: props.user._id,
            username: props.user.username
        }

        if (!sending) {
            setSending(true)
            const result = await props.crud.experiences.put(props.user._id, data, props.experience._id)
            if (result && image) {
                let formData = new FormData()
                formData.append("image", image)
                await props.crud.experiences.upload(props.user._id, formData, props.experience._id)
            }
            setSending(false)
        }
    }

    return (
        <>
            <Button variant="white" onClick={() => setShow(true)}>
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
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                    <Card.Header className="text-center text-dim py-2 bg-white">Edit {props.experience.role}</Card.Header>
                    <Modal.Body>
                        <Form.Group controlId="formRole">
                            <Form.Text className="pl-1 text-dim">Role</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={role}
                                onChange={e => setRole(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCompany">
                            <Form.Text className="pl-1 text-dim">Company</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                as="textarea"
                                rows={2}
                                required
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Text className="pl-1 text-dim">Description</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formArea">
                            <Form.Text className="pl-1 text-dim">Area</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={area}
                                onChange={e => setArea(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Text className="pl-1 text-dim">Start Date</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="date"
                                required
                                value={startDate}
                                onChange={e => setStartDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Text className="pl-1 text-dim">End Date (if applicable)</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="date"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>

                    <div className="d-flex justify-content-between pb-3 pr-3">
                        <div>{image && <div className="pt-2 pl-3">Selected: {image.name}</div>}</div>
                        <ButtonToolbar>
                            <ButtonGroup className="mr-2 card-border rounded">
                                <Button className="pb-2 text-dim card-border-right no-active-outline" variant="white" onClick={selectImage}>
                                    <Icon.Image fill="dimgrey" />
                                    <input onChange={setImage.bind(this)} type="file" id="file" ref={inputRef} style={{ display: "none" }} />
                                </Button>
                                <EmojiPopOver />
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button className="card-border rounded text-dim no-active-outline" variant="white" type="submit">
                                    Send
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

const RemoveExperienceModal = props => {
    const [show, setShow] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const handleClose = () => setShow(false)

    const handleDelete = async () => {
        if (!sending) {
            setSending(true)
            await props.crud.experiences.delete(props.user._id, props.experience._id)
            setShow(false)
            props.onUpdate()
            setSending(false)
        }
    }

    return (
        <>
            <Button variant="white" onClick={() => setShow(true)}>
                <Icon.Trash className="mb-1" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="justify-content-center py-2 text-dim">This will remove the experience permanently!</Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <Card.Title as={"h6"}>{props.experience.role}</Card.Title>
                    </div>
                    <Card.Text>{props.experience.description}</Card.Text>
                </Modal.Body>
                <Modal.Footer className="justify-content-center align-items-end">
                    <Button className="card-border text-dim no-active-outline" variant="white" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="card-border text-danger no-active-outline" variant="white" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const EmojiPopOver = props => {
    return (
        <OverlayTrigger
            rootClose
            trigger="click"
            key={uniqid()}
            placement={"bottom"}
            overlay={
                <Popover id={"emojiPop_"}>
                    <Popover.Title className="bg-white" as="h3">
                        {"Emoji Panel"}
                    </Popover.Title>
                    <Popover.Content>
                        Add clickable emojis here. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nulla sapiente voluptatem voluptas dolorum
                        porro explicabo aspernatur pariatur sed eveniet placeat amet vero, ipsam expedita quidem odit adipisci quis facilis!
                    </Popover.Content>
                </Popover>
            }
        >
            {props.append ? (
                <InputGroup.Text as={Button} variant="white" className="bg-white card-border text-dim no-active-outline">
                    <Icon.EmojiLaughing />
                </InputGroup.Text>
            ) : (
                <Button className="pb-2 no-active-outline" variant="white">
                    <Icon.EmojiLaughing fill="dimgrey" />
                </Button>
            )}
        </OverlayTrigger>
    )
}

export default withRouter(ExperienceEducation)
